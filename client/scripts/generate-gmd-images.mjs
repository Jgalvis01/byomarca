/**
 * Unified image mapping script.
 *
 * This single script replaces the old generate-gmd-images.mjs and scratch/update.cjs.
 * It does two things:
 *
 *   1. Reads the GMD product list (Productos_Lista_Mayo2026.txt), extracts every
 *      product reference, matches each to the best image in public/images, and writes
 *      src/data/gmdImageMap.generated.ts   (consumed by gmdCatalog.ts at runtime).
 *
 *   2. Reads src/data/novamedicaData.ts, parses the product array, matches each
 *      product's `ref` to the best image, and rewrites the file with updated `image`
 *      and `gallery` fields.
 *
 * Matching strategy (applied in priority order):
 *   a) Exact normalised match (case-insensitive, accent-stripped, no spaces/hyphens).
 *   b) Normalised ref is contained inside the image name.
 *   c) Image name is contained inside the normalised ref.
 *   d) Scored prefix matching (image starts with ref or vice versa), weighted by
 *      how many extra characters remain.
 *
 * Gallery: images whose filename (minus extension) matches `<base>-1`, `<base>-2`, …
 * (where a standalone `<base>` image also exists) are grouped together. If multiple
 * gallery files exist, they are sorted so the base image appears first.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ────────────────────────────────────────────
// Paths
// ────────────────────────────────────────────
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(scriptDir, '..');
const repoDir   = path.resolve(clientDir, '..');

const productListPath  = path.join(repoDir, 'Productos_Lista_Mayo2026.txt');
const imagesDir        = path.join(clientDir, 'public', 'images');
const gmdOutputPath    = path.join(clientDir, 'src', 'data', 'gmdImageMap.generated.ts');
const novamedicaPath   = path.join(clientDir, 'src', 'data', 'novamedicaData.ts');

// ────────────────────────────────────────────
// Normalisation helpers
// ────────────────────────────────────────────

/** Strip accents, lowercase, remove everything that isn't a-z or 0-9 */
const normalize = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip combining diacritics
    .replace(/[^a-z0-9]/g, '');        // strip hyphens, spaces, dots, etc.

/** Uppercase, collapse whitespace */
const toUpperKey = (value) =>
  value.toUpperCase().replace(/\s+/g, '');

// ────────────────────────────────────────────
// 1. Index every image in public/images
// ────────────────────────────────────────────
const allFiles    = fs.readdirSync(imagesDir);
const imageFiles  = allFiles.filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));

/** Pre-compute every useful key per image file */
const imageIndex = imageFiles.map((fileName) => {
  const stem = path.parse(fileName).name;           // e.g. "GMD50-RP-"
  return {
    fileName,
    stem,
    normalized: normalize(stem),                     // "gmd50rp"
    upperKey:   toUpperKey(stem),                     // "GMD50-RP-"
  };
});

// ────────────────────────────────────────────
// 2. Build gallery groups   (base  →  [base, base-1, base-2, …])
//    Only treat  "FOO-1"  as a gallery variant of  "FOO"  when
//    a standalone  "FOO.<ext>"  also exists.
// ────────────────────────────────────────────
const galleryGroups = new Map(); // normalised base stem  →  string[] of file paths

for (const img of imageIndex) {
  const suffixMatch = img.stem.match(/^(.*)-(\d+)$/);
  if (!suffixMatch) continue;                        // not a  -N  variant

  const possibleBase = suffixMatch[1];
  const ext = path.extname(img.fileName);
  const baseExists = allFiles.some(
    (f) => f.toLowerCase() === `${possibleBase}${ext}`.toLowerCase(),
  );
  if (!baseExists) continue;                         // no standalone base → not a variant

  const key = normalize(possibleBase);
  if (!galleryGroups.has(key)) galleryGroups.set(key, []);
  galleryGroups.get(key).push(`/images/${img.fileName}`);
}

// ────────────────────────────────────────────
// 3. Matching engine
// ────────────────────────────────────────────

/**
 * Given a reference string (e.g. "GMD50-RP", "DT-400S", "Amoul i7 Plus (DEA)"),
 * find the best matching image file.
 *
 * Returns { image: string, gallery: string[] } | null
 */
const findBestMatch = (ref) => {
  // Clean ref: remove parenthesised suffixes like "(Sonotrax)" "(DEA)"
  const cleanRef     = ref.replace(/\s*\(.*?\)\s*/g, '').trim();
  const normRef      = normalize(cleanRef);
  const normRefFull  = normalize(ref);  // also try the full ref including parens

  if (!normRef) return null;

  // Strategy: score every image and pick the best
  let bestScore = Infinity;
  let bestImage = null;

  for (const img of imageIndex) {
    let score = null;

    // (a) Exact normalised match  → best possible
    if (img.normalized === normRef || img.normalized === normRefFull) {
      score = 0;
    }
    // (b) Image name starts with the ref   (ref is a prefix of the image)
    else if (img.normalized.startsWith(normRef)) {
      const extra = img.normalized.length - normRef.length;
      score = 1000 + extra;
    }
    // (c) Ref starts with the image name   (image is a prefix of the ref)
    else if (normRef.startsWith(img.normalized)) {
      const extra = normRef.length - img.normalized.length;
      score = 2000 + extra;
    }
    // (d) Ref is contained somewhere inside image name
    else if (img.normalized.includes(normRef)) {
      const extra = img.normalized.length - normRef.length;
      score = 3000 + extra;
    }
    // (e) Image name is contained somewhere inside ref
    else if (normRef.includes(img.normalized) && img.normalized.length >= 3) {
      const extra = normRef.length - img.normalized.length;
      score = 4000 + extra;
    }

    if (score !== null && score < bestScore) {
      bestScore = score;
      bestImage = img;
    }
  }

  if (!bestImage) return null;

  const mainPath = `/images/${bestImage.fileName}`;

  // Build gallery
  const baseNorm = normalize(path.parse(bestImage.fileName).name);
  const extraGallery = galleryGroups.get(baseNorm) ?? [];
  const gallery = [mainPath, ...extraGallery.filter((g) => g !== mainPath)];

  return { image: mainPath, gallery };
};

