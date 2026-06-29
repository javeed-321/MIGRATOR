import { NextResponse } from "next/server";
import { readdir, readFile } from "fs/promises";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkGfm from "remark-gfm";
import { compile } from "@mdx-js/mdx";
import { load as yamlLoad } from "js-yaml";
import SwaggerParser from "@apidevtools/swagger-parser";

const MDX_DIR = path.join(process.cwd(), "output-mdx");

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

// ====================================================================
// OpenAPI YAML validation — 8 checks
// ====================================================================

interface OpenApiIssue {
  file: string;
  rule: string;
  severity: "error" | "warning";
  message: string;
  location: string;
}

type OASpec = Record<string, unknown>;
type OAOperation = { summary?: string; operationId?: string; parameters?: OAParam[]; responses?: Record<string, unknown>; tags?: string[] };
type OAParam = { name?: string; in?: string; required?: boolean; schema?: unknown; description?: string };

function oaIssue(file: string, rule: string, severity: "error" | "warning", message: string, location: string): OpenApiIssue {
  return { file, rule, severity, message, location };
}

function validateOpenApi(file: string, spec: OASpec): OpenApiIssue[] {
  const issues: OpenApiIssue[] = [];

  // Check 1: Required top-level fields
  if (!spec.openapi && !spec.swagger) {
    issues.push(oaIssue(file, "oa-missing-version", "error",
      "Missing `openapi` field. Must be e.g. `openapi: 3.0.0`.", "root"));
  } else {
    const ver = String(spec.openapi || spec.swagger || "");
    if (!/^(3\.\d+\.\d+|2\.\d+)$/.test(ver)) {
      issues.push(oaIssue(file, "oa-invalid-version", "error",
        `Invalid OpenAPI version "${ver}". Expected 3.x.x (e.g. 3.0.0) or 2.x.`, "root.openapi"));
    }
  }

  if (!spec.info) {
    issues.push(oaIssue(file, "oa-missing-info", "error",
      "Missing `info` object. Required: info.title and info.version.", "root"));
  } else {
    const info = spec.info as Record<string, unknown>;
    if (!info.title) {
      issues.push(oaIssue(file, "oa-missing-info-title", "error",
        "Missing `info.title`. Every OpenAPI spec must have a title.", "info"));
    }
    if (!info.version) {
      issues.push(oaIssue(file, "oa-missing-info-version", "error",
        "Missing `info.version`. Every OpenAPI spec must have a version.", "info"));
    }
  }

  if (!spec.paths) {
    issues.push(oaIssue(file, "oa-missing-paths", "error",
      "Missing `paths` object. At least one path must be defined.", "root"));
    return issues;
  }

  const VALID_METHODS = new Set(["get","post","put","patch","delete","head","options","trace"]);
  const paths = spec.paths as Record<string, unknown>;

  // Check 2: Each path must start with /
  for (const pathKey of Object.keys(paths)) {
    if (!pathKey.startsWith("/")) {
      issues.push(oaIssue(file, "oa-invalid-path", "error",
        `Path "${pathKey}" must start with /`, `paths.${pathKey}`));
    }

    const pathItem = paths[pathKey] as Record<string, unknown>;
    if (!pathItem || typeof pathItem !== "object") continue;

    const ops = Object.keys(pathItem).filter(k => VALID_METHODS.has(k));

    // Check 3: Path must have at least one HTTP method
    if (ops.length === 0) {
      issues.push(oaIssue(file, "oa-no-operations", "warning",
        `Path "${pathKey}" has no HTTP method operations (get, post, put, etc.).`, `paths.${pathKey}`));
      continue;
    }

    // Extract {param} names from path template
    const pathParamNames = [...pathKey.matchAll(/\{([^}]+)\}/g)].map(m => m[1]);

    for (const method of ops) {
      const op = pathItem[method] as OAOperation;
      if (!op || typeof op !== "object") continue;
      const loc = `paths.${pathKey}.${method}`;

      // Check 4: Each operation must have responses
      if (!op.responses || Object.keys(op.responses).length === 0) {
        issues.push(oaIssue(file, "oa-missing-responses", "error",
          `Operation ${method.toUpperCase()} ${pathKey} has no responses defined.`, loc));
      } else {
        // Check 5: At least one 2xx response
        const codes = Object.keys(op.responses);
        const has2xx = codes.some(c => c.startsWith("2") || c === "default");
        if (!has2xx) {
          issues.push(oaIssue(file, "oa-no-success-response", "warning",
            `Operation ${method.toUpperCase()} ${pathKey} has no 2xx or default response. Add a 200/201 response.`, loc));
        }
      }

      // Check 6: operationId should be present and unique
      if (!op.operationId) {
        issues.push(oaIssue(file, "oa-missing-operation-id", "warning",
          `Operation ${method.toUpperCase()} ${pathKey} is missing \`operationId\`. Recommended for code generation.`, loc));
      }

      // Check 7: Parameters validation
      const params: OAParam[] = op.parameters || [];
      const paramNames = new Set<string>();

      for (let i = 0; i < params.length; i++) {
        const param = params[i];
        const pLoc = `${loc}.parameters[${i}]`;

        if (!param.name) {
          issues.push(oaIssue(file, "oa-param-missing-name", "error",
            `Parameter at index ${i} in ${method.toUpperCase()} ${pathKey} is missing \`name\`.`, pLoc));
          continue;
        }

        if (!param.in) {
          issues.push(oaIssue(file, "oa-param-missing-in", "error",
            `Parameter "${param.name}" is missing \`in\` field. Must be: path, query, header, or cookie.`, pLoc));
        } else if (!["path","query","header","cookie"].includes(param.in)) {
          issues.push(oaIssue(file, "oa-param-invalid-in", "error",
            `Parameter "${param.name}" has invalid \`in: ${param.in}\`. Must be: path, query, header, or cookie.`, pLoc));
        }

        if (!param.schema) {
          issues.push(oaIssue(file, "oa-param-missing-schema", "warning",
            `Parameter "${param.name}" has no \`schema\`. Add a schema with at least a type.`, pLoc));
        }

        // Path params must be required: true
        if (param.in === "path" && param.required !== true) {
          issues.push(oaIssue(file, "oa-path-param-not-required", "error",
            `Path parameter "${param.name}" must have \`required: true\` (OpenAPI 3 rule).`, pLoc));
        }

        paramNames.add(param.name);
      }

      // Check 8: Path template params must be declared in parameters
      for (const pName of pathParamNames) {
        if (!paramNames.has(pName)) {
          issues.push(oaIssue(file, "oa-undeclared-path-param", "error",
            `Path template uses {${pName}} but no parameter with name "${pName}" is defined in ${method.toUpperCase()} ${pathKey}.`, loc));
        }
      }
    }
  }

  // Check: Server variables declared if URL has {variable}
  if (Array.isArray(spec.servers)) {
    const servers = spec.servers as Array<{ url?: string; variables?: Record<string, unknown> }>;
    for (const server of servers) {
      const urlVars = [...(server.url || "").matchAll(/\{([^}]+)\}/g)].map(m => m[1]);
      for (const v of urlVars) {
        if (!server.variables || !server.variables[v]) {
          issues.push(oaIssue(file, "oa-undeclared-server-variable", "warning",
            `Server URL uses {${v}} but no variable definition found in servers[].variables.`, "servers"));
        }
      }
    }
  }

  return issues;
}

