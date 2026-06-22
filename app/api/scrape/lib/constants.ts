// ── Fetch config ──────────────────────────────────────────

export const FETCH_TIMEOUT_MS = 10_000;
export const MAX_RESPONSE_BYTES = 5 * 1024 * 1024; // 5 MB

export const FETCH_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

// ── SSRF protection ───────────────────────────────────────

const BLOCKED_HOSTS =
  /^(localhost|127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|0\.0\.0\.0|::1|\[::1\])/i;

export function isUrlAllowed(urlStr: string): boolean {
  try {
    const u = new URL(urlStr);
    if (!["http:", "https:"].includes(u.protocol)) return false;
    if (BLOCKED_HOSTS.test(u.hostname)) return false;
    return true;
  } catch {
    return false;
  }
}

// ── Nav selectors ─────────────────────────────────────────

export const NAV_SELECTORS = [
  "header a",
  "nav a",
  "[class*='Header'] a",
  "[class*='navbar'] a",
  "[class*='Navbar'] a",
  "[class*='MobileFlyout'] a",
  "[class*='Flyout'] a",
  "[class*='NavItem'] a",
  ".rm-Header-bottom a",
].join(", ");

// ── Tab detection patterns ────────────────────────────────

export const TAB_PATTERNS: [RegExp, string][] = [
  [/^\/?docs\/?$/, "Guides"],
  [/^\/?reference\/?$/, "API Reference"],
  [/^\/?refs\/?$/, "API Reference"],
  [/^\/?changelog\/?$/, "Changelog"],
  [/^\/?recipes\/?$/, "Recipes"],
  [/^\/?discuss\/?$/, "Discussions"],
];

// ── Section name mappings ─────────────────────────────────

export const PREFIX_TO_SECTION: Record<string, string> = {
  docs: "Guides",
  reference: "API Reference",
  refs: "API Reference",
  changelog: "Changelog",
  recipes: "Recipes",
  discuss: "Discussions",
  page: "Pages",
};

export const PREFIX_ALIASES: Record<string, string> = {
  refs: "reference",
};

// ── Version prefix handling ───────────────────────────────

export const VERSION_PREFIX_PATTERN = /^\/v\d+(\.\d+)*/;

export function stripVersionPrefix(path: string): string {
  return path.replace(VERSION_PREFIX_PATTERN, "");
}

export function extractVersionPrefix(path: string): string {
  const m = path.match(VERSION_PREFIX_PATTERN);
  return m ? m[0] : "";
}

// ── Sidebar selectors ─────────────────────────────────────

export const SIDEBAR_SELECTORS = [
  "nav.rm-Sidebar",
  ".rm-Sidebar",
  "#hub-sidebar",
  "[class*='Sidebar'] nav",
  "[class*='sidebar'] nav",
  "[class*='Sidebar']",
  "[class*='sidebar']",
  "aside nav",
  "aside",
];

// ── Safety thresholds ─────────────────────────────────────

export const MIN_SCRIPT_LENGTH = 100;
export const MIN_SIDEBAR_LINKS = 3;
export const MAX_GROUP_HEADING_LENGTH = 80;
export const MAX_TITLE_LENGTH = 100;
export const MAX_NESTED_SEARCH_DEPTH = 5;
export const MAX_SCRIPT_SCAN_LENGTH = 500_000;
export const MAX_DOM_WALK_DEPTH = 50;

// ── URL patterns ──────────────────────────────────────────

export const DOC_PATH_PATTERN =
  /\/(docs|reference|refs|recipes|page|changelog)\//;

export const DOC_HREF_PATTERN =
  /^\/(v\d+(\.\d+)*\/)?(docs|reference|refs|recipes|page|changelog)\/.+/;

export const SLUG_STRIP_PATTERN =
  /^\/?(v\d+(\.\d+)*\/)?(docs|reference|refs|recipes|changelog)\//;

// ── Utility ───────────────────────────────────────────────

export function normalizePrefix(prefix: string): string {
  return PREFIX_ALIASES[prefix] || prefix;
}

export function slugToTitle(slug: string): string {
  return slug
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

export function extractBalancedJson(
  text: string,
  start: number
): string | null {
  if (text[start] !== "{") return null;
  if (text.length > MAX_SCRIPT_SCAN_LENGTH) return null;

  let depth = 0;
  let inString = false;
  let escape = false;

  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === "\\") {
      escape = true;
      continue;
    }
    if (ch === '"' && !escape) {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) return text.substring(start, i + 1);
      }
    }
  }
  return null;
}

export function findNestedKey(
  obj: unknown,
  key: string,
  depth: number
): unknown {
  if (depth > MAX_NESTED_SEARCH_DEPTH || !obj || typeof obj !== "object")
    return null;
  if (key in (obj as Record<string, unknown>))
    return (obj as Record<string, unknown>)[key];
  for (const val of Object.values(obj as Record<string, unknown>)) {
    const found = findNestedKey(val, key, depth + 1);
    if (found) return found;
  }
  return null;
}
