import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

const ProductCard = ({
  name,
  description,
  features,
  image,
  category,
}: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
      whileHover={{ y: -6 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium shadow-lg shadow-cyan-500/20">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-cyan-500 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-sm text-slate-600"
            >
              <svg
                className="w-4 h-4 text-cyan-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <button className="mt-6 w-full py-3 rounded-full border-2 border-cyan-500/30 text-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm font-medium">
          Ver detalles
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;