async function validateOpenApiContent(file: string, content: string): Promise<OpenApiIssue[]> {
  // Step 1: parse — try JSON first (matches syntaxChecks.ts), then fall back to YAML
  let spec: unknown;
  let parseSource: "json" | "yaml" = "yaml";

  try {
    spec = JSON.parse(content);
    parseSource = "json";
  } catch {
    try {
      spec = yamlLoad(content);
    } catch (err: unknown) {
      // js-yaml YAMLException has `reason` (short clean string) and `message` (multi-line with ^ pointer).
      // Use `reason` so the JSON response contains a readable one-liner, not the raw visual snippet.
      const e = err as { mark?: { line?: number; column?: number }; reason?: string; message?: string };
      const lineNum = (e.mark?.line ?? 0) + 1;
      const reason = e.reason || (e.message || "invalid YAML").split("\n")[0].trim();

      // Detect the most common fixable pattern: unquoted value containing ': ' (colon-space),
      // which YAML interprets as a nested key separator.
      const lines = content.split("\n");
      const badLine = lines[lineNum - 1] || "";
      const colonValueMatch = badLine.match(/^(\s*[\w][\w\s-]*?)\s*:\s+(.+:\s.+)$/);
      const suggestion = colonValueMatch
        ? ` Fix: quote the value — ${colonValueMatch[1].trim()}: "${colonValueMatch[2].replace(/"/g, '\\"')}"`
        : "";

      return [{
        file,
        rule: "yaml-syntax",
        severity: "error",
        message: `YAML syntax error at line ${lineNum}: ${reason}.${suggestion}`,
        location: `line ${lineNum}`,
      }];
    }
  }

  if (!spec || typeof spec !== "object" || Array.isArray(spec)) {
    return [{
      file,
      rule: parseSource === "json" ? "json-not-object" : "yaml-not-object",
      severity: "error",
      message: `${parseSource.toUpperCase()} root must be an object (OpenAPI spec), not an array or scalar.`,
      location: "root",
    }];
  }

  // Step 2: bail out if this is not an OpenAPI/Swagger document.
  // JSON files are pre-filtered by openapi/swagger key before reaching here, but YAML files are not
  // (they can't be pre-filtered without parsing first). A non-OpenAPI YAML is valid YAML — no issues.
  const specObj = spec as Record<string, unknown>;
  if (!specObj.openapi && !specObj.swagger) {
    return [];
  }

  // Step 3: run the structural checks
  const issues = validateOpenApi(file, spec as OASpec);

  // Step 4: run SwaggerParser.validate() — deep JSON Schema spec validation
  // (same library used by documentation-ai-backend openapi.validator.ts and syntaxChecks.ts)
  try {
    await SwaggerParser.validate(spec as unknown as string);
  } catch (err: unknown) {
    const e = err as Error;
    const msg = e?.message || String(err);
    // Only add if not already surfaced by the custom checks
    const alreadyCovered = issues.some(i => i.severity === "error");
    if (!alreadyCovered) {
      const lineMatch = msg.match(/line (\d+)/i);
      issues.push({
        file,
        rule: "swagger-parser-validate",
        severity: "error",
        message: `SwaggerParser.validate() failed: ${msg.slice(0, 400)}`,
        location: lineMatch ? `line ${lineMatch[1]}` : "spec",
      });
    } else {
      // Still surface SwaggerParser errors even when custom checks found issues — they may be different
      const lineMatch = msg.match(/line (\d+)/i);
      issues.push({
        file,
        rule: "swagger-parser-validate",
        severity: "warning",
        message: `SwaggerParser.validate() also reported: ${msg.slice(0, 400)}`,
        location: lineMatch ? `line ${lineMatch[1]}` : "spec",
      });
    }
  }

  return issues;
}

