import FeatureCard from '../components/FeatureCard';

const AboutSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Calidad Certificada',
      description: 'Todos nuestros productos cumplen con las normativas internacionales de calidad y seguridad médica.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Innovación Constante',
      description: 'Investigación y desarrollo continuo para ofrecer soluciones de mobiliario clínico de vanguardia.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h2.34M20 14.66l-2.34 2.34A2 2 0 0017 18.34V20m3-5.34V6a2 2 0 00-2-2h-1.66M17 18.34V16a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-6 0h12" />
        </svg>
      ),
      title: 'Diseño Ergonómico',
      description: 'Productos diseñados pensando en el confort del paciente y la facilidad de uso para el personal médico.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-white">Sobre </span>
            <span className="text-gradient">BYOMARCA</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Somos una empresa colombiana líder en el diseño y fabricación de
            mobiliario clínico de alta gama. Nuestra misión es transformar los
            espacios de salud con soluciones innovadoras que combinan tecnología,
            confort y diseño premium.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card">
              <img
                src="/images/ChatGPT Image 17 may 2026, 05_29_50 p.m..png"
                alt="Instalaciones BYOMARCA"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-xl" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Excelencia en cada detalle
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Contamos con una gran experiencia en el sector, BYOMARCA es una empresa reconocida 
                como referente en mobiliario hospitalario premium.
                Nuestros productos están presentes en las principales clínicas y
                hospitales del país.
              </p>
              <p>
                Cada silla clínica, cada elemento de mobiliario es diseñado y
                fabricado siguiendo los más altos estándares de calidad. Utilizamos
                materiales antibacteriales, sistemas de reclinación avanzados y
                estructuras ergonómicas que garantizan el máximo confort para los
                pacientes.
              </p>
              <p>
                Nuestro compromiso va más allá del producto. Ofrecemos asesoría
                especializada, instalación profesional y servicio postventa para
                asegurar que cada proyecto supere las expectativas.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-4 text-center animate-fade-in transition-all duration-300 hover:scale-105 blue-glow">
                <div className="text-3xl font-bold text-cyan-400 mb-1">ISO</div>
                <div className="text-sm text-gray-500">Certificación 9001</div>
              </div>
              <div className="glass-card rounded-xl p-4 text-center animate-fade-in transition-all duration-300 hover:scale-105 blue-glow" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-cyan-400 mb-1">10+</div>
                <div className="text-sm text-gray-500">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;