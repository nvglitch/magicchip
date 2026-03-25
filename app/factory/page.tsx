'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Factory, Shield, Zap, Leaf, Users, Award, CheckCircle, ArrowRight, Cpu, Wrench, Package } from 'lucide-react';

const factoryData = {
  en: {
    hero: {
      title: 'Our Factory',
      subtitle: 'Professional Manufacturing for Mini PCs & Industrial Computing'
    },
    overview: {
      title: 'Manufacturing Excellence',
      content: 'Our manufacturing facilities specialize in producing high-quality mini PCs, industrial computers, and embedded computing solutions. With advanced production lines and strict quality control systems, we deliver reliable products that meet industrial-grade standards.'
    },
    stats: [
      { value: '5,000+', label: 'sqm Production Area' },
      { value: '50-100', label: 'Employees' },
      { value: '1000+', label: 'Units/Day' },
      { value: '99.5%', label: 'Quality Rate' }
    ],
    facilities: [
      {
        title: 'SMT Production Line',
        description: 'Advanced surface-mount technology for motherboard assembly with high precision.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['High-speed placement', 'Multi-layer PCB support', 'Automated inspection']
      },
      {
        title: 'Assembly & Testing',
        description: 'Complete assembly lines with comprehensive testing and quality assurance.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Burn-in testing', 'Thermal testing', 'Functional verification']
      },
      {
        title: 'Customization Center',
        description: 'Flexible OEM/ODM services for custom configurations and branding.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Custom branding', 'Port configuration', 'Logo printing']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Quality Management' },
      { name: 'ISO 14001', description: 'Environmental Management' },
      { name: 'CE', description: 'European Conformity' },
      { name: 'FCC', description: 'US Certification' },
      { name: 'RoHS', description: 'Hazardous Substances' },
      { name: 'CCC', description: 'China Compulsory' }
    ],
    capabilities: {
      title: 'Our Capabilities',
      items: [
        { icon: Cpu, title: 'Intel Platform', desc: 'Support Intel N-series, 13th/14th Gen Core processors' },
        { icon: Zap, title: 'Multi-Port Design', desc: 'Up to 2.5GbE/10GbE network ports, 4G/5G modules' },
        { icon: Shield, title: 'Fanless Design', desc: 'Industrial-grade fanless cooling solutions' },
        { icon: Package, title: 'OEM/ODM Service', desc: 'Flexible customization from samples to mass production' }
      ]
    }
  },
  fr: {
    hero: {
      title: 'Notre Usine',
      subtitle: 'Fabrication Professionnelle de Mini PC et Informatique Industrielle'
    },
    overview: {
      title: 'Excellence de Fabrication',
      content: 'Nos installations de fabrication se spécialisent dans la production de mini PC de haute qualité, ordinateurs industriels et solutions informatiques embarquées. Avec des lignes de production avancées et des systèmes stricts de contrôle qualité, nous livrons des produits fiables répondant aux normes industrielles.'
    },
    stats: [
      { value: '5,000+', label: 'm² Zone de Production' },
      { value: '50-100', label: 'Employés' },
      { value: '1000+', label: 'Unités/Jour' },
      { value: '99.5%', label: 'Taux de Qualité' }
    ],
    facilities: [
      {
        title: 'Ligne de Production SMT',
        description: 'Technologie de montage en surface avancée pour l\'assemblage de cartes mères avec haute précision.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Placement haute vitesse', 'Support PCB multi-couches', 'Inspection automatisée']
      },
      {
        title: 'Assemblage & Test',
        description: 'Lignes d\'assemblage complètes avec tests complets et assurance qualité.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Test burn-in', 'Test thermique', 'Vérification fonctionnelle']
      },
      {
        title: 'Centre de Personnalisation',
        description: 'Services OEM/ODM flexibles pour configurations personnalisées et marquage.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Marquage personnalisé', 'Configuration ports', 'Impression logo']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Management Qualité' },
      { name: 'ISO 14001', description: 'Management Environnemental' },
      { name: 'CE', description: 'Conformité Européenne' },
      { name: 'FCC', description: 'Certification US' },
      { name: 'RoHS', description: 'Substances Dangereuses' },
      { name: 'CCC', description: 'Chine Obligatoire' }
    ],
    capabilities: {
      title: 'Nos Capacités',
      items: [
        { icon: Cpu, title: 'Plateforme Intel', desc: 'Support processeurs Intel série N, 13e/14e Gen Core' },
        { icon: Zap, title: 'Design Multi-Port', desc: 'Jusqu\'à 2.5GbE/10GbE ports réseau, modules 4G/5G' },
        { icon: Shield, title: 'Design Sans Ventilateur', desc: 'Solutions de refroidissement industriel sans ventilateur' },
        { icon: Package, title: 'Service OEM/ODM', desc: 'Personnalisation flexible des échantillons à la production' }
      ]
    }
  },
  de: {
    hero: {
      title: 'Unsere Fabrik',
      subtitle: 'Professionelle Fertigung für Mini-PCs und Industrie-Computing'
    },
    overview: {
      title: 'Fertigungsexzellenz',
      content: 'Unsere Fertigungsanlagen sind auf die Produktion hochwertiger Mini-PCs, Industriecomputer und Embedded-Computing-Lösungen spezialisiert. Mit fortschrittlichen Produktionslinien und strengen Qualitätskontrollsystemen liefern wir zuverlässige Produkte, die industriellen Standards entsprechen.'
    },
    stats: [
      { value: '5,000+', label: 'm² Produktionsfläche' },
      { value: '50-100', label: 'Mitarbeiter' },
      { value: '1000+', label: 'Einheiten/Tag' },
      { value: '99.5%', label: 'Qualitätsrate' }
    ],
    facilities: [
      {
        title: 'SMT Produktionslinie',
        description: 'Fortschrittliche Oberflächenmontagetechnologie für Mainboard-Montage mit hoher Präzision.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Hochgeschwindigkeitsplatzierung', 'Mehrlagen-PCB-Unterstützung', 'Automatisierte Inspektion']
      },
      {
        title: 'Montage & Test',
        description: 'Komplette Montagelinien mit umfassenden Tests und Qualitätssicherung.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Burn-in-Test', 'Thermotest', 'Funktionsverifikation']
      },
      {
        title: 'Anpassungszentrum',
        description: 'Flexible OEM/ODM-Dienste für kundenspezifische Konfigurationen und Branding.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Individuelles Branding', 'Port-Konfiguration', 'Logodruck']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Qualitätsmanagement' },
      { name: 'ISO 14001', description: 'Umweltmanagement' },
      { name: 'CE', description: 'Europäische Konformität' },
      { name: 'FCC', description: 'US-Zertifizierung' },
      { name: 'RoHS', description: 'Gefährliche Stoffe' },
      { name: 'CCC', description: 'China Zwang' }
    ],
    capabilities: {
      title: 'Unsere Fähigkeiten',
      items: [
        { icon: Cpu, title: 'Intel Plattform', desc: 'Unterstützung Intel N-Serie, 13./14. Gen Core Prozessoren' },
        { icon: Zap, title: 'Multi-Port Design', desc: 'Bis zu 2.5GbE/10GbE Netzwerkports, 4G/5G Module' },
        { icon: Shield, title: 'Lüfterloses Design', desc: 'Industrietaugliche lüfterlose Kühlungslösungen' },
        { icon: Package, title: 'OEM/ODM Service', desc: 'Flexible Anpassung von Mustern bis Massenproduktion' }
      ]
    }
  },
  it: {
    hero: {
      title: 'La Nostra Fabbrica',
      subtitle: 'Produzione Professionale di Mini PC e Informatica Industriale'
    },
    overview: {
      title: 'Eccellenza nella Produzione',
      content: 'Le nostre strutture di produzione sono specializzate nella produzione di mini PC di alta qualità, computer industriali e soluzioni di embedded computing. Con linee di produzione avanzate e sistemi rigorosi di controllo qualità, consegniamo prodotti affidabili che soddisfano gli standard industriali.'
    },
    stats: [
      { value: '5,000+', label: 'mq Area di Produzione' },
      { value: '50-100', label: 'Dipendenti' },
      { value: '1000+', label: 'Unità/Giorno' },
      { value: '99.5%', label: 'Tasso di Qualità' }
    ],
    facilities: [
      {
        title: 'Linea di Produzione SMT',
        description: 'Tecnologia avanzata di montaggio superficiale per l\'assemblaggio di schede madre con alta precisione.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Posizionamento ad alta velocità', 'Supporto PCB multistrato', 'Ispezione automatizzata']
      },
      {
        title: 'Assemblaggio & Test',
        description: 'Linee di assemblaggio complete con test completi e assicurazione qualità.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Test burn-in', 'Test termico', 'Verifica funzionale']
      },
      {
        title: 'Centro di Personalizzazione',
        description: 'Servizi OEM/ODM flessibili per configurazioni personalizzate e branding.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Branding personalizzato', 'Configurazione porte', 'Stampa logo']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Gestione Qualità' },
      { name: 'ISO 14001', description: 'Gestione Ambientale' },
      { name: 'CE', description: 'Conformità Europea' },
      { name: 'FCC', description: 'Certificazione US' },
      { name: 'RoHS', description: 'Sostanze Pericolose' },
      { name: 'CCC', description: 'Cina Obbligatorio' }
    ],
    capabilities: {
      title: 'Le Nostre Capacità',
      items: [
        { icon: Cpu, title: 'Piattaforma Intel', desc: 'Supporto processori Intel serie N, Core 13a/14a Gen' },
        { icon: Zap, title: 'Design Multi-Porta', desc: 'Fino a 2.5GbE/10GbE porte di rete, moduli 4G/5G' },
        { icon: Shield, title: 'Design Senza Ventola', desc: 'Soluzioni di raffreddamento industriale senza ventola' },
        { icon: Package, title: 'Servizio OEM/ODM', desc: 'Personalizzazione flessibile dai campioni alla produzione' }
      ]
    }
  },
  es: {
    hero: {
      title: 'Nuestra Fábrica',
      subtitle: 'Fabricación Profesional de Mini PC e Informática Industrial'
    },
    overview: {
      title: 'Excelencia en Manufactura',
      content: 'Nuestras instalaciones de fabricación se especializan en la producción de mini PC de alta calidad, computadoras industriales y soluciones de computación integrada. Con líneas de producción avanzadas y sistemas estrictos de control de calidad, entregamos productos confiables que cumplen con los estándares industriales.'
    },
    stats: [
      { value: '5,000+', label: 'm² Área de Producción' },
      { value: '50-100', label: 'Empleados' },
      { value: '1000+', label: 'Unidades/Día' },
      { value: '99.5%', label: 'Tasa de Calidad' }
    ],
    facilities: [
      {
        title: 'Línea de Producción SMT',
        description: 'Tecnología avanzada de montaje superficial para ensamblaje de placas base con alta precisión.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['Colocación de alta velocidad', 'Soporte PCB multicapa', 'Inspección automatizada']
      },
      {
        title: 'Ensamblaje & Prueba',
        description: 'Líneas de ensamblaje completas con pruebas integrales y aseguramiento de calidad.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Prueba burn-in', 'Prueba térmica', 'Verificación funcional']
      },
      {
        title: 'Centro de Personalización',
        description: 'Servicios OEM/ODM flexibles para configuraciones personalizadas y branding.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Branding personalizado', 'Configuración de puertos', 'Impresión de logo']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Gestión de Calidad' },
      { name: 'ISO 14001', description: 'Gestión Ambiental' },
      { name: 'CE', description: 'Conformidad Europea' },
      { name: 'FCC', description: 'Certificación US' },
      { name: 'RoHS', description: 'Sustancias Peligrosas' },
      { name: 'CCC', description: 'China Obligatorio' }
    ],
    capabilities: {
      title: 'Nuestras Capacidades',
      items: [
        { icon: Cpu, title: 'Plataforma Intel', desc: 'Soporte procesadores Intel serie N, Core 13a/14a Gen' },
        { icon: Zap, title: 'Diseño Multi-Puerto', desc: 'Hasta 2.5GbE/10GbE puertos de red, módulos 4G/5G' },
        { icon: Shield, title: 'Diseño Sin Ventilador', desc: 'Soluciones de enfriamiento industrial sin ventilador' },
        { icon: Package, title: 'Servicio OEM/ODM', desc: 'Personalización flexible desde muestras hasta producción' }
      ]
    }
  }
};

export default function FactoryPage() {
  const { t, language } = useLanguage();
  const dataLanguage = (factoryData as any)[language] ? language : 'en';
  const data = (factoryData as any)[dataLanguage];

  return (
    <div className="min-h-screen bg-gray-50">
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
                  className="text-center bg-white p-8 rounded-lg shadow-sm"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {data.capabilities.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.capabilities.items.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t.factory?.ourFacilities || 'Our Facilities'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.facilities.map((facility: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {t.factory?.certifications || 'Certifications'}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.factory?.certificationsSubtitle || 'Our products meet international quality and safety standards'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {data.certifications.map((cert: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
                >
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">{cert.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
