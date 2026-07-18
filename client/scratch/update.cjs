const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/images');
const dataFiles = [
  path.join(__dirname, '../src/data/novamedicaData.ts'),
  path.join(__dirname, '../src/data/gmdData.ts')
];

// 1. Get all images
const files = fs.readdirSync(publicImagesDir);
const imageMap = new Map();

files.forEach(file => {
  if (file.match(/\.(png|jpg|jpeg|webp)$/i)) {
    const nameWithoutExt = path.parse(file).name;
    // Check if it ends with -1, -2, etc.
    const match = nameWithoutExt.match(/^(.*)-(\d+)$/);
    let baseRef = nameWithoutExt;
    let isMain = true;

    if (match) {
      const possibleBase = match[1];
      // Check if possibleBase + ext exists in files array
      const ext = path.extname(file);
      const baseExists = files.some(f => f.toLowerCase() === (possibleBase + ext).toLowerCase());
      if (baseExists) {
        baseRef = possibleBase;
        isMain = false;
      }
    }

    if (!imageMap.has(baseRef)) {
      imageMap.set(baseRef, { main: null, gallery: [] });
    }

    const imgData = imageMap.get(baseRef);
    if (isMain) {
      imgData.main = `/images/${file}`;
      imgData.gallery.unshift(`/images/${file}`);
    } else {
      imgData.gallery.push(`/images/${file}`);
    }
  }
});

for (let [ref, imgData] of imageMap.entries()) {
  if (!imgData.main && imgData.gallery.length > 0) {
    imgData.main = imgData.gallery[0];
  }
}

console.log(`Mapped ${imageMap.size} unique references from images.`);

// 2. Process data files
for (const dataFile of dataFiles) {
  if (!fs.existsSync(dataFile)) continue;
  let content = fs.readFileSync(dataFile, 'utf8');

  // Find the start of the array
  const arrayStartStr = ' = [';
  const arrayStartIdx = content.indexOf(arrayStartStr);
  if (arrayStartIdx === -1) {
    console.log(`Could not find array in ${dataFile}`);
    continue;
  }
  
  // Find the end of the array
  // It is the first `];` or `]\n;` after the array start
  const arrayEndIdx = content.indexOf('];', arrayStartIdx);
  if (arrayEndIdx === -1) {
      console.log(`Could not find array end in ${dataFile}`);
      continue;
  }
  
  const preamble = content.substring(0, arrayStartIdx + 3);
  const arrayStr = content.substring(arrayStartIdx + 3, arrayEndIdx + 1);
  const postamble = content.substring(arrayEndIdx + 1);
  
  let products;
  try {
    products = eval(`(${arrayStr})`);
  } catch (err) {
    console.log(`Error parsing array in ${dataFile}:`, err);
    continue;
  }

  let updatedCount = 0;
  for (let prod of products) {
    let cleanRef = prod.ref;
    // For cases like "BASIC A (Sonotrax)", remove the parentheses part
    cleanRef = cleanRef.replace(/\s*\(.*\)/, '').trim();

    const possibleKeys = [
      prod.ref,
      prod.ref.toUpperCase(),
      prod.ref.replace(/\s+/g, ''),
      cleanRef,
      cleanRef.toUpperCase(),
      cleanRef.replace(/\s+/g, '')
    ];

    let matchedKey = null;
    for (const key of possibleKeys) {
      if (imageMap.has(key)) {
        matchedKey = key;
        break;
      }
    }

    if (matchedKey) {
      const imgData = imageMap.get(matchedKey);
      prod.image = imgData.main;
      prod.gallery = imgData.gallery;
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    // Stringify back
    const newArrayStr = JSON.stringify(products, null, 2);
    fs.writeFileSync(dataFile, preamble + newArrayStr + postamble);
    console.log(`Updated ${updatedCount} products in ${path.basename(dataFile)}`);
  } else {
    console.log(`No products updated in ${path.basename(dataFile)}`);
  }
}
