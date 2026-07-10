import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  feature: string;
  description: string;
}

interface ProductViewerProps {
  images: ProductImage[];
  productName: string;
}

const ProductViewer = ({ images, productName }: ProductViewerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden p-8 border border-slate-200 shadow-lg shadow-slate-200/50">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-4 mt-6">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleImageClick(index)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{productName}</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6" />

          {/* Active Feature */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <span className="text-cyan-500 text-sm font-medium uppercase tracking-wider">
                  Característica destacada
                </span>
                <h4 className="text-xl font-semibold text-slate-900 mt-2">
                  {images[activeIndex].feature}
                </h4>
              </div>

              <p className="text-slate-500 leading-relaxed mb-8">
                {images[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Feature Indicators */}
          <div className="space-y-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleImageClick(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 shadow-sm'
                    : 'bg-slate-50 border border-transparent hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      activeIndex === index ? 'bg-cyan-500' : 'bg-slate-300'
                    }`}
                  />
                  <span
                    className={`text-sm transition-colors ${
                      activeIndex === index
                        ? 'text-cyan-600 font-medium'
                        : 'text-slate-500'
                    }`}
                  >
                    {image.feature}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewer;