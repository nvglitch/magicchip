'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// 国家国旗数据
const countries = [
  { name: '美国', flag: '🇺🇸' },
  { name: '加拿大', flag: '🇨🇦' },
  { name: '马来西亚', flag: '🇲🇾' },
  { name: '瑞典', flag: '🇸🇪' },
  { name: '挪威', flag: '🇳🇴' },
  { name: '法国', flag: '🇫🇷' },
  { name: '意大利', flag: '🇮🇹' },
  { name: '澳大利亚', flag: '🇦🇺' },
];

// 公开的全球 TopoJSON 数据源
const geoUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-110m.json';

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* World Map Background using react-simple-maps */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 140,
              center: [0, 20],
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#475569"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        fill: '#475569',
                        outline: 'none',
                      },
                      hover: {
                        fill: '#475569',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#475569',
                        outline: 'none',
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
        {/* Overlay to fade the map into background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.social.title}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t.social.subtitle}
          </p>
        </motion.div>

        {/* Country Flags Marquee */}
        <div className="relative mb-16">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

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
            {/* Double the countries for seamless loop */}
            {[...countries, ...countries].map((country, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center space-x-3 bg-slate-700/30 rounded-full px-6 py-3 border border-slate-600/30"
              >
                <span className="text-3xl">{country.flag}</span>
                <span className="text-lg font-medium text-slate-300">{country.name}</span>
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
          className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-md p-8 md:p-12 border border-slate-600/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Quote */}
            <div>
              <Quote className="w-10 h-10 text-blue-400 mb-4" />
              <blockquote className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed">
                {t.social.quote}
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {t.social.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.social.author}</p>
                  <p className="text-slate-400 text-sm">{t.social.role}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-md p-6 shadow-sm border border-slate-600/30">
                <p className="text-3xl font-bold text-blue-400 mb-1">40%</p>
                <p className="text-slate-300 text-sm">{t.social.stats.performance}</p>
              </div>
              <div className="bg-slate-900/50 rounded-md p-6 shadow-sm border border-slate-600/30">
                <p className="text-3xl font-bold text-emerald-400 mb-1">25%</p>
                <p className="text-slate-300 text-sm">{t.social.stats.energy}</p>
              </div>
              <div className="bg-slate-900/50 rounded-md p-6 shadow-sm border border-slate-600/30">
                <p className="text-3xl font-bold text-purple-400 mb-1">99.9%</p>
                <p className="text-slate-300 text-sm">{t.social.stats.uptime}</p>
              </div>
              <div className="bg-slate-900/50 rounded-md p-6 shadow-sm border border-slate-600/30">
                <p className="text-3xl font-bold text-orange-400 mb-1">3x</p>
                <p className="text-slate-300 text-sm">{t.social.stats.roi}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