/** @deprecated use validateOpenApiContent */
async function validateYamlFile(file: string, content: string): Promise<OpenApiIssue[]> {
  return validateOpenApiContent(file, content);
}

function sanitize(name: string): string {
  return name.replace(/[<>:"/\\|?*]/g, "-").replace(/\s+/g, " ").trim();
}

export async function POST(req: Request) {
  let body: { site?: string; section?: string; dir?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { site, section, dir } = body;

  // --- Flat directory mode: validate .mdx/.md AND .yaml/.yml files in `dir` ---
  if (dir) {
    if (!path.isAbsolute(dir)) {
      return NextResponse.json(
        { error: "`dir` must be an absolute path, e.g. /home/user/my-folder" },
        { status: 400 }
      );
    }

    let allFiles: string[];
    try {
      allFiles = await readdir(dir);
    } catch {
      return NextResponse.json(
        { error: `Directory not found or not readable: ${dir}` },
        { status: 404 }
      );
    }

    const mdxFiles = allFiles.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
    const yamlFiles = allFiles.filter((f) => f.endsWith(".yaml") || f.endsWith(".yml"));

    // Also detect .json files that are OpenAPI specs (have openapi or swagger key)
    // Matches syntaxChecks.ts behaviour in documentation-ai-backend
    const jsonOpenapiFiles: string[] = [];
    for (const f of allFiles.filter((f) => f.endsWith(".json"))) {
      try {
        const raw = await readFile(path.join(dir, f), "utf-8");
        const parsed = JSON.parse(raw);
        if (typeof parsed === "object" && parsed !== null && (parsed.openapi || parsed.swagger)) {
          jsonOpenapiFiles.push(f);
        }
      } catch { /* not valid JSON or no openapi key — skip */ }
    }
    const allOpenApiFiles = [...yamlFiles, ...jsonOpenapiFiles];

    const startTime = Date.now();

    // --- MDX validation ---
    const mdxReports: FileReport[] = [];
    let mdxErrors = 0, mdxWarnings = 0;
    const mdxRuleCounts: Record<string, number> = {};

    for (const file of mdxFiles) {
      const content = await readFile(path.join(dir, file), "utf-8");
      const issues = await validateFile(file, content);
      const errors = issues.filter((i) => i.severity === "error").length;
      const warnings = issues.filter((i) => i.severity === "warning").length;
      mdxErrors += errors;
      mdxWarnings += warnings;
      for (const issue of issues) {
        mdxRuleCounts[issue.rule] = (mdxRuleCounts[issue.rule] || 0) + 1;
      }
      if (issues.length > 0) mdxReports.push({ file, errors, warnings, issues });
    }
    mdxReports.sort((a, b) => b.errors - a.errors || b.warnings - a.warnings);

    // --- OpenAPI validation (YAML + JSON OpenAPI files) ---
    interface YamlReport { file: string; errors: number; warnings: number; issues: OpenApiIssue[] }
    const yamlReports: YamlReport[] = [];
    let yamlErrors = 0, yamlWarnings = 0;
    const yamlRuleCounts: Record<string, number> = {};

    for (const file of allOpenApiFiles) {
      const content = await readFile(path.join(dir, file), "utf-8");
      const issues = await validateOpenApiContent(file, content);
      const errors = issues.filter((i) => i.severity === "error").length;
      const warnings = issues.filter((i) => i.severity === "warning").length;
      yamlErrors += errors;
      yamlWarnings += warnings;
      for (const issue of issues) {
        yamlRuleCounts[issue.rule] = (yamlRuleCounts[issue.rule] || 0) + 1;
      }
      if (issues.length > 0) yamlReports.push({ file, errors, warnings, issues });
    }
    yamlReports.sort((a, b) => b.errors - a.errors || b.warnings - a.warnings);

    return NextResponse.json({
      dir,
      stats: {
        totalFiles: mdxFiles.length + allOpenApiFiles.length,
        mdxFiles: mdxFiles.length,
        yamlFiles: allOpenApiFiles.length,
        jsonOpenapiFiles: jsonOpenapiFiles.length,
        totalErrors: mdxErrors + yamlErrors,
        totalWarnings: mdxWarnings + yamlWarnings,
        timeMs: Date.now() - startTime,
      },
      mdx: {
        validationSource: "Documentation.AI deployment rules (8 checks)",
        checks: [
          "1. Frontmatter — must be closed if present",
          "2. HTML entities in JSX attributes — &#x22; in double quotes etc.",
          "3. Nested code blocks — same fence count breaks structure",
          "4. Invalid table components — <Table>, <tr>, <td>, <th>, <thead>, <tbody> forbidden",
          "5. Unescaped braces — {UPPERCASE_VAR} in text causes JSX parse error",
          "6. Unsupported components — PascalCase tags not in allowlist",
          "7. Component attributes — required attrs missing (src on Image, title on Card, etc.)",
          "8. MDX parse + compile — real remark-mdx/mdx-js compiler",
        ],
        stats: {
          total: mdxFiles.length,
          filesWithIssues: mdxReports.length,
          clean: mdxFiles.length - mdxReports.length,
          errors: mdxErrors,
          warnings: mdxWarnings,
        },
        ruleBreakdown: Object.entries(mdxRuleCounts)
          .sort(([, a], [, b]) => b - a)
          .map(([rule, count]) => ({ rule, count })),
        files: mdxReports,
      },
      openapi: {
        validationSource: "OpenAPI 3.x / Swagger 2.x rules (9 checks) — matches documentation-ai-backend",
        checks: [
          "1. JSON/YAML parse — tries JSON first, falls back to YAML (matches syntaxChecks.ts)",
          "2. Required fields — openapi, info, paths",
          "3. info object — title and version required",
          "4. OpenAPI version — must be 3.x.x or 2.x",
          "5. Path format — must start with /",
          "6. Operations — must have responses; path params must be required: true",
          "7. Parameters — name, in, schema required; in must be path/query/header/cookie",
          "8. Path template params — {param} in URL must be declared in parameters",
          "9. SwaggerParser.validate() — deep JSON Schema spec validation (@apidevtools/swagger-parser, same as openapi.validator.ts)",
        ],
        sources: [
          "documentation-ai-backend/src/services/ai/starter-kit/validators/openapi.validator.ts",
          "documentation-ai-backend/src/services/ai/dashboard-agent/background/syntaxChecks.ts",
        ],
        stats: {
          total: allOpenApiFiles.length,
          filesWithIssues: yamlReports.length,
          clean: allOpenApiFiles.length - yamlReports.length,
          errors: yamlErrors,
          warnings: yamlWarnings,
        },
        ruleBreakdown: Object.entries(yamlRuleCounts)
          .sort(([, a], [, b]) => b - a)
          .map(([rule, count]) => ({ rule, count })),
        files: yamlReports,
      },
    });
  }

  // --- Original site/section mode ---
  if (!site || typeof site !== "string") {
    return NextResponse.json(
      { error: "Either `dir` (absolute path) or `site` (hostname) is required" },
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
