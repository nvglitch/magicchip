'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Shield, Monitor, Server, ArrowRight, CheckCircle } from 'lucide-react';

const productsData = {
  en: {
    hero: {
      title: 'Our Products',
      subtitle: 'Innovative semiconductor solutions powering the future of computing'
    },
    categories: [
      {
        title: 'Industrial Mini PC',
        description: 'Fanless, compact industrial computers designed for harsh environments and 24/7 operation.',
        features: ['Fanless cooling system', 'Wide temperature range', 'Intel N-series/Core processors', 'Multi-port connectivity'],
        icon: Cpu,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-933739702/Industrial_PC.html?spm=a2700.shop_plgr.88.23.79c77121OixJyz'
      },
      {
        title: 'Firewall Mini PC',
        description: 'Network security appliances with advanced firewall capabilities and multi-Gigabit ports.',
        features: ['2.5GbE/10GbE ports', 'Advanced firewall software', 'VPN support', 'Industrial-grade design'],
        icon: Shield,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932323740/Firewall_Mini_PC.html?spm=a2700.shop_plgr.88.32.5c807121rnWOr9'
      },
      {
        title: 'Desktop Mini PC',
        description: 'Compact desktop computers ideal for business, education, and digital signage applications.',
        features: ['Intel N-series processors', '4K display support', 'Low power consumption', 'VESA mount compatible'],
        icon: Monitor,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932313801/Dekstop_Mini_PC.html?spm=a2700.shop_plgr.88.28.26c87121PeanxV'
      },
      {
        title: '1U/2U Firewall Server PC',
        description: 'Rackmount firewall servers for enterprise network security with high throughput.',
        features: ['1U/2U rackmount form factor', 'Multiple LAN ports', 'High-performance routing', 'Enterprise firewall OS support'],
        icon: Server,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-952444890/1U_2U_Firewall_Server_PC.html?spm=a2700.shop_plgr.88.18.48957121p4KllR'
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
      subtitle: 'Solutions informatiques innovantes pour l\'avenir de l\'industrie'
    },
    categories: [
      {
        title: 'Mini PC Industriel',
        description: 'Ordinateurs industriels compacts sans ventilateur conçus pour les environnements difficiles et le fonctionnement 24/7.',
        features: ['Système de refroidissement sans ventilateur', 'Large plage de température', 'Processeurs Intel N-series/Core', 'Connectivité multi-ports'],
        icon: Cpu,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-933739702/Industrial_PC.html?spm=a2700.shop_plgr.88.23.79c77121OixJyz'
      },
      {
        title: 'Mini PC Firewall',
        description: 'Appliances de sécurité réseau avec capacités de firewall avancées et ports multi-Gigabit.',
        features: ['Ports 2.5GbE/10GbE', 'Logiciel firewall avancé', 'Support VPN', 'Design industriel'],
        icon: Shield,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932323740/Firewall_Mini_PC.html?spm=a2700.shop_plgr.88.32.5c807121rnWOr9'
      },
      {
        title: 'Mini PC de Bureau',
        description: 'Ordinateurs de bureau compacts idéaux pour les applications commerciales, éducatives et de signalétique numérique.',
        features: ['Processeurs Intel N-series', 'Support affichage 4K', 'Faible consommation', 'Compatible VESA'],
        icon: Monitor,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932313801/Dekstop_Mini_PC.html?spm=a2700.shop_plgr.88.28.26c87121PeanxV'
      },
      {
        title: 'Serveur Firewall 1U/2U',
        description: 'Serveurs firewall rack pour sécurité réseau d\'entreprise avec haut débit.',
        features: ['Format rack 1U/2U', 'Multiples ports LAN', 'Routage haute performance', 'Support OS firewall entreprise'],
        icon: Server,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-952444890/1U_2U_Firewall_Server_PC.html?spm=a2700.shop_plgr.88.18.48957121p4KllR'
      }
    ],
    cta: {
      title: 'Besoin d\'une Solution Personnalisée?',
      description: 'Nous proposons des solutions personnalisées adaptées à vos besoins spécifiques.',
      button: 'Contacter les Ventes'
    },
    learnMore: 'En Savoir Plus'
  },
  de: {
    hero: {
      title: 'Unsere Produkte',
      subtitle: 'Innovative Computerlösungen für die industrielle Zukunft'
    },
    categories: [
      {
        title: 'Industrieller Mini-PC',
        description: 'Lüfterlose, kompakte Industriecomputer für raue Umgebungen und 24/7-Betrieb.',
        features: ['Lüfterloses Kühlsystem', 'Breiter Temperaturbereich', 'Intel N-series/Core Prozessoren', 'Multi-Port Konnektivität'],
        icon: Cpu,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-933739702/Industrial_PC.html?spm=a2700.shop_plgr.88.23.79c77121OixJyz'
      },
      {
        title: 'Firewall Mini-PC',
        description: 'Netzwerksicherheitsgeräte mit erweiterten Firewall-Funktionen und Multi-Gigabit-Ports.',
        features: ['2.5GbE/10GbE Ports', 'Erweiterte Firewall-Software', 'VPN-Unterstützung', 'Industrielles Design'],
        icon: Shield,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932323740/Firewall_Mini_PC.html?spm=a2700.shop_plgr.88.32.5c807121rnWOr9'
      },
      {
        title: 'Desktop Mini-PC',
        description: 'Kompakte Desktop-Computer ideal für Business-, Bildungs- und Digital-Signage-Anwendungen.',
        features: ['Intel N-series Prozessoren', '4K Display-Unterstützung', 'Geringer Stromverbrauch', 'VESA-kompatibel'],
        icon: Monitor,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932313801/Dekstop_Mini_PC.html?spm=a2700.shop_plgr.88.28.26c87121PeanxV'
      },
      {
        title: '1U/2U Firewall Server PC',
        description: 'Rackmontierte Firewall-Server für Enterprise-Netzwerksicherheit mit hohem Durchsatz.',
        features: ['1U/2U Rackmount-Formfaktor', 'Multiple LAN-Ports', 'Hochleistungs-Routing', 'Enterprise Firewall OS Support'],
        icon: Server,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-952444890/1U_2U_Firewall_Server_PC.html?spm=a2700.shop_plgr.88.18.48957121p4KllR'
      }
    ],
    cta: {
      title: 'Benötigen Sie eine Maßgeschneiderte Lösung?',
      description: 'Wir bieten maßgeschneiderte Lösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind.',
      button: 'Vertrieb Kontaktieren'
    },
    learnMore: 'Mehr Erfahren'
  },
  it: {
    hero: {
      title: 'I Nostri Prodotti',
      subtitle: 'Soluzioni informatiche innovative per il futuro dell\'industria'
    },
    categories: [
      {
        title: 'Mini PC Industriale',
        description: 'Computer industriali compatti senza ventola progettati per ambienti difficili e funzionamento 24/7.',
        features: ['Sistema di raffreddamento senza ventola', 'Ampio range di temperatura', 'Processori Intel N-series/Core', 'Connettività multi-porta'],
        icon: Cpu,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-933739702/Industrial_PC.html?spm=a2700.shop_plgr.88.23.79c77121OixJyz'
      },
      {
        title: 'Mini PC Firewall',
        description: 'Appliance di sicurezza di rete con capacità firewall avanzate e porte multi-Gigabit.',
        features: ['Porte 2.5GbE/10GbE', 'Software firewall avanzato', 'Supporto VPN', 'Design industriale'],
        icon: Shield,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932323740/Firewall_Mini_PC.html?spm=a2700.shop_plgr.88.32.5c807121rnWOr9'
      },
      {
        title: 'Mini PC da Scrivania',
        description: 'Computer desktop compatti ideali per applicazioni commerciali, educative e digital signage.',
        features: ['Processori Intel N-series', 'Supporto display 4K', 'Basso consumo energetico', 'Compatibile VESA'],
        icon: Monitor,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932313801/Dekstop_Mini_PC.html?spm=a2700.shop_plgr.88.28.26c87121PeanxV'
      },
      {
        title: 'Server Firewall 1U/2U',
        description: 'Server firewall rack per sicurezza di rete aziendale con alta velocità.',
        features: ['Fattore di forma rack 1U/2U', 'Porte LAN multiple', 'Routing ad alte prestazioni', 'Supporto OS firewall enterprise'],
        icon: Server,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-952444890/1U_2U_Firewall_Server_PC.html?spm=a2700.shop_plgr.88.18.48957121p4KllR'
      }
    ],
    cta: {
      title: 'Hai Bisogno di una Soluzione Personalizzata?',
      description: 'Offriamo soluzioni personalizzate adattate alle tue esigenze specifiche.',
      button: 'Contatta le Vendite'
    },
    learnMore: 'Scopri di Più'
  },
  es: {
    hero: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones informáticas innovadoras para el futuro de la industria'
    },
    categories: [
      {
        title: 'Mini PC Industrial',
        description: 'Computadoras industriales compactas sin ventiladores diseñadas para entornos difíciles y operación 24/7.',
        features: ['Sistema de refrigeración sin ventiladores', 'Amplio rango de temperatura', 'Procesadores Intel N-series/Core', 'Conectividad multi-puerto'],
        icon: Cpu,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-933739702/Industrial_PC.html?spm=a2700.shop_plgr.88.23.79c77121OixJyz'
      },
      {
        title: 'Mini PC Firewall',
        description: 'Appliances de seguridad de red con capacidades avanzadas de firewall y puertos multi-Gigabit.',
        features: ['Puertos 2.5GbE/10GbE', 'Software firewall avanzado', 'Soporte VPN', 'Diseño industrial'],
        icon: Shield,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932323740/Firewall_Mini_PC.html?spm=a2700.shop_plgr.88.32.5c807121rnWOr9'
      },
      {
        title: 'Mini PC de Escritorio',
        description: 'Computadoras de escritorio compactas ideales para aplicaciones comerciales, educativas y de señalización digital.',
        features: ['Procesadores Intel N-series', 'Soporte de pantalla 4K', 'Bajo consumo de energía', 'Compatible con VESA'],
        icon: Monitor,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-932313801/Dekstop_Mini_PC.html?spm=a2700.shop_plgr.88.28.26c87121PeanxV'
      },
      {
        title: 'Servidor Firewall 1U/2U',
        description: 'Servidores firewall rack para seguridad de red empresarial con alto rendimiento.',
        features: ['Factor de forma rack 1U/2U', 'Múltiples puertos LAN', 'Enrutamiento de alto rendimiento', 'Soporte SO firewall enterprise'],
        icon: Server,
        href: 'https://magicchip.en.alibaba.com/productgrouplist-952444890/1U_2U_Firewall_Server_PC.html?spm=a2700.shop_plgr.88.18.48957121p4KllR'
      }
    ],
    cta: {
      title: '¿Necesitas una Solución Personalizada?',
      description: 'Ofrecemos soluciones personalizadas adaptadas a tus requisitos específicos.',
      button: 'Contactar Ventas'
    },
    learnMore: 'Más Información'
  }
};

export default function ProductsPage() {
  const { language } = useLanguage();
  const data = productsData[language] || productsData.en;

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

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{category.description}</p>

                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={category.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                  >
                    {data.learnMore}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
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
    </div>
  );
}
