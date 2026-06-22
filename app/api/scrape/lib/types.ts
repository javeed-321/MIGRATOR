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
