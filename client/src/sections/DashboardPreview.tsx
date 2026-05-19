import AnimatedBadge from '../components/AnimatedBadge';

const DashboardPreview = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Gestión de Productos',
      description: 'Añade, edita o elimina productos del catálogo de forma intuitiva.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Subida de Imágenes',
      description: 'Carga y gestiona imágenes de productos con arrastrar y soltar.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Edición de Textos',
      description: 'Modifica descripciones, títulos y contenido de la web.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-blue-950/10 to-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(36, 245, 252, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(36, 245, 252, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <AnimatedBadge text="Próximamente" variant="blue" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            <span className="text-white">Panel </span>
            <span className="text-gradient">Administrativo</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pronto podrás gestionar todo tu sitio web desde un panel intuitivo.
            Edita productos, actualiza contenido y administra tu catálogo sin
            necesidad de conocimientos técnicos.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mb-16">
          <div className="glass-card rounded-3xl overflow-hidden p-2">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-full px-4 py-1 text-xs text-gray-400">
                    admin.byomarca.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Dashboard</h3>
                    <p className="text-sm text-gray-400">Bienvenido de nuevo, Admin</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-400">24</div>
                    <div className="text-xs text-gray-500">Productos</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-400">12</div>
                    <div className="text-xs text-gray-500">Pedidos</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-400">8</div>
                    <div className="text-xs text-gray-500">Consultas</div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-cyan-400">98%</div>
                    <div className="text-xs text-gray-500">Satisfacción</div>
                  </div>
                </div>

                {/* Placeholder Content */}
                <div className="bg-gray-800 rounded-xl p-8 text-center">
                  <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-gray-500">Panel administrativo en desarrollo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
                <div className="text-blue-400">{feature.icon}</div>
              </div>
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;