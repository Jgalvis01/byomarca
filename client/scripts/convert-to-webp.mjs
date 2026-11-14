import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(scriptDir, '..', 'public', 'images');

const allFiles = fs.readdirSync(imagesDir);
const imageFiles = allFiles.filter((f) => /\.(png|jpe?g)$/i.test(f));

console.log(`Found ${imageFiles.length} images to convert.`);

let converted = 0;
let errors = 0;

for (const file of imageFiles) {
  const filePath = path.join(imagesDir, file);
  const parsed = path.parse(filePath);
  // Remove multiple extensions if any (e.g. .jpeg.png)
  let baseName = parsed.name;
  if (baseName.endsWith('.jpeg')) baseName = baseName.replace('.jpeg', '');
  
  const outPath = path.join(imagesDir, `${baseName}.webp`);

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outPath);
      
    // Delete the original file only if it's different
    if (filePath !== outPath) {
      fs.unlinkSync(filePath);
    }
    converted++;
    console.log(`[${converted}/${imageFiles.length}] Converted ${file} -> ${path.basename(outPath)}`);
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err);
    errors++;
  }
}

console.log(`\nFinished! Converted: ${converted}, Errors: ${errors}`);
