interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-8 smooth-transition blue-glow group">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
        <div className="text-cyan-400">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 smooth-transition">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;