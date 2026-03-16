'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Factory, Shield, Zap, Leaf, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const factoryData = {
  en: {
    hero: {
      title: 'Our Factory',
      subtitle: 'State-of-the-art manufacturing facilities delivering excellence'
    },
    overview: {
      title: 'Manufacturing Excellence',
      content: 'Our advanced manufacturing facilities span over 50,000 square meters across multiple locations, employing cutting-edge semiconductor fabrication technology to produce chips that power the digital world.'
    },
    stats: [
      { value: '50,000+', label: 'sqm Production Area' },
      { value: '1,200+', label: 'Employees' },
      { value: '10M+', label: 'Chips/Month' },
      { value: '99.9%', label: 'Yield Rate' }
    ],
    facilities: [
      {
        title: 'Wafer Fabrication',
        description: 'Advanced 300mm wafer fab with leading-edge process nodes.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['300mm wafer processing', '14nm - 28nm process nodes', 'Class 100 cleanroom']
      },
      {
        title: 'Assembly & Testing',
        description: 'State-of-the-art packaging and final testing facilities.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Advanced packaging', 'Automated testing', 'Quality assurance']
      },
      {
        title: 'R&D Center',
        description: 'Innovation hub for next-generation chip development.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Product design', 'Simulation & modeling', 'Prototyping']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Quality Management' },
      { name: 'ISO 14001', description: 'Environmental Management' },
      { name: 'IATF 16949', description: 'Automotive Quality' },
      { name: 'ISO 45001', description: 'Occupational Health & Safety' },
      { name: 'ISO 27001', description: 'Information Security' },
      { name: 'IECQ', description: 'Electronic Components' }
    ],
    sustainability: {
      title: 'Sustainable Manufacturing',
      content: 'We are committed to minimizing our environmental impact through energy-efficient processes, waste reduction programs, and renewable energy adoption.',
      highlights: [
        '40% reduction in energy consumption per chip',
        '90% water recycling rate',
        'Zero waste to landfill target',
        'Carbon neutral by 2030'
      ]
    }
  },
  fr: {
    hero: {
      title: 'Notre Usine',
      subtitle: 'Installations de fabrication de pointe pour une excellence garantie'
    },
    overview: {
      title: 'Excellence de Fabrication',
      content: 'Nos installations de fabrication avancées s\'étendent sur plus de 50 000 mètres carrés à plusieurs endroits, utilisant une technologie de fabrication de semi-conducteurs de pointe pour produire des puces qui alimentent le monde numérique.'
    },
    stats: [
      { value: '50,000+', label: 'm² Zone de Production' },
      { value: '1,200+', label: 'Employés' },
      { value: '10M+', label: 'Puces/Mois' },
      { value: '99.9%', label: 'Taux de Rendement' }
    ],
    facilities: [
      {
        title: 'Fabrication de Wafers',
        description: 'Fonderie de wafers 300mm avancée avec des nœuds de processus de pointe.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Traitement wafers 300mm', 'Nœuds de processus 14nm - 28nm', 'Salle blanche Classe 100']
      },
      {
        title: 'Assemblage & Test',
        description: 'Installations de assemblage et de test final de pointe.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Emballage avancé', 'Test automatisé', 'Assurance qualité']
      },
      {
        title: 'Centre R&D',
        description: 'Centre d\'innovation pour le développement de puces de nouvelle génération.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Conception produit', 'Simulation & modélisation', 'Prototypage']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Management Qualité' },
      { name: 'ISO 14001', description: 'Management Environnemental' },
      { name: 'IATF 16949', description: 'Qualité Automobile' },
      { name: 'ISO 45001', description: 'Santé & Sécurité au Travail' },
      { name: 'ISO 27001', description: 'Sécurité de l\'Information' },
      { name: 'IECQ', description: 'Composants Électroniques' }
    ],
    sustainability: {
      title: 'Fabrication Durable',
      content: 'Nous nous engageons à minimiser notre impact environnemental grâce à des processus économes en énergie, des programmes de réduction des déchets et l\'adoption d\'énergie renouvelable.',
      highlights: [
        'Réduction de 40% de la consommation d\'énergie par puce',
        'Taux de recyclage de l\'eau de 90%',
        'Objectif zero déchet en décharge',
        'Carboneutralité d\'ici 2030'
      ]
    }
  },
  de: {
    hero: {
      title: 'Unsere Fabrik',
      subtitle: 'Hochmoderne Fertigungsanlagen für Spitzenleistung'
    },
    overview: {
      title: 'Fertigungsexzellenz',
      content: 'Unsere fortschrittlichen Fertigungsanlagen erstrecken sich über mehr als 50.000 Quadratmeter an mehreren Standorten und verwenden modernste Halbleiterfertigungstechnologie, um Chips herzustellen, die die digitale Welt antreiben.'
    },
    stats: [
      { value: '50,000+', label: 'm² Produktionsfläche' },
      { value: '1,200+', label: 'Mitarbeiter' },
      { value: '10M+', label: 'Chips/Monat' },
      { value: '99.9%', label: 'Ausbeuterate' }
    ],
    facilities: [
      {
        title: 'Wafer-Fertigung',
        description: 'Moderne 300mm Wafer-Fabrik mit fortschrittlichsten Prozessknoten.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['300mm Wafer-Verarbeitung', '14nm - 28nm Prozessknoten', 'Reinraum Klasse 100']
      },
      {
        title: 'Montage & Test',
        description: 'Modernste Verpackungs- und Endtestanlagen.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Fortschrittliche Verpackung', 'Automatisiertes Testen', 'Qualitätssicherung']
      },
      {
        title: 'Forschungszentrum',
        description: 'Innovationszentrum für die Entwicklung nächster Chip-Generationen.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Produktdesign', 'Simulation & Modellierung', 'Prototyping']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Qualitätsmanagement' },
      { name: 'ISO 14001', description: 'Umweltmanagement' },
      { name: 'IATF 16949', description: 'Automobilqualität' },
      { name: 'ISO 45001', description: 'Arbeitsschutz' },
      { name: 'ISO 27001', description: 'Informationssicherheit' },
      { name: 'IECQ', description: 'Elektronische Komponenten' }
    ],
    sustainability: {
      title: 'Nachhaltige Fertigung',
      content: 'Wir verpflichten uns, unsere Umweltauswirkungen durch energieeffiziente Prozesse, Abfallvermeidungsprogramme und den Einsatz erneuerbarer Energien zu minimieren.',
      highlights: [
        '40% Reduzierung des Energieverbrauchs pro Chip',
        'Wasserrückgewinnungsrate von 90%',
        'Ziel: Null Abfall zur Deponie',
        'Klimaneutral bis 2030'
      ]
    }
  },
  it: {
    hero: {
      title: 'La Nostra Fabbrica',
      subtitle: 'Impianti di produzione all\'avanguardia per eccellenza garantita'
    },
    overview: {
      title: 'Eccellenza nella Produzione',
      content: 'I nostri impianti di produzione avanzati si estendono per oltre 50.000 metri quadrati in più località, utilizzando tecnologia di fabbricazione di semiconduttori all\'avanguardia per produrre chip che alimentano il mondo digitale.'
    },
    stats: [
      { value: '50,000+', label: 'mq Area di Produzione' },
      { value: '1,200+', label: 'Dipendenti' },
      { value: '10M+', label: 'Chip/Mese' },
      { value: '99.9%', label: 'Tasso di Rendimento' }
    ],
    facilities: [
      {
        title: 'Fabbricazione Wafer',
        description: 'Fabbrica wafer 300mm avanzata con nodi di processo all\'avanguardia.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Processazione wafer 300mm', 'Nodi di processo 14nm - 28nm', 'Sala bianca Classe 100']
      },
      {
        title: 'Assemblaggio & Test',
        description: 'Impianti di confezionamento e test finale all\'avanguardia.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Confezionamento avanzato', 'Test automatizzato', 'Assicurazione qualità']
      },
      {
        title: 'Centro R&D',
        description: 'Hub di innovazione per lo sviluppo di chip di nuova generazione.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Design prodotto', 'Simulazione & modellazione', 'Prototipazione']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Gestione Qualità' },
      { name: 'ISO 14001', description: 'Gestione Ambientale' },
      { name: 'IATF 16949', description: 'Qualità Automotive' },
      { name: 'ISO 45001', description: 'Salute & Sicurezza sul Lavoro' },
      { name: 'ISO 27001', description: 'Sicurezza delle Informazioni' },
      { name: 'IECQ', description: 'Componenti Elettronici' }
    ],
    sustainability: {
      title: 'Produzione Sostenibile',
      content: 'Ci impegniamo a minimizzare il nostro impatto ambientale attraverso processi ad alta efficienza energetica, programmi di riduzione dei rifiuti e adozione di energie rinnovabili.',
      highlights: [
        'Riduzione del 40% del consumo energetico per chip',
        'Tasso di riciclaggio dell\'acqua del 90%',
        'Obiettivo rifiuti zero in discarica',
        'Carbonneutral entro il 2030'
      ]
    }
  },
  es: {
    hero: {
      title: 'Nuestra Fábrica',
      subtitle: 'Instalaciones de fabricación de vanguardia para garantizar la excelencia'
    },
    overview: {
      title: 'Excelencia en Manufactura',
      content: 'Nuestras avanzadas instalaciones de fabricación se extienden por más de 50,000 metros cuadrados en múltiples ubicaciones, utilizando tecnología de fabricación de semiconductores de vanguardia para producir chips que alimentan el mundo digital.'
    },
    stats: [
      { value: '50,000+', label: 'm² Área de Producción' },
      { value: '1,200+', label: 'Empleados' },
      { value: '10M+', label: 'Chips/Mes' },
      { value: '99.9%', label: 'Tasa de Rendimiento' }
    ],
    facilities: [
      {
        title: 'Fabricación de Wafers',
        description: 'Fábrica de wafers 300mm avanzada con nodos de proceso de vanguardia.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Procesamiento de wafers 300mm', 'Nodos de proceso 14nm - 28nm', 'Sala limpia Clase 100']
      },
      {
        title: 'Ensamble & Prueba',
        description: 'Instalaciones de encapsulado y prueba final de vanguardia.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Encapsulado avanzado', 'Pruebas automatizadas', 'Aseguramiento de calidad']
      },
      {
        title: 'Centro I+D',
        description: 'Centro de innovación para el desarrollo de chips de nueva generación.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Diseño de producto', 'Simulación y modelado', 'Prototipado']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Gestión de Calidad' },
      { name: 'ISO 14001', description: 'Gestión Ambiental' },
      { name: 'IATF 16949', description: 'Calidad Automotriz' },
      { name: 'ISO 45001', description: 'Salud y Seguridad Laboral' },
      { name: 'ISO 27001', description: 'Seguridad de la Información' },
      { name: 'IECQ', description: 'Componentes Electrónicos' }
    ],
    sustainability: {
      title: 'Manufactura Sostenible',
      content: 'Nos comprometemos a minimizar nuestro impacto ambiental a través de procesos eficientes en energía, programas de reducción de residuos y adopción de energía renovable.',
      highlights: [
        'Reducción del 40% en el consumo de energía por chip',
        'Tasa de reciclaje de agua del 90%',
        'Objetivo cero residuos a vertedero',
        'Carbono neutral para 2030'
      ]
    }
  }
};

export default function FactoryPage() {
  const { t, language } = useLanguage();
  const dataLanguage = (factoryData as any)[language] ? language : 'en';
  const data = (factoryData as any)[dataLanguage];

  return (
    <>
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{data.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.overview.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{data.overview.content}</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-md shadow-sm"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.factory.ourFacilities}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.facilities.map((facility: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature: any, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t.factory.certifications}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.factory.certificationsSubtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {data.certifications.map((cert: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-md text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">{cert.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 mr-3" />
                  <h2 className="text-3xl font-bold">{data.sustainability.title}</h2>
                </div>
                <p className="text-green-100 mb-6 text-lg">{data.sustainability.content}</p>
                <ul className="space-y-3">
                  {data.sustainability.highlights.map((highlight: any, index: number) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">40%</div>
                  <div className="text-green-100 text-sm">{t.factory.stats.energyReduction}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">90%</div>
                  <div className="text-green-100 text-sm">{t.factory.stats.waterRecycled}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Factory className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">0</div>
                  <div className="text-green-100 text-sm">{t.factory.stats.wasteToLandfill}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Leaf className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">2030</div>
                  <div className="text-green-100 text-sm">{t.factory.stats.carbonNeutral}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
