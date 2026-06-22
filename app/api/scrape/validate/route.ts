import { NextResponse } from "next/server";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkGfm from "remark-gfm";
import { compile } from "@mdx-js/mdx";

const MDX_DIR = path.join(process.cwd(), "mdx");

interface Issue {
  file: string;
  line: number;
  rule: string;
  severity: "error" | "warning";
  message: string;
  snippet: string;
}

interface FileReport {
  file: string;
  errors: number;
  warnings: number;
  issues: Issue[];
}

/**
 * Exact component allowlist from Documentation.AI backend
 * Source: documentation-ai-backend/src/trigger/services/deployment/mdxValidation.service.ts
 */
const ALLOWED_CUSTOM_COMPONENTS = new Set([
  "AuthParams", "AuthType", "BodyParams", "ContentType",
  "ParamField", "ResponseField", "Request", "Response",
  "Card", "CollectionList", "CollectionContent", "Columns",
  "Steps", "Step", "Tabs", "Tab", "Expandable", "ExpandableGroup",
  "Callout", "CodeBlock", "CodeGroup", "Iframe", "Image",
  "MermaidDiagram", "Script", "Update", "Video",
  "Board", "BoardColumn", "BoardCard",
  "Link", "PlaygroundComponent",
]);

/**
 * Component required-attribute specs from Documentation.AI backend
 * Source: documentation-ai-backend/src/services/ai/starter-kit/validators/components.validator.ts
 */
const COMPONENT_SPECS: {
  name: string;
  required?: string[];
  oneOf?: string[];
}[] = [
  { name: "Card", required: ["title"] },
  { name: "Columns", required: ["cols"] },
  { name: "Step", required: ["title"] },
  { name: "Tab", required: ["title"] },
  { name: "Expandable", required: ["title"] },
  { name: "Image", required: ["src"] },
  { name: "Update", required: ["label"] },
  { name: "BoardColumn", required: ["title"] },
  { name: "BoardCard", required: ["title"] },
  { name: "ResponseField", required: ["name", "field-type"] },
  { name: "ParamField", oneOf: ["path", "query", "header", "body"] },
  { name: "CollectionList", required: ["node"] },
  { name: "CollectionContent", required: ["node"] },
];

/**
 * Forbidden HTML table tags — Documentation.AI has no <Table> component.
 * Use markdown table syntax instead.
 */
const INVALID_TABLE_PATTERNS = [
  { pattern: "<Table", name: "<Table>" },
  { pattern: "<thead", name: "<thead>" },
  { pattern: "<tbody", name: "<tbody>" },
  { pattern: "<tr>", name: "<tr>" },
  { pattern: "<th>", name: "<th>" },
  { pattern: "<td>", name: "<td>" },
];

// ====================================================================
// The 7 validation checks — ported from the real deployment validator
// ====================================================================

/**
 * Check 1: Frontmatter validation
 * - Optional, but if present must be properly closed
 * - Blank lines in frontmatter = warning
 */
function checkFrontmatter(lines: string[], relPath: string): Issue[] {
  const issues: Issue[] = [];

  if (lines[0]?.trim() !== "---") return issues;

  let closingIdx = -1;
  for (let i = 1; i < Math.min(30, lines.length); i++) {
    if (lines[i].trim() === "---") {
      closingIdx = i;
      break;
    }
  }

  if (closingIdx === -1) {
    issues.push({
      file: relPath, line: 1, rule: "frontmatter-unclosed",
      severity: "error",
      message: "Frontmatter not properly closed with ---. Add a closing --- after the frontmatter fields.",
      snippet: lines.slice(0, 5).join("\n"),
    });
    return issues;
  }

  for (let i = 1; i < closingIdx; i++) {
    if (lines[i].trim() === "") {
      issues.push({
        file: relPath, line: i + 1, rule: "frontmatter-blank-line",
        severity: "warning",
        message: "Blank line in frontmatter. Consider removing to avoid YAML parsing issues.",
        snippet: lines[i],
      });
      break;
    }
  }

  return issues;
}

