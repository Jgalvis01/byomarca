import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gmdProducts, type GmdCatalogProduct } from '../data/gmdCatalog';
import { novamedicaProducts } from '../data/novamedicaData';

interface SearchResult {
  id: string;
  name: string;
  ref: string;
  category: string;
  image: string;
  source: 'Lebrau' | 'GMD' | 'Equipos Médicos';
  route: string;
}

// Lebrau products defined inline since they're not exported as a flat list
const lebrauProducts: SearchResult[] = [
  {
    id: 'SR10D',
    name: 'Silla Reclinomática Grado Médico',
    ref: 'SR10D',
    category: 'Sillas Reclinomáticas',
    image: '/images/kento.webp',
    source: 'Lebrau',
    route: '/lebrau#SR10D',
  },
  {
    id: 'SR10R',
    name: 'Silla Reclinomática Grado Médico con Ruedas',
    ref: 'SR10R',
    category: 'Sillas Reclinomáticas',
    image: '/images/kento.webp',
    source: 'Lebrau',
    route: '/lebrau#SR10R',
  },
  {
    id: 'SR20D',
    name: 'Silla Reclinomática Hospitalaria / Clínica',
    ref: 'SR20D',
    category: 'Sillas Reclinomáticas',
    image: '/images/nagy.webp',
    source: 'Lebrau',
    route: '/lebrau#SR20D',
  },
  {
    id: 'SR20R',
    name: 'Silla Reclinomática Hospitalaria / Clínica con Ruedas',
    ref: 'SR20R',
    category: 'Sillas Reclinomáticas',
    image: '/images/nagy.webp',
    source: 'Lebrau',
    route: '/lebrau#SR20R',
  },
  {
    id: 'SC30R',
    name: 'Sofá Cama Premium Grado Médico',
    ref: 'SC30R',
    category: 'Sofácamas',
    image: '/images/sofa1.webp',
    source: 'Lebrau',
    route: '/lebrau#SC30R',
  },
  {
    id: 'SAES01',
    name: 'Sala de Espera Clínica (1 Puesto)',
    ref: 'SAES01',
    category: 'Salas de Espera',
    image: '/images/saes01.webp',
    source: 'Lebrau',
    route: '/lebrau#SAES01',
  },
  {
    id: 'SAES02',
    name: 'Sala de Espera Clínica (2 Puestos)',
    ref: 'SAES02',
    category: 'Salas de Espera',
    image: '/images/saes02.webp',
    source: 'Lebrau',
    route: '/lebrau#SAES02',
  },
];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const MAX_RESULTS = 20;

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  console.log("Byomarca Search initialized.");

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Build all results
  const allSearchable = useMemo<SearchResult[]>(() => {
    const gmd: SearchResult[] = gmdProducts.map((p: GmdCatalogProduct) => ({
      id: p.id,
      name: p.name,
      ref: p.ref,
      category: p.category,
      image: p.image,
      source: 'GMD' as const,
      route: `/gmd-productos/producto/${p.id}`,
    }));

    const equipos: SearchResult[] = novamedicaProducts.map((p) => ({
      id: p.id,
      name: p.name,
      ref: p.ref,
      category: p.category,
      image: p.image,
      source: 'Equipos Médicos' as const,
      route: `/equipos-medicos/producto/${p.id}`,
    }));

    return [...lebrauProducts, ...gmd, ...equipos];
  }, []);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return [];

    const tokens = normalize(trimmed).split(/\s+/).filter(Boolean);

    return allSearchable
      .filter((item) => {
        const searchable = normalize(
          [item.name, item.ref, item.category, item.source].join(' ')
        );
        return tokens.every((t) => searchable.includes(t));
      })
      .slice(0, MAX_RESULTS);
  }, [query, allSearchable]);

  const handleSelect = (result: SearchResult) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(result.route);
  };

  const sourceColor = (source: string) => {
    switch (source) {
      case 'Lebrau':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'GMD':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Equipos Médicos':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Search panel */}
          <motion.div
            className="relative w-full max-w-2xl z-10"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <svg
                  className="w-6 h-6 text-blue-400"
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
                placeholder="Buscar producto por nombre, referencia o categoría..."
                className="w-full pl-14 pr-14 py-5 rounded-2xl bg-black/50 backdrop-blur-md border border-blue-500/30 text-white text-lg placeholder:text-gray-500 outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-2xl shadow-blue-500/5"
              />
              <button
                onClick={onClose}
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar búsqueda"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results */}
            <AnimatePresence>
              {query.trim() && (
                <motion.div
                  className="mt-3 rounded-2xl bg-black/60 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-black/50 max-h-[55vh] overflow-y-auto custom-scrollbar"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {results.length === 0 ? (
                    <div className="px-6 py-10 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-600 mb-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <p className="text-gray-400 font-medium">
                        No se encontraron resultados para &quot;<span className="text-blue-400">{query}</span>&quot;
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Intenta con otro término, nombre o referencia
                      </p>
                    </div>
                  ) : (
                    <div className="divide-y divide-white/5">
                      {/* Results count */}
                      <div className="px-5 py-3 flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {results.length} {results.length === 1 ? 'resultado' : 'resultados'}
                        </span>
                      </div>

                      {results.map((result) => (
                        <button
                          key={`${result.source}-${result.id}`}
                          onClick={() => handleSelect(result)}
                          className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-500/10 transition-all duration-200 text-left group"
                        >
                          {/* Thumbnail */}
                          <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center p-1.5 group-hover:border-blue-500/30 transition-colors">
                            <img
                              src={result.image}
                              alt={result.name}
                              className="max-w-full max-h-full object-contain"
                              loading="lazy"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${sourceColor(result.source)}`}>
                                {result.source}
                              </span>
                              <span className="text-xs text-gray-500 truncate">{result.category}</span>
                            </div>
                            <p className="text-white font-semibold text-sm truncate group-hover:text-blue-300 transition-colors">
                              {result.name}
                            </p>
                            <p className="text-gray-400 text-xs truncate">Ref: {result.ref}</p>
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hint */}
            {!query.trim() && (
              <motion.p
                className="text-center text-gray-600 text-sm mt-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Busca en todos los catálogos: Lebrau, GMD y Equipos Médicos — Presiona <kbd className="px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-400 text-xs font-mono">ESC</kbd> para cerrar
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
