import { type CheerioAPI } from "cheerio";
import { NAV_SELECTORS, stripVersionPrefix } from "../constants";

const DOC_SEGMENTS = new Set([
  "docs",
  "reference",
  "refs",
  "guides",
  "api",
  "api-reference",
]);

const IGNORED_PROJECTS = new Set([
  ...DOC_SEGMENTS,
  "en", "fr", "de", "ja", "ko", "zh", "es", "pt", "it", "ru",
  "v1", "v2", "v3", "v4", "v5", "v6",
  "main", "beta", "latest", "stable", "current", "next",
]);

export function detectProjects(
  $: CheerioAPI,
  baseUrl: string
): Set<string> {
  const projects = new Set<string>();

  $(NAV_SELECTORS).each((_, el) => {
    let href = $(el).attr("href") || "";

    try {
      if (href.startsWith("http")) {
        const u = new URL(href);
        if (u.origin !== baseUrl) return;
        href = u.pathname.replace(/\/$/, "");
      }
    } catch {
      return;
    }

    const stripped = stripVersionPrefix(href);
    const segments = stripped.split("/").filter(Boolean);

    if (
      segments.length >= 2 &&
      DOC_SEGMENTS.has(segments[1]) &&
      !IGNORED_PROJECTS.has(segments[0])
    ) {
      projects.add(segments[0]);
    }
  });

  return projects;
}
