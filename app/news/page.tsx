'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const newsData = {
  en: [
    {
      id: 1,
      title: 'MagicChip Announces Next-Generation AI Accelerator Platform',
      excerpt: 'Revolutionary MC-AI Pro series delivers 3x performance improvement for machine learning workloads.',
      date: 'March 10, 2026',
      category: 'Product Launch',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip Expands Manufacturing Capacity with New Fab Facility',
      excerpt: 'The new 300mm wafer fabrication line in Shenzhen will increase production capacity by 50%.',
      date: 'March 5, 2026',
      category: 'Company News',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Strategic Partnership with CloudTech Solutions Announced',
      excerpt: 'MagicChip and CloudTech join forces to deliver integrated edge computing solutions.',
      date: 'February 28, 2026',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'MagicChip Wins "Best Enterprise Hardware Provider" Award',
      excerpt: 'Industry recognition for outstanding contributions to data center infrastructure.',
      date: 'February 20, 2026',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Q4 2025 Financial Results Exceed Expectations',
      excerpt: 'Strong growth driven by increased demand for enterprise and AI-focused products.',
      date: 'February 15, 2026',
      category: 'Financial',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip Launches Sustainability Initiative',
      excerpt: 'Committing to carbon-neutral manufacturing by 2030 through renewable energy adoption.',
      date: 'February 10, 2026',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ],
  fr: [
    {
      id: 1,
      title: 'MagicChip présente la plateforme d\'accélération IA de nouvelle génération',
      excerpt: 'La série révolutionnaire MC-AI Pro offre une amélioration des performances 3x pour les charges de travail machine learning.',
      date: '10 Mars 2026',
      category: 'Lancement Produit',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip étend sa capacité de fabrication avec une nouvelle usine',
      excerpt: 'La nouvelle ligne de fabrication de wafers 300mm à Shenzhen augmentera la capacité de production de 50%.',
      date: '5 Mars 2026',
      category: 'Actualités Entreprise',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Partenariat stratégique avec CloudTech Solutions annoncé',
      excerpt: 'MagicChip et CloudTech unissent leurs forces pour offrir des solutions de calcul périphérique intégrées.',
      date: '28 Février 2026',
      category: 'Partenariat',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'MagicChip gagne le prix "Meilleur Fournisseur de Matériel Entreprise"',
      excerpt: 'Reconnaissance industrielle pour les contributions exceptionnelles à l\'infrastructure des centres de données.',
      date: '20 Février 2026',
      category: 'Récompenses',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Les résultats financiers T4 2025 dépassent les attentes',
      excerpt: 'Croissance forte portée par la demande accrue pour les produits entreprise et IA.',
      date: '15 Février 2026',
      category: 'Financier',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip lance une initiative de développement durable',
      excerpt: 'Engagement à atteindre une fabrication carboneutre d\'ici 2030 grâce aux énergies renouvelables.',
      date: '10 Février 2026',
      category: 'Développement Durable',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ],
  de: [
    {
      id: 1,
      title: 'MagicChip kündigt next-generation KI-Beschleunigerplattform an',
      excerpt: 'Die revolutionäre MC-AI Pro-Serie liefert 3x Performance-Verbesserung für Machine Learning Workloads.',
      date: '10. März 2026',
      category: 'Produktlaunch',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip erweitert Produktionskapazität mit neuer Fabrik',
      excerpt: 'Die neue 300mm Wafer-Fertigungslinie in Shenzhen wird die Produktionskapazität um 50% erhöhen.',
      date: '5. März 2026',
      category: 'Unternehmensnachrichten',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Strategische Partnerschaft mit CloudTech Solutions angekündigt',
      excerpt: 'MagicChip und CloudTech schließen sich zusammen, um integrierte Edge-Computing-Lösungen zu liefern.',
      date: '28. Februar 2026',
      category: 'Partnerschaft',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
      {
      id: 4,
      title: 'MagicChip gewinnt "Bester Enterprise Hardware Anbieter" Award',
      excerpt: 'Branchenanerkennung für herausragende Beiträge zur Rechenzentrumsinfrastruktur.',
      date: '20. Februar 2026',
      category: 'Auszeichnungen',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Q4 2025 Finanzergebnisse übertreffen Erwartungen',
      excerpt: 'Starkes Wachstum getrieben durch erhöhte Nachfrage nach Enterprise- und KI-Produkten.',
      date: '15. Februar 2026',
      category: 'Finanzen',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip startet Nachhaltigkeitsinitiative',
      excerpt: 'Verpflichtung zur kohlenstoffneutralen Fertigung bis 2030 durch erneuerbare Energie.',
      date: '10. Februar 2026',
      category: 'Nachhaltigkeit',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ],
  it: [
    {
      id: 1,
      title: 'MagicChip presenta la piattaforma acceleratore IA di nuova generazione',
      excerpt: 'La rivoluzionaria serie MC-AI Pro offre un miglioramento delle prestazioni 3x per carichi di lavoro machine learning.',
      date: '10 Marzo 2026',
      category: 'Lancio Prodotto',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip espande la capacità produttiva con nuovo stabilimento',
      excerpt: 'La nuova linea di produzione wafer 300mm a Shenzhen aumenterà la capacità produttiva del 50%.',
      date: '5 Marzo 2026',
      category: 'Notizie Aziendali',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Annunciata partnership strategica con CloudTech Solutions',
      excerpt: 'MagicChip e CloudTech uniscono le forze per offrire soluzioni di edge computing integrate.',
      date: '28 Febbraio 2026',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'MagicChip vince il premio "Miglior Fornitore Hardware Enterprise"',
      excerpt: 'Riconoscimento del settore per i contributi eccezionali all\'infrastruttura dei data center.',
      date: '20 Febbraio 2026',
      category: 'Riconoscimenti',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Risultati finanziari Q4 2025 superano le aspettative',
      excerpt: 'Crescita forte trainata dalla maggiore domanda di prodotti enterprise e IA.',
      date: '15 Febbraio 2026',
      category: 'Finanziario',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip lancia iniziativa di sostenibilità',
      excerpt: 'Impegno a raggiungere produzione carbon-neutral entro il 2030 attraverso energie rinnovabili.',
      date: '10 Febbraio 2026',
      category: 'Sostenibilità',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ],
  es: [
    {
      id: 1,
      title: 'MagicChip presenta la plataforma aceleradora de IA de nueva generación',
      excerpt: 'La revolucionaria serie MC-AI Pro ofrece una mejora de rendimiento 3x para cargas de trabajo de machine learning.',
      date: '10 Marzo 2026',
      category: 'Lanzamiento Producto',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip expande capacidad de fabricación con nueva planta',
      excerpt: 'La nueva línea de fabricación de obleas de 300mm en Shenzhen aumentará la capacidad de producción en 50%.',
      date: '5 Marzo 2026',
      category: 'Noticias de la Empresa',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Anunciada asociación estratégica con CloudTech Solutions',
      excerpt: 'MagicChip y CloudTech unen fuerzas para ofrecer soluciones de computación edge integradas.',
      date: '28 Febrero 2026',
      category: 'Asociación',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'MagicChip gana el premio "Mejor Proveedor de Hardware Empresarial"',
      excerpt: 'Reconocimiento de la industria por contribuciones destacadas a la infraestructura de centros de datos.',
      date: '20 Febrero 2026',
      category: 'Premios',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Resultados financieros Q4 2025 superan expectativas',
      excerpt: 'Fuerte crecimiento impulsado por mayor demanda de productos empresariales y de IA.',
      date: '15 Febrero 2026',
      category: 'Financiero',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip lanza iniciativa de sostenibilidad',
      excerpt: 'Compromiso a lograr fabricación carbono-neutral para 2030 mediante energía renovable.',
      date: '10 Febrero 2026',
      category: 'Sostenibilidad',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ]
};

export default function NewsPage() {
  const { language } = useLanguage();
  const news = newsData[language] || newsData.en;
  const pageTitle = 'News & Updates';
  const pageSubtitle = 'Stay informed about the latest developments from MagicChip';

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{pageSubtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                        <Tag className="w-3 h-3 mr-1" />
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <a 
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      {'Read More'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
