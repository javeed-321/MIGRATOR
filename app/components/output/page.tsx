"use client";

import { useState } from "react";

interface ScrapePageItem {
  title: string;
  path: string;
  fullUrl: string;
  level: number;
  group: string;
}

interface ScrapeSection {
  name: string;
  pages: ScrapePageItem[];
}

interface ScrapeResult {
  site: string;
  navType: "projects" | "tabs" | "simple" | "fallback";
  tabs: string[];
  sections: ScrapeSection[];
  error?: string;
}

async function scrapeSite(url: string): Promise<ScrapeResult> {
  const res = await fetch("/api/scrape", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  return res.json();
}


const NAV_TYPE_LABELS: Record<string, string> = {
  projects: "Multi-Project Site",
  tabs: "Tabbed Documentation",
  simple: "Single Section",
  fallback: "Fallback (link scan)",
};

interface GroupedPages {
  group: string;
  pages: ScrapePageItem[];
}

function groupPages(pages: ScrapePageItem[]): GroupedPages[] {
  const groups: GroupedPages[] = [];
  let current: GroupedPages | null = null;

  for (const page of pages) {
    const g = page.group || "";
    if (!current || current.group !== g) {
      current = { group: g, pages: [] };
      groups.push(current);
    }
    current.pages.push(page);
  }
  return groups;
}

function PageRow({ page }: { page: ScrapePageItem }) {
  return (
    <li
      className="flex items-center gap-2 rounded px-2 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
      style={{ paddingLeft: `${page.level * 20 + 8}px` }}
    >
      <span className="h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
      <a
        href={page.fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="truncate hover:underline"
        title={page.fullUrl}
      >
        {page.title}
      </a>
    </li>
  );
}

function SidebarTree({ pages }: { pages: ScrapePageItem[] }) {
  const groups = groupPages(pages);

  return (
    <div className="space-y-1">
      {groups.map((g, gi) =>
        g.group ? (
          <details key={`${g.group}-${gi}`} open className="group/item">
            <summary className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
              <svg
                className="h-3 w-3 shrink-0 transition-transform group-open/item:rotate-90"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M4.5 2l4 4-4 4V2z" />
              </svg>
              <span>{g.group}</span>
              <span className="ml-auto text-[10px] font-normal text-zinc-400">
                {g.pages.length}
              </span>
            </summary>
            <ul className="space-y-0.5 pb-1">
              {g.pages.map((page, i) => (
                <PageRow key={`${page.path}-${i}`} page={page} />
              ))}
            </ul>
          </details>
        ) : (
          <ul key={`ungrouped-${gi}`} className="space-y-0.5">
            {g.pages.map((page, i) => (
              <PageRow key={`${page.path}-${i}`} page={page} />
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default function OutputPage() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<ScrapeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleScrape() {
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await scrapeSite(url.trim());
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Documentation Scraper
      </h1>

      {/* URL Input */}
      <div className="flex gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleScrape()}
          placeholder="https://docs.example.com/docs/intro"
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
        <button
          onClick={handleScrape}
          disabled={loading || !url.trim()}
          className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {loading ? "Scraping..." : "Scrape"}
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8 space-y-6">
          {/* Site Info */}
          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-zinc-500">Site</span>
                <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">
                  {result.site}
                </p>
              </div>
              <div>
                <span className="text-zinc-500">Navigation Type</span>
                <p className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">
                  {NAV_TYPE_LABELS[result.navType] || result.navType}
                </p>
              </div>
            </div>

            {result.tabs.length > 0 && (
              <div className="mt-4">
                <span className="text-sm text-zinc-500">Tabs Detected</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {result.tabs.map((tab) => (
                    <span
                      key={tab}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sections */}
          {result.sections.map((section) => (
            <details
              key={section.name}
              open
              className="group rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <span>{section.name}</span>
                <span className="text-xs font-normal text-zinc-500">
                  {section.pages.length} pages
                </span>
              </summary>
              <div className="border-t border-zinc-200 px-4 py-3 dark:border-zinc-800">
                <SidebarTree pages={section.pages} />
              </div>
            </details>
          ))}

          {result.sections.length === 0 && (
            <p className="text-sm text-zinc-500">
              No documentation pages found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
