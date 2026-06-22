import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import type { ScrapeResult } from "../lib/types";
import { fetchAllPages, savePages } from "../lib/content";

export async function POST(req: Request) {
  let body: { site?: string; concurrency?: number; delayMs?: number; maxPages?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { site, concurrency, delayMs, maxPages } = body;
  if (!site || typeof site !== "string") {
    return NextResponse.json(
      { error: 'site (hostname) required — e.g. "docs.capillarytech.com"' },
      { status: 400 }
    );
  }

  const safeName = site.replace(/[^a-zA-Z0-9.-]/g, "_");
  const scrapeFile = path.join(process.cwd(), "docJson", `${safeName}.json`);

  let scrapeResult: ScrapeResult;
  try {
    const raw = await readFile(scrapeFile, "utf-8");
    scrapeResult = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      {
        error: `No scrape result found for "${site}". Run POST /api/scrape first.`,
      },
      { status: 404 }
    );
  }

  const totalPages = scrapeResult.sections.reduce(
    (sum, s) => sum + s.pages.length,
    0
  );

  console.log(
    `[content] Starting fetch for ${site}: ${totalPages} pages across ${scrapeResult.sections.length} sections`
  );

  try {
    const fetchResult = await fetchAllPages(scrapeResult.sections, {
      concurrency,
      delayMs,
      maxPages,
    });
    const saveResult = await savePages(fetchResult, site);

    console.log(
      `[content] Done: ${fetchResult.stats.ok} ok, ${fetchResult.stats.html} html, ${fetchResult.stats.errors} errors, ${saveResult.fileCount} md + ${saveResult.htmlFileCount} html files in ${(fetchResult.stats.totalFetchMs / 1000).toFixed(1)}s`
    );

    return NextResponse.json({
      site,
      stats: fetchResult.stats,
      output: {
        dir: saveResult.outputDir,
        htmlDir: saveResult.htmlDir,
        manifest: saveResult.manifestPath,
        mdFilesWritten: saveResult.fileCount,
        htmlFilesWritten: saveResult.htmlFileCount,
        writeErrors: saveResult.errors,
      },
      sections: saveResult.sections,
    });
  } catch (e) {
    console.error("[content] Unhandled error:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
