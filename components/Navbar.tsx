'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { 
  Globe, 
  Menu, 
  X, 
  Check, 
  ChevronRight,
  Cpu,
  Brain,
  Network,
  Shield,
  Monitor,
  Server,
  Newspaper,
  Download,
  FileCode,
  Phone,
  MessageCircle,
  Mail,
  BookOpen,
  Factory
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '@/lib/i18n/config';

interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ElementType;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!isLangMenuOpen) return;

    const closeOnOutsideInteraction = (event: PointerEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLangMenuOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideInteraction);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideInteraction);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isLangMenuOpen]);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 多语言下拉菜单内容 - 使用专业图标
  const getDropdownContent = (): Record<string, DropdownItem[]> => ({
    products: [
      { title: t.navDropdown?.products?.industrialMiniPC || 'Industrial Mini PC', description: t.navDropdown?.products?.industrialMiniPCDesc || 'Fanless compact industrial computers', href: '/products/industrial-mini-pc', icon: Cpu },
      { title: 'AI Mini PC', description: 'High-performance mini PCs for AI workloads', href: '/products/ai-mini-pc', icon: Brain },
      { title: 'Commercial Mini PC', description: 'Compact computers for business and daily use', href: '/products/commercial-mini-pc', icon: Monitor },
      { title: 'Firewall Mini PC / Server PC', description: 'Network appliances and rackmount firewall systems', href: '/products/firewall-mini-pc', icon: Shield },
    ],
    documents: [
      { title: t.navDropdown?.documents?.news || 'News', description: t.navDropdown?.documents?.newsDesc || 'Latest updates and announcements', href: '/news', icon: Newspaper },
      { title: t.navDropdown?.documents?.downloads || 'File Downloads', description: t.navDropdown?.documents?.downloadsDesc || 'Brochures, whitepapers, and resources', href: '/downloads', icon: Download },
      { title: t.navDropdown?.documents?.techDocs || 'Tech Document', description: t.navDropdown?.documents?.techDocsDesc || 'Technical specifications and manuals', href: '/tech-docs', icon: FileCode },
    ],
    contact: [
      { title: t.navDropdown?.contact?.email || 'Email', description: t.navDropdown?.contact?.emailDesc || 'Send us an email', href: 'mailto:Contact@szmagicchip.com', icon: Mail, external: true },
      { title: t.navDropdown?.contact?.phone || 'Phone', description: t.navDropdown?.contact?.phoneDesc || 'Call our sales team', href: 'tel:+8613392172330', icon: Phone, external: true },
      { title: t.navDropdown?.contact?.whatsapp || 'WhatsApp', description: t.navDropdown?.contact?.whatsappDesc || 'Chat with us on WhatsApp', href: 'https://wa.me/8613392172330', icon: MessageCircle, external: true },
    ],
    about: [
      { title: t.navDropdown?.about?.ourCompany || 'Our Company', description: t.navDropdown?.about?.ourCompanyDesc || 'Company history and mission', href: '/company', icon: BookOpen },
      { title: t.navDropdown?.about?.ourFactory || 'Our Factory', description: t.navDropdown?.about?.ourFactoryDesc || 'Manufacturing facilities and capabilities', href: '/factory', icon: Factory },
    ],
  });

  const dropdownContent = getDropdownContent();

  const navItems: NavItem[] = [
    { label: t.nav.home, href: '/', dropdown: undefined },
    { label: t.nav.products, href: '/products', dropdown: dropdownContent.products },
    { label: t.nav.documents, href: '/documents', dropdown: dropdownContent.documents },
    { label: t.nav.contact, href: '/contact', dropdown: dropdownContent.contact },
    { label: t.nav.aboutUs, href: '/about', dropdown: dropdownContent.about },
  ];

  const languages = SUPPORTED_LANGUAGES.map(code => ({
    code,
    label: LANGUAGE_NAMES[code].native,
    flag: LANGUAGE_NAMES[code].flag,
  }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-xl">
      <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 gap-2 md:gap-3 lg:gap-4">
          {/* Logo */}
          <a href="/" className="group relative ml-1 flex h-11 min-w-0 flex-shrink-0 items-center px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 md:ml-0">
            <Image
              src="/assets/brand/logo-wordmark.svg"
              alt="MagicChip"
              width={150}
              height={40}
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] md:hidden"
              priority
            />
            <Image
              src="/assets/brand/logo-wordmark.svg"
              alt="MagicChip"
              width={150}
              height={40}
              className="hidden h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] md:block lg:h-10"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0 lg:space-x-1 flex-1 justify-center max-w-xl lg:max-w-3xl">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="nav-item group relative rounded-lg px-2 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 lg:px-4 lg:text-base"
                >
                  <span className="relative">
                    {item.label}
                    {/* Hover underline effect */}
                    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                  </span>
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-2 w-72 origin-top-left overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 py-2 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                    >
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          target={dropdownItem.external ? '_blank' : '_self'}
                          rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                          className={`flex items-start px-4 py-3 transition-colors ${
                            dropdownItem.description
                              ? 'hover:bg-blue-50/80'
                              : 'hover:bg-amber-50 text-amber-700 font-medium border-t border-gray-100 mt-2 pt-3'
                          }`}
                        >
                          {dropdownItem.icon && (
                            <div className="mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0">
                              <dropdownItem.icon className="h-5 w-5 text-slate-400 transition-all duration-200 group-hover:scale-110 group-hover:text-blue-600" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">
                              {dropdownItem.title}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-xs text-gray-500 mt-0.5">
                                {dropdownItem.description}
                              </div>
                            )}
                          </div>
                          {!dropdownItem.description && (
                            <ChevronRight className="w-4 h-4 ml-2 text-amber-600" />
                          )}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div className="ml-auto flex flex-shrink-0 items-center gap-1 md:gap-2">
            {/* Language/Region Dropdown */}
            <div ref={languageMenuRef} className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="group hidden items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-2 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 sm:flex"
                aria-label={t.nav.languageAriaLabel}
                aria-expanded={isLangMenuOpen}
                aria-haspopup="menu"
              >
                <Globe className="h-[18px] w-[18px] flex-shrink-0 transition-transform duration-500 group-hover:rotate-[18deg]" />
                <span className="text-xs md:text-sm font-medium uppercase">{language}</span>
              </button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 py-1 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                  >
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                      {t.language.title}
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-lg">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {language === lang.code && (
                          <Check className="h-4 w-4 flex-shrink-0 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="touch-manipulation rounded-xl p-2 text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95 md:hidden"
              aria-label={t.nav.menuAriaLabel}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-3 sm:px-4 py-4 space-y-3">
              {/* Language Selector - Moved to Top */}
              <div className="pb-3 border-b border-gray-200">
                <div className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {t.language.title}
                </div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-md transition-colors touch-manipulation ${
                        language === lang.code
                          ? 'bg-teal-50 text-teal-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {language === lang.code && <Check className="w-4 h-4 flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Items */}
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <a
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium touch-manipulation"
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pl-3 sm:pl-4 space-y-1 border-l-2 border-gray-100">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          target={dropdownItem.external ? '_blank' : '_self'}
                          rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors touch-manipulation"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.icon && (
                            <dropdownItem.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                          )}
                          <span className="truncate">{dropdownItem.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-amber-400"
        style={{ scaleX }}
      />
    </nav>
  );
}
