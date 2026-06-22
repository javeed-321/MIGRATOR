import type {
  Tab,
  ScrapeSection,
  SidebarLookups,
  SitemapGroups,
} from "../types";
import {
  normalizePrefix,
  slugToTitle,
  PREFIX_TO_SECTION,
} from "../constants";
import { fetchPage } from "../fetcher";
import { parseSidebarLookups } from "./index";
import { parseHtmlFallback } from "./html-fallback";

// ── Multi-Project Sites ───────────────────────────────────

export async function buildProjectSections(
  projects: Set<string>,
  baseUrl: string,
  currentUrl: string,
  currentHtml: string
): Promise<ScrapeSection[]> {
  const sections: ScrapeSection[] = [];

  const fetches: { name: string; url: string }[] = [];
  for (const p of projects) {
    for (const type of ["docs", "reference"]) {
      fetches.push({
        name: `${p}/${PREFIX_TO_SECTION[type] || type}`,
        url: `${baseUrl}/${p}/${type}`,
      });
    }
  }

  const htmlResults = await Promise.all(
    fetches.map(async (f) => {
      try {
        return {
          name: f.name,
          html: f.url === currentUrl ? currentHtml : await fetchPage(f.url),
        };
      } catch {
        return { name: f.name, html: null };
      }
    })
  );

  for (const { name, html } of htmlResults) {
    if (!html) continue;
    const pages = parseHtmlFallback(html, baseUrl);
    if (pages.length > 0) sections.push({ name, pages });
  }

  return sections;
}

// ── Sidebar-First + Sitemap Supplement ────────────────────

