import type { ScrapeResult, ScrapePageItem } from "./types";

// ── Output types ─────────────────────────────────────────

interface DocAIPage {
  title: string;
  path: string;
  icon: string;
}

interface DocAISubGroup {
  group: string;
  icon: string;
  path?: string;
  pages: DocAINavItem[];
}

type DocAINavItem = DocAIPage | DocAISubGroup;

interface DocAIGroup {
  group: string;
  icon: string;
  pages: DocAINavItem[];
}

interface DocAITab {
  tab: string;
  icon: string;
  groups: DocAIGroup[];
}

export interface DocAIConfig {
  name: string;
  colors: {
    light: { brand: string; heading: string; text: string };
    dark: { brand: string; heading: string; text: string };
  };
  navigation: {
    tabs: DocAITab[];
  };
}

// ── Icon mapping ─────────────────────────────────────────

const SECTION_ICONS: Record<string, string> = {
  Guides: "book-open",
  "API Reference": "code",
  Changelog: "clock",
  Recipes: "chef-hat",
  Discussions: "message-circle",
  Pages: "file-text",
  all: "book-open",
};

const GROUP_ICONS: Record<string, string> = {
  "Getting Started": "rocket",
  Introduction: "home",
  Authentication: "key",
  Overview: "home",
  Setup: "settings",
  Configuration: "settings",
  Security: "shield",
  Billing: "credit-card",
  Troubleshooting: "alert-triangle",
  FAQ: "help-circle",
  Support: "headphones",
  API: "code",
  Webhooks: "webhook",
  Integrations: "plug",
};

function pickGroupIcon(groupName: string): string {
  if (!groupName) return "folder";
  for (const [keyword, icon] of Object.entries(GROUP_ICONS)) {
    if (groupName.toLowerCase().includes(keyword.toLowerCase())) return icon;
  }
  return "folder";
}

function pickPageIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("introduction") || t.includes("overview")) return "home";
  if (t.includes("getting started") || t.includes("quickstart")) return "play";
  if (t.includes("install") || t.includes("setup")) return "download";
  if (t.includes("auth")) return "key";
  if (t.includes("webhook")) return "webhook";
  if (t.includes("api") || t.includes("endpoint")) return "code";
  if (t.includes("sdk")) return "code";
  if (t.includes("integration")) return "plug";
  if (t.includes("migration")) return "arrow-right";
  if (t.includes("troubleshoot") || t.includes("debug")) return "alert-circle";
  if (t.includes("faq") || t.includes("help")) return "help-circle";
  if (t.includes("security") || t.includes("privacy")) return "shield";
  if (t.includes("billing") || t.includes("pricing")) return "dollar-sign";
  if (t.includes("changelog") || t.includes("release")) return "history";
  if (t.includes("config") || t.includes("setting")) return "settings";
  if (t.includes("test")) return "check-circle";
  if (t.includes("deploy")) return "upload";
  return "file-text";
}

// ── Parent path computation ─────────────────────────────

export function assignParentPaths(pages: ScrapePageItem[]): void {
  const stack: string[] = [];
  let lastGroup = "";
  for (const page of pages) {
    if (page.group !== lastGroup) {
      stack.length = 0;
      lastGroup = page.group;
    }
    page.parentPath = page.level > 0 ? (stack[page.level - 1] || "") : "";
    stack[page.level] = page.path;
    stack.length = page.level + 1;
  }
}

// ── Tree builder ────────────────────────────────────────

function slugifyPath(pagePath: string): string {
  return pagePath
    .replace(/^\//, "")
    .replace(/^(v\d+(\.\d+)*\/)/, "")
    .replace(/^(docs|reference|refs|page|changelog|recipes)\//, "");
}

function buildNavTree(flatPages: ScrapePageItem[]): DocAINavItem[] {
  const pathSet = new Set(flatPages.map((p) => p.path));
  const childrenOf = new Map<string, ScrapePageItem[]>();

  for (const p of flatPages) {
    if (p.parentPath && pathSet.has(p.parentPath)) {
      if (!childrenOf.has(p.parentPath)) childrenOf.set(p.parentPath, []);
      childrenOf.get(p.parentPath)!.push(p);
    }
  }

  function toNavItem(page: ScrapePageItem): DocAINavItem {
    const slug = slugifyPath(page.path);
    const kids = childrenOf.get(page.path);

    if (kids && kids.length > 0) {
      return {
        group: page.title,
        icon: pickPageIcon(page.title),
        path: slug,
        pages: kids.map((k) => toNavItem(k)),
      };
    }
    return {
      title: page.title,
      path: slug,
      icon: pickPageIcon(page.title),
    };
  }

  const roots = flatPages.filter(
    (p) => !p.parentPath || !pathSet.has(p.parentPath)
  );
  return roots.map((p) => toNavItem(p));
}

// ── Converter ───────────────────────────────────────────

function convertSection(section: ScrapeResult["sections"][0]): DocAITab {
  const tab: DocAITab = {
    tab: section.name,
    icon: SECTION_ICONS[section.name] || "book-open",
    groups: [],
  };

  const groupMap = new Map<string, ScrapePageItem[]>();
  const groupOrder: string[] = [];

  for (const page of section.pages) {
    const groupName = page.group || "General";
    if (!groupMap.has(groupName)) {
      groupMap.set(groupName, []);
      groupOrder.push(groupName);
    }
    groupMap.get(groupName)!.push(page);
  }

  for (const groupName of groupOrder) {
    tab.groups.push({
      group: groupName,
      icon: pickGroupIcon(groupName),
      pages: buildNavTree(groupMap.get(groupName)!),
    });
  }

  return tab;
}

export function convertToDocAI(scrapeResult: ScrapeResult): DocAIConfig {
  const siteName = scrapeResult.site
    .replace(/^(docs\.|www\.)/, "")
    .split(".")[0]
    .replace(/^./, (c) => c.toUpperCase());

  const tabs: DocAITab[] = scrapeResult.sections.map(convertSection);

  return {
    name: siteName,
    colors: {
      light: { brand: "#3B82F6", heading: "#1a1a1a", text: "#374151" },
      dark: { brand: "#60A5FA", heading: "#f2f2f2", text: "#c1c1c1" },
    },
    navigation: { tabs },
  };
}
