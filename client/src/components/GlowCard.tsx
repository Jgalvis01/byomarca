interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'blue' | 'purple';
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard = ({
  children,
  className = '',
  glowColor = 'cyan',
  intensity = 'medium',
}: GlowCardProps) => {
  const glowStyles = {
    cyan: {
      low: 'hover:shadow-cyan-500/10',
      medium: 'hover:shadow-cyan-500/20',
      high: 'hover:shadow-cyan-500/30',
    },
    blue: {
      low: 'hover:shadow-blue-600/10',
      medium: 'hover:shadow-blue-600/20',
      high: 'hover:shadow-blue-600/30',
    },
    purple: {
      low: 'hover:shadow-purple-500/10',
      medium: 'hover:shadow-purple-500/20',
      high: 'hover:shadow-purple-500/30',
    },
  };

  return (
    <div
      className={`glass-card rounded-2xl smooth-transition ${glowStyles[glowColor][intensity]} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowCard;