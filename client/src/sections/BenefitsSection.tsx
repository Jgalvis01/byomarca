import FeatureCard from '../components/FeatureCard';
import AnimatedBadge from '../components/AnimatedBadge';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Calidad Premium',
      description: 'Materiales de la más alta calidad que garantizan durabilidad y resistencia en entornos médicos exigentes.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Antibacterial',
      description: 'Tejidos y superficies tratadas con tecnología antimicrobiana que previene infecciones cruzadas.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Confort Superior',
      description: 'Diseño ergonómico que reduce la fatiga y mejora la experiencia del paciente durante tratamientos prolongados.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Larga Duración',
      description: 'Estructuras reforzadas y componentes de alta resistencia diseñados para años de uso intensivo.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Movilidad Fácil',
      description: 'Sistemas de ruedas hospitalarias con frenos integrados para transporte seguro y sin esfuerzo.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Certificado',
      description: 'Todos nuestros productos cuentan con certificaciones internacionales de calidad y seguridad médica.',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-black via-blue-950/10 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <AnimatedBadge text="Por qué elegirnos" variant="cyan" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-white">Beneficios </span>
            <span className="text-gradient">BYOMARCA</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada producto BYOMARCA está diseñado para superar las expectativas del
            sector salud, ofreciendo soluciones que combinan innovación, calidad y
            confort.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Compromiso total con tu proyecto
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                No solo vendemos mobiliario, ofrecemos soluciones integrales. Desde
                la asesoría inicial hasta la instalación y el servicio postventa,
                estamos contigo en cada paso del proceso.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Asesoría técnica especializada</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Instalación profesional incluida</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Garantía extendida disponible</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-sm text-gray-500">Proyectos Exitosos</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-gray-500">Clínicas Atendidas</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-sm text-gray-500">Satisfacción</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24h</div>
                <div className="text-sm text-gray-500">Respuesta Rápida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;