/**
 * Check 2: HTML entities in JSX attributes that break when decoded
 * &#x22; / &#34; / &quot; inside double-quoted attrs
 * &#x27; / &#39; / &apos; inside single-quoted attrs
 */
function checkHtmlEntitiesInJsxAttributes(lines: string[], relPath: string): Issue[] {
  const issues: Issue[] = [];

  const doubleQuoteEntityInDouble = /="[^"]*(?:&#x22;|&#34;|&quot;)[^"]*"/;
  const singleQuoteEntityInSingle = /='[^']*(?:&#x27;|&#39;|&apos;)[^']*'/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (doubleQuoteEntityInDouble.test(line)) {
      issues.push({
        file: relPath, line: i + 1, rule: "html-entity-in-jsx-attr",
        severity: "error",
        message: "HTML quote entity (&#x22;, &#34;, &quot;) inside double-quoted JSX attribute will break syntax when decoded.",
        snippet: line.trim().substring(0, 120),
      });
    }
    if (singleQuoteEntityInSingle.test(line)) {
      issues.push({
        file: relPath, line: i + 1, rule: "html-entity-in-jsx-attr",
        severity: "error",
        message: "HTML quote entity (&#x27;, &#39;, &apos;) inside single-quoted JSX attribute will break syntax when decoded.",
        snippet: line.trim().substring(0, 120),
      });
    }
  }

  return issues;
}

/**
 * Check 3: Nested code blocks with incorrect fence counts
 * Exact logic from mdxValidation.service.ts checkNestedCodeBlocks
 */
function checkNestedCodeBlocks(lines: string[], relPath: string): Issue[] {
  const issues: Issue[] = [];

  let startLine = 0;
  if (lines[0]?.trim() === "---") {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") { startLine = i + 1; break; }
    }
  }

  const codeBlockStack: { line: number; backtickCount: number }[] = [];

  for (let i = startLine; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    const backtickMatch = trimmed.match(/^(`{3,})/);
    if (!backtickMatch) continue;

    const backtickCount = backtickMatch[1].length;
    const isClosingFence = trimmed === "`".repeat(backtickCount);

    if (codeBlockStack.length > 0) {
      const topBlock = codeBlockStack[codeBlockStack.length - 1];

      if (backtickCount < topBlock.backtickCount) continue;

      if (isClosingFence) {
        codeBlockStack.pop();
      } else {
        issues.push({
          file: relPath, line: i + 1, rule: "nested-code-block",
          severity: "error",
          message: `Code fence with ${backtickCount} backticks and language identifier found inside a ${topBlock.backtickCount}-backtick code block (line ${topBlock.line}). Use more backticks for the outer block.`,
          snippet: trimmed.substring(0, 120),
        });
        return issues;
      }
    } else {
      codeBlockStack.push({ line: i + 1, backtickCount });
    }
  }

  if (codeBlockStack.length > 0) {
    const unclosed = codeBlockStack[0];
    issues.push({
      file: relPath, line: unclosed.line, rule: "unclosed-code-block",
      severity: "error",
      message: `Unclosed code block with ${unclosed.backtickCount} backticks was never closed.`,
      snippet: lines[unclosed.line - 1]?.trim().substring(0, 120) || "",
    });
  }

  return issues;
}

/**
 * Check 4: Invalid table components (<Table>, <tr>, <td>, <th>, <thead>, <tbody>)
 * These don't exist in Documentation.AI — use markdown tables.
 */
function checkInvalidTableComponents(lines: string[], relPath: string): Issue[] {
  const issues: Issue[] = [];
  let inCodeBlock = false;
  let codeBlockBackticks = 0;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    const backtickMatch = trimmed.match(/^(`{3,})/);
    if (backtickMatch) {
      const count = backtickMatch[1].length;
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockBackticks = count;
      } else if (count >= codeBlockBackticks && trimmed === "`".repeat(count)) {
        inCodeBlock = false;
        codeBlockBackticks = 0;
      }
      continue;
    }
    if (inCodeBlock) continue;

    for (const { pattern, name } of INVALID_TABLE_PATTERNS) {
      if (lines[i].includes(pattern)) {
        issues.push({
          file: relPath, line: i + 1, rule: "invalid-table-component",
          severity: "error",
          message: `Invalid component ${name} found. The <Table> component does NOT exist in Documentation.AI. Use Markdown table syntax instead: | Column | Column |`,
          snippet: trimmed.substring(0, 120),
        });
        return issues;
      }
    }
  }

  return issues;
}

