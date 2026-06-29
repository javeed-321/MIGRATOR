import puppeteer from 'puppeteer';
import { readdir, readFile } from 'fs/promises';
import { statSync } from 'fs';
import path from 'path';

const SVG_DIR = '/home/javeed/Documents/Migrator/CAPILLARY_MIGRATOR/my-app/deploy/guides/diagrams';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const files = (await readdir(SVG_DIR)).filter(f => f.endsWith('.svg')).sort();
console.log(`Converting ${files.length} SVGs to PNG with precise cropping...\n`);

let ok = 0, fail = 0;

for (const file of files) {
  const svgPath = path.join(SVG_DIR, file);
  const pngFile = file.replace('.svg', '.png');
  const pngPath = path.join(SVG_DIR, pngFile);

  try {
    const svg = await readFile(svgPath, 'utf-8');
    const page = await browser.newPage();

    await page.setViewport({ width: 2400, height: 4000, deviceScaleFactor: 2 });

    await page.setContent(`<!DOCTYPE html>
<html><head><meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; }
  body { background: white; display: inline-block; }
  svg { display: block; max-width: none; }
</style>
</head><body>${svg}</body></html>`, { waitUntil: 'networkidle0' });

    await new Promise(r => setTimeout(r, 800));

    const box = await page.evaluate(() => {
      const el = document.querySelector('svg');
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: Math.max(0, Math.floor(rect.x)),
        y: Math.max(0, Math.floor(rect.y)),
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height),
      };
    });

    if (!box || box.width === 0 || box.height === 0) {
      console.log(`  SKIP ${file}`);
      fail++;
      await page.close();
      continue;
    }

    await page.setViewport({
      width: box.x + box.width + 4,
      height: box.y + box.height + 4,
      deviceScaleFactor: 2,
    });

    const box2 = await page.evaluate(() => {
      const el = document.querySelector('svg');
      const rect = el.getBoundingClientRect();
      return {
        x: Math.max(0, Math.floor(rect.x)),
        y: Math.max(0, Math.floor(rect.y)),
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height),
      };
    });

    await page.screenshot({
      path: pngPath,
      clip: { x: box2.x, y: box2.y, width: box2.width, height: box2.height },
      omitBackground: false,
    });

    const sz = statSync(pngPath).size;
    console.log(`  OK ${pngFile} (${Math.round(sz / 1024)}KB) ${box2.width}x${box2.height}`);
    ok++;
    await page.close();
  } catch (e) {
    console.log(`  FAIL ${file} — ${e.message}`);
    fail++;
  }
}

await browser.close();
console.log(`\nDone: ${ok} converted, ${fail} failed`);
