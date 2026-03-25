'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, TrendingUp, MapPin, Calendar, Lightbulb, Star, Handshake } from 'lucide-react';

const companyData = {
  en: {
    hero: {
      title: 'Our Company',
      subtitle: 'Professional Mini PC & Industrial Computing Solutions Since 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Founded in 2021, Shenzhen Magic Chip Technology Co., Ltd. is a professional manufacturer of mini PCs and industrial computing equipment based in Shenzhen, China. We specialize in R&D, manufacturing, and sales of mini PCs, industrial computers, multi-port industrial hosts, industrial tablets, and laptops. Our products are widely used in intelligent retail, digital signage, financial self-service, industrial automation, education, medical, and IoT fields.'
    },
    stats: [
      { value: '4+', label: 'Years of Experience' },
      { value: '50-100', label: 'Team Members' },
      { value: '$10M-25M', label: 'Annual Revenue' },
      { value: '30+', label: 'Export Markets' }
    ],
    mission: {
      title: 'Our Mission',
      content: 'To provide high-performance, reliable embedded computing solutions that empower businesses worldwide. We are committed to innovation in miniaturization, fanless design, and industrial-grade stability, delivering cost-effective products that meet diverse customer needs.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To become a leading global provider of mini PCs and industrial computing equipment, recognized for our flexible OEM/ODM services, rapid response capabilities, and excellence in embedded computing solutions.'
    },
    values: [
      {
        title: 'Innovation',
        description: 'We continuously innovate in product design, focusing on miniaturization, fanless cooling, and high-performance networking.',
        icon: 'Lightbulb'
      },
      {
        title: 'Quality',
        description: 'Every product undergoes rigorous testing to ensure industrial-grade reliability and long-term stability.',
        icon: 'Star'
      },
      {
        title: 'Flexibility',
        description: 'We offer flexible OEM/ODM customization services to meet specific customer requirements.',
        icon: 'Handshake'
      },
      {
        title: 'Reliability',
        description: 'We build trust through consistent product quality and responsive customer support.',
        icon: 'Award'
      }
    ],
    timeline: [
      { year: '2021', title: 'Founded', description: 'MagicChip was established in Shenzhen, focusing on mini PC R&D' },
      { year: '2022', title: 'Product Launch', description: 'Launched industrial mini PC and tablet product lines' },
      { year: '2023', title: 'Market Expansion', description: 'Expanded to European and North American markets' },
      { year: '2024', title: 'OEM/ODM Growth', description: 'Established flexible customization service capabilities' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  fr: {
    hero: {
      title: 'Notre Entreprise',
      subtitle: 'Solutions Professionnelles de Mini PC et Informatique Industrielle Depuis 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fondée en 2021, Shenzhen Magic Chip Technology Co., Ltd. est un fabricant professionnel de mini PC et d\'équipements informatiques industriels basé à Shenzhen, en Chine. Nous sommes spécialisés dans la R&D, la fabrication et la vente de mini PC, ordinateurs industriels, hôtes industriels multi-ports, tablettes industrielles et ordinateurs portables. Nos produits sont largement utilisés dans la vente au détail intelligente, la signalisation numérique, les services financiers en libre-service, l\'automatisation industrielle, l\'éducation, la médecine et les domaines IoT.'
    },
    stats: [
      { value: '4+', label: 'Années d\'Expérience' },
      { value: '50-100', label: 'Membres de l\'Équipe' },
      { value: '$10M-25M', label: 'Revenus Annuels' },
      { value: '30+', label: 'Marchés d\'Export' }
    ],
    mission: {
      title: 'Notre Mission',
      content: 'Fournir des solutions informatiques embarquées performantes et fiables qui autonomisent les entreprises du monde entier. Nous nous engageons dans l\'innovation en miniaturisation, design sans ventilateur et stabilité industrielle.'
    },
    vision: {
      title: 'Notre Vision',
      content: 'Devenir un fournisseur mondial leader de mini PC et d\'équipements informatiques industriels, reconnu pour nos services OEM/ODM flexibles et notre excellence en solutions informatiques embarquées.'
    },
    values: [
      { title: 'Innovation', description: 'Nous innovons continuellement dans la conception des produits, en nous concentrant sur la miniaturisation et le refroidissement sans ventilateur.', icon: 'Lightbulb' },
      { title: 'Qualité', description: 'Chaque produit subit des tests rigoureux pour assurer une fiabilité de qualité industrielle.', icon: 'Star' },
      { title: 'Flexibilité', description: 'Nous offrons des services de personnalisation OEM/ODM flexibles pour répondre aux besoins spécifiques.', icon: 'Handshake' },
      { title: 'Fiabilité', description: 'Nous construisons la confiance grâce à une qualité de produit constante et un support client réactif.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Fondation', description: 'MagicChip a été fondé à Shenzhen, se concentrant sur la R&D des mini PC' },
      { year: '2022', title: 'Lancement Produit', description: 'Lancement de la première série de mini PC industriels et tablettes' },
      { year: '2023', title: 'Expansion Marché', description: 'Expansion vers les marchés européens et nord-américains' },
      { year: '2024', title: 'Croissance OEM/ODM', description: 'Établissement de capacités de service de personnalisation flexible' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'Chine', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  de: {
    hero: {
      title: 'Unser Unternehmen',
      subtitle: 'Professionelle Mini-PC- und Industrie-Computing-Lösungen seit 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Gegründet 2021, ist Shenzhen Magic Chip Technology Co., Ltd. ein professioneller Hersteller von Mini-PCs und industriellen Computerausrüstungen mit Sitz in Shenzhen, China. Wir sind auf F&E, Herstellung und Vertrieb von Mini-PCs, Industriecomputern, Multi-Port-Industrierechnern, Industrie-Tablets und Laptops spezialisiert. Unsere Produkte finden breite Anwendung in intelligentem Einzelhandel, Digital Signage, finanziellem Self-Service, industrieller Automatisierung, Bildung, Medizin und IoT-Bereichen.'
    },
    stats: [
      { value: '4+', label: 'Jahre Erfahrung' },
      { value: '50-100', label: 'Teammitglieder' },
      { value: '$10M-25M', label: 'Jahresumsatz' },
      { value: '30+', label: 'Exportmärkte' }
    ],
    mission: {
      title: 'Unsere Mission',
      content: 'Leistungsstarke, zuverlässige Embedded-Computing-Lösungen bereitzustellen, die Unternehmen weltweit stärken. Wir engagieren uns für Innovation in Miniaturisierung, lüfterlosem Design und industrieller Stabilität.'
    },
    vision: {
      title: 'Unsere Vision',
      content: 'Ein führender globaler Anbieter von Mini-PCs und industriellen Computerausrüstungen werden, anerkannt für unsere flexiblen OEM/ODM-Dienstleistungen und Exzellenz in Embedded-Computing-Lösungen.'
    },
    values: [
      { title: 'Innovation', description: 'Wir innovieren kontinuierlich im Produktdesign mit Fokus auf Miniaturisierung und lüfterlose Kühlung.', icon: 'Lightbulb' },
      { title: 'Qualität', description: 'Jedes Produkt durchläuft strenge Tests, um industrietaugliche Zuverlässigkeit zu gewährleisten.', icon: 'Star' },
      { title: 'Flexibilität', description: 'Wir bieten flexible OEM/ODM-Anpassungsdienste, um spezifische Kundenanforderungen zu erfüllen.', icon: 'Handshake' },
      { title: 'Zuverlässigkeit', description: 'Wir bauen Vertrauen durch konstante Produktqualität und reaktionsschnellen Kundensupport auf.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Gründung', description: 'MagicChip wurde in Shenzhen gegründet, Fokus auf Mini-PC-F&E' },
      { year: '2022', title: 'Produkteinführung', description: 'Einführung der ersten Serie industrieller Mini-PCs und Tablets' },
      { year: '2023', title: 'Marktexpansion', description: 'Expansion auf europäische und nordamerikanische Märkte' },
      { year: '2024', title: 'OEM/ODM-Wachstum', description: 'Aufbau flexibler Anpassungsdienstleistungen' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  it: {
    hero: {
      title: 'La Nostra Azienda',
      subtitle: 'Soluzioni Professionali di Mini PC e Informatica Industriale dal 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fondata nel 2021, Shenzhen Magic Chip Technology Co., Ltd. è un produttore professionale di mini PC e attrezzature informatiche industriali con sede a Shenzhen, in Cina. Siamo specializzati in R&S, produzione e vendita di mini PC, computer industriali, host industriali multi-porta, tablet industriali e laptop. I nostri prodotti sono ampiamente utilizzati nella vendita al dettaglio intelligente, digital signage, self-service finanziario, automazione industriale, istruzione, medicina e campi IoT.'
    },
    stats: [
      { value: '4+', label: 'Anni di Esperienza' },
      { value: '50-100', label: 'Membri del Team' },
      { value: '$10M-25M', label: 'Fatturato Annuo' },
      { value: '30+', label: 'Mercati di Esportazione' }
    ],
    mission: {
      title: 'La Nostra Missione',
      content: 'Fornire soluzioni di embedded computing ad alte prestazioni e affidabili che diano potere alle aziende in tutto il mondo. Ci impegniamo nell\'innovazione in miniaturizzazione, design senza ventola e stabilità industriale.'
    },
    vision: {
      title: 'La Nostra Visione',
      content: 'Diventare un fornitore globale leader di mini PC e attrezzature informatiche industriali, riconosciuto per i nostri servizi OEM/ODM flessibili e l\'eccellenza nelle soluzioni di embedded computing.'
    },
    values: [
      { title: 'Innovazione', description: 'Innoviamo continuamente nella progettazione dei prodotti, concentrandoci sulla miniaturizzazione e sul raffreddamento senza ventola.', icon: 'Lightbulb' },
      { title: 'Qualità', description: 'Ogni prodotto viene sottoposto a test rigorosi per garantire affidabilità di grado industriale.', icon: 'Star' },
      { title: 'Flessibilità', description: 'Offriamo servizi di personalizzazione OEM/ODM flessibili per soddisfare requisiti specifici dei clienti.', icon: 'Handshake' },
      { title: 'Affidabilità', description: 'Costruiamo fiducia attraverso una qualità del prodotto costante e un supporto clienti reattivo.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Fondazione', description: 'MagicChip è stata fondata a Shenzhen, concentrandosi sulla R&S dei mini PC' },
      { year: '2022', title: 'Lancio Prodotto', description: 'Lancio della prima serie di mini PC industriali e tablet' },
      { year: '2023', title: 'Espansione Mercato', description: 'Espansione verso i mercati europei e nordamericani' },
      { year: '2024', title: 'Crescita OEM/ODM', description: 'Stabilimento di capacità di servizio di personalizzazione flessibile' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'Cina', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  es: {
    hero: {
      title: 'Nuestra Empresa',
      subtitle: 'Soluciones Profesionales de Mini PC e Informática Industrial desde 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fundada en 2021, Shenzhen Magic Chip Technology Co., Ltd. es un fabricante profesional de mini PC y equipos informáticos industriales con sede en Shenzhen, China. Nos especializamos en I+D, fabricación y venta de mini PC, computadoras industriales, hosts industriales multi-puerto, tabletas industriales y laptops. Nuestros productos se utilizan ampliamente en venta minorista inteligente, señalización digital, autoservicio financiero, automatización industrial, educación, medicina y campos IoT.'
    },
    stats: [
      { value: '4+', label: 'Años de Experiencia' },
      { value: '50-100', label: 'Miembros del Equipo' },
      { value: '$10M-25M', label: 'Ingresos Anuales' },
      { value: '30+', label: 'Mercados de Exportación' }
    ],
    mission: {
      title: 'Nuestra Misión',
      content: 'Proporcionar soluciones de computación integrada de alto rendimiento y confiables que empoderen a las empresas de todo el mundo. Nos comprometemos con la innovación en miniaturización, diseño sin ventilador y estabilidad industrial.'
    },
    vision: {
      title: 'Nuestra Visión',
      content: 'Convertirnos en un proveedor global líder de mini PC y equipos informáticos industriales, reconocido por nuestros servicios OEM/ODM flexibles y la excelencia en soluciones de computación integrada.'
    },
    values: [
      { title: 'Innovación', description: 'Innovamos continuamente en el diseño de productos, centrándonos en la miniaturización y el enfriamiento sin ventilador.', icon: 'Lightbulb' },
      { title: 'Calidad', description: 'Cada producto se somete a pruebas rigurosas para garantizar confiabilidad de grado industrial.', icon: 'Star' },
      { title: 'Flexibilidad', description: 'Ofrecemos servicios de personalización OEM/ODM flexibles para satisfacer requisitos específicos del cliente.', icon: 'Handshake' },
      { title: 'Confiabilidad', description: 'Construimos confianza a través de una calidad de producto constante y soporte al cliente receptivo.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Fundación', description: 'MagicChip fue fundada en Shenzhen, enfocándose en I+D de mini PC' },
      { year: '2022', title: 'Lanzamiento Producto', description: 'Lanzamiento de la primera serie de mini PC industriales y tabletas' },
      { year: '2023', title: 'Expansión Mercado', description: 'Expansión a mercados europeos y norteamericanos' },
      { year: '2024', title: 'Crecimiento OEM/ODM', description: 'Establecimiento de capacidades de servicio de personalización flexible' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  }
};

export default function CompanyPage() {
  const { language } = useLanguage();
  // Fallback to English for languages that don't have translations yet
  const dataLanguage = (companyData as any)[language] ? language : 'en';
  const data = (companyData as any)[dataLanguage];

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

        {/* Company Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.intro?.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.intro?.content}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.mission.title}</h2>
                <p className="text-gray-600 leading-relaxed">{data.mission.content}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.vision.title}</h2>
                <p className="text-gray-600 leading-relaxed">{data.vision.content}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {'Our Core Values'}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {data.values.map((value: any, index: number) => {
                const iconMap: Record<string, any> = {
                  Lightbulb,
                  Star,
                  Handshake,
                  Award
                };
                const IconComponent = iconMap[value.icon] || Lightbulb;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {'Our Journey'}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block" />
              <div className="space-y-12">
                {data.timeline.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 md:text-right pr-8">
                      <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.description}</div>
                    </div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0 mx-4 md:mx-0 relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {'Office Location'}
            </h2>
            <div className="flex justify-center">
              {data.locations.map((location: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg max-w-md"
                >
                  <MapPin className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">{location.city}</h3>
                  <p className="text-gray-600 text-sm">{location.country}</p>
                  <p className="text-gray-500 text-sm mt-2">{location.address}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
