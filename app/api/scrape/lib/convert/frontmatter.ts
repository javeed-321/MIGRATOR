import { README_ONLY_FIELDS } from "./constants";

export interface FrontmatterResult {
  frontmatter: Record<string, unknown> | null;
  frontmatterStr: string;
  body: string;
  removedFields: string[];
}

function stripQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function stripInlineComment(value: string): string {
  if (value.startsWith('"') || value.startsWith("'")) return value;
  const idx = value.indexOf(" #");
  return idx !== -1 ? value.slice(0, idx).trimEnd() : value;
}

function parseYaml(yamlStr: string): Record<string, unknown> {
  const lines = yamlStr.split(/\r?\n/);
  const cursor = { index: 0 };
  return parseObject(lines, 0, cursor);
}

function parseObject(
  lines: string[],
  minIndent: number,
  cursor: { index: number }
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  while (cursor.index < lines.length) {
    const line = lines[cursor.index];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      cursor.index++;
      continue;
    }

    const indent = line.search(/\S/);
    if (indent < minIndent) break;

    const colonIdx = trimmed.indexOf(":");
    if (colonIdx === -1) {
      cursor.index++;
      continue;
    }

    const key = trimmed.slice(0, colonIdx).trim();
    let valueStr = trimmed.slice(colonIdx + 1).trim();
    valueStr = stripInlineComment(valueStr);

    if (valueStr) {
      result[key] = stripQuotes(valueStr);
      cursor.index++;
    } else {
      cursor.index++;
      const nextIndent = peekNextIndent(lines, cursor.index);

      if (nextIndent !== null && nextIndent > indent) {
        const nextLine = peekNextLine(lines, cursor.index);
        const nextTrimmed = lines[nextLine].trim();
        if (nextTrimmed.startsWith("- ")) {
          result[key] = parseArray(lines, nextIndent, cursor);
        } else {
          result[key] = parseObject(lines, nextIndent, cursor);
        }
      } else {
        result[key] = "";
      }
    }
  }

  return result;
}

function parseArray(
  lines: string[],
  minIndent: number,
  cursor: { index: number }
): string[] {
  const result: string[] = [];

  while (cursor.index < lines.length) {
    const line = lines[cursor.index];
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      cursor.index++;
      continue;
    }

    const indent = line.search(/\S/);
    if (indent < minIndent) break;

    if (trimmed.startsWith("- ")) {
      let value = trimmed.slice(2).trim();
      value = stripInlineComment(value);
      result.push(stripQuotes(value));
      cursor.index++;
    } else {
      break;
    }
  }

  return result;
}

function peekNextIndent(lines: string[], fromIndex: number): number | null {
  for (let i = fromIndex; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed && !trimmed.startsWith("#")) {
      return lines[i].search(/\S/);
    }
  }
  return null;
}

function peekNextLine(lines: string[], fromIndex: number): number {
  for (let i = fromIndex; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed && !trimmed.startsWith("#")) return i;
  }
  return fromIndex;
}

function quoteIfNeeded(value: string): string {
  if (
    /[:#{}\[\],&*?|>!%@`]/.test(value) ||
    value.startsWith('"') ||
    value.startsWith("'")
  ) {
    return `"${value.replace(/"/g, '\\"')}"`;
  }
  return value;
}

function serializeYaml(
  obj: Record<string, unknown>,
  indent = 0
): string {
  const lines: string[] = [];
  const prefix = "  ".repeat(indent);

  for (const [key, value] of Object.entries(obj)) {
    if (value === "" || value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${prefix}${key}:`);
      for (const item of value) {
        lines.push(`${prefix}  - ${quoteIfNeeded(String(item))}`);
      }
    } else if (typeof value === "object") {
      const nested = serializeYaml(
        value as Record<string, unknown>,
        indent + 1
      );
      if (nested) {
        lines.push(`${prefix}${key}:`);
        lines.push(nested);
      }
    } else {
      lines.push(`${prefix}${key}: ${quoteIfNeeded(String(value))}`);
    }
  }

  return lines.join("\n");
}

export function extractFrontmatter(mdxContent: string): FrontmatterResult {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(mdxContent);

  if (!match) {
    const headingMatch = /^#\s+(.+)$/m.exec(mdxContent);

    if (headingMatch) {
      const title = headingMatch[1].trim();
      const body = mdxContent.replace(/^#\s+.+\r?\n?/, "");
      return {
        frontmatter: { title },
        frontmatterStr: `---\ntitle: ${quoteIfNeeded(title)}\n---`,
        body,
        removedFields: [],
      };
    }

    return {
      frontmatter: null,
      frontmatterStr: "",
      body: mdxContent,
      removedFields: [],
    };
  }

  const rawYaml = match[1];
  const body = mdxContent.slice(match[0].length).replace(/^\r?\n/, "");
  const parsed = parseYaml(rawYaml) as Record<string, unknown>;

  if (!parsed.description) {
    if (parsed.excerpt && typeof parsed.excerpt === "string") {
      parsed.description = parsed.excerpt;
    } else if (
      parsed.metadata &&
      typeof parsed.metadata === "object" &&
      (parsed.metadata as Record<string, unknown>).description
    ) {
      parsed.description = (parsed.metadata as Record<string, unknown>)
        .description;
    }
  }

  const removedFields: string[] = [];
  for (const key of Object.keys(parsed)) {
    if (README_ONLY_FIELDS.has(key)) {
      removedFields.push(key);
      delete parsed[key];
    }
  }

  let cleanedBody = body;
  if (parsed.title && typeof parsed.title === "string") {
    const escapedTitle = parsed.title.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    cleanedBody = cleanedBody.replace(
      new RegExp(`^#{1,2}\\s+${escapedTitle}\\s*\\r?\\n*`, "m"),
      ""
    );
  }

  const cleanedYaml = serializeYaml(parsed);
  const frontmatterStr = cleanedYaml ? `---\n${cleanedYaml}\n---` : "";

  return {
    frontmatter: Object.keys(parsed).length > 0 ? parsed : null,
    frontmatterStr,
    body: cleanedBody,
    removedFields,
  };
}
