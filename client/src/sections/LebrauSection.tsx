import CTAButton from '../components/CTAButton';
import AnimatedBadge from '../components/AnimatedBadge';
import GlowCard from '../components/GlowCard';

const LebrauSection = () => {
  const premiumFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Materiales Premium',
      description: 'Cuero médico de alta densidad y estructuras de aluminio aeronáutico.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: 'Confort Superior',
      description: 'Sistemas de reclinación suave y reposabrazos ergonómicos ajustables.',
    },
  ];

  return (
    <section id="lebrau" className="py-24 bg-gradient-to-b from-black via-blue-950/20 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <AnimatedBadge text="Línea Premium" variant="blue" />
          </div>
          <div className="flex justify-center mb-6">
            <img 
              src="/images/7dca6e90-64d8-4471-9fad-37d61f0047a8.png" 
              alt="LEBRAU" 
              className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 rounded-full mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Nuestra línea más exclusiva. Diseñada para clínicas y hospitales que
            buscan lo mejor en mobiliario clínico. Elegancia, tecnología y confort
            en perfecta armonía.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Showcase */}
          <div className="relative">
            <GlowCard glowColor="blue" intensity="high" className="p-2">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src="/images/ChatGPT Image 16 may 2026, 07_03_49 p.m..png"
                  alt="Silla LEBRAU Premium"
                  className="w-full h-full object-cover"
                />
              </div>
            </GlowCard>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              La excelencia hecha mobiliario
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              LEBRAU representa lo último en tecnología de mobiliario clínico.
              Cada pieza es el resultado de años de investigación y desarrollo,
              combinando los mejores materiales con un diseño sofisticado que
              transforma cualquier espacio médico.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-400">{feature.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <CTAButton
              text="Ver Colección LEBRAU"
              href="#products"
              variant="primary"
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-sm text-gray-500">Materiales Premium</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Máximo</div>
            <div className="text-sm text-gray-500">Confort</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LebrauSection;