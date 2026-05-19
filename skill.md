````text
# 🧠 INSTRUCCIONES PARA AGENTE — RECREACIÓN EXACTA PROYECTO STITCH (BYOMARCA / LEBRAU)

## 🎯 OBJETIVO GENERAL

Reconstruir de forma pixel-perfect el proyecto web generado originalmente en Google Stitch para la empresa BYOMARCA y su línea premium LEBRAU.

La plataforma está enfocada inicialmente en:
- mobiliario clínico,
- sillas hospitalarias reclinables,
- mobiliario premium para hospitales,
- salas de diálisis,
- quimioterapia,
- observación,
- recuperación,
- lactancia.

La arquitectura debe quedar preparada para futura expansión hacia:
- tapabocas,
- guantes clínicos,
- mesas hospitalarias,
- accesorios médicos,
- ecommerce,
- dashboard administrativo,
- CMS editable.

El proyecto debe desarrollarse utilizando:

- Frontend: React + Vite
- Styling: TailwindCSS
- Backend: Node.js + Express
- Arquitectura modular reusable

El resultado final debe ser visualmente idéntico al mockup original generado en Stitch.

---

## ⚠️ REGLA PRINCIPAL

Este proyecto NO debe reinterpretarse.

NO realizar:
- rediseños,
- cambios creativos,
- simplificaciones visuales,
- modificaciones de UX,
- cambios arbitrarios de spacing,
- alteraciones de colores,
- nuevas secciones no presentes.

La tarea es estrictamente:

inspeccionar → entender → replicar

---

# 🔍 USO DE MCP (OBLIGATORIO)

El agente tiene acceso a MCP.

Debe utilizar MCP para:

## 1. Inspeccionar el mockup original

Extraer:
- estructura DOM
- jerarquía HTML
- clases Tailwind
- paddings
- margins
- spacing
- tipografía
- colores
- tamaños reales
- layout responsive
- animaciones
- overlays
- efectos visuales

NO asumir medidas.

TODO debe derivarse del mockup original.

---

## 2. Validar visualmente

Comparar constantemente:
- mockup Stitch
vs
- render React final

Objetivo:
replicación exacta.

---

# 🏗️ STACK TÉCNICO

## Frontend

- React 18+
- Vite
- TailwindCSS
- React Router
- Framer Motion (solo para animaciones equivalentes a Stitch)

---

## Backend

- Node.js
- Express

Backend inicial simple.

Preparar endpoints:
- /api/contact
- /api/products
- /api/categories
- /api/dashboard

Sin lógica compleja aún.

---

# 📁 ESTRUCTURA DEL PROYECTO

```bash
byomarca-web/
│
├── client/
│   ├── public/
│   │   └── assets/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── CTAButton.jsx
│   │   │   ├── ProductViewer.jsx
│   │   │   ├── AnimatedBadge.jsx
│   │   │   └── GlowCard.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── LebrauSection.jsx
│   │   │   ├── ProductCatalog.jsx
│   │   │   ├── ProductFeatures.jsx
│   │   │   ├── BenefitsSection.jsx
│   │   │   ├── WaitingRoomSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   └── DashboardPreview.jsx
│   │   │
│   │   ├── layout/
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── server/
│   ├── index.js
│   └── package.json
│
└── README.md
````

---

# 🎨 CONFIGURACIÓN VISUAL (CRÍTICA)

## Dark Mode

```js
darkMode: "class"
```

---

# TIPOGRAFÍAS

Importar:

* Inter
* Poppins
* Montserrat

Google Fonts exactas.

---

# ESTILO VISUAL GENERAL

La web debe transmitir:

* tecnología médica premium
* innovación clínica
* estética futurista
* diseño elegante
* minimalismo moderno
* ambiente corporativo médico

Inspiración visual:

* Apple
* interfaces médicas futuristas
* clínicas premium
* tecnología hospitalaria moderna

---

# PALETA DE COLORES

Mantener exactamente:

```css
#000000
#24F5FC
#144789
#04A6F7
```

No reemplazar tonos.

No reinterpretar paleta.

---

# EFECTOS VISUALES GLOBALES

Crear en globals.css:

```css
.glass-card {
  background: rgba(10, 15, 25, 0.7);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(36,245,252,0.15);
}

.blue-glow:hover {
  box-shadow:
    0 0 20px rgba(36,245,252,0.25),
    0 0 40px rgba(4,166,247,0.15);
}

.neon-border {
  border: 1px solid rgba(36,245,252,0.2);
}

