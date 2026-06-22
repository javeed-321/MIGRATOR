import { type CheerioAPI } from "cheerio";
import type { Tab } from "../types";
import {
  NAV_SELECTORS,
  NAV_FALLBACK_SELECTORS,
  TAB_PATTERNS,
  MAX_TAB_NAME_LENGTH,
  stripVersionPrefix,
} from "../constants";

export function detectTabs($: CheerioAPI, baseUrl: string): Tab[] {
  const tabs: Tab[] = [];
  const seenPaths = new Set<string>();

  function scan(selector: string): void {
    $(selector).each((_, el) => {
      let href = ($(el).attr("href") || "").replace(/\/$/, "");

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
      const normalizedPath = "/" + stripped.replace(/^\//, "");

      if (seenPaths.has(normalizedPath)) return;

      for (const [pattern, canonicalName] of TAB_PATTERNS) {
        if (pattern.test(stripped)) {
          seenPaths.add(normalizedPath);
          const visibleText = $(el).text().trim().replace(/\s+/g, " ");
          const name =
            visibleText.length > 0 &&
            visibleText.length <= MAX_TAB_NAME_LENGTH
              ? visibleText
              : canonicalName;
          tabs.push({ name, path: normalizedPath });
          break;
        }
      }
    });
  }

  scan(NAV_SELECTORS);
  if (tabs.length === 0) scan(NAV_FALLBACK_SELECTORS);
  if (tabs.length === 0) scan("a");

  return tabs;
}
