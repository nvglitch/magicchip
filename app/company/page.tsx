'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, TrendingUp, MapPin, Calendar, ArrowRight, Lightbulb, Star, Leaf, Handshake } from 'lucide-react';

const companyData = {
  en: {
    hero: {
      title: 'Our Company',
      subtitle: 'Pioneering the future of enterprise hardware technology since 2015'
    },
    stats: [
      { value: '10+', label: 'Years of Experience' },
      { value: '500+', label: 'Enterprise Clients' },
      { value: '50M+', label: 'Chips Shipped' },
      { value: '30+', label: 'Countries Served' }
    ],
    mission: {
      title: 'Our Mission',
      content: 'To empower enterprises with cutting-edge hardware solutions that drive innovation, efficiency, and sustainable growth. We are committed to delivering semiconductor technologies that form the backbone of modern digital infrastructure.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the global leader in enterprise-grade chip solutions, recognized for our technological innovation, quality excellence, and positive impact on society.'
    },
    values: [
      {
        title: 'Innovation',
        description: 'We constantly push the boundaries of what\'s possible in chip design and manufacturing.',
        icon: 'Lightbulb'
      },
      {
        title: 'Quality',
        description: 'Every chip we produce meets the highest standards of reliability and performance.',
        icon: 'Star'
      },
      {
        title: 'Sustainability',
        description: 'We are committed to reducing our environmental footprint through green manufacturing.',
        icon: 'Leaf'
      },
      {
        title: 'Partnership',
        description: 'We build long-term relationships with our clients based on trust and mutual success.',
        icon: 'Handshake'
      }
    ],
    timeline: [
      { year: '2015', title: 'Founded', description: 'MagicChip was established in Shenzhen' },
      { year: '2017', title: 'First Product', description: 'Launched MC-Pro X1 series' },
      { year: '2019', title: 'Global Expansion', description: 'Opened offices in US and Europe' },
      { year: '2021', title: 'AI Focus', description: 'Introduced AI accelerator product line' },
      { year: '2023', title: 'IPO', description: 'Went public on NASDAQ' },
      { year: '2025', title: 'New Fab', description: 'Opened advanced manufacturing facility' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: 'Office Address' }
    ]
  },
  fr: {
    hero: {
      title: 'À Propos de MagicChip',
      subtitle: 'Pionnier de l\'innovation semiconductrice depuis 2015'
    },
    stats: [
      { value: '10+', label: 'Années d\'Expérience' },
      { value: '500+', label: 'Clients Entreprise' },
      { value: '50M+', label: 'Puces Livrées' },
      { value: '30+', label: 'Pays Desservis' }
    ],
    mission: {
      title: 'Notre Mission',
      content: 'Révolutionner l\'industrie des semi-conducteurs avec des solutions de calcul de pointe qui alimentent l\'avenir de la technologie.'
    },
    vision: {
      title: 'Notre Vision',
      content: 'Devenir le leader mondial des semi-conducteurs, en permettant des avancées dans l\'IA, le cloud computing et l\'edge computing.'
    },
    values: [
      { title: 'Innovation', description: 'Nous repoussons constamment les limites de ce qui est possible dans la conception et la fabrication des puces.', icon: 'Lightbulb' },
      { title: 'Qualité', description: 'Chaque puce que nous produisons répond aux plus hautes normes de fiabilité et de performance.', icon: 'Star' },
      { title: 'Durabilité', description: 'Nous nous engageons à réduire notre empreinte environnementale grâce à une fabrication verte.', icon: 'Leaf' },
      { title: 'Partenariat', description: 'Nous construisons des relations à long terme avec nos clients fondées sur la confiance et le succès mutuel.', icon: 'Handshake' }
    ],
    timeline: [
      { year: '2015', title: 'Fondation', description: 'MagicChip a été fondé à Shenzhen' },
      { year: '2017', title: 'Premier Produit', description: 'Lancement de la série MC-Pro X1' },
      { year: '2019', title: 'Expansion Mondiale', description: 'Ouverture de bureaux aux États-Unis et en Europe' },
      { year: '2021', title: 'Focus IA', description: 'Introduction de la ligne de produits accélérateurs IA' },
      { year: '2023', title: 'Introduction en Bourse', description: 'Cotation au NASDAQ' },
      { year: '2025', title: 'Nouvelle Usine', description: 'Ouverture d\'une installation de fabrication avancée' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'Chine', address: 'Adresse du Bureau' }
    ]
  },
  de: {
    hero: {
      title: 'Über MagicChip',
      subtitle: 'Pionier der Halbleiterinnovation seit 2015'
    },
    stats: [
      { value: '10+', label: 'Jahre Erfahrung' },
      { value: '500+', label: 'Unternehmenskunden' },
      { value: '50M+', label: 'Ausgelieferte Chips' },
      { value: '30+', label: 'Bediente Länder' }
    ],
    mission: {
      title: 'Unsere Mission',
      content: 'Die Halbleiterindustrie mit Spitzentechnologie-Lösungen revolutionieren, die die Zukunft der Technologie antreiben.'
    },
    vision: {
      title: 'Unsere Vision',
      content: 'Weltmarktführer in Halbleitern werden und Fortschritte in KI, Cloud Computing und Edge Computing ermöglichen.'
    },
    values: [
      { title: 'Innovation', description: 'Wir erweitern ständig die Grenzen dessen, was in Chip-Design und -Fertigung möglich ist.', icon: 'Lightbulb' },
      { title: 'Qualität', description: 'Jeder Chip, den wir herstellen, erfüllt die höchsten Standards für Zuverlässigkeit und Leistung.', icon: 'Star' },
      { title: 'Nachhaltigkeit', description: 'Wir verpflichten uns, unseren ökologischen Fußabdruck durch grüne Fertigung zu reduzieren.', icon: 'Leaf' },
      { title: 'Partnerschaft', description: 'Wir bauen langfristige Beziehungen zu unseren Kunden auf Vertrauen und gemeinsamen Erfolg auf.', icon: 'Handshake' }
    ],
    timeline: [
      { year: '2015', title: 'Gründung', description: 'MagicChip wurde in Shenzhen gegründet' },
      { year: '2017', title: 'Erstes Produkt', description: 'Einführung der MC-Pro X1 Serie' },
      { year: '2019', title: 'Globale Expansion', description: 'Eröffnung von Büros in den USA und Europa' },
      { year: '2021', title: 'KI-Fokus', description: 'Einführung der KI-Beschleuniger-Produktlinie' },
      { year: '2023', title: 'Börsengang', description: 'Notierung am NASDAQ' },
      { year: '2025', title: 'Neue Fabrik', description: 'Eröffnung einer hochmodernen Fertigungsanlage' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: 'Büroadresse' }
    ]
  },
  it: {
    hero: {
      title: 'Chi Siamo MagicChip',
      subtitle: 'Pioniere dell\'innovazione nei semiconduttori dal 2015'
    },
    stats: [
      { value: '10+', label: 'Anni di Esperienza' },
      { value: '500+', label: 'Clienti Aziendali' },
      { value: '50M+', label: 'Chip Spediti' },
      { value: '30+', label: 'Paesi Serviti' }
    ],
    mission: {
      title: 'La Nostra Missione',
      content: 'Rivoluzionare l\'industria dei semiconduttori con soluzioni di calcolo all\'avanguardia che alimentano il futuro della tecnologia.'
    },
    vision: {
      title: 'La Nostra Visione',
      content: 'Diventare leader mondiale nei semiconduttori, permettendo progressi in IA, cloud computing e edge computing.'
    },
    values: [
      { title: 'Innovazione', description: 'Spingiamo costantemente i limiti di ciò che è possibile nella progettazione e produzione dei chip.', icon: 'Lightbulb' },
      { title: 'Qualità', description: 'Ogni chip che produciamo rispetta i più alti standard di affidabilità e prestazioni.', icon: 'Star' },
      { title: 'Sostenibilità', description: 'Ci impegniamo a ridurre il nostro impatto ambientale attraverso una produzione verde.', icon: 'Leaf' },
      { title: 'Partnership', description: 'Costruiamo relazioni a lungo termine con i nostri clienti basate su fiducia e successo reciproco.', icon: 'Handshake' }
    ],
    timeline: [
      { year: '2015', title: 'Fondazione', description: 'MagicChip è stata fondata a Shenzhen' },
      { year: '2017', title: 'Primo Prodotto', description: 'Lancio della serie MC-Pro X1' },
      { year: '2019', title: 'Espansione Globale', description: 'Apertura di uffici negli USA e in Europa' },
      { year: '2021', title: 'Focus IA', description: 'Introduzione della linea di prodotti acceleratori IA' },
      { year: '2023', title: 'IPO', description: 'Quotazione al NASDAQ' },
      { year: '2025', title: 'Nuova Fabbrica', description: 'Apertura di uno stabilimento produttivo avanzato' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'Cina', address: 'Indirizzo Ufficio' }
    ]
  },
  es: {
    hero: {
      title: 'Acerca de MagicChip',
      subtitle: 'Pionero en innovación de semiconductores desde 2015'
    },
    stats: [
      { value: '10+', label: 'Años de Experiencia' },
      { value: '500+', label: 'Clientes Empresariales' },
      { value: '50M+', label: 'Chips Enviados' },
      { value: '30+', label: 'Países Atendidos' }
    ],
    mission: {
      title: 'Nuestra Misión',
      content: 'Revolucionar la industria de semiconductores con soluciones informáticas de vanguardia que impulsan el futuro de la tecnología.'
    },
    vision: {
      title: 'Nuestra Visión',
      content: 'Convertirnos en el líder mundial en semiconductores, permitiendo avances en IA, computación en la nube y edge computing.'
    },
    values: [
      { title: 'Innovación', description: 'Constantemente superamos los límites de lo posible en el diseño y fabricación de chips.', icon: 'Lightbulb' },
      { title: 'Calidad', description: 'Cada chip que producimos cumple con los más altos estándares de confiabilidad y rendimiento.', icon: 'Star' },
      { title: 'Sostenibilidad', description: 'Nos comprometemos a reducir nuestra huella ambiental mediante fabricación verde.', icon: 'Leaf' },
      { title: 'Asociación', description: 'Construimos relaciones a largo plazo con nuestros clientes basadas en confianza y éxito mutuo.', icon: 'Handshake' }
    ],
    timeline: [
      { year: '2015', title: 'Fundación', description: 'MagicChip fue fundada en Shenzhen' },
      { year: '2017', title: 'Primer Producto', description: 'Lanzamiento de la serie MC-Pro X1' },
      { year: '2019', title: 'Expansión Global', description: 'Apertura de oficinas en EE.UU. y Europa' },
      { year: '2021', title: 'Enfoque IA', description: 'Introducción de la línea de productos aceleradores IA' },
      { year: '2023', title: 'OPV', description: 'Cotización en NASDAQ' },
      { year: '2025', title: 'Nueva Fábrica', description: 'Apertura de instalación de fabricación avanzada' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: 'Dirección de Oficina' }
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
                className="bg-white p-8 rounded-md shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.mission.title}</h2>
                <p className="text-gray-600 leading-relaxed">{data.mission.content}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-md shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
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
                  Leaf,
                  Handshake
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
                    <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mx-auto mb-4">
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
                  className="bg-gray-50 p-6 rounded-md max-w-md"
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
