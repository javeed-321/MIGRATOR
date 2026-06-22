import { load, type CheerioAPI } from "cheerio";
import type { Cheerio } from "cheerio";
import type { AnyNode } from "domhandler";
import type { ScrapePageItem } from "../types";
import {
  DOC_PATH_PATTERN,
  MAX_GROUP_HEADING_LENGTH,
  MAX_DOM_WALK_DEPTH,
} from "../constants";
import { findSidebarElement } from "./dom-parser";

function addLink(
  $: CheerioAPI,
  el: AnyNode,
  baseUrl: string,
  pages: ScrapePageItem[],
  group: string,
  level: number
): void {
  const href = $(el).attr("href") || "";
  const title = $(el).text().trim();
  if (!title || !href || !DOC_PATH_PATTERN.test(href)) return;
  pages.push({
    title,
    path: href,
    fullUrl: href.startsWith("http") ? href : baseUrl + href,
    level,
    group,
  });
}

function walkSidebarHtml(
  $: CheerioAPI,
  $el: Cheerio<AnyNode>,
  baseUrl: string,
  pages: ScrapePageItem[],
  group: string,
  depth: number
): void {
  if (depth > MAX_DOM_WALK_DEPTH) return;

  $el.children().each((_, child) => {
    const $c = $(child);
    const tag = (child.type === "tag" ? child.tagName : "").toLowerCase();
    const cls = ($c.attr("class") || "").toLowerCase();

    if (
      /^h[1-6]$/.test(tag) ||
      cls.includes("header") ||
      cls.includes("category") ||
      cls.includes("group")
    ) {
      const text = $c
        .clone()
        .children("ul,ol,li,nav")
        .remove()
        .end()
        .text()
        .trim();
      if (text && text.length < MAX_GROUP_HEADING_LENGTH) group = text;
    }
    if (tag === "a") addLink($, child, baseUrl, pages, group, depth);
    if (
      ["ul", "ol", "li", "div", "nav", "section", "span"].includes(tag)
    ) {
      walkSidebarHtml(
        $,
        $c,
        baseUrl,
        pages,
        group,
        tag === "ul" || tag === "ol" ? depth + 1 : depth
      );
    }
  });
}

export function parseHtmlFallback(
  html: string,
  baseUrl: string
): ScrapePageItem[] {
  const $ = load(html);
  const pages: ScrapePageItem[] = [];

  const $sidebar = findSidebarElement($);
  if ($sidebar) walkSidebarHtml($, $sidebar, baseUrl, pages, "", 0);

  if (pages.length === 0) {
    $(
      'a[href*="/docs/"], a[href*="/reference/"], a[href*="/refs/"], a[href*="/changelog/"]'
    ).each((_, a) => addLink($, a, baseUrl, pages, "", 0));
  }

  const unique = new Map<string, ScrapePageItem>();
  for (const p of pages) if (!unique.has(p.path)) unique.set(p.path, p);
  return [...unique.values()];
}