/**
 * Check 5: Unescaped curly braces with UPPERCASE variable-like content
 * {API_KEY}, {DATABASE_URL}, etc. — interpreted as JSX expressions
 */
function checkUnescapedBraces(lines: string[], relPath: string): Issue[] {
  const issues: Issue[] = [];

  let startLine = 0;
  if (lines[0]?.trim() === "---") {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") { startLine = i + 1; break; }
    }
  }

  let inCodeBlock = false;
  let codeBlockBackticks = 0;

  for (let i = startLine; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    const backtickMatch = trimmed.match(/^(`{3,})/);
    if (backtickMatch) {
      const count = backtickMatch[1].length;
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockBackticks = count;
      } else if (count >= codeBlockBackticks && trimmed === "`".repeat(count)) {
        inCodeBlock = false;
        codeBlockBackticks = 0;
      }
      continue;
    }
    if (inCodeBlock) continue;

    const segments = lines[i].split("`");
    for (let j = 0; j < segments.length; j += 2) {
      const segment = segments[j];
      const varMatch = segment.match(/\{([A-Z_][A-Z0-9_]*)\}/);
      if (varMatch) {
        issues.push({
          file: relPath, line: i + 1, rule: "unescaped-braces",
          severity: "error",
          message: `Unescaped curly braces with variable-like content: {${varMatch[1]}}. This will be interpreted as a JSX expression. Wrap in backticks: \`{${varMatch[1]}}\``,
          snippet: trimmed.substring(0, 120),
        });
        return issues;
      }
    }
  }

  return issues;
}

/**
 * Check 6: Unsupported custom components
 * PascalCase tags not in ALLOWED_CUSTOM_COMPONENTS will cause runtime errors
 */
function checkUnsupportedComponents(lines: string[], relPath: string): Issue[] {
  const issues: Issue[] = [];
  let inCodeBlock = false;
  let codeBlockBackticks = 0;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    const backtickMatch = trimmed.match(/^(`{3,})/);
    if (backtickMatch) {
      const count = backtickMatch[1].length;
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockBackticks = count;
      } else if (count >= codeBlockBackticks && trimmed === "`".repeat(count)) {
        inCodeBlock = false;
        codeBlockBackticks = 0;
      }
      continue;
    }
    if (inCodeBlock) continue;

    // Remove inline code
    const lineNoCode = lines[i].replace(/`[^`]*`/g, "");

    // Find PascalCase opening tags: <ComponentName or <ComponentName/
    const tagMatches = [...lineNoCode.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)];
    for (const m of tagMatches) {
      const name = m[1];
      if (!ALLOWED_CUSTOM_COMPONENTS.has(name)) {
        issues.push({
          file: relPath, line: i + 1, rule: "unsupported-component",
          severity: "error",
          message: `<${name}> is not a supported component in Documentation.AI. Remove it or replace with a supported component like <Callout>, <Card>, <Tabs>, or <Steps>.`,
          snippet: trimmed.substring(0, 120),
        });
      }
    }
  }

  return issues;
}

/**
 * Check 7: Component attribute contract violations
 * Required attributes missing on known components
 */
function checkComponentAttributes(content: string, relPath: string): Issue[] {
  const issues: Issue[] = [];
  const lines = content.split("\n");

  // Strip code blocks first
  let inCodeBlock = false;
  let codeBlockBackticks = 0;
  const strippedLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const backtickMatch = trimmed.match(/^(`{3,})/);
    if (backtickMatch) {
      const count = backtickMatch[1].length;
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockBackticks = count;
      } else if (count >= codeBlockBackticks && trimmed === "`".repeat(count)) {
        inCodeBlock = false;
        codeBlockBackticks = 0;
      }
      strippedLines.push("");
      continue;
    }
    if (inCodeBlock) {
      strippedLines.push("");
      continue;
    }
    strippedLines.push(line);
  }

  const strippedContent = strippedLines.join("\n");

  for (const spec of COMPONENT_SPECS) {
    if (!strippedContent.includes(`<${spec.name}`)) continue;

    const tagRe = new RegExp(`<${spec.name}\\b[^>]*?>`, "g");
    let match: RegExpExecArray | null;
    while ((match = tagRe.exec(strippedContent)) !== null) {
      const tag = match[0];
      const has = (attr: string) => new RegExp(`\\b${attr}\\s*=`).test(tag);

      // Find line number
      const beforeMatch = strippedContent.substring(0, match.index);
      const lineNum = beforeMatch.split("\n").length;

      for (const attr of spec.required ?? []) {
        if (!has(attr)) {
          issues.push({
            file: relPath, line: lineNum, rule: "missing-component-attr",
            severity: "error",
            message: `<${spec.name}> is missing required \`${attr}=\` attribute`,
            snippet: tag.replace(/\s+/g, " ").trim().substring(0, 90),
          });
        }
      }

      if (spec.oneOf && !spec.oneOf.some(has)) {
        issues.push({
          file: relPath, line: lineNum, rule: "missing-component-attr",
          severity: "error",
          message: `<${spec.name}> needs one of ${spec.oneOf.map((a) => `${a}=`).join(", ")}`,
          snippet: tag.replace(/\s+/g, " ").trim().substring(0, 90),
        });
      }
    }
  }

  return issues;
}

