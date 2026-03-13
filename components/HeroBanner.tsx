'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Image from 'next/image';

export default function HeroBanner() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      title: t.hero.slide1.title,
      subtitle: t.hero.slide1.subtitle,
      cta: t.hero.slide1.cta,
      image: '/banner1.jpg',
    },
    {
      id: 2,
      title: t.hero.slide2.title,
      subtitle: t.hero.slide2.subtitle,
      cta: t.hero.slide2.cta,
      image: '/banner2.jpg',
    },
    {
      id: 3,
      title: t.hero.slide3.title,
      subtitle: t.hero.slide3.subtitle,
      cta: t.hero.slide3.cta,
      image: null,
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 30,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -30,
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-video min-h-[400px] sm:min-h-[500px] max-h-[80vh]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={`bg-${currentSlide}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.5, ease: 'easeInOut' },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {slides[currentSlide].image ? (
              <div className="absolute inset-0">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={currentSlide === 0}
                />
                <div className="absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                  <svg className="w-full h-full">
                    <filter id="noise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="max-w-2xl pointer-events-auto"
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 line-clamp-3 sm:line-clamp-none">
                  {slides[currentSlide].subtitle}
                </p>
                <button className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-white text-white text-sm sm:text-base font-semibold rounded-md hover:bg-white/10 transition-colors">
                  {slides[currentSlide].cta}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-4 lg:gap-6 pointer-events-auto">
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 text-white/70 hover:text-white transition-colors touch-manipulation"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors touch-manipulation"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 text-white/70 hover:text-white transition-colors touch-manipulation"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-8 z-20 text-white/50 text-sm hidden lg:block pointer-events-none"
        >
          {t.hero.dragHint}
        </motion.div>
      </div>
    </section>
  );
}
