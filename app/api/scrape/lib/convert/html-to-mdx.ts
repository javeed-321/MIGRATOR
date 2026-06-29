import { load, type CheerioAPI } from "cheerio";
import type { AnyNode, Element } from "domhandler";

export interface ExtractedSvg {
  filename: string;
  content: string;
}

export interface HtmlConvertResult {
  slug: string;
  title: string;
  mdx: string;
  type: "nav" | "content";
  svgs: ExtractedSvg[];
}

export function convertHtmlToMdx(
  slug: string,
  html: string
): HtmlConvertResult | null {
  const $ = load(html);

  const title =
    $('meta[property="og:title"]').attr("content") ||
    $("title").text().trim() ||
    slug;

  const $content = $(".rm-Markdown.markdown-body");
  if ($content.length === 0) return null;

  const isNav =
    $content.find(".nav-list").length > 0 ||
    $content.find(".nav-item").length > 0;

  if (isNav) {
    const mdx = `---\ntitle: "${esc(title)}"\n---\n\nBrowse the pages in this section using the sidebar navigation.\n`;
    return { slug, title, mdx, type: "nav", svgs: [] };
  }

  $content.find("style").remove();
  $content.find("script").remove();

  const svgs: ExtractedSvg[] = [];
  let svgIdx = 0;

  $content.find(".rdmd-html").each((_, el) => {
    const inner = $(el).html() || "";
    if (
      inner.includes("<svg") ||
      inner.includes("<?xml") ||
      inner.includes("draw.io")
    ) {
      const svgMatch = inner.match(/<svg[\s\S]*<\/svg>/);
      if (svgMatch) {
        const suffix = svgIdx === 0 ? "" : `-${svgIdx + 1}`;
        const filename = `${slug}-diagram${suffix}.svg`;
        svgIdx++;

        let svgContent = svgMatch[0];
        if (!svgContent.includes('xmlns="')) {
          svgContent = svgContent.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        const xmlDecl = inner.match(/<\?xml[^?]*\?>/);
        if (xmlDecl) {
          svgContent = xmlDecl[0] + "\n" + svgContent;
        }

        svgs.push({ filename, content: svgContent });
        $(el).replaceWith(
          `<p><img data-svg-ref="${filename}" /></p>`
        );
      } else {
        $(el).replaceWith("<p>[Diagram]</p>");
      }
    }
  });

  // Check if the content is email/newsletter HTML inside a single .rdmd-html block
  const $rdmd = $content.find(".rdmd-html");
  if ($rdmd.length === 1 && isEmailHtml($rdmd)) {
    const body = convertEmailHtml($rdmd);
    const mdx = `---\ntitle: "${esc(title)}"\n---\n\n${body}\n`;
    return { slug, title, mdx, type: "content", svgs };
  }

  const lines: string[] = [];
  walkNodes($, $content.contents().toArray(), lines, 0);

  let body = lines.join("\n");
  body = body.replace(/\n{3,}/g, "\n\n").trim();

  const mdx = `---\ntitle: "${esc(title)}"\n---\n\n${body}\n`;
  return { slug, title, mdx, type: "content", svgs };
}

function esc(s: string): string {
  return s.replace(/"/g, '\\"');
}

function walkNodes(
  $: CheerioAPI,
  nodes: ReturnType<CheerioAPI["root"]>["0"]["children"],
  lines: string[],
  depth: number
): void {
  if (depth > 20) return;

  for (const node of nodes) {
    if (node.type === "text") {
      const text = (node as unknown as { data: string }).data;
      if (text.trim()) {
        lines.push(text.replace(/\s+/g, " ").trim());
      }
      continue;
    }

    if (node.type !== "tag") continue;
    const el = node as Element;
    const tag = el.tagName.toLowerCase();

    if (tag === "style" || tag === "script" || tag === "svg") continue;

    if (/^h[1-6]$/.test(tag)) {
      const level = parseInt(tag[1]);
      const prefix = "#".repeat(level);
      const text = $(el).text().trim();
      if (text) {
        lines.push("");
        lines.push(`${prefix} ${text}`);
        lines.push("");
      }
      continue;
    }

    if (tag === "p") {
      const inner = convertInline($, el);
      if (inner.trim()) {
        lines.push("");
        lines.push(inner);
        lines.push("");
      }
      continue;
    }

    if (tag === "table") {
      lines.push("");
      convertTable($, el, lines);
      lines.push("");
      continue;
    }

    if (tag === "ul" || tag === "ol") {
      lines.push("");
      convertList($, el, lines, tag === "ol", 0);
      lines.push("");
      continue;
    }

    if (tag === "blockquote") {
      const cls = $(el).attr("class") || "";
      if (cls.includes("callout")) {
        convertCallout($, el, lines);
      } else {
        const text = $(el).text().trim();
        if (text) {
          lines.push("");
          for (const line of text.split("\n")) {
            lines.push(`> ${line.trim()}`);
          }
          lines.push("");
        }
      }
      continue;
    }

    if (tag === "pre") {
      const $code = $(el).find("code");
      const lang = ($code.attr("class") || "")
        .replace(/.*language-/, "")
        .replace(/\s.*/, "");
      const code = $code.length > 0 ? $code.text() : $(el).text();
      lines.push("");
      lines.push("```" + (lang || ""));
      lines.push(code);
      lines.push("```");
      lines.push("");
      continue;
    }

    if (tag === "img" || tag === "image") {
      const svgRef = $(el).attr("data-svg-ref");
      if (svgRef) {
        lines.push("");
        lines.push(`<Image src="/diagrams/${svgRef}" alt="Diagram" />`);
        lines.push("");
        continue;
      }
      const src = $(el).attr("src") || "";
      const alt = $(el).attr("alt") || "";
      if (src) {
        lines.push("");
        lines.push(
          `<Image src="${escAttr(src)}" alt="${escAttr(alt)}" />`
        );
        lines.push("");
      }
      continue;
    }

    if (tag === "br") {
      continue;
    }

    if (tag === "hr") {
      lines.push("");
      lines.push("---");
      lines.push("");
      continue;
    }

    if (tag === "div") {
      const cls = $(el).attr("class") || "";
      if (cls.includes("callout") || cls.includes("alert")) {
        convertCallout($, el, lines);
        continue;
      }
      if (cls.includes("rdmd-html")) {
        const inner = $(el).html() || "";
        if (
          inner.includes("<table") &&
          !inner.includes("<svg") &&
          !inner.includes("nav-list")
        ) {
          const $inner = load(inner);
          $inner("table").each((_, t) => {
            lines.push("");
            convertTable($inner, t as Element, lines);
            lines.push("");
          });
          continue;
        }
      }
    }

    walkNodes($, (el.children || []) as AnyNode[], lines, depth + 1);
  }
}

function convertInline($: CheerioAPI, el: Element): string {
  let result = "";

  for (const child of el.children || []) {
    if (child.type === "text") {
      result += (child as unknown as { data: string }).data;
      continue;
    }
    if (child.type !== "tag") continue;

    const childEl = child as Element;
    const tag = childEl.tagName.toLowerCase();

    if (tag === "strong" || tag === "b") {
      const text = $(childEl).text().trim();
      if (text) result += `**${text}**`;
      continue;
    }

    if (tag === "em" || tag === "i") {
      const text = $(childEl).text().trim();
      if (text) result += `*${text}*`;
      continue;
    }

    if (tag === "code") {
      const text = $(childEl).text();
      if (text) result += `\`${text}\``;
      continue;
    }

    if (tag === "a") {
      const href = $(childEl).attr("href") || "";
      const text = $(childEl).text().trim();
      if (text && href) {
        result += `[${text}](${href})`;
      } else if (text) {
        result += text;
      }
      continue;
    }

    if (tag === "img" || tag === "image") {
      const svgRef = $(childEl).attr("data-svg-ref");
      if (svgRef) {
        result += `<Image src="/diagrams/${svgRef}" alt="Diagram" />`;
        continue;
      }
      const src = $(childEl).attr("src") || "";
      const alt = $(childEl).attr("alt") || "";
      if (src) {
        result += `<Image src="${escAttr(src)}" alt="${escAttr(alt)}" />`;
      }
      continue;
    }

    if (tag === "br") {
      result += "\n";
      continue;
    }

    if (tag === "span") {
      const cls = $(childEl).attr("class") || "";
      if (cls.includes("GlossaryItem")) {
        result += $(childEl).text();
        continue;
      }
    }

    if (tag === "div") {
      const cls = $(childEl).attr("class") || "";
      if (cls.includes("rdmd-html")) {
        continue;
      }
    }

    result += $(childEl).text();
  }

  return result.replace(/\s+/g, " ").trim();
}

function cellToMarkdown($: CheerioAPI, cell: Element): string {
  let result = "";
  for (const child of cell.children || []) {
    if (child.type === "text") {
      result += (child as unknown as { data: string }).data;
      continue;
    }
    if (child.type !== "tag") continue;
    const el = child as Element;
    const tag = el.tagName.toLowerCase();
    if (tag === "a") {
      const href = $(el).attr("href") || "";
      const text = $(el).text().trim();
      if (text && href) result += `[${text}](${href})`;
      else if (text) result += text;
    } else if (tag === "strong" || tag === "b") {
      const text = $(el).text().trim();
      if (text) result += `**${text}**`;
    } else if (tag === "em" || tag === "i") {
      const text = $(el).text().trim();
      if (text) result += `*${text}*`;
    } else if (tag === "code") {
      const text = $(el).text();
      if (text) result += `\`${text}\``;
    } else if (tag === "br") {
      result += " ";
    } else {
      result += $(el).text();
    }
  }
  return result.replace(/\s+/g, " ").trim().replace(/\|/g, "\\|");
}

function convertTable(
  $: CheerioAPI,
  el: Element,
  lines: string[]
): void {
  const rows: string[][] = [];
  const alignments: string[] = [];

  $(el)
    .find("thead tr")
    .first()
    .find("th")
    .each((_, th) => {
      const style = $(th).attr("style") || "";
      const text = cellToMarkdown($, th as Element);
      if (!rows[0]) rows[0] = [];
      rows[0].push(text);

      if (style.includes("text-align:right")) alignments.push("---:");
      else if (style.includes("text-align:center")) alignments.push(":---:");
      else if (style.includes("text-align:left")) alignments.push(":---");
      else alignments.push("---");
    });

  if (rows.length === 0 || !rows[0] || rows[0].length === 0) {
    $(el)
      .find("tr")
      .first()
      .find("td, th")
      .each((_, cell) => {
        const text = cellToMarkdown($, cell as Element);
        if (!rows[0]) rows[0] = [];
        rows[0].push(text);
        alignments.push("---");
      });
  }

  $(el)
    .find("tbody tr")
    .each((_, tr) => {
      const row: string[] = [];
      $(tr)
        .find("td")
        .each((__, td) => {
          const text = cellToMarkdown($, td as Element);
          row.push(text);
        });
      rows.push(row);
    });

  if (rows.length === 0) return;

  const colCount = rows[0]?.length || 0;
  if (colCount === 0) return;

  while (alignments.length < colCount) alignments.push("---");

  lines.push(`| ${rows[0].join(" | ")} |`);
  lines.push(`| ${alignments.join(" | ")} |`);

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    while (row.length < colCount) row.push("");
    lines.push(`| ${row.join(" | ")} |`);
  }
}

function convertList(
  $: CheerioAPI,
  el: Element,
  lines: string[],
  ordered: boolean,
  indent: number
): void {
  const prefix = "  ".repeat(indent);
  let idx = 1;

  $(el)
    .children("li")
    .each((_, li) => {
      const $li = $(li);
      const bullet = ordered ? `${idx++}.` : "-";

      const $clone = $li.clone();
      $clone.children("ul, ol").remove();
      const text = $clone.text().trim().replace(/\s+/g, " ");

      if (text) {
        lines.push(`${prefix}${bullet} ${text}`);
      }

      $li.children("ul").each((__, subUl) => {
        convertList($, subUl as Element, lines, false, indent + 1);
      });
      $li.children("ol").each((__, subOl) => {
        convertList($, subOl as Element, lines, true, indent + 1);
      });
    });
}

function convertCallout(
  $: CheerioAPI,
  el: Element,
  lines: string[]
): void {
  const cls = $(el).attr("class") || "";
  let kind = "info";
  if (cls.includes("warning") || cls.includes("warn")) kind = "warning";
  if (cls.includes("danger") || cls.includes("error")) kind = "danger";
  if (cls.includes("success") || cls.includes("tip")) kind = "tip";

  const title = $(el).find(".callout-heading, .title, h4, h3").first().text().trim();
  const body = $(el).text().trim().replace(title, "").trim();

  lines.push("");
  lines.push(
    `<Callout kind="${kind}"${title ? ` title="${escAttr(title)}"` : ""}>`
  );
  lines.push("");
  lines.push(body);
  lines.push("");
  lines.push("</Callout>");
  lines.push("");
}

function escAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---------------------------------------------------------------------------
// Email / newsletter HTML → Markdown
// ---------------------------------------------------------------------------

const EMAIL_MARKERS = ["mso-table", "nl-container", "mj-column", "mj-outlook"];

function isEmailHtml($rdmd: { html(): string | null }): boolean {
  const html = $rdmd.html() || "";
  return EMAIL_MARKERS.some((m) => html.includes(m));
}

const BOILERPLATE_RE =
  /^(copy page|unsubscribe|view in browser|manage preferences|all rights reserved|\d{1,2}\s+\w+\s+\d{4}|©|date:\s*\d|helping you (personalize|reach)|product team|capillary$)/i;

interface EmailBlock {
  kind: "img" | "text" | "heading" | "link";
  content: string;
}

function convertEmailHtml(
  $rdmd: { html(): string | null }
): string {
  const $email = load($rdmd.html() || "");

  // Strip noise
  $email("style, script, link, meta, title, noscript").remove();

  // Remove MSO conditional comments by stripping raw HTML comments
  let cleaned = $email.html() || "";
  cleaned = cleaned.replace(/<!--\[if[^]*?<!\[endif\]-->/gi, "");
  cleaned = cleaned.replace(/<!--<!\[endif\]-->/gi, "");
  cleaned = cleaned.replace(/<!--\[if[^]*?-->/gi, "");

  const $clean = load(cleaned);

  const blocks: EmailBlock[] = [];
  const seenText = new Set<string>();

  // Walk all elements in document order
  $clean("img, p, h1, h2, h3, h4, td, div, span, a").each((_, el) => {
    const $el = $clean(el);
    const tag = (el as Element).tagName.toLowerCase();

    // Images
    if (tag === "img") {
      const src = $el.attr("src") || "";
      if (!src || src.includes("spacer") || src.includes("pixel")) return;
      // Skip tiny tracking pixels
      const width = parseInt($el.attr("width") || "999", 10);
      if (width <= 1) return;
      const alt = $el.attr("alt") || "";
      const key = src;
      if (!seenText.has(key)) {
        seenText.add(key);
        blocks.push({ kind: "img", content: `<Image src="${escAttr(src)}" alt="${escAttr(alt)}" />` });
      }
      return;
    }

    // For <a> with meaningful href and text
    if (tag === "a") {
      const href = $el.attr("href") || "";
      const text = $el.text().trim().replace(/\s+/g, " ");
      if (text && href && !BOILERPLATE_RE.test(text) && text.length > 3) {
        const fingerprint = text.toLowerCase().replace(/[^a-z0-9]/g, "");
        // Skip if this link text was already captured in a parent paragraph
        let alreadySeen = seenText.has(fingerprint);
        if (!alreadySeen) {
          for (const seen of seenText) {
            if (seen.includes(fingerprint)) { alreadySeen = true; break; }
          }
        }
        if (!alreadySeen) {
          seenText.add(fingerprint);
          blocks.push({ kind: "link", content: `[${text}](${href})` });
        }
      }
      return;
    }

    // Full text of element (includes children)
    const fullText = $el.text().trim().replace(/\s+/g, " ");
    if (!fullText || fullText.length <= 3) return;
    if (BOILERPLATE_RE.test(fullText)) return;

    // Dedup — exact match or substring of already-seen text
    const fingerprint = fullText.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (seenText.has(fingerprint)) return;
    let isSubstring = false;
    for (const seen of seenText) {
      if (seen.includes(fingerprint) || fingerprint.includes(seen)) {
        isSubstring = true;
        break;
      }
    }
    if (isSubstring && fingerprint.length < 80) return;

    // Only take leaf-ish elements — skip containers whose text is fully
    // covered by a child <p>/<span>/<a> we will visit later.
    const childTextLen = Array.from($el.children())
      .reduce((sum, c) => sum + $clean(c).text().trim().length, 0);
    const isLeaf = tag === "p" || tag === "span" || childTextLen < fullText.length * 0.9;
    if (!isLeaf) return;

    seenText.add(fingerprint);

    // Detect headings by inline style (font-size >= 18 or font-weight bold/600+)
    const style = $el.attr("style") || "";
    const parentStyle = $el.parent()?.attr("style") || "";
    const combinedStyle = style + parentStyle;
    const fontSizeMatch = combinedStyle.match(/font-size\s*:\s*(\d+)/);
    const isBold = /font-weight\s*:\s*(bold|[6-9]\d\d)/i.test(combinedStyle);
    const fontSize = fontSizeMatch ? parseInt(fontSizeMatch[1], 10) : 14;

    if ((fontSize >= 20 || (fontSize >= 16 && isBold)) && fullText.length < 120) {
      blocks.push({ kind: "heading", content: `## ${fullText}` });
    } else {
      // Preserve bold/italic inline formatting
      let text = fullText;
      // Reconstruct inline formatting from child tags
      const $clone = $el.clone();
      let formatted = "";
      for (const child of $clone.contents().toArray()) {
        if (child.type === "text") {
          formatted += (child as unknown as { data: string }).data;
        } else if (child.type === "tag") {
          const childTag = (child as Element).tagName.toLowerCase();
          const childText = $clean(child).text().trim();
          if (!childText) continue;
          if (childTag === "strong" || childTag === "b") formatted += `**${childText}**`;
          else if (childTag === "em" || childTag === "i") formatted += `*${childText}*`;
          else if (childTag === "a") {
            const href = $clean(child).attr("href") || "";
            formatted += href ? `[${childText}](${href})` : childText;
          } else formatted += childText;
        }
      }
      text = formatted.trim().replace(/\s+/g, " ") || fullText;

      blocks.push({ kind: "text", content: text });
    }
  });

  // Assemble markdown
  const lines: string[] = [];
  for (const block of blocks) {
    if (block.kind === "heading") {
      lines.push("", block.content, "");
    } else if (block.kind === "img") {
      lines.push("", block.content, "");
    } else {
      lines.push("", block.content, "");
    }
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}
