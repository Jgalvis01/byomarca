interface AnimatedBadgeProps {
  text: string;
  variant?: 'cyan' | 'blue' | 'white';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const AnimatedBadge = ({
  text,
  variant = 'cyan',
  size = 'md',
  animated = true,
}: AnimatedBadgeProps) => {
  const variantStyles = {
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    blue: 'bg-blue-600/10 border-blue-600/30 text-blue-400',
    white: 'bg-white/10 border-white/20 text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border smooth-transition ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${
        animated ? 'animate-glow' : ''
      }`}
    >
      {text}
    </span>
  );
};

export default AnimatedBadge;