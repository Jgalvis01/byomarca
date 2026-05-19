import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const products = [
  {
    id: 1,
    name: 'Kento con Ruedas',
    description: 'Silla clínica reclinable con sistema de movilidad integrado. Ideal para salas de diálisis y quimioterapia.',
    features: ['Reclinación 180°', 'Ruedas hospitalarias', 'Respaldo ajustable', 'Bandeja incluida'],
    category: 'Sillas Clínicas',
    price: 1500,
  },
  {
    id: 2,
    name: 'Kento Fija',
    description: 'Silla clínica estática con base reforzada. Perfecta para observación y recuperación.',
    features: ['Base reforzada', 'Reclinación 160°', 'Material antibacterial', 'Fácil limpieza'],
    category: 'Sillas Clínicas',
    price: 1200,
  },
  {
    id: 3,
    name: 'Nagy con Ruedas',
    description: 'Silla de lactancia móvil con diseño ergonómico. Confort para madre y bebé.',
    features: ['Ergonómica', 'Ruedas silenciosas', 'Reposabrazos acolchados', 'Fácil maniobra'],
    category: 'Sillas de Lactancia',
    price: 800,
  },
  {
    id: 4,
    name: 'Nagy Fija',
    description: 'Silla de lactancia estática con diseño premium. Espacios de lactancia confortables.',
    features: ['Diseño premium', 'Tejido hipoalergénico', 'Soporte lumbar', 'Estabilidad total'],
    category: 'Sillas de Lactancia',
    price: 650,
  },
];

const categories = [
  { id: 1, name: 'Sillas Clínicas', slug: 'sillas-clinicas' },
  { id: 2, name: 'Sillas de Lactancia', slug: 'sillas-de-lactancia' },
  { id: 3, name: 'Mobiliario Premium', slug: 'mobiliario-premium' },
];

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'BYOMARCA API - Server running' });
});

// Products
app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Categories
app.get('/api/categories', (req, res) => {
  res.json({ categories });
});

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }
  
  // Log contact submission (in production, send email or save to database)
  console.log('Contact form submission:', { name, email, phone, company, message });
  
  res.json({ 
    message: 'Message sent successfully', 
    data: { name, email, phone, company, message }
  });
});

// Dashboard preview endpoint
app.get('/api/dashboard', (req, res) => {
  res.json({
    stats: {
      products: 24,
      orders: 12,
      inquiries: 8,
      satisfaction: 98,
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`BYOMARCA Server running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/`);
});