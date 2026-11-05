'use client';

import LocalizedLink from '@/components/LocalizedLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ResourceHero from '@/components/ResourceHero';
import { certificateCopy, certificateFileCount } from '@/lib/certificates';
import { editorialCopy } from '@/lib/editorial-copy';
import { motion } from 'framer-motion';
import { Newspaper, Download, FileCode, ArrowRight } from 'lucide-react';

const MotionLink = motion.create(LocalizedLink);

export default function ResourceHub({ caseStudyCount, technicalArticleCount }: { caseStudyCount: number; technicalArticleCount: number }) {
  const { language, t } = useLanguage();
  const words = editorialCopy[language];
  const count = (total: number) => total ? `${total} ${words.articles}` : words.soon;
  const sections = [
    { title: words['case-study'].title, description: words.cardDescriptions.caseStudy, href: '/case-studies', icon: Newspaper, stats: count(caseStudyCount) },
    { title: certificateCopy[language].downloads, description: words.cardDescriptions.certifications, href: '/downloads', icon: Download, stats: `${certificateFileCount} ${certificateCopy[language].files}` },
    { title: words.technical.title, description: words.cardDescriptions.articles, href: '/tech-docs', icon: FileCode, stats: count(technicalArticleCount) },
  ];

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
      <ResourceHero title={words.resourcesTitle} description={words.resourcesIntro} />
      <section className="bg-white py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <MotionLink
                key={section.href}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf9] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100/70 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-105">
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-hover transition-colors">{section.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{section.description}</p>
                  <div className="mt-auto flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-brand">{section.stats}</span>
                  </div>
                  <span className="inline-flex items-center text-brand font-semibold group-hover:text-brand-hover">
                    {t.documentsPage.viewButton}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>
      <section id="contact-cta" className="bg-[#eaf0ee] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-[#101827] p-10 text-center text-white shadow-xl shadow-slate-900/10 md:p-16"
          >
            <h2 className="text-3xl font-bold mb-4">{t.products.ctaTitle}</h2>
            <p className="text-lg mb-8 opacity-90">{t.products.ctaDescription}</p>
            <LocalizedLink href="/contact" className="liquid-cta liquid-cta-solid inline-flex items-center px-8 py-4 font-semibold">
              <span>{t.products.ctaButton}</span>
              <ArrowRight aria-hidden="true" className="w-5 h-5 ml-2" />
            </LocalizedLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