// ====================================================================
// Run all checks on a file
// ====================================================================

async function validateFile(relPath: string, content: string): Promise<Issue[]> {
  const lines = content.split("\n");
  const allIssues: Issue[] = [];

  // Check 1: Frontmatter
  allIssues.push(...checkFrontmatter(lines, relPath));

  // Check 2: HTML entities in JSX attributes
  allIssues.push(...checkHtmlEntitiesInJsxAttributes(lines, relPath));

  // Check 3: Nested code blocks
  allIssues.push(...checkNestedCodeBlocks(lines, relPath));

  // Check 4: Invalid table components
  allIssues.push(...checkInvalidTableComponents(lines, relPath));

  // Check 5: Unescaped braces
  allIssues.push(...checkUnescapedBraces(lines, relPath));

  // Check 6: Unsupported components
  allIssues.push(...checkUnsupportedComponents(lines, relPath));

  // Check 7: Component attribute contracts
  allIssues.push(...checkComponentAttributes(content, relPath));

  // Check 8: Real MDX parse + compile (same as dashboard + backend)
  allIssues.push(...await checkMdxCompile(content, relPath));

  return allIssues;
}

/**
 * Check 8: Real MDX compilation — catches JSX syntax errors, unclosed tags,
 * closing tags on same line as paragraph text, etc.
 * Same as dashboard's mdxValidator + backend's MDXParser.validate
 */
async function checkMdxCompile(content: string, relPath: string): Promise<Issue[]> {
  const issues: Issue[] = [];

  // Step A: remark parse (same as dashboard)
  try {
    const processor = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);
    processor.parse(content);
  } catch (err: unknown) {
    const error = err as Record<string, unknown>;
    let line = 1;
    let message = String(error?.message || "Unknown parse error");

    if (error?.position && typeof error.position === "object") {
      const pos = error.position as Record<string, Record<string, number>>;
      if (pos.start?.line) line = pos.start.line;
    } else if (typeof error?.line === "number") {
      line = error.line as number;
    }

    issues.push({
      file: relPath, line, rule: "mdx-parse",
      severity: "error",
      message: `MDX parse error: ${message}`,
      snippet: content.split("\n")[line - 1]?.trim().substring(0, 120) || "",
    });
    return issues;
  }

  // Step B: full MDX compile (same as backend MDXParser.validate)
  try {
    await compile(content, { jsx: false, format: "mdx", development: false });
  } catch (err: unknown) {
    const error = err as Record<string, unknown>;
    let line = 1;
    let message = String(error?.message || "Unknown compile error");

    if (error?.position && typeof error.position === "object") {
      const pos = error.position as Record<string, Record<string, number>>;
      if (pos.start?.line) line = pos.start.line;
    } else if (typeof error?.line === "number") {
      line = error.line as number;
    }

    issues.push({
      file: relPath, line, rule: "mdx-compile",
      severity: "error",
      message: `MDX compile error: ${message}`,
      snippet: content.split("\n")[line - 1]?.trim().substring(0, 120) || "",
    });
  }

  return issues;
}

