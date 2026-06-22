import type { ConvertResult } from "./converters";
import {
  CODE_FENCE_LANG_MAP,
  SAFE_TAGS,
  CONTAINER_COMPONENTS,
} from "./constants";

// --- 1. Remove import statements ---

export function removeImports(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const result = content.replace(
    /^import\s+.*?(?:from\s+['"].*?['"]|['"].*?['"])\s*;?\s*$/gm,
    () => {
      count++;
      return "";
    }
  );

  if (count > 0) {
    changes.push({ type: "import", count, detail: "removed import statements" });
  }
  return { content: result, changes };
}

// --- 2. Remove export statements ---

export function removeExports(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;
  let result = content;

  result = result.replace(
    /^export\s+(const|let|var)\s+\w+\s*=\s*[^{]*?;\s*$/gm,
    () => {
      count++;
      return "";
    }
  );

  const multiLinePattern =
    /^export\s+(?:(?:const|let|var)\s+\w+\s*=|function\s+\w+\s*\()/m;

  let safetyLimit = 50;
  let match;

  while ((match = multiLinePattern.exec(result)) !== null && safetyLimit-- > 0) {
    const startIdx = match.index;
    let braceDepth = 0;
    let parenDepth = 0;
    let foundFirstBrace = false;
    let inString = false;
    let stringChar = "";
    let i = startIdx;

    while (i < result.length) {
      const ch = result[i];
      const prev = i > 0 ? result[i - 1] : "";

      if (!inString && (ch === '"' || ch === "'")) {
        inString = true;
        stringChar = ch;
        i++;
        continue;
      }
      if (inString && ch === stringChar && prev !== "\\") {
        inString = false;
        i++;
        continue;
      }
      if (inString) { i++; continue; }

      if (ch === "(") parenDepth++;
      else if (ch === ")") parenDepth--;

      if (ch === "{" && parenDepth === 0) {
        braceDepth++;
        foundFirstBrace = true;
      } else if (ch === "}" && parenDepth === 0) {
        braceDepth--;
        if (foundFirstBrace && braceDepth === 0) {
          let endIdx = i + 1;
          while (endIdx < result.length && (result[endIdx] === ";" || result[endIdx] === " " || result[endIdx] === "\t")) endIdx++;
          if (endIdx < result.length && result[endIdx] === "\n") endIdx++;
          result = result.slice(0, startIdx) + result.slice(endIdx);
          count++;
          break;
        }
      }

      if (!foundFirstBrace && ch === ";" && braceDepth === 0 && parenDepth === 0) {
        const slice = result.slice(startIdx, i + 1);
        if (/=>/.test(slice)) {
          let endIdx = i + 1;
          while (endIdx < result.length && (result[endIdx] === " " || result[endIdx] === "\t")) endIdx++;
          if (endIdx < result.length && result[endIdx] === "\n") endIdx++;
          result = result.slice(0, startIdx) + result.slice(endIdx);
          count++;
          break;
        }
      }

      i++;
    }

    if (i >= result.length) break;
  }

  if (count > 0) {
    changes.push({ type: "export", count, detail: "removed export declarations" });
  }
  return { content: result, changes };
}

// --- 3. Remove ReadMe CSS classes ---

export function removeReadmeCssClasses(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const result = content.replace(
    /\s+(class|className)\s*=\s*(["'])((?:rm-|readme-|callout[ -]|rdmd-)[\w\s-]*)\2/gi,
    () => { count++; return ""; }
  );

  if (count > 0) {
    changes.push({ type: "css-class", count, detail: "removed ReadMe CSS classes" });
  }
  return { content: result, changes };
}

// --- 4. Fix heading hierarchy ---

export function fixHeadingHierarchy(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  const headings = [...content.matchAll(/^(#{1,6})\s/gm)];
  if (headings.length === 0) return { content, changes };

  const levels = headings.map((m) => m[1].length);
  const minLevel = Math.min(...levels);

  if (minLevel === 2) return { content, changes };

  let result: string;
  if (minLevel === 1) {
    result = content.replace(/^(#{1,6})\s/gm, (_match, hashes: string) => {
      const newLevel = Math.min(6, hashes.length + 1);
      return "#".repeat(newLevel) + " ";
    });
    changes.push({
      type: "heading", count: headings.length,
      detail: `demoted h1→h2 (shifted all headings down)`,
    });
  } else {
    const bump = minLevel - 2;
    result = content.replace(/^(#{1,6})\s/gm, (_match, hashes: string) => {
      const newLevel = Math.max(1, hashes.length - bump);
      return "#".repeat(newLevel) + " ";
    });
    changes.push({
      type: "heading", count: headings.length,
      detail: `bumped h${minLevel}→h2`,
    });
  }

  return { content: result, changes };
}

// --- 5. Left-align table columns ---

export function fixTableAlignment(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    if (/^\|[\s:.-]+\|$/.test(line.trim()) && line.includes("-")) {
      const cells = line.split("|");
      const fixed = cells.map((cell) => {
        const trimmed = cell.trim();
        if (!trimmed || !/^:?-+:?$/.test(trimmed)) return cell;
        if (trimmed.startsWith(":") || trimmed.endsWith(":")) return cell;
        count++;
        return " :" + "-".repeat(Math.max(3, trimmed.length - 1)) + " ";
      });
      result.push(fixed.join("|"));
    } else {
      result.push(line);
    }
  }

  if (count > 0) {
    changes.push({ type: "table-alignment", count, detail: "left-aligned table columns" });
  }
  return { content: result.join("\n"), changes };
}

// --- 6. Remove empty code fences ---

export function removeEmptyCodeFences(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  let result = content.replace(
    /^[ \t]*```\w*\s*\n[ \t]*```[ \t]*$/gm,
    () => { count++; return ""; }
  );

  if (count > 0) {
    changes.push({ type: "empty-code-fence", count, detail: "removed empty code fences" });
  }
  return { content: result, changes };
}

// --- 7. Collapse blank lines ---

export function collapseBlankLines(content: string): ConvertResult {
  return { content: content.replace(/\n{4,}/g, "\n\n\n"), changes: [] };
}

// --- 8. HTML comments → JSX comments ---

export function fixHtmlComments(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const parts = content.split(/(^[ \t]*```[\s\S]*?^[ \t]*```[ \t]*$)/m);
  const rebuilt: string[] = [];

  for (const part of parts) {
    if (/^[ \t]*```/.test(part)) { rebuilt.push(part); continue; }

    const fixed = part.replace(/<!--([\s\S]*?)-->/g, (match, inner: string) => {
      const idx = part.indexOf(match);
      let backtickCount = 0;
      for (let c = 0; c < idx; c++) {
        if (part[c] === "`") backtickCount++;
      }
      if (backtickCount % 2 === 1) return match;
      count++;
      return `{/*${inner}*/}`;
    });

    rebuilt.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "html-comment", count, detail: "<!-- --> → {/* */}" });
  }
  return { content: rebuilt.join(""), changes };
}

// --- 9. Self-close void elements ---

export function fixVoidElements(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const parts = content.split(/(^[ \t]*```[\s\S]*?^[ \t]*```[ \t]*$)/m);
  const rebuilt: string[] = [];

  for (const part of parts) {
    if (/^[ \t]*```/.test(part)) { rebuilt.push(part); continue; }

    let fixed = part;
    fixed = fixed.replace(/<br\s*(?!\/)\s*>/gi, () => { count++; return "<br/>"; });
    fixed = fixed.replace(/<hr\s*(?!\/)\s*>/gi, () => { count++; return "<hr/>"; });
    fixed = fixed.replace(/<img(\s[^>]*?)(?<!\/)>/gi, (_m, attrs: string) => { count++; return `<img${attrs} />`; });
    fixed = fixed.replace(/<input(\s[^>]*?)(?<!\/)>/gi, (_m, attrs: string) => { count++; return `<input${attrs} />`; });
    fixed = fixed.replace(/<source(\s[^>]*?)(?<!\/)>/gi, (_m, attrs: string) => { count++; return `<source${attrs} />`; });
    rebuilt.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "void-element", count, detail: "self-closed void HTML elements" });
  }
  return { content: rebuilt.join(""), changes };
}

// --- 10. Fix backslash escapes ---

export function fixBackslashEscapes(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    let fixed = "";
    let inInlineCode = false;

    for (let i = 0; i < line.length; i++) {
      if (line[i] === "`") { inInlineCode = !inInlineCode; fixed += line[i]; continue; }
      if (inInlineCode) { fixed += line[i]; continue; }

      if (line[i] === "\\" && i + 1 < line.length) {
        const next = line[i + 1];
        if ("_#|[](){}*~`<>!".includes(next)) { count++; continue; }
      }

      fixed += line[i];
    }

    result.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "backslash-escape", count, detail: "removed unnecessary backslash escapes" });
  }
  return { content: result.join("\n"), changes };
}

// --- 11. Fix angle brackets ---

export function fixAngleBrackets(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("{/*") && trimmedLine.endsWith("*/}")) {
      result.push(line);
      continue;
    }

    // Fix unclosed backticks that contain < (would hide angle brackets from escaping)
    let processLine = line;
    const backtickCount = (processLine.match(/`/g) || []).length;
    if (backtickCount % 2 !== 0 && /`[^`]*</.test(processLine)) {
      processLine = processLine.replace(/`(<[^`]*$)/, "$1");
      count++;
    }

    let fixed = "";
    let inInlineCode = false;
    let inJsxComment = false;
    let i = 0;

    while (i < processLine.length) {
      if (processLine[i] === "`") { inInlineCode = !inInlineCode; fixed += processLine[i]; i++; continue; }
      if (inInlineCode) { fixed += processLine[i]; i++; continue; }

      if (processLine.substring(i, i + 3) === "{/*") { inJsxComment = true; fixed += processLine[i]; i++; continue; }
      if (inJsxComment && processLine.substring(i, i + 3) === "*/}") { fixed += "*/}"; i += 3; inJsxComment = false; continue; }
      if (inJsxComment) { fixed += processLine[i]; i++; continue; }

      if (processLine[i] === "<") {
        const nextChar = i + 1 < processLine.length ? processLine[i + 1] : "";
        if (nextChar && /[^a-zA-Z\/!]/.test(nextChar)) {
          fixed += "&lt;";
          count++;
          i++;
          continue;
        }

        const closeIdx = processLine.indexOf(">", i + 1);
        if (closeIdx === -1) { fixed += "&lt;"; count++; i++; continue; }

        const inside = processLine.substring(i + 1, closeIdx);
        const fullTag = processLine.substring(i, closeIdx + 1);

        if (/^https?:\/\//.test(inside)) {
          fixed += `[${inside}](${inside})`;
          count++;
          i = closeIdx + 1;
          continue;
        }

        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inside)) {
          fixed += `[${inside}](mailto:${inside})`;
          count++;
          i = closeIdx + 1;
          continue;
        }

        const tagNameMatch = inside.match(/^\/?([a-zA-Z][a-zA-Z0-9]*)/);
        if (tagNameMatch && SAFE_TAGS.has(tagNameMatch[1])) {
          fixed += fullTag;
          i = closeIdx + 1;
          continue;
        }

        fixed += "`" + fullTag + "`";
        count++;
        i = closeIdx + 1;
        continue;
      }

      fixed += processLine[i];
      i++;
    }

    result.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "angle-bracket", count, detail: "escaped angle brackets" });
  }
  return { content: result.join("\n"), changes };
}

