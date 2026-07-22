'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';

interface MultiLangText {
  en: string;
  zh?: string;
  fr?: string;
  de?: string;
  it?: string;
  es?: string;
}

function getLocalizedText(text: MultiLangText, language: string): string {
  return text[language as keyof MultiLangText] || text.en;
}

export default function DownloadsPage() {
  const { language } = useLanguage();
  
  const pageTitle = {
    en: 'Downloads',
    zh: '下载中心',
    fr: 'Téléchargements',
    de: 'Downloads',
    it: 'Downloads',
    es: 'Descargas'
  };
  
  const pageSubtitle = {
    en: 'Access our latest resources, documentation, and marketing materials.',
    zh: '获取我们的最新资源、文档和营销材料。',
    fr: 'Accédez à nos dernières ressources, documentation et matériaux marketing.',
    de: 'Zugriff auf unsere neuesten Ressourcen, Dokumentation und Marketingmaterialien.',
    it: 'Accedi alle nostre ultime risorse, documentazione e materiali di marketing.',
    es: 'Acceda a nuestros recursos, documentación y materiales de marketing más recientes.'
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
