import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GmdCatalogCard from '../components/GmdCatalogCard';
import GmdPagination from '../components/GmdPagination';
import {
  buildGmdPath,
  getGmdNodeByPath,
  getGmdPathChildren,
  slugifyGmdText,
  type GmdCatalogNode,
} from '../data/gmdCatalog';

const ITEMS_PER_PAGE = 36;
const CATEGORY_PREFIX = '/gmd-productos/categoria/';

const GmdCategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  const pathSegments = useMemo(() => {
    const decodedPath = decodeURIComponent(location.pathname);
    if (!decodedPath.startsWith(CATEGORY_PREFIX)) {
      return [] as string[];
    }

    return decodedPath
      .slice(CATEGORY_PREFIX.length)
      .split('/')
      .filter(Boolean)
      .map((segment) => segment.trim());
  }, [location.pathname]);

  const categorySlug = pathSegments[0];
  const nestedSegments = pathSegments.slice(1);

  const categoryNode = useMemo(() => {
    const node = categorySlug ? getGmdNodeByPath(categorySlug) : undefined;
    return node && node.kind === 'group' ? node : undefined;
  }, [categorySlug]);

  const activeNode = useMemo(() => {
    if (!categorySlug) {
      return undefined;
    }

    return getGmdNodeByPath(categorySlug, nestedSegments);
  }, [categorySlug, nestedSegments]);

  const children = useMemo(() => {
    if (!categorySlug) {
      return [] as GmdCatalogNode[];
    }

    return getGmdPathChildren(categorySlug, nestedSegments);
  }, [categorySlug, nestedSegments]);

  const breadcrumbSegments = useMemo(() => {
    if (!categoryNode) {
      return [] as Array<{ slug: string; label: string }>;
    }

    const nodes = [{ slug: categorySlug, label: categoryNode.title }];
    let currentPath: string[] = [];

    nestedSegments.forEach((segment) => {
      currentPath = [...currentPath, segment];
      const node = getGmdNodeByPath(categorySlug, currentPath);
      if (node && node.kind === 'group') {
        nodes.push({ slug: currentPath.join('/'), label: node.title });
      }
    });

    return nodes;
  }, [categoryNode, categorySlug, nestedSegments]);

  const categoryTitle = activeNode && activeNode.kind === 'group' ? activeNode.title : categoryNode?.title || '';

  const filteredChildren = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return children;
    }

    return children.filter((node) => {
      const searchable = [
        node.kind === 'group' ? node.title : node.name,
        node.kind === 'product' ? node.name : '',
        node.kind === 'product' ? node.ref : '',
        node.kind === 'product' ? node.description : '',
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [children, query]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredChildren.length / ITEMS_PER_PAGE));
  }, [filteredChildren.length]);

  const paginatedChildren = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredChildren.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredChildren]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  useEffect(() => {
    setCurrentPage(1);
    setQuery('');
  }, [location.pathname]);

  if (!categoryNode) {
    return (
      <section className="min-h-screen pt-32 pb-24 bg-black relative flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Categoría no encontrada</h2>
          <Link to="/gmd-productos" className="text-blue-500 hover:underline">
            Volver a GMD Productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 flex-wrap">
          <Link to="/gmd-productos" className="hover:text-blue-400 transition-colors">GMD Productos</Link>
          {breadcrumbSegments.map((segment, index) => (
            <>
              <span key={`${segment.slug}-sep-${index}`}>/</span>
              <Link
                key={segment.slug}
                to={buildGmdPath([slugifyGmdText(categoryNode.title), ...nestedSegments.slice(0, index).map((value) => slugifyGmdText(value))])}
                className="hover:text-blue-400 transition-colors"
              >
                {segment.label}
              </Link>
            </>
          ))}
        </div>

        <div className="mb-12 space-y-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white">
              {nestedSegments.length > 0 ? (
                <>Apartado: <span className="text-gradient uppercase">{categoryTitle}</span></>
              ) : (
                <>Categoría: <span className="text-gradient uppercase">{categoryNode.title}</span></>
              )}
            </h1>
            <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
              Navega por la jerarquía del catálogo y usa la búsqueda para ubicar productos, títulos intermedios o referencias rápidamente.
            </p>
          </div>

          <div className="max-w-xl">
            <label className="block text-sm font-semibold text-blue-300 mb-2">Buscar dentro de esta categoría</label>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Escribe nombre, referencia o parte de la descripción"
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {paginatedChildren.map((node) => (
            <GmdCatalogCard
              key={node.id}
              node={node}
              onClick={() => {
                if (node.kind === 'group') {
                  navigate(buildGmdPath([slugifyGmdText(categoryNode.title), ...node.path.slice(1)]));
                  return;
                }

                navigate(`/gmd-productos/producto/${node.id}`);
              }}
            />
          ))}
        </div>

        {filteredChildren.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-gray-300">
            No se encontraron resultados para esta búsqueda.
          </div>
        ) : (
          <GmdPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </section>
  );
};

export default GmdCategoryPage;
