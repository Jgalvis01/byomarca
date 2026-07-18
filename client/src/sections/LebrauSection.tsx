import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    title: 'Sillas Reclinomáticas Grado Médico',
    products: ['SR10D', 'SR10R', 'SR20D', 'SR20R'],
  },
  {
    title: 'Sofácamas Grado Médico',
    products: ['SC30R'],
  },
  {
    title: 'Salas de Espera Clínicas',
    products: ['SAES01', 'SAES02'],
  },
];

interface ProductDetails {
  ref: string;
  category: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  recommendations?: string[];
}

const productDataMap: Record<string, ProductDetails> = {
  SR10D: {
    ref: 'SR10D',
    category: 'Mobiliario Hospitalario Premium',
    description: 'Silla reclinable mecánica de brazo ancho para mayor soporte y comodidad del paciente.',
    images: ['/images/kento.png', '/images/kento1.png', '/images/kento2.png'],
    specs: [
      { label: 'Uso Ideal', value: 'Procedimientos de larga duración (Diálisis, Quimioterapia) y salas de lactancia.' },
      { label: 'Mecanismo', value: 'Reclinación mecánica por empuje.' },
      { label: 'Confort', value: 'Cojinería en espuma Croydon doble densidad.' },
      { label: 'Tapizado', value: 'Vinilo Pranna antibacterial color Azul.' },
      { label: 'Estructura', value: 'Madera contrachapada (Plywood) 15mm con refuerzo estructural metálico Cal. 14.' },
      { label: 'Base', value: '4 Deslizadores plásticos fijos de alta resistencia.' },
      { label: 'Dimensiones Brazo', value: '13 cm de ancho (Ideal para apoyo de brazos en procedimientos).' },
      { label: 'Capacidad Carga', value: '150 kg.' },
      { label: 'Garantía', value: '1 año por defectos de fábrica en mecanismo y estructura.' }
    ],
    recommendations: [
      'Limpieza: Utilizar jabones con soluciones neutras para la desinfección.',
      'Advertencia: No aplicar detergentes o químicos fuertes directamente sobre el material para evitar el deterioro prematuro del vinilo.'
    ]
  },
  SR10R: {
    ref: 'SR10R',
    category: 'Mobiliario Hospitalario Premium',
    description: 'Silla reclinable mecánica de brazo ancho para mayor soporte y comodidad del paciente.',
    images: ['/images/kento.png', '/images/kento1.png', '/images/kento2.png', '/images/kento3.png'],
    specs: [
      { label: 'Uso Ideal', value: 'Procedimientos de larga duración (Diálisis, Quimioterapia) y salas de lactancia.' },
      { label: 'Mecanismo', value: 'Reclinación mecánica por empuje.' },
      { label: 'Confort', value: 'Cojinería en espuma Croydon doble densidad.' },
      { label: 'Tapizado', value: 'Vinilo Pranna antibacterial color Azul.' },
      { label: 'Estructura', value: 'Madera contrachapada (Plywood) 15mm con refuerzo estructural metálico Cal. 14.' },
      { label: 'Base', value: '4 Ruedas hospitalarias de 3" (2 ruedas con freno de seguridad).' },
      { label: 'Dimensiones Brazo', value: '13 cm de ancho (Ideal para apoyo de brazos en procedimientos).' },
      { label: 'Capacidad Carga', value: '150 kg.' },
      { label: 'Garantía', value: '1 año por defectos de fábrica en mecanismo y estructura.' }
    ],
    recommendations: [
      'Limpieza: Utilizar jabones con soluciones neutras para la desinfección.',
      'Movilidad: Asegúrese de activar los frenos antes de que el paciente se siente o se levante.',
      'Advertencia: No aplicar detergentes o químicos fuertes directamente sobre el material para evitar el deterioro prematuro del vinilo.'
    ]
  },
  SR20D: {
    ref: 'SR20D',
    category: 'Mobiliario Hospitalario / Clínico',
    description: 'Silla reclinable mecánica diseñada para entornos de salud y cuidado intensivo.',
    images: ['/images/nagy.png', '/images/nagy1.png', '/images/nagy2.png'],
    specs: [
      { label: 'Uso Ideal', value: 'Posoperatorio, Diálisis, Quimioterapia, Observación, Descanso, Terapia Respiratoria, Lactancia.' },
      { label: 'Mecanismo', value: 'Reclinación mecánica accionable mediante el empuje del espaldar (hacia atrás).' },
      { label: 'Confort', value: 'Espuma Croydon de doble densidad en espaldar y cojín para máximo confort.' },
      { label: 'Tapizado', value: 'Vinilo Pranna color Azul (Antibacterial), 100% intercambiable en sitio.' },
      { label: 'Estructura', value: 'Plywood de 15 mm con refuerzo metálico interno Calibre 14 en puntos de ensamble.' },
      { label: 'Base', value: '4 Deslizadores plásticos fijos en polipropileno de alta resistencia.' },
      { label: 'Capacidad Carga', value: '200 kg.' },
      { label: 'Garantía', value: '1 año por defectos de fábrica en mecanismo y estructura.' }
    ],
    recommendations: [
      'Limpieza: Utilizar jabones con soluciones neutras para la desinfección.',
      'Advertencia: No aplicar detergentes o químicos fuertes directamente sobre el material para evitar el deterioro prematuro del vinilo.'
    ]
  },
  SR20R: {
    ref: 'SR20R',
    category: 'Mobiliario Hospitalario / Clínico',
    description: 'Silla reclinable mecánica diseñada para entornos de salud y cuidado intensivo con movilidad.',
    images: ['/images/nagy.png', '/images/nagy1.png', '/images/nagy2.png', '/images/nagy3.png'],
    specs: [
      { label: 'Uso Ideal', value: 'Posoperatorio, Diálisis, Quimioterapia, Observación, Descanso, Terapia Respiratoria, Lactancia.' },
      { label: 'Mecanismo', value: 'Reclinación mecánica accionable mediante el empuje del espaldar (hacia atrás).' },
      { label: 'Confort', value: 'Espuma Croydon de doble densidad en espaldar y cojín para máximo confort.' },
      { label: 'Tapizado', value: 'Vinilo Pranna color Azul (Antibacterial), 100% intercambiable en sitio.' },
      { label: 'Estructura', value: 'Plywood de 15 mm con refuerzo metálico interno Calibre 14 en puntos de ensamble.' },
      { label: 'Base', value: '4 Ruedas hospitalarias de 3" (2 ruedas con freno de seguridad).' },
      { label: 'Capacidad Carga', value: '200 kg.' },
      { label: 'Garantía', value: '1 año por defectos de fábrica en mecanismo y estructura.' }
    ],
    recommendations: [
      'Limpieza: Utilizar jabones con soluciones neutras para la desinfección.',
      'Movilidad: Asegúrese de activar los frenos antes de que el paciente se siente o se levante.',
      'Advertencia: No aplicar detergentes o químicos fuertes directamente sobre el material para evitar el deterioro prematuro del vinilo.'
    ]
  },
  SC30R: {
    ref: 'SC30R',
    category: 'Mobiliario Hospitalario / Clínico',
    description: 'Sofá Cama Premium con mecanismo de 3 cuerpos de apertura suave y tapizado antibacterial.',
    images: ['/images/sofa1.png', '/images/sofa2.png', '/images/sofa3.png', '/images/sofa4.png'],
    specs: [
      { label: 'Mecanismo', value: 'Metálico de 3 cuerpos (3C) con apertura suave.' },
      { label: 'Acolchado', value: 'Espuma Croydon de doble densidad en espaldar, tendido y frontal.' },
      { label: 'Estructura', value: 'Plywood de 15 mm con refuerzos metálicos internos.' },
      { label: 'Tapizado', value: 'Material sintético antibacterial de alta higiene.' },
      { label: 'Movilidad', value: '4 ruedas hospitalarias de 3 pulgadas (2 con freno).' },
      { label: 'Capacidad Carga', value: 'Soporta una carga máxima de 180 kg.' },
      { label: 'Garantía', value: '1 año contra defectos en mecanismo y estructura.' }
    ],
    recommendations: [
      'Limpieza/Desinfección: Usar exclusivamente jabones con soluciones neutras.',
      'Restricción: No aplicar ningún tipo de detergente directamente.',
      'Movilidad: Asegúrese de activar los frenos antes de que el paciente se siente o se levante.'
    ]
  },
  SAES01: {
    ref: 'SAES01',
    category: 'Salas de Espera Premium (1 Puesto)',
    description: 'Sistema modular de configuración libre (1 puesto), diseñado para áreas de alto tráfico y salas de espera institucionales.',
    images: ['/images/saes01.jpg', '/images/saes01-1.jpg', '/images/saes01-2.jpg', '/images/saes01-3.jpg'],
    specs: [
      { label: 'Dimensiones', value: 'Ancho: 0.60 m · Profundidad: 0.65 m · Alto: 0.84 m · Altura de sentadero: 0.44 m' },
      { label: 'Estructura Inferior', value: 'Metálica en tubo rectangular de 1" x 2" calibre 16, con platinas laterales en lámina HR calibre 1/8", acabado en pintura electrostática.' },
      { label: 'Patas', value: '4 unidades de pata metálica Ref. Berlín, acabado en pintura electrostática color gris medio.' },
      { label: 'Estructura Interna', value: 'Sentadero y espaldar en plywood de 15 mm, con insertos metálicos para el proceso de ensamble.' },
      { label: 'Forros', value: 'Material sintético Ref. Vertigo de Nuvant.' },
      { label: 'Ensamble', value: 'Proceso en tornillería flange M6.' }
    ]
  },
  SAES02: {
    ref: 'SAES02',
    category: 'Salas de Espera Premium (2 Puestos)',
    description: 'Sistema modular de configuración libre (2 puestos), ideal para pasillos y salas de espera comunes en instituciones de salud.',
    images: ['/images/saes02.jpg', '/images/saes02-1.jpg', '/images/saes02-2.jpg'],
    specs: [
      { label: 'Dimensiones', value: 'Ancho: 1.20 m · Profundidad: 0.65 m · Alto: 0.84 m · Altura de sentadero: 0.44 m' },
      { label: 'Estructura Inferior', value: 'Metálica en tubo rectangular de 1" x 2" calibre 16, con platinas laterales en lámina HR calibre 1/8", acabado en pintura electrostática.' },
      { label: 'Patas', value: '4 unidades de pata metálica Ref. Berlín, acabado en pintura electrostática color gris medio.' },
      { label: 'Estructura Interna', value: 'Sentadero y espaldar en plywood de 15 mm, con insertos metálicos para el proceso de ensamble.' },
      { label: 'Forros', value: 'Material sintético Ref. Vertigo de Nuvant.' },
      { label: 'Ensamble', value: 'Proceso en tornillería flange M6.' }
    ]
  }
};

