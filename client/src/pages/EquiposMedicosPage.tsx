import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GmdPagination from '../components/GmdPagination';
import NovamedicaProductCard from '../components/NovamedicaProductCard';
import { novamedicaProducts } from '../data/novamedicaData';

const ITEMS_PER_PAGE = 36;

const EquiposMedicosPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return novamedicaProducts;
    }

    return novamedicaProducts.filter((product) => {
      const searchable = [
        product.name,
        product.ref,
        product.category,
        ...(product.specs?.map(s => `${s.label} ${s.value}`) || []),
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [query]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  }, [filteredProducts.length]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredProducts]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-5">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-white">
              Equipos <span className="text-gradient uppercase">Médicos</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-3xl leading-relaxed">
              Equipos médicos para el sector salud.
            </p>
          </div>

          <div className="max-w-xl">
            <label className="block text-sm font-semibold text-blue-300 mb-2">Buscar producto</label>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Buscar por nombre, referencia o características..."
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {paginatedProducts.map((product) => (
            <NovamedicaProductCard
              key={product.id}
              product={product}
              onClick={() => {
                navigate(`/equipos-medicos/producto/${product.id}`);
              }}
            />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-gray-300">
            No se encontraron productos que coincidan con tu búsqueda.
          </div>
        ) : (
          <GmdPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default EquiposMedicosPage;
