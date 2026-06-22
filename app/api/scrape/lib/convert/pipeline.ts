import { extractFrontmatter } from "./frontmatter";
import type { Change, ConvertResult } from "./converters";
import {
  convertBlockSyntax,
  convertBlockquoteCallouts,
  convertJsxCallouts,
  convertAccordions,
  convertCards,
  convertColumnsLayout,
  convertCodeGroups,
  convertEmbeds,
  convertIcons,
  fixImages,
  convertAnchors,
  convertJsxTables,
  convertGlossary,
} from "./converters";
import {
  removeImports,
  removeExports,
  removeReadmeCssClasses,
  fixHeadingHierarchy,
  fixTableAlignment,
  fixHtmlComments,
  fixVoidElements,
  fixBackslashEscapes,
  fixAngleBrackets,
  fixCurlyBraces,
  fixAmpersands,
  fixCodeFenceLanguages,
  fixJsxBlankLines,
  removeEmptyCodeFences,
  collapseBlankLines,
  removeOrphanedClosingBraces,
  fixNestedCodeBlocks,
  convertHtmlBlocks,
  removeOrphanedImageCloseTags,
  extractJsxFromCodeFences,
  fixNestedQuotesInAttributes,
  removeUnclosedCodeFences,
  redactSecrets,
} from "./cleanup";

export interface ConvertedPage {
  slug: string;
  original: string;
  converted: string;
  changes: Change[];
  totalChanges: number;
}

type Converter = (content: string) => ConvertResult;

const CONVERTER_PIPELINE: Converter[] = [
  // Component converters
  convertBlockSyntax,
  convertBlockquoteCallouts,
  convertJsxCallouts,
  convertAccordions,
  convertCards,
  convertColumnsLayout,
  convertCodeGroups,
  convertEmbeds,
  convertIcons,
  fixImages,
  // Capillary-specific
  convertAnchors,
  convertJsxTables,
  convertGlossary,
  convertHtmlBlocks,
  // Cleanup
  removeImports,
  removeExports,
  removeReadmeCssClasses,
  fixHeadingHierarchy,
  fixTableAlignment,
  fixHtmlComments,
  fixVoidElements,
  fixBackslashEscapes,
  fixAngleBrackets,
  fixCurlyBraces,
  fixAmpersands,
  fixCodeFenceLanguages,
  fixJsxBlankLines,
  removeEmptyCodeFences,
  collapseBlankLines,
  removeOrphanedClosingBraces,
  removeOrphanedImageCloseTags,
  fixNestedQuotesInAttributes,
  fixNestedCodeBlocks,
  extractJsxFromCodeFences,
  removeUnclosedCodeFences,
  redactSecrets,
];

export function convertPage(slug: string, rawMd: string): ConvertedPage {
  const {
    frontmatterStr,
    body,
    removedFields,
  } = extractFrontmatter(rawMd);

  let content = body;
  const allChanges: Change[] = [];

  if (removedFields.length > 0) {
    allChanges.push({
      type: "frontmatter",
      count: removedFields.length,
      detail: `removed fields: ${removedFields.join(", ")}`,
    });
  }

  for (const converter of CONVERTER_PIPELINE) {
    const result = converter(content);
    content = result.content;
    allChanges.push(...result.changes);
  }

  const converted = frontmatterStr
    ? `${frontmatterStr}\n\n${content.trim()}\n`
    : `${content.trim()}\n`;

  return {
    slug,
    original: rawMd,
    converted,
    changes: allChanges,
    totalChanges: allChanges.reduce((sum, c) => sum + c.count, 0),
  };
}
