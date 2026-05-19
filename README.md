# BYOMARCA - Mobiliario Clínico Premium

Sitio web corporativo para BYOMARCA y su línea premium LEBRAU, especializado en mobiliario clínico y sillas hospitalarias de alta gama.

## 🚀 Tecnologías

- **Frontend**: React 18 + Vite + TypeScript + TailwindCSS
- **Backend**: Node.js + Express
- **Estilo**: Dark mode premium con efectos glassmorphism y neón cyan

## 📁 Estructura del Proyecto

```
byomarca-web/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── sections/       # Secciones de la landing page
│   │   ├── layout/         # Layout principal
│   │   ├── styles/         # Estilos globales
│   │   ├── App.tsx         # Componente principal
│   │   └── main.tsx        # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Backend API
│   ├── index.js
│   └── package.json
└── README.md
```

## 🛠️ Instalación

### Frontend

```bash
cd client
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Backend

```bash
cd server
npm install
npm start
```

El backend estará disponible en `http://localhost:3001`

## 📄 Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/products` | Lista de productos |
| GET | `/api/products/:id` | Detalle de producto |
| GET | `/api/categories` | Lista de categorías |
| POST | `/api/contact` | Envío de formulario de contacto |
| GET | `/api/dashboard` | Estadísticas del dashboard |

## 🎨 Paleta de Colores

- **Negro**: `#000000`
- **Cyan**: `#24F5FC`
- **Azul medio**: `#144789`
- **Azul claro**: `#04A6F7`

## 🏗️ Componentes

### Componentes Principales
- `Navbar` - Navegación sticky con efecto blur
- `Footer` - Pie de página con enlaces y redes sociales
- `ProductCard` - Tarjeta de producto con glassmorphism
- `FeatureCard` - Tarjeta de características
- `CTAButton` - Botones de llamada a la acción
- `ProductViewer` - Visor interactivo de productos
- `AnimatedBadge` - Badges animados
- `GlowCard` - Tarjetas con efecto glow

### Secciones
- `HeroSection` - Sección principal con gradiente radial
- `AboutSection` - Sobre la empresa
- `LebrauSection` - Línea premium LEBRAU
- `ProductCatalog` - Catálogo de productos
- `BenefitsSection` - Beneficios BYOMARCA
- `WaitingRoomSection` - Salas de espera premium
- `ContactSection` - Formulario de contacto
- `DashboardPreview` - Preview del panel administrativo

## 📱 Responsive

El sitio es completamente responsive con breakpoints para:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔮 Características Futuras

- Ecommerce integrado
- CMS editable
- Dashboard administrativo completo
- Autenticación de usuarios
- Gestión de inventario
- Integración con pasarelas de pago

## 📞 Contacto

- **Email**: info@byomarca.com
- **Teléfono**: +57 300 123 4567
- **Dirección**: Calle 123 #45-67, Bogotá, Colombia

---

© 2024 BYOMARCA. Todos los derechos reservados.