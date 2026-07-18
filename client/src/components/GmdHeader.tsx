import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buildGmdPath, getGmdCategories, getGmdSubcategories, slugifyGmdText } from '../data/gmdCatalog';

interface GmdHeaderProps {
  activeCategory?: string;
  activeSubcategory?: string;
  onSubcategorySelect?: (subcategory: string) => void;
}

const GmdHeader = ({ activeCategory, activeSubcategory, onSubcategorySelect }: GmdHeaderProps) => {
  const navigate = useNavigate();
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  
  const catRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  
  const categories = getGmdCategories();
  const subcategories = activeCategory ? getGmdSubcategories(activeCategory) : [];

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(event.target as Node)) {
        setIsCatOpen(false);
      }
      if (subRef.current && !subRef.current.contains(event.target as Node)) {
        setIsSubOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (cat: string) => {
    setIsCatOpen(false);
    navigate(buildGmdPath([slugifyGmdText(cat)]));
  };

  const handleSubcategorySelect = (subcat: string) => {
    setIsSubOpen(false);
    if (onSubcategorySelect) {
      onSubcategorySelect(subcat);
    } else if (activeCategory) {
      navigate(buildGmdPath([slugifyGmdText(activeCategory), slugifyGmdText(subcat)]));
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6 pb-6 border-b border-white/10">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Link to="/gmd-productos" className="hover:text-blue-400 transition-colors font-medium">
            GMD Productos
          </Link>
          {activeCategory && (
            <>
              <span>/</span>
              <Link 
                to={buildGmdPath([slugifyGmdText(activeCategory)])} 
                className="hover:text-blue-400 transition-colors font-semibold text-white"
              >
                {activeCategory}
              </Link>
            </>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-white tracking-tight">
          {activeCategory ? (
            <>Categoría: <span className="text-gradient">{activeCategory}</span></>
          ) : (
            "GMD Productos"
          )}
        </h1>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {/* Categorías Dropdown */}
        <div className="relative" ref={catRef}>
          <button
            onClick={() => setIsCatOpen(!isCatOpen)}
            className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center space-x-2 transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            <span>Categorías</span>
            <svg className={`w-5 h-5 transition-transform duration-200 ${isCatOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isCatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-64 rounded-2xl bg-black/95 backdrop-blur-md border border-blue-500/20 shadow-2xl p-2 z-30 max-h-96 overflow-y-auto"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-all font-semibold ${
                      activeCategory === cat
                        ? 'text-blue-400 bg-blue-500/10'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subcategorías Dropdown (Only if category is active) */}
        {activeCategory && subcategories.length > 0 && (
          <div className="relative" ref={subRef}>
            <button
              onClick={() => setIsSubOpen(!isSubOpen)}
              className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center space-x-2 transition-all duration-200 border border-white/10"
            >
              <span>Subcategorías</span>
              <svg className={`w-5 h-5 transition-transform duration-200 ${isSubOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isSubOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-72 rounded-2xl bg-black/95 backdrop-blur-md border border-white/10 shadow-2xl p-2 z-30 max-h-96 overflow-y-auto"
                >
                  {subcategories.map((subcat) => (
                    <button
                      key={subcat}
                      onClick={() => handleSubcategorySelect(subcat)}
                      className={`w-full text-left px-4 py-3 text-sm rounded-xl transition-all font-semibold ${
                        activeSubcategory === subcat
                          ? 'text-blue-400 bg-blue-500/10'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                      }`}
                    >
                      {subcat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default GmdHeader;
