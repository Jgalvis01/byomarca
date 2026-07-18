import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Logo on Top Left */}
      <div className="absolute top-24 left-8">
        <img
          src="/images/LOGO BYOMARCA1 (1).png"
          alt="BYOMARCA"
          className="h-16 w-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        {/* Block: Image + Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card">
              <img
                src="/images/nosotros.png"
                alt="Misión BYOMARCA"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl" />
          </motion.div>

          {/* Mission */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-white mb-8">
              Misión
            </h3>
            <p className="text-gray-300 leading-relaxed text-xl font-medium">
              Ofrecemos productos y mobiliario clínico confiables, integrando
              tecnología y calidad para apoyar a las instituciones de salud en
              su labor de cuidado y bienestar.
            </p>
          </motion.div>
        </div>

        {/* Block: Vision */}
        <motion.div
          className="max-w-4xl mx-auto text-center mt-12 p-10 glass-card rounded-3xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-white mb-8">
            Visión
          </h3>
          <p className="text-gray-300 leading-relaxed text-xl font-medium text-justify">
            Para el año 2030, nuestra empresa se consolidará en el mercado
            colombiano como un proveedor confiable de productos y mobiliario
            clínico, reconocido por su servicio responsable y cercano. A
            través de una planificación estratégica y la incorporación gradual
            de soluciones tecnológicas, alcanzaremos procesos eficientes y
            sostenibles que respalden la calidad en cada entrega. Nuestro
            crecimiento estará fundamentado en la construcción de relaciones
            sólidas con instituciones de salud, en la formación continua de
            nuestro equipo y en la capacidad de adaptarnos a las necesidades
            cambiantes del sector.
          </p>
        </motion.div>
      </div>

      {/* Equipos Médicos e Innovación Constante */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-2xl p-8 smooth-transition blue-glow group"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
            <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 smooth-transition">
            Equipos Médicos Especializados
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Amplio portafolio de equipos médicos de alta tecnología para diagnóstico, monitoreo y tratamiento en instituciones de salud.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-2xl p-8 smooth-transition blue-glow group"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
            <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 smooth-transition">
            Innovación Constante
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Investigación y desarrollo continuo para ofrecer soluciones de mobiliario clínico de vanguardia.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NosotrosPage;