.dark-surface {
  background: linear-gradient(
    180deg,
    #0B1220 0%,
    #050505 100%
  );
}
```

---

# ANIMACIONES

Mantener exactamente:

* hover glow
* smooth transitions
* fade-in
* reveal animations
* hover scale
* glow effects
* smooth image transitions

NO agregar animaciones innecesarias.

---

# COMPONENTES A RECREAR

---

# 1. Navbar

Archivo:

```bash
components/Navbar.jsx
```

Debe incluir:

* logo BYOMARCA
* navegación sticky
* fondo blur oscuro
* glow cyan
* botón contacto
* botón catálogo

Características:

* sticky top
* borde inferior neon
* blur backdrop

---

# 2. Hero Section

Archivo:

```bash
sections/HeroSection.jsx
```

Debe incluir:

* fondo futurista oscuro
* iluminación azul/cyan
* headline premium
* CTA buttons
* imagen hero clínica
* overlays glow
* partículas suaves
* efecto tecnológico médico

No alterar:

* tamaños grandes
* overlays
* jerarquía visual

---

# 3. About Section

Archivo:

```bash
sections/AboutSection.jsx
```

Debe explicar:

* empresa clínica
* mobiliario hospitalario
* innovación
* calidad premium
* confort médico

Layout:

* split layout
* imagen + texto

---

# 4. LEBRAU Section

Archivo:

```bash
sections/LebrauSection.jsx
```

Debe presentar:

* LEBRAU como línea premium
* branding elegante
* sensación de exclusividad
* materiales premium
* calidad hospitalaria

Elementos:

* glow azul
* glassmorphism
* badges premium

---

# 5. Product Catalog

Archivo:

```bash
sections/ProductCatalog.jsx
```

Implementar:

* grid premium responsive
* cards animadas
* hover effects
* glassmorphism
* glow borders

Productos:

* Kento ruedas
* Kento fija
* Nagy ruedas
* Nagy fija

Cada card:

* imagen
* especificaciones
* capacidad
* antibacterial
* reclinación
* uso médico

---

# 6. Product Interactive Viewer

Archivo:

```bash
components/ProductViewer.jsx
```

Implementar:

* cambio dinámico de imágenes
* transición suave
* features sincronizadas
* glow active states

Cuando cambia la imagen:

* actualizar característica
* animar texto
* animar imagen

Ejemplos:

* Confort
* Sistema reclinable
* Material antibacterial
* Ruedas hospitalarias

---

# 7. Benefits Section

Archivo:

```bash
sections/BenefitsSection.jsx
```

Cards:

* Calidad premium
* Antibacterial
* Confort
* Durabilidad
* Movilidad
* Ergonomía

Layout:

* Bento grid
* glow hover
* iconografía minimalista

---

# 8. Waiting Room Section

Archivo:

```bash
sections/WaitingRoomSection.jsx
```

Inspiración:

* lobby médico premium
* estética moderna
* sillones azules
* iluminación neon cyan
* branding BYOMARCA

Mantener:

* ambiente premium
* sensación corporativa médica
* iluminación elegante

---

# 9. Dashboard Preview

Archivo:

```bash
sections/DashboardPreview.jsx
```

Mostrar mockup conceptual de:

* edición de productos
* subida de imágenes
* edición de textos
* administración futura

Solo preview visual.

No lógica backend aún.

---

# 10. Contact Section

Archivo:

```bash
sections/ContactSection.jsx
```

Debe contener:

* formulario moderno
* WhatsApp
* correo
* información empresa
* botones glow

---

# 11. Footer

Archivo:

```bash
components/Footer.jsx
```

Contenido:

* branding
* navegación
* contacto
* copyright
* redes sociales

---

# RESPONSIVE (OBLIGATORIO)

Debe coincidir con Stitch.

Validar:

## Mobile

* stacking correcto
* navbar compacta
* cards verticales

## Tablet

* grids adaptativos

## Desktop

* layout completo

No alterar breakpoints.

---

# IMÁGENES

Mantener assets originales inicialmente.

Preparar estructura para:

* Supabase Storage
* Cloudinary

---

# CONVERSIÓN HTML → JSX

Obligatorio convertir:

* class → className
* for → htmlFor

JSX limpio.
Sin warnings.

---

# CALIDAD DE CÓDIGO

Código debe ser:

* limpio
* reusable
* modular
* semantic
* enterprise-ready

Evitar:

* mega componentes
* duplicación
* inline styles innecesarios

---

# PROHIBIDO

No usar:

* Bootstrap
* Material UI
* Chakra UI

No hacer:

* rediseños
* cambios visuales
* reinterpretaciones
* nuevas secciones

---

# PREPARACIÓN FUTURA (OBLIGATORIO)

Arquitectura debe quedar preparada para:

* ecommerce
* CMS
* dashboard admin
* productos dinámicos
* autenticación
* categorías
* inventario

---

# VALIDACIÓN FINAL

Checklist obligatorio:

* [ ] visual match exacto
* [ ] responsive correcto
* [ ] animaciones equivalentes
* [ ] React funcional
* [ ] Tailwind correcto
* [ ] estructura modular
* [ ] backend base creado
* [ ] arquitectura escalable
* [ ] dark mode premium correcto

---

# COMANDOS ESPERADOS

Frontend:

```bash
npm install
npm run dev
```

Backend:

```bash
npm install
node index.js
```

---

# DEFINICIÓN FINAL DE ÉXITO

El resultado debe permitir afirmar:

“Esto es indistinguible del proyecto original generado en Stitch para BYOMARCA / LEBRAU.”

Si existe duda entre:

* reinterpretar
* replicar

Siempre elegir:

REPLICAR.

---

FIN DE INSTRUCCIONES

```
```