// --- 12. Fix curly braces ---

export function fixCurlyBraces(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  let inJsxTag = false;
  let jsxExprDepth = 0;
  let inJsxComment = false;
  let inString = false;
  let stringChar = "";

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    let fixed = "";
    let inInlineCode = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];

      if (ch === "`" && !inJsxComment && !inString) {
        inInlineCode = !inInlineCode;
        fixed += ch;
        continue;
      }
      if (inInlineCode) { fixed += ch; continue; }

      if (!inJsxComment && !inString && line.substring(i, i + 3) === "{/*") {
        inJsxComment = true;
        fixed += ch;
        continue;
      }
      if (inJsxComment) {
        if (line.substring(i, i + 3) === "*/}") {
          fixed += "*/}";
          i += 2;
          inJsxComment = false;
        } else {
          fixed += ch;
        }
        continue;
      }

      if ((inJsxTag || jsxExprDepth > 0) && !inString && (ch === '"' || ch === "'")) {
        inString = true;
        stringChar = ch;
        fixed += ch;
        continue;
      }
      if (inString) {
        if (ch === stringChar && (i === 0 || line[i - 1] !== "\\")) inString = false;
        fixed += ch;
        continue;
      }

      if (jsxExprDepth > 0) {
        if (ch === "{") jsxExprDepth++;
        else if (ch === "}") jsxExprDepth--;
        fixed += ch;
        continue;
      }

      if (inJsxTag) {
        if (ch === "{") { jsxExprDepth = 1; fixed += ch; continue; }
        if (ch === ">") { inJsxTag = false; fixed += ch; continue; }
        fixed += ch;
        continue;
      }

      if (ch === "<" && i + 1 < line.length && /^[a-zA-Z\/!]/.test(line.substring(i + 1))) {
        inJsxTag = true;
        fixed += ch;
        continue;
      }

      if (ch === "{") {
        if (line.substring(i, i + 3) === "{/*") {
          inJsxComment = true;
          fixed += ch;
          continue;
        }
        fixed += "\\{";
        count++;
        continue;
      }

      if (ch === "}") {
        if (i >= 2 && line[i - 2] === "*" && line[i - 1] === "/") {
          fixed += ch;
          continue;
        }
        fixed += "\\}";
        count++;
        continue;
      }

      fixed += ch;
    }

    result.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "curly-brace", count, detail: "escaped bare { } in text" });
  }
  return { content: result.join("\n"), changes };
}

