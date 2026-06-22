import { type CheerioAPI } from "cheerio";
import { stripVersionPrefix } from "../constants";

export function detectProjects(
  $: CheerioAPI,
  baseUrl: string
): Set<string> {
  const projects = new Set<string>();
  const ignored = new Set([
    "docs",
    "reference",
    "main",
    "en",
    "v1",
    "v2",
    "v3",
    "v4",
    "v5",
    "beta",
  ]);

  $("header a, nav a, [class*='Header'] a").each((_, el) => {
    let href = $(el).attr("href") || "";

    try {
      if (href.startsWith("http")) {
        const u = new URL(href);
        if (u.origin === baseUrl) href = u.pathname.replace(/\/$/, "");
      }
    } catch {
      // keep href as-is
    }

    const stripped = stripVersionPrefix(href);
    const m = stripped.match(/^\/([\w-]+)\/(docs|reference)\/?$/);
    if (m && !ignored.has(m[1])) projects.add(m[1]);
  });

  return projects;
}
