'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

interface MultiLangText {
  en: string;
  zh?: string;
  fr?: string;
  de?: string;
  it?: string;
  es?: string;
}

interface NewsArticle {
  id: string;
  date: string;
  category: MultiLangText;
  title: MultiLangText;
  excerpt: MultiLangText;
  image: string;
  published: boolean;
}

interface NewsPageClientProps {
  newsArticles: NewsArticle[];
}

function getLocalizedText(text: MultiLangText, language: string): string {
  return text[language as keyof MultiLangText] || text.en;
}

export default function NewsPageClient({ newsArticles }: NewsPageClientProps) {
  const { language } = useLanguage();
  
  const pageTitle = {
    en: 'News & Updates',
    zh: '新闻与更新',
    fr: 'Actualités et Mises à Jour',
    de: 'Nachrichten und Updates',
    it: 'Notizie e Aggiornamenti',
    es: 'Noticias y Actualizaciones'
  };
  
  const pageSubtitle = {
    en: 'Stay informed about the latest developments from MagicChip',
    zh: '随时了解MagicChip的最新动态',
    fr: 'Restez informé des dernières évolutions de MagicChip',
    de: 'Bleiben Sie über die neuesten Entwicklungen von MagicChip informiert',
    it: 'Mantenetevi informati sulle ultime novità di MagicChip',
    es: 'Manténgase informado sobre los últimos desarrollos de MagicChip'
  };
  
  const editingPlaceholder = {
    en: 'This page is currently being edited. Please check back later.',
    zh: '此页面正在编辑中，请稍后再查看。',
    fr: 'Cette page est actuellement en cours d\'édition. Veuillez revenir plus tard.',
    de: 'Diese Seite wird derzeit bearbeitet. Bitte überprüfen Sie später erneut.',
    it: 'Questa pagina è attualmente in fase di modifica. Si prega di controllare più tardi.',
    es: 'Esta página está siendo editada actualmente. Por favor, vuelva más tarde.'
  };

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(245,158,11,0.14),transparent_28%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 tech-pattern-overlay" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{getLocalizedText(pageTitle, language)}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">{getLocalizedText(pageSubtitle, language)}</p>
            </motion.div>
          </div>
        </section>

        {/* Editing Placeholder */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-[#f8faf9] px-6 py-20 text-center shadow-sm md:px-12 md:py-24">
              <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="mx-auto max-w-2xl text-2xl font-semibold leading-relaxed text-slate-900">{getLocalizedText(editingPlaceholder, language)}</h3>
            </div>
          </div>
        </section>
    </div>
  );
}