// ────────────────────────────────────────────
// 4. GMD Catalog  →  gmdImageMap.generated.ts
// ────────────────────────────────────────────
const parseRefFromLine = (line) => {
  const match = line.match(/^(\s*)-(.+)$/);
  if (!match) return null;

  const text = match[2].trim();
  if (!text.endsWith('-')) return null;

  const lastRefStart = text.lastIndexOf(' -');
  if (lastRefStart <= 0) return null;

  let refStart = lastRefStart;
  let ref = text.slice(refStart + 2, -1).trim();

  // If the extracted ref looks too short / like a roman numeral / pure number,
  // try to widen it by including the previous segment.
  const shouldExpand = ref.length <= 4 || /^[IVX]+$/i.test(ref) || /^\d+[A-Z]*$/i.test(ref);
  if (shouldExpand) {
    const prev = text.lastIndexOf(' -', refStart - 1);
    if (prev > 0) {
      refStart = prev;
      ref = text.slice(refStart + 2, -1).trim();
    }
  }

  if (!/^[A-Z0-9][A-Z0-9.\-+/ ]*[A-Z0-9]$/i.test(ref) || !/[A-Z]/i.test(ref)) {
    return null;
  }

  return ref.toUpperCase().replace(/\s+/g, '');
};

const gmdRefs = [...new Set(
  fs.readFileSync(productListPath, 'utf8')
    .split(/\r?\n/)
    .map(parseRefFromLine)
    .filter(Boolean),
)];

const gmdImageMap   = {};
const gmdGalleryMap = {};
const gmdUnmatched  = [];

for (const ref of gmdRefs) {
  const result = findBestMatch(ref);
  if (result) {
    gmdImageMap[ref]   = result.image;
    gmdGalleryMap[ref] = result.gallery;
  } else {
    gmdUnmatched.push(ref);
  }
}

const tsContent =
  `export const gmdImageByRef: Record<string, string> = ${JSON.stringify(gmdImageMap, null, 2)};\n` +
  `export const gmdGalleryByRef: Record<string, string[]> = ${JSON.stringify(gmdGalleryMap, null, 2)};\n`;

fs.writeFileSync(gmdOutputPath, tsContent, 'utf8');

if (gmdUnmatched.length > 0) {
  console.log(`[GMD] ${Object.keys(gmdImageMap).length} mapped, ${gmdUnmatched.length} unmatched:`);
  gmdUnmatched.forEach((r) => console.log(`  ✗ ${r}`));
} else {
  console.log(`[GMD] ${Object.keys(gmdImageMap).length} mapped, 0 unmatched ✓`);
}

// ────────────────────────────────────────────
// 5. Novamedica  →  inline update of novamedicaData.ts
// ────────────────────────────────────────────
if (fs.existsSync(novamedicaPath)) {
  const raw = fs.readFileSync(novamedicaPath, 'utf8');

  const arrayStartStr = ' = [';
  const arrayStartIdx = raw.indexOf(arrayStartStr);
  const arrayEndIdx   = raw.indexOf('];', arrayStartIdx);

  if (arrayStartIdx !== -1 && arrayEndIdx !== -1) {
    const preamble  = raw.substring(0, arrayStartIdx + 3);   // up to and including ' = ['
    const arrayStr  = raw.substring(arrayStartIdx + 3, arrayEndIdx + 1);
    const postamble = raw.substring(arrayEndIdx + 1);

    let products;
    try {
      products = eval(`(${arrayStr})`);
    } catch (err) {
      console.error('[Novamedica] Failed to parse product array:', err.message);
      process.exit(1);
    }

    let updated = 0;
    let novaUnmatched = [];

    for (const prod of products) {
      const result = findBestMatch(prod.ref);
      if (result) {
        prod.image   = result.image;
        prod.gallery = result.gallery;
        updated++;
      } else {
        novaUnmatched.push(prod.ref);
      }
    }

    const newArrayStr = JSON.stringify(products, null, 2);
    fs.writeFileSync(novamedicaPath, preamble + newArrayStr + postamble);

    if (novaUnmatched.length > 0) {
      console.log(`[Novamedica] ${updated} mapped, ${novaUnmatched.length} unmatched:`);
      novaUnmatched.forEach((r) => console.log(`  ✗ ${r}`));
    } else {
      console.log(`[Novamedica] ${updated} mapped, 0 unmatched ✓`);
    }
  } else {
    console.log('[Novamedica] Could not locate product array in file — skipped.');
  }
} else {
  console.log('[Novamedica] File not found — skipped.');
}
