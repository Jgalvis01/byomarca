interface GmdPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GmdPagination = ({ currentPage, totalPages, onPageChange }: GmdPaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Anterior
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-11 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
              currentPage === page
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-blue-500/10 hover:text-blue-300'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Siguiente
        </button>
      </div>

      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Página {currentPage} de {totalPages}
      </p>
    </div>
  );
};

export default GmdPagination;