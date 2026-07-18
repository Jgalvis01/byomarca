import { useMemo, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { novamedicaProducts } from '../data/novamedicaData';

const NovamedicaProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = useMemo(() => {
    return productId ? novamedicaProducts.find(p => p.id === productId) : undefined;
  }, [productId]);

  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (!product) {
    return (
      <section className="min-h-screen pt-32 pb-24 bg-black relative flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Producto no encontrado</h2>
          <Link to="/equipos-medicos" className="text-blue-500 hover:underline">Volver a Equipos Médicos</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 flex-wrap">
          <Link to="/equipos-medicos" className="hover:text-blue-400 transition-colors">Equipos Médicos</Link>
          <span>/</span>
          <span className="text-gray-300">{product.category}</span>
          <span>/</span>
          <span className="text-white font-semibold line-clamp-1">{product.ref}</span>
        </div>

        {/* Content Layout: Specs (Left) and Image (Right) */}
        <div className="glass-card rounded-3xl p-6 md:p-10 border border-blue-500/20 bg-blue-950/5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side: Specifications & Description */}
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
                  {product.ref}
                </h1>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Ficha Técnica</h3>
                <div className="overflow-hidden border border-blue-500/20 rounded-xl">
                  <table className="min-w-full divide-y divide-blue-500/20">
                    <tbody className="divide-y divide-blue-500/20 bg-black/40">
                      {product.specs && product.specs.map((spec, i) => (
                        <tr key={i} className="hover:bg-blue-500/5 transition-colors">
                          <td className="px-4 py-3 text-sm text-gray-300">
                            {spec.label !== 'Característica' && (
                              <span className="font-semibold text-blue-400 mr-2">{spec.label}:</span>
                            )}
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                      {product.optional && (
                        <tr className="hover:bg-blue-500/5 transition-colors">
                          <td className="px-4 py-3 text-sm text-gray-300">
                            <span className="font-semibold text-sky-300 mr-2">Opcional:</span>
                            {product.optional}
                          </td>
                        </tr>
                      )}
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
            <div className="flex flex-col items-center space-y-6">
              <div className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-8">
                <img
                  src={activeImage || product.image}
                  alt={product.ref}
                  className="max-h-full max-w-full object-contain rounded-xl transition-all duration-300"
                />
              </div>

              {/* Thumbnails Gallery */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 px-2 max-w-md w-full custom-scrollbar">
                  {product.gallery.map((imgSrc, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(imgSrc)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === imgSrc
                          ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                          : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="w-full h-full bg-white/5 flex items-center justify-center p-2">
                        <img src={imgSrc} alt={`${product.ref} - vista ${index + 1}`} className="max-h-full max-w-full object-contain" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default NovamedicaProductDetailPage;
