'use client';

import { useEffect, useState } from 'react';

type TocHeading = { id: string; text: string };
export default function ArticleToc({ headings, label }: { headings: TocHeading[]; label: string }) {
  const [active, setActive] = useState(headings[0]?.id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = headings[0]?.id;
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top <= 136) current = heading.id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [headings]);

  return <nav aria-label={label} className="max-h-[calc(100dvh-12rem)] space-y-2 overflow-y-auto">{headings.map((heading, index) => <a key={heading.id} href={`#${heading.id}`} onClick={() => setActive(heading.id)} aria-current={active === heading.id ? 'location' : undefined} className={`flex gap-3 rounded-lg px-2.5 py-2 text-sm leading-6 transition-colors ${active === heading.id ? 'bg-blue-50 font-semibold text-brand' : 'text-slate-600 hover:bg-slate-50 hover:text-brand'}`}>
    <span aria-hidden="true" className={`shrink-0 text-xs leading-6 ${active === heading.id ? 'text-brand' : 'text-slate-400'}`}>{String(index + 1).padStart(2, '0')}</span><span>{heading.text}</span>
  </a>)}</nav>;
}
