import { load, type CheerioAPI } from "cheerio";
import type { Cheerio } from "cheerio";
import type { AnyNode } from "domhandler";
import type { SidebarLookups } from "../types";
import {
  stripVersionPrefix,
  SIDEBAR_SELECTORS,
  MIN_SIDEBAR_LINKS,
  MAX_GROUP_HEADING_LENGTH,
  MAX_DOM_WALK_DEPTH,
} from "../constants";

export function findSidebarElement(
  $: CheerioAPI
): Cheerio<AnyNode> | null {
  for (const sel of SIDEBAR_SELECTORS) {
    const $el = $(sel);
    if ($el.length && $el.find("a").length > MIN_SIDEBAR_LINKS) return $el;
  }
  return null;
}

function extractSlugAndPrefix(
  href: string
): { prefix: string; slug: string } | null {
  try {
    let path = href;
    if (href.startsWith("http")) path = new URL(href).pathname;
    path = stripVersionPrefix(path);
    const segments = path.split("/").filter(Boolean);
    if (segments.length < 2) return null;
    return { prefix: segments[0], slug: segments.slice(1).join("/") };
  } catch {
    return null;
  }
}

export function parseDomSidebar(html: string): SidebarLookups {
  const result: SidebarLookups = new Map();
  const $ = load(html);

  const $sidebar = findSidebarElement($);
  if (!$sidebar) return result;

  const counter = { n: 0 };

  function walkDom(
    $el: Cheerio<AnyNode>,
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
        cls.includes("sidebar-heading") ||
        cls.includes("header") ||
        cls.includes("category") ||
        cls.includes("group-heading")
      ) {
        const text = $c
          .clone()
          .children("ul,ol,li,nav,a")
          .remove()
          .end()
          .text()
          .trim();
        if (text && text.length < MAX_GROUP_HEADING_LENGTH) group = text;
      }

      if (tag === "a") {
        const href = $c.attr("href") || "";
        const title = $c.text().trim();
        if (title && href) {
          const extracted = extractSlugAndPrefix(href);
          if (extracted) {
            const { prefix, slug } = extracted;
            if (!result.has(prefix)) result.set(prefix, new Map());
            const lookup = result.get(prefix)!;
            if (!lookup.has(slug)) {
              lookup.set(slug, {
                title,
                level: depth,
                group,
                order: counter.n++,
              });
            }
          }
        }
      }

      if (
        ["ul", "ol", "li", "div", "nav", "section", "span"].includes(tag)
      ) {
        walkDom(
          $c,
          group,
          tag === "ul" || tag === "ol" ? depth + 1 : depth
        );
      }
    });
  }

  walkDom($sidebar, "", 0);
  return result;
}