// --- 13. Fix bare ampersands ---

export function fixAmpersands(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    const trimmed = line.trim();
    if (/^<\/?[A-Z]/.test(trimmed)) { result.push(line); continue; }

    let fixed = "";
    let inInlineCode = false;
    let inQuotedAttr = false;
    let attrQuoteChar = "";
    let inMdLink = false;

    for (let i = 0; i < line.length; i++) {
      if (line[i] === "`") { inInlineCode = !inInlineCode; fixed += line[i]; continue; }
      if (inInlineCode) { fixed += line[i]; continue; }

      if (!inQuotedAttr && !inMdLink && (line[i] === '"' || line[i] === "'")) {
        const before = line.substring(Math.max(0, i - 5), i);
        if (/=\s*$/.test(before)) {
          inQuotedAttr = true;
          attrQuoteChar = line[i];
          fixed += line[i];
          continue;
        }
      }
      if (inQuotedAttr && line[i] === attrQuoteChar) {
        inQuotedAttr = false;
        fixed += line[i];
        continue;
      }
      if (inQuotedAttr) { fixed += line[i]; continue; }

      if (!inMdLink && line[i] === "]" && i + 1 < line.length && line[i + 1] === "(") {
        inMdLink = true;
        fixed += line[i];
        continue;
      }
      if (inMdLink && line[i] === ")") {
        inMdLink = false;
        fixed += line[i];
        continue;
      }
      if (inMdLink) { fixed += line[i]; continue; }

      if (line[i] === "&") {
        const rest = line.substring(i);
        if (/^&(?:#[0-9]+|#x[0-9a-fA-F]+|[a-zA-Z]{2,8});/.test(rest)) {
          fixed += line[i];
          continue;
        }
        const prevChar = i > 0 ? line[i - 1] : " ";
        const nextChar = i + 1 < line.length ? line[i + 1] : " ";
        const needSpaceBefore = prevChar !== " " && prevChar !== "\t";
        const needSpaceAfter = nextChar !== " " && nextChar !== "\t";
        fixed += (needSpaceBefore ? " " : "") + "and" + (needSpaceAfter ? " " : "");
        count++;
        continue;
      }

      fixed += line[i];
    }

    result.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "ampersand", count, detail: "replaced bare & with 'and'" });
  }
  return { content: result.join("\n"), changes };
}

