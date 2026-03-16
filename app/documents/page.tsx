'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Newspaper, Download, FileCode, ArrowRight } from 'lucide-react';

const documentsData = {
  en: {
    hero: {
      title: 'Documents & Resources',
      subtitle: 'Access technical documentation, downloads, and latest news'
    },
    sections: [
      {
        title: 'News & Announcements',
        description: 'Stay updated with the latest company news, product launches, and industry insights',
        icon: Newspaper,
        href: '/news',
        stats: '12 Articles'
      },
      {
        title: 'File Downloads',
        description: 'Download brochures, whitepapers, datasheets, and technical resources',
        icon: Download,
        href: '/downloads',
        stats: '24 Files'
      },
      {
        title: 'Technical Documentation',
        description: 'Access technical specifications, user manuals, and API documentation',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48 Documents'
      }
    ],
    featured: {
      title: 'Featured Resources',
      items: [
        { title: 'Product Brochure 2026', type: 'Brochure', size: '2.4 MB' },
        { title: 'AI Accelerator Datasheet', type: 'Datasheet', size: '1.8 MB' },
        { title: 'Enterprise CPU Architecture', type: 'Whitepaper', size: '3.2 MB' },
        { title: 'Security Module Guide', type: 'Manual', size: '1.2 MB' }
      ]
    }
  },
  fr: {
    hero: {
      title: 'Documents & Ressources',
      subtitle: 'Accédez à la documentation technique, aux téléchargements et aux dernières nouvelles'
    },
    sections: [
      {
        title: 'Actualités & Annonces',
        description: 'Restez informé des dernières nouvelles de l\'entreprise, lancements de produits et perspectives de l\'industrie',
        icon: Newspaper,
        href: '/news',
        stats: '12 Articles'
      },
      {
        title: 'Téléchargements',
        description: 'Téléchargez brochures, livres blancs, fiches techniques et ressources techniques',
        icon: Download,
        href: '/downloads',
        stats: '24 Fichiers'
      },
      {
        title: 'Documentation Technique',
        description: 'Accédez aux spécifications techniques, manuels utilisateur et documentation API',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48 Documents'
      }
    ],
    featured: {
      title: 'Ressources en Vedette',
      items: [
        { title: 'Brochure Produit 2026', type: 'Brochure', size: '2.4 MB' },
        { title: 'Fiche Technique Accélérateur IA', type: 'Fiche Technique', size: '1.8 MB' },
        { title: 'Architecture CPU Entreprise', type: 'Livre Blanc', size: '3.2 MB' },
        { title: 'Guide Module de Sécurité', type: 'Manuel', size: '1.2 MB' }
      ]
    }
  },
  de: {
    hero: {
      title: 'Dokumente & Ressourcen',
      subtitle: 'Zugriff auf technische Dokumentation, Downloads und neueste Nachrichten'
    },
    sections: [
      {
        title: 'Nachrichten & Ankündigungen',
        description: 'Bleiben Sie auf dem Laufenden mit den neuesten Unternehmensnachrichten, Produkteinführungen und Brancheneinblicken',
        icon: Newspaper,
        href: '/news',
        stats: '12 Artikel'
      },
      {
        title: 'Dateidownloads',
        description: 'Laden Sie Broschüren, Whitepapers, Datenblätter und technische Ressourcen herunter',
        icon: Download,
        href: '/downloads',
        stats: '24 Dateien'
      },
      {
        title: 'Technische Dokumentation',
        description: 'Zugriff auf technische Spezifikationen, Benutzerhandbücher und API-Dokumentation',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48 Dokumente'
      }
    ],
    featured: {
      title: 'Empfohlene Ressourcen',
      items: [
        { title: 'Produktbroschüre 2026', type: 'Broschüre', size: '2.4 MB' },
        { title: 'KI-Beschleuniger Datenblatt', type: 'Datenblatt', size: '1.8 MB' },
        { title: 'Enterprise CPU Architektur', type: 'Whitepaper', size: '3.2 MB' },
        { title: 'Sicherheitsmodul Anleitung', type: 'Handbuch', size: '1.2 MB' }
      ]
    }
  },
  it: {
    hero: {
      title: 'Documenti & Risorse',
      subtitle: 'Accedi alla documentazione tecnica, ai download e alle ultime notizie'
    },
    sections: [
      {
        title: 'Notizie & Annunci',
        description: 'Rimani aggiornato con le ultime notizie dell\'azienda, lanci di prodotti e insight del settore',
        icon: Newspaper,
        href: '/news',
        stats: '12 Articoli'
      },
      {
        title: 'Download',
        description: 'Scarica brochure, whitepaper, schede tecniche e risorse tecniche',
        icon: Download,
        href: '/downloads',
        stats: '24 File'
      },
      {
        title: 'Documentazione Tecnica',
        description: 'Accedi a specifiche tecniche, manuali utente e documentazione API',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48 Documenti'
      }
    ],
    featured: {
      title: 'Risorse in Evidenza',
      items: [
        { title: 'Brochure Prodotto 2026', type: 'Brochure', size: '2.4 MB' },
        { title: 'Scheda Tecnica Acceleratore IA', type: 'Scheda Tecnica', size: '1.8 MB' },
        { title: 'Architettura CPU Enterprise', type: 'Whitepaper', size: '3.2 MB' },
        { title: 'Guida Modulo di Sicurezza', type: 'Manuale', size: '1.2 MB' }
      ]
    }
  },
  es: {
    hero: {
      title: 'Documentos & Recursos',
      subtitle: 'Accede a documentación técnica, descargas y últimas noticias'
    },
    sections: [
      {
        title: 'Noticias & Anuncios',
        description: 'Mantente actualizado con las últimas noticias de la empresa, lanzamientos de productos e información de la industria',
        icon: Newspaper,
        href: '/news',
        stats: '12 Artículos'
      },
      {
        title: 'Descargas',
        description: 'Descarga folletos, whitepapers, fichas técnicas y recursos técnicos',
        icon: Download,
        href: '/downloads',
        stats: '24 Archivos'
      },
      {
        title: 'Documentación Técnica',
        description: 'Accede a especificaciones técnicas, manuales de usuario y documentación API',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48 Documentos'
      }
    ],
    featured: {
      title: 'Recursos Destacados',
      items: [
        { title: 'Folleto de Producto 2026', type: 'Folleto', size: '2.4 MB' },
        { title: 'Ficha Técnica Acelerador IA', type: 'Ficha Técnica', size: '1.8 MB' },
        { title: 'Arquitectura CPU Empresarial', type: 'Whitepaper', size: '3.2 MB' },
        { title: 'Guía Módulo de Seguridad', type: 'Manual', size: '1.2 MB' }
      ]
    }
  }
};

export default function DocumentsPage() {
  const { language } = useLanguage();
  const data = documentsData[language] || documentsData.en;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
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

      {/* Document Sections */}
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{section.stats}</span>
                  <span className="flex items-center text-blue-600 font-medium">
                    {'View'}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{data.featured.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.featured.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                    <FileCode className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
