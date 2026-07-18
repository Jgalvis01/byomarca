import { useEffect, useMemo, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GmdHeader from '../components/GmdHeader';
import GmdPagination from '../components/GmdPagination';
import GmdCatalogCard from '../components/GmdCatalogCard';
import { gmdCatalog, gmdProducts, type GmdCatalogProduct } from '../data/gmdCatalog';

const ITEMS_PER_PAGE = 36;

const GmdProductosPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearching = query.trim().length > 0;

  // ── Category nodes (default view) ──
  const sortedNodes = useMemo(() => {
    const nodes = gmdCatalog.flatMap((category) => category.children);
    return [...nodes].sort((a, b) => {
      const aLabel = a.kind === 'group' ? a.title : a.name;
      const bLabel = b.kind === 'group' ? b.title : b.name;
      return aLabel.localeCompare(bLabel, 'es', { sensitivity: 'base' });
    });
  }, []);

  // ── Search results (active only when query is non-empty) ──
  const searchResults = useMemo(() => {
    if (!isSearching) return [];

    const normalizedQuery = query
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

    return gmdProducts.filter((product: GmdCatalogProduct) => {
      const searchable = [
        product.name,
        product.ref,
        product.category,
        product.subcategory || '',
        product.description,
      ]
        .join(' ')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      return tokens.every((token) => searchable.includes(token));
    });
  }, [query, isSearching]);

  // ── Determine what to display ──
  const displayItems = isSearching ? searchResults : sortedNodes;

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(displayItems.length / ITEMS_PER_PAGE));
  }, [displayItems.length]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return displayItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, displayItems]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GmdHeader />

        {/* ── Search Bar ── */}
        <div className="mb-10">
          <div className="relative max-w-2xl">
            {/* Search icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className={`w-5 h-5 transition-colors duration-200 ${
                  isFocused ? 'text-blue-400' : 'text-gray-500'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Buscar producto por nombre, referencia o categoría..."
              className={`w-full pl-12 pr-12 py-3.5 rounded-2xl bg-white/5 border text-white placeholder:text-gray-500 outline-none transition-all duration-300 ${
                isFocused
                  ? 'border-blue-500/60 ring-2 ring-blue-500/15 bg-white/8 shadow-lg shadow-blue-500/5'
                  : 'border-white/10 hover:border-white/20'
              }`}
            />

            {/* Clear button */}
            <AnimatePresence>
              {query && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => {
                    setQuery('');
                    inputRef.current?.focus();
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Search info badge */}
          <AnimatePresence>
            {isSearching && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-3 flex items-center gap-2"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {searchResults.length} {searchResults.length === 1 ? 'producto encontrado' : 'productos encontrados'}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Content Grid ── */}
        {displayItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-12 text-center"
          >
            <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-gray-300 text-lg font-medium">
              No se encontraron productos para "<span className="text-blue-400">{query}</span>"
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Intenta con otro término, nombre o referencia.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
              {paginatedItems.map((node) => (
                <GmdCatalogCard
                  key={node.id}
                  node={node}
                  onClick={() => {
                    if (node.kind === 'group') {
                      navigate(`/gmd-productos/categoria/${encodeURIComponent(node.category)}/${node.slug}`);
                      return;
                    }

                    navigate(`/gmd-productos/producto/${node.id}`);
                  }}
                />
              ))}
            </div>

            <GmdPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default GmdProductosPage;
