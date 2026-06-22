import type { Tab, NavType } from "../types";

export function classifySite(
  tabs: Tab[],
  projects: Set<string>
): NavType {
  if (projects.size > 0) return "projects";
  if (tabs.length >= 2) return "tabs";
  if (tabs.length === 1) return "simple";
  return "fallback";
}