const LebrauSection = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const expandedViewRef = useRef<HTMLDivElement>(null);

  const productData = activeProduct ? productDataMap[activeProduct] : null;

  useEffect(() => {
    if (!activeProduct) {
      return;
    }

    const timer = window.setTimeout(() => {
      expandedViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [activeProduct]);

  const handleProductChange = (prod: string) => {
    setActiveProduct(prod);
    setActiveImageIndex(0);
  };

  return (
    <section id="lebrau" className="py-24 bg-gradient-to-b from-black via-blue-950/20 to-black relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        {/* Logo Header */}
        <motion.div
          className="flex flex-col items-center justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            src="/images/logolebraunew.png" 
            alt="LEBRAU" 
            className="h-24 md:h-36 lg:h-48 w-auto drop-shadow-[0_0_20px_rgba(0,136,255,0.7)]"
            style={{ filter: 'brightness(1.1) drop-shadow(0 0 20px rgba(0,136,255,0.7))' }}
          />
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-4xl mt-8 leading-relaxed font-medium">
            La marca Lebrau reune diseño y versatilidad en productos médicos, ofreciendo una línea completa de mobiliario clínico, soluciones de diagnóstico y otras alternativas que responden a las necesidades del sector salud.
          </p>
        </motion.div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, idx) => {
            let catImage = '/images/kento.png';
            if (category.title === 'Sofácamas Grado Médico') catImage = '/images/sofa1.png';
            if (category.title === 'Salas de Espera Clínicas') catImage = '/images/saes02.jpg';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5"
              >
                <img
                  src={catImage}
                  alt={category.title}
                  className="w-full h-48 object-contain mb-4 rounded-xl bg-white/5"
                />
                <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-blue-500/30 pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-col space-y-4">
                  {category.products.map((product) => (
                    <button
                      key={product}
                      onClick={() => handleProductChange(product)}
                      className={`px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-lg text-center ${
                        activeProduct === product
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expanded View with Ficha Tecnica (Left) and Photos (Right) */}
        <AnimatePresence mode="wait">
          {activeProduct && productData && (
            <motion.div
              ref={expandedViewRef}
              key={activeProduct}
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-6 md:p-10 border border-blue-500/30 bg-blue-950/10 overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8 border-b border-blue-500/20 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">{productData.category}</span>
                  <h3 className="text-3xl font-bold text-white mt-1">
                    Marca: <span className="text-blue-400">Lebrau</span> — Referencia: <span className="text-blue-400">{productData.ref}</span>
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProduct(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Side: Ficha Tecnica */}
                <div className="flex flex-col justify-start space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Descripción General</h4>
                    <p className="text-gray-300 leading-relaxed">{productData.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Especificaciones Técnicas</h4>
                    <div className="overflow-hidden border border-blue-500/20 rounded-xl">
                      <table className="min-w-full divide-y divide-blue-500/20">
                        <tbody className="divide-y divide-blue-500/20 bg-black/40">
                          {productData.specs.map((spec, i) => (
                            <tr key={i} className="hover:bg-blue-500/5 transition-colors">
                              <td className="px-4 py-3 text-sm font-semibold text-blue-400 w-1/3 border-r border-blue-500/20">
                                {spec.label}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-300">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {productData.recommendations && productData.recommendations.length > 0 && (
                    <div className="rounded-2xl border border-blue-400/25 bg-slate-950/90 px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.28)]">
                      <h5 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3 text-center">
                        Recomendaciones y Mantenimiento
                      </h5>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-slate-200 leading-relaxed">
                        {productData.recommendations.map((rec, i) => (
                          <li key={i}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Side: Photo Gallery */}
                <div className="flex flex-col space-y-6">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-4">
                    <img
                      src={productData.images[activeImageIndex]}
                      alt={`${productData.ref} view`}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />

                    {productData.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev === 0 ? productData.images.length - 1 : prev - 1))}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev === productData.images.length - 1 ? 0 : prev + 1))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {productData.images.length > 1 && (
                    <div className="flex flex-wrap gap-3">
                      {productData.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`w-20 h-16 rounded-lg overflow-hidden border-2 bg-white/5 p-1 transition-all ${
                            activeImageIndex === idx ? 'border-blue-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LebrauSection;