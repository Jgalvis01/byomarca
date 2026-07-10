import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    title: 'Sillas Reclinomáticas',
    products: ['SR10D', 'SR10R', 'SR20D', 'SR20R'],
  },
  {
    title: 'Sofá Camas',
    products: ['SC100'],
  },
  {
    title: 'Salas de Espera',
    products: ['SE1', 'SE2'],
  },
];

const LebrauSection = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <section id="lebrau" className="py-24 bg-gradient-to-b from-black via-blue-950/20 to-black relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        {/* Logo Header */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="/images/logolebraunew.png" 
            alt="LEBRAU" 
            className="h-24 md:h-36 lg:h-48 w-auto drop-shadow-[0_0_20px_rgba(0,136,255,0.7)]"
            style={{ filter: 'brightness(1.1) drop-shadow(0 0 20px rgba(0,136,255,0.7))' }}
          />
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-4xl mt-8 leading-relaxed font-medium">
            La marca Lebrau reune diseño y versatilidad en productos médicos, ofreciendo una línea completa de mobiliario clínico, soluciones de diagnóstico y otras alternativas que responden a las necesidades del sector salud.
          </p>
        </motion.div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5"
            >
              <img
                src="/images/kento.png"
                alt={category.title}
                className="w-full h-48 object-contain mb-4 rounded-xl bg-white/5"
              />
              <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-blue-500/30 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-col space-y-4">
                {category.products.map((product) => (
                  <button
                    key={product}
                    onClick={() => setActiveProduct(product)}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-lg text-center ${
                      activeProduct === product
                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded View Placeholder */}
        <AnimatePresence mode="wait">
          {activeProduct && (
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-10 border border-blue-500/30 bg-blue-950/10"
            >
              <div className="flex justify-between items-center mb-8 border-b border-blue-500/20 pb-4">
                <h3 className="text-3xl font-bold text-white">
                  Referencia: <span className="text-blue-400">{activeProduct}</span>
                </h3>
                <button
                  onClick={() => setActiveProduct(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 min-h-[400px]">
                {/* Images Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center border-dashed border-2 p-8">
                  <p className="text-gray-400 text-xl font-medium text-center">
                    [Imágenes de {activeProduct}]
                  </p>
                </div>

                {/* Characteristics Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center border-dashed border-2 p-8">
                  <p className="text-gray-400 text-xl font-medium text-center">
                    [Características de {activeProduct}]
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LebrauSection;