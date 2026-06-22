import type { SidebarLookups } from "../types";
import { parseSidebarJson } from "./json-parser";
import { parseDomSidebar } from "./dom-parser";

export { parseSidebarJson } from "./json-parser";
export { parseDomSidebar, findSidebarElement } from "./dom-parser";
export { parseHtmlFallback } from "./html-fallback";
export { fetchSitemapUrls } from "./sitemap";
export {
  buildProjectSections,
  buildSitemapSections,
  buildNoSitemapSections,
} from "./sections";

export function parseSidebarLookups(html: string): SidebarLookups {
  const lookups = parseSidebarJson(html);
  if (lookups.size > 0) return lookups;
  return parseDomSidebar(html);
}
