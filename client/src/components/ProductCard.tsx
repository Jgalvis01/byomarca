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
    <div className="glass-card rounded-2xl overflow-hidden smooth-transition blue-glow group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 smooth-transition">
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-sm text-gray-300"
            >
              <svg
                className="w-4 h-4 text-cyan-400 flex-shrink-0"
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
        <button className="mt-6 w-full py-3 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 smooth-transition text-sm font-medium">
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default ProductCard;