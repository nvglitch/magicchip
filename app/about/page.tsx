'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Factory, Users, ArrowRight, Globe, Award, TrendingUp, Cpu, Network, Monitor, Zap } from 'lucide-react';

const aboutData = {
  en: {
    hero: {
      title: 'About MagicChip',
      subtitle: 'Professional Mini PC & Industrial Computing Solutions Since 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Founded in 2021, Shenzhen Magic Chip Technology Co., Ltd. is a professional manufacturer of mini PCs and industrial computing equipment based in Shenzhen, China. We specialize in R&D, manufacturing, and sales of mini PCs, industrial computers, multi-port industrial hosts, industrial tablets, and laptops. Our products are widely used in intelligent retail, digital signage, financial self-service, industrial automation, education, medical, and IoT fields.',
      highlights: [
        { icon: Cpu, title: 'Intel Processors', desc: 'N-series, 13th/14th Gen Core' },
        { icon: Network, title: 'High-Speed Networking', desc: '2.5GbE/10GbE Multi-Port' },
        { icon: Monitor, title: 'Multi-Screen Output', desc: '4K Display Support' },
        { icon: Zap, title: '4G/5G Ready', desc: 'Wireless Module Support' }
      ]
    },
    companyProfile: {
      title: 'Company Profile',
      stats: [
        { label: 'Founded', value: '2021' },
        { label: 'Business Type', value: 'Manufacturer' },
        { label: 'Employees', value: '50-100' },
        { label: 'Annual Revenue', value: '$10M-25M' }
      ]
    },
    philosophy: {
      title: 'Our Philosophy',
      content: 'MagicChip operates on the principles of "Innovation, Reliability, and Flexibility". Leveraging Shenzhen\'s powerful electronics supply chain advantage, we respond quickly to market demands and provide complete services from samples to mass production for domestic and international customers.',
      items: [
        { title: 'Innovation', desc: 'Continuous product design innovation focusing on miniaturization and fanless cooling' },
        { title: 'Reliability', desc: 'Industrial-grade stability with rigorous testing for long-term performance' },
        { title: 'Flexibility', desc: 'Flexible OEM/ODM customization services tailored to specific requirements' }
      ]
    },
    markets: {
      title: 'Global Markets',
      content: 'Our products are primarily exported to Europe, North America, the Middle East, and Southeast Asian markets, serving customers worldwide with high-performance embedded computing solutions.',
      regions: ['Europe', 'North America', 'Middle East', 'Southeast Asia']
    },
    sections: [
      {
        title: 'Our Company',
        description: 'Learn about our history, mission, and commitment to providing high-performance embedded computing solutions',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Founded', value: '2021' },
          { label: 'Employees', value: '50-100' },
          { label: 'Annual Revenue', value: '$10M-25M' }
        ]
      },
      {
        title: 'Manufacturing Facilities',
        description: 'Explore our production capabilities and flexible OEM/ODM customization services',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Production Lines', value: 'Multiple' },
          { label: 'Daily Capacity', value: '1000+' },
          { label: 'Quality Rate', value: '99.5%' }
        ]
      },
      {
        title: 'Leadership Team',
        description: 'Meet our experienced team driving innovation in industrial computing',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Core Team', value: '8' },
          { label: 'Avg. Experience', value: '15+' },
          { label: 'Export Markets', value: '30+' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Global Export',
        description: 'Products exported to Europe, North America, Middle East, and Southeast Asia'
      },
      {
        icon: Award,
        title: 'Customization Expertise',
        description: 'Flexible OEM/ODM services with fanless design and industrial-grade stability'
      },
      {
        icon: TrendingUp,
        title: 'Rapid Growth',
        description: 'Fast response to market demands with Shenzhen\'s strong electronics supply chain'
      }
    ]
  },
  fr: {
    hero: {
      title: 'À Propos de MagicChip',
      subtitle: 'Solutions Professionnelles de Mini PC et Informatique Industrielle Depuis 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fondée en 2021, Shenzhen Magic Chip Technology Co., Ltd. est un fabricant professionnel de mini PC et d\'équipements informatiques industriels basé à Shenzhen, en Chine. Nous sommes spécialisés dans la R&D, la fabrication et la vente de mini PC, ordinateurs industriels, hôtes industriels multi-ports, tablettes industrielles et ordinateurs portables. Nos produits sont largement utilisés dans la vente au détail intelligente, l\'affichage numérique, les services financiers en libre-service, l\'automatisation industrielle, l\'éducation, le médical et l\'IoT.',
      highlights: [
        { icon: Cpu, title: 'Processeurs Intel', desc: 'Série N, 13e/14e Gen Core' },
        { icon: Network, title: 'Réseau Haute Vitesse', desc: 'Multi-Port 2.5GbE/10GbE' },
        { icon: Monitor, title: 'Multi-Écran', desc: 'Support Affichage 4K' },
        { icon: Zap, title: '4G/5G Prêt', desc: 'Support Module Sans Fil' }
      ]
    },
    companyProfile: {
      title: 'Profil de l\'Entreprise',
      stats: [
        { label: 'Fondée', value: '2021' },
        { label: 'Type d\'Entreprise', value: 'Fabricant' },
        { label: 'Employés', value: '50-100' },
        { label: 'Revenus Annuels', value: '$10M-25M' }
      ]
    },
    philosophy: {
      title: 'Notre Philosophie',
      content: 'MagicChip fonctionne selon les principes d\'« Innovation, Fiabilité et Flexibilité ». En tirant parti de l\'avantage de la puissante chaîne d\'approvisionnement électronique de Shenzhen, nous répondons rapidement aux demandes du marché et fournissons des services complets des échantillons à la production en série pour les clients nationaux et internationaux.',
      items: [
        { title: 'Innovation', desc: 'Innovation continue dans la conception des produits axée sur la miniaturisation et le refroidissement sans ventilateur' },
        { title: 'Fiabilité', desc: 'Stabilité industrielle avec des tests rigoureux pour des performances à long terme' },
        { title: 'Flexibilité', desc: 'Services de personnalisation OEM/ODM flexibles adaptés aux exigences spécifiques' }
      ]
    },
    markets: {
      title: 'Marchés Mondiaux',
      content: 'Nos produits sont principalement exportés vers les marchés européens, nord-américains, du Moyen-Orient et d\'Asie du Sud-Est, desservant des clients du monde entier avec des solutions informatiques embarquées haute performance.',
      regions: ['Europe', 'Amérique du Nord', 'Moyen-Orient', 'Asie du Sud-Est']
    },
    sections: [
      {
        title: 'Notre Entreprise',
        description: 'Découvrez notre histoire, notre mission et notre engagement à fournir des solutions informatiques embarquées haute performance',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Fondée', value: '2021' },
          { label: 'Employés', value: '50-100' },
          { label: 'Revenus Annuels', value: '$10M-25M' }
        ]
      },
      {
        title: 'Installations de Fabrication',
        description: 'Explorez nos capacités de production et nos services de personnalisation OEM/ODM flexibles',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Lignes de Production', value: 'Multiples' },
          { label: 'Capacité Journalière', value: '1000+' },
          { label: 'Taux de Qualité', value: '99.5%' }
        ]
      },
      {
        title: 'Équipe de Direction',
        description: 'Rencontrez notre équipe expérimentée qui stimule l\'innovation dans l\'informatique industrielle',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Équipe Core', value: '8' },
          { label: 'Expérience Moyenne', value: '15+' },
          { label: 'Marchés d\'Export', value: '30+' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Export Global',
        description: 'Produits exportés vers l\'Europe, l\'Amérique du Nord, le Moyen-Orient et l\'Asie du Sud-Est'
      },
      {
        icon: Award,
        title: 'Expertise en Personnalisation',
        description: 'Services OEM/ODM flexibles avec design sans ventilateur et stabilité industrielle'
      },
      {
        icon: TrendingUp,
        title: 'Croissance Rapide',
        description: 'Réponse rapide aux demandes du marché avec la chaîne d\'approvisionnement électronique forte de Shenzhen'
      }
    ]
  },
  de: {
    hero: {
      title: 'Über MagicChip',
      subtitle: 'Professionelle Mini-PC- und Industrie-Computing-Lösungen seit 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Die Shenzhen Magic Chip Technology Co., Ltd. wurde 2021 gegründet und ist ein professioneller Hersteller von Mini-PCs und industriellen Computerausrüstungen mit Sitz in Shenzhen, China. Wir sind auf Forschung und Entwicklung, Herstellung und Vertrieb von Mini-PCs, Industriecomputern, industriellen Hosts mit mehreren Ports, industriellen Tablets und Laptops spezialisiert. Unsere Produkte finden breite Anwendung in intelligenten Einzelhandel, digitaler Beschilderung, Finanz-Self-Service, industrieller Automatisierung, Bildung, Medizin und IoT.',
      highlights: [
        { icon: Cpu, title: 'Intel Prozessoren', desc: 'N-Serie, 13./14. Gen Core' },
        { icon: Network, title: 'Hochgeschwindigkeitsnetzwerk', desc: '2.5GbE/10GbE Multi-Port' },
        { icon: Monitor, title: 'Multi-Bildschirm', desc: '4K Display Unterstützung' },
        { icon: Zap, title: '4G/5G Bereit', desc: 'Drahtloses Modul Unterstützung' }
      ]
    },
    companyProfile: {
      title: 'Unternehmensprofil',
      stats: [
        { label: 'Gegründet', value: '2021' },
        { label: 'Unternehmenstyp', value: 'Hersteller' },
        { label: 'Mitarbeiter', value: '50-100' },
        { label: 'Jahresumsatz', value: '$10M-25M' }
      ]
    },
    philosophy: {
      title: 'Unsere Philosophie',
      content: 'MagicChip arbeitet nach den Prinzipien "Innovation, Zuverlässigkeit und Flexibilität". Unter Nutzung der starken Elektronik-Lieferkette von Shenzhen reagieren wir schnell auf Marktanforderungen und bieten komplette Dienstleistungen von Mustern bis zur Massenproduktion für nationale und internationale Kunden.',
      items: [
        { title: 'Innovation', desc: 'Kontinuierliche Produktgestaltungsinnovation mit Fokus auf Miniaturisierung und lüfterlose Kühlung' },
        { title: 'Zuverlässigkeit', desc: 'Industrietaugliche Stabilität mit strengen Tests für langfristige Leistung' },
        { title: 'Flexibilität', desc: 'Flexible OEM/ODM-Anpassungsdienste für spezifische Anforderungen' }
      ]
    },
    markets: {
      title: 'Globale Märkte',
      content: 'Unsere Produkte werden hauptsächlich nach Europa, Nordamerika, den Nahen Osten und nach Südostasien exportiert und bedienen Kunden weltweit mit leistungsstarken Embedded-Computing-Lösungen.',
      regions: ['Europa', 'Nordamerika', 'Naher Osten', 'Südostasien']
    },
    sections: [
      {
        title: 'Unser Unternehmen',
        description: 'Erfahren Sie mehr über unsere Geschichte, Mission und unser Engagement für leistungsstarke Embedded-Computing-Lösungen',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Gegründet', value: '2021' },
          { label: 'Mitarbeiter', value: '50-100' },
          { label: 'Jahresumsatz', value: '$10M-25M' }
        ]
      },
      {
        title: 'Fertigungsanlagen',
        description: 'Entdecken Sie unsere Produktionskapazitäten und flexiblen OEM/ODM-Anpassungsdienste',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Produktionslinien', value: 'Mehrere' },
          { label: 'Tageskapazität', value: '1000+' },
          { label: 'Qualitätsrate', value: '99.5%' }
        ]
      },
      {
        title: 'Führungsteam',
        description: 'Lernen Sie unser erfahrenes Team kennen, das Innovationen im industriellen Computing vorantreibt',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Kernteam', value: '8' },
          { label: 'Durchschn. Erfahrung', value: '15+' },
          { label: 'Exportmärkte', value: '30+' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Globaler Export',
        description: 'Produkte exportiert nach Europa, Nordamerika, Naher Osten und Südostasien'
      },
      {
        icon: Award,
        title: 'Anpassungsexpertise',
        description: 'Flexible OEM/ODM-Dienste mit lüfterlosem Design und industrieller Stabilität'
      },
      {
        icon: TrendingUp,
        title: 'Schnelles Wachstum',
        description: 'Schnelle Reaktion auf Marktanforderungen mit Shenzhens starker Elektronik-Lieferkette'
      }
    ]
  },
  it: {
    hero: {
      title: 'Su MagicChip',
      subtitle: 'Soluzioni Professionali di Mini PC e Informatica Industriale dal 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fondata nel 2021, Shenzhen Magic Chip Technology Co., Ltd. è un produttore professionale di mini PC e attrezzature informatiche industriali con sede a Shenzhen, in Cina. Siamo specializzati in R&S, produzione e vendita di mini PC, computer industriali, host industriali multi-porta, tablet industriali e laptop. I nostri prodotti sono ampiamente utilizzati nella vendita al dettaglio intelligente, segnaletica digitale, self-service finanziario, automazione industriale, istruzione, medicale e IoT.',
      highlights: [
        { icon: Cpu, title: 'Processori Intel', desc: 'Serie N, Core 13a/14a Gen' },
        { icon: Network, title: 'Rete ad Alta Velocità', desc: 'Multi-Porta 2.5GbE/10GbE' },
        { icon: Monitor, title: 'Multi-Schermo', desc: 'Supporto Display 4K' },
        { icon: Zap, title: '4G/5G Pronto', desc: 'Supporto Modulo Wireless' }
      ]
    },
    companyProfile: {
      title: 'Profilo Aziendale',
      stats: [
        { label: 'Fondata', value: '2021' },
        { label: 'Tipo di Azienda', value: 'Produttore' },
        { label: 'Dipendenti', value: '50-100' },
        { label: 'Fatturato Annuo', value: '$10M-25M' }
      ]
    },
    philosophy: {
      title: 'La Nostra Filosofia',
      content: 'MagicChip opera secondo i principi di "Innovazione, Affidabilità e Flessibilità". Sfruttando il vantaggio della potente catena di approvvigionamento elettronica di Shenzhen, rispondiamo rapidamente alle esigenze del mercato e forniamo servizi completi dai campioni alla produzione di massa per clienti nazionali e internazionali.',
      items: [
        { title: 'Innovazione', desc: 'Innovazione continua nella progettazione dei prodotti focalizzata sulla miniaturizzazione e sul raffreddamento senza ventola' },
        { title: 'Affidabilità', desc: 'Stabilità di grado industriale con test rigorosi per prestazioni a lungo termine' },
        { title: 'Flessibilità', desc: 'Servizi di personalizzazione OEM/ODM flessibili su misura per esigenze specifiche' }
      ]
    },
    markets: {
      title: 'Mercati Globali',
      content: 'I nostri prodotti sono principalmente esportati in Europa, Nord America, Medio Oriente e mercati del Sud-Est asiatico, servendo clienti in tutto il mondo con soluzioni di embedded computing ad alte prestazioni.',
      regions: ['Europa', 'Nord America', 'Medio Oriente', 'Sud-Est Asiatico']
    },
    sections: [
      {
        title: 'La Nostra Azienda',
        description: 'Scopri la nostra storia, missione e impegno per fornire soluzioni di embedded computing ad alte prestazioni',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Fondata', value: '2021' },
          { label: 'Dipendenti', value: '50-100' },
          { label: 'Fatturato Annuo', value: '$10M-25M' }
        ]
      },
      {
        title: 'Impianti di Produzione',
        description: 'Esplora le nostre capacità produttive e servizi di personalizzazione OEM/ODM flessibili',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Linee di Produzione', value: 'Multiple' },
          { label: 'Capacità Giornaliera', value: '1000+' },
          { label: 'Tasso di Qualità', value: '99.5%' }
        ]
      },
      {
        title: 'Team di Leadership',
        description: 'Incontra il nostro team esperto che guida l\'innovazione nell\'informatica industriale',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Team Core', value: '8' },
          { label: 'Esperienza Media', value: '15+' },
          { label: 'Mercati di Esportazione', value: '30+' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Esportazione Globale',
        description: 'Prodotti esportati in Europa, Nord America, Medio Oriente e Sud-Est Asiatico'
      },
      {
        icon: Award,
        title: 'Competenza nella Personalizzazione',
        description: 'Servizi OEM/ODM flessibili con design senza ventola e stabilità industriale'
      },
      {
        icon: TrendingUp,
        title: 'Crescita Rapida',
        description: 'Risposta rapida alle esigenze del mercato con la solida catena di approvvigionamento elettronica di Shenzhen'
      }
    ]
  },
  es: {
    hero: {
      title: 'Sobre MagicChip',
      subtitle: 'Soluciones Profesionales de Mini PC e Informática Industrial desde 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fundada en 2021, Shenzhen Magic Chip Technology Co., Ltd. es un fabricante profesional de mini PC y equipos informáticos industriales con sede en Shenzhen, China. Nos especializamos en I+D, fabricación y venta de mini PC, computadoras industriales, hosts industriales multi-puerto, tabletas industriales y laptops. Nuestros productos se utilizan ampliamente en venta minorista inteligente, señalización digital, autoservicio financiero, automatización industrial, educación, médico e IoT.',
      highlights: [
        { icon: Cpu, title: 'Procesadores Intel', desc: 'Serie N, Core 13a/14a Gen' },
        { icon: Network, title: 'Red de Alta Velocidad', desc: 'Multi-Puerto 2.5GbE/10GbE' },
        { icon: Monitor, title: 'Multi-Pantalla', desc: 'Soporte Pantalla 4K' },
        { icon: Zap, title: '4G/5G Listo', desc: 'Soporte Módulo Inalámbrico' }
      ]
    },
    companyProfile: {
      title: 'Perfil de la Empresa',
      stats: [
        { label: 'Fundada', value: '2021' },
        { label: 'Tipo de Empresa', value: 'Fabricante' },
        { label: 'Empleados', value: '50-100' },
        { label: 'Ingresos Anuales', value: '$10M-25M' }
      ]
    },
    philosophy: {
      title: 'Nuestra Filosofía',
      content: 'MagicChip opera bajo los principios de "Innovación, Confiabilidad y Flexibilidad". Aprovechando la ventaja de la poderosa cadena de suministro de electrónica de Shenzhen, respondemos rápidamente a las demandas del mercado y proporcionamos servicios completos desde muestras hasta producción en masa para clientes nacionales e internacionales.',
      items: [
        { title: 'Innovación', desc: 'Innovación continua en diseño de productos enfocada en miniaturización y enfriamiento sin ventilador' },
        { title: 'Confiabilidad', desc: 'Estabilidad de grado industrial con pruebas rigurosas para rendimiento a largo plazo' },
        { title: 'Flexibilidad', desc: 'Servicios de personalización OEM/ODM flexibles adaptados a requisitos específicos' }
      ]
    },
    markets: {
      title: 'Mercados Globales',
      content: 'Nuestros productos se exportan principalmente a Europa, Norteamérica, Medio Oriente y mercados del Sudeste Asiático, atendiendo clientes en todo el mundo con soluciones de computación integrada de alto rendimiento.',
      regions: ['Europa', 'Norteamérica', 'Medio Oriente', 'Sudeste Asiático']
    },
    sections: [
      {
        title: 'Nuestra Empresa',
        description: 'Conoce nuestra historia, misión y compromiso de proporcionar soluciones de computación integrada de alto rendimiento',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Fundada', value: '2021' },
          { label: 'Empleados', value: '50-100' },
          { label: 'Ingresos Annuales', value: '$10M-25M' }
        ]
      },
      {
        title: 'Instalaciones de Fabricación',
        description: 'Explora nuestras capacidades de producción y servicios de personalización OEM/ODM flexibles',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Líneas de Producción', value: 'Múltiples' },
          { label: 'Capacidad Diaria', value: '1000+' },
          { label: 'Tasa de Calidad', value: '99.5%' }
        ]
      },
      {
        title: 'Equipo de Liderazgo',
        description: 'Conoce a nuestro equipo experimentado que impulsa la innovación en informática industrial',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Equipo Principal', value: '8' },
          { label: 'Experiencia Promedio', value: '15+' },
          { label: 'Mercados de Exportación', value: '30+' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Exportación Global',
        description: 'Productos exportados a Europa, Norteamérica, Medio Oriente y Sudeste Asiático'
      },
      {
        icon: Award,
        title: 'Experiencia en Personalización',
        description: 'Servicios OEM/ODM flexibles con diseño sin ventilador y estabilidad industrial'
      },
      {
        icon: TrendingUp,
        title: 'Crecimiento Rápido',
        description: 'Respuesta rápida a las demandas del mercado con la sólida cadena de suministro electrónico de Shenzhen'
      }
    ]
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const data = aboutData[language] || aboutData.en;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{data.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Company Intro with Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.intro?.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {data.intro?.content}
            </p>
          </motion.div>

          {/* Product Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {data.intro?.highlights?.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Profile Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900">{data.companyProfile?.title}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {data.companyProfile?.stats?.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.philosophy?.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.philosophy?.content}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {data.philosophy?.items?.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Markets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.markets?.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.markets?.content}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {data.markets?.regions?.map((region, index) => (
              <div key={index} className="bg-white rounded-full px-8 py-3 shadow-sm">
                <span className="font-semibold text-gray-800">{region}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.sections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <section.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {section.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <span className="flex items-center text-blue-600 font-medium">
                  {'Learn More'}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
