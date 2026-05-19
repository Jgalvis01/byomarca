import { useState } from 'react';

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
    <div className="glass-card rounded-3xl overflow-hidden p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900">
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full h-full object-cover smooth-transition animate-fade-in"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-4 mt-6">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleImageClick(index)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 smooth-transition ${
                  activeIndex === index
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25'
                    : 'border-gray-700 hover:border-gray-500'
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
          <h3 className="text-2xl font-bold text-white mb-2">{productName}</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6" />

          {/* Active Feature */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                Característica destacada
              </span>
              <h4 className="text-xl font-semibold text-white mt-2">
                {images[activeIndex].feature}
              </h4>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              {images[activeIndex].description}
            </p>

            {/* Feature Indicators */}
            <div className="space-y-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => handleImageClick(index)}
                  className={`w-full text-left p-4 rounded-xl smooth-transition ${
                    activeIndex === index
                      ? 'bg-cyan-500/10 border border-cyan-500/30'
                      : 'bg-gray-900/50 border border-transparent hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activeIndex === index ? 'bg-cyan-500' : 'bg-gray-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        activeIndex === index
                          ? 'text-cyan-400 font-medium'
                          : 'text-gray-400'
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
    </div>
  );
};

export default ProductViewer;