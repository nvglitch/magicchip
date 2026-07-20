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
  const { language, t } = useLanguage();
  const data = documentsData[language] || documentsData.en;

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(245,158,11,0.14),transparent_28%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 tech-pattern-overlay" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{data.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">{data.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="bg-white py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.sections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf9] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
              >
                {/* Background decoration */}
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100/70 transition-transform duration-500 group-hover:scale-150"></div>

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
                    <section.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{section.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{section.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-600">{section.stats}</span>
                  </div>

                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    {t.documentsPage.viewButton}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-[#eaf0ee] py-24 md:py-28">
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
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 ring-1 ring-blue-200">
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
    </div>
  );
}
