import { NextResponse } from "next/server";
import { readdir, readFile, mkdir, writeFile } from "fs/promises";
import path from "path";
import { convertPage } from "../lib/convert";
import type { Change } from "../lib/convert";

const DOCS_DIR = path.join(process.cwd(), "docs");
const MDX_DIR = path.join(process.cwd(), "mdx");

function sanitize(name: string): string {
  return name.replace(/[<>:"/\\|?*]/g, "-").replace(/\s+/g, " ").trim();
}

export async function POST(req: Request) {
  let body: { site?: string; maxPages?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { site, maxPages } = body;
  if (!site || typeof site !== "string") {
    return NextResponse.json(
      { error: 'site (hostname) required — e.g. "docs.capillarytech.com"' },
      { status: 400 }
    );
  }

  const safeName = sanitize(site);
  const siteDocsDir = path.join(DOCS_DIR, safeName);
  const siteMdxDir = path.join(MDX_DIR, safeName);

  // Find all section folders
  let sectionDirs: string[];
  try {
    const entries = await readdir(siteDocsDir, { withFileTypes: true });
    sectionDirs = entries
      .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
      .map((e) => e.name);
  } catch {
    return NextResponse.json(
      { error: `No docs found for "${site}". Run content fetch first.` },
      { status: 404 }
    );
  }

  if (sectionDirs.length === 0) {
    return NextResponse.json(
      { error: "No section directories found" },
      { status: 404 }
    );
  }

  await mkdir(siteMdxDir, { recursive: true });

  const startTime = Date.now();
  let totalConverted = 0;
  let totalChanges = 0;
  let totalErrors = 0;
  const sectionStats: {
    name: string;
    converted: number;
    errors: number;
    changes: number;
  }[] = [];
  const changeSummary: Record<string, number> = {};
  const errors: string[] = [];

  let pageCount = 0;

  for (const sectionName of sectionDirs) {
    const sectionSrcDir = path.join(siteDocsDir, sectionName);
    const sectionOutDir = path.join(siteMdxDir, sectionName);
    await mkdir(sectionOutDir, { recursive: true });

    let files: string[];
    try {
      files = (await readdir(sectionSrcDir)).filter((f) => f.endsWith(".md"));
    } catch {
      continue;
    }

    let sectionConverted = 0;
    let sectionErrors = 0;
    let sectionChanges = 0;

    for (const file of files) {
      if (maxPages && pageCount >= maxPages) break;
      pageCount++;

      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(sectionSrcDir, file);

      try {
        const rawMd = await readFile(filePath, "utf-8");
        const result = convertPage(slug, rawMd);

        const outPath = path.join(sectionOutDir, slug + ".mdx");
        await writeFile(outPath, result.converted, "utf-8");

        sectionConverted++;
        sectionChanges += result.totalChanges;

        for (const change of result.changes) {
          changeSummary[change.type] =
            (changeSummary[change.type] || 0) + change.count;
        }
      } catch (err) {
        sectionErrors++;
        errors.push(
          `${sectionName}/${slug}: ${err instanceof Error ? err.message : String(err)}`
        );
      }
    }

    totalConverted += sectionConverted;
    totalErrors += sectionErrors;
    totalChanges += sectionChanges;

    sectionStats.push({
      name: sectionName,
      converted: sectionConverted,
      errors: sectionErrors,
      changes: sectionChanges,
    });

    if (maxPages && pageCount >= maxPages) break;
  }

  const totalMs = Date.now() - startTime;

  console.log(
    `[convert] Done: ${totalConverted} converted, ${totalErrors} errors, ${totalChanges} changes in ${(totalMs / 1000).toFixed(1)}s`
  );

  return NextResponse.json({
    site,
    output: siteMdxDir,
    stats: {
      totalPages: pageCount,
      converted: totalConverted,
      errors: totalErrors,
      totalChanges,
      timeMs: totalMs,
    },
    changeSummary,
    sections: sectionStats,
    errors: errors.length > 0 ? errors : undefined,
  });
}
