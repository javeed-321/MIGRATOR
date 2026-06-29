import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { load } from "cheerio";
import {
  isUrlAllowed,
  extractVersionPrefix,
  DOC_HREF_PATTERN,
  MAX_TITLE_LENGTH,
} from "./lib/constants";
import { fetchPage } from "./lib/fetcher";
import { parseNavbar, classifySite } from "./lib/navigation";
import {
  parseSidebarLookups,
  fetchSitemapUrls,
  buildProjectSections,
  buildSitemapSections,
  buildNoSitemapSections,
} from "./lib/extraction";
import type { ScrapeResult } from "./lib/types";
import { convertToDocAI, assignParentPaths } from "./lib/converter";

export async function POST(req: Request) {
  let body: { url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { url } = body;
  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "URL required" }, { status: 400 });
  }

  let baseUrl: string;
  let siteBase: string;
  try {
    const parsed = new URL(url);
    baseUrl = parsed.origin;
    const versionPrefix = extractVersionPrefix(parsed.pathname);
    siteBase = baseUrl + versionPrefix;
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (!isUrlAllowed(url)) {
    return NextResponse.json({ error: "URL not allowed" }, { status: 403 });
  }

  try {
    // Step 1: Fetch page HTML + sitemap in parallel
    const [html, sitemapGroups] = await Promise.all([
      fetchPage(url),
      fetchSitemapUrls(baseUrl),
    ]);

    if (!html) {
      return NextResponse.json(
        { error: "Failed to fetch URL" },
        { status: 502 }
      );
    }

    // Step 2: Detect navigation type
    const { tabs, projects } = parseNavbar(html, url);
    const navType = classifySite(tabs, projects);

    const out: ScrapeResult = {
      site: new URL(url).hostname,
      navType,
      tabs: tabs.map((t) => t.name),
      sections: [],
    };

    // Step 3: Build sections based on navigation type
    if (projects.size > 0) {
      out.navType = "projects";
      out.sections = await buildProjectSections(
        projects,
        siteBase,
        url,
        html
      );
    } else {
      out.navType = tabs.length > 0 ? "tabs" : "simple";
      const sidebarLookups = parseSidebarLookups(html);

      if (sitemapGroups.size > 0) {
        out.sections = await buildSitemapSections(
          sitemapGroups,
          sidebarLookups,
          tabs,
          siteBase,
          url
        );
      } else {
        out.sections = await buildNoSitemapSections(
          sidebarLookups,
          tabs,
          siteBase,
          html
        );
      }
    }

    // Step 4: Last resort — scan all <a> tags
    if (out.sections.length === 0) {
      out.navType = "fallback";
      const $ = load(html);
      const pages: ScrapeResult["sections"][0]["pages"] = [];
      const seenHrefs = new Set<string>();

      $("a").each((_, a) => {
        const href = $(a).attr("href") || "";
        const title = $(a).text().trim();
        if (!title || title.length > MAX_TITLE_LENGTH || seenHrefs.has(href))
          return;
        if (DOC_HREF_PATTERN.test(href)) {
          seenHrefs.add(href);
          pages.push({
            title,
            path: href,
            fullUrl: siteBase + href,
            level: 0,
            group: "",
            parentPath: "",
          });
        }
      });

      if (pages.length > 0) out.sections.push({ name: "all", pages });
    }

    for (const section of out.sections) {
      assignParentPaths(section.pages);
    }

    // Auto-save raw scrape + converted documentation.json
    const docJsonDir = path.join(process.cwd(), "doc-json");
    const convertedDir = path.join(docJsonDir, "converted");
    const safeName = out.site.replace(/[^a-zA-Z0-9.-]/g, "_");
    try {
      await mkdir(convertedDir, { recursive: true });
      const docAIConfig = convertToDocAI(out);
      await Promise.all([
        writeFile(
          path.join(docJsonDir, `${safeName}.json`),
          JSON.stringify(out, null, 2),
          "utf-8"
        ),
        writeFile(
          path.join(convertedDir, `${safeName}.documentation.json`),
          JSON.stringify(docAIConfig, null, 2),
          "utf-8"
        ),
      ]);
    } catch (writeErr) {
      console.error("[scraper] Failed to save:", writeErr);
    }

    return NextResponse.json(out);
  } catch (e) {
    console.error("[scraper] Unhandled error:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
