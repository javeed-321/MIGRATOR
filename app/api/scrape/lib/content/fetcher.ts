import type { ScrapeSection, FetchedPage, FetchResult } from "../types";
import { fetchPage } from "../fetcher";
import { pool } from "./pool";

const DEFAULT_CONCURRENCY = 5;
const DEFAULT_DELAY_MS = 200;

export async function fetchAllPages(
  sections: ScrapeSection[],
  options: { concurrency?: number; delayMs?: number; maxPages?: number } = {}
): Promise<FetchResult> {
  const {
    concurrency = DEFAULT_CONCURRENCY,
    delayMs = DEFAULT_DELAY_MS,
    maxPages,
  } = options;

  const allPages: { section: string; page: ScrapeSection["pages"][0] }[] = [];
  for (const section of sections) {
    for (const page of section.pages) {
      allPages.push({ section: section.name, page });
    }
  }

  if (maxPages && maxPages > 0) {
    allPages.splice(maxPages);
  }

  if (allPages.length === 0) {
    return {
      pages: [],
      stats: { total: 0, ok: 0, html: 0, errors: 0, skipped: 0, totalFetchMs: 0 },
    };
  }

  let taskIndex = 0;

  const tasks = allPages.map(({ section, page }) => {
    const myIndex = taskIndex++;

    return async (): Promise<FetchedPage> => {
      if (delayMs > 0 && myIndex >= concurrency) {
        await new Promise((r) => setTimeout(r, delayMs));
      }

      const mdUrl = page.fullUrl.replace(/\/$/, "") + ".md";
      const start = Date.now();

      try {
        let content = await fetchPage(mdUrl);
        const fetchMs = Date.now() - start;

        if (content) {
          const head = content.trimStart().substring(0, 50).toLowerCase();
          if (head.startsWith("<!doctype") || head.startsWith("<html")) {
            return makePage(section, page, mdUrl, null, content, fetchMs);
          }
        }

        return makePage(
          section,
          page,
          mdUrl,
          content,
          null,
          fetchMs,
          content ? undefined : "fetch_failed"
        );
      } catch {
        return makePage(section, page, mdUrl, null, null, Date.now() - start, "fetch_exception");
      }
    };
  });

  const startTotal = Date.now();
  const pages = await pool(tasks, concurrency, (done, total) => {
    if (done % 50 === 0 || done === total) {
      console.log(`[content] ${done}/${total} pages fetched`);
    }
  });
  const totalFetchMs = Date.now() - startTotal;

  const ok = pages.filter((p) => p.status === "ok").length;
  const html = pages.filter((p) => p.status === "html").length;
  const errors = pages.filter((p) => p.status === "error").length;

  return {
    pages,
    stats: { total: pages.length, ok, html, errors, skipped: 0, totalFetchMs },
  };
}

function makePage(
  section: string,
  page: ScrapeSection["pages"][0],
  mdUrl: string,
  markdown: string | null,
  htmlContent: string | null,
  fetchMs: number,
  error?: string
): FetchedPage {
  const hasHtml = !markdown && !!htmlContent;
  return {
    section,
    title: page.title,
    slug: page.path.split("/").pop() || "",
    path: page.path,
    fullUrl: page.fullUrl,
    level: page.level,
    group: page.group,
    parentPath: page.parentPath,
    mdUrl,
    markdown,
    htmlContent,
    status: markdown ? "ok" : hasHtml ? "html" : "error",
    error,
    fetchMs,
  };
}
