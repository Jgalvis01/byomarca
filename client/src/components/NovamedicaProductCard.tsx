import { motion } from 'framer-motion';
import type { NovamedicaProduct } from '../data/novamedicaData';

interface NovamedicaProductCardProps {
  product: NovamedicaProduct;
  onClick: () => void;
}

const NovamedicaProductCard = ({ product, onClick }: NovamedicaProductCardProps) => {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="glass-card rounded-2xl p-4 border border-sky-300/45 bg-[#151F3F] shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col h-full text-left hover:border-sky-200/75 hover:bg-[#1a2750] transition-all duration-300 blue-glow group"
    >
      <div className="aspect-square rounded-xl bg-slate-900/85 border border-sky-300/15 p-4 flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-sky-200 font-bold">
            {product.category}
          </span>
          <h3 className="text-white font-bold text-base mt-1 line-clamp-2 hover:text-blue-400 transition-colors uppercase">
            {product.name}
          </h3>
        </div>
        <div className="mt-4 pt-3 border-t border-sky-200/20 flex justify-between items-center text-xs text-slate-200/90">
          <span>Ref: {product.ref}</span>
          <span className="text-sky-200 font-bold">Ver →</span>
        </div>
      </div>
    </motion.button>
  );
};

export default NovamedicaProductCard;
