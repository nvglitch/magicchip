'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Link from '@/components/LocalizedLink';
import { legalNavigation, legalPaths, legalRoutes } from '@/lib/legal-navigation';
import { analyticsCopy } from '@/lib/analytics-copy';
import { openAnalyticsSettings } from '@/lib/analytics';
import SocialLinks from '@/components/SocialLinks';
import { footerCopy } from '@/lib/footer-copy';
import siteConfig from '@/content/site-config.json';
import { editorialCopy } from '@/lib/editorial-copy';
import { certificateCopy } from '@/lib/certificates';

export default function Footer({ newsletterEnabled = false }: { newsletterEnabled?: boolean }) {
  const { t, language } = useLanguage();
  const copy = footerCopy[language];

  const footerLinks = {
    about: [
      { label: t.footer.about[0], href: '/company', key: 'about-0' },
      { label: t.footer.about[1], href: '/factory', key: 'about-1' },
      { label: editorialCopy[language]['case-study'].title, href: '/case-studies', key: 'about-2' },
    ],
    support: [
      { label: editorialCopy[language].technical.title, href: '/tech-docs', key: 'support-0' },
      { label: certificateCopy[language].downloads, href: '/downloads', key: 'support-1' },
      { label: t.footer.support[2], href: '/contact', key: 'support-2' },
    ],
  };

  const officePhone = siteConfig.contact.phone.replace(/^\+86\s+0/, '+86 ');
  const contactLinks = [
    { key: 'email', label: t.footer.contact[0], value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, icon: Mail },
    { key: 'phone', label: t.footer.contact[1], value: officePhone, href: `tel:${officePhone.replace(/[^+0-9]/g, '')}`, icon: Phone },
    { key: 'whatsapp', label: 'WhatsApp', value: '+86 133 9217 2330', href: 'https://wa.me/8613392172330', icon: MessageCircle },
  ];
  const navigationLink = 'block text-[15px] leading-6 text-blue-50/90 transition-colors hover:text-white hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300';
  const columnTitle = 'mb-5 text-lg font-semibold leading-7 text-white';
  const columnList = 'grid content-start gap-3 self-start';


  return (
    <footer className="bg-[#082d49] text-blue-50/90">
      {/* Newsletter Section */}
      {newsletterEnabled && <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.footer.newsletter.title}</h3>
              <p className="text-blue-100/70">{t.footer.newsletter.subtitle}</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors whitespace-nowrap">
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>
      </div>}

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:py-14">
        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-9 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,0.85fr)_minmax(0,0.95fr)_minmax(220px,1.15fr)] lg:gap-x-12">
          <div className="col-span-2 lg:col-span-1">
            <p className="max-w-md text-[15px] leading-6 text-blue-50/85">{copy.description}</p>
            <div className="mt-6">
              <SocialLinks showTitle={false} />
            </div>
          </div>

          <nav aria-label={t.footer.links.about}>
            <h3 className={columnTitle}>{t.footer.links.about}</h3>
            <ul className={columnList}>
              {footerLinks.about.map(link => <li key={link.key}><Link href={link.href} className={navigationLink}>{link.label}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label={t.footer.links.support}>
            <h3 className={columnTitle}>{t.footer.links.support}</h3>
            <ul className={columnList}>
              {footerLinks.support.map(link => <li key={link.key}><Link href={link.href} className={navigationLink}>{link.label}</Link></li>)}
            </ul>
          </nav>
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h3 className={columnTitle}>{t.footer.links.contact}</h3>
            <ul className={columnList}>
              {contactLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} aria-label={`${link.label}: ${link.value}`} {...(link.key === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="group flex items-center gap-3 rounded-sm text-[15px] leading-6 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                    <link.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-blue-100/80" />
                    <span className="min-w-0 break-words text-[15px]">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 pt-6 pb-36 sm:px-8 lg:pb-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs lg:flex-row lg:items-center lg:gap-8 lg:pr-48">
            <p className="text-blue-100/70">{t.footer.copyright}</p>
            <nav aria-label={legalNavigation[language].navigation} className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
              {legalRoutes.map(id => (
                <Link key={id} href={legalPaths[id]} className="text-blue-100/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  {legalNavigation[language][id]}
                </Link>
              ))}
              <button type="button" onClick={openAnalyticsSettings} className="cursor-pointer text-blue-100/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {analyticsCopy[language].settings}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
