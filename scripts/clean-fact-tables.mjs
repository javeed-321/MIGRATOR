import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { load } = require('../node_modules/cheerio/dist/commonjs/index.js');
import fs from 'fs';
import path from 'path';

const SRC = path.resolve('source-html/fact-tables-raw');
const DEST = path.resolve('source-html/fact-tables-cleaned');
fs.mkdirSync(DEST, { recursive: true });

function htmlToMarkdown($, el) {
  let md = '';

  $(el).contents().each((_, node) => {
    if (node.type === 'text') {
      const text = node.data.replace(/\n/g, ' ').replace(/\s+/g, ' ');
      if (text.trim()) md += text;
      return;
    }
    if (node.type !== 'tag') return;

    const tag = node.name.toLowerCase();
    const inner = () => htmlToMarkdown($, node);

    switch (tag) {
      case 'h1': md += `\n\n# ${$(node).text().trim()}\n\n`; break;
      case 'h2': md += `\n\n## ${$(node).text().trim()}\n\n`; break;
      case 'h3': md += `\n\n### ${$(node).text().trim()}\n\n`; break;
      case 'h4': md += `\n\n#### ${$(node).text().trim()}\n\n`; break;
      case 'p':  md += `\n\n${inner().trim()}\n\n`; break;
      case 'br': md += '  \n'; break;
      case 'strong': case 'b': md += `**${$(node).text().trim()}**`; break;
      case 'em': case 'i':     md += `*${$(node).text().trim()}*`; break;
      case 'code': md += `\`${$(node).text()}\``; break;
      case 'a': {
        const href = $(node).attr('href') || '';
        const text = $(node).text().trim();
        md += href ? `[${text}](${href})` : text;
        break;
      }
      case 'ul': case 'ol': {
        $(node).find('> li').each((i, li) => {
          const prefix = tag === 'ol' ? `${i + 1}. ` : '- ';
          md += `\n${prefix}${$(li).text().trim()}`;
        });
        md += '\n';
        break;
      }
      case 'table': {
        md += convertTable($, node);
        break;
      }
      case 'svg': case 'script': case 'style': case 'nav':
      case 'button': case 'noscript':
        break; // skip entirely
      default:
        md += inner();
    }
  });

  return md;
}

function convertTable($, tableNode) {
  let md = '\n\n';
  const rows = $(tableNode).find('tr');
  if (!rows.length) return '';

  rows.each((rowIdx, row) => {
    const cells = $(row).find('th, td');
    const cols = [];
    cells.each((_, cell) => {
      cols.push($(cell).text().replace(/\n/g, ' ').replace(/\s+/g, ' ').trim());
    });
    md += '| ' + cols.join(' | ') + ' |\n';
    if (rowIdx === 0) {
      md += '| ' + cols.map(() => '---').join(' | ') + ' |\n';
    }
  });

  return md + '\n';
}

function cleanHtml(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = load(html);

  // Extract page title
  const title = $('title').text().trim() || path.basename(filePath, '.html');

  // Find main content area
  const contentBody = $('.content-body, [class*="content-body"], .rm-Markdown, article').first();
  if (!contentBody.length) {
    console.warn(`  No content-body found in ${path.basename(filePath)}`);
    return null;
  }

  // Remove noise within content body
  contentBody.find('script, style, nav, .rm-Toc, .content-toc, [class*="toc"], button, noscript').remove();

  const markdown = htmlToMarkdown($, contentBody[0]);

  // Clean up excessive blank lines
  const cleaned = markdown
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return `---\ntitle: ${title}\n---\n\n${cleaned}\n`;
}

const files = fs.readdirSync(SRC).filter(f => f.endsWith('.html'));
console.log(`Processing ${files.length} HTML files...`);

let ok = 0, skipped = 0;
for (const file of files) {
  const srcPath = path.join(SRC, file);
  const outName = file.replace('.html', '.md');
  const destPath = path.join(DEST, outName);

  process.stdout.write(`  ${file} ... `);
  try {
    const result = cleanHtml(srcPath);
    if (result) {
      fs.writeFileSync(destPath, result, 'utf8');
      const kb = Math.round(Buffer.byteLength(result) / 1024);
      console.log(`done (${kb} KB)`);
      ok++;
    } else {
      skipped++;
    }
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    skipped++;
  }
}

// Also copy the .md files (already clean)
const mdFiles = fs.readdirSync(SRC).filter(f => f.endsWith('.md'));
for (const file of mdFiles) {
  fs.copyFileSync(path.join(SRC, file), path.join(DEST, file));
  console.log(`  ${file} ... copied (already markdown)`);
  ok++;
}

console.log(`\nDone: ${ok} files written, ${skipped} skipped`);
console.log(`Output: ${DEST}`);
