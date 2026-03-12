'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const logos = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'DataFlow', initials: 'DF' },
  { name: 'CloudNet', initials: 'CN' },
  { name: 'AIVentures', initials: 'AI' },
  { name: 'SysCore', initials: 'SC' },
  { name: 'NetScale', initials: 'NS' },
  { name: 'QuantumLabs', initials: 'QL' },
  { name: 'FutureTech', initials: 'FT' },
];

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.social.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.social.subtitle}
          </p>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative mb-16">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
            className="flex space-x-12"
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded flex items-center justify-center"
              >
                <span className="text-xl font-bold text-gray-400">{logo.initials}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Quote */}
            <div>
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
                {t.social.quote}
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.social.author}</p>
                  <p className="text-gray-600 text-sm">{t.social.role}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-3xl font-bold text-blue-600 mb-1">40%</p>
                <p className="text-gray-600 text-sm">{t.social.stats.performance}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-3xl font-bold text-emerald-600 mb-1">25%</p>
                <p className="text-gray-600 text-sm">{t.social.stats.energy}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-3xl font-bold text-purple-600 mb-1">99.9%</p>
                <p className="text-gray-600 text-sm">{t.social.stats.uptime}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <p className="text-3xl font-bold text-orange-600 mb-1">3x</p>
                <p className="text-gray-600 text-sm">{t.social.stats.roi}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {t.social.caseStudy}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
