import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-white">Sobre </span>
            <span className="text-gradient">BYOMARCA</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            Nos distinguimos por una producción especializada en mobiliario selecto,
            respaldada por procesos de calidad y diseño que garantizan funcionalidad
            y durabilidad. Al mismo tiempo, fortalecemos nuestra propuesta con la
            distribución de productos de excelente calidad, ofreciendo soluciones
            integrales que se adaptan a las necesidades de cada cliente y área.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card">
              <img
                src="/images/ChatGPT Image 17 may 2026, 05_29_50 p.m..png"
                alt="Instalaciones BYOMARCA"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl" />
          </motion.div>

          {/* Misión y Visión */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Misión */}
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Misión
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-medium">
                Ofrecemos productos y mobiliario clínico confiables, integrando
                tecnología y calidad para apoyar a las instituciones de salud en
                su labor de cuidado y bienestar.
              </p>
            </div>

            {/* Visión */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Visión
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-medium">
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
            </div>
          </motion.div>
        </div>

        {/* Features Grid — only Innovación and Diseño Ergonómico */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants}>
            <div className="glass-card rounded-2xl p-8 smooth-transition blue-glow group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
                <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 smooth-transition">
                Innovación Constante
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Investigación y desarrollo continuo para ofrecer soluciones de mobiliario clínico de vanguardia.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="glass-card rounded-2xl p-8 smooth-transition blue-glow group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition">
                <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h2.34M20 14.66l-2.34 2.34A2 2 0 0017 18.34V20m3-5.34V6a2 2 0 00-2-2h-1.66M17 18.34V16a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-6 0h12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 smooth-transition">
                Diseño Ergonómico
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Productos diseñados pensando en el confort del paciente y la facilidad de uso para el personal médico.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;