// --- 14. Fix code fence languages ---

export function fixCodeFenceLanguages(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const result = content.replace(
    /^([ \t]*```)(\w+)([ \t]*)$/gm,
    (match, prefix: string, lang: string, trailing: string) => {
      const lower = lang.toLowerCase();
      if (CODE_FENCE_LANG_MAP[lower] && lower !== CODE_FENCE_LANG_MAP[lower]) {
        count++;
        return prefix + CODE_FENCE_LANG_MAP[lower] + trailing;
      }
      return match;
    }
  );

  if (count > 0) {
    changes.push({ type: "code-fence-lang", count, detail: "fixed code fence languages" });
  }
  return { content: result, changes };
}

// --- 15. Blank lines inside JSX components ---

export function fixJsxBlankLines(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx];

    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    const openMatch = line.match(/^(\s*)<([A-Z][A-Za-z0-9]*)\b([^>]*)(?<!\/)>\s*$/);
    if (openMatch && CONTAINER_COMPONENTS.has(openMatch[2])) {
      // Strip leading whitespace — indented opening tags inside list items break MDX
      result.push(`<${openMatch[2]}${openMatch[3]}>`);
      if (idx + 1 < lines.length && lines[idx + 1].trim() !== "") {
        result.push("");
        count++;
      }
      continue;
    }

    const closeMatch = line.match(/^(\s*)<\/([A-Z][A-Za-z0-9]*)>\s*$/);
    if (closeMatch && CONTAINER_COMPONENTS.has(closeMatch[2])) {
      if (result.length > 0 && result[result.length - 1].trim() !== "") {
        result.push("");
        count++;
      }
      // Strip leading whitespace — indented closing tags break MDX when inside list context
      result.push(`</${closeMatch[2]}>`);
      continue;
    }

    // Handle closing tag at end of a text line: "some text </Callout>"
    const inlineCloseMatch = line.match(/^(.+?)\s*(<\/([A-Z][A-Za-z0-9]*)>)\s*$/);
    if (inlineCloseMatch && CONTAINER_COMPONENTS.has(inlineCloseMatch[3])) {
      result.push(inlineCloseMatch[1]);
      result.push("");
      result.push(inlineCloseMatch[2]);
      count++;
      continue;
    }

    // Handle opening tag at end of a text line: "some text <Callout kind="info">"
    const inlineOpenMatch = line.match(/^(.+?)\s*(<([A-Z][A-Za-z0-9]*)\b[^>]*(?<!\/)>)\s*$/);
    if (inlineOpenMatch && CONTAINER_COMPONENTS.has(inlineOpenMatch[3])) {
      result.push(inlineOpenMatch[1]);
      result.push("");
      result.push(inlineOpenMatch[2]);
      result.push("");
      count++;
      continue;
    }

    result.push(line);
  }

  if (count > 0) {
    changes.push({ type: "jsx-blank-lines", count, detail: "added blank lines inside JSX components" });
  }
  return { content: result.join("\n"), changes };
}

// --- 16. Remove orphaned closing braces ---

export function removeOrphanedClosingBraces(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    if (/^[ \t]*\};?\s*$/.test(line)) { count++; continue; }

    result.push(line);
  }

  if (count > 0) {
    changes.push({ type: "orphaned-brace", count, detail: "removed orphaned };" });
  }
  return { content: result.join("\n"), changes };
}

// --- 17. Remove orphaned </Image> caption lines ---

export function removeOrphanedImageCloseTags(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    if (/^\s*<\/Image>\s*$/.test(line)) {
      count++;
      continue;
    }

    // caption line right before </Image> (e.g. "  Caption Text\n</Image>")
    const nextLine = i + 1 < lines.length ? lines[i + 1] : "";
    if (/^\s*<\/Image>\s*$/.test(nextLine) && /^\s+\S/.test(line) && !/^\s*</.test(line)) {
      count++;
      continue;
    }

    // inline: "text</Image>" at end of line
    if (/<\/Image>\s*$/.test(line)) {
      result.push(line.replace(/<\/Image>\s*$/, "").trimEnd());
      count++;
      continue;
    }

    result.push(line);
  }

  if (count > 0) {
    changes.push({ type: "orphaned-image-close", count, detail: "removed orphaned </Image> and caption lines" });
  }
  return { content: result.join("\n"), changes };
}

// --- 18. Fix nested code blocks (same fence count) ---

export function fixNestedCodeBlocks(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  const lines = content.split("\n");
  const result: string[] = [];
  let count = 0;

  let startLine = 0;
  if (lines[0]?.trim() === "---") {
    for (let i = 1; i < lines.length; i++) {
      result.push(lines[i - 1]);
      if (lines[i].trim() === "---") { startLine = i + 1; result.push(lines[i]); break; }
    }
  }

  let i = startLine;
  while (i < lines.length) {
    const trimmed = lines[i].trim();
    const backtickMatch = trimmed.match(/^(`{3,})/);

    if (!backtickMatch) { result.push(lines[i]); i++; continue; }

    const outerCount = backtickMatch[1].length;
    const outerHasLang = trimmed !== "`".repeat(outerCount);

    // Scan ahead to find if there's a nesting problem
    let hasNesting = false;
    let j = i + 1;
    while (j < lines.length) {
      const innerTrimmed = lines[j].trim();
      const innerMatch = innerTrimmed.match(/^(`{3,})/);
      if (innerMatch) {
        const innerCount = innerMatch[1].length;
        const isClose = innerTrimmed === "`".repeat(innerCount);
        if (isClose && innerCount >= outerCount) break;
        if (!isClose && innerCount >= outerCount) { hasNesting = true; break; }
      }
      j++;
    }

    if (hasNesting) {
      // Upgrade the outer fence to outerCount+1
      const newCount = outerCount + 1;
      const lang = outerHasLang ? trimmed.slice(outerCount) : "";
      result.push("`".repeat(newCount) + lang);
      count++;
      i++;

      // Copy inner lines until we find the original closing fence
      let depth = 1;
      while (i < lines.length && depth > 0) {
        const innerTrimmed = lines[i].trim();
        const innerMatch = innerTrimmed.match(/^(`{3,})/);
        if (innerMatch) {
          const innerCount = innerMatch[1].length;
          const isClose = innerTrimmed === "`".repeat(innerCount);
          if (!isClose && innerCount === outerCount) {
            // This is the nested opening — keep as-is
            result.push(lines[i]);
          } else if (isClose && innerCount >= outerCount) {
            // This was the original closing fence — upgrade it too
            result.push("`".repeat(newCount));
            depth--;
          } else {
            result.push(lines[i]);
          }
        } else {
          result.push(lines[i]);
        }
        i++;
      }
    } else {
      result.push(lines[i]);
      i++;
    }
  }

  if (count > 0) {
    changes.push({ type: "nested-code-block", count, detail: "fixed nested code blocks by upgrading outer fence" });
  }
  return { content: result.join("\n"), changes };
}

// --- 18. Convert <HTMLBlock>{`...`}</HTMLBlock> ---

export function convertHtmlBlocks(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const result = content.replace(
    /<HTMLBlock>\{\`([\s\S]*?)\`\}<\/HTMLBlock>/g,
    (_match, inner: string) => {
      const trimmed = inner.trim();
      count++;
      if (/<[a-zA-Z][\s\S]*>/.test(trimmed)) return trimmed;
      return "```\n" + trimmed + "\n```";
    }
  );

  if (count > 0) {
    changes.push({ type: "html-block", count, detail: "<HTMLBlock> → raw content or code fence" });
  }
  return { content: result, changes };
}

// --- 20. Extract JSX container tags trapped inside code fences ---

export function extractJsxFromCodeFences(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  let fenceCount = 0;
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    const fenceMatch = trimmed.match(/^(`{3,})/);

    if (fenceMatch) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        fenceCount = fenceMatch[1].length;
        result.push(lines[i]);
        continue;
      }
      if (trimmed === "`".repeat(fenceCount) || fenceMatch[1].length >= fenceCount) {
        inCodeBlock = false;
        fenceCount = 0;
        result.push(lines[i]);
        continue;
      }
    }

    if (inCodeBlock) {
      // Check if this line is a JSX container tag that shouldn't be in a code fence
      const jsxMatch = trimmed.match(/^<\/?([A-Z][A-Za-z0-9]*)[\s>]/);
      if (jsxMatch && CONTAINER_COMPONENTS.has(jsxMatch[1]) && !trimmed.includes("```")) {
        // Close the code fence, output the tag, reopen if more code follows
        result.push("`".repeat(fenceCount));
        result.push("");
        result.push(trimmed);
        inCodeBlock = false;
        fenceCount = 0;
        count++;
        continue;
      }
    }

    result.push(lines[i]);
  }

  if (count > 0) {
    changes.push({ type: "jsx-from-fence", count, detail: "extracted JSX tags trapped inside code fences" });
  }
  return { content: result.join("\n"), changes };
}

