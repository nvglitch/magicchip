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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{getLocalizedText(pageTitle, language)}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{getLocalizedText(pageSubtitle, language)}</p>
          </motion.div>
        </div>
      </section>

      {/* Editing Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{getLocalizedText(editingPlaceholder, language)}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
