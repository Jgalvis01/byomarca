import { motion } from 'framer-motion';
import AnimatedBadge from '../components/AnimatedBadge';

const OtrasMarcasPage = () => {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-black relative flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-8 flex justify-center">
            <AnimatedBadge text="Próximamente" variant="blue" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-8">
            <span className="text-white">Otras </span>
            <span className="text-gradient">Marcas</span>
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            Estamos trabajando para traerte más opciones de calidad para el sector salud.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OtrasMarcasPage;
