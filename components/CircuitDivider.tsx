'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * CircuitDivider — animated SVG circuit-board traces between sections.
 * Subtle enough to not distract; animated on scroll into view.
 * Place between sections on the homepage for a tech-forward feel.
 */
export default function CircuitDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-80px' });

  return (
    <div ref={ref} className="relative h-20 w-full overflow-hidden bg-[#f3f7f5] sm:h-24" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trace 1 — top */}
        <motion.path
          d="M 0 32 L 320 32 L 360 72 L 500 72"
          stroke="url(#traceGrad1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="500" cy="72" r="2.5"
          fill="#93c5fd"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        />

        {/* Trace 2 — middle */}
        <motion.path
          d="M 1440 24 L 1100 24 L 1060 64 L 900 64"
          stroke="url(#traceGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="900" cy="64" r="2.5"
          fill="#a5b4fc"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.85 }}
        />

        {/* Trace 3 — bottom, center */}
        <motion.path
          d="M 600 16 L 660 16 L 700 56 L 800 56"
          stroke="url(#traceGrad3)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="800" cy="56" r="2"
          fill="#93c5fd"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="traceGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="30%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="traceGrad2" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0" />
            <stop offset="30%" stopColor="#a5b4fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="traceGrad3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
            <stop offset="40%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
