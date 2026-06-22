export interface Tab {
  name: string;
  path: string;
}

export interface ScrapePageItem {
  title: string;
  path: string;
  fullUrl: string;
  level: number;
  group: string;
  parentPath: string;
}

export interface ScrapeSection {
  name: string;
  pages: ScrapePageItem[];
}

export type NavType = "projects" | "tabs" | "simple" | "fallback";

export interface PageMeta {
  title: string;
  level: number;
  group: string;
  order: number;
}

// Map<slug, PageMeta> — one per URL prefix (docs, reference, etc.)
export type SidebarLookup = Map<string, PageMeta>;

// Map<prefix, SidebarLookup> — e.g. "docs" → Map, "reference" → Map
export type SidebarLookups = Map<string, SidebarLookup>;

// Map<prefix, fullUrl[]> — sitemap URLs grouped by first path segment
export type SitemapGroups = Map<string, string[]>;

export interface ScrapeResult {
  site: string;
  navType: NavType;
  tabs: string[];
  sections: ScrapeSection[];
}

// ── Phase 3: Content fetching ────────────────────────────

export interface FetchedPage {
  section: string;
  title: string;
  slug: string;
  path: string;
  fullUrl: string;
  level: number;
  group: string;
  parentPath: string;
  mdUrl: string;
  markdown: string | null;
  htmlContent: string | null;
  status: "ok" | "error" | "skipped" | "html";
  error?: string;
  fetchMs: number;
}

export interface FetchStats {
  total: number;
  ok: number;
  html: number;
  errors: number;
  skipped: number;
  totalFetchMs: number;
}

export interface FetchResult {
  pages: FetchedPage[];
  stats: FetchStats;
}

export interface SectionSummary {
  name: string;
  folder: string;
  written: number;
  total: number;
}

export interface SaveResult {
  outputDir: string;
  htmlDir: string;
  manifestPath: string;
  fileCount: number;
  htmlFileCount: number;
  errors: string[];
  sections: SectionSummary[];
}
