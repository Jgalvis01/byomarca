import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductOption {
  id: number;
  name: string; // Used for references now
  description: string;
  features: string[];
  image: string;
  images?: string[];
  category: string;
}

interface ProductOptionsViewerProps {
  options: ProductOption[];
}

const ProductOptionsViewer = ({ options }: ProductOptionsViewerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeOption = options[activeIndex];
  const gallery = activeOption.images ?? [activeOption.image];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden p-8 shadow-2xl border border-gray-200">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="relative">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeOption.id}-${activeImageIndex}`}
                src={gallery[activeImageIndex]}
                alt={activeOption.category}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 text-gray-800 backdrop-blur-md shadow-lg hover:bg-white transition-colors"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 text-gray-800 backdrop-blur-md shadow-lg hover:bg-white transition-colors"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="flex flex-wrap gap-3 mt-5">
              {gallery.map((image, index) => (
                <button
                  key={`${activeOption.id}-image-${index}`}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-pressed={activeImageIndex === index}
                  className={`h-20 w-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === index
                      ? 'border-blue-500 shadow-md shadow-blue-500/30'
                      : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-cover bg-slate-50"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
                className={`group rounded-xl border-2 p-3 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-blue-500 bg-blue-50 shadow-md shadow-blue-500/20'
                    : 'border-transparent bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-200 border border-slate-300">
                  <img
                    src={option.image}
                    alt={`Miniatura ${option.category}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span
                  className={`mt-3 block text-base leading-tight font-bold text-center ${
                    activeIndex === index ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {option.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOption.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {activeOption.category}
              </h3>
              
              <div className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner">
                <h4 className="text-xl uppercase tracking-wider text-blue-600 font-bold mb-4">
                  Referencias
                </h4>
                <p className="text-3xl font-bold text-gray-800 tracking-wide">
                  {activeOption.name}
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/contacto"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 text-xl font-bold hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 w-full md:w-auto"
                >
                  Solicitar cotización
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductOptionsViewer;
