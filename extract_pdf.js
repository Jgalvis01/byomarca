const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function main() {
  const data = new Uint8Array(fs.readFileSync('./Lista de Precios.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  let fullText = '';
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map(item => item.str);
    fullText += `\n--- PAGE ${i} ---\n` + strings.join(' ');
  }
  
  fs.writeFileSync('./pdf_content.txt', fullText);
  console.log('Pages:', doc.numPages);
  console.log(fullText);
}

main().catch(e => console.error(e));
