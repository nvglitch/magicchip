'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// 数字计数器组件 — 进入视口时从 0 滚动到目标值
function AnimatedCounter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className = '',
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const ctrl = animate(count, to, {
      duration,
      ease: [0.33, 1, 0.68, 1], // easeOutCubic
    });
    return () => ctrl.stop();
  }, [isInView, to, count, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

// 国家国旗数据 - 使用 flag-icons 库的国家代码
const countries = [
  { name: '美国', code: 'us' },
  { name: '加拿大', code: 'ca' },
  { name: '马来西亚', code: 'my' },
  { name: '瑞典', code: 'se' },
  { name: '挪威', code: 'no' },
  { name: '法国', code: 'fr' },
  { name: '意大利', code: 'it' },
  { name: '澳大利亚', code: 'au' },
];

// 公开的全球 TopoJSON 数据源
const geoUrl = '/assets/common/world-countries-110m.json';

export default function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#101827] py-24 md:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* World Map Background using react-simple-maps */}
      <div className="pointer-events-none absolute inset-x-0 top-4 h-[300px] overflow-hidden md:inset-0 md:h-auto">
        <div className="h-full w-full opacity-75 md:opacity-100">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 120,
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
                    fill="#64748b"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        fill: '#64748b',
                        outline: 'none',
                      },
                      hover: {
                        fill: '#64748b',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#64748b',
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#101827]/15 via-[#101827]/65 to-[#101827] md:bg-gradient-to-br md:from-[#101827]/85 md:via-[#172235]/75 md:to-[#101827]/85" />
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
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t.social.title}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {t.social.subtitle}
          </p>
        </motion.div>

        {/* Country Flags Marquee */}
        <div className="relative mb-16">
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
            className="flex items-center gap-16"
          >
            {/* Triple the countries for seamless loop */}
            {[...countries, ...countries, ...countries].map((country, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <span 
                  className={`fi fi-${country.code}`}
                  style={{ 
                    width: '48px', 
                    height: '36px',
                    display: 'inline-block',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                />
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
          className="rounded-3xl border border-white/10 bg-white/[0.055] p-8 shadow-xl shadow-black/15 backdrop-blur-sm md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Quote */}
            <div>
              <Quote className="w-10 h-10 text-blue-400 mb-4" />
              <blockquote className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed">
                {t.social.quote}
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
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
              {/* Rating — numeric counter */}
              <div className="rounded-2xl border border-white/10 bg-black/15 p-6 shadow-sm">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-yellow-400">★</span>
                  <AnimatedCounter
                    to={parseFloat(t.social.stats.rating) || 5.0}
                    decimals={1}
                    duration={0.7}
                    className="text-3xl font-bold text-yellow-400 ml-1"
                  />
                </div>
                <p className="text-slate-300 text-sm">{t.social.stats.ratingLabel}</p>
              </div>
              {/* Factory Size — spring scale-in (range text) */}
              <div className="rounded-2xl border border-white/10 bg-black/15 p-6 shadow-sm">
                <motion.p
                  className="text-2xl font-bold text-blue-400 mb-1"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.15 }}
                >
                  {t.social.stats.factorySize}
                  <span className="text-lg text-slate-400 ml-1">{t.social.stats.factorySizeUnit}</span>
                </motion.p>
                <p className="text-slate-300 text-sm">{t.social.stats.factorySizeLabel}</p>
              </div>
              {/* Response Time — numeric counter */}
              <div className="rounded-2xl border border-white/10 bg-black/15 p-6 shadow-sm">
                <AnimatedCounter
                  to={parseInt(t.social.stats.responseTime.replace(/[^0-9]/g, '')) || 3}
                  prefix="≤"
                  suffix="h"
                  duration={0.6}
                  className="text-3xl font-bold text-emerald-400 mb-1 block"
                />
                <p className="text-slate-300 text-sm">{t.social.stats.responseTimeLabel}</p>
              </div>
              {/* Global Reach — spring scale-in (text) */}
              <div className="rounded-2xl border border-white/10 bg-black/15 p-6 shadow-sm">
                <motion.p
                  className="mb-1 text-3xl font-bold text-blue-300"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.3 }}
                >
                  {t.social.stats.globalReach}
                </motion.p>
                <p className="text-slate-300 text-sm">{t.social.stats.globalReachLabel}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
