const fs = require('fs');

const categoryHierarchy = {
  "INSTRUMENTOS": [
    "INSTRUMENTOS DE DIAGNÓSTICO",
    "KITS TENSIOMETRO Y FONENDOSCO COLORS RAPPAPORT ESTUCHE",
    "KITS TENSIOMETRO Y FONENDOSCO COLORS DOBLE CAMPANA ESTUCHE",
    "KITS TENSIOMETRO Y FONENDOSCOPIO FUSION COLORS ESTUCHE",
    "FONENDOSCOPIOS OIS",
    "RPTOS FONENDOS",
    "TENSIÓMETROS ANALOGOS",
    "RPTOS TENSIOMETRO",
    "KIT DE ÓRGANOS Y SENTIDOS",
    "RPTOS KIT DE ORGANOS Y SENTIDOS",
    "TERMÓMETROS DIGITALES",
    "MARTILLOS",
    "LINTERNAS",
    "GONIOMETROS",
    "INSTRUMENTOS QUIRÚRGICOS",
    "KIT DENTAL",
    "TORNIQUETES",
    "TIJERAS",
    "RESCATE",
    "CINTAS METRICAS",
    "ACCESORIOS"
  ],
  "CONTROL Y PREVENCIÓN": [
    "Tensiómetros Digitales",
    "Control Peso y Grasa",
    "Oximetria",
    "Bandas y relojes inteligentes",
    "Doppler",
    "Glucometria"
  ],
  "MOVILIDAD": [
    "Sedestación y Posicionamiento",
    "Sillas de Ruedas Motorizadas",
    "Sillas de Ruedas Basculantes",
    "Sillas de Ruedas Estándar Pediátrica",
    "Silla de Ruedas Ligera",
    "Sillas de Ruedas Estándar",
    "CAMINADORES",
    "Repuestos para Caminadores",
    "MULETAS",
    "Repuestos para Muletas",
    "BASTONES DE 4 APOYOS",
    "BASTONES 1 APOYO",
    "Repuestos para Bastón 1 Apoyo"
  ],
  "TERAPIA RESPIRATORIA": [
    "Aerosolterapia",
    "KITS NEBULIZACIÓN",
    "OXÍGENOTERAPIA",
    "Aspirador de Secreciones",
    "Espirometros"
  ],
  "CONFORT": [
    "Superficies Especiales Para el Manejo de la Presión",
    "Camas Hospitalarias",
    "Tens",
    "Cinta kinesiológica",
    "Linea Fria",
    "Vendaje Elástico",
    "Cinta Cohesiva",
    "Botiquines"
  ],
  "ACTIVIDADES DE LA VIDA DIARIA": [
    "Higiene",
    "CÓMODOS",
    "ELEVA SANITARIOS",
    "SILLAS PARA DUCHA",
    "GRUA HIDRAULICA",
    "Linea Blanda",
    "CABESTRILLOS",
    "RODILLERAS"
  ]
};

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, ' ').trim();
}

