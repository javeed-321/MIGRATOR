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

  return { tabs, projects };
}
