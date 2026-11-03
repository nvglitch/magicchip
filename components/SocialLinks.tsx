'use client';

import { Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { socialCopy, socialLinks } from '@/lib/social-links';

const icons = { linkedin: Linkedin, facebook: Facebook };

export default function SocialLinks({ showTitle = true }: { showTitle?: boolean }) {
  const { language } = useLanguage();
  const copy = socialCopy[language];

  return (
    <div>
      {showTitle && <p className="mb-3 font-semibold text-white">{copy.title}</p>}
      <nav aria-label={copy.title} className="flex items-center gap-3">
        {socialLinks.map(link => {
          const Icon = icons[link.id];
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.profileLabel(link.name)}
              title={link.name}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              <Icon aria-hidden="true" fill="currentColor" strokeWidth={0} className="h-5 w-5" />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
