import CTAButton from '../components/CTAButton';
import AnimatedBadge from '../components/AnimatedBadge';

const WaitingRoomSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 to-cyan-950/30" />
        {/* Neon Line Effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <AnimatedBadge text="Espacios Corporativos" variant="cyan" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-white">Salas de </span>
            <span className="text-gradient">Espera Premium</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Diseñamos salas de espera que transmiten profesionalismo y confort.
            Mobiliario que refleja la calidad de tu institución desde el primer
            contacto.
          </p>
        </div>

        {/* Main Image Showcase */}
        <div className="relative mb-12">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden glass-card">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=500&fit=crop"
              alt="Sala de espera premium BYOMARCA"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          </div>

          {/* Floating Info Card */}
          <div className="absolute bottom-8 left-8 md:left-12 glass-card rounded-2xl p-6 max-w-md">
            <h3 className="text-xl font-bold text-white mb-3">
              Primera impresión que perdura
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nuestras salas de espera están diseñadas para crear un ambiente
              acogedor y profesional. Combina comodidad para los pacientes con
              una estética moderna que refuerza la confianza en tu institución.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Diseño Modular</h4>
            <p className="text-gray-400 text-sm">
              Configuraciones flexibles que se adaptan a cualquier espacio y capacidad.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Materiales Premium</h4>
            <p className="text-gray-400 text-sm">
              Acabados de alta calidad que resisten el uso intensivo diario.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Personalización</h4>
            <p className="text-gray-400 text-sm">
              Colores, logos y acabados personalizados para tu marca.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            text="Cotizar Sala de Espera"
            href="#contact"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default WaitingRoomSection;