import {
  EMOJI_TO_CALLOUT_KIND,
  CALLOUT_EMOJIS,
  COMPONENT_RENAME,
  FA_TO_LUCIDE,
  KIND_MAP,
} from "./constants";

export interface Change {
  type: string;
  count: number;
  detail: string;
}

export interface ConvertResult {
  content: string;
  changes: Change[];
}

function normalizeKind(value: string | undefined): string {
  if (!value) return "info";
  return KIND_MAP[value.toLowerCase().trim()] || "info";
}

function escAttr(str: string): string {
  return str.replace(/"/g, "&quot;");
}

const emojiPattern = CALLOUT_EMOJIS.map((e) =>
  e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
).join("|");

// --- 1. Emoji blockquotes → <Callout> ---

export function convertBlockquoteCallouts(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const lines = content.split("\n");
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const calloutStart = new RegExp(
      `^([ \\t]*>[ \\t]*)(?:#{1,6}\\s+)?(${emojiPattern})[ \\t]*(.*?)$`
    );
    const match = lines[i].match(calloutStart);

    if (!match) {
      result.push(lines[i]);
      i++;
      continue;
    }

    const emoji = match[2];
    const firstLineText = match[3].trim();
    const kind = EMOJI_TO_CALLOUT_KIND[emoji] || "info";

    const bodyLines: string[] = [];
    i++;
    while (i < lines.length && /^[ \t]*>/.test(lines[i])) {
      bodyLines.push(lines[i].replace(/^[ \t]*>[ \t]?/, ""));
      i++;
    }

    const bodyText = bodyLines.join("\n").trim();
    const allText = [firstLineText, bodyText].filter(Boolean).join("\n").trim();

    if (!allText) {
      result.push(match[0]);
      continue;
    }

    count++;

    let title = "";
    let body = allText;
    if (firstLineText && bodyText.length > 0 && firstLineText.length < 60) {
      title = firstLineText;
      body = bodyText;
    }

    const titleAttr = title ? ` title="${escAttr(title)}"` : "";
    result.push(`<Callout kind="${kind}"${titleAttr}>`);
    result.push("");
    result.push(body);
    result.push("");
    result.push("</Callout>");
  }

  if (count > 0) {
    changes.push({
      type: "callout",
      count,
      detail: `emoji blockquote → <Callout kind="...">`,
    });
  }

  return { content: result.join("\n"), changes };
}

// --- 2. JSX Callout prop normalization ---

