'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe } from 'lucide-react';

const leadershipData = {
  en: {
    hero: {
      title: 'Member Team',
      subtitle: 'Meet the team driving innovation in enterprise hardware'
    },
    description: 'Our leadership team brings decades of experience in semiconductor industry, combining technical expertise with business acumen to guide MagicChip\'s continued growth and innovation.',
    executives: [
      {
        name: 'Dr. Michael Chen',
        title: 'CEO & Co-Founder',
        bio: 'Dr. Chen has over 25 years of experience in the semiconductor industry. He previously held leadership positions at major chip companies and holds a Ph.D. in Electrical Engineering from MIT.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: 'COO',
        bio: 'Sarah brings 20 years of operational excellence in technology manufacturing. She previously served as VP of Operations at a Fortune 500 electronics company.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: 'Dr. James Wu',
        title: 'CTO',
        bio: 'Dr. Wu leads our R&D efforts with 18 years of experience in chip architecture and design. He holds multiple patents in processor technology and holds a Ph.D. from Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: 'Emily Zhang',
        title: 'CFO',
        bio: 'Emily has 15 years of financial leadership experience in the technology sector. She previously served as VP of Finance at a leading semiconductor company.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: 'VP of Sales, Americas',
        bio: 'David leads our sales strategy in North America with 12 years of enterprise software and hardware sales experience.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: 'Dr. Lisa Wang',
        title: 'VP of Engineering',
        bio: 'Dr. Wang oversees all engineering operations with 16 years of experience in semiconductor manufacturing and process optimization.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: 'Board of Directors',
      members: [
        { name: 'Dr. Michael Chen', title: 'CEO & Co-Founder' },
        { name: 'Robert Thompson', title: 'Independent Director, Former CEO of TechCorp' },
        { name: 'Jennifer Liu', title: 'Independent Director, Venture Capitalist' },
        { name: 'Dr. William Zhang', title: 'Independent Director, Professor at Stanford' }
      ]
    }
  },
  fr: {
    hero: {
      title: 'Équipe de Direction',
      subtitle: 'Découvrez l\'équipe qui drive l\'innovation dans le matériel entreprise'
    },
    description: 'Notre équipe de direction apporte des décennies d\'expérience dans l\'industrie des semi-conducteurs, combinant expertise technique et sens des affaires pour guider la croissance et l\'innovation continues de MagicChip.',
    executives: [
      {
        name: 'Dr. Michael Chen',
        title: 'PDG & Co-Fondateur',
        bio: 'Le Dr. Chen a plus de 25 ans d\'expérience dans l\'industrie des semi-conducteurs. Il a occupé des postes de direction chez de grandes sociétés de puces et est titulaire d\'un doctorat en génie électrique du MIT.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: 'Directrice des Opérations',
        bio: 'Sarah apporte 20 ans d\'excellence opérationnelle dans la fabrication technologique. Elle a été VP des Opérations dans une entreprise électronique du Fortune 500.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: 'Dr. James Wu',
        title: 'Directeur Technique',
        bio: 'Le Dr. Wu dirige nos efforts de R&D avec 18 ans d\'expérience en architecture et conception de puces. Il possède plusieurs brevets en technologie de processeur et est titulaire d\'un doctorat de Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: 'Emily Zhang',
        title: 'Directrice Financière',
        bio: 'Emily a 15 ans d\'expérience en leadership financier dans le secteur technologique. Elle a été VP des Finances chez un grand groupe semi-conducteur.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: 'VP des Ventes, Amériques',
        bio: 'David dirige notre stratégie de ventes en Amérique du Nord avec 12 ans d\'expérience en ventes de logiciels et matériel entreprise.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: 'Dr. Lisa Wang',
        title: 'VP de l\'Ingénierie',
        bio: 'Le Dr. Wang supervise toutes les opérations d\'ingénierie avec 16 ans d\'expérience en fabrication de semi-conducteurs et optimisation des processus.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: 'Conseil d\'Administration',
      members: [
        { name: 'Dr. Michael Chen', title: 'PDG & Co-Fondateur' },
        { name: 'Robert Thompson', title: 'Administrateur Indépendant, Ancien PDG de TechCorp' },
        { name: 'Jennifer Liu', title: 'Administrateur Indépendant, Capital-Risqueur' },
        { name: 'Dr. William Zhang', title: 'Administrateur Indépendant, Professeur à Stanford' }
      ]
    }
  },
  de: {
    hero: {
      title: 'Führungsteam',
      subtitle: 'Lernen Sie das Team kennen, das Innovation im Enterprise-Hardware vorantreibt'
    },
    description: 'Unser Führungsteam bringt jahrzehntelange Erfahrung in der Halbleiterindustrie ein und kombiniert technische Expertise mit Geschäftssinn, um das kontinuierliche Wachstum und die Innovation von MagicChip zu leiten.',
    executives: [
      {
        name: 'Dr. Michael Chen',
        title: 'CEO & Mitgründer',
        bio: 'Dr. Chen hat über 25 Jahre Erfahrung in der Halbleiterindustrie. Er hatte Führungspositionen bei großen Chipunternehmen inne und hat einen Doktorgrad in Elektrotechnik vom MIT.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: 'COO',
        bio: 'Sarah bringt 20 Jahre operative Exzellenz in der Technologiefertigung. Sie war VP of Operations bei einem Fortune 500 Elektronikunternehmen.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: 'Dr. James Wu',
        title: 'CTO',
        bio: 'Dr. Wu leitet unsere F&E-Bemühungen mit 18 Jahren Erfahrung in Chip-Architektur und -Design. Er besitzt mehrere Patente in Prozessortechnologie und hat einen Doktorgrad von Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: 'Emily Zhang',
        title: 'CFO',
        bio: 'Emily hat 15 Jahre Erfahrung in finanzieller Führung im Technologiesektor. Sie war VP of Finance bei einem führenden Halbleiterunternehmen.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: 'VP of Sales, Americas',
        bio: 'David leitet unsere Vertriebsstrategie in Nordamerika mit 12 Jahren Erfahrung im Enterprise-Software- und Hardwarevertrieb.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: 'Dr. Lisa Wang',
        title: 'VP of Engineering',
        bio: 'Dr. Wang überwacht alle Engineering-Operationen mit 16 Jahren Erfahrung in der Halbleiterfertigung und Prozessoptimierung.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: 'Verwaltungsrat',
      members: [
        { name: 'Dr. Michael Chen', title: 'CEO & Mitgründer' },
        { name: 'Robert Thompson', title: 'Unabhängiger Direktor, Ehemaliger CEO von TechCorp' },
        { name: 'Jennifer Liu', title: 'Unabhängige Direktorin, Risikokapitalgeberin' },
        { name: 'Dr. William Zhang', title: 'Unabhängiger Direktor, Professor an Stanford' }
      ]
    }
  },
  it: {
    hero: {
      title: 'Team Dirigenziale',
      subtitle: 'Incontra il team che guida l\'innovazione nell\'hardware enterprise'
    },
    description: 'Il nostro team dirigenziale porta decenni di esperienza nell\'industria dei semiconduttori, combinando expertise tecnica e acume commerciale per guidare la crescita e l\'innovazione continue di MagicChip.',
    executives: [
      {
        name: 'Dr. Michael Chen',
        title: 'CEO & Co-Founder',
        bio: 'Il Dr. Chen ha oltre 25 anni di esperienza nell\'industria dei semiconduttori. Ha ricoperto posizioni di leadership presso grandi aziende di chip e ha un dottorato in ingegneria elettrica dal MIT.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: 'COO',
        bio: 'Sarah porta 20 anni di eccellenza operativa nella manifattura tecnologica. È stata VP delle Operazioni presso un\'azienda elettronica Fortune 500.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: 'Dr. James Wu',
        title: 'CTO',
        bio: 'Il Dr. Wu guida i nostri sforzi di R&D con 18 anni di esperienza in architettura e design dei chip. Possiede diversi brevetti nella tecnologia dei processori e ha un dottorato da Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: 'Emily Zhang',
        title: 'CFO',
        bio: 'Emily ha 15 anni di esperienza nella leadership finanziaria nel settore tecnologico. È stata VP delle Finanze presso una leading semiconductor company.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: 'VP of Sales, Americas',
        bio: 'David guida la nostra strategia di vendite in Nord America con 12 anni di esperienza nelle vendite di software e hardware enterprise.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: 'Dr. Lisa Wang',
        title: 'VP of Engineering',
        bio: 'Il Dr. Wang supervisiona tutte le operazioni di ingegneria con 16 anni di esperienza nella manifattura dei semiconduttori e ottimizzazione dei processi.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: 'Consiglio di Amministrazione',
      members: [
        { name: 'Dr. Michael Chen', title: 'CEO & Co-Founder' },
        { name: 'Robert Thompson', title: 'Amministratore Indipendente, Ex CEO di TechCorp' },
        { name: 'Jennifer Liu', title: 'Amministratore Indipendente, Venture Capitalist' },
        { name: 'Dr. William Zhang', title: 'Amministratore Indipendente, Professore a Stanford' }
      ]
    }
  },
  es: {
    hero: {
      title: 'Equipo Directivo',
      subtitle: 'Conoce al equipo que impulsa la innovación en hardware empresarial'
    },
    description: 'Nuestro equipo directivo aporta décadas de experiencia en la industria de semiconductores, combinando experiencia técnica con perspicacia comercial para guiar el crecimiento e innovación continuos de MagicChip.',
    executives: [
      {
        name: 'Dr. Michael Chen',
        title: 'CEO y Co-Fundador',
        bio: 'El Dr. Chen tiene más de 25 años de experiencia en la industria de semiconductores. Ocupó puestos de liderazgo en grandes compañías de chips y tiene un doctorado en Ingeniería Eléctrica del MIT.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: 'COO',
        bio: 'Sarah aporta 20 años de excelencia operativa en la fabricación tecnológica. Fue VP de Operaciones en una empresa electrónica Fortune 500.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: 'Dr. James Wu',
        title: 'CTO',
        bio: 'El Dr. Wu lidera nuestros esfuerzos de I+D con 18 años de experiencia en arquitectura y diseño de chips. Tiene varias patentes en tecnología de procesadores y tiene un doctorado de Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: 'Emily Zhang',
        title: 'CFO',
        bio: 'Emily tiene 15 años de experiencia en liderazgo financiero en el sector tecnológico. Fue VP de Finanzas en una empresa líder de semiconductores.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: 'VP de Ventas, Américas',
        bio: 'David lidera nuestra estrategia de ventas en América del Norte con 12 años de experiencia en ventas de software y hardware empresarial.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: 'Dr. Lisa Wang',
        title: 'VP de Ingeniería',
        bio: 'El Dr. Wang supervisa todas las operaciones de ingeniería con 16 años de experiencia en fabricación de semiconductores y optimización de procesos.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: 'Junta Directiva',
      members: [
        { name: 'Dr. Michael Chen', title: 'CEO y Co-Fundador' },
        { name: 'Robert Thompson', title: 'Director Independiente, Ex CEO de TechCorp' },
        { name: 'Jennifer Liu', title: 'Directora Independiente, Capitalista de Riesgo' },
        { name: 'Dr. William Zhang', title: 'Director Independiente, Profesor en Stanford' }
      ]
    }
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

        {/* Executive Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {'Executive Team'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.executives.map((exec: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
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
                        className="p-2 bg-gray-100 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={`mailto:${exec.email}`}
                        className="p-2 bg-gray-100 rounded-md hover:bg-blue-100 transition-colors"
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

        {/* Board of Directors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {data.board.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {data.board.members.map((member: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-md"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
