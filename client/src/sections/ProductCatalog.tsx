import ProductCard from '../components/ProductCard';
import ProductViewer from '../components/ProductViewer';
import AnimatedBadge from '../components/AnimatedBadge';

const ProductCatalog = () => {
  const products = [
    {
      name: 'Kento con Ruedas',
      description: 'Silla clínica reclinable con sistema de movilidad integrado. Ideal para salas de diálisis y quimioterapia.',
      features: ['Reclinación 180°', 'Ruedas hospitalarias', 'Respaldo ajustable', 'Bandeja incluida'],
      image: '/images/Gemini_Generated_Image_2sgipy2sgipy2sgi.png',
      category: 'Sillas Clínicas',
    },
    {
      name: 'Kento Fija',
      description: 'Silla clínica estática con base reforzada. Perfecta para observación y recuperación.',
      features: ['Base reforzada', 'Reclinación 160°', 'Material antibacterial', 'Fácil limpieza'],
      image: '/images/Gemini_Generated_Image_xmyg9axmyg9axmyg.png',
      category: 'Sillas Clínicas',
    },
    {
      name: 'Nagy con Ruedas',
      description: 'Silla de lactancia móvil con diseño ergonómico. Confort para madre y bebé.',
      features: ['Ergonómica', 'Ruedas silenciosas', 'Reposabrazos acolchados', 'Fácil maniobra'],
      image: '/images/Gemini_Generated_Image_w4ouww4ouww4ouww.png',
      category: 'Sillas de Lactancia',
    },
    {
      name: 'Nagy Fija',
      description: 'Silla de lactancia estática con diseño premium. Espacios de lactancia confortables.',
      features: ['Diseño premium', 'Tejido hipoalergénico', 'Soporte lumbar', 'Estabilidad total'],
      image: '/images/PR8.jpg',
      category: 'Sillas de Lactancia',
    },

  ];

  const productImages = [
    {
      id: 1,
      src: '/images/PR4.jpg',
      alt: 'Vista frontal',
      feature: 'Diseño Ergonómico',
      description: 'Forma anatómica que se adapta al cuerpo del paciente, reduciendo puntos de presión y mejorando la circulación.',
    },
    {
      id: 2,
      src: '/images/Gemini_Generated_Image_2s62n52s62n52s62.png',
      alt: 'Sistema reclinable',
      feature: 'Sistema Reclinable',
      description: 'Mecanismo de reclinación suave de 5 posiciones, desde posición sentada hasta casi horizontal para máximo confort.',
    },
    {
      id: 3,
      src: '/images/Gemini_Generated_Image_6075tb6075tb6075.png',
      alt: 'Material antibacterial',
      feature: 'Material Antibacterial',
      description: 'Tejidos tratados con tecnología antimicrobiana que previene la proliferación de bacterias y facilita la desinfección.',
    },
    {
      id: 4,
      src: '/images/Gemini_Generated_Image_1tpx8x1tpx8x1tpx.png',
      alt: 'Ruedas hospitalarias',
      feature: 'Ruedas Hospitalarias',
      description: 'Ruedas de grado médico con sistema de freno integrado, silenciosas y fáciles de maniobrar en cualquier superficie.',
    },
  ];

  return (
    <section id="products" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <AnimatedBadge text="Catálogo 2024" variant="cyan" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-white">Nuestros </span>
            <span className="text-gradient">Productos</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Soluciones de mobiliario clínico diseñadas para hospitales, clínicas y
            centros de salud que exigen calidad premium y funcionalidad.
          </p>
        </div>

        {/* Interactive Product Viewer */}
        <div className="mb-20">
          <ProductViewer
            images={productImages}
            productName="Silla Clínica Kento"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              features={product.features}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            ¿Necesitas una solución personalizada? Contáctanos para cotizaciones especiales.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <span>Solicitar cotización</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;