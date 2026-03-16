'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Download, FileText, Presentation, Image, File, Filter } from 'lucide-react';

const downloadsData = {
  en: {
    categories: [
      { id: 'brochures', name: 'Brochures', icon: FileText },
      { id: 'whitepapers', name: 'Whitepapers', icon: FileText },
      { id: 'datasheets', name: 'Datasheets', icon: FileText },
      { id: 'presentations', name: 'Presentations', icon: Presentation },
      { id: 'images', name: 'Images & Logos', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip Product Portfolio 2026',
        description: 'Complete overview of our enterprise hardware and service offerings.',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: 'Enterprise Solutions Guide',
        description: 'Comprehensive guide to data center and cloud infrastructure solutions.',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'AI Accelerator Whitepaper',
        description: 'Technical deep-dive into MC-AI Pro series architecture and performance.',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: 'Edge Computing Architecture',
        description: 'Best practices for deploying edge solutions in enterprise environments.',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'MC-Pro X1 Datasheet',
        description: 'Complete technical specifications for the flagship processor series.',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'MC-Network 10G Datasheet',
        description: 'Network chip specifications and performance benchmarks.',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: 'Investor Presentation Q4 2025',
        description: 'Quarterly financial results and business outlook.',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: 'Partner Program Overview',
        description: 'Information for potential business partners and resellers.',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: 'Brand Assets Package',
        description: 'Official logos, brand guidelines, and approved imagery.',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: 'Product Photography',
        description: 'High-resolution product images for media and marketing use.',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  },
  fr: {
    categories: [
      { id: 'brochures', name: 'Brochures', icon: FileText },
      { id: 'whitepapers', name: 'Livres Blancs', icon: FileText },
      { id: 'datasheets', name: 'Fiches Techniques', icon: FileText },
      { id: 'presentations', name: 'Présentations', icon: Presentation },
      { id: 'images', name: 'Images & Logos', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip Portfolio Produits 2026',
        description: 'Aperçu complet de notre matériel entreprise et de nos services.',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: 'Guide des Solutions Entreprise',
        description: 'Guide complet des solutions d\'infrastructure de centre de données et cloud.',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'Livre Blanc Accélérateur IA',
        description: 'Plongeon technique dans l\'architecture et les performances de la série MC-AI Pro.',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: 'Architecture Edge Computing',
        description: 'Bonnes pratiques pour le déploiement de solutions edge en environnements entreprise.',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'Fiche Technique MC-Pro X1',
        description: 'Spécifications techniques complètes de la série de processeurs flagship.',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'Fiche Technique MC-Network 10G',
        description: 'Spécifications des puces réseau et benchmarks de performance.',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: 'Présentation Investisseurs T4 2025',
        description: 'Résultats financiers trimestriels et perspectives commerciales.',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: 'Aperçu Programme Partenaires',
        description: 'Informations pour les partenaires commerciaux et revendeurs potentiels.',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: 'Pack Identité de Marque',
        description: 'Logos officiels, directives de marque et images approuvées.',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: 'Photographie Produit',
        description: 'Images produit haute résolution pour les médias et le marketing.',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  },
  de: {
    categories: [
      { id: 'brochures', name: 'Broschüren', icon: FileText },
      { id: 'whitepapers', name: 'Whitepapers', icon: FileText },
      { id: 'datasheets', name: 'Datenblätter', icon: FileText },
      { id: 'presentations', name: 'Präsentationen', icon: Presentation },
      { id: 'images', name: 'Bilder & Logos', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip Produktportfolio 2026',
        description: 'Vollständiger Überblick über unsere Enterprise-Hardware und Serviceangebote.',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: 'Enterprise-Lösungen Guide',
        description: 'Umfassender Leitfaden zu Rechenzentrums- und Cloud-Infrastrukturlösungen.',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'KI-Beschleuniger Whitepaper',
        description: 'Technischer Einblick in die MC-AI Pro-Serienarchitektur und -leistung.',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: 'Edge Computing Architektur',
        description: 'Best Practices für die Bereitstellung von Edge-Lösungen in Unternehmensumgebungen.',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'MC-Pro X1 Datenblatt',
        description: 'Vollständige technische Spezifikationen für die Flaggschiff-Prozessorserie.',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'MC-Network 10G Datenblatt',
        description: 'Netzwerkchip-Spezifikationen und Leistungsbenchmarks.',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: 'Investorenpräsentation Q4 2025',
        description: 'Quartalsergebnisse und Geschäftsausblick.',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: 'Partnerprogramm Übersicht',
        description: 'Informationen für potenzielle Geschäftspartner und Reseller.',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: 'Marken-Assets Paket',
        description: 'Offizielle Logos, Markenrichtlinien und genehmigte Bilder.',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: 'Produktfotografie',
        description: 'Hochauflösende Produktbilder für Medien und Marketing.',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  },
  it: {
    categories: [
      { id: 'brochures', name: 'Brochure', icon: FileText },
      { id: 'whitepapers', name: 'Whitepaper', icon: FileText },
      { id: 'datasheets', name: 'Schede Tecniche', icon: FileText },
      { id: 'presentations', name: 'Presentazioni', icon: Presentation },
      { id: 'images', name: 'Immagini & Loghi', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip Portfolio Prodotti 2026',
        description: 'Panoramica completa della nostra hardware enterprise e delle offerte di servizio.',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: 'Guida Soluzioni Enterprise',
        description: 'Guida completa delle soluzioni di infrastruttura data center e cloud.',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'Whitepaper Acceleratore IA',
        description: 'Approfondimento tecnico sull\'architettura e le prestazioni della serie MC-AI Pro.',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: 'Architettura Edge Computing',
        description: 'Best practices per il dispiegamento di soluzioni edge in ambienti enterprise.',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'Scheda Tecnica MC-Pro X1',
        description: 'Specifiche tecniche complete per la serie di processori flagship.',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'Scheda Tecnica MC-Network 10G',
        description: 'Specifiche dei chip di rete e benchmark delle prestazioni.',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: 'Presentazione Investitori Q4 2025',
        description: 'Risultati finanziari trimestrali e prospettive commerciali.',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: 'Panoramica Programma Partner',
        description: 'Informazioni per potenziali partner commerciali e rivenditori.',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: 'Pack Asset Marchio',
        description: 'Loghi ufficiali, linee guida del marchio e immagini approvate.',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: 'Fotografia Prodotto',
        description: 'Immagini prodotto ad alta risoluzione per media e marketing.',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  },
  es: {
    categories: [
      { id: 'brochures', name: 'Folletos', icon: FileText },
      { id: 'whitepapers', name: 'Whitepapers', icon: FileText },
      { id: 'datasheets', name: 'Fichas Técnicas', icon: FileText },
      { id: 'presentations', name: 'Presentaciones', icon: Presentation },
      { id: 'images', name: 'Imágenes & Logos', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip Portafolio de Productos 2026',
        description: 'Resumen completo de nuestro hardware empresarial y ofertas de servicios.',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: 'Guía de Soluciones Empresariales',
        description: 'Guía completa de soluciones de infraestructura de centros de datos y cloud.',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'Whitepaper Acelerador IA',
        description: 'Profundización técnica en la arquitectura y rendimiento de la serie MC-AI Pro.',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: 'Arquitectura Edge Computing',
        description: 'Mejores prácticas para implementar soluciones edge en entornos empresariales.',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'Ficha Técnica MC-Pro X1',
        description: 'Especificaciones técnicas completas de la serie de procesadores flagship.',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'Ficha Técnica MC-Network 10G',
        description: 'Especificaciones de chips de red y benchmarks de rendimiento.',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: 'Presentación Inversores Q4 2025',
        description: 'Resultados financieros trimestrales y perspectivas comerciales.',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: 'Resumen Programa de Socios',
        description: 'Información para socios comerciales y revendedores potenciales.',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: 'Paquete de Activos de Marca',
        description: 'Logos oficiales, directrices de marca e imágenes aprobadas.',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: 'Fotografía de Producto',
        description: 'Imágenes de producto de alta resolución para medios y marketing.',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  }
};

export default function DownloadsPage() {
  const { t, language } = useLanguage();
  const dataLanguage = (downloadsData as any)[language] ? language : 'en';
  const data = (downloadsData as any)[dataLanguage];
  const pageTitle = t.downloads.title;
  const pageSubtitle = t.downloads.subtitle;

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

        {/* Downloads Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {data.categories.map((category: any, index: number) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-md hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Downloads Table */}
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {t.downloads.table.document}
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {t.downloads.table.category}
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {t.downloads.table.format}
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {t.downloads.table.size}
                      </th>
                      <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                        {t.downloads.table.download}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.items.map((item: any, index: number) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {data.categories.find((c: any) => c.id === item.category)?.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.format}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.size}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            {t.downloads.table.download}
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