export async function buildSitemapSections(
  sitemapGroups: SitemapGroups,
  sidebarLookups: SidebarLookups,
  tabs: Tab[],
  baseUrl: string,
  currentUrl: string
): Promise<ScrapeSection[]> {
  const sections: ScrapeSection[] = [];

  let allowedPrefixes: string[];
  if (tabs.length > 0) {
    allowedPrefixes = tabs.map((t) => t.path.replace(/^\//, ""));
  } else {
    const segments = new URL(currentUrl).pathname.split("/").filter(Boolean);
    allowedPrefixes = [segments[0] || "docs"];
  }

  const normalizedAllowed = new Set(allowedPrefixes.map(normalizePrefix));

  const prefixesToProcess = [
    ...new Set([
      ...allowedPrefixes,
      ...[...sitemapGroups.keys()].filter(
        (p) => p !== "discuss" && normalizedAllowed.has(normalizePrefix(p))
      ),
    ]),
  ];

  // Pre-fetch tab pages that need sidebar data
  const tabFetches = new Map<string, Promise<string | null>>();
  for (const prefix of prefixesToProcess) {
    const normalized = normalizePrefix(prefix);
    const hasLookup =
      sidebarLookups.has(prefix) || sidebarLookups.has(normalized);
    if (!hasLookup && prefix !== "changelog") {
      const tabUrl = `${baseUrl}/${prefix}`;
      if (tabUrl !== currentUrl && !tabFetches.has(prefix)) {
        tabFetches.set(prefix, fetchPage(tabUrl).catch(() => null));
      }
      if (prefix !== normalized) {
        const altUrl = `${baseUrl}/${normalized}`;
        if (altUrl !== currentUrl && !tabFetches.has(normalized)) {
          tabFetches.set(normalized, fetchPage(altUrl).catch(() => null));
        }
      }
    }
  }

  const tabHtmlMap = new Map<string, string | null>();
  const entries = [...tabFetches.entries()];
  const results = await Promise.all(entries.map(([, promise]) => promise));
  entries.forEach(([key], i) => tabHtmlMap.set(key, results[i]));

  // Build sections — one per URL prefix
  const outputSections = new Set<string>();

  for (const prefix of prefixesToProcess) {
    const normalized = normalizePrefix(prefix);
    if (outputSections.has(normalized)) continue;
    outputSections.add(normalized);

    let lookup =
      sidebarLookups.get(prefix) ??
      sidebarLookups.get(normalized) ??
      new Map();

    if (lookup.size === 0 && prefix !== "changelog") {
      for (const key of [prefix, normalized]) {
        const tabHtml = tabHtmlMap.get(key);
        if (tabHtml && lookup.size === 0) {
          const tabLookups = parseSidebarLookups(tabHtml);
          lookup =
            tabLookups.get(prefix) ?? tabLookups.get(normalized) ?? lookup;
        }
      }
    }

    const pathPrefix = `/${prefix}`;
    const pages: ScrapeSection["pages"] = [];
    const includedSlugs = new Set<string>();

    // Sidebar pages FIRST (correct order + groups)
    if (lookup.size > 0) {
      const sorted = [...lookup.entries()].sort(
        (a, b) => a[1].order - b[1].order
      );
      for (const [slug, meta] of sorted) {
        includedSlugs.add(slug);
        pages.push({
          title: meta.title,
          path: `${pathPrefix}/${slug}`,
          fullUrl: `${baseUrl}${pathPrefix}/${slug}`,
          level: meta.level,
          group: meta.group,
        });
      }
    }

    // Append sitemap-only extras at the end
    const sitemapUrls = sitemapGroups.get(prefix) || [];
    for (const fullUrl of sitemapUrls) {
      try {
        const u = new URL(fullUrl);
        const slug = u.pathname
          .replace(`${pathPrefix}/`, "")
          .replace(/^\//, "");
        if (!slug || includedSlugs.has(slug)) continue;

        includedSlugs.add(slug);
        pages.push({
          title: slugToTitle(slug),
          path: u.pathname,
          fullUrl,
          level: 0,
          group: "",
        });
      } catch (err) {
        console.warn(
          `[scraper] Bad sitemap URL: ${fullUrl}`,
          err instanceof Error ? err.message : ""
        );
      }
    }

    if (pages.length > 0) {
      sections.push({
        name:
          PREFIX_TO_SECTION[prefix] ??
          PREFIX_TO_SECTION[normalized] ??
          prefix,
        pages,
      });
    }
  }

  return sections;
}

// ── No Sitemap Fallback ───────────────────────────────────

export async function buildNoSitemapSections(
  sidebarLookups: SidebarLookups,
  tabs: Tab[],
  baseUrl: string,
  currentHtml: string
): Promise<ScrapeSection[]> {
  const sections: ScrapeSection[] = [];

  if (sidebarLookups.size > 0) {
    const seenNormalized = new Set<string>();
    for (const [sectionKey, lookup] of sidebarLookups) {
      const normalized = normalizePrefix(sectionKey);
      if (seenNormalized.has(normalized)) continue;
      seenNormalized.add(normalized);

      const pathPrefix = `/${sectionKey}`;
      const entries = [...lookup.entries()].sort(
        (a, b) => a[1].order - b[1].order
      );
      const pages = entries.map(([slug, meta]) => ({
        title: meta.title,
        path: `${pathPrefix}/${slug}`,
        fullUrl: `${baseUrl}${pathPrefix}/${slug}`,
        level: meta.level,
        group: meta.group,
      }));
      if (pages.length > 0) {
        sections.push({
          name: PREFIX_TO_SECTION[sectionKey] || sectionKey,
          pages,
        });
      }
    }
  }

  if (sections.length === 0) {
    const pages = parseHtmlFallback(currentHtml, baseUrl);
    if (pages.length > 0) sections.push({ name: "Guides", pages });
  }

  const coveredPrefixes = new Set<string>();
  for (const s of sections) {
    for (const [prefix, name] of Object.entries(PREFIX_TO_SECTION)) {
      if (s.name === name) coveredPrefixes.add(normalizePrefix(prefix));
    }
  }

  const uncoveredTabs = tabs.filter((tab) => {
    const prefix = tab.path.replace(/^\//, "");
    return (
      !coveredPrefixes.has(normalizePrefix(prefix)) && prefix !== "discuss"
    );
  });

  if (uncoveredTabs.length > 0) {
    const tabResults = await Promise.all(
      uncoveredTabs.map(async (tab) => {
        try {
          return {
            name: tab.name,
            html: await fetchPage(`${baseUrl}${tab.path}`),
          };
        } catch {
          return { name: tab.name, html: null };
        }
      })
    );
    for (const { name, html } of tabResults) {
      if (!html) continue;
      const pages = parseHtmlFallback(html, baseUrl);
      if (pages.length > 0) sections.push({ name, pages });
    }
  }

  return sections;
}
