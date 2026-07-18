import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductOptionsViewer from '../components/ProductOptionsViewer';
import AnimatedBadge from '../components/AnimatedBadge';

const ProductCatalog = () => {
  const products = [
    {
      name: 'SR10D, SR10R, SR20D, SR20R',
      description: '',
      features: [],
      image: '/images/kento.png',
      images: [
        '/images/kento.png',
        '/images/kento1.png',
        '/images/kento2.png',
        '/images/kento3.png',
        '/images/nagy.png',
        '/images/nagy1.png',
        '/images/nagy2.png',
        '/images/nagy3.png',
      ],
      category: 'Sillas Reclinomáticas',
    },
    {
      name: 'SC30R',
      description: '',
      features: [],
      image: '/images/sofa1.png',
      images: [
        '/images/sofa1.png',
        '/images/sofa2.png',
        '/images/sofa3.png',
        '/images/sofa4.png',
      ],
      category: 'Sofá Camas',
    },
    {
      name: 'SAES01, SAES02',
      description: '',
      features: [],
      image: '/images/saes02.jpg',
      images: [
        '/images/saes01.jpg',
        '/images/saes01-1.jpg',
        '/images/saes01-2.jpg',
        '/images/saes01-3.jpg',
        '/images/saes02.jpg',
        '/images/saes02-1.jpg',
        '/images/saes02-2.jpg',
      ],
      category: 'Salas de Espera',
    },
  ];

  return (
    <section id="catalogo" className="py-24 bg-white relative">
      {/* Subtle decorative elements for light mode */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-6 flex justify-center">
            <AnimatedBadge text="Catálogo" variant="blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-gray-900">Opciones </span>
            <span className="text-gradient">LEBRAU</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-8" />
        </motion.div>

        {/* Interactive Product Options */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ProductOptionsViewer
            options={products.map((product, index) => ({
               id: index + 1,
               ...product,
            }))}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-700 mb-6 font-medium text-lg">
            ¿Necesitas una solución personalizada? Contáctanos para cotizaciones especiales.
          </p>
          <Link
            to="/contacto"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold text-xl"
          >
            <span>Solicitar cotización</span>
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;