import { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { findGmdProduct, slugifyGmdText } from '../data/gmdCatalog';
import ImageZoomModal from '../components/ImageZoomModal';

const GmdProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = useMemo(() => {
    return productId ? findGmdProduct(productId) : undefined;
  }, [productId]);

  const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.image);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Update selectedImage when product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <section className="min-h-screen pt-32 pb-24 bg-black relative flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Producto no encontrado</h2>
          <Link to="/gmd-productos" className="text-blue-500 hover:underline">Volver a GMD Productos</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 flex-wrap">
          <Link to="/gmd-productos" className="hover:text-blue-400 transition-colors">GMD Productos</Link>
          <span>/</span>
          <Link to={`/gmd-productos/categoria/${slugifyGmdText(product.category)}`} className="hover:text-blue-400 transition-colors">{product.category}</Link>
          {product.subcategory && (
            <>
              <span>/</span>
              <Link to={`/gmd-productos/categoria/${slugifyGmdText(product.category)}/${slugifyGmdText(product.subcategory)}`} className="hover:text-blue-400 transition-colors">{product.subcategory}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-white font-semibold line-clamp-1">{product.name}</span>
        </div>

        {/* Content Layout: Specs (Left) and Image (Right) */}
        <div className="glass-card rounded-3xl p-6 md:p-10 border border-blue-500/20 bg-blue-950/5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: Specifications & Description */}
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                  {product.subcategory || product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Ficha Técnica</h3>
                <div className="overflow-hidden border border-blue-500/20 rounded-xl">
                  <table className="min-w-full divide-y divide-blue-500/20">
                    <tbody className="divide-y divide-blue-500/20 bg-black/40">
                      <tr className="hover:bg-blue-500/5 transition-colors">
                        <td className="px-4 py-3 text-sm font-semibold text-blue-400 w-1/3 border-r border-blue-500/20">
                          Referencia
                        </td>
                        <td className="px-4 py-3 text-sm text-white font-bold tracking-wide">
                          {product.ref}
                        </td>
                      </tr>
                      {product.specs && product.specs.map((spec, i) => (
                        <tr key={i} className="hover:bg-blue-500/5 transition-colors">
                          <td className="px-4 py-3 text-sm font-semibold text-blue-400 w-1/3 border-r border-blue-500/20">
                            {spec.label}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-300">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cotizar CTA */}
              <div className="pt-4">
                <Link
                  to="/contacto"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 font-bold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>

            {/* Right Side: Photo Showcase */}
            <div className="flex flex-col items-center justify-start space-y-6">
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-8 group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2 focus:ring-offset-black"
                aria-label={`Ampliar imagen de ${product.name}`}
              >
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <span className="absolute bottom-4 right-4 rounded-full bg-black/65 border border-white/15 px-3 py-1 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Clic para ampliar
                </span>
              </button>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 bg-white/5 flex items-center justify-center p-1 hover:scale-105 ${
                        (selectedImage || product.image) === imgUrl
                          ? 'border-blue-400 opacity-100 shadow-[0_0_10px_rgba(96,165,250,0.5)]'
                          : 'border-transparent opacity-60 hover:opacity-100 hover:border-blue-400/50'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} view ${idx + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Zoom Modal */}
        <ImageZoomModal
          isOpen={isZoomOpen}
          onClose={() => setIsZoomOpen(false)}
          src={selectedImage || product.image}
          alt={product.name}
        />

      </div>
    </section>
  );
};

export default GmdProductDetailPage;
