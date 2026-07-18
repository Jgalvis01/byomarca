export interface NovamedicaProduct {
  brand?: string;
  id: string;
  name: string;
  ref: string;
  category: string;
  image: string;
  gallery: string[];
  specs: { label: string; value: string }[];
  optional?: string;
}

export const novamedicaProducts: NovamedicaProduct[] = [
  {
    "id": "sys-6010",
    "name": "Bombas de Infusión",
    "ref": "SYS-6010",
    "brand": "MEDCAPTAIN",
    "category": "Bombas de Infusión",
    "image": "/images/SYS-6010.jpeg",
    "gallery": [
      "/images/SYS-6010.jpeg"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño liviano y compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 2.4\""
      },
      {
        "label": "Característica",
        "value": "8 modos de infusión"
      },
      {
        "label": "Característica",
        "value": "Compatible con múltiples sets de infusión"
      },
      {
        "label": "Característica",
        "value": "Batería Li-on recargable de 5 horas"
      },
      {
        "label": "Característica",
        "value": "Puerta motorizada"
      }
    ],
    "optional": "Opcional: Sensor de goteo, Central de monitoreo"
  },
  {
    "id": "mp-60",
    "name": "Bombas de Infusión",
    "ref": "MP-60",
    "brand": "MEDCAPTAIN",
    "category": "Bombas de Infusión",
    "image": "/images/MP-60.jpeg",
    "gallery": [
      "/images/MP-60.jpeg"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño liviano y compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 2.4\""
      },
      {
        "label": "Característica",
        "value": "9 modos de infusión"
      },
      {
        "label": "Característica",
        "value": "Compatible con múltiples sets de infusión"
      },
      {
        "label": "Característica",
        "value": "Batería Li-on recargable de 5 horas"
      },
      {
        "label": "Característica",
        "value": "Diseño apilable (doble canal mediante acople directo)"
      },
      {
        "label": "Característica",
        "value": "Módulo de comunicación WIFI"
      },
      {
        "label": "Característica",
        "value": "Puerta motorizada"
      },
      {
        "label": "Característica",
        "value": "Compatible con estación de trabajo MP80"
      }
    ],
    "optional": "Opcional: Central de monitoreo, Sensor de goteo, MP80"
  },
  {
    "id": "mp-30",
    "name": "Bombas de Infusión",
    "ref": "MP-30",
    "brand": "MEDCAPTAIN",
    "category": "Bombas de Infusión",
    "image": "/images/MP-30.jpeg",
    "gallery": [
      "/images/MP-30.jpeg"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño liviano y compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 2.4\""
      },
      {
        "label": "Característica",
        "value": "9 modos de infusión"
      },
      {
        "label": "Característica",
        "value": "Compatible con múltiples jeringas de infusión"
      },
      {
        "label": "Característica",
        "value": "Batería Li-on recargable de 5 horas"
      },
      {
        "label": "Característica",
        "value": "Diseño apilable (doble canal mediante acople directo)"
      },
      {
        "label": "Característica",
        "value": "Módulo de comunicación WIFI"
      },
      {
        "label": "Característica",
        "value": "Puerta motorizada"
      },
      {
        "label": "Característica",
        "value": "Compatible con estación de trabajo MP80"
      }
    ],
    "optional": "Opcional: Central de monitoreo, Sensor de goteo, MP80"
  },
  {
    "id": "hp-60",
    "name": "Bombas de Infusión",
    "ref": "HP-60",
    "brand": "MEDCAPTAIN",
    "category": "Bombas de Infusión",
    "image": "/images/HP-60.jpeg",
    "gallery": [
      "/images/HP-60.jpeg"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño liviano y compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 3\""
      },
      {
        "label": "Característica",
        "value": "9 modos de infusión"
      },
      {
        "label": "Característica",
        "value": "Compatible con múltiples sets de infusión"
      },
      {
        "label": "Característica",
        "value": "Batería Li-on recargable de 10 horas"
      },
      {
        "label": "Característica",
        "value": "Diseño apilable (doble canal mediante acople directo)"
      },
      {
        "label": "Característica",
        "value": "Módulo de comunicación WIFI"
      },
      {
        "label": "Característica",
        "value": "Puerta motorizada"
      },
      {
        "label": "Característica",
        "value": "Ideal para transfusión de sangre, nutrición parenteral total (TPN) y terapia oncológica"
      },
      {
        "label": "Característica",
        "value": "Compatible con estación de trabajo HP80"
      }
    ],
    "optional": "Opcional: Central de monitoreo, Sensor de goteo, HP80"
  },
  {
    "id": "skk-b",
    "name": "Camilla de Transporte",
    "ref": "SKK-B",
    "brand": "SAIKANG MEDICAL",
    "category": "Camilla de Transporte",
    "image": "/images/SKK-B.jpeg",
    "gallery": [
      "/images/SKK-B.jpeg",
      "/images/SKK-B-1.jpeg",
      "/images/SKK-B-2.jpeg"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Capacidad de carga de 220 kg"
      },
      {
        "label": "Característica",
        "value": "Sistema de freno centralizado"
      },
      {
        "label": "Característica",
        "value": "Espaldar ajustable a dos (2) posiciones"
      },
      {
        "label": "Característica",
        "value": "Sistema de elevación"
      },
      {
        "label": "Característica",
        "value": "Atril y soporte integrado para tanque de oxigeno"
      },
      {
        "label": "Característica",
        "value": "Levantamiento de espaldar 0-75°"
      },
      {
        "label": "Característica",
        "value": "2 barandas laterales abatibles"
      }
    ]
  },
  {
    "id": "sd1",
    "name": "Dopples (Doppler Fetal)",
    "ref": "SD1",
    "brand": "EDAN",
    "category": "Dopples (Doppler Fetal)",
    "image": "/images/SD1.png",
    "gallery": [
      "/images/SD1.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Transductor de 3 MHz para una mejor detección de latidos"
      },
      {
        "label": "Característica",
        "value": "App de manejo de visualización"
      },
      {
        "label": "Característica",
        "value": "Diseño compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla digital de FHR"
      },
      {
        "label": "Característica",
        "value": "Autoapagado para ahorro de energía"
      },
      {
        "label": "Característica",
        "value": "Volumen ajustable"
      }
    ]
  },
  {
    "id": "sd3-pro",
    "name": "Dopples (Doppler Fetal)",
    "ref": "SD3 PRO",
    "brand": "EDAN",
    "category": "Dopples (Doppler Fetal)",
    "image": "/images/SD3 PRO.png",
    "gallery": [
      "/images/SD3 PRO.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla OLED brillante para visualización del FHR en tiempo real"
      },
      {
        "label": "Característica",
        "value": "Batería recargable con más de 16 horas"
      },
      {
        "label": "Característica",
        "value": "Permite la realización de exámenes obstétricos y vasculares"
      },
      {
        "label": "Característica",
        "value": "Autoapagado para el ahorro de energía"
      },
      {
        "label": "Característica",
        "value": "Graba, reproduce y extrae audio"
      },
      {
        "label": "Característica",
        "value": "Transductor de 3 MHz"
      }
    ],
    "optional": "Opcional: Transductores FHR de 4 MHz, 5 MHz y 8 MHz, Cargador"
  },
  {
    "id": "basic-a-sonotrax",
    "name": "Dopples (Doppler Fetal)",
    "ref": "BASIC A (Sonotrax)",
    "brand": "EDAN",
    "category": "Dopples (Doppler Fetal)",
    "image": "/images/BASIC A.png",
    "gallery": [
      "/images/BASIC A.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Transductor de 2 MHz"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD retroiluminada"
      },
      {
        "label": "Característica",
        "value": "Precisión en la medición de la fetocardia"
      },
      {
        "label": "Característica",
        "value": "Permite la realización de exámenes obstétricos y vasculares"
      },
      {
        "label": "Característica",
        "value": "Indicador de nivel de batería"
      }
    ],
    "optional": "Opcional: Transductores FHR de 3 MHz, 4 MHz, 5 MHz y 8 MHz"
  },
  {
    "id": "ii-pro-sonotrax",
    "name": "Dopples (Doppler Fetal)",
    "ref": "II PRO (Sonotrax)",
    "brand": "EDAN",
    "category": "Dopples (Doppler Fetal)",
    "image": "/images/II PRO.png",
    "gallery": [
      "/images/II PRO.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Transductor de 2 MHz"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD retroiluminada"
      },
      {
        "label": "Característica",
        "value": "Batería recargable con más de 8 horas"
      },
      {
        "label": "Característica",
        "value": "Precisión en la medición de la fetocardia"
      },
      {
        "label": "Característica",
        "value": "Permite la realización de exámenes obstétricos y vasculares"
      },
      {
        "label": "Característica",
        "value": "Grabación de audio por 240s"
      },
      {
        "label": "Característica",
        "value": "Salida para audífonos"
      }
    ],
    "optional": "Opcional: Transductores FHR de 3 MHz, 4 MHz, 5 MHz y 8 MHz"
  },
  {
    "id": "skk-m",
    "name": "Carro de Paro",
    "ref": "SKK-M",
    "brand": "SAIKANG MEDICAL",
    "category": "Carro de Paro",
    "image": "/images/SKK-M.png",
    "gallery": [
      "/images/SKK-M.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Estructura en ABS, resistente y de fácil limpieza"
      },
      {
        "label": "Característica",
        "value": "Cajones amplios con cierre seguro"
      },
      {
        "label": "Característica",
        "value": "Ruedas con freno para máxima estabilidad"
      },
      {
        "label": "Característica",
        "value": "Portasuero ajustable en altura"
      },
      {
        "label": "Característica",
        "value": "Bandeja superior para insumos y equipos"
      },
      {
        "label": "Característica",
        "value": "Soporte lateral para contenedor de residuos"
      },
      {
        "label": "Característica",
        "value": "Divisiones internas para mejor organización"
      },
      {
        "label": "Característica",
        "value": "Portasuero y bandeja superior intercambiables"
      }
    ]
  },
  {
    "id": "amoul-i2",
    "name": "Desfibriladores",
    "ref": "AMOUL I2",
    "brand": "AMOUL",
    "category": "Desfibriladores",
    "image": "/images/AMOUL I2.png",
    "gallery": [
      "/images/AMOUL I2.png"
    ],
    "specs": [
      {
        "label": "4 en 1",
        "value": "Desfibrilación, monitorización, estimulación y DEA"
      },
      {
        "label": "Característica",
        "value": "Pantalla a color de 7\""
      },
      {
        "label": "Característica",
        "value": "Desfibrilación bifásica con compensación de impedancia"
      },
      {
        "label": "Característica",
        "value": "Palas convertibles adulto/pediátrico incluidas"
      },
      {
        "label": "Característica",
        "value": "Impresora térmica incorporada"
      },
      {
        "label": "Característica",
        "value": "Compacto, liviano con aproximadamente 5,8 kg"
      }
    ]
  },
  {
    "id": "amoul-i6",
    "name": "Desfibriladores",
    "ref": "AMOUL I6",
    "brand": "AMOUL",
    "category": "Desfibriladores",
    "image": "/images/AMOUL I6.png",
    "gallery": [
      "/images/AMOUL I6.png"
    ],
    "specs": [
      {
        "label": "4 en 1",
        "value": "Desfibrilación, monitorización, estimulación y DEA"
      },
      {
        "label": "Monitoreo completo",
        "value": "ECG, SpO2, RESP, NIBP Y TEMP"
      },
      {
        "label": "Característica",
        "value": "Desfibrilación bifásica con compensación de impedancia"
      },
      {
        "label": "Característica",
        "value": "Palas convertibles adulto/pediátrico incluidas"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD TFT a color de 7\" de alta resolución"
      },
      {
        "label": "Característica",
        "value": "Impresora térmica incorporada"
      }
    ],
    "optional": "Opcional: Sensor CPR, Medición de CO2"
  },
  {
    "id": "amoul-i7-plus-dea",
    "name": "Desfibriladores",
    "ref": "Amoul i7 Plus (DEA)",
    "brand": "AMOUL",
    "category": "Desfibriladores",
    "image": "/images/AMOUL I7 PLUS.png",
    "gallery": [
      "/images/AMOUL I7 PLUS.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Análisis automático del ritmo cardíaco"
      },
      {
        "label": "Energía configurable",
        "value": "100-360 J (adulto)/10-100J (pediátrico)"
      },
      {
        "label": "Característica",
        "value": "Guía por voz paso a paso durante todo el proceso"
      },
      {
        "label": "Tiempo de carga rápido",
        "value": "<8 s (200 J) / <15 s (360 J)"
      },
      {
        "label": "Característica",
        "value": "Batería de litio de 4500 mAh con vida útil de hasta 7 años en espera"
      },
      {
        "label": "Característica",
        "value": "Registro de eventos y almacenamiento de datos clínicos"
      },
      {
        "label": "Característica",
        "value": "Autoverificación automática (diaria, semanal y mensual)"
      },
      {
        "label": "Característica",
        "value": "Incluye pads (electrodos) multifuncionales adulto/pediátrico"
      }
    ],
    "optional": "Opcional: Maletín de transporte, Gabinete DEA"
  },
  {
    "id": "acclarix-ax2",
    "name": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "ref": "ACCLARIX AX2",
    "brand": "EDAN",
    "category": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "image": "/images/ACCLARIX AX2.png",
    "gallery": [
      "/images/ACCLARIX AX2.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla LCD principal de 15.6\""
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 10.1\""
      },
      {
        "label": "Diseño portátil, flexible y ligero (Peso",
        "value": "4.5 kg)"
      },
      {
        "label": "Característica",
        "value": "Baterías duales que permiten un tiempo de trabajo de 3 horas"
      },
      {
        "label": "Característica",
        "value": "Sistema silencioso con inicio rápido y arranque de 30 segundos"
      },
      {
        "label": "Característica",
        "value": "eOptimized"
      },
      {
        "label": "Característica",
        "value": "Seguimiento automático de PW"
      },
      {
        "label": "Característica",
        "value": "Almacenamiento de alta capacidad con transferencia USB"
      },
      {
        "label": "eTouch",
        "value": "control de gestos de \"deslizar\" eficiente"
      },
      {
        "label": "Característica",
        "value": "Diseño de interfaz de usuario innovador con división precisa de funciones"
      },
      {
        "label": "Característica",
        "value": "Elastografía"
      }
    ]
  },
  {
    "id": "acclarix-ax3",
    "name": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "ref": "ACCLARIX AX3",
    "brand": "EDAN",
    "category": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "image": "/images/ACCLARIX AX3.png",
    "gallery": [
      "/images/ACCLARIX AX3.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla LCD principal de 15.6\""
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 10.1\""
      },
      {
        "label": "Característica",
        "value": "Dos puertos activos de transductor"
      },
      {
        "label": "Diseño portátil, flexible y ligero (Peso",
        "value": "4.5 kg)"
      },
      {
        "label": "Característica",
        "value": "Baterías duales que permiten un tiempo de trabajo de 3 horas"
      },
      {
        "label": "Característica",
        "value": "Sistema silencioso con inicio rápido y arranque de 30 segundos"
      },
      {
        "label": "Característica",
        "value": "eOptimized"
      },
      {
        "label": "Característica",
        "value": "Seguimiento automático de PW"
      },
      {
        "label": "Característica",
        "value": "Almacenamiento de alta capacidad con transferencia USB"
      },
      {
        "label": "eTouch",
        "value": "control de gestos"
      },
      {
        "label": "Característica",
        "value": "3D/4D (Con transductor volumétrico)"
      },
      {
        "label": "Característica",
        "value": "Elastografía"
      }
    ]
  },
  {
    "id": "acclarix-ax8",
    "name": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "ref": "ACCLARIX AX8",
    "brand": "EDAN",
    "category": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "image": "/images/ACCLARIX AX8.png",
    "gallery": [
      "/images/ACCLARIX AX8.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Tecnología de procesamiento de imagen de última generación"
      },
      {
        "label": "Característica",
        "value": "Monitor principal LED de 15.6\""
      },
      {
        "label": "Característica",
        "value": "Pantalla secundaria táctil de 12.3\""
      },
      {
        "label": "Característica",
        "value": "Panel de control hermético a prueba de derrames"
      },
      {
        "label": "Característica",
        "value": "Función Stress Echo"
      },
      {
        "label": "Característica",
        "value": "Disco duro SSD de 1 TB"
      },
      {
        "label": "Característica",
        "value": "Módulo ECG"
      },
      {
        "label": "Característica",
        "value": "WiFi integrado"
      },
      {
        "label": "Característica",
        "value": "Compatible con transductor transesofágico"
      }
    ]
  },
  {
    "id": "acclarix-lx3",
    "name": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "ref": "ACCLARIX LX3",
    "brand": "EDAN",
    "category": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "image": "/images/ACCLARIX LX3.png",
    "gallery": [
      "/images/ACCLARIX LX3.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Monitor LCD de 21.5\" de alta resolución con ángulo de visión multidimensional"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de alta sensibilidad de 14\" que permite un funcionamiento eficaz"
      },
      {
        "label": "Característica",
        "value": "Calentador de gel"
      },
      {
        "label": "Característica",
        "value": "Configuración de 5 puertos para transductores"
      },
      {
        "label": "Característica",
        "value": "Diseño de ajuste de altura ergonómico"
      },
      {
        "label": "Característica",
        "value": "eOptimized, PW auto trace"
      },
      {
        "label": "Característica",
        "value": "eTouch - eficiente control gestual \"Swipe\""
      },
      {
        "label": "Característica",
        "value": "eLearn - software tutorial de fácil uso"
      },
      {
        "label": "Característica",
        "value": "3D/4D (Transductor volumétrico)"
      },
      {
        "label": "Característica",
        "value": "Conectividad DICOM 3.0"
      }
    ]
  },
  {
    "id": "acclarix-lx9",
    "name": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "ref": "ACCLARIX LX9",
    "brand": "EDAN",
    "category": "Ecógrafos (Sistema de Diagnóstico Ultrasonido)",
    "image": "/images/ACCLARIX LX9.png",
    "gallery": [
      "/images/ACCLARIX LX9.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Monitor grado médico LCD de 21.5\" con alta resolución"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de alta sensibilidad inclinable de 14\""
      },
      {
        "label": "Característica",
        "value": "5 puertos activos para transductores"
      },
      {
        "label": "Característica",
        "value": "Panel de control rotatorio y ajustable en altura"
      },
      {
        "label": "Característica",
        "value": "Calentador de gel"
      },
      {
        "label": "Característica",
        "value": "Disco duro SSD de 1 TB"
      },
      {
        "label": "Característica",
        "value": "Función Stress Echo y ECG"
      },
      {
        "label": "Característica",
        "value": "Teclado físico retráctil retroiluminado"
      },
      {
        "label": "Característica",
        "value": "3D/4D (Transductor volumétrico)"
      }
    ]
  },
  {
    "id": "se-3",
    "name": "Electrocardiógrafos",
    "ref": "SE-3",
    "brand": "EDAN",
    "category": "Electrocardiógrafos",
    "image": "/images/SE-3.png",
    "gallery": [
      "/images/SE-3.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Compacto, portátil y liviano"
      },
      {
        "label": "Característica",
        "value": "Pantalla a color de 3.5\""
      },
      {
        "label": "Característica",
        "value": "Plegable hasta 90°"
      },
      {
        "label": "Característica",
        "value": "Visualización de las 12 derivadas"
      },
      {
        "label": "Característica",
        "value": "3 canales de impresión simultánea"
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 6.5 horas de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Modo de trabajo auto/manual"
      },
      {
        "label": "Característica",
        "value": "Software interpretativo SEMIP"
      },
      {
        "label": "Característica",
        "value": "Exportación de estudios de ECG en formatos PDF"
      },
      {
        "label": "Característica",
        "value": "Permite la conexión a través del software de datos SE-1515 (Opcional)"
      }
    ]
  },
  {
    "id": "se-301",
    "name": "Electrocardiógrafos",
    "ref": "SE-301",
    "brand": "EDAN",
    "category": "Electrocardiógrafos",
    "image": "/images/SE-301.png",
    "gallery": [
      "/images/SE-301.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño ultra compacto, portátil y liviano (<1 Kg)"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD táctil de 5\""
      },
      {
        "label": "Característica",
        "value": "WiFi incorporado para una transmisión de datos más eficaz"
      },
      {
        "label": "Característica",
        "value": "Impresora térmica incorporada de alta resolución"
      },
      {
        "label": "Característica",
        "value": "Visualización de las 12 derivadas"
      },
      {
        "label": "Característica",
        "value": "3 canales de impresión simultánea"
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 8.5 horas de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Detección y alerta de desconexión"
      },
      {
        "label": "Característica",
        "value": "Permite la conexión a través del software de datos SE-1515 (Opcional)"
      }
    ]
  },
  {
    "id": "se-601c",
    "name": "Electrocardiógrafos",
    "ref": "SE-601C",
    "brand": "EDAN",
    "category": "Electrocardiógrafos",
    "image": "/images/SE-601C.png",
    "gallery": [
      "/images/SE-601C.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño compacto, portátil y liviano"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD táctil a color de 5.6\""
      },
      {
        "label": "Característica",
        "value": "Visualización de las 12 derivadas"
      },
      {
        "label": "Característica",
        "value": "6 canales de impresión simultánea"
      },
      {
        "label": "Característica",
        "value": "Detección de marcapasos"
      },
      {
        "label": "Característica",
        "value": "Impresora térmica incorporada de alta resolución"
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 5 horas de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Software interpretativo SEMIP"
      },
      {
        "label": "Característica",
        "value": "Almacena hasta 800 datos de paciente"
      },
      {
        "label": "Característica",
        "value": "Permite la conexión a través de software de datos SE-1515 (Opcional)"
      }
    ]
  },
  {
    "id": "se-1200-express",
    "name": "Electrocardiógrafos",
    "ref": "SE-1200 EXPRESS",
    "brand": "EDAN",
    "category": "Electrocardiógrafos",
    "image": "/images/SE-1200 EXPRESS.png",
    "gallery": [
      "/images/SE-1200 EXPRESS.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla LCD táctil de 8\""
      },
      {
        "label": "Característica",
        "value": "12 canales de visualización e impresión simultánea"
      },
      {
        "label": "Característica",
        "value": "Detección de marcapasos"
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 8 horas de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Alarma visual de desconexión de electrodos"
      },
      {
        "label": "Característica",
        "value": "Software interpretativo Semip"
      },
      {
        "label": "Característica",
        "value": "Teclado alfanumérico"
      },
      {
        "label": "Característica",
        "value": "Permite la conexión a través del software de datos SE-1515 (Opcional)"
      }
    ]
  },
  {
    "id": "se-1201-pro",
    "name": "Electrocardiógrafos",
    "ref": "SE-1201 PRO",
    "brand": "EDAN",
    "category": "Electrocardiógrafos",
    "image": "/images/SE-1201 PRO.png",
    "gallery": [
      "/images/SE-1201 PRO.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil LCD de 10,1\" con resolución 1920 x 1200 px"
      },
      {
        "label": "Característica",
        "value": "Almacenamiento interno > 100.000 estudios"
      },
      {
        "label": "Admite múltiples formatos",
        "value": "PDF, JPG, BMP, PNG, TIFF"
      },
      {
        "label": "Característica",
        "value": "Batería recargable de ion-litio con autonomía aproximada de 3 a 4 horas de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Imprime 12 canales y muestra simultáneamente las 12 derivaciones en pantalla en tiempo real con alta precisión"
      },
      {
        "label": "Característica",
        "value": "Conectividad WiFi, Bluetooth"
      },
      {
        "label": "Característica",
        "value": "Compatibilidad con software de manejo de datos SE-1515 (Opcional)"
      }
    ]
  },
  {
    "id": "dt-400s",
    "name": "Electrobisturí",
    "ref": "DT-400S",
    "brand": "DAIWHA/MEDITOM",
    "category": "Electrobisturí",
    "image": "/images/DT-400S.png",
    "gallery": [
      "/images/DT-400S.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Potencia de hasta 400 W"
      },
      {
        "label": "Tres entradas para lápiz",
        "value": "2 monopolares y una bipolar"
      },
      {
        "label": "Característica",
        "value": "Tres alarmas sonoras diferenciadas según el modo de operación"
      },
      {
        "label": "Característica",
        "value": "Memoria de usuario (0 a 9) para guardar configuraciones personalizadas"
      },
      {
        "label": "Múltiples modos avanzados de corte y coagulación",
        "value": "4 modos de corte monopolar, 3 modos de coagulación monopolar, 1 o 2 modos de corte/coagulación bipolar"
      },
      {
        "label": "Característica",
        "value": "Sistema de seguridad ANPM / D.R.M. con monitoreo automático de la placa del paciente"
      },
      {
        "label": "Característica",
        "value": "Tres displays independientes para control de corte y coagulación"
      }
    ]
  },
  {
    "id": "dt-200s",
    "name": "Electrobisturí",
    "ref": "DT-200S",
    "brand": "DAIWHA/MEDITOM",
    "category": "Electrobisturí",
    "image": "/images/DT-200S.png",
    "gallery": [
      "/images/DT-200S.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Máxima potencia de salida para corte monopolar 200 W"
      },
      {
        "label": "Dos entradas para lápiz",
        "value": "una monopolar y una bipolar"
      },
      {
        "label": "Característica",
        "value": "Tres alarmas sonoras diferenciadas según el modo de operación"
      },
      {
        "label": "Característica",
        "value": "2 modos de corte/coagulación monopolar, 1 modo de corte/coagulación bipolar"
      },
      {
        "label": "Característica",
        "value": "Memoria de usuario (hasta 9 configuraciones)"
      },
      {
        "label": "Característica",
        "value": "Diseño compacto e interfaz intuitiva"
      },
      {
        "label": "Característica",
        "value": "Sistema de seguridad ANPM/D.R.M. con monitoreo automático de la placa del paciente"
      }
    ]
  },
  {
    "id": "prueba-de-esfuerzo-se-1515",
    "name": "Holters y Prueba de Esfuerzo",
    "ref": "Prueba de Esfuerzo SE-1515",
    "brand": "EDAN",
    "category": "Holters y Prueba de Esfuerzo",
    "image": "/images/SE-1515.png",
    "gallery": [
      "/images/SE-1515.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Transmisión inalámbrica (Bluetooth)"
      },
      {
        "label": "Característica",
        "value": "Trabaja en PC y Tablet"
      },
      {
        "label": "Característica",
        "value": "Generación automática de informes y vistas previas"
      },
      {
        "label": "Característica",
        "value": "Compatible con Trotadora TMX-428"
      },
      {
        "label": "Característica",
        "value": "Análisis automático de arritmias"
      },
      {
        "label": "Característica",
        "value": "12 derivadas adquiridas y visualizadas"
      },
      {
        "label": "Característica",
        "value": "Informes en formatos XML, PDF, DOC o JPG transferidos por correo electrónico"
      }
    ]
  },
  {
    "id": "trotadora-tmx-428",
    "name": "Holters y Prueba de Esfuerzo",
    "ref": "Trotadora TMx-428",
    "brand": "SCHILLER",
    "category": "Holters y Prueba de Esfuerzo",
    "image": "/images/TMX-428.png",
    "gallery": [
      "/images/TMX-428.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Capacidad máxima de soporte de 227 kg"
      },
      {
        "label": "Característica",
        "value": "Conectividad con prueba de esfuerzo SE-1515"
      },
      {
        "label": "Característica",
        "value": "Rango de elevación de 0° a 25°"
      },
      {
        "label": "Característica",
        "value": "Parada de emergencia"
      },
      {
        "label": "Característica",
        "value": "Rango de velocidad de 0,2 a 24 km/h"
      }
    ]
  },
  {
    "id": "sistema-holter-se-2003",
    "name": "Holters y Prueba de Esfuerzo",
    "ref": "Sistema Holter SE-2003",
    "brand": "EDAN",
    "category": "Holters y Prueba de Esfuerzo",
    "image": "/images/SE-2003.png",
    "gallery": [
      "/images/SE-2003.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Incluye software"
      },
      {
        "label": "Característica",
        "value": "3 canales de grabación digital"
      },
      {
        "label": "Característica",
        "value": "Pantalla a color con visualización de forma de onda"
      },
      {
        "label": "Característica",
        "value": "Diseño ligero, impermeable y compacto (50 g)"
      },
      {
        "label": "Característica",
        "value": "Resistencia IP27 a prueba de agua y polvo"
      },
      {
        "label": "Característica",
        "value": "Detección de marcapasos"
      },
      {
        "label": "Característica",
        "value": "Frecuencias de muestreo ajustables"
      }
    ]
  },
  {
    "id": "monitos-de-presi-n-arterial-ambulatorio-mapa-sa-10",
    "name": "Holters y Prueba de Esfuerzo",
    "ref": "Monitos de Presión Arterial Ambulatorio (MAPA) SA-10",
    "brand": "EDAN",
    "category": "Holters y Prueba de Esfuerzo",
    "image": "/images/SA-10.png",
    "gallery": [
      "/images/SA-10.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla a color para la monitorización de presión sanguínea de 24 horas"
      },
      {
        "label": "Característica",
        "value": "Incluye software que permite almacenamiento, análisis de datos y generación de informes"
      },
      {
        "label": "Característica",
        "value": "Transmisión inalámbrica"
      },
      {
        "label": "Característica",
        "value": "Diseño ligero <170 g"
      },
      {
        "label": "Característica",
        "value": "Memoria interna para almacenar hasta 600 NIBP"
      },
      {
        "label": "Característica",
        "value": "Resistencia IP22 a prueba de agua y polvo"
      },
      {
        "label": "Característica",
        "value": "Amplio rango de medición de presión arterial desde 10 mmHg hasta 290 mmHg"
      }
    ]
  },
  {
    "id": "yp-3000",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "YP-3000",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/YP-3000.png",
    "gallery": [
      "/images/YP-3000.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Sistema multifuncional que combina incubadora y calentador radiante"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 8\""
      },
      {
        "label": "MODO CALENTADOR",
        "value": "Tres modos de control: pre-calentamiento, manual y modo bebé. Rango de temperatura: 32°C-37°C."
      },
      {
        "label": "MODO INCUBADORA",
        "value": "Dos modos: transporte y modo bebé. Rango temperatura aire: 25°C-37°C. Rango temperatura bebé: 34°C-37°C."
      },
      {
        "label": "Control de rango de humedad",
        "value": "0% HR-90% HR"
      },
      {
        "label": "Característica",
        "value": "Sistema de control de la concentración de oxígeno"
      },
      {
        "label": "Característica",
        "value": "Sistema de ajuste de altura vertical"
      },
      {
        "label": "Característica",
        "value": "Inclinación de cuna ±12°"
      },
      {
        "label": "Característica",
        "value": "Portachasis para toma de RX"
      }
    ],
    "optional": "Lámpara de observación"
  },
  {
    "id": "yp-920",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "YP-920",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/YP-920.png",
    "gallery": [
      "/images/YP-920.png"
    ],
    "specs": [
      {
        "label": "Modo de control",
        "value": "modo aire y bebé controlado por microprocesador"
      },
      {
        "label": "Característica",
        "value": "Sistema doble cabina para mejor circulación de aire"
      },
      {
        "label": "Control de rango de humedad",
        "value": "0% HR-90% HR"
      },
      {
        "label": "Característica",
        "value": "Sistema de Trendelenburg ajustable"
      },
      {
        "label": "Rango de control de temperatura del aire",
        "value": "20°C-37°C, del bebé: 34°C-37°C"
      },
      {
        "label": "Característica",
        "value": "Precisión del sensor de temperatura de piel ±0,2°C"
      },
      {
        "label": "Inclinación de la cuna",
        "value": "±10°"
      },
      {
        "label": "Característica",
        "value": "Alarmas audibles y visuales"
      }
    ],
    "optional": "Opcional: Inclinación ±12°, Balanza pesa bebé"
  },
  {
    "id": "yp-800",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "YP-800",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/YP-800.png",
    "gallery": [
      "/images/YP-800.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil LCD a color de 10\""
      },
      {
        "label": "Característica",
        "value": "Campana de doble pared y cortina"
      },
      {
        "label": "Característica",
        "value": "Inclinación ajustable de la cuna"
      },
      {
        "label": "Dos modos de control",
        "value": "modo aire y modo bebé"
      },
      {
        "label": "Característica",
        "value": "Sistema de monitoreo de doble sensor de temperatura de la piel"
      },
      {
        "label": "Característica",
        "value": "Sistema de báscula (opcional)"
      },
      {
        "label": "Característica",
        "value": "Diseño de doble seguro de la puerta principal"
      },
      {
        "label": "Característica",
        "value": "Sistema de protección independiente contra sobre-temperatura"
      },
      {
        "label": "Puerto RS232",
        "value": "Transmisión de datos"
      },
      {
        "label": "Característica",
        "value": "Alarmas audibles y visibles"
      },
      {
        "label": "Característica",
        "value": "Sistema electrónico de ajuste de altura"
      },
      {
        "label": "Característica",
        "value": "Sistema de control de humedad"
      }
    ],
    "optional": "Opcional: SpO2, sistema de control de O2"
  },
  {
    "id": "ti-2000",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "TI-2000",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/TI-2000.png",
    "gallery": [
      "/images/TI-2000.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Sistema doble cabina para mejor circulación de aire"
      },
      {
        "label": "Dos modos de control de temperatura",
        "value": "aire y bebé"
      },
      {
        "label": "Característica",
        "value": "Humidificación pasiva"
      },
      {
        "label": "Rango de control aire",
        "value": "25°C-37°C, bebé: 34°C-37°C"
      },
      {
        "label": "Característica",
        "value": "Alarmas visuales y audibles"
      },
      {
        "label": "Característica",
        "value": "Batería para 90 minutos de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Permite corriente (AC/DC) para uso de ambulancias"
      },
      {
        "label": "Característica",
        "value": "Cuenta con soportes, cilindros vacíos y atril"
      }
    ],
    "optional": "Opcional: Batería adicional para 180 min, control de humedad, carrito de ambulancia"
  },
  {
    "id": "ti-2100b",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "TI-2100B",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/TI-2100B.png",
    "gallery": [
      "/images/TI-2100B.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil TFT LCD de 8.8 pulgadas"
      },
      {
        "label": "Característica",
        "value": "Campana con doble pared termoaislante"
      },
      {
        "label": "Característica",
        "value": "Batería de litio de alta capacidad (hasta 6 horas ininterrumpidas)"
      },
      {
        "label": "Característica",
        "value": "Lámpara superior de observación incorporada"
      },
      {
        "label": "Característica",
        "value": "Colchón viscoelástico o con dispersión de presión"
      },
      {
        "label": "Característica",
        "value": "Triple protección independiente contra sobretemperatura"
      },
      {
        "label": "Característica",
        "value": "Monitorización de control de oxígeno, saturación, hemoglobina (opcional)"
      },
      {
        "label": "Característica",
        "value": "Sistema de control de humedad"
      }
    ]
  },
  {
    "id": "hkn-93c-l-mpara-de-calor-radiante",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "HKN-93C (Lámpara de calor radiante)",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/HKN-93C.png",
    "gallery": [
      "/images/HKN-93C.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil de 10.4\""
      },
      {
        "label": "Tres modos de control",
        "value": "pre-calentamiento, manual y modo bebé"
      },
      {
        "label": "Rango de control de temperatura del bebé",
        "value": "34.5°C-37°C"
      },
      {
        "label": "Característica",
        "value": "Lámpara de fototerapia"
      },
      {
        "label": "Característica",
        "value": "Medición de parámetro de SpO2"
      },
      {
        "label": "Característica",
        "value": "Unidad de succión (Venturi)"
      },
      {
        "label": "Característica",
        "value": "Unidad de reanimación infantil"
      },
      {
        "label": "Característica",
        "value": "Sistema de ajuste de altura vertical"
      },
      {
        "label": "Característica",
        "value": "Inclinación de cuna ±12°"
      },
      {
        "label": "Característica",
        "value": "Portachasis para toma de RX"
      }
    ],
    "optional": "Balanza, humidificador, SpO2 Masimo, Lámpara de observación"
  },
  {
    "id": "hkn-9010",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "HKN-9010",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/HKN-9010.png",
    "gallery": [
      "/images/HKN-9010.png"
    ],
    "specs": [
      {
        "label": "Tres modos de control",
        "value": "pre-calentamiento, manual y modo bebé"
      },
      {
        "label": "Rango de control de la temperatura del bebé",
        "value": "34°C-38°C"
      },
      {
        "label": "Característica",
        "value": "Controlada por micro-procesador"
      },
      {
        "label": "Característica",
        "value": "Inclinación de cuna ±10°"
      },
      {
        "label": "Característica",
        "value": "Portachasis para toma de RX"
      },
      {
        "label": "Característica",
        "value": "Dos gabinetes para almacenamiento"
      }
    ]
  },
  {
    "id": "hkn-93b",
    "name": "Incubadoras y Lámparas de Calor Radiante",
    "ref": "HKN-93B",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Incubadoras y Lámparas de Calor Radiante",
    "image": "/images/HKN-93B.png",
    "gallery": [
      "/images/HKN-93B.png"
    ],
    "specs": [
      {
        "label": "Tres modos de control",
        "value": "pre-calentamiento, manual y modo bebe"
      },
      {
        "label": "Rango de control de la temperatura del bebé",
        "value": "34°C-38°C"
      },
      {
        "label": "Característica",
        "value": "Lámpara de fototerapia"
      },
      {
        "label": "Característica",
        "value": "Controladas por micro-ordenador"
      },
      {
        "label": "Característica",
        "value": "Portachasis para toma de RX"
      },
      {
        "label": "Característica",
        "value": "Inclinación de cuna ±12°"
      },
      {
        "label": "Característica",
        "value": "Dos gabinetes para almacenamiento"
      }
    ],
    "optional": "Opcional: Sistema de ajuste de altura, Sistema de Pesaje"
  },
  {
    "id": "navi-60",
    "name": "Iluminador de Venas",
    "ref": "NAVI-60",
    "brand": "MEDCAPTAIN",
    "category": "Iluminador de Venas",
    "image": "/images/NAVI-60.png",
    "gallery": [
      "/images/NAVI-60.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Colores de proyección ajustables"
      },
      {
        "label": "Característica",
        "value": "Recargable (2.5 horas de uso continuo)"
      },
      {
        "label": "Característica",
        "value": "Imagen de las venas en tiempo real sin contacto"
      },
      {
        "label": "Característica",
        "value": "Detección de profundidad de la vena"
      },
      {
        "label": "Diseño compacto y liviano",
        "value": "operación con una sola mano"
      },
      {
        "label": "Característica",
        "value": "Alta definición de imagen y contraste venoso"
      },
      {
        "label": "Característica",
        "value": "Compatible con todos los tonos de piel"
      },
      {
        "label": "Característica",
        "value": "Incluye soporte para transporte"
      }
    ]
  },
  {
    "id": "xhz-90p",
    "name": "Lámparas de Fototerapia",
    "ref": "XHZ-90P",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Lámparas de Fototerapia",
    "image": "/images/XHZ-90P.png",
    "gallery": [
      "/images/XHZ-90P.png"
    ],
    "specs": [
      {
        "label": "Fuente de luz",
        "value": "LED azul mezclada con amarilla para suavizar la irradiación"
      },
      {
        "label": "Característica",
        "value": "Ajuste de nivel de intensidad de radiación (Alto y bajo)"
      },
      {
        "label": "Ajuste de altura del módulo",
        "value": "1350mm-1680mm"
      },
      {
        "label": "Vida útil de la fuente de luz",
        "value": "20.000 horas"
      },
      {
        "label": "Longitud de onda luz azul",
        "value": "420nm-470nm, amarilla: 580nm-595nm"
      },
      {
        "label": "Característica",
        "value": "Cuenta con temporizador para tratamiento"
      }
    ]
  },
  {
    "id": "xhz-90l",
    "name": "Lámparas de Fototerapia",
    "ref": "XHZ-90L",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Lámparas de Fototerapia",
    "image": "/images/XHZ-90L.png",
    "gallery": [
      "/images/XHZ-90L.png"
    ],
    "specs": [
      {
        "label": "Fuente de luz",
        "value": "LED azul"
      },
      {
        "label": "Ajuste de altura del módulo",
        "value": "1350mm-1650mm"
      },
      {
        "label": "Vida útil de la fuente de luz",
        "value": "5.000 horas"
      },
      {
        "label": "Característica",
        "value": "Longitud de onda de la luz azul 420nm-470nm"
      },
      {
        "label": "Característica",
        "value": "Cuenta con temporizador para tratamiento"
      }
    ]
  },
  {
    "id": "xhz-90",
    "name": "Lámparas de Fototerapia",
    "ref": "XHZ-90",
    "brand": "NINGBO DAVID MEDICAL",
    "category": "Lámparas de Fototerapia",
    "image": "/images/XHZ-90.png",
    "gallery": [
      "/images/XHZ-90.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Iluminación halógena"
      },
      {
        "label": "Característica",
        "value": "Temporizador incorporado (cronómetro)"
      },
      {
        "label": "Característica",
        "value": "Cabezal y altura ajustables"
      },
      {
        "label": "Característica",
        "value": "Diseño compacto y móvil"
      },
      {
        "label": "Característica",
        "value": "Funcionamiento con bajo nivel de ruido"
      },
      {
        "label": "Característica",
        "value": "Compatibilidad con incubadoras"
      },
      {
        "label": "Característica",
        "value": "Emisión de luz azul concentrada en 436 nm ±5 nm"
      }
    ]
  },
  {
    "id": "ls800-750",
    "name": "Lámparas de Cirugía",
    "ref": "LS800-750",
    "brand": "BENQ",
    "category": "Lámparas de Cirugía",
    "image": "/images/LS800-750.png",
    "gallery": [
      "/images/LS800-750.png",
      "/images/LS800-750-1.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Vida útil del panel de iluminación de 50.000 horas"
      },
      {
        "label": "Característica",
        "value": "Luminancia de 120.000 Lux en el primer satélite y 160.000 Lux en el segundo satélite"
      },
      {
        "label": "Característica",
        "value": "Temperatura del color 4300 K"
      },
      {
        "label": "Característica",
        "value": "Control digital de intensidad en cada satélite"
      },
      {
        "label": "Característica",
        "value": "Sistema de compensación de luz inteligente"
      },
      {
        "label": "Característica",
        "value": "Rotación 360°"
      },
      {
        "label": "Característica",
        "value": "Luz LED o fría para proteger tejidos del paciente"
      }
    ],
    "optional": "Cámara de Video (incorporada), Pantalla grado médico"
  },
  {
    "id": "ls800-550",
    "name": "Lámparas de Cirugía",
    "ref": "LS800-550",
    "brand": "BENQ",
    "category": "Lámparas de Cirugía",
    "image": "/images/LS800-550.png",
    "gallery": [
      "/images/LS800-550.png",
      "/images/LS800-550-1.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Vida útil del panel de iluminación de 50.000 horas"
      },
      {
        "label": "Característica",
        "value": "Luminancia de 120.000 Lux por satélite"
      },
      {
        "label": "Característica",
        "value": "Temperatura del color 4300 K"
      },
      {
        "label": "Característica",
        "value": "Control digital de intensidad en cada satélite"
      },
      {
        "label": "Característica",
        "value": "Sistema de compensación de luz inteligente"
      },
      {
        "label": "Característica",
        "value": "Rotación 360°"
      },
      {
        "label": "Característica",
        "value": "Luz LED o fría para proteger tejidos del paciente"
      }
    ]
  },
  {
    "id": "olm-9550-l-mpara-piel-tica",
    "name": "Lámparas de Cirugía",
    "ref": "OLM-9550 (Lámpara Pielítica)",
    "brand": "BENQ",
    "category": "Lámparas de Cirugía",
    "image": "/images/OLM-9550.png",
    "gallery": [
      "/images/OLM-9550.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Fuente de poder y respaldo de batería"
      },
      {
        "label": "Característica",
        "value": "Luminancia ajustable de 40.000 a 160.000 lux"
      },
      {
        "label": "Vida útil de los LED",
        "value": "≥ 70.000 horas"
      },
      {
        "label": "Característica",
        "value": "Cubiertas superiores en aleación de aluminio para mejor disipación térmica"
      },
      {
        "label": "Característica",
        "value": "Sistema de transporte con ruedas y frenos de bloqueo"
      },
      {
        "label": "Característica",
        "value": "Mango desmontable y esterilizable en autoclave"
      },
      {
        "label": "Característica",
        "value": "Índice de reproducción cromática Ra ≈ 98"
      }
    ]
  },
  {
    "id": "boaray-700",
    "name": "Máquinas de Anestesia",
    "ref": "BOARAY 700",
    "brand": "PRUNUS",
    "category": "Máquinas de Anestesia",
    "image": "/images/BOARAY 700.png",
    "gallery": [
      "/images/BOARAY 700.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla giratoria táctil a color de 15\""
      },
      {
        "label": "Tipos de paciente",
        "value": "adulto y pediátrico"
      },
      {
        "label": "Modos de ventilación",
        "value": "Manual/Standby, VCV, PCV, PRVC, CPAP/PSV, SIMV + VCV, SIMV + PCV, SIMV + PRVC"
      },
      {
        "label": "Característica",
        "value": "PEEP electrónica, Monitoreo FiO2"
      },
      {
        "label": "Característica",
        "value": "Sistema de calefacción integrado fabricado en PPSU"
      },
      {
        "label": "Tipo de gas",
        "value": "Aire, O2 y N2O"
      },
      {
        "label": "Característica",
        "value": "Batería para 60 minutos de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Soporte para 2 Vaporizadores montaje tipo Selectatec"
      }
    ],
    "optional": "Opcional: Módulo de Multigas, Módulo SpO2, Módulo SideStream de Co2"
  },
  {
    "id": "boaray-600d",
    "name": "Máquinas de Anestesia",
    "ref": "BOARAY 600D",
    "brand": "PRUNUS",
    "category": "Máquinas de Anestesia",
    "image": "/images/BOARAY 600D.png",
    "gallery": [
      "/images/BOARAY 600D.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla a color 8.4\""
      },
      {
        "label": "Tipos de paciente",
        "value": "adulto y pediátrico"
      },
      {
        "label": "Modos de ventilación",
        "value": "Manual/Standby, (VCV), (PCV), SIMV(V)+PS, SIMV(P)+PS, PRVC, PSV"
      },
      {
        "label": "Característica",
        "value": "PEEP electrónica, Monitoreo FiO2"
      },
      {
        "label": "Característica",
        "value": "Sistema de calefacción integrado fabricado en PPSU"
      },
      {
        "label": "Tipo de gas",
        "value": "Aire, O2 y N2O"
      },
      {
        "label": "Característica",
        "value": "Batería para 60 minutos de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Soporta medición de CO2"
      },
      {
        "label": "Característica",
        "value": "Soporte para 2 Vaporizadores montaje tipo Selectatec"
      }
    ],
    "optional": "Opcional: Módulo SideStream de CO2, Vaporizadores"
  },
  {
    "id": "pumila-750d",
    "name": "Máquinas de Anestesia",
    "ref": "PUMILA 750D",
    "brand": "PRUNUS",
    "category": "Máquinas de Anestesia",
    "image": "/images/PUMILA 750D.png",
    "gallery": [
      "/images/PUMILA 750D.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil a color de 15\""
      },
      {
        "label": "Tipos de paciente",
        "value": "adulto y pediátrico"
      },
      {
        "label": "Característica",
        "value": "Volumen Corriente mínimo de 10ml"
      },
      {
        "label": "Característica",
        "value": "PEEP electrónica, Monitoreo FiO2"
      },
      {
        "label": "Característica",
        "value": "Sistema de calefacción integrado fabricado en PPSU"
      },
      {
        "label": "Tipo de gas",
        "value": "Aire, O2 y N2O"
      },
      {
        "label": "Característica",
        "value": "Batería para 90 minutos de uso continuo"
      },
      {
        "label": "Característica",
        "value": "Soporte para 2 Vaporizadores montaje tipo Selectatec"
      },
      {
        "label": "Característica",
        "value": "Mesa de trabajo plegable"
      },
      {
        "label": "Modos de ventilación",
        "value": "Manual/Standby, VCV, PCV, PRVC, CPAP/PSV, SIMV + VCV, SIMV + PCV, SIMV + PRVC"
      }
    ],
    "optional": "Opcional: Módulo de Multigas, Vaporizadores"
  },
  {
    "id": "dr-max-7000skb",
    "name": "Mesas de Cirugía",
    "ref": "DR. MAX 7000SKB",
    "brand": "DR. MAX",
    "category": "Mesas de Cirugía",
    "image": "/images/7000SKB.png",
    "gallery": [
      "/images/7000SKB.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Sistema Electrohidráulico integrado"
      },
      {
        "label": "Característica",
        "value": "Fabricada en acero inoxidable"
      },
      {
        "label": "Característica",
        "value": "Alta capacidad de carga hasta 360 Kg"
      },
      {
        "label": "Característica",
        "value": "Uso general o cirugías específicas (rodilla, hombro, ortopédicas, abdominales, etc.)"
      },
      {
        "label": "Característica",
        "value": "Hasta 100 accionamientos con Batería interna"
      },
      {
        "label": "Característica",
        "value": "Proporciona movimiento longitudinal para la toma de RX con arco en C"
      },
      {
        "label": "Característica",
        "value": "Movimiento posición cero con un solo accionamiento"
      }
    ],
    "optional": "Opcional: Accesorios ortopedia, parto/urología, neurocirugía, soporte de cuerpo, accionamiento manual"
  },
  {
    "id": "not-5600skf",
    "name": "Mesas de Cirugía",
    "ref": "NOT-5600SKF",
    "brand": "BENQ",
    "category": "Mesas de Cirugía",
    "image": "/images/NOT-5600SKF.png",
    "gallery": [
      "/images/NOT-5600SKF.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Sistema Electrohidráulico integrado - Fabricación en acero inoxidable"
      },
      {
        "label": "Característica",
        "value": "Capacidad de peso máxima de 273Kg - Radio-traslúcida para toma de RX"
      },
      {
        "label": "Característica",
        "value": "Proporciona movimiento longitudinal - Es compatible con accesorios de ortopedia"
      },
      {
        "label": "Característica",
        "value": "Rango de altura de 760 mm-1070 mm"
      },
      {
        "label": "Característica",
        "value": "Uso general o cirugías específicas"
      },
      {
        "label": "Característica",
        "value": "Movimiento de riñonera o puente riñón"
      },
      {
        "label": "Característica",
        "value": "Batería interna integrada"
      }
    ],
    "optional": "Opcional: Accesorio ortopedia, Accesorio parto/urología"
  },
  {
    "id": "f6-express",
    "name": "Monitores Fetales",
    "ref": "F6 Express",
    "brand": "EDAN",
    "category": "Monitores Fetales",
    "image": "/images/MONITOR FETAL F6 EXPRESS.png",
    "gallery": [
      "/images/MONITOR FETAL F6 EXPRESS.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla TFT plegable de 10.1\""
      },
      {
        "label": "Característica",
        "value": "Monitoreo de parámetros maternos (ECG, SPO2, TEMP, NIBP)"
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 2 horas de trabajo continuo"
      },
      {
        "label": "Característica",
        "value": "Detección gemelar, Detección de movimiento fetal automático"
      },
      {
        "label": "Característica",
        "value": "Verificación de superposición de señales"
      },
      {
        "label": "Característica",
        "value": "Transductores FHR impermeables de alta sensibilidad"
      },
      {
        "label": "Característica",
        "value": "Vista previa de tendencias, Múltiples modos de pantalla"
      }
    ],
    "optional": "Opcional: Monitorización invasiva DECG e IUP, Central de monitoreo"
  },
  {
    "id": "f3",
    "name": "Monitores Fetales",
    "ref": "F3",
    "brand": "BENQ",
    "category": "Monitores Fetales",
    "image": "/images/MONITOR FETAL F3.png",
    "gallery": [
      "/images/MONITOR FETAL F3.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla TFT a color de 5.6\""
      },
      {
        "label": "Característica",
        "value": "Transductor FHR de 8 cristales (a prueba de agua)"
      },
      {
        "label": "Característica",
        "value": "Interface USB para la transmisión de datos"
      },
      {
        "label": "Característica",
        "value": "Detección de movimiento fetal automático"
      },
      {
        "label": "Modos de visualización en pantalla",
        "value": "Ondas numéricas y mixtas"
      },
      {
        "label": "Característica",
        "value": "Detección gemelar incorporada"
      }
    ],
    "optional": "Opcional: Monitorización invasiva DECG e IUP, Central de monitoreo, Análisis CTG"
  },
  {
    "id": "f9-express",
    "name": "Monitores Fetales",
    "ref": "F9 EXPRESS",
    "brand": "EDAN",
    "category": "Monitores Fetales",
    "image": "/images/MONITOR FETAL F9 EXPRESS.png",
    "gallery": [
      "/images/MONITOR FETAL F9 EXPRESS.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil de 12.1\" de alta resolución, 60° grados de inclinación"
      },
      {
        "label": "Característica",
        "value": "Transductores impermeables de 12 cristales"
      },
      {
        "label": "Parámetros fetales",
        "value": "FHR Gemelar, TOCO, Análisis CTG, MFM, AFM"
      },
      {
        "label": "Parámetros maternos",
        "value": "NIBP, SpO2, HR, ECG, Temp"
      }
    ],
    "optional": "Opcional: DECG, IUP"
  },
  {
    "id": "f15-air",
    "name": "Monitores Fetales",
    "ref": "F15 AIR",
    "brand": "EDAN",
    "category": "Monitores Fetales",
    "image": "/images/MONITOR FETAL F15 AIR.png",
    "gallery": [
      "/images/MONITOR FETAL F15 AIR.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla LCD táctil de 15.6\" con interfaz intuitiva"
      },
      {
        "label": "Característica",
        "value": "Transductores inalámbricos ligeros (<10g), impermeables de 12 cristales"
      },
      {
        "label": "Característica",
        "value": "Sistema de análisis CTG profesional"
      },
      {
        "label": "Característica",
        "value": "Monitoreo continuo"
      },
      {
        "label": "Característica",
        "value": "Lectura de frecuencia cardíaca de la madre"
      },
      {
        "label": "Característica",
        "value": "Memoria de respaldo de los transductores de 15 min"
      },
      {
        "label": "Característica",
        "value": "Rango de los transductores de 50 metros (aproximadamente)"
      },
      {
        "label": "Característica",
        "value": "Monitorización de gemelos y trillizos (Opcional)"
      },
      {
        "label": "Característica",
        "value": "Carga inalámbrica de los transductores"
      }
    ],
    "optional": "Opcional: DECG-IUP, Medición materna inalámbrica"
  },
  {
    "id": "monitor-x8",
    "name": "Monitores de Paciente",
    "ref": "MONITOR X8",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR X8.png",
    "gallery": [
      "/images/MONITOR X8.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño ligero, delgado y compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla TFT táctil a color de 8\""
      },
      {
        "label": "Característica",
        "value": "13 formas de ondas máximo"
      },
      {
        "label": "Característica",
        "value": "Batería de litio recargable de 4 horas"
      },
      {
        "label": "Característica",
        "value": "5 parámetros (ECG, SpO2, NIBP, RESP, 1-TEMP)"
      },
      {
        "label": "Característica",
        "value": "Visualización de múltiples ondas en pantalla"
      },
      {
        "label": "Característica",
        "value": "Detección de marcapasos"
      }
    ],
    "optional": "Opcional: CO2, Central de monitoreo"
  },
  {
    "id": "monitor-x12",
    "name": "Monitores de Paciente",
    "ref": "MONITOR X12",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR X12.png",
    "gallery": [
      "/images/MONITOR X12.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Diseño ligero, delgado y compacto"
      },
      {
        "label": "Característica",
        "value": "Pantalla TFT a color de 12.1\""
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 4 horas"
      },
      {
        "label": "Característica",
        "value": "Diseño Slim (delgado)"
      },
      {
        "label": "Característica",
        "value": "5 parámetros básicos de paciente (ECG, SpO2, NIBP, RESP, 2-TEMP)"
      },
      {
        "label": "Característica",
        "value": "13 Formas de ondas máximo"
      },
      {
        "label": "Característica",
        "value": "Comunicación bidireccional con la Central de monitoreo (Opcional)"
      },
      {
        "label": "Característica",
        "value": "Detección de Marcapasos"
      }
    ],
    "optional": "Opcional: IBP, Central de monitoreo"
  },
  {
    "id": "monitor-im50",
    "name": "Monitores de Paciente",
    "ref": "Monitor iM50",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR IM50.png",
    "gallery": [
      "/images/MONITOR IM50.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil a color de 8.4\""
      },
      {
        "label": "Característica",
        "value": "Batería recargable de 4,5 horas, ideal para transporte"
      },
      {
        "label": "Característica",
        "value": "5 parámetros de paciente (ECG, SpO2, NIBP, RESP, 2-TEMP)"
      },
      {
        "label": "Característica",
        "value": "Visualización de múltiples ondas en pantalla"
      },
      {
        "label": "Característica",
        "value": "Análisis de arritmias"
      },
      {
        "label": "Característica",
        "value": "Conexión a la central de monitoreo"
      },
      {
        "label": "Característica",
        "value": "Detección de marcapasos"
      }
    ],
    "optional": "Opcional: CO2-Central de monitoreo, Llamada de enfermería"
  },
  {
    "id": "monitor-im3s",
    "name": "Monitores de Paciente",
    "ref": "Monitor iM3s",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR IM3S.png",
    "gallery": [
      "/images/MONITOR IM3S.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil full color de 5\""
      },
      {
        "label": "Característica",
        "value": "Compatible con baterías recargables y AA desechables"
      },
      {
        "label": "Característica",
        "value": "Almacenamiento interno para ≥20.000 registros de paciente"
      },
      {
        "label": "Característica",
        "value": "Diseño compacto, ligero y portátil"
      },
      {
        "label": "Característica",
        "value": "Apto para paciente adulto, pediátrico y neonatal"
      },
      {
        "label": "Característica",
        "value": "Alarmas audibles y visibles"
      }
    ],
    "optional": "Opcional: Temperatura, Central de monitoreo WiFi, Impresora Térmica"
  },
  {
    "id": "monitor-im70",
    "name": "Monitores de Paciente",
    "ref": "Monitor iM70",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR IM70.png",
    "gallery": [
      "/images/MONITOR IM70.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil a color de 12.1\""
      },
      {
        "label": "Característica",
        "value": "Batería de litio recargable de 3.5 horas"
      },
      {
        "label": "Característica",
        "value": "5 parámetros de paciente (ECG, SpO2, NIBP, RESP, 2 TEMP)"
      },
      {
        "label": "Característica",
        "value": "Visualización de múltiples ondas en pantalla"
      },
      {
        "label": "Característica",
        "value": "Detección de marcapasos, Análisis de segmentos"
      },
      {
        "label": "Característica",
        "value": "Conexión a central de monitoreo"
      }
    ],
    "optional": "Opcional: 2IBP + CO, CO2, Multigas, Central de monitoreo"
  },
  {
    "id": "monitor-elite-v5",
    "name": "Monitores de Paciente",
    "ref": "MONITOR ELITE V5",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR ELITE V5.png",
    "gallery": [
      "/images/MONITOR ELITE V5.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla TFT-LCD a color de 12.1\""
      },
      {
        "label": "Característica",
        "value": "2 Baterías de litio recargable para hasta 10 horas de operación"
      },
      {
        "label": "Característica",
        "value": "Visualización de hasta 13 formas de ondas"
      },
      {
        "label": "Parámetros",
        "value": "ECG 3/5 derivaciones, RESP, SPO2, NIBP, 2 TEMP, PR, 2 IBP (opcional)"
      },
      {
        "label": "Característica",
        "value": "Diseño amigable sin ventilador"
      },
      {
        "label": "Característica",
        "value": "Conexión a central de monitoreo"
      },
      {
        "label": "Módulos Opcionales",
        "value": "IBP, CO, CO2, AG/O2, BIS, EEG, RM, ICG, NMT, V LINK"
      }
    ]
  },
  {
    "id": "monitor-im20",
    "name": "Monitores de Paciente",
    "ref": "Monitor iM20",
    "brand": "EDAN",
    "category": "Monitores de Paciente",
    "image": "/images/MONITOR IM20.png",
    "gallery": [
      "/images/MONITOR IM20.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla TFT-LCD a color de 5\""
      },
      {
        "label": "Característica",
        "value": "Equipo liviano para transporte (1.5 kg)"
      },
      {
        "label": "Característica",
        "value": "Compatible como módulo de parámetros básicos del monitor ELITE V5"
      },
      {
        "label": "Característica",
        "value": "Batería de litio recargable para hasta 5.5 horas de operación"
      },
      {
        "label": "Característica",
        "value": "Diseño robusto con IP44 a prueba de agua y polvo"
      },
      {
        "label": "Parámetros",
        "value": "ECG 3/5 derivaciones, RESP, SPO2, NIBP, 2 TEMP, PR"
      }
    ]
  },
  {
    "id": "h100b",
    "name": "Oxímetro",
    "ref": "H100B",
    "brand": "EDAN",
    "category": "Oxímetro",
    "image": "/images/H100B.png",
    "gallery": [
      "/images/H100B.png",
      "/images/H100B-1.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla LCD retroiluminada"
      },
      {
        "label": "Característica",
        "value": "Pulso oxímetro para paciente adulto, pediátrico y neonatal"
      },
      {
        "label": "Característica",
        "value": "IP22 Resistente al agua y polvo"
      },
      {
        "label": "Característica",
        "value": "Visualización onda pletismográfica de SpO2"
      },
      {
        "label": "Característica",
        "value": "Batería AA de hasta 48 horas de uso"
      },
      {
        "label": "Característica",
        "value": "Almacenamiento de datos de 300 horas"
      }
    ],
    "optional": "Opcional: Base cargador, Sensor SpO2 neonatal/pediátrico, Medición de temperatura (H100N), Tecnología Nellcor OximaxTM (H100N)"
  },
  {
    "id": "yx-980d",
    "name": "Succionadores",
    "ref": "YX-980D",
    "brand": "SMAF",
    "category": "Succionadores",
    "image": "/images/YX-980D.png",
    "gallery": [
      "/images/YX-980D.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Capacidad de 12L dividido en 4 frascos (2 de 2L y 2 de 4L)"
      },
      {
        "label": "Característica",
        "value": "Alta velocidad de flujo regulable 80L/min"
      },
      {
        "label": "Característica",
        "value": "Succionador de fácil movilidad"
      },
      {
        "label": "Característica",
        "value": "Máximo vacío de 680 mm Hg"
      },
      {
        "label": "Característica",
        "value": "Bomba de libre mantenimiento"
      },
      {
        "label": "Característica",
        "value": "Sistema de cierre hermético, Frascos de policarbonato"
      }
    ]
  },
  {
    "id": "yx-930d",
    "name": "Succionadores",
    "ref": "YX-930D",
    "brand": "SMAF",
    "category": "Succionadores",
    "image": "/images/YX-930D.png",
    "gallery": [
      "/images/YX-930D.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Capacidad de 5L divididos en 2 frascos de 2.5L"
      },
      {
        "label": "Característica",
        "value": "Alta velocidad de flujo regulable de 40L/min"
      },
      {
        "label": "Característica",
        "value": "Succionador de fácil movilidad"
      },
      {
        "label": "Característica",
        "value": "Máximo vacío de 680 mm Hg"
      },
      {
        "label": "Característica",
        "value": "Bomba de libre mantenimiento"
      },
      {
        "label": "Frascos",
        "value": "material de policarbonato"
      },
      {
        "label": "Característica",
        "value": "Sistema de cierre hermético"
      }
    ]
  },
  {
    "id": "sxt-5a",
    "name": "Succionadores",
    "ref": "SXT-5A",
    "brand": "SMAF",
    "category": "Succionadores",
    "image": "/images/SXT-5A.png",
    "gallery": [
      "/images/SXT-5A.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Capacidad de 1 litro"
      },
      {
        "label": "Característica",
        "value": "Material plástico transparente"
      },
      {
        "label": "Característica",
        "value": "Alto vacío, alto flujo, buen rendimiento"
      },
      {
        "label": "Característica",
        "value": "Liviano ideal para transporte"
      },
      {
        "label": "Característica",
        "value": "Posee protección de sobre flujo"
      },
      {
        "label": "Característica",
        "value": "Máximo vacío de 600mmHg"
      },
      {
        "label": "Característica",
        "value": "Alta velocidad de flujo regulable de 22 L/M"
      },
      {
        "label": "Característica",
        "value": "Bomba de libre de mantenimiento"
      }
    ],
    "optional": "Opcional: Frasco adicional de 1 litro para capacidad de 2 litros"
  },
  {
    "id": "amoul-t6",
    "name": "Ventiladores",
    "ref": "AMOUL T6",
    "brand": "AMOUL",
    "category": "Ventiladores",
    "image": "/images/AMOUL T6.png",
    "gallery": [
      "/images/AMOUL T6.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Ventilador de transporte"
      },
      {
        "label": "Característica",
        "value": "Apto para 3 tipos de paciente (Adulto, pediátrico y neonatal)"
      },
      {
        "label": "Característica",
        "value": "Pantalla Táctil a color"
      },
      {
        "label": "Característica",
        "value": "Turbina potente y silenciosa"
      },
      {
        "label": "Característica",
        "value": "Volumen corriente mínimo de 2 ml"
      },
      {
        "label": "Característica",
        "value": "Ventilación Invasiva y no Invasiva con múltiples modos"
      },
      {
        "label": "Característica",
        "value": "Transporte prehospitalario e intrahospitalario"
      },
      {
        "label": "Característica",
        "value": "Peso con batería incluida (6,2kg)"
      },
      {
        "label": "Característica",
        "value": "Alarmas audibles y visibles"
      }
    ],
    "optional": "Opcional: Carro de transporte"
  },
  {
    "id": "padus-8",
    "name": "Ventiladores",
    "ref": "PADUS 8",
    "brand": "PRUNUS",
    "category": "Ventiladores",
    "image": "/images/PADUS 8.png",
    "gallery": [
      "/images/PADUS 8.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Pantalla táctil de 17\""
      },
      {
        "label": "Tipo de paciente",
        "value": "adultos, pediátricos y neonatales"
      },
      {
        "label": "Característica",
        "value": "Software intuitivo de fácil manejo"
      },
      {
        "label": "Característica",
        "value": "Parámetros programables y monitoreables"
      },
      {
        "label": "Característica",
        "value": "Medición y ajuste de FiO2"
      },
      {
        "label": "Característica",
        "value": "Alarmas automáticas y programables"
      },
      {
        "label": "Característica",
        "value": "Módulo de mecánica ventilatoria"
      },
      {
        "label": "Característica",
        "value": "Batería interna con 90 min. de autonomía"
      },
      {
        "label": "Característica",
        "value": "Visualización de alarmas 360°"
      },
      {
        "label": "Característica",
        "value": "Múltiples Modos de ventilación invasiva y no invasiva"
      }
    ],
    "optional": "Presión esofágica, Capnografía, Oximetría, Módulo neonatal, 2da Batería"
  },
  {
    "id": "padus-5",
    "name": "Ventiladores",
    "ref": "PADUS 5",
    "brand": "PRUNUS",
    "category": "Ventiladores",
    "image": "/images/PADUS 5.png",
    "gallery": [
      "/images/PADUS 5.png"
    ],
    "specs": [
      {
        "label": "Fuente de gas",
        "value": "O2 y turbina (Aire ambiente)"
      },
      {
        "label": "Característica",
        "value": "Pantalla táctil de 12\""
      },
      {
        "label": "Tipo de pacientes",
        "value": "Adulto/Pediátrico/Neonatal"
      },
      {
        "label": "Batería",
        "value": "120 minutos de autonomía"
      },
      {
        "label": "Característica",
        "value": "Medición y ajuste de FiO2"
      },
      {
        "label": "Característica",
        "value": "Visualización de alarmas 360°"
      },
      {
        "label": "Característica",
        "value": "Varios escenarios de aplicación"
      },
      {
        "label": "Característica",
        "value": "Software intuitivo de fácil manejo"
      },
      {
        "label": "Característica",
        "value": "Humidificador"
      },
      {
        "label": "Característica",
        "value": "Múltiples Modos de ventilación invasiva y no invasiva"
      }
    ],
    "optional": "Capnografía, Medición de SpO2, 2da batería"
  },
  {
    "id": "vl-3d",
    "name": "Videolaringoscopios",
    "ref": "VL-3D",
    "brand": "HUGEMED",
    "category": "Videolaringoscopios",
    "image": "/images/VL-3D.png",
    "gallery": [
      "/images/VL-3D.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Cámara Full HD de 2.0 MP (1920x1080)"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD de 3,5\" con rotación vertical 0-140° y horizontal 0-180°"
      },
      {
        "label": "Característica",
        "value": "Memoria interna de 32 GB (registro de fotos y video)"
      },
      {
        "label": "Característica",
        "value": "Valvas desechables estériles"
      },
      {
        "label": "Característica",
        "value": "Salida HDMI para visualización en monitor externo"
      },
      {
        "label": "Característica",
        "value": "Incluye valvas curvas tipo Macintosh desechables (#2, #3 y #4)"
      }
    ],
    "optional": "Opcional: Valvas Macintosh/curvas (#1, #5)"
  },
  {
    "id": "vl-3r",
    "name": "Videolaringoscopios",
    "ref": "VL-3R",
    "brand": "HUGEMED",
    "category": "Videolaringoscopios",
    "image": "/images/VL-3R.png",
    "gallery": [
      "/images/VL-3R.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Cámara Full HD de 2.0 MP (1920x1080)"
      },
      {
        "label": "Característica",
        "value": "Pantalla LCD de 3,5\" con rotación vertical 0-140° y horizontal 0-180°"
      },
      {
        "label": "Característica",
        "value": "Memoria interna de 32 GB (registro de fotos y video)"
      },
      {
        "label": "Característica",
        "value": "Valvas reutilizables impermeables (IPX8)"
      },
      {
        "label": "Característica",
        "value": "Salida HDMI para visualización en monitor externo"
      },
      {
        "label": "Característica",
        "value": "Incluye valvas curvas tipo Macintosh reutilizables (#2, #3 y #4)"
      },
      {
        "label": "Característica",
        "value": "Valvas Miller/rectas (#00, #0, #1)"
      }
    ],
    "optional": "Opcional: Valvas Macintosh/curvas (#1, #5)"
  },
  {
    "id": "c6a",
    "name": "Videocolposcopio",
    "ref": "C6A",
    "brand": "EDAN",
    "category": "Videocolposcopio",
    "image": "/images/C6A.png",
    "gallery": [
      "/images/C6A.png",
      "/images/C6A-1.png"
    ],
    "specs": [
      {
        "label": "Característica",
        "value": "Software de visualización de imágenes y gestión de datos"
      },
      {
        "label": "Característica",
        "value": "Intensidad luminosa de 2.500 lúmenes"
      },
      {
        "label": "Característica",
        "value": "Control remoto de ruptura"
      },
      {
        "label": "Característica",
        "value": "El sistema de evaluación R-way estandariza la interpretación de los hallazgos colposcópicos"
      },
      {
        "label": "Característica",
        "value": "Sistema de iluminación LED que garantiza una visión real del tejido"
      },
      {
        "label": "Característica",
        "value": "Visualización de imágenes y cámara de alta resolución"
      },
      {
        "label": "Característica",
        "value": "Sistema de enfoque automático"
      },
      {
        "label": "Característica",
        "value": "Filtro electrónico verde para una mejor visualización de la imagen vascular"
      },
      {
        "label": "Característica",
        "value": "Duplica imagen en tiempo real"
      }
    ]
  }
];
