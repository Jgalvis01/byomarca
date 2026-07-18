import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OtrasMarcasPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-8">
            <span className="text-white">Nuestras </span>
            <span className="text-gradient">Marcas</span>
          </h1>
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Explora las diferentes líneas de productos y equipos médicos de calidad que ofrecemos para el sector salud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card GMD Productos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/gmd-productos"
              className="block p-10 rounded-3xl glass-card border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-950/10 transition-all duration-300 blue-glow group text-left h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                GMD Productos
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Línea completa de instrumentos de diagnóstico, tensiómetros, oxímetros, camillas, termómetros y accesorios clínicos para profesionales.
              </p>
            </Link>
          </motion.div>

          {/* Card Equipos Médicos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/equipos-medicos"
              className="block p-10 rounded-3xl glass-card border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-950/10 transition-all duration-300 blue-glow group text-left h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                Equipos Médicos
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Mobiliario especializado, soluciones de movilidad como sillas de ruedas, grúas y sistemas avanzados para instituciones médicas.
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OtrasMarcasPage;
