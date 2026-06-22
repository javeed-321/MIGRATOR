import { type CheerioAPI } from "cheerio";
import type { Tab } from "../types";
import {
  NAV_SELECTORS,
  TAB_PATTERNS,
  stripVersionPrefix,
} from "../constants";

export function detectTabs($: CheerioAPI, baseUrl: string): Tab[] {
  const tabs: Tab[] = [];
  const seen = new Set<string>();

  $(NAV_SELECTORS).each((_, el) => {
    let href = ($(el).attr("href") || "").replace(/\/$/, "");

    try {
      if (href.startsWith("http")) {
        const u = new URL(href);
        if (u.origin === baseUrl) href = u.pathname.replace(/\/$/, "");
      }
    } catch {
      // keep href as-is if URL parsing fails
    }

    const stripped = stripVersionPrefix(href);

    for (const [pattern, name] of TAB_PATTERNS) {
      if (pattern.test(stripped) && !seen.has(name)) {
        seen.add(name);
        tabs.push({ name, path: "/" + stripped.replace(/^\//, "") });
      }
    }
  });

  return tabs;
}
