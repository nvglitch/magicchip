'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Factory, Users, ArrowRight, Globe, Award, TrendingUp } from 'lucide-react';

const aboutData = {
  en: {
    hero: {
      title: 'About MagicChip',
      subtitle: 'Pioneering semiconductor innovation since 2015'
    },
    sections: [
      {
        title: 'Our Company',
        description: 'Learn about our history, mission, and vision for the future of semiconductor technology',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Founded', value: '2015' },
          { label: 'Employees', value: '500+' },
          { label: 'Patents', value: '120+' }
        ]
      },
      {
        title: 'Manufacturing Facilities',
        description: 'Explore our state-of-the-art fabrication facilities and production capabilities',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Factories', value: '3' },
          { label: 'Capacity', value: '10M+' },
          { label: 'Yield Rate', value: '99.9%' }
        ]
      },
      {
        title: 'Member Team',
        description: 'Meet our executive team driving innovation and growth in the semiconductor industry',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Executives', value: '8' },
          { label: 'Avg. Experience', value: '20+' },
          { label: 'Industry Awards', value: '15' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Global Presence',
        description: 'Operations in 4 continents with customers in 50+ countries'
      },
      {
        icon: Award,
        title: 'Industry Recognition',
        description: 'Award-winning products and consistent quality certifications'
      },
      {
        icon: TrendingUp,
        title: 'Rapid Growth',
        description: 'Year-over-year revenue growth of 40% for the past 5 years'
      }
    ]
  },
  fr: {
    hero: {
      title: 'À Propos de MagicChip',
      subtitle: 'Innovation semiconductrice pionnière depuis 2015'
    },
    sections: [
      {
        title: 'Notre Entreprise',
        description: 'Découvrez notre histoire, notre mission et notre vision pour l\'avenir de la technologie semiconductrice',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Fondée', value: '2015' },
          { label: 'Employés', value: '500+' },
          { label: 'Brevets', value: '120+' }
        ]
      },
      {
        title: 'Installations de Fabrication',
        description: 'Explorez nos installations de fabrication de pointe et nos capacités de production',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Usines', value: '3' },
          { label: 'Capacité', value: '10M+' },
          { label: 'Taux de Rendement', value: '99.9%' }
        ]
      },
      {
        title: 'Équipe Membre',
        description: 'Rencontrez notre équipe dirigeante qui stimule l\'innovation et la croissance dans l\'industrie semiconductrice',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Dirigeants', value: '8' },
          { label: 'Expérience Moyenne', value: '20+' },
          { label: 'Prix Industriels', value: '15' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Présence Globale',
        description: 'Opérations sur 4 continents avec des clients dans plus de 50 pays'
      },
      {
        icon: Award,
        title: 'Reconnaissance Industrielle',
        description: 'Produits primés et certifications de qualité constantes'
      },
      {
        icon: TrendingUp,
        title: 'Croissance Rapide',
        description: 'Croissance du chiffre d\'affaires de 40% par an au cours des 5 dernières années'
      }
    ]
  },
  de: {
    hero: {
      title: 'Über MagicChip',
      subtitle: 'Pionierin der Halbleiterinnovation seit 2015'
    },
    sections: [
      {
        title: 'Unser Unternehmen',
        description: 'Erfahren Sie mehr über unsere Geschichte, Mission und Vision für die Zukunft der Halbleitertechnologie',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Gegründet', value: '2015' },
          { label: 'Mitarbeiter', value: '500+' },
          { label: 'Patente', value: '120+' }
        ]
      },
      {
        title: 'Fertigungsanlagen',
        description: 'Entdecken Sie unsere hochmodernen Fertigungsanlagen und Produktionskapazitäten',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Fabriken', value: '3' },
          { label: 'Kapazität', value: '10M+' },
          { label: 'Ausbeute', value: '99.9%' }
        ]
      },
      {
        title: 'Mitglieder-Team',
        description: 'Lernen Sie unser Führungsteam kennen, das Innovation und Wachstum in der Halbleiterindustrie vorantreibt',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Führungskräfte', value: '8' },
          { label: 'Durchschn. Erfahrung', value: '20+' },
          { label: 'Industriepreise', value: '15' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Globale Präsenz',
        description: 'Operationen auf 4 Kontinenten mit Kunden in über 50 Ländern'
      },
      {
        icon: Award,
        title: 'Branchenanerkennung',
        description: 'Preisgekrönte Produkte und constante Qualitätszertifizierungen'
      },
      {
        icon: TrendingUp,
        title: 'Schnelles Wachstum',
        description: 'Jährliches Umsatzwachstum von 40% in den letzten 5 Jahren'
      }
    ]
  },
  it: {
    hero: {
      title: 'Su MagicChip',
      subtitle: 'Innovazione nei semiconduttori pioniera dal 2015'
    },
    sections: [
      {
        title: 'La Nostra Azienda',
        description: 'Scopri la nostra storia, missione e visione per il futuro della tecnologia dei semiconduttori',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Fondata', value: '2015' },
          { label: 'Dipendenti', value: '500+' },
          { label: 'Brevetti', value: '120+' }
        ]
      },
      {
        title: 'Impianti di Produzione',
        description: 'Esplora i nostri impianti di fabbricazione all\'avanguardia e le capacità produttive',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Fabbriche', value: '3' },
          { label: 'Capacità', value: '10M+' },
          { label: 'Tasso di Resa', value: '99.9%' }
        ]
      },
      {
        title: 'Team Membri',
        description: 'Incontra il nostro team dirigenziale che guida l\'innovazione e la crescita nell\'industria dei semiconduttori',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Dirigenti', value: '8' },
          { label: 'Esperienza Media', value: '20+' },
          { label: 'Premi Industriali', value: '15' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Presenza Globale',
        description: 'Operazioni su 4 continenti con clienti in più di 50 paesi'
      },
      {
        icon: Award,
        title: 'Riconoscimento Industriale',
        description: 'Prodotti pluripremiati e certificazioni di qualità costanti'
      },
      {
        icon: TrendingUp,
        title: 'Crescita Rapida',
        description: 'Crescita del fatturato del 40% anno su anno negli ultimi 5 anni'
      }
    ]
  },
  es: {
    hero: {
      title: 'Sobre MagicChip',
      subtitle: 'Innovación en semiconductores pionera desde 2015'
    },
    sections: [
      {
        title: 'Nuestra Empresa',
        description: 'Conoce nuestra historia, misión y visión para el futuro de la tecnología de semiconductores',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Fundada', value: '2015' },
          { label: 'Empleados', value: '500+' },
          { label: 'Patentes', value: '120+' }
        ]
      },
      {
        title: 'Instalaciones de Fabricación',
        description: 'Explora nuestras instalaciones de fabricación de vanguardia y capacidades de producción',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Fábricas', value: '3' },
          { label: 'Capacidad', value: '10M+' },
          { label: 'Tasa de Rendimiento', value: '99.9%' }
        ]
      },
      {
        title: 'Equipo de Miembros',
        description: 'Conoce a nuestro equipo directivo que impulsa la innovación y el crecimiento en la industria de semiconductores',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Ejecutivos', value: '8' },
          { label: 'Experiencia Promedio', value: '20+' },
          { label: 'Premios Industriales', value: '15' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Presencia Global',
        description: 'Operaciones en 4 continentes con clientes en más de 50 países'
      },
      {
        icon: Award,
        title: 'Reconocimiento Industrial',
        description: 'Productos galardonados y certificaciones de calidad consistentes'
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

      {/* About Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.sections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-md p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
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
                  className="bg-white rounded-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
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