function sanitize(name: string): string {
  return name.replace(/[<>:"/\\|?*]/g, "-").replace(/\s+/g, " ").trim();
}

export async function POST(req: Request) {
  let body: { site?: string; section?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { site, section } = body;
  if (!site || typeof site !== "string") {
    return NextResponse.json(
      { error: "site (hostname) required" },
      { status: 400 }
    );
  }

  const safeName = sanitize(site);
  const siteMdxDir = path.join(MDX_DIR, safeName);

  let sectionDirs: string[];
  try {
    const entries = await readdir(siteMdxDir, { withFileTypes: true });
    sectionDirs = entries
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    if (section) {
      sectionDirs = sectionDirs.filter((d) => d === section);
    }
  } catch {
    return NextResponse.json(
      { error: `No MDX output found for "${site}". Run convert first.` },
      { status: 404 }
    );
  }

  const startTime = Date.now();
  const fileReports: FileReport[] = [];
  let totalFiles = 0;
  let totalErrors = 0;
  let totalWarnings = 0;
  const ruleCounts: Record<string, number> = {};

  for (const sectionName of sectionDirs) {
    const sectionDir = path.join(siteMdxDir, sectionName);
    let files: string[];
    try {
      files = (await readdir(sectionDir)).filter((f) => f.endsWith(".mdx"));
    } catch {
      continue;
    }

    for (const file of files) {
      totalFiles++;
      const filePath = path.join(sectionDir, file);
      const content = await readFile(filePath, "utf-8");
      const relPath = `${sectionName}/${file}`;
      const issues = await validateFile(relPath, content);

      const errors = issues.filter((i) => i.severity === "error").length;
      const warnings = issues.filter((i) => i.severity === "warning").length;
      totalErrors += errors;
      totalWarnings += warnings;

      for (const issue of issues) {
        ruleCounts[issue.rule] = (ruleCounts[issue.rule] || 0) + 1;
      }

      if (issues.length > 0) {
        fileReports.push({
          file: relPath,
          errors,
          warnings,
          issues,
        });
      }
    }
  }

  const totalMs = Date.now() - startTime;

  fileReports.sort((a, b) => b.errors - a.errors || b.warnings - a.warnings);

  return NextResponse.json({
    site,
    validationSource: "Documentation.AI deployment rules (8 checks)",
    checks: [
      "1. Frontmatter — must be closed if present",
      "2. HTML entities in JSX attributes — &#x22; in double quotes etc.",
      "3. Nested code blocks — same fence count breaks structure",
      "4. Invalid table components — <Table>, <tr>, <td>, <th>, <thead>, <tbody> forbidden",
      "5. Unescaped braces — {UPPERCASE_VAR} in text causes JSX parse error",
      "6. Unsupported components — PascalCase tags not in allowlist",
      "7. Component attributes — required attrs missing (src on Image, title on Card, etc.)",
      "8. MDX parse + compile — real remark-mdx/mdx-js compiler (same as dashboard + backend)",
    ],
    stats: {
      totalFiles,
      filesWithIssues: fileReports.length,
      cleanFiles: totalFiles - fileReports.length,
      totalErrors,
      totalWarnings,
      timeMs: totalMs,
    },
    ruleBreakdown: Object.entries(ruleCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([rule, count]) => ({ rule, count })),
    files: fileReports,
  });
}
