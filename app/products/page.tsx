'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Brain, Network, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const productsData = {
  en: {
    hero: {
      title: 'Our Products',
      subtitle: 'Innovative semiconductor solutions powering the future of computing'
    },
    categories: [
      {
        title: 'Enterprise CPUs',
        description: 'High-performance processors designed for data center and enterprise workloads',
        features: ['Up to 128 cores', 'Advanced cache architecture', 'Enterprise-grade reliability', 'Virtualization support'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'AI Accelerators',
        description: 'Specialized chips optimized for machine learning and AI workloads',
        features: ['Tensor processing cores', 'High memory bandwidth', 'Low latency inference', 'Scalable architecture'],
        icon: Brain,
        href: '#'
      },
      {
        title: 'Network Chips',
        description: 'Advanced connectivity solutions for next-generation networks',
        features: ['High-speed data transfer', 'Low power consumption', 'Advanced security features', 'Flexible programmability'],
        icon: Network,
        href: '#'
      },
      {
        title: 'Security Modules',
        description: 'Hardware-based security solutions for data protection',
        features: ['Hardware encryption', 'Secure boot', 'Tamper detection', 'Key management'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: 'Need a Custom Solution?',
      description: 'We offer customized semiconductor solutions tailored to your specific requirements.',
      button: 'Contact Sales'
    },
    learnMore: 'Learn More'
  },
  fr: {
    hero: {
      title: 'Nos Produits',
      subtitle: 'Solutions semiconductrices innovantes alimentant le futur de l\'informatique'
    },
    categories: [
      {
        title: 'Processeurs Entreprise',
        description: 'Processeurs haute performance conçus pour les centres de données et les charges de travail entreprise',
        features: ['Jusqu\'à 128 cœurs', 'Architecture de cache avancée', 'Fiabilité de niveau entreprise', 'Support de virtualisation'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'Accélérateurs IA',
        description: 'Puces spécialisées optimisées pour les charges de travail d\'apprentissage automatique et d\'IA',
        features: ['Cœurs de traitement tensoriel', 'Large bande passante mémoire', 'Inférence à faible latence', 'Architecture évolutive'],
        icon: Brain,
        href: '#'
      },
      {
        title: 'Puces Réseau',
        description: 'Solutions de connectivité avancées pour les réseaux de nouvelle génération',
        features: ['Transfert de données haute vitesse', 'Faible consommation d\'énergie', 'Fonctionnalités de sécurité avancées', 'Programmabilité flexible'],
        icon: Network,
        href: '#'
      },
      {
        title: 'Modules de Sécurité',
        description: 'Solutions de sécurité basées sur le matériel pour la protection des données',
        features: ['Chiffrement matériel', 'Démarrage sécurisé', 'Détection de falsification', 'Gestion des clés'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: 'Besoin d\'une Solution Personnalisée?',
      description: 'Nous proposons des solutions semiconductrices personnalisées adaptées à vos besoins spécifiques.',
      button: 'Contacter les Ventes'
    },
    learnMore: 'En Savoir Plus'
  },
  de: {
    hero: {
      title: 'Unsere Produkte',
      subtitle: 'Innovative Halbleiterlösungen, die die Zukunft des Computing antreiben'
    },
    categories: [
      {
        title: 'Enterprise-Prozessoren',
        description: 'Hochleistungsprozessoren für Rechenzentren und Enterprise-Workloads',
        features: ['Bis zu 128 Kerne', 'Erweiterte Cache-Architektur', 'Enterprise-Zuverlässigkeit', 'Virtualisierungsunterstützung'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'KI-Beschleuniger',
        description: 'Spezialisierte Chips für maschinelles Lernen und KI-Workloads',
        features: ['Tensor-Verarbeitungskerne', 'Hohe Speicherbandbreite', 'Inferenz mit niedriger Latenz', 'Skalierbare Architektur'],
        icon: Brain,
        href: '#'
      },
      {
        title: 'Netzwerk-Chips',
        description: 'Fortgeschrittene Konnektivitätslösungen für Netzwerke der nächsten Generation',
        features: ['Hochgeschwindigkeits-Datentransfer', 'Niedriger Stromverbrauch', 'Erweiterte Sicherheitsfunktionen', 'Flexible Programmierbarkeit'],
        icon: Network,
        href: '#'
      },
      {
        title: 'Sicherheitsmodule',
        description: 'Hardware-basierte Sicherheitslösungen für Datenschutz',
        features: ['Hardware-Verschlüsselung', 'Sicherer Start', 'Manipulationserkennung', 'Schlüsselverwaltung'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: 'Benötigen Sie eine Maßgeschneiderte Lösung?',
      description: 'Wir bieten maßgeschneiderte Halbleiterlösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind.',
      button: 'Vertrieb Kontaktieren'
    },
    learnMore: 'Mehr Erfahren'
  },
  it: {
    hero: {
      title: 'I Nostri Prodotti',
      subtitle: 'Soluzioni semiconduttrici innovative che alimentano il futuro del computing'
    },
    categories: [
      {
        title: 'CPU Enterprise',
        description: 'Processori ad alte prestazioni progettati per data center e carichi di lavoro enterprise',
        features: ['Fino a 128 core', 'Architettura cache avanzata', 'Affidabilità di livello enterprise', 'Supporto alla virtualizzazione'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'Acceleratori IA',
        description: 'Chip specializzati ottimizzati per carichi di lavoro di machine learning e IA',
        features: ['Core di elaborazione tensoriale', 'Alta larghezza di banda di memoria', 'Inferenza a bassa latenza', 'Architettura scalabile'],
        icon: Brain,
        href: '#'
      },
      {
        title: 'Chip di Rete',
        description: 'Soluzioni di connettività avanzate per reti di nuova generazione',
        features: ['Trasferimento dati ad alta velocità', 'Basso consumo energetico', 'Funzionalità di sicurezza avanzate', 'Programmabilità flessibile'],
        icon: Network,
        href: '#'
      },
      {
        title: 'Moduli di Sicurezza',
        description: 'Soluzioni di sicurezza basate su hardware per la protezione dei dati',
        features: ['Crittografia hardware', 'Avvio sicuro', 'Rilevamento manomissioni', 'Gestione delle chiavi'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: 'Hai Bisogno di una Soluzione Personalizzata?',
      description: 'Offriamo soluzioni semiconduttrici personalizzate adattate alle tue esigenze specifiche.',
      button: 'Contatta le Vendite'
    },
    learnMore: 'Scopri di Più'
  },
  es: {
    hero: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones semiconductrices innovadoras que impulsan el futuro de la computación'
    },
    categories: [
      {
        title: 'CPU Empresariales',
        description: 'Procesadores de alto rendimiento diseñados para centros de datos y cargas de trabajo empresariales',
        features: ['Hasta 128 núcleos', 'Arquitectura de caché avanzada', 'Confiabilidad de nivel empresarial', 'Soporte de virtualización'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'Aceleradores IA',
        description: 'Chip especializados optimizados para cargas de trabajo de aprendizaje automático e IA',
        features: ['Núcleos de procesamiento tensorial', 'Ancho de banda de memoria alto', 'Inferencia de baja latencia', 'Arquitectura escalable'],
        icon: Brain,
        href: '#'
      },
      {
        title: 'Chips de Red',
        description: 'Soluciones de conectividad avanzadas para redes de próxima generación',
        features: ['Transferencia de datos de alta velocidad', 'Bajo consumo de energía', 'Funciones de seguridad avanzadas', 'Programabilidad flexible'],
        icon: Network,
        href: '#'
      },
      {
        title: 'Módulos de Seguridad',
        description: 'Soluciones de seguridad basadas en hardware para la protección de datos',
        features: ['Cifrado de hardware', 'Arranque seguro', 'Detección de manipulaciones', 'Gestión de claves'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: '¿Necesitas una Solución Personalizada?',
      description: 'Ofrecemos soluciones semiconductrices personalizadas adaptadas a tus requisitos específicos.',
      button: 'Contactar Ventas'
    },
    learnMore: 'Más Información'
  }
};

export default function ProductsPage() {
  const { language } = useLanguage();
  const data = productsData[language] || productsData.en;

  return (
    <main className="min-h-screen bg-white">
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <a
                    href={category.href}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {data.learnMore}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{data.cta.title}</h2>
            <p className="text-lg mb-8 opacity-90">{data.cta.description}</p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              {data.cta.button}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
