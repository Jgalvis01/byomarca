interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CTAButton = ({
  text,
  href,
  variant = 'primary',
  icon,
  onClick,
}: CTAButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-medium smooth-transition text-sm tracking-wide';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105',
    secondary:
      'bg-white text-black hover:bg-gray-100 hover:scale-105',
    outline:
      'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 hover:scale-105',
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </a>
  );
};

export default CTAButton;