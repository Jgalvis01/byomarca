import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial opacity-60"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 136, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 136, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-600 rounded-full opacity-30"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40"
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Logo with effects */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Glow behind logo */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-[80%] h-[80%] bg-blue-500/20 blur-3xl rounded-full" />
            </motion.div>

            {/* Orbiting particles */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 border border-blue-400/50 rounded-full"
              animate={{
                x: [0, 120, 0, -120, 0],
                y: [60, 0, -60, 0, 60],
                opacity: [0.3, 0.8, 0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8, 1.2, 0.8],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 border border-blue-400/40 rounded-full bg-blue-400/10"
              animate={{
                x: [0, -100, 0, 100, 0],
                y: [-40, 0, 40, 0, -40],
                opacity: [0.4, 0.7, 0.4, 0.7, 0.4],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-blue-300/30 rounded-full"
              animate={{
                x: [50, -80, 50],
                y: [30, -50, 30],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]"
                animate={{
                  x: ['-150%', '400%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Logo image with float */}
            <motion.img
              src="/images/LOGO BYOMARCA1 (1).png"
              alt="BYOMARCA"
              className="relative z-10 w-full max-w-3xl h-auto"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0,136,255,0.5))',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 1, ease: 'easeOut' },
                y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }}
            />
          </div>
        </div>

        {/* Text Container with AnimatePresence */}
        <div className="relative h-24 flex items-center justify-center w-full mt-6">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.h2
                key="slogan"
                className="absolute text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                Calidad que refleja compromiso
              </motion.h2>
            ) : (
              <motion.p
                key="description"
                className="absolute text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                Ofrecemos productos y mobiliario clínico, integrando tecnología avanzada
                y estándares de calidad. Cada solución refleja nuestro compromiso con la
                excelencia para entidades de salud que buscan lo mejor.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;