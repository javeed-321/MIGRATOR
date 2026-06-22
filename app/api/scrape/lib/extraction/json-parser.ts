import { load } from "cheerio";
import type { SidebarLookups, SidebarLookup } from "../types";
import {
  extractBalancedJson,
  findNestedKey,
  SLUG_STRIP_PATTERN,
  MIN_SCRIPT_LENGTH,
} from "../constants";

interface SidebarNode {
  title?: string;
  slug?: string;
  uri?: string;
  children?: SidebarNode[];
  pages?: SidebarNode[];
}

interface Counter {
  n: number;
}

function walkJsonSidebar(
  nodes: SidebarNode[],
  lookup: SidebarLookup,
  group: string,
  depth: number,
  counter: Counter
): void {
  for (const node of nodes) {
    if (!node || typeof node !== "object") continue;

    const title = (node.title || "").trim();
    const slug = node.slug || node.uri || "";
    if (!title || !slug) continue;

    const bareSlug = slug.replace(SLUG_STRIP_PATTERN, "");
    lookup.set(bareSlug, { title, level: depth, group, order: counter.n++ });

    const children = node.children || node.pages || [];
    if (Array.isArray(children) && children.length > 0) {
      walkJsonSidebar(children, lookup, group, depth + 1, counter);
    }
  }
}

function processSidebars(
  sidebars: Record<string, SidebarNode[]>,
  result: SidebarLookups
): void {
  for (const [sectionKey, sectionPages] of Object.entries(sidebars)) {
    if (!Array.isArray(sectionPages)) continue;

    const lookup: SidebarLookup = new Map();
    const counter: Counter = { n: 0 };

    for (const category of sectionPages) {
      if (!category || typeof category !== "object") continue;

      const groupName = (category.title || sectionKey || "").trim();
      const children = category.pages || category.children || [];

      if (Array.isArray(children) && children.length > 0) {
        walkJsonSidebar(children, lookup, groupName, 0, counter);
      }
    }
    if (lookup.size > 0) result.set(sectionKey, lookup);
  }
}

export function parseSidebarJson(html: string): SidebarLookups {
  const result: SidebarLookups = new Map();
  const $ = load(html);

  const scripts: string[] = [];
  $("script").each((_, el) => {
    const text = $(el).text();
    if (
      text.length > MIN_SCRIPT_LENGTH &&
      (text.includes("sidebars") || text.includes("sidebar"))
    ) {
      scripts.push(text);
    }
  });

  // Method A: "sidebars": {...} with balanced brace extraction
  for (const script of scripts) {
    const markers = [/"sidebars"\s*:\s*/, /sidebars\s*=\s*/];
    for (const marker of markers) {
      const match = marker.exec(script);
      if (!match) continue;

      const braceStart = match.index + match[0].length;
      if (script[braceStart] !== "{") continue;

      const jsonStr = extractBalancedJson(script, braceStart);
      if (!jsonStr) continue;

      try {
        const sidebars = JSON.parse(jsonStr);
        processSidebars(sidebars, result);
        if (result.size > 0) return result;
      } catch (err) {
        console.warn(
          "[scraper] Failed to parse sidebar JSON from script:",
          err instanceof Error ? err.message : ""
        );
      }
    }
  }

  // Method B: deep search in __NEXT_DATA__ or application/json
  $('script[id="__NEXT_DATA__"], script[type="application/json"]').each(
    (_, el) => {
      if (result.size > 0) return;
      try {
        const data = JSON.parse($(el).text());
        const sidebars = findNestedKey(data, "sidebars", 0);
        if (sidebars && typeof sidebars === "object") {
          processSidebars(
            sidebars as Record<string, SidebarNode[]>,
            result
          );
        }
      } catch (err) {
        console.warn(
          "[scraper] Failed to parse __NEXT_DATA__:",
          err instanceof Error ? err.message : ""
        );
      }
    }
  );

  return result;
}