function parse() {
  const content = fs.readFileSync('./pdf_content.txt', 'utf8');
  
  // Only process up to page 37
  const gmdContent = content.split('--- PAGE 37 ---')[0];
  
  // Find all category and subcategory headings in text and record their indices
  const headings = [];
  
  for (const [cat, subcats] of Object.entries(categoryHierarchy)) {
    const normalizedCat = normalizeText(cat);
    let index = gmdContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(normalizedCat);
    if (index !== -1) {
      headings.push({ type: 'category', value: cat, index });
    }
    
    for (const subcat of subcats) {
      const normalizedSubcat = normalizeText(subcat);
      let pos = 0;
      while (true) {
        const textToSearch = gmdContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const idx = textToSearch.indexOf(normalizedSubcat, pos);
        if (idx === -1) break;
        headings.push({ type: 'subcategory', value: subcat, index: idx, parentCategory: cat });
        pos = idx + normalizedSubcat.length;
      }
    }
  }
  
  // Sort headings by index
  headings.sort((a, b) => a.index - b.index);
  
  const codeRegex = /\b([A-Z]{2,6}(?:RN)?\d*[A-Z]*\s*-\s*[A-Z\d\.\+\/]+(?:\s*-\s*[A-Z\d\.\+\/]+)*)\b/g;
  
  const matches = [];
  let match;
  while ((match = codeRegex.exec(gmdContent)) !== null) {
    matches.push({
      code: match[1],
      index: match.index
    });
  }
  
  const products = [];
  
  for (let i = 0; i < matches.length; i++) {
    const { code, index } = matches[i];
    
    // Find category and subcategory for this index
    let activeCat = "Instrumentos";
    let activeSubcat = "";
    
    for (const h of headings) {
      if (h.index <= index) {
        if (h.type === 'category') {
          activeCat = h.value;
        } else if (h.type === 'subcategory') {
          activeCat = h.parentCategory;
          activeSubcat = h.value;
        }
      } else {
        break;
      }
    }
    
    // Find next code index or end of content
    let limitIndex = gmdContent.length;
    if (i < matches.length - 1) {
      limitIndex = matches[i+1].index;
    }
    
    let remainingText = gmdContent.slice(index + code.length, limitIndex);
    
    // Clean up page numbers and headers in remainingText
    remainingText = remainingText.replace(/--- PAGE \d+ ---/g, '');
    
    // Trim starting spaces or dashes
    remainingText = remainingText.replace(/^\s*[-–—:]\s*/, '');
    
    let description = remainingText.trim();
    // Clean up description: remove double spaces, header residues
    description = description.replace(/\s+/g, ' ');
    description = description.replace(/Número de artículo Descripción del artículo Fotografía/gi, '');
    description = description.replace(/Fotografía/gi, '');
    description = description.replace(/Descripción del artículo/gi, '');
    description = description.replace(/Número de artículo/gi, '');
    description = description.replace(/^\s*[-–—:]\s*/, '').trim();
    
    if (description.length > 3) {
      // Normalize code to remove spaces around hyphens for internal reference
      const cleanRef = code.replace(/\s+/g, '');
      const id = cleanRef.toLowerCase().replace(/[^a-z0-9]/g, '-');
      
      let name = description;
      if (description.length > 65) {
        const parts = description.split(/\. |\bde\b/);
        name = parts[0].trim();
        name = name.charAt(0).toUpperCase() + name.slice(1);
      }
      
      if (products.some(p => p.ref === cleanRef)) {
        continue;
      }
      
      let image = '/images/PR5.jpg';
      if (cleanRef.startsWith('GMD50-RP')) image = '/images/PR1.jpg';
      else if (cleanRef.startsWith('GMD50-DC')) image = '/images/PR2.jpg';
      else if (cleanRef.startsWith('GMD30-DCK')) image = '/images/PR4.jpg';
      else if (cleanRef.startsWith('GMD30-DCJ')) image = '/images/PR5.jpg';
      else if (cleanRef.startsWith('GMD30-RP')) image = '/images/PR6.jpg';
      else if (cleanRef.startsWith('GMD20-T20')) image = '/images/PR8.jpg';
      
      products.push({
        id,
        ref: cleanRef,
        name: name,
        description: description,
        category: activeCat,
        subcategory: activeSubcat,
        image
      });
    }
  }
  
  const catMapping = {
    "INSTRUMENTOS": "Instrumentos",
    "CONTROL Y PREVENCIÓN": "Control y Prevención",
    "MOVILIDAD": "Movilidad",
    "TERAPIA RESPIRATORIA": "Terapia Respiratoria",
    "CONFORT": "Confort",
    "ACTIVIDADES DE LA VIDA DIARIA": "Actividades de la Vida Diaria"
  };
  
  products.forEach(p => {
    if (catMapping[p.category]) {
      p.category = catMapping[p.category];
    }
  });
  
  console.log(`Parsed ${products.length} products`);
  
  const tsContent = `export interface GmdProduct {
  id: string;
  ref: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  specs?: { label: string; value: string }[];
}

export const gmdProducts: GmdProduct[] = ${JSON.stringify(products, null, 2)};

export const getGmdCategories = () => {
  const cats = new Set<string>();
  gmdProducts.forEach(p => cats.add(p.category));
  return Array.from(cats);
};

export const getGmdSubcategories = (category: string) => {
  const subcats = new Set<string>();
  gmdProducts
    .filter(p => p.category === category && p.subcategory)
    .forEach(p => subcats.add(p.subcategory!));
  return Array.from(subcats);
};
`;

  fs.writeFileSync('./client/src/data/gmdData.ts', tsContent);
  console.log('Saved to gmdData.ts');
}

parse();
