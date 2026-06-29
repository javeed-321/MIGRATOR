const fs = require("fs");

function extractTextFromRTF(rtf) {
  const ignoreStack = [false];
  const paragraphs = [];
  let current = '';
  let i = 0;

  const IGNORABLE = new Set([
    'fonttbl', 'colortbl', 'stylesheet', 'info', 'pict',
    'expandedcolortbl', 'listtable', 'listoverridetable',
    'filetbl', 'rsidtbl', 'themedata', 'colorschememapping',
    'latentstyles', 'datastore', 'xmlnstbl',
  ]);

  function ignored() { return ignoreStack[ignoreStack.length - 1]; }

  function flushParagraph() {
    paragraphs.push(current);
    current = '';
  }

  while (i < rtf.length) {
    const ch = rtf[i];

    if (ch === '{') {
      ignoreStack.push(ignored());
      i++;
    } else if (ch === '}') {
      ignoreStack.pop();
      i++;
    } else if (ch === '\\') {
      i++;
      if (i >= rtf.length) break;
      const next = rtf[i];

      if (next === '{' || next === '}' || next === '\\') {
        if (!ignored()) current += next;
        i++;
      } else if (next === '\n' || next === '\r') {
        if (!ignored()) flushParagraph();
        i++;
        if (next === '\r' && i < rtf.length && rtf[i] === '\n') i++;
      } else if (next === '*') {
        ignoreStack[ignoreStack.length - 1] = true;
        i++;
      } else if (/[a-zA-Z]/.test(next)) {
        let word = '';
        while (i < rtf.length && /[a-zA-Z]/.test(rtf[i])) word += rtf[i++];
        // consume optional numeric param
        if (i < rtf.length && rtf[i] === '-') i++;
        while (i < rtf.length && /\d/.test(rtf[i])) i++;
        // consume delimiter space
        if (i < rtf.length && rtf[i] === ' ') i++;

        if (!ignored()) {
          if (IGNORABLE.has(word)) {
            ignoreStack[ignoreStack.length - 1] = true;
          } else if (word === 'par') {
            flushParagraph();
          } else if (word === 'line') {
            flushParagraph();
          } else if (word === 'tab') {
            current += '\t';
          }
        }
      } else {
        i++;
      }
    } else if (ch === '\n' || ch === '\r') {
      i++;
      if (ch === '\r' && i < rtf.length && rtf[i] === '\n') i++;
    } else {
      if (!ignored()) current += ch;
      i++;
    }
  }

  if (current) paragraphs.push(current);

  const text = paragraphs.filter(p => p !== '').join('\n');
  return { text, paragraphs: paragraphs.filter(p => p !== '') };
}

const content = fs.readFileSync("document.rtf", "utf8");
const { text, paragraphs } = extractTextFromRTF(content);

const result = { text, paragraphs };

fs.writeFileSync("output.json", JSON.stringify(result, null, 2));
console.log(`Done — extracted ${paragraphs.length} paragraphs, wrote output.json`);
