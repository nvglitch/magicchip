'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    about: [
      { label: t.footer.about[0], href: '/company' },
      { label: t.footer.about[1], href: '/factory' },
      { label: t.footer.about[2], href: '/leadership' },
      { label: t.footer.about[3], href: '/news' },
    ],
    support: [
      { label: t.footer.support[0], href: '/tech-docs' },
      { label: t.footer.support[1], href: '/downloads' },
      { label: t.footer.support[2], href: '/contact' },
      { label: t.footer.support[3], href: '#' },
    ],
    contact: t.footer.contact.map((label, index) => ({ 
      label, 
      href: index === 0 ? '/contact' : index === 1 ? '#' : index === 2 ? '#' : '#',
      key: `contact-${index}`
    })),
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.footer.newsletter.title}</h3>
              <p className="text-gray-400">{t.footer.newsletter.subtitle}</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links.about}</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links.support}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.links.contact}</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-400">{t.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
