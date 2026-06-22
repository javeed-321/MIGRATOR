import { load } from "cheerio";
import { detectTabs } from "./detect-tabs";
import { detectProjects } from "./detect-projects";

export { detectTabs } from "./detect-tabs";
export { detectProjects } from "./detect-projects";
export { classifySite } from "./classify";

export function parseNavbar(html: string, url: string) {
  const $ = load(html);
  const baseUrl = new URL(url).origin;

  const tabs = detectTabs($, baseUrl);
  const projects = detectProjects($, baseUrl);
  console.log(tabs, projects)
  return { tabs, projects };
}


// POST request
//  │
//  ├─ fetchPage(url)           ─── gets HTML
//  ├─ fetchSitemapUrls(base)   ─── gets sitemap
//  │
//  ├─ parseNavbar(html)
//  │   ├─ detectTabs()         ─── finds tabs in navbar
//  │   └─ detectProjects()     ─── finds multi-project patterns
//  │
//  ├─ classifySite()           ─── picks: projects / tabs / simple / fallback
//  │
//  └─ ONE of:
//      │
//      ├─ buildProjectSections()        ← if projects found
//      │   └─ fetchPage() per project
//      │       └─ parseHtmlFallback()
//      │
//      ├─ buildSitemapSections()        ← if sitemap exists
//      │   ├─ parseSidebarLookups()     ← tries JSON first, then DOM
//      │   ├─ fetchPage() per missing tab
//      │   │   └─ parseSidebarLookups()
//      │   └─ merge sidebar + sitemap
//      │
//      ├─ buildNoSitemapSections()      ← if no sitemap
//      │   ├─ parseSidebarLookups()
//      │   ├─ parseHtmlFallback()       ← if sidebar empty
//      │   └─ fetchPage() per uncovered tab
//      │
//      └─ fallback <a> scan             ← if everything above returned 0 pages
