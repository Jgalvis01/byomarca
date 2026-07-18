import rawCatalog from './Productos_Lista_Mayo2026.txt?raw';
import { gmdImageByRef, gmdGalleryByRef } from './gmdImageMap.generated';

export interface GmdProduct {
  id: string;
  ref: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  gallery?: string[];
  path?: string[];
  level?: number;
  specs?: { label: string; value: string }[];
}

export interface GmdCatalogGroup {
  kind: 'group';
  id: string;
  title: string;
  slug: string;
  category: string;
  path: string[];
  level: number;
  children: GmdCatalogNode[];
}

export interface GmdCatalogProduct extends GmdProduct {
  kind: 'product';
  slug: string;
  path: string[];
  level: number;
}

export type GmdCatalogNode = GmdCatalogGroup | GmdCatalogProduct;

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const slugify = (text: string) =>
  normalizeText(text).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const slugifyGmdText = (text: string) => slugify(text);

const parseLeafLine = (text: string) => {
  if (!text.endsWith('-')) {
    return null;
  }

  const lastRefStart = text.lastIndexOf(' -');
  if (lastRefStart <= 0) {
    return null;
  }

  let refStart = lastRefStart;
  let ref = text.slice(refStart + 2, -1).trim();
  const shouldExpandRef = ref.length <= 4 || /^[IVX]+$/i.test(ref) || /^\d+[A-Z]*$/i.test(ref);

  if (shouldExpandRef) {
    const previousRefStart = text.lastIndexOf(' -', refStart - 1);
    if (previousRefStart > 0) {
      refStart = previousRefStart;
      ref = text.slice(refStart + 2, -1).trim();
    }
  }

  if (!/^[A-Z0-9][A-Z0-9.\-+/ ]*[A-Z0-9]$/i.test(ref) || !/[A-Z]/i.test(ref)) {
    return null;
  }

  return {
    title: text.slice(0, refStart).trim(),
    ref,
  };
};

const resolveImage = (ref: string) => {
  const normalizedRef = ref.toUpperCase();
  return gmdImageByRef[normalizedRef] ?? '/images/PR5.jpg';
};

const createGroup = (title: string, category: string, path: string[], level: number): GmdCatalogGroup => ({
  kind: 'group',
  id: `${slugify(path.join('-')) || slugify(title)}-${level}`,
  title,
  slug: slugify(title),
  category,
  path,
  level,
  children: [],
});

const buildCatalog = () => {
  const roots: GmdCatalogGroup[] = [];
  const allProducts: GmdCatalogProduct[] = [];
  const stack: GmdCatalogGroup[] = [];
  let currentRoot: GmdCatalogGroup | null = null;

  rawCatalog
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .forEach((line) => {
      const match = line.match(/^(\s*)-(.+)$/);
      if (!match) {
        return;
      }

      const depth = Math.floor(match[1].replace(/\t/g, '  ').length / 2);
      const text = match[2].trim();

      while (stack.length > depth) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];

      if (depth === 0) {
        const root = createGroup(text, text, [slugify(text)], 0);
        roots.push(root);
        stack.push(root);
        currentRoot = root;
        return;
      }

      const leaf = parseLeafLine(text);
      if (leaf) {
        const category = currentRoot?.title || parent?.category || 'GMD';
        const subcategory = parent && parent.level >= 1 ? parent.title : undefined;
        const path = [...(parent?.path ?? currentRoot?.path ?? [slugify(category)]), slugify(leaf.title)];

        const product: GmdCatalogProduct = {
          kind: 'product',
          id: `${slugify(leaf.ref)}-${slugify(path.join('-'))}`,
          slug: slugify(leaf.title),
          ref: leaf.ref,
          name: leaf.title,
          description: leaf.title,
          category,
          subcategory,
          image: resolveImage(leaf.ref),
          gallery: gmdGalleryByRef[leaf.ref.toUpperCase()] ?? [],
          path,
          level: depth,
        };

        if (parent) {
          parent.children.push(product);
        } else if (currentRoot) {
          currentRoot.children.push(product);
        }

        allProducts.push(product);
        return;
      }

      const groupCategory = currentRoot?.title || parent?.category || text;
      const groupPath = [...(parent?.path ?? currentRoot?.path ?? [slugify(groupCategory)]), slugify(text)];
      const group = createGroup(text, groupCategory, groupPath, depth);

      if (parent) {
        parent.children.push(group);
      } else if (currentRoot) {
        currentRoot.children.push(group);
      } else {
        roots.push(group);
        currentRoot = group;
      }

      stack.push(group);
    });

  return { roots, allProducts };
};

const { roots: gmdCatalog, allProducts: gmdProducts } = buildCatalog();

const findRootCategory = (category: string) => {
  const normalizedCategory = slugify(category);
  return gmdCatalog.find(
    (root) => root.slug === normalizedCategory || normalizeText(root.title) === normalizeText(category),
  );
};

export const getGmdCategories = () => gmdCatalog.map((category) => category.title);

export const getGmdSubcategories = (category: string) => {
  const root = findRootCategory(category);
  if (!root) {
    return [];
  }

  return root.children
    .filter((child): child is GmdCatalogGroup => child.kind === 'group')
    .map((child) => child.title);
};

export const getGmdCategoryNode = (category: string) => findRootCategory(category);

export const getGmdNodeByPath = (category: string, pathSegments: string[] = []) => {
  const root = findRootCategory(category);
  if (!root) {
    return undefined;
  }

  let current: GmdCatalogNode = root;

  for (const segment of pathSegments) {
    if (current.kind !== 'group') {
      return undefined;
    }

    const nextNode: GmdCatalogNode | undefined = current.children.find((child) => child.slug === segment);
    if (!nextNode) {
      return undefined;
    }

    current = nextNode;
  }

  return current;
};

export const getGmdPathChildren = (category: string, pathSegments: string[] = []) => {
  const node = getGmdNodeByPath(category, pathSegments);
  if (!node || node.kind !== 'group') {
    return [];
  }

  return node.children;
};

export const getGmdProductsByPath = (category: string, pathSegments: string[] = []) => {
  const children = getGmdPathChildren(category, pathSegments);
  return children.filter((child): child is GmdCatalogProduct => child.kind === 'product');
};

export const buildGmdPath = (segments: string[]) =>
  `/gmd-productos/categoria/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`;

export const findGmdProduct = (productId: string) => gmdProducts.find((product) => product.id === productId);

export { gmdCatalog, gmdProducts };