export function convertJsxCallouts(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const result = content.replace(
    /<Callout(\s[^>]*?)>/gi,
    (fullMatch, attrsStr: string) => {
      if (/\bkind\s*=/.test(attrsStr)) return fullMatch;

      const typeMatch = attrsStr.match(/\btype\s*=\s*(["'])([^"']*)\1/);
      const themeMatch = attrsStr.match(/\btheme\s*=\s*(["'])([^"']*)\1/);
      const iconMatch = attrsStr.match(/\bicon\s*=\s*(["'])([^"']*)\1/);
      const emojiMatch = attrsStr.match(/\bemoji\s*=\s*(["'])([^"']*)\1/);

      if (!typeMatch && !themeMatch && !iconMatch && !emojiMatch) {
        return fullMatch;
      }

      let kind = "info";
      if (typeMatch) {
        kind = normalizeKind(typeMatch[2]);
      } else if (themeMatch) {
        kind = normalizeKind(themeMatch[2]);
      } else if (iconMatch) {
        kind =
          EMOJI_TO_CALLOUT_KIND[iconMatch[2].trim()] ||
          normalizeKind(iconMatch[2]);
      } else if (emojiMatch) {
        kind = EMOJI_TO_CALLOUT_KIND[emojiMatch[2].trim()] || "info";
      }

      const titleMatch = attrsStr.match(/\btitle\s*=\s*(["'])([^"']*)\1/);
      const titleAttr = titleMatch
        ? ` title="${escAttr(titleMatch[2])}"`
        : "";

      count++;
      return `<Callout kind="${kind}"${titleAttr}>`;
    }
  );

  if (count > 0) {
    changes.push({
      type: "callout-jsx",
      count,
      detail: `<Callout type/theme/icon> → kind="..."`,
    });
  }

  return { content: result, changes };
}

// --- 3. Accordion → Expandable ---

export function convertAccordions(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;
  let result = content;

  for (const [from, to] of Object.entries(COMPONENT_RENAME)) {
    const openRegex = new RegExp(`<${from}(\\s|>|\\/)`, "g");
    const closeRegex = new RegExp(`</${from}>`, "g");

    const openMatches = result.match(openRegex);
    if (openMatches) {
      count += openMatches.length;
      result = result.replace(openRegex, `<${to}$1`);
      result = result.replace(closeRegex, `</${to}>`);
    }
  }

  if (count > 0) {
    result = result.replace(
      /(<Expandable\s[^>]*?)\s+icon\s*=\s*(["'])[^"']*\2/gi,
      "$1"
    );
    changes.push({
      type: "accordion",
      count,
      detail: `<Accordion> → <Expandable>`,
    });
  }

  return { content: result, changes };
}

// --- 4. Cards → Columns ---

export function convertCards(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;
  let result = content;

  const openMatches = result.match(/<Cards(\s|>)/g);
  if (openMatches) {
    count += openMatches.length;
    result = result.replace(/<Cards(\s|>)/g, "<Columns$1");
    result = result.replace(/<\/Cards>/g, "</Columns>");
    result = result.replace(
      /(<Columns\s[^>]*?)columns\s*=\s*\{(\d+)\}/g,
      "$1cols={$2}"
    );
  }

  if (count > 0) {
    changes.push({
      type: "cards",
      count,
      detail: `<Cards columns={N}> → <Columns cols={N}>`,
    });
  }

  return { content: result, changes };
}

// --- 5. Columns layout ---

export function convertColumnsLayout(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const result = content.replace(
    /<Columns\s+layout\s*=\s*(["'])[^"']*\1\s*>([\s\S]*?)<\/Columns>/g,
    (_match, _quote, inner: string) => {
      const columnCount = (inner.match(/<Column[\s>]/g) || []).length || 2;
      let cleaned = inner;
      cleaned = cleaned.replace(/<Column\s*>/g, "");
      cleaned = cleaned.replace(/<\/Column>/g, "");
      count++;
      return `<Columns cols={${columnCount}}>\n${cleaned.trim()}\n</Columns>`;
    }
  );

  if (count > 0) {
    changes.push({
      type: "columns-layout",
      count,
      detail: `<Columns layout> → <Columns cols={N}>`,
    });
  }

  return { content: result, changes };
}

// --- 6. Consecutive code blocks → <CodeGroup> ---

export function convertCodeGroups(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const consecutiveCodeBlocks =
    /(?:^```[\w-]*[^\n]*\n[\s\S]*?^```[ \t]*(?:\n[ \t]*\n?|$)){2,}/gm;

  const result = content.replace(consecutiveCodeBlocks, (match) => {
    const blocks = [
      ...match.matchAll(/^```([\w-]*)([^\n]*)\n([\s\S]*?)^```/gm),
    ];
    if (blocks.length < 2) return match;

    const langs = blocks.map((b) => b[1]).filter(Boolean);
    const uniqueLangs = new Set(langs);
    if (uniqueLangs.size < 2) return match;

    count++;

    const tabLabels = blocks.map((b) => {
      const meta = b[2].trim();
      if (meta) return meta;
      return b[1] || "Code";
    });

    const rebuilt = blocks
      .map((b) => "```" + (b[1] || "") + "\n" + b[3] + "```")
      .join("\n\n");

    return `<CodeGroup tabs="${tabLabels.join(",")}">\n${rebuilt}\n</CodeGroup>\n`;
  });

  if (count > 0) {
    changes.push({
      type: "codegroup",
      count,
      detail: `consecutive code blocks → <CodeGroup>`,
    });
  }

  return { content: result, changes };
}

// --- 7. Embeds → iframe ---

function toEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.pathname === "/watch"
    ) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    // not a valid URL
  }
  return url;
}

export function convertEmbeds(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  let result = content.replace(
    /\[block:embed\]\s*\n([\s\S]*?)\n\s*\[\/block\]/g,
    (_match, jsonStr: string) => {
      try {
        const data = JSON.parse(jsonStr);
        count++;
        const url = data.url || data.html || "";
        const title = data.title ? ` title="${escAttr(data.title)}"` : "";
        const embedUrl = toEmbedUrl(url);
        return `<iframe src="${escAttr(embedUrl)}"${title} width="100%" height="400" />`;
      } catch {
        count++;
        return `{/* [block:embed] could not be parsed */}`;
      }
    }
  );

  // @[title](url)
  result = result.replace(/@\[([^\]]*)\]\(([^)]+)\)/g, (_match, title: string, url: string) => {
    count++;
    const titleAttr = title ? ` title="${escAttr(title)}"` : "";
    const embedUrl = toEmbedUrl(url);
    return `<iframe src="${escAttr(embedUrl)}"${titleAttr} width="100%" height="400" />`;
  });

  // ReadMe <Embed> component → <iframe>
  result = result.replace(
    /<Embed\s+([^>]*?)\/?\s*>/gi,
    (_match, attrsStr: string) => {
      const urlMatch = attrsStr.match(/\burl\s*=\s*(["'])([^"']*)\1/);
      if (!urlMatch) return _match;
      count++;
      const embedUrl = toEmbedUrl(urlMatch[2]);
      return `<iframe src="${escAttr(embedUrl)}" width="100%" height="400" />`;
    }
  );

  // <div style="..."><iframe src="...">...</iframe></div> → <Iframe>
  result = result.replace(
    /<div\s+style="[^"]*">[\s\S]*?iframe\s+src="([^"]*)"[^>]*>[\s\S]*?<\/iframe>[\s\S]*?<\/div>/g,
    (_match, src: string) => {
      count++;
      return `<Iframe src="${escAttr(src)}" />`;
    }
  );

  if (count > 0) {
    changes.push({
      type: "embed",
      count,
      detail: `embeds → <iframe>`,
    });
  }

  return { content: result, changes };
}

// --- 8. Image fixer ---

export function fixImages(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  let result = content.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    (_match, alt: string, rawUrl: string) => {
      count++;
      const url = rawUrl.replace(/\s+["'][^"']*["']\s*$/, "").trim();
      return `<Image src="${url}" width="1920" height="1080" alt="${alt}" />`;
    }
  );

  // Fix <Image> tags: extract src/width/height/alt, strip everything else.
  // Uses a character scanner to handle broken quotes and > inside alt text.
  const imageTagRe = /<Image\s/gi;
  let imageMatch;
  const replacements: [number, number, string][] = [];

  while ((imageMatch = imageTagRe.exec(result)) !== null) {
    const startIdx = imageMatch.index;
    let i = startIdx + imageMatch[0].length;
    let depth = 0;
    let endIdx = -1;

    // Find the real end of the tag: /> or > accounting for attribute values
    while (i < result.length) {
      if (result[i] === "=" && i + 1 < result.length && result[i + 1] === '"') {
        // Skip past the attribute value
        i += 2;
        while (i < result.length && result[i] !== '"') i++;
        i++; // skip closing "
        continue;
      }
      if (result[i] === "=" && i + 1 < result.length && result[i + 1] === "{") {
        depth = 1;
        i += 2;
        while (i < result.length && depth > 0) {
          if (result[i] === "{") depth++;
          else if (result[i] === "}") depth--;
          i++;
        }
        continue;
      }
      if (result[i] === "/" && i + 1 < result.length && result[i + 1] === ">") {
        endIdx = i + 2;
        break;
      }
      if (result[i] === ">") {
        endIdx = i + 1;
        break;
      }
      i++;
    }

    if (endIdx === -1) continue;

    const fullTag = result.substring(startIdx, endIdx);
    count++;

    // Extract src via the last src=" found (most reliable)
    const srcM = fullTag.match(/\bsrc\s*=\s*"([^"]*)"/);
    const widthM = fullTag.match(/\bwidth\s*=\s*"([^"]*)"/);
    const heightM = fullTag.match(/\bheight\s*=\s*"([^"]*)"/);

    // For alt: find alt=" then grab up to the quote before the next known attr key
    let alt = "";
    const altStart = fullTag.match(/\balt\s*=\s*"/);
    if (altStart) {
      const attrKeys = /\b(?:src|width|height|border|caption|className|align|priority)\s*=/g;
      const altValStart = altStart.index! + altStart[0].length;
      let altValEnd = fullTag.lastIndexOf('"', fullTag.indexOf("src=", altValStart) - 2);
      if (altValEnd <= altValStart) altValEnd = fullTag.indexOf('"', altValStart);
      // Try finding next attr key after alt value start
      attrKeys.lastIndex = altValStart;
      const nextAttr = attrKeys.exec(fullTag);
      if (nextAttr) {
        // Walk backward from nextAttr to find the closing quote
        let q = nextAttr.index - 1;
        while (q > altValStart && result[startIdx + q] !== '"') q--;
        if (q > altValStart) altValEnd = q;
      }
      alt = fullTag.substring(altValStart, altValEnd).replace(/"/g, "&quot;").trim();
    }

    const src = srcM ? srcM[1] : "";
    if (!src) continue;

    const width = widthM ? widthM[1].trim() : "1920";
    const height = heightM ? heightM[1].trim() : "1080";
    const altAttr = alt ? ` alt="${alt}"` : ` alt=""`;
    const replacement = `<Image src="${src}" width="${width}" height="${height}"${altAttr} />`;

    replacements.push([startIdx, endIdx, replacement]);
  }

  // Apply replacements in reverse order to preserve indices
  for (let r = replacements.length - 1; r >= 0; r--) {
    const [start, end, replacement] = replacements[r];
    result = result.substring(0, start) + replacement + result.substring(end);
  }

  if (count > 0) {
    changes.push({
      type: "image",
      count,
      detail: `images → <Image> component`,
    });
  }

  return { content: result, changes };
}

// --- 9. Font Awesome → Lucide icons ---

export function convertIcons(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const result = content.replace(
    /icon\s*=\s*(["'])(fa-[\w-]+)\1/g,
    (_match, quote: string, faIcon: string) => {
      const lucide = FA_TO_LUCIDE[faIcon];
      count++;
      if (lucide) return `icon=${quote}${lucide}${quote}`;
      return `icon=${quote}${faIcon.replace(/^fa-/, "")}${quote}`;
    }
  );

  if (count > 0) {
    changes.push({
      type: "icon",
      count,
      detail: `Font Awesome → Lucide icons`,
    });
  }

  return { content: result, changes };
}

// --- 10. [block:TYPE] JSON → MDX ---

export function convertBlockSyntax(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const result = content.replace(
    /\[block:([\w-]+)\]\s*\n([\s\S]*?)\n\s*\[\/block\]/g,
    (_match, blockType: string, jsonStr: string) => {
      let data: Record<string, unknown>;
      try {
        const cleanedJson = jsonStr.replace(/\\([{}])/g, "$1");
        data = JSON.parse(cleanedJson);
      } catch {
        count++;
        return `{/* [block:${blockType}] could not be parsed */}`;
      }

      count++;

      switch (blockType) {
        case "callout": {
          const kind = normalizeKind(data.type as string);
          const title = (data.title as string) || "";
          const body = ((data.body as string) || "").trim();
          if (!body && !title) return "";
          if (!body)
            return `<Callout kind="${kind}">\n\n${title}\n\n</Callout>`;
          const titleAttr = title ? ` title="${escAttr(title)}"` : "";
          return `<Callout kind="${kind}"${titleAttr}>\n\n${body}\n\n</Callout>`;
        }

        case "code": {
          const codes = (data.codes as Array<Record<string, string>>) || [];
          if (codes.length === 0) return "";
          if (codes.length === 1) {
            const c = codes[0];
            return "```" + (c.language || "") + "\n" + (c.code || "") + "\n```";
          }
          const tabLabels = codes.map(
            (c) => c.name || c.language || "Code"
          );
          const blocks = codes
            .map((c) => "```" + (c.language || "") + "\n" + (c.code || "") + "\n```")
            .join("\n\n");
          return `<CodeGroup tabs="${tabLabels.join(",")}">\n${blocks}\n</CodeGroup>`;
        }

        case "image": {
          const images =
            (data.images as Array<Record<string, unknown>>) || [];
          if (images.length === 0) return "";
          return images
            .map((img) => {
              if (Array.isArray(img.image)) {
                const [url, caption] = img.image;
                return `![${caption || "Image"}](${url})`;
              }
              return `![${img.caption || "Image"}](${img.image || img.url || ""})`;
            })
            .join("\n\n");
        }

        case "parameters":
        case "api-header": {
          const numCols = (data.cols as number) || 0;
          const numRows = (data.rows as number) || 0;
          const cells = (data.data as Record<string, string>) || {};
          if (numCols === 0 || numRows === 0) return "";

          const headers: string[] = [];
          for (let col = 0; col < numCols; col++) {
            headers.push(cells[`h-${col}`] || `Column ${col + 1}`);
          }

          const rows: string[][] = [];
          for (let row = 0; row < numRows; row++) {
            const rowCells: string[] = [];
            for (let col = 0; col < numCols; col++) {
              let v = cells[`${row}-${col}`] || "";
              v = v.replace(/\r?\n/g, " <br/> ");
              v = v.replace(/\|/g, "\\|");
              rowCells.push(v);
            }
            rows.push(rowCells);
          }

          const headerRow = `| ${headers.join(" | ")} |`;
          const separator = `| ${headers.map(() => "---").join(" | ")} |`;
          const bodyRows = rows.map((r) => `| ${r.join(" | ")} |`);
          return [headerRow, separator, ...bodyRows].join("\n");
        }

        case "html": {
          const rawHtml = (data.html as string) || (data.body as string) || "";
          if (/<table[\s\S]*?<\/table>/i.test(rawHtml)) {
            return htmlTableToMarkdown(rawHtml);
          }
          return rawHtml;
        }

        default:
          return `{/* [block:${blockType}] needs manual review */}`;
      }
    }
  );

  if (count > 0) {
    changes.push({
      type: "block-syntax",
      count,
      detail: `[block:...] → MDX components`,
    });
  }

  return { content: result, changes };
}

function htmlTableToMarkdown(html: string): string {
  const theadMatch = html.match(/<thead[\s\S]*?<\/thead>/i);
  const tbodyMatch = html.match(/<tbody[\s\S]*?<\/tbody>/i);

  const extractCells = (rowHtml: string): string[] => {
    const cells: string[] = [];
    const cellRegex = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
    let m;
    while ((m = cellRegex.exec(rowHtml)) !== null) {
      cells.push(m[1].replace(/<[^>]*>/g, "").trim());
    }
    return cells;
  };

  const extractRows = (sectionHtml: string): string[][] => {
    const rows: string[][] = [];
    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let m;
    while ((m = rowRegex.exec(sectionHtml)) !== null) {
      rows.push(extractCells(m[1]));
    }
    return rows;
  };

  let headers: string[] = [];
  if (theadMatch) {
    const headRows = extractRows(theadMatch[0]);
    if (headRows.length > 0) headers = headRows[0];
  }

  let bodyRows: string[][] = [];
  if (tbodyMatch) {
    bodyRows = extractRows(tbodyMatch[0]);
  } else {
    const allRows = extractRows(html);
    if (allRows.length > 0) {
      headers = allRows[0];
      bodyRows = allRows.slice(1);
    }
  }

  if (headers.length === 0 && bodyRows.length === 0) return html;

  const lines: string[] = [];
  lines.push(`| ${headers.join(" | ")} |`);
  lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
  for (const row of bodyRows) {
    while (row.length < headers.length) row.push("");
    lines.push(`| ${row.join(" | ")} |`);
  }

  return lines.join("\n");
}

// ====== CAPILLARY-SPECIFIC CONVERTERS ======

// --- 11. <Anchor> → markdown link ---

export function convertAnchors(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  // Handle <Anchor ...>text</Anchor>
  let result = content.replace(
    /<Anchor\s+([^>]*?)>([\s\S]*?)<\/Anchor>/gi,
    (_match, attrsStr: string, _innerText: string) => {
      const labelMatch = attrsStr.match(/\blabel\s*=\s*(["'])([^"']*)\1/);
      const hrefMatch = attrsStr.match(/\bhref\s*=\s*(["'])([^"']*)\1/);

      if (!hrefMatch) return _match;

      count++;
      const label = labelMatch ? labelMatch[2] : hrefMatch[2];
      return `[${label}](${hrefMatch[2]})`;
    }
  );

  // Handle self-closing <Anchor ... />
  result = result.replace(
    /<Anchor\s+([^>]*?)\/\s*>/gi,
    (_match, attrsStr: string) => {
      const labelMatch = attrsStr.match(/\blabel\s*=\s*(["'])([^"']*)\1/);
      const hrefMatch = attrsStr.match(/\bhref\s*=\s*(["'])([^"']*)\1/);

      if (!hrefMatch) return _match;

      count++;
      const label = labelMatch ? labelMatch[2] : hrefMatch[2];
      return `[${label}](${hrefMatch[2]})`;
    }
  );

  if (count > 0) {
    changes.push({
      type: "anchor",
      count,
      detail: `<Anchor> → markdown link`,
    });
  }

  return { content: result, changes };
}

// --- 12. <Table> JSX → markdown table ---

export function convertJsxTables(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const result = content.replace(
    /<Table[^>]*>([\s\S]*?)<\/Table>/gi,
    (_match, inner: string) => {
      const rows: string[][] = [];
      const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
      let trMatch;

      while ((trMatch = trRegex.exec(inner)) !== null) {
        const cells: string[] = [];
        const cellRegex = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
        let cellMatch;
        while ((cellMatch = cellRegex.exec(trMatch[1])) !== null) {
          let cellContent = cellMatch[1]
            .replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim();
          cellContent = cellContent.replace(/\|/g, "\\|");
          cells.push(cellContent);
        }
        if (cells.length > 0) rows.push(cells);
      }

      if (rows.length === 0) return _match;

      count++;
      const headers = rows[0];
      const bodyRows = rows.slice(1);
      const lines: string[] = [];
      lines.push(`| ${headers.join(" | ")} |`);
      lines.push(`| ${headers.map(() => "---").join(" | ")} |`);
      for (const row of bodyRows) {
        while (row.length < headers.length) row.push("");
        lines.push(`| ${row.join(" | ")} |`);
      }
      return lines.join("\n");
    }
  );

  if (count > 0) {
    changes.push({
      type: "jsx-table",
      count,
      detail: `<Table> JSX → markdown table`,
    });
  }

  return { content: result, changes };
}

// --- 13. <Glossary> → bold text ---

export function convertGlossary(content: string): ConvertResult {
  const changes: Change[] = [];
  let count = 0;

  const result = content.replace(
    /<Glossary>([^<]*)<\/Glossary>/gi,
    (_match, text: string) => {
      count++;
      return `**${text.trim()}**`;
    }
  );

  if (count > 0) {
    changes.push({
      type: "glossary",
      count,
      detail: `<Glossary> → **bold**`,
    });
  }

  return { content: result, changes };
}
