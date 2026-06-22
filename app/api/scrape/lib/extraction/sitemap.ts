import { load } from "cheerio";
import { fetchPage } from "../fetcher";
import type { SitemapGroups } from "../types";

export async function fetchSitemapUrls(
  baseUrl: string
): Promise<SitemapGroups> {
  const grouped: SitemapGroups = new Map();
  const xml = await fetchPage(`${baseUrl}/sitemap.xml`);
  if (!xml) return grouped;

  const $ = load(xml, { xml: true });
  $("url > loc").each((_, el) => {
    const loc = $(el).text().trim();
    if (!loc) return;
    try {
      const u = new URL(loc);
      const segments = u.pathname.split("/").filter(Boolean);
      if (segments.length < 2) return;
      const prefix = segments[0];
      if (prefix === "discuss") return;
      if (!grouped.has(prefix)) grouped.set(prefix, []);
      grouped.get(prefix)!.push(loc);
    } catch (err) {
      console.warn(
        `[scraper] Bad sitemap URL: ${loc}`,
        err instanceof Error ? err.message : ""
      );
    }
  });

  for (const [key, urls] of grouped) {
    grouped.set(key, [...new Set(urls)]);
  }
  return grouped;
}
