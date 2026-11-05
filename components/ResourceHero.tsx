'use client';

import { motion } from 'framer-motion';

export default function ResourceHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#101827] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(16,111,184,0.3),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(245,158,11,0.14),transparent_28%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 tech-pattern-overlay" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
          <h1 className="break-words hyphens-auto text-5xl font-bold tracking-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
