import { mkdir, writeFile } from "fs/promises";
import path from "path";
import type { FetchResult, SaveResult, SectionSummary } from "../types";

const DOCS_DIR = path.join(process.cwd(), "docs");

function sanitize(name: string): string {
  return name
    .replace(/[<>:"/\\|?*]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function slugToFilename(pagePath: string): string {
  const segments = pagePath.split("/").filter(Boolean);
  const slug = segments[segments.length - 1] || "index";
  return sanitize(slug) + ".md";
}

export async function savePages(
  fetchResult: FetchResult,
  hostname: string
): Promise<SaveResult> {
  const siteDir = path.join(DOCS_DIR, sanitize(hostname));
  const htmlDir = path.join(siteDir, "_html");
  const errors: string[] = [];
  let fileCount = 0;
  let htmlFileCount = 0;

  await mkdir(siteDir, { recursive: true });
  await mkdir(htmlDir, { recursive: true });

  const sectionMap = new Map<string, FetchResult["pages"]>();
  for (const page of fetchResult.pages) {
    if (!sectionMap.has(page.section)) sectionMap.set(page.section, []);
    sectionMap.get(page.section)!.push(page);
  }

  const sections: SectionSummary[] = [];

  for (const [sectionName, pages] of sectionMap) {
    const parts = sectionName.split("/").map(sanitize);
    const folderName = parts.join(path.sep);
    const sectionDir = path.join(siteDir, ...parts);
    const htmlSectionDir = path.join(htmlDir, ...parts);
    await mkdir(sectionDir, { recursive: true });

    let written = 0;

    for (const page of pages) {
      if (page.status === "ok" && page.markdown) {
        const filename = slugToFilename(page.path);
        const filePath = path.join(sectionDir, filename);
        try {
          await writeFile(filePath, page.markdown, "utf-8");
          fileCount++;
          written++;
        } catch (err) {
          errors.push(
            `${page.slug}: ${err instanceof Error ? err.message : String(err)}`
          );
        }
      } else if (page.status === "html" && page.htmlContent) {
        await mkdir(htmlSectionDir, { recursive: true });
        const filename = slugToFilename(page.path).replace(/\.md$/, ".html");
        const filePath = path.join(htmlSectionDir, filename);
        try {
          await writeFile(filePath, page.htmlContent, "utf-8");
          htmlFileCount++;
        } catch (err) {
          errors.push(
            `${page.slug} (html): ${err instanceof Error ? err.message : String(err)}`
          );
        }
      }
    }

    sections.push({
      name: sectionName,
      folder: folderName,
      written,
      total: pages.length,
    });
  }

  const manifestPath = path.join(siteDir, "manifest.json");
  const manifest = {
    site: hostname,
    fetchedAt: new Date().toISOString(),
    stats: fetchResult.stats,
    fileCount,
    htmlFileCount,
    sections,
  };
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");

  return { outputDir: siteDir, htmlDir, manifestPath, fileCount, htmlFileCount, errors, sections };
}
