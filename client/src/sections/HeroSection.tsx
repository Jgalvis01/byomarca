import CTAButton from '../components/CTAButton';
import AnimatedBadge from '../components/AnimatedBadge';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(36, 245, 252, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(36, 245, 252, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-float opacity-50" />
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-float opacity-30"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-40"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <AnimatedBadge text="Productos Clínicos Premium" variant="cyan" />
        </div>

        {/* Main Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/images/LOGO BYOMARCA1 (1).png" 
            alt="BYOMARCA" 
            className="w-full max-w-3xl h-auto drop-shadow-[0_0_15px_rgba(36,245,252,0.5)] animate-fade-in"
            style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Diseñamos y fabricamos sillas clínicas y mobiliario hospitalario de
          alta categoria. Tecnología avanzada, confort excepcional y calidad premium
          para instituciones de salud que exigen lo mejor.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <CTAButton
            text="Ver Catálogo"
            href="#products"
            variant="primary"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />
          <CTAButton
            text="Contáctanos"
            href="#contact"
            variant="outline"
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;