// --- 21. Fix nested quotes inside JSX attributes ---

export function fixNestedQuotesInAttributes(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inCodeBlock = false;
  const result: string[] = [];

  for (const line of lines) {
    if (/^[ \t]*```/.test(line)) { inCodeBlock = !inCodeBlock; result.push(line); continue; }
    if (inCodeBlock) { result.push(line); continue; }

    if (!/<[A-Z][A-Za-z0-9]*\s/.test(line)) { result.push(line); continue; }

    let fixed = line;
    fixed = fixed.replace(
      /\b(tabs|title|label|name)="((?:[^"]*"[^"]*"[^"]*)+)"/g,
      (_m, attr: string, val: string) => {
        count++;
        return attr + "={`" + val + "`}";
      }
    );
    result.push(fixed);
  }

  if (count > 0) {
    changes.push({ type: "nested-quotes", count, detail: "fixed nested quotes in JSX attributes" });
  }
  return { content: result.join("\n"), changes };
}

// --- 22. Remove unclosed code fences (runs last) ---

export function removeUnclosedCodeFences(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  const lines = content.split("\n");
  let inFence = false;
  let fenceStart = -1;
  let fenceTicks = 0;

  for (let fi = 0; fi < lines.length; fi++) {
    const ftrimmed = lines[fi].trim();
    const fm = ftrimmed.match(/^(`{3,})/);
    if (!fm) continue;
    if (!inFence) {
      inFence = true;
      fenceStart = fi;
      fenceTicks = fm[1].length;
    } else if (ftrimmed === "`".repeat(fenceTicks) || (fm[1].length >= fenceTicks && ftrimmed === "`".repeat(fm[1].length))) {
      inFence = false;
      fenceStart = -1;
    }
  }

  if (inFence && fenceStart >= 0) {
    lines[fenceStart] = "";
    count++;
  }

  if (count > 0) {
    changes.push({ type: "unclosed-fence", count, detail: "removed unclosed code fence" });
  }
  return { content: lines.join("\n"), changes };
}

// --- 23. Redact secrets (matches Documentation.AI backend's redact-secrets.ts) ---

const SECRET_RULES: { re: RegExp; replace: string }[] = [
  { re: /\b((?:sk|rk|pk)_(?:test|live)_)[A-Za-z0-9]{16,}\b/g, replace: "$1your_key_here" },
  { re: /\bsk-[A-Za-z0-9]{20,}\b/g, replace: "YOUR_API_KEY" },
  { re: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, replace: "YOUR_GITHUB_TOKEN" },
  { re: /\bAKIA[0-9A-Z]{16}\b/g, replace: "YOUR_AWS_ACCESS_KEY_ID" },
  { re: /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9_/]+/g, replace: "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" },
  { re: /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g, replace: "YOUR_JWT_TOKEN" },
  { re: /\bAIza[0-9A-Za-z_-]{35}\b/g, replace: "YOUR_GOOGLE_API_KEY" },
  { re: /\bgithub_pat_[0-9A-Za-z_]{30,}\b/g, replace: "YOUR_GITHUB_TOKEN" },
  { re: /\bnpm_[A-Za-z0-9]{30,}\b/g, replace: "YOUR_NPM_TOKEN" },
  { re: /\bSG\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{30,}\b/g, replace: "YOUR_SENDGRID_API_KEY" },
  { re: /\bSK[0-9a-fA-F]{32}\b/g, replace: "YOUR_TWILIO_API_KEY" },
  { re: /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----[\s\S]*?-----END (?:[A-Z ]+ )?PRIVATE KEY-----/g, replace: "YOUR_PRIVATE_KEY" },
  { re: /\bsk-ant-[A-Za-z0-9_-]{20,}\b/g, replace: "YOUR_ANTHROPIC_API_KEY" },
  { re: /\bhf_[A-Za-z0-9]{30,}\b/g, replace: "YOUR_HF_TOKEN" },
  { re: /\bglpat-[A-Za-z0-9_-]{20,}\b/g, replace: "YOUR_GITLAB_TOKEN" },
  { re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g, replace: "YOUR_SLACK_TOKEN" },
  { re: /\bGOCSPX-[A-Za-z0-9_-]{20,}\b/g, replace: "YOUR_GOOGLE_OAUTH_SECRET" },
  { re: /\bya29\.[A-Za-z0-9_-]{20,}\b/g, replace: "YOUR_GOOGLE_OAUTH_TOKEN" },
  { re: /\bshp(?:at|ss|ca|pa)_[0-9a-fA-F]{32}\b/g, replace: "YOUR_SHOPIFY_TOKEN" },
  { re: /\bsq0(?:atp|csp)-[A-Za-z0-9_-]{22,}\b/g, replace: "YOUR_SQUARE_TOKEN" },
  { re: /\bPMAK-[0-9a-fA-F]{24}-[0-9a-fA-F]{34}\b/g, replace: "YOUR_POSTMAN_API_KEY" },
  { re: /\bpypi-[A-Za-z0-9_-]{50,}\b/g, replace: "YOUR_PYPI_TOKEN" },
  { re: /\bkey-[0-9a-fA-F]{32}\b/g, replace: "YOUR_MAILGUN_KEY" },
  { re: /\blin_api_[A-Za-z0-9]{20,}\b/g, replace: "YOUR_LINEAR_API_KEY" },
  { re: /\bdp\.(?:pt|st|ct|sa|scim|audit)\.[A-Za-z0-9]{40,}\b/g, replace: "YOUR_DOPPLER_TOKEN" },
];

export function redactSecrets(content: string): ConvertResult {
  const changes: ConvertResult["changes"] = [];
  let count = 0;

  let result = content;
  for (const rule of SECRET_RULES) {
    result = result.replace(rule.re, (...args) => {
      count++;
      const g1 = typeof args[1] === "string" ? args[1] : "";
      return rule.replace.replace("$1", g1);
    });
  }

  if (count > 0) {
    changes.push({ type: "redact-secret", count, detail: "redacted secret-shaped tokens" });
  }
  return { content: result, changes };
}
