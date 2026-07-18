export interface GmdProduct {
  id: string;
  ref: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  gallery?: string[];
  specs?: { label: string; value: string }[];
}

export const gmdProducts: GmdProduct[] = [
  {
    "id": "gmd50-rp-kit",
    "ref": "GMD50-RP-KIT",
    "name": "DE TENSIOMETRO Y FONENDOSCOPIO RAPPAPORT (Variedad",
    "description": "DE TENSIOMETRO Y FONENDOSCOPIO RAPPAPORT (Variedad de Colores) KITS TENSIOMETRO Y FONENDOSCO COLORS DOBLE CAMPANA ESTUCHE",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR1.jpg"
  },
  {
    "id": "gmd50-dc-kit",
    "ref": "GMD50-DC-KIT",
    "name": "DE TENSIOMETRO Y FONENDOSCOPIO DOBLE CAMPANA (Variedad",
    "description": "DE TENSIOMETRO Y FONENDOSCOPIO DOBLE CAMPANA (Variedad de Colores) KITS TENSIOMETRO Y FONENDOSCOPIO FUSION COLORS ESTUCHE",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR2.jpg"
  },
  {
    "id": "gmd50-rp-st15fe1",
    "ref": "GMD50-RP-ST15FE1",
    "name": "KIT DE TENSIOMETRO Y FONENDOSCOPIO FUSION COLORS (Variedad",
    "description": "KIT DE TENSIOMETRO Y FONENDOSCOPIO FUSION COLORS (Variedad de colores) FONENDOSCOPIOS OIS",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD50-RP-ST15FE1.png",
    "gallery": [
      "/images/GMD50-RP-ST15FE1.png"
    ]
  },
  {
    "id": "gmd30-dck-fonendoscopio",
    "ref": "GMD30-DCK-FONENDOSCOPIO",
    "name": "OIS 500 En Color negro y azul profundo",
    "description": "OIS 500 En Color negro y azul profundo",
    "category": "Instrumentos",
    "subcategory": "FONENDOSCOPIOS OIS",
    "image": "/images/PR4.jpg"
  },
  {
    "id": "gmd30-dcj-fonendoscopio",
    "ref": "GMD30-DCJ-FONENDOSCOPIO",
    "name": "OIS 300 En colores: Negro, cherry, azul brillante, rosado brillante, raspberry",
    "description": "OIS 300 En colores: Negro, cherry, azul brillante, rosado brillante, raspberry",
    "category": "Instrumentos",
    "subcategory": "FONENDOSCOPIOS OIS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd30-rp1-fonendoscopio",
    "ref": "GMD30-RP1-FONENDOSCOPIO",
    "name": "OIS 100S En color Negro",
    "description": "OIS 100S En color Negro",
    "category": "Instrumentos",
    "subcategory": "FONENDOSCOPIOS OIS",
    "image": "/images/PR6.jpg"
  },
  {
    "id": "gmd30-dcj-103a",
    "ref": "GMD30-DCJ-103A",
    "name": "Fonendoscopio OIS VET Unico color: Negro RPTOS FONENDOS",
    "description": "Fonendoscopio OIS VET Unico color: Negro RPTOS FONENDOS",
    "category": "Instrumentos",
    "subcategory": "FONENDOSCOPIOS OIS",
    "image": "/images/GMD30-DCJ-103A.png",
    "gallery": [
      "/images/GMD30-DCJ-103A.png"
    ]
  },
  {
    "id": "gmd30-dck-rpt",
    "ref": "GMD30-DCK-RPT",
    "name": "Set de accesorios para OIS 500",
    "description": "Set de accesorios para OIS 500",
    "category": "Instrumentos",
    "subcategory": "RPTOS FONENDOS",
    "image": "/images/GMD30-DCK-RPT.png",
    "gallery": [
      "/images/GMD30-DCK-RPT.png"
    ]
  },
  {
    "id": "gmd30-dcj-rpt",
    "ref": "GMD30-DCJ-RPT",
    "name": "Set de accesorios para OIS 300",
    "description": "Set de accesorios para OIS 300",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD30-DCJ-RPT.png",
    "gallery": [
      "/images/GMD30-DCJ-RPT.png"
    ]
  },
  {
    "id": "gmd30-dcj-103a-rp",
    "ref": "GMD30-DCJ-103A-RP",
    "name": "Accesorios del Fonendoscopio OIS VET",
    "description": "Accesorios del Fonendoscopio OIS VET",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD30-DCJ-103A-RP.png",
    "gallery": [
      "/images/GMD30-DCJ-103A-RP.png"
    ]
  },
  {
    "id": "gmd50-rp-ark",
    "ref": "GMD50-RP-ARK",
    "name": "Accesorios para Kits Rappaport TENSIÓMETROS ANALOGOS",
    "description": "Accesorios para Kits Rappaport TENSIÓMETROS ANALOGOS",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD50-RP-ARK.png",
    "gallery": [
      "/images/GMD50-RP-ARK.png"
    ]
  },
  {
    "id": "gmd20-t20",
    "ref": "GMD20-T20",
    "name": "TENSIÓMETRO CLASSIC I GMD",
    "description": "TENSIÓMETRO CLASSIC I GMD",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD20-T20.png",
    "gallery": [
      "/images/GMD20-T20.png"
    ]
  },
  {
    "id": "gmd200-st20",
    "ref": "GMD200-ST20",
    "name": "Tensiometro artery 300 RPTOS TENSIOMETRO",
    "description": "Tensiometro artery 300 RPTOS TENSIOMETRO",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD200-ST20.png",
    "gallery": [
      "/images/GMD200-ST20.png"
    ]
  },
  {
    "id": "gmd20-am",
    "ref": "GMD20-AM",
    "name": "MANOMETRO PARA TENSIOMETRO",
    "description": "MANOMETRO PARA TENSIOMETRO",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD20-AM.png",
    "gallery": [
      "/images/GMD20-AM.png"
    ]
  },
  {
    "id": "gmd200-am",
    "ref": "GMD200-AM",
    "name": "Manómetro para Artery 300",
    "description": "Manómetro para Artery 300",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD200-AM.png",
    "gallery": [
      "/images/GMD200-AM.png"
    ]
  },
  {
    "id": "gmd20r-st20",
    "ref": "GMD20R-ST20",
    "name": "PERA PARA TENSIOMETRO CON VALVULA METALICA",
    "description": "PERA PARA TENSIOMETRO CON VALVULA METALICA",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD20R-ST20.png",
    "gallery": [
      "/images/GMD20R-ST20.png"
    ]
  },
  {
    "id": "gmd200r-st20",
    "ref": "GMD200R-ST20",
    "name": "Pera para Tensiómetro Artery 300",
    "description": "Pera para Tensiómetro Artery 300",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd20-t20rp",
    "ref": "GMD20-T20RP",
    "name": "CAMARA DE INFLACION 2 VIAS EN LATEX PARA TENSIOMETRO",
    "description": "CAMARA DE INFLACION 2 VIAS EN LATEX PARA TENSIOMETRO",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD20-T20RP.png",
    "gallery": [
      "/images/GMD20-T20RP.png"
    ]
  },
  {
    "id": "gmd200-t20rp",
    "ref": "GMD200-T20RP",
    "name": "Cámara de inflación para tensiometro premium",
    "description": "Cámara de inflación para tensiometro premium",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd20-t20rp-pvc",
    "ref": "GMD20-T20RP-PVC",
    "name": "Cámara de Inflación 2 Vías en PVC para Tensiómetro Talla M",
    "description": "Cámara de Inflación 2 Vías en PVC para Tensiómetro Talla M",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD20-T20RP-PVC.png",
    "gallery": [
      "/images/GMD20-T20RP-PVC.png"
    ]
  },
  {
    "id": "gmd50-br-t20",
    "ref": "GMD50-BR-T20",
    "name": "Brazalete kit colors talla m color negro",
    "description": "Brazalete kit colors talla m color negro",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD50-BR-T20.png",
    "gallery": [
      "/images/GMD50-BR-T20.png"
    ]
  },
  {
    "id": "gmd200-br",
    "ref": "GMD200-BR",
    "name": "Brazalete para Artery 300 KIT DE ÓRGANOS Y SENTIDOS",
    "description": "Brazalete para Artery 300 KIT DE ÓRGANOS Y SENTIDOS",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/GMD200-BR.png",
    "gallery": [
      "/images/GMD200-BR.png"
    ]
  },
  {
    "id": "gmdot-100",
    "ref": "GMDOT-100",
    "name": "OTOSCOPIO GMD",
    "description": "OTOSCOPIO GMD",
    "category": "Instrumentos",
    "subcategory": "KIT DE ÓRGANOS Y SENTIDOS",
    "image": "/images/GMDOT-100.png",
    "gallery": [
      "/images/GMDOT-100.png"
    ]
  },
  {
    "id": "gmdkos-1tf-100g",
    "ref": "GMDKOS-1TF-100G",
    "name": "Kit",
    "description": "Kit de órganos y sentidos con fibra óptica 1 base 2 cabezales Gris Oscuro",
    "category": "Instrumentos",
    "subcategory": "KIT DE ÓRGANOS Y SENTIDOS",
    "image": "/images/GMDKOS-1TF-100G.png",
    "gallery": [
      "/images/GMDKOS-1TF-100G.png"
    ]
  },
  {
    "id": "gmdkos-2tf-100",
    "ref": "GMDKOS-2TF-100",
    "name": "Kit",
    "description": "Kit de Órganos y Sentidos Fibra Óptica GMD con Doble Mango En 4 colores: Negro, Azul, Purpura y Blanco RPTOS KIT DE ORGANOS Y SENTIDOS",
    "category": "Instrumentos",
    "subcategory": "KIT DE ÓRGANOS Y SENTIDOS",
    "image": "/images/GMDKOS-2TF-100.png",
    "gallery": [
      "/images/GMDKOS-2TF-100.png"
    ]
  },
  {
    "id": "gmdkos-tips",
    "ref": "GMDKOS-TIPS",
    "name": "SET POR 8 UNIDADES DE ESPECULOS EN 4 TAMAÑOS PARA OTOSCOPIO GMD TERMÓMETROS DIGITALES",
    "description": "SET POR 8 UNIDADES DE ESPECULOS EN 4 TAMAÑOS PARA OTOSCOPIO GMD TERMÓMETROS DIGITALES",
    "category": "Instrumentos",
    "subcategory": "KIT DE ÓRGANOS Y SENTIDOS",
    "image": "/images/GMDKOS-TIPS.png",
    "gallery": [
      "/images/GMDKOS-TIPS.png"
    ]
  },
  {
    "id": "gmd-fd-33",
    "ref": "GMD-FD-33",
    "name": "FLEX II TERMÓMETRO DIGITAL",
    "description": "FLEX II TERMÓMETRO DIGITAL",
    "category": "Instrumentos",
    "subcategory": "TERMÓMETROS DIGITALES",
    "image": "/images/GMD-FD-33.png",
    "gallery": [
      "/images/GMD-FD-33.png"
    ]
  },
  {
    "id": "gmd-fd-4625-o",
    "ref": "GMD-FD-4625-O",
    "name": "TERMÓMETRO DIGITAL PEDIÁTRICO, OSO",
    "description": "TERMÓMETRO DIGITAL PEDIÁTRICO, OSO",
    "category": "Instrumentos",
    "subcategory": "TERMÓMETROS DIGITALES",
    "image": "/images/GMD-FD-4625-O.png",
    "gallery": [
      "/images/GMD-FD-4625-O.png"
    ]
  },
  {
    "id": "gmd-rd-101",
    "ref": "GMD-RD-101",
    "name": "TERMÓMETRO DIGITAL RIGIDO MARTILLOS",
    "description": "TERMÓMETRO DIGITAL RIGIDO MARTILLOS",
    "category": "Instrumentos",
    "subcategory": "TERMÓMETROS DIGITALES",
    "image": "/images/GMD-RD-101.png",
    "gallery": [
      "/images/GMD-RD-101.png"
    ]
  },
  {
    "id": "gmd401-bm-martillo",
    "ref": "GMD401-BM-MARTILLO",
    "name": "DE REFLEJO BUCK GMD Variedad de colores LINTERNAS",
    "description": "DE REFLEJO BUCK GMD Variedad de colores LINTERNAS",
    "category": "Instrumentos",
    "subcategory": "MARTILLOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd401-pl48",
    "ref": "GMD401-PL48",
    "name": "LINTERNA DE DIAGNÓSTICO BLANCA",
    "description": "LINTERNA DE DIAGNÓSTICO BLANCA",
    "category": "Instrumentos",
    "subcategory": "LINTERNAS",
    "image": "/images/GMD401-PL48.png",
    "gallery": [
      "/images/GMD401-PL48.png"
    ]
  },
  {
    "id": "gmd-sw-1",
    "ref": "GMD-SW-1",
    "name": "METRIX I - Goniometro gmd para espalda cervical muñeca",
    "description": "METRIX I - Goniometro gmd para espalda cervical muñeca",
    "category": "Instrumentos",
    "subcategory": "GONIOMETROS",
    "image": "/images/GMD-SW-1.png",
    "gallery": [
      "/images/GMD-SW-1.png"
    ]
  },
  {
    "id": "gmd-sw-2",
    "ref": "GMD-SW-2",
    "name": "METRIX II - Goniometro gmd universal",
    "description": "METRIX II - Goniometro gmd universal",
    "category": "Instrumentos",
    "subcategory": "GONIOMETROS",
    "image": "/images/GMD-SW-2.png",
    "gallery": [
      "/images/GMD-SW-2.png"
    ]
  },
  {
    "id": "gmd-sw-4",
    "ref": "GMD-SW-4",
    "name": "METRIX IV - Goniometro gmd para dedos",
    "description": "METRIX IV - Goniometro gmd para dedos",
    "category": "Instrumentos",
    "subcategory": "GONIOMETROS",
    "image": "/images/GMD-SW-4.png",
    "gallery": [
      "/images/GMD-SW-4.png"
    ]
  },
  {
    "id": "gmd-sw-5",
    "ref": "GMD-SW-5",
    "name": "METRIX V - Goniometro gmd para codos y tobillos INSTRUMENTOS QUIRÚRGICOS",
    "description": "METRIX V - Goniometro gmd para codos y tobillos INSTRUMENTOS QUIRÚRGICOS",
    "category": "Instrumentos",
    "subcategory": "GONIOMETROS",
    "image": "/images/GMD-SW-5.png",
    "gallery": [
      "/images/GMD-SW-5.png"
    ]
  },
  {
    "id": "gmd-kd-9pcs",
    "ref": "GMD-KD-9PCS",
    "name": "SISTEMA DE DISECCIÓN GMD 9 PIEZAS",
    "description": "SISTEMA DE DISECCIÓN GMD 9 PIEZAS",
    "category": "Instrumentos",
    "subcategory": "INSTRUMENTOS QUIRÚRGICOS",
    "image": "/images/GMD-KD-9PCS.png",
    "gallery": [
      "/images/GMD-KD-9PCS.png"
    ]
  },
  {
    "id": "gmd-kd-13pcs",
    "ref": "GMD-KD-13PCS",
    "name": "Sistema De Disección De 13 Piezas GMD",
    "description": "Sistema De Disección De 13 Piezas GMD",
    "category": "Instrumentos",
    "subcategory": "INSTRUMENTOS QUIRÚRGICOS",
    "image": "/images/GMD-KD-13PCS.png",
    "gallery": [
      "/images/GMD-KD-13PCS.png"
    ]
  },
  {
    "id": "gmd-ks-01",
    "ref": "GMD-KS-01",
    "name": "Pad de Suturas KIT DENTAL",
    "description": "Pad de Suturas KIT DENTAL",
    "category": "Instrumentos",
    "subcategory": "INSTRUMENTOS QUIRÚRGICOS",
    "image": "/images/GMD-KS-01.png",
    "gallery": [
      "/images/GMD-KS-01.png"
    ]
  },
  {
    "id": "gmd-kd-259",
    "ref": "GMD-KD-259",
    "name": "Kit Dental 5 piezas TORNIQUETES",
    "description": "Kit Dental 5 piezas TORNIQUETES",
    "category": "Instrumentos",
    "subcategory": "KIT DENTAL",
    "image": "/images/GMD-KD-259.png",
    "gallery": [
      "/images/GMD-KD-259.png"
    ]
  },
  {
    "id": "gmd-6351",
    "ref": "GMD-6351",
    "name": "TORNIQUETE GMD COLORES",
    "description": "TORNIQUETE GMD COLORES",
    "category": "Instrumentos",
    "subcategory": "TORNIQUETES",
    "image": "/images/GMD-6351.png",
    "gallery": [
      "/images/GMD-6351.png"
    ]
  },
  {
    "id": "gmd-6352",
    "ref": "GMD-6352",
    "name": "TORNIQUETE GMD CON DISEÑO TIJERAS",
    "description": "TORNIQUETE GMD CON DISEÑO TIJERAS",
    "category": "Instrumentos",
    "subcategory": "TORNIQUETES",
    "image": "/images/GMD-6352.png",
    "gallery": [
      "/images/GMD-6352.png"
    ]
  },
  {
    "id": "gmd-180-20",
    "ref": "GMD-180-20",
    "name": "Tijera Basic GMD De 5 1/2'' Color Negro",
    "description": "Tijera Basic GMD De 5 1/2'' Color Negro",
    "category": "Instrumentos",
    "subcategory": "TIJERAS",
    "image": "/images/GMD-180-20.png",
    "gallery": [
      "/images/GMD-180-20.png"
    ]
  },
  {
    "id": "gmd-100-20",
    "ref": "GMD-100-20",
    "name": "Tijera Basic GMD De 7 1/2'' Color Negro",
    "description": "Tijera Basic GMD De 7 1/2'' Color Negro",
    "category": "Instrumentos",
    "subcategory": "TIJERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-180-20pp",
    "ref": "GMD-180-20PP",
    "name": "Tijera GMD Arcoiris DE 5 1/2\" RESCATE",
    "description": "Tijera GMD Arcoiris DE 5 1/2\" RESCATE",
    "category": "Instrumentos",
    "subcategory": "TIJERAS",
    "image": "/images/GMD-180-20PP.png",
    "gallery": [
      "/images/GMD-180-20PP.png"
    ]
  },
  {
    "id": "gmd-102b-a",
    "ref": "GMD-102B-A",
    "name": "BOLSA DE RCP COLOR AZUL",
    "description": "BOLSA DE RCP COLOR AZUL",
    "category": "Instrumentos",
    "subcategory": "RESCATE",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-102b-r",
    "ref": "GMD-102B-R",
    "name": "BOLSA DE RCP COLOR NEGRO CINTAS METRICAS",
    "description": "BOLSA DE RCP COLOR NEGRO CINTAS METRICAS",
    "category": "Instrumentos",
    "subcategory": "RESCATE",
    "image": "/images/GMD-102B-R.png",
    "gallery": [
      "/images/GMD-102B-R.png"
    ]
  },
  {
    "id": "gmd-cm-01",
    "ref": "GMD-CM-01",
    "name": "CINTA MÉTRICA GMD CLÁSICA",
    "description": "CINTA MÉTRICA GMD CLÁSICA",
    "category": "Instrumentos",
    "subcategory": "CINTAS METRICAS",
    "image": "/images/GMD-CM-01.png",
    "gallery": [
      "/images/GMD-CM-01.png"
    ]
  },
  {
    "id": "gmd-cm-05",
    "ref": "GMD-CM-05",
    "name": "Cinta métrica GMD en forma de oso ACCESORIOS",
    "description": "Cinta métrica GMD en forma de oso ACCESORIOS",
    "category": "Instrumentos",
    "subcategory": "CINTAS METRICAS",
    "image": "/images/GMD-CM-05.png",
    "gallery": [
      "/images/GMD-CM-05.png"
    ]
  },
  {
    "id": "gmd-lps-h",
    "ref": "GMD-LPS-H",
    "name": "Set X 5 de Lapiceros Huesos GMD",
    "description": "Set X 5 de Lapiceros Huesos GMD",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-LPS-H.png",
    "gallery": [
      "/images/GMD-LPS-H.png"
    ]
  },
  {
    "id": "gmd-rs-047",
    "ref": "GMD-RS-047",
    "name": "Resaltadores mini huesitos GMD",
    "description": "Resaltadores mini huesitos GMD",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-RS-047.png",
    "gallery": [
      "/images/GMD-RS-047.png"
    ]
  },
  {
    "id": "gmd-pc-00",
    "ref": "GMD-PC-00",
    "name": "PORTA CARNETS CON LANYARD",
    "description": "PORTA CARNETS CON LANYARD",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-PC-00.png",
    "gallery": [
      "/images/GMD-PC-00.png"
    ]
  },
  {
    "id": "gmd-pc-04",
    "ref": "GMD-PC-04",
    "name": "PORTA CARNETS VERTICAL",
    "description": "PORTA CARNETS VERTICAL",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-PC-04.png",
    "gallery": [
      "/images/GMD-PC-04.png"
    ]
  },
  {
    "id": "gmd-pc-107xx",
    "ref": "GMD-PC-107XX",
    "name": "PORTA CARNETS EN YOYO Redondos",
    "description": "PORTA CARNETS EN YOYO Redondos",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-PC-107XX.png",
    "gallery": [
      "/images/GMD-PC-107XX.png"
    ]
  },
  {
    "id": "gmd-pc-107x",
    "ref": "GMD-PC-107X",
    "name": "PORTA CARNETS EN YOYO Figuras (Consulta los diseños disponibles)",
    "description": "PORTA CARNETS EN YOYO Figuras (Consulta los diseños disponibles)",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-PC-107X.png",
    "gallery": [
      "/images/GMD-PC-107X.png"
    ]
  },
  {
    "id": "gmd-ram-0x",
    "ref": "GMD-RAM-0X",
    "name": "Rompe Ampollas Diseño Jeringa",
    "description": "Rompe Ampollas Diseño Jeringa",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-RAM-0X.png",
    "gallery": [
      "/images/GMD-RAM-0X.png"
    ]
  },
  {
    "id": "gmd-ram-c",
    "ref": "GMD-RAM-C",
    "name": "Rompe Ampollas Motivo Ampolleta",
    "description": "Rompe Ampollas Motivo Ampolleta",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-RAM-C.png",
    "gallery": [
      "/images/GMD-RAM-C.png"
    ]
  },
  {
    "id": "gmd-ramp-ej",
    "ref": "GMD-RAMP-EJ",
    "name": "Rompe Ampollas Motivo Enfermera y Jeringa",
    "description": "Rompe Ampollas Motivo Enfermera y Jeringa",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMD-RAMP-EJ.png",
    "gallery": [
      "/images/GMD-RAMP-EJ.png"
    ]
  },
  {
    "id": "gmd-rj-reloj",
    "ref": "GMD-RJ-RELOJ",
    "name": "GMD CONTROL Y PREVENCIÓN  Tensiómetros Digitales",
    "description": "GMD CONTROL Y PREVENCIÓN  Tensiómetros Digitales",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-bpm-1491-c",
    "ref": "GMD-BPM-1491-C",
    "name": "KARDYO 100 TENSIÓMETRO DIGITAL DE BRAZO UN USUARIO GMD",
    "description": "KARDYO 100 TENSIÓMETRO DIGITAL DE BRAZO UN USUARIO GMD",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-bpm-1872",
    "ref": "GMD-BPM-1872",
    "name": "KARDYO 500 TENSIOMETRO DIGITAL CON ALTAVOZ",
    "description": "KARDYO 500 TENSIOMETRO DIGITAL CON ALTAVOZ",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-bpm-30f",
    "ref": "GMD-BPM-30F",
    "name": "Monitor de Presión Arterial con Altavoz Latidos",
    "description": "Monitor de Presión Arterial con Altavoz Latidos",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-bpm-30e",
    "ref": "GMD-BPM-30E",
    "name": "Monitor de Presión Arterial LATIDOS I",
    "description": "Monitor de Presión Arterial LATIDOS I",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-bpm-30c",
    "ref": "GMD-BPM-30C",
    "name": "Tensiometro latidos con Bluetooth Tensiómetro",
    "description": "Tensiometro latidos con Bluetooth Tensiómetro",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "cdk-bpm-65r",
    "ref": "CDK-BPM-65R",
    "name": "(No Digital Carditek Vital incluye Cable) Tensiómetro",
    "description": "(No Digital Carditek Vital incluye Cable) Tensiómetro",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "cdk-bpm-65b",
    "ref": "CDK-BPM-65B+",
    "name": "Tensiómetro Digital Carditek Power Bateria Recargable + Pantalla retroiluminada",
    "description": "Tensiómetro Digital Carditek Power Bateria Recargable + Pantalla retroiluminada",
    "category": "Confort",
    "subcategory": "Tensiómetros",
    "image": "/images/CDK-BPM-65B+.png",
    "gallery": [
      "/images/CDK-BPM-65B+.png"
    ]
  },
  {
    "id": "cdk-bpm-66ep",
    "ref": "CDK-BPM-66EP",
    "name": "Bateria Digital Carditek Smart recargable + Altavoz + Bluetooth Tensiómetro",
    "description": "Bateria Digital Carditek Smart recargable + Altavoz + Bluetooth Tensiómetro",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/CDK-BPM-66EP.png",
    "gallery": [
      "/images/CDK-BPM-66EP.png"
    ]
  },
  {
    "id": "cdk-bpm-75b",
    "ref": "CDK-BPM-75B",
    "name": "(De Digital Carditek Pulse Muñeca)",
    "description": "(De Digital Carditek Pulse Muñeca)",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/CDK-BPM-75B.png",
    "gallery": [
      "/images/CDK-BPM-75B.png"
    ]
  },
  {
    "id": "gmd-bpm-14br",
    "ref": "GMD-BPM-14BR",
    "name": "Brazalete para Monitor de Presión Arterial Control Peso y Grasa",
    "description": "Brazalete para Monitor de Presión Arterial Control Peso y Grasa",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "cdk-bd-2317w",
    "ref": "CDK-BD-2317W",
    "name": "Balanza Digital de Peso Corporal Carditek",
    "description": "Balanza Digital de Peso Corporal Carditek",
    "category": "Control y Prevención",
    "subcategory": "Control Peso y Grasa",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "ltd-bd-260",
    "ref": "LTD-BD-260",
    "name": "Balanza con Monitor de Grasa Latidos Oximetria PULSAX",
    "description": "Balanza con Monitor de Grasa Latidos Oximetria PULSAX",
    "category": "Control y Prevención",
    "subcategory": "Control Peso y Grasa",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmdpx-500d",
    "ref": "GMDPX-500D",
    "name": "(Incluye 500 PRO estuche de lona + Cordon) Pulsioxímetro",
    "description": "(Incluye 500 PRO estuche de lona + Cordon) Pulsioxímetro",
    "category": "Control y Prevención",
    "subcategory": "Oximetria",
    "image": "/images/GMDPX-500D.png",
    "gallery": [
      "/images/GMDPX-500D.png"
    ]
  },
  {
    "id": "gmdpx-202",
    "ref": "GMDPX-202",
    "name": "(Incluye con Curva II Latidos estuche",
    "description": "(Incluye con Curva II Latidos estuche de lona + Cordon) Pulsioxímetro",
    "category": "Control y Prevención",
    "subcategory": "Oximetria",
    "image": "/images/GMDPX-202.png",
    "gallery": [
      "/images/GMDPX-202.png"
    ]
  },
  {
    "id": "gmdpx-201d",
    "ref": "GMDPX-201D",
    "name": "(Incluye Latidos con Curva estuche",
    "description": "(Incluye Latidos con Curva estuche de lona + Cordon + Protector en Silicona) Pulsioxímetro",
    "category": "Control y Prevención",
    "subcategory": "Oximetria",
    "image": "/images/GMDPX-201D.png",
    "gallery": [
      "/images/GMDPX-201D.png"
    ]
  },
  {
    "id": "gmdpx-500a",
    "ref": "GMDPX-500A",
    "name": "(Incluye Pediátrico GMD estuche",
    "description": "(Incluye Pediátrico GMD estuche de lona + Cordon) Bandas y relojes inteligentes",
    "category": "Control y Prevención",
    "subcategory": "Oximetria",
    "image": "/images/GMDPX-500A.png",
    "gallery": [
      "/images/GMDPX-500A.png"
    ]
  },
  {
    "id": "gmd-tor3k",
    "ref": "GMD-TOR3K",
    "name": "Reloj Inteligente Tor 3K GMD",
    "description": "Reloj Inteligente Tor 3K GMD",
    "category": "Control y Prevención",
    "subcategory": "Bandas y relojes inteligentes",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-tor1k",
    "ref": "GMD-TOR1K",
    "name": "Banda Inteligente Tor 1K GMD Doppler",
    "description": "Banda Inteligente Tor 1K GMD Doppler",
    "category": "Control y Prevención",
    "subcategory": "Bandas y relojes inteligentes",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-df-100b",
    "ref": "GMD-DF-100B",
    "name": "Doppler Fetal TunTun GMD",
    "description": "Doppler Fetal TunTun GMD",
    "category": "Control y Prevención",
    "subcategory": "Doppler",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-df-100b-s",
    "ref": "GMD-DF-100B-S",
    "name": "Sonda para Doppler Fetal",
    "description": "Sonda para Doppler Fetal",
    "category": "Control y Prevención",
    "subcategory": "Doppler",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "ltd-b10",
    "ref": "LTD-B10",
    "name": "Glucómetro Latidos",
    "description": "Glucómetro Latidos",
    "category": "Control y Prevención",
    "subcategory": "Glucometria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "ltd-b10-l",
    "ref": "LTD-B10-L",
    "name": "Lancetas Para Glucómetros Latidos x 50 Unidades",
    "description": "Lancetas Para Glucómetros Latidos x 50 Unidades",
    "category": "Control y Prevención",
    "subcategory": "Glucometria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "ltd-b10-tr",
    "ref": "LTD-B10-TR",
    "name": "Tirillas Reactivas Para El Glucómetro",
    "description": "Tirillas Reactivas Para El Glucómetro",
    "category": "Control y Prevención",
    "subcategory": "Glucometria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-gm-b06",
    "ref": "GMD-GM-B06",
    "name": "Glucómetro Glucoscan Latidos",
    "description": "Glucómetro Glucoscan Latidos",
    "category": "Control y Prevención",
    "subcategory": "Glucometria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-gm-b06-tr",
    "ref": "GMD-GM-B06-TR",
    "name": "Tirillas Reactivas para el glucómetro",
    "description": "Tirillas Reactivas para el glucómetro",
    "category": "Control y Prevención",
    "subcategory": "Glucometria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kpm-a6",
    "ref": "KPM-A6",
    "name": "Silla de Ruedas Motorizada En Acero - con Batería de Ácido",
    "description": "Silla de Ruedas Motorizada En Acero - con Batería de Ácido",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Motorizadas",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp140-16",
    "ref": "KP140-16",
    "name": "Silla De Ruedas Basculante y Reclinable Énova 16\"",
    "description": "Silla De Ruedas Basculante y Reclinable Énova 16\"",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Basculantes",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp140-14",
    "ref": "KP140-14",
    "name": "Silla De Ruedas Basculante y Reclinable Énova 14\" Sillas",
    "description": "Silla De Ruedas Basculante y Reclinable Énova 14\" Sillas de Ruedas Estándar Pediátrica Silla",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Basculantes",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp9065-12",
    "ref": "KP9065-12",
    "name": "O - 14 Se maneja De Ruedas Pediátrica en Aluminio Uva",
    "description": "o - 14 Se maneja De Ruedas Pediátrica en Aluminio Uva de dos anchos de asiento 12\" y 14\" Silla",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp9031-12",
    "ref": "KP9031-12",
    "name": "O - 14 Se maneja De Ruedas en Acero Pediátrica Lima",
    "description": "o - 14 Se maneja De Ruedas en Acero Pediátrica Lima de dos anchos de asiento 12\" y 14\" Silla de Ruedas Ligera Silla",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp9071-16l",
    "ref": "KP9071-16L",
    "name": "O - 18L Se maneja De Ruedas Activa Plegable Luna Lite (En Aluminio)",
    "description": "o - 18L Se maneja De Ruedas Activa Plegable Luna Lite (En Aluminio) de dos anchos de asiento 16\" y 18\" Silla SRELS Ancho De Ruedas Iron Light con Reposapiés Removibles Konfort Plus Del Asiento de 44 cm o 47 cm",
    "category": "Movilidad",
    "subcategory": "Silla de Ruedas Ligera",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp9031-18",
    "ref": "KP9031-18",
    "name": "O 20 Silla De Ruedas Iron Move",
    "description": "o 20 Silla De Ruedas Iron Move de 18\" o 20\" (En Acero) Sillas de Ruedas Estándar SILLA",
    "category": "Movilidad",
    "subcategory": "Silla de Ruedas Ligera",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe1462ff-m23-d",
    "ref": "KBE1462FF-M23-D",
    "name": "GRAFITO DE RUEDAS ESTANDAR LLANTA MACIZA DESARMABLE RIN RADIO NEGRO",
    "description": "GRAFITO DE RUEDAS ESTANDAR LLANTA MACIZA DESARMABLE RIN RADIO NEGRO",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/KBE1462FF-M23-D.png",
    "gallery": [
      "/images/KBE1462FF-M23-D.png"
    ]
  },
  {
    "id": "kbe-9110hc",
    "ref": "KBE-9110HC",
    "name": "SILLA DE RUEDAS ESTANDAR",
    "description": "SILLA DE RUEDAS ESTANDAR",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe-982e",
    "ref": "KBE-982E",
    "name": "Silla De Ruedas Estándar Con Rin Estrella 24\" SILLA",
    "description": "Silla De Ruedas Estándar Con Rin Estrella 24\" SILLA",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe-9000d",
    "ref": "KBE-9000D",
    "name": "(Llanta DE RUEDAS ESTANDAR CON RIN ESTRELLA trasera de 22,5\")",
    "description": "(Llanta DE RUEDAS ESTANDAR CON RIN ESTRELLA trasera de 22,5\")",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/KBE-9000D.png",
    "gallery": [
      "/images/KBE-9000D.png"
    ]
  },
  {
    "id": "kbe-622",
    "ref": "KBE-622",
    "name": "Silla De Ruedas Estándar en Acero con Rin Estrella 22\"",
    "description": "Silla De Ruedas Estándar en Acero con Rin Estrella 22\"",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe-622fr",
    "ref": "KBE-622FR",
    "name": "Silla De Ruedas Estándar en Acero con Rin Estrella 22\" y Freno",
    "description": "Silla De Ruedas Estándar en Acero con Rin Estrella 22\" y Freno de Asistencia SILLA KBE9119F GRAFITO DE RUEDAS ESTANDAR LLANTA MACIZA DESARMABLE RIN RADIO NEGRO APOYABRAZOS ABATIBLES SILLA",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe1462rr-pp23l",
    "ref": "KBE1462RR-PP23L",
    "name": "REMOVIBLES DE RUEDAS ESTANDAR EN ACERO CON REPOSAPIES Y APOYABRAZOS",
    "description": "REMOVIBLES DE RUEDAS ESTANDAR EN ACERO CON REPOSAPIES Y APOYABRAZOS",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/KBE1462RR-PP23L.png",
    "gallery": [
      "/images/KBE1462RR-PP23L.png"
    ]
  },
  {
    "id": "kbe-9630l",
    "ref": "KBE-9630L",
    "name": "SILLA DE RUEDAS ESTÁNDAR Y DE TRANSPORTE EN ALUMINIO SILLA",
    "description": "SILLA DE RUEDAS ESTÁNDAR Y DE TRANSPORTE EN ALUMINIO SILLA",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe1432rf-mp23l",
    "ref": "KBE1432RF-MP23L",
    "name": "ABATIBLES DE RUEDAS DE TRANSPORTE, MATERIAL EN ALUMINIO, APOYA BRAZSOA SILLA",
    "description": "ABATIBLES DE RUEDAS DE TRANSPORTE, MATERIAL EN ALUMINIO, APOYA BRAZSOA SILLA",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/KBE1432RF-MP23L.png",
    "gallery": [
      "/images/KBE1432RF-MP23L.png"
    ]
  },
  {
    "id": "kbo1432rf-mp23",
    "ref": "KBO1432RF-MP23",
    "name": "FIJOS DE RUEDAS DE TRANSPORTE KONFORT",
    "description": "FIJOS DE RUEDAS DE TRANSPORTE KONFORT",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/KBO1432RF-MP23.png",
    "gallery": [
      "/images/KBO1432RF-MP23.png"
    ]
  },
  {
    "id": "kbe-9125t",
    "ref": "KBE-9125T",
    "name": "SILLA DE RUEDAS DE TRANSPORTE BÁSICA EN",
    "description": "SILLA DE RUEDAS DE TRANSPORTE BÁSICA EN",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe-9953",
    "ref": "KBE-9953",
    "name": "SILLA DE RUEDAS RECLINABLE",
    "description": "SILLA DE RUEDAS RECLINABLE",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbe-9953-ii-iii",
    "ref": "KBE-9953-II-III",
    "name": "SILLA DE RUEDAS BARIÁTRICA CAMINADORES",
    "description": "SILLA DE RUEDAS BARIÁTRICA CAMINADORES",
    "category": "Movilidad",
    "subcategory": "Sillas de Ruedas Estándar",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp1342al-19",
    "ref": "KP1342AL-19",
    "name": "CAMINADOR DOBLE FUNCIÓN KP COLOR GRIS",
    "description": "CAMINADOR DOBLE FUNCIÓN KP COLOR GRIS",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp1-8160l",
    "ref": "KP1-8160L",
    "name": "CAMINADOR DESARMABLE EN ALUMINIO KONFORT PLUS",
    "description": "CAMINADOR DESARMABLE EN ALUMINIO KONFORT PLUS",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp1-816l-19",
    "ref": "KP1-816L-19",
    "name": "CAMINADOR STAND UP DOBLE FUNCIÓN COLOR GRIS",
    "description": "CAMINADOR STAND UP DOBLE FUNCIÓN COLOR GRIS",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp153-al-19",
    "ref": "KP153-AL-19",
    "name": "\"CAMINADOR CON RUEDAS DE 5\"\" EN ALUMINIO ANODIZADO KP COLOR GRIS\"",
    "description": "\"CAMINADOR CON RUEDAS DE 5\"\" EN ALUMINIO ANODIZADO KP COLOR GRIS\"",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp271-al-2",
    "ref": "KP271-AL-2",
    "name": "CAMINADOR CON RUEDAS Y ASIENTO AJUSTABLE KONFORT PLUS",
    "description": "CAMINADOR CON RUEDAS Y ASIENTO AJUSTABLE KONFORT PLUS",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp285-al-19",
    "ref": "KP285-AL-19",
    "name": "Rollator en Aluminio con Reposapiés Repuestos para Caminadores",
    "description": "Rollator en Aluminio con Reposapiés Repuestos para Caminadores",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp1-816l-tip",
    "ref": "KP1-816L-TIP",
    "name": "TAPÓN PARA CAMINADOR",
    "description": "TAPÓN PARA CAMINADOR",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp1-816l",
    "ref": "KP1-816L",
    "name": "COLOR GRIS",
    "description": "COLOR GRIS",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp1-a",
    "ref": "KP1-A",
    "name": "ASIENTO PARA CAMINADOR MULETAS",
    "description": "ASIENTO PARA CAMINADOR MULETAS",
    "category": "Movilidad",
    "subcategory": "CAMINADORES",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp321-al-19",
    "ref": "KP321-AL-19",
    "name": "MULETA CANADIENSE ADULTO INTEGRAL COLOR PLATA",
    "description": "MULETA CANADIENSE ADULTO INTEGRAL COLOR PLATA",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp3-856l-19",
    "ref": "KP3-856L-19",
    "name": "MULETA CANADIENSE DOBLE REGULACIÓN TALLA L",
    "description": "MULETA CANADIENSE DOBLE REGULACIÓN TALLA L",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp3-856m-19",
    "ref": "KP3-856M-19",
    "name": "MULETA CANADIENSE DOBLE REGULACIÓN TALLA M",
    "description": "MULETA CANADIENSE DOBLE REGULACIÓN TALLA M",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb311l-al19",
    "ref": "KB311L-AL19",
    "name": "MULETA CONVENCIONAL EN ALUMINIO TALLA L: 177",
    "description": "MULETA CONVENCIONAL EN ALUMINIO TALLA L: 177",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb311m-al19",
    "ref": "KB311M-AL19",
    "name": "MULETA CONVENCIONAL EN ALUMINIO TALLA M",
    "description": "MULETA CONVENCIONAL EN ALUMINIO TALLA M",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb311s-al19",
    "ref": "KB311S-AL19",
    "name": "MULETA CONVENCIONAL EN ALUMINIO TALLA S Repuestos para Muletas",
    "description": "MULETA CONVENCIONAL EN ALUMINIO TALLA S Repuestos para Muletas",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb3-2001l",
    "ref": "KB3-2001L",
    "name": "AXILARES PARA MULETAS",
    "description": "AXILARES PARA MULETAS",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb3-2010",
    "ref": "KB3-2010",
    "name": "MANILARES MULETAS",
    "description": "MANILARES MULETAS",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb3-7501l",
    "ref": "KB3-7501L",
    "name": "TAPÓN PARA MULETA KB COLOR GRIS BASTONES DE 4 APOYOS",
    "description": "TAPÓN PARA MULETA KB COLOR GRIS BASTONES DE 4 APOYOS",
    "category": "Movilidad",
    "subcategory": "MULETAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4202-20",
    "ref": "KP4202-20",
    "name": "BASTON 4 APOYOS BASE PEQUEÑA, COLOR NEGRO",
    "description": "BASTON 4 APOYOS BASE PEQUEÑA, COLOR NEGRO",
    "category": "Movilidad",
    "subcategory": "BASTONES DE 4 APOYOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4202-22",
    "ref": "KP4202-22",
    "name": "BASTON 4 APOYOS BASE PEQUEÑA, COLOR CROMO",
    "description": "BASTON 4 APOYOS BASE PEQUEÑA, COLOR CROMO",
    "category": "Movilidad",
    "subcategory": "BASTONES DE 4 APOYOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4202-28",
    "ref": "KP4202-28",
    "name": "BASTON 4 APOYOS BASE PEQUEÑA, COLOR BRONCE",
    "description": "BASTON 4 APOYOS BASE PEQUEÑA, COLOR BRONCE",
    "category": "Movilidad",
    "subcategory": "BASTONES DE 4 APOYOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-1t-t02",
    "ref": "KP4-1T-T02",
    "name": "SOPORTE DE BASTON PARA LEVANTARSE",
    "description": "SOPORTE DE BASTON PARA LEVANTARSE",
    "category": "Movilidad",
    "subcategory": "BASTONES DE 4 APOYOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-4t-19d",
    "ref": "KP4-4T-19D",
    "name": "RECATÓN COLOR GRIS PARA BASTÓN DE 4 APOYOS DC",
    "description": "RECATÓN COLOR GRIS PARA BASTÓN DE 4 APOYOS DC",
    "category": "Movilidad",
    "subcategory": "BASTONES DE 4 APOYOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-4t-20d",
    "ref": "KP4-4T-20D",
    "name": "RECATÓN COLOR NEGRO PARA BASTÓN DE 4 APOYOS DC BASTONES 1 APOYO",
    "description": "RECATÓN COLOR NEGRO PARA BASTÓN DE 4 APOYOS DC BASTONES 1 APOYO",
    "category": "Movilidad",
    "subcategory": "BASTONES DE 4 APOYOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4102-20",
    "ref": "KP4102-20",
    "name": "BASTON CON EMPUÑADURA EN T ERGONOMICO COLOR NEGRO",
    "description": "BASTON CON EMPUÑADURA EN T ERGONOMICO COLOR NEGRO",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4102-22",
    "ref": "KP4102-22",
    "name": "BASTON CON EMPUÑADURA EN T ERGONOMICO COLOR CROMO",
    "description": "BASTON CON EMPUÑADURA EN T ERGONOMICO COLOR CROMO",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4102-28",
    "ref": "KP4102-28",
    "name": "BASTON CON EMPUÑADURA EN T ERGONOMICO COLOR BRONCE",
    "description": "BASTON CON EMPUÑADURA EN T ERGONOMICO COLOR BRONCE",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-76085-20",
    "ref": "KP4-76085-20",
    "name": "BASTON PLEGABLE CON EMPUÑADURA EN T COLOR NEGRO",
    "description": "BASTON PLEGABLE CON EMPUÑADURA EN T COLOR NEGRO",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-76085-22",
    "ref": "KP4-76085-22",
    "name": "BASTON PLEGABLE CON EMPUÑADURA EN T COLOR CROMO",
    "description": "BASTON PLEGABLE CON EMPUÑADURA EN T COLOR CROMO",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-76085-28",
    "ref": "KP4-76085-28",
    "name": "BASTON PLEGABLE CON EMPUÑADURA EN T COLOR BRONCE",
    "description": "BASTON PLEGABLE CON EMPUÑADURA EN T COLOR BRONCE",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-832l6-20",
    "ref": "KP4-832L6-20",
    "name": "BASTÓN DE INVIDENTE PLEGABLE CON TAPÓN GIRATORIO Repuestos para Bastón 1 Apoyo",
    "description": "BASTÓN DE INVIDENTE PLEGABLE CON TAPÓN GIRATORIO Repuestos para Bastón 1 Apoyo",
    "category": "Movilidad",
    "subcategory": "BASTONES 1 APOYO",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-1t-19d",
    "ref": "KP4-1T-19D",
    "name": "RECATÓN COLOR GRIS PARA BASTÓN DE 1 APOYO DC",
    "description": "RECATÓN COLOR GRIS PARA BASTÓN DE 1 APOYO DC",
    "category": "Movilidad",
    "subcategory": "Repuestos para Bastón 1 Apoyo",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kp4-1t-20d",
    "ref": "KP4-1T-20D",
    "name": "RECATÓN COLOR NEGRO PARA BASTÓN DE 1 APOYO DC P165 - 001B TAPON BARA BASTON DE INVIDENTE (Goma negra) TERAPIA RESPIRATORIA Aerosolterapia  Compresor",
    "description": "RECATÓN COLOR NEGRO PARA BASTÓN DE 1 APOYO DC P165 - 001B TAPON BARA BASTON DE INVIDENTE (Goma negra) TERAPIA RESPIRATORIA Aerosolterapia  Compresor",
    "category": "Movilidad",
    "subcategory": "Repuestos para Bastón 1 Apoyo",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmrn457-12",
    "ref": "GMRN457-12",
    "name": "Mascarillas Nebulizador Nube 3000 - Uso Continuo con accesorios + Estuche",
    "description": "Mascarillas Nebulizador Nube 3000 - Uso Continuo con accesorios + Estuche de transporte Compresor",
    "category": "Terapia Respiratoria",
    "subcategory": "Aerosolterapia",
    "image": "/images/GMRN457-12.png",
    "gallery": [
      "/images/GMRN457-12.png"
    ]
  },
  {
    "id": "gmrn-211",
    "ref": "GMRN-211",
    "name": "+ Nebulizador Nube 3000+ - Uso Continuo Accesorios para Lavado Nasal Compresor",
    "description": "+ Nebulizador Nube 3000+ - Uso Continuo Accesorios para Lavado Nasal Compresor",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMRN-211.png",
    "gallery": [
      "/images/GMRN-211.png"
    ]
  },
  {
    "id": "gmrn457-171",
    "ref": "GMRN457-171",
    "name": "Mascarillas nebulizador nube 1000 figura perro con accesorios + Estuche",
    "description": "Mascarillas nebulizador nube 1000 figura perro con accesorios + Estuche de transporte Compresor",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMRN457-171.png",
    "gallery": [
      "/images/GMRN457-171.png"
    ]
  },
  {
    "id": "gmrn-222",
    "ref": "GMRN-222",
    "name": "Mascarillas nebulizador nube 1000 figura",
    "description": "Mascarillas nebulizador nube 1000 figura de búho con accesorios + Estuche de transporte Compresor",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMRN-222.png",
    "gallery": [
      "/images/GMRN-222.png"
    ]
  },
  {
    "id": "gmrn-235",
    "ref": "GMRN-235",
    "name": "Mascarillas nebulizador nube 1000 figura Balón con accesorios + Estuche",
    "description": "Mascarillas nebulizador nube 1000 figura Balón con accesorios + Estuche de transporte Compresor",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/GMRN-235.png",
    "gallery": [
      "/images/GMRN-235.png"
    ]
  },
  {
    "id": "cdk-195",
    "ref": "CDK-195",
    "name": "Incluye Nebulizador Carditek Zen Mascarillas Compresor",
    "description": "Incluye Nebulizador Carditek Zen Mascarillas Compresor",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/CDK-195.png",
    "gallery": [
      "/images/CDK-195.png"
    ]
  },
  {
    "id": "cdk-222",
    "ref": "CDK-222",
    "name": "Incluye Nebulizador Carditek Bubu Mascarillas",
    "description": "Incluye Nebulizador Carditek Bubu Mascarillas",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/CDK-222.png",
    "gallery": [
      "/images/CDK-222.png"
    ]
  },
  {
    "id": "gmrn-217",
    "ref": "GMRN-217",
    "name": "Nebulizador Portátil Recargable de Malla GMD KITS NEBULIZACIÓN",
    "description": "Nebulizador Portátil Recargable de Malla GMD KITS NEBULIZACIÓN",
    "category": "Instrumentos",
    "subcategory": "ACCESORIOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmrn457-kit",
    "ref": "GMRN457-KIT",
    "name": "KIT DE NEBULIZACIÓN ADULTO PARA COMPRESOR NEBULIZADOR",
    "description": "KIT DE NEBULIZACIÓN ADULTO PARA COMPRESOR NEBULIZADOR",
    "category": "Terapia Respiratoria",
    "subcategory": "KITS NEBULIZACIÓN",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmrn457-kitpe",
    "ref": "GMRN457-KITPE",
    "name": "Kit de Nebulización Pediátrico NUBE",
    "description": "Kit de Nebulización Pediátrico NUBE",
    "category": "Terapia Respiratoria",
    "subcategory": "KITS NEBULIZACIÓN",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmrn457-12f",
    "ref": "GMRN457-12F",
    "name": "Filtro para compresor nebulizador nube3000",
    "description": "Filtro para compresor nebulizador nube3000",
    "category": "Terapia Respiratoria",
    "subcategory": "KITS NEBULIZACIÓN",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-nw-001",
    "ref": "GMD-NW-001",
    "name": "Lavador Nasal GMD OXÍGENOTERAPIA",
    "description": "Lavador Nasal GMD OXÍGENOTERAPIA",
    "category": "Terapia Respiratoria",
    "subcategory": "KITS NEBULIZACIÓN",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "me-2015",
    "ref": "ME-2015",
    "name": "CILINDRO DE OXÍGENO DE 680 L KIT KIT1 (Carro 1 CON CILINDRO DE 680 LT + cilindro) No incluye regulador Aspirador",
    "description": "CILINDRO DE OXÍGENO DE 680 L KIT KIT1 (Carro 1 CON CILINDRO DE 680 LT + cilindro) No incluye regulador Aspirador de Secreciones",
    "category": "Terapia Respiratoria",
    "subcategory": "OXÍGENOTERAPIA",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmr-sm181",
    "ref": "GMR-SM181",
    "name": "ASPIRADOR DE SECRECIONES PORTATIL",
    "description": "ASPIRADOR DE SECRECIONES PORTATIL",
    "category": "Terapia Respiratoria",
    "subcategory": "Aspirador de Secreciones",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmr-sm181-sk",
    "ref": "GMR-SM181-SK",
    "name": "Kit para aspirador",
    "description": "Kit para aspirador de secreciones (botella+tubo+filtro) Espirometros",
    "category": "Terapia Respiratoria",
    "subcategory": "Aspirador de Secreciones",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-sp002",
    "ref": "GMD-SP002",
    "name": "Espirometro para inhalación",
    "description": "Espirometro para inhalación",
    "category": "Terapia Respiratoria",
    "subcategory": "Espirometros",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-sp001",
    "ref": "GMD-SP001",
    "name": "Espirometro",
    "description": "Espirometro de uso dual CONFORT  Superficies Especiales Para el Manejo de la Presión KPSEMPA2G1 - 27 SUPERFICIE ESPECIAL PARA EL MANEJO DE LA PRESIÓN SEMP I KPSEMPA2G1 - 27R Repuesto superficie semp i (superficie especial para el manejo de la presión) Camas Hospitalarias",
    "category": "Terapia Respiratoria",
    "subcategory": "Espirometros",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kpc-bd02",
    "ref": "KPC-BD02",
    "name": "Cama Electrica de 3 Funciones Konfort Plus",
    "description": "Cama Electrica de 3 Funciones Konfort Plus",
    "category": "Confort",
    "subcategory": "Camas Hospitalarias",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kpc-bd08",
    "ref": "KPC-BD08",
    "name": "Cama Manual de 3 Funciones Konfort Plus Tens",
    "description": "Cama Manual de 3 Funciones Konfort Plus Tens",
    "category": "Confort",
    "subcategory": "Camas Hospitalarias",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ek-04",
    "ref": "GMD-EK-04",
    "name": "ELECTRODOS PARA TENS X 4 UNIDADES",
    "description": "ELECTRODOS PARA TENS X 4 UNIDADES",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-es210",
    "ref": "GMD-ES210",
    "name": "Electroestimulador Elektro ONE",
    "description": "Electroestimulador Elektro ONE",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ek-107",
    "ref": "GMD-EK-107",
    "name": "Electrodos x 4 Unidades para el Elektro ONE",
    "description": "Electrodos x 4 Unidades para el Elektro ONE",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-es210-c",
    "ref": "GMD-ES210-C",
    "name": "Cables para el ELEKTRO ONE Cinta kinesiológica",
    "description": "Cables para el ELEKTRO ONE Cinta kinesiológica",
    "category": "Confort",
    "subcategory": "Tens",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kt-5x5-12",
    "ref": "KT-5X5-12",
    "name": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR AZUL",
    "description": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR AZUL",
    "category": "Confort",
    "subcategory": "Cinta kinesiológica",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kt-5x5-17",
    "ref": "KT-5X5-17",
    "name": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR FUCSIA",
    "description": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR FUCSIA",
    "category": "Confort",
    "subcategory": "Cinta kinesiológica",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kt-5x5-31",
    "ref": "KT-5X5-31",
    "name": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR BEIGE",
    "description": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR BEIGE",
    "category": "Confort",
    "subcategory": "Cinta kinesiológica",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kt-5x5-20",
    "ref": "KT-5X5-20",
    "name": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR NEGRO Linea Fria",
    "description": ". CINTA KINESIOLÓGICA DE 5CMX5M COLOR NEGRO Linea Fria",
    "category": "Confort",
    "subcategory": "Cinta kinesiológica",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "ft-c100",
    "ref": "FT-C100",
    "name": "Compresa Frío de 15 cm X 20 cm marca Quidol",
    "description": "Compresa Frío de 15 cm X 20 cm marca Quidol",
    "category": "Confort",
    "subcategory": "Linea Fria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "ft-m145",
    "ref": "FT-M145",
    "name": "Máscara Fría para Ojos marca Quidol Vendaje Elástico",
    "description": "Máscara Fría para Ojos marca Quidol Vendaje Elástico",
    "category": "Confort",
    "subcategory": "Linea Fria",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ve-2x5",
    "ref": "GMD-VE-2X5",
    "name": "Vendaje Elástico GMD Rollo 2 pulgadas x 5 Yardas Color Piel",
    "description": "Vendaje Elástico GMD Rollo 2 pulgadas x 5 Yardas Color Piel",
    "category": "Confort",
    "subcategory": "Vendaje Elástico",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ve-3x5",
    "ref": "GMD-VE-3X5",
    "name": "Vendaje Elástico GMD Rollo 3 pulgadas x 5 Yardas Color Piel",
    "description": "Vendaje Elástico GMD Rollo 3 pulgadas x 5 Yardas Color Piel",
    "category": "Confort",
    "subcategory": "Vendaje Elástico",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ve-4x5",
    "ref": "GMD-VE-4X5",
    "name": "Vendaje Elástico GMD Rollo 4 pulgadas x 5 Yardas Color Piel",
    "description": "Vendaje Elástico GMD Rollo 4 pulgadas x 5 Yardas Color Piel",
    "category": "Confort",
    "subcategory": "Vendaje Elástico",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ve-5x5",
    "ref": "GMD-VE-5X5",
    "name": "Vendaje Elástico GMD Rollo 5 pulgadas x 5 Yardas Color Piel",
    "description": "Vendaje Elástico GMD Rollo 5 pulgadas x 5 Yardas Color Piel",
    "category": "Confort",
    "subcategory": "Vendaje Elástico",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ve-6x5",
    "ref": "GMD-VE-6X5",
    "name": "Vendaje Elástico GMD Rollo 6 pulgadas x 5 Yardas Color Piel Cinta Cohesiva",
    "description": "Vendaje Elástico GMD Rollo 6 pulgadas x 5 Yardas Color Piel Cinta Cohesiva",
    "category": "Confort",
    "subcategory": "Vendaje Elástico",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-cc-2x4-5",
    "ref": "GMD-CC-2X4.5",
    "name": "Cinta Cohesiva GMD Rollo 2 pulgadas x 4,5 MT Color Piel",
    "description": "Cinta Cohesiva GMD Rollo 2 pulgadas x 4,5 MT Color Piel",
    "category": "Confort",
    "subcategory": "Cinta Cohesiva",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-cc-3x4-5",
    "ref": "GMD-CC-3X4.5",
    "name": "Cinta Cohesiva GMD Rollo 3 pulgadas x 4,5 MT Color Piel",
    "description": "Cinta Cohesiva GMD Rollo 3 pulgadas x 4,5 MT Color Piel",
    "category": "Confort",
    "subcategory": "Cinta Cohesiva",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-cc-4x4-5",
    "ref": "GMD-CC-4X4.5",
    "name": "Cinta Cohesiva GMD Rollo 4 pulgadas x 4,5 MT Color Piel",
    "description": "Cinta Cohesiva GMD Rollo 4 pulgadas x 4,5 MT Color Piel",
    "category": "Confort",
    "subcategory": "Cinta Cohesiva",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-cc-6x4-5",
    "ref": "GMD-CC-6X4.5",
    "name": "Cinta Cohesiva GMD Rollo 6 pulgadas x 4,5 MT Color Piel Botiquines",
    "description": "Cinta Cohesiva GMD Rollo 6 pulgadas x 4,5 MT Color Piel Botiquines",
    "category": "Confort",
    "subcategory": "Cinta Cohesiva",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-bl-20",
    "ref": "GMD-BL-20",
    "name": "Bajalenguas en madera GMD paquete por 20 Unidades",
    "description": "Bajalenguas en madera GMD paquete por 20 Unidades",
    "category": "Confort",
    "subcategory": "Botiquines",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-ci-7220",
    "ref": "GMD-CI-7220",
    "name": "Cura Adhesiva Impermeable X 10 Unidades De 72 mm X 20 mm ACTIVIDADES DE LA VIDA DIARIA Higiene  CÓMODOS",
    "description": "Cura Adhesiva Impermeable X 10 Unidades De 72 mm X 20 mm ACTIVIDADES DE LA VIDA DIARIA Higiene  CÓMODOS",
    "category": "Confort",
    "subcategory": "Botiquines",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kb215sr-al",
    "ref": "KB215SR-AL",
    "name": "COMODO SANITARIO EN ALUMINIO ANODIZADO KONFORT BASIC",
    "description": "COMODO SANITARIO EN ALUMINIO ANODIZADO KONFORT BASIC",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "CÓMODOS",
    "image": "/images/KB215SR-AL.png",
    "gallery": [
      "/images/KB215SR-AL.png"
    ]
  },
  {
    "id": "kb225cr-al19",
    "ref": "KB225CR-AL19",
    "name": "CÓMODO SANITARIO PLEGABLE CON RUEDAS ALUMINIO ANODIZADO",
    "description": "CÓMODO SANITARIO PLEGABLE CON RUEDAS ALUMINIO ANODIZADO",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "CÓMODOS",
    "image": "/images/KB225CR-AL19.png",
    "gallery": [
      "/images/KB225CR-AL19.png"
    ]
  },
  {
    "id": "kb225cr-ap1",
    "ref": "KB225CR-AP1",
    "name": "CÓMODO SANITARIO PLEGABLE CON RUEDAS ACERO ANODIZADO ELEVA SANITARIOS",
    "description": "CÓMODO SANITARIO PLEGABLE CON RUEDAS ACERO ANODIZADO ELEVA SANITARIOS",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "CÓMODOS",
    "image": "/images/KB225CR-AP1.png",
    "gallery": [
      "/images/KB225CR-AP1.png"
    ]
  },
  {
    "id": "kp3-67034",
    "ref": "KP3-67034",
    "name": "ELEVA SANITARIO CON SEGURO Y BRAZOS KP SILLAS PARA DUCHA",
    "description": "ELEVA SANITARIO CON SEGURO Y BRAZOS KP SILLAS PARA DUCHA",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "ELEVA SANITARIOS",
    "image": "/images/KP3-67034.png",
    "gallery": [
      "/images/KP3-67034.png"
    ]
  },
  {
    "id": "kp1-3520l",
    "ref": "KP1-3520L",
    "name": "SILLA PARA DUCHA CON BRAZOS GRUA HIDRAULICA",
    "description": "SILLA PARA DUCHA CON BRAZOS GRUA HIDRAULICA",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "SILLAS PARA DUCHA",
    "image": "/images/KP1-3520L.png",
    "gallery": [
      "/images/KP1-3520L.png"
    ]
  },
  {
    "id": "jbs168-1",
    "ref": "JBS168-1",
    "name": "GRUA HIDRAULICA",
    "description": "GRUA HIDRAULICA",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "GRUA HIDRAULICA",
    "image": "/images/JBS168-1.png",
    "gallery": [
      "/images/JBS168-1.png"
    ]
  },
  {
    "id": "jbs168-00-021",
    "ref": "JBS168-00-021",
    "name": "Arnes Movil Para Grúa Hidráulica Linea Blanda CABESTRILLOS",
    "description": "Arnes Movil Para Grúa Hidráulica Linea Blanda CABESTRILLOS",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "GRUA HIDRAULICA",
    "image": "/images/JBS168-00-021.png",
    "gallery": [
      "/images/JBS168-00-021.png"
    ]
  },
  {
    "id": "kbc-pa",
    "ref": "KBC-PA",
    "name": "CABESTRILLO PEDIÁTRICO COLOR AZUL",
    "description": "CABESTRILLO PEDIÁTRICO COLOR AZUL",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "CABESTRILLOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "kbc-aa",
    "ref": "KBC-AA",
    "name": "CABESTRILLO ADULTO COLOR AZUL PROFUNDO",
    "description": "CABESTRILLO ADULTO COLOR AZUL PROFUNDO",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "CABESTRILLOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-wr010",
    "ref": "GMD-WR010",
    "name": "Brace de muñeca ambidiestro GMD RODILLERAS",
    "description": "Brace de muñeca ambidiestro GMD RODILLERAS",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "CABESTRILLOS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-kn011",
    "ref": "GMD-KN011",
    "name": "Rodillera Universal",
    "description": "Rodillera Universal",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-h031-s",
    "ref": "GMD-H031-S",
    "name": "Rodillera Deportiva Talla S - Cerrada",
    "description": "Rodillera Deportiva Talla S - Cerrada",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-h031-m",
    "ref": "GMD-H031-M",
    "name": "Rodillera Deportiva Talla M - Cerrada",
    "description": "Rodillera Deportiva Talla M - Cerrada",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-h031-l",
    "ref": "GMD-H031-L",
    "name": "Rodillera Deportiva Talla L - Cerrada",
    "description": "Rodillera Deportiva Talla L - Cerrada",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-868-m",
    "ref": "GMD-868-M",
    "name": "Rodillera Deportiva Cruzada Con Estabilización",
    "description": "Rodillera Deportiva Cruzada Con Estabilización de Rodilla GMD Talla M",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-868-l",
    "ref": "GMD-868-L",
    "name": "Rodillera Deportiva Cruzada Con Estabilización",
    "description": "Rodillera Deportiva Cruzada Con Estabilización de Rodilla GMD Talla L",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-928-m",
    "ref": "GMD-928-M",
    "name": "Rodillera Deportiva Cruzada GMD Talla M",
    "description": "Rodillera Deportiva Cruzada GMD Talla M",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-928-l",
    "ref": "GMD-928-L",
    "name": "Rodillera Deportiva Cruzada GMD Talla L",
    "description": "Rodillera Deportiva Cruzada GMD Talla L",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-stg01-s",
    "ref": "GMD-STG01-S",
    "name": "Tobillera Deportiva GMD Talla S",
    "description": "Tobillera Deportiva GMD Talla S",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-stg01-m",
    "ref": "GMD-STG01-M",
    "name": "Tobillera Deportiva GMD Talla M",
    "description": "Tobillera Deportiva GMD Talla M",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  },
  {
    "id": "gmd-stg01-l",
    "ref": "GMD-STG01-L",
    "name": "Tobillera Deportiva GMD Talla L",
    "description": "Tobillera Deportiva GMD Talla L",
    "category": "Actividades de la Vida Diaria",
    "subcategory": "RODILLERAS",
    "image": "/images/PR5.jpg"
  }
];

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
