'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe, Award, Users, Target, TrendingUp } from 'lucide-react';

const leadershipData = {
  en: {
    hero: {
      title: 'Our Team',
      subtitle: 'Experienced professionals driving innovation in industrial computing'
    },
    description: 'Our leadership team brings extensive experience in industrial computing and embedded systems, combining technical expertise with market insights to deliver innovative mini PC solutions worldwide.',
    executives: [
      {
        name: 'Klaus Lee',
        title: 'Founder & CEO',
        bio: 'Klaus founded MagicChip in 2021 with a vision to provide high-quality mini PCs and industrial computing solutions. With over 15 years of experience in the electronics industry, he leads the company\'s strategic direction and global expansion.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'Contact@szmagicchip.com'
      },
      {
        name: 'Michael Zhang',
        title: 'Technical Director',
        bio: 'Michael oversees product development and technical innovation. With expertise in Intel platform integration and industrial-grade thermal design, he ensures our products meet the highest performance standards.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'tech@szmagicchip.com'
      },
      {
        name: 'Sarah Chen',
        title: 'Operations Manager',
        bio: 'Sarah manages our manufacturing operations and supply chain. Her experience in production optimization ensures efficient delivery of high-quality products from samples to mass production.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'ops@szmagicchip.com'
      },
      {
        name: 'David Wang',
        title: 'Sales Director',
        bio: 'David leads our global sales efforts across Europe, North America, Middle East, and Southeast Asia. He works closely with clients to understand their needs and provide customized OEM/ODM solutions.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sales@szmagicchip.com'
      },
      {
        name: 'Emily Liu',
        title: 'Quality Assurance Manager',
        bio: 'Emily ensures all products meet international quality standards including CE, FCC, and RoHS certifications. She oversees rigorous testing procedures to guarantee industrial-grade reliability.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'qa@szmagicchip.com'
      },
      {
        name: 'James Wu',
        title: 'R&D Engineer',
        bio: 'James specializes in multi-port network design and wireless module integration. His expertise in 2.5GbE/10GbE networking and 4G/5G connectivity drives our product innovation.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'rd@szmagicchip.com'
      }
    ],
    teamStats: [
      { value: '50-100', label: 'Team Members' },
      { value: '8', label: 'Core Leadership' },
      { value: '15+', label: 'Avg. Experience (Years)' },
      { value: '30+', label: 'Markets Served' }
    ]
  },
  fr: {
    hero: {
      title: 'Notre Équipe',
      subtitle: 'Professionnels expérimentés stimulant l\'innovation dans l\'informatique industrielle'
    },
    description: 'Notre équipe de direction apporte une vaste expérience dans l\'informatique industrielle et les systèmes embarqués, combinant expertise technique et connaissances du marché pour fournir des solutions de mini PC innovantes dans le monde entier.',
    executives: [
      {
        name: 'Klaus Lee',
        title: 'Fondateur & PDG',
        bio: 'Klaus a fondé MagicChip en 2021 avec la vision de fournir des mini PC de haute qualité et des solutions informatiques industrielles. Avec plus de 15 ans d\'expérience dans l\'industrie électronique, il dirige la direction stratégique et l\'expansion mondiale de l\'entreprise.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'Contact@szmagicchip.com'
      },
      {
        name: 'Michael Zhang',
        title: 'Directeur Technique',
        bio: 'Michael supervise le développement de produits et l\'innovation technique. Avec une expertise dans l\'intégration de plateformes Intel et la conception thermique industrielle, il garantit que nos produits répondent aux normes de performance les plus élevées.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'tech@szmagicchip.com'
      },
      {
        name: 'Sarah Chen',
        title: 'Responsable des Opérations',
        bio: 'Sarah gère nos opérations de fabrication et notre chaîne d\'approvisionnement. Son expérience en optimisation de la production assure une livraison efficace de produits de haute qualité des échantillons à la production en série.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'ops@szmagicchip.com'
      },
      {
        name: 'David Wang',
        title: 'Directeur des Ventes',
        bio: 'David dirige nos efforts de vente mondiaux en Europe, Amérique du Nord, Moyen-Orient et Asie du Sud-Est. Il travaille en étroite collaboration avec les clients pour comprendre leurs besoins et fournir des solutions OEM/ODM personnalisées.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sales@szmagicchip.com'
      },
      {
        name: 'Emily Liu',
        title: 'Responsable Assurance Qualité',
        bio: 'Emily veille à ce que tous les produits répondent aux normes de qualité internationales, y compris les certifications CE, FCC et RoHS. Elle supervise des procédures de test rigoureuses pour garantir une fiabilité de qualité industrielle.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'qa@szmagicchip.com'
      },
      {
        name: 'James Wu',
        title: 'Ingénieur R&D',
        bio: 'James se spécialise dans la conception de réseaux multi-ports et l\'intégration de modules sans fil. Son expertise en réseautage 2.5GbE/10GbE et connectivité 4G/5G stimule l\'innovation de nos produits.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'rd@szmagicchip.com'
      }
    ],
    teamStats: [
      { value: '50-100', label: 'Membres de l\'Équipe' },
      { value: '8', label: 'Leadership Core' },
      { value: '15+', label: 'Expérience Moyenne (Années)' },
      { value: '30+', label: 'Marchés Desservis' }
    ]
  },
  de: {
    hero: {
      title: 'Unser Team',
      subtitle: 'Erfahrene Fachleute treiben Innovation im industriellen Computing voran'
    },
    description: 'Unser Führungsteam bringt umfangreiche Erfahrung in industriellen Computing und Embedded-Systemen mit und kombiniert technische Expertise mit Markteinblicken, um innovative Mini-PC-Lösungen weltweit zu liefern.',
    executives: [
      {
        name: 'Klaus Lee',
        title: 'Gründer & CEO',
        bio: 'Klaus gründete 2021 MagicChip mit der Vision, hochwertige Mini-PCs und industrielle Computerlösungen bereitzustellen. Mit über 15 Jahren Erfahrung in der Elektronikindustrie leitet er die strategische Ausrichtung und globale Expansion des Unternehmens.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'Contact@szmagicchip.com'
      },
      {
        name: 'Michael Zhang',
        title: 'Technischer Direktor',
        bio: 'Michael überwacht die Produktentwicklung und technische Innovation. Mit Fachkenntnissen in Intel-Plattformintegration und industrieller Thermodesign stellt er sicher, dass unsere Produkte die höchsten Leistungsstandards erfüllen.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'tech@szmagicchip.com'
      },
      {
        name: 'Sarah Chen',
        title: 'Betriebsleiter',
        bio: 'Sarah verwaltet unsere Fertigungsoperationen und Lieferkette. Ihre Erfahrung in der Produktionsoptimierung gewährleistet die effiziente Lieferung hochwertiger Produkte von Mustern bis zur Massenproduktion.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'ops@szmagicchip.com'
      },
      {
        name: 'David Wang',
        title: 'Vertriebsleiter',
        bio: 'David leitet unsere globalen Vertriebsbemühungen in Europa, Nordamerika, Nahen Osten und Südostasien. Er arbeitet eng mit Kunden zusammen, um ihre Bedürfnisse zu verstehen und maßgeschneiderte OEM/ODM-Lösungen bereitzustellen.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sales@szmagicchip.com'
      },
      {
        name: 'Emily Liu',
        title: 'Qualitätssicherungsmanager',
        bio: 'Emily stellt sicher, dass alle Produkte internationalen Qualitätsstandards einschließlich CE-, FCC- und RoHS-Zertifizierungen entsprechen. Sie überwacht strenge Testverfahren, um industrietaugliche Zuverlässigkeit zu gewährleisten.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'qa@szmagicchip.com'
      },
      {
        name: 'James Wu',
        title: 'F&E-Ingenieur',
        bio: 'James ist auf Multi-Port-Netzwerkdesign und drahtlose Modulintegration spezialisiert. Seine Expertise in 2.5GbE/10GbE-Netzwerken und 4G/5G-Konnektivität treibt unsere Produktinnovation voran.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'rd@szmagicchip.com'
      }
    ],
    teamStats: [
      { value: '50-100', label: 'Teammitglieder' },
      { value: '8', label: 'Kernführung' },
      { value: '15+', label: 'Durchschn. Erfahrung (Jahre)' },
      { value: '30+', label: 'Bediente Märkte' }
    ]
  },
  it: {
    hero: {
      title: 'Il Nostro Team',
      subtitle: 'Professionisti esperti che guidano l\'innovazione nell\'informatica industriale'
    },
    description: 'Il nostro team di leadership porta un\'estesa esperienza nell\'informatica industriale e nei sistemi embedded, combinando competenze tecniche con conoscenze di mercato per fornire soluzioni di mini PC innovative in tutto il mondo.',
    executives: [
      {
        name: 'Klaus Lee',
        title: 'Fondatore & CEO',
        bio: 'Klaus ha fondato MagicChip nel 2021 con la visione di fornire mini PC di alta qualità e soluzioni informatiche industriali. Con oltre 15 anni di esperienza nell\'industria elettronica, guida la direzione strategica e l\'espansione globale dell\'azienda.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'Contact@szmagicchip.com'
      },
      {
        name: 'Michael Zhang',
        title: 'Direttore Tecnico',
        bio: 'Michael supervisiona lo sviluppo dei prodotti e l\'innovazione tecnica. Con competenze nell\'integrazione di piattaforme Intel e nella progettazione termica industriale, garantisce che i nostri prodotti soddisfino gli standard prestazionali più elevati.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'tech@szmagicchip.com'
      },
      {
        name: 'Sarah Chen',
        title: 'Responsabile Operazioni',
        bio: 'Sarah gestisce le nostre operazioni di produzione e la catena di approvvigionamento. La sua esperienza nell\'ottimizzazione della produzione garantisce la consegna efficiente di prodotti di alta qualità dai campioni alla produzione di massa.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'ops@szmagicchip.com'
      },
      {
        name: 'David Wang',
        title: 'Direttore Vendite',
        bio: 'David guida i nostri sforzi di vendita globale in Europa, Nord America, Medio Oriente e Sud-Est Asiatico. Lavora a stretto contatto con i clienti per comprendere le loro esigenze e fornire soluzioni OEM/ODM personalizzate.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sales@szmagicchip.com'
      },
      {
        name: 'Emily Liu',
        title: 'Responsabile Assicurazione Qualità',
        bio: 'Emily garantisce che tutti i prodotti soddisfino gli standard di qualità internazionali, incluse le certificazioni CE, FCC e RoHS. Supervisiona rigorose procedure di test per garantire affidabilità di grado industriale.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'qa@szmagicchip.com'
      },
      {
        name: 'James Wu',
        title: 'Ingegnere R&S',
        bio: 'James è specializzato nella progettazione di reti multi-porta e nell\'integrazione di moduli wireless. La sua competenza nelle reti 2.5GbE/10GbE e nella connettività 4G/5G guida l\'innovazione dei nostri prodotti.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'rd@szmagicchip.com'
      }
    ],
    teamStats: [
      { value: '50-100', label: 'Membri del Team' },
      { value: '8', label: 'Leadership Core' },
      { value: '15+', label: 'Esperienza Media (Anni)' },
      { value: '30+', label: 'Mercati Serviti' }
    ]
  },
  es: {
    hero: {
      title: 'Nuestro Equipo',
      subtitle: 'Profesionales experimentados impulsando la innovación en computación industrial'
    },
    description: 'Nuestro equipo de liderazgo aporta amplia experiencia en computación industrial y sistemas embebidos, combinando experiencia técnica con conocimientos del mercado para ofrecer soluciones de mini PC innovadoras en todo el mundo.',
    executives: [
      {
        name: 'Klaus Lee',
        title: 'Fundador & CEO',
        bio: 'Klaus fundó MagicChip en 2021 con la visión de proporcionar mini PC de alta calidad y soluciones de computación industrial. Con más de 15 años de experiencia en la industria electrónica, lidera la dirección estratégica y la expansión global de la empresa.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'Contact@szmagicchip.com'
      },
      {
        name: 'Michael Zhang',
        title: 'Director Técnico',
        bio: 'Michael supervisa el desarrollo de productos y la innovación técnica. Con experiencia en integración de plataformas Intel y diseño térmico industrial, asegura que nuestros productos cumplan con los más altos estándares de rendimiento.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'tech@szmagicchip.com'
      },
      {
        name: 'Sarah Chen',
        title: 'Gerente de Operaciones',
        bio: 'Sarah gestiona nuestras operaciones de fabricación y cadena de suministro. Su experiencia en optimización de producción asegura la entrega eficiente de productos de alta calidad desde muestras hasta producción en masa.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'ops@szmagicchip.com'
      },
      {
        name: 'David Wang',
        title: 'Director de Ventas',
        bio: 'David lidera nuestros esfuerzos de ventas globales en Europa, Norteamérica, Medio Oriente y Sudeste Asiático. Trabaja estrechamente con los clientes para comprender sus necesidades y proporcionar soluciones OEM/ODM personalizadas.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sales@szmagicchip.com'
      },
      {
        name: 'Emily Liu',
        title: 'Gerente de Aseguramiento de Calidad',
        bio: 'Emily asegura que todos los productos cumplan con los estándares de calidad internacionales, incluyendo certificaciones CE, FCC y RoHS. Supervisa rigurosos procedimientos de prueba para garantizar confiabilidad de grado industrial.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'qa@szmagicchip.com'
      },
      {
        name: 'James Wu',
        title: 'Ingeniero de I+D',
        bio: 'James se especializa en diseño de redes multi-puerto e integración de módulos inalámbricos. Su experiencia en redes 2.5GbE/10GbE y conectividad 4G/5G impulsa la innovación de nuestros productos.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'rd@szmagicchip.com'
      }
    ],
    teamStats: [
      { value: '50-100', label: 'Miembros del Equipo' },
      { value: '8', label: 'Liderazgo Principal' },
      { value: '15+', label: 'Experiencia Promedio (Años)' },
      { value: '30+', label: 'Mercados Atendidos' }
    ]
  }
};

export default function LeadershipPage() {
  const { language } = useLanguage();
  const dataLanguage = (leadershipData as any)[language] ? language : 'en';
  const data = (leadershipData as any)[dataLanguage];

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

        {/* Description */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-lg text-gray-600">{data.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.teamStats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {'Leadership Team'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.executives.map((exec: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={exec.image} 
                      alt={exec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{exec.title}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{exec.bio}</p>
                    <div className="flex items-center gap-4">
                      <a 
                        href={exec.linkedin}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={`mailto:${exec.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
