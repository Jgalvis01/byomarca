import { motion } from 'framer-motion';
import type { GmdCatalogNode } from '../data/gmdCatalog';

interface GmdCatalogCardProps {
  node: GmdCatalogNode;
  onClick: () => void;
}

const GmdCatalogCard = ({ node, onClick }: GmdCatalogCardProps) => {
  if (node.kind === 'group') {
    return (
      <motion.button
        type="button"
        whileHover={{ y: -5 }}
        onClick={onClick}
        className="glass-card rounded-2xl p-5 border border-sky-300/55 bg-[#151F3F] shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col justify-between h-full text-left hover:border-sky-200/80 hover:bg-[#1a2750] transition-all duration-300 blue-glow group"
      >
        <div className="space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-400/20 border border-sky-200/30 flex items-center justify-center text-sky-100 font-bold">
            {node.title.slice(0, 1).toUpperCase()}
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-sky-200 font-bold">Apartado</span>
            <h3 className="text-white font-bold text-base mt-2 line-clamp-3 uppercase hover:text-sky-100 transition-colors">
              {node.title}
            </h3>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-sky-200/20 flex justify-between items-center text-xs text-slate-200/90">
          <span>{node.children.length} elementos</span>
          <span className="text-sky-200 font-bold">Ver →</span>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="glass-card rounded-2xl p-4 border border-sky-300/45 bg-[#151F3F] shadow-[0_18px_40px_rgba(0,0,0,0.35)] flex flex-col h-full text-left hover:border-sky-200/75 hover:bg-[#1a2750] transition-all duration-300 blue-glow group"
    >
      <div className="aspect-square rounded-xl bg-slate-900/85 border border-sky-300/15 p-4 flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={node.image}
          alt={node.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-sky-200 font-bold">
            {node.subcategory || node.category}
          </span>
          <h3 className="text-white font-bold text-base mt-1 line-clamp-2 hover:text-blue-400 transition-colors">
            {node.name}
          </h3>
          <p className="mt-2 text-xs text-slate-300/85 line-clamp-2">
            {node.description}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-sky-200/20 flex justify-between items-center text-xs text-slate-200/90">
          <span>Ref: {node.ref}</span>
          <span className="text-sky-200 font-bold">Ver →</span>
        </div>
      </div>
    </motion.button>
  );
};

export default GmdCatalogCard;
