import { NextResponse } from "next/server";
import { readFile, writeFile, readdir, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import { convertHtmlToMdx } from "../lib/convert/html-to-mdx";
import { convertPage } from "../lib/convert/pipeline";

export async function POST(req: Request) {
  let body: { site?: string; group?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const site = body.site || "docs.capillarytech.com";
  const groupFilter = body.group;

  const htmlBase = path.join(
    process.cwd(),
    "source-html",
    site,
    "_html",
    "Guides-by-group"
  );

  if (!existsSync(htmlBase)) {
    return NextResponse.json(
      { error: `No HTML groups found at ${htmlBase}` },
      { status: 404 }
    );
  }

  const mdxOut = path.join(process.cwd(), "output-mdx", site, "Guides");
  const diagramsOut = path.join(process.cwd(), "deployment-output", "guides", "diagrams");
  await mkdir(mdxOut, { recursive: true });
  await mkdir(diagramsOut, { recursive: true });

  const groups = await readdir(htmlBase);
  const results: {
    slug: string;
    group: string;
    type: string;
    status: string;
    error?: string;
  }[] = [];

  let converted = 0;
  let skipped = 0;
  let errors = 0;
  let svgsSaved = 0;

  for (const group of groups.sort()) {
    if (groupFilter && group !== groupFilter) continue;

    const groupDir = path.join(htmlBase, group);
    const files = await readdir(groupDir);

    for (const file of files.sort()) {
      if (!file.endsWith(".html")) continue;
      const slug = file.replace(".html", "");

      const existingMdx = path.join(mdxOut, `${slug}.mdx`);
      if (existsSync(existingMdx)) {
        const content = await readFile(existingMdx, "utf-8");
        if (!content.includes("This is a html page.")) {
          skipped++;
          results.push({
            slug,
            group,
            type: "skip",
            status: "already has MDX content",
          });
          continue;
        }
      }

      try {
        const html = await readFile(path.join(groupDir, file), "utf-8");
        const result = convertHtmlToMdx(slug, html);

        if (!result) {
          errors++;
          results.push({
            slug,
            group,
            type: "error",
            status: "could not extract content",
          });
          continue;
        }

        let finalMdx: string;
        if (result.type === "nav") {
          finalMdx = result.mdx;
        } else {
          const pipelined = convertPage(slug, result.mdx);
          finalMdx = pipelined.converted;
        }

        for (const svg of result.svgs) {
          await writeFile(
            path.join(diagramsOut, svg.filename),
            svg.content,
            "utf-8"
          );
          svgsSaved++;
        }

        await writeFile(existingMdx, finalMdx, "utf-8");
        converted++;
        results.push({ slug, group, type: result.type, status: "ok" });
      } catch (e) {
        errors++;
        results.push({
          slug,
          group,
          type: "error",
          status: e instanceof Error ? e.message : String(e),
          error: e instanceof Error ? e.stack : undefined,
        });
      }
    }
  }

  return NextResponse.json({
    stats: { converted, skipped, errors, svgsSaved, total: converted + skipped + errors },
    results,
  });
}
