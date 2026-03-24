'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Globe, 
  Menu, 
  X, 
  Check, 
  ChevronRight,
  Cpu,
  Brain,
  Network,
  Shield,
  Newspaper,
  Download,
  FileCode,
  Phone,
  MessageCircle,
  Mail,
  BookOpen,
  Users,
  Target,
  Factory
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '@/lib/i18n/config';

interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ElementType;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t, language, setLanguage } = useLanguage();

  // 多语言下拉菜单内容 - 使用专业图标
  const getDropdownContent = (): Record<string, DropdownItem[]> => ({
    products: [
      { title: t.navDropdown?.products?.enterpriseCPUs || 'Enterprise CPUs', description: t.navDropdown?.products?.enterpriseCPUsDesc || 'High-performance processors for data centers', href: '#', icon: Cpu },
      { title: t.navDropdown?.products?.aiAccelerators || 'AI Accelerators', description: t.navDropdown?.products?.aiAcceleratorsDesc || 'Specialized chips for ML workloads', href: '#', icon: Brain },
      { title: t.navDropdown?.products?.networkChips || 'Network Chips', description: t.navDropdown?.products?.networkChipsDesc || 'Advanced connectivity solutions', href: '#', icon: Network },
      { title: t.navDropdown?.products?.securityModules || 'Security Modules', description: t.navDropdown?.products?.securityModulesDesc || 'Hardware-based data protection', href: '#', icon: Shield },
    ],
    documents: [
      { title: t.navDropdown?.documents?.news || 'News', description: t.navDropdown?.documents?.newsDesc || 'Latest updates and announcements', href: '/news', icon: Newspaper },
      { title: t.navDropdown?.documents?.downloads || 'File Downloads', description: t.navDropdown?.documents?.downloadsDesc || 'Brochures, whitepapers, and resources', href: '/downloads', icon: Download },
      { title: t.navDropdown?.documents?.techDocs || 'Tech Document', description: t.navDropdown?.documents?.techDocsDesc || 'Technical specifications and manuals', href: '/tech-docs', icon: FileCode },
    ],
    contact: [
      { title: t.navDropdown?.contact?.email || 'Email', description: t.navDropdown?.contact?.emailDesc || 'Send us an email', href: 'mailto:Contact@szmagicchip.com', icon: Mail },
      { title: t.navDropdown?.contact?.phone || 'Phone', description: t.navDropdown?.contact?.phoneDesc || 'Call our sales team', href: 'tel:+8613392172330', icon: Phone },
      { title: t.navDropdown?.contact?.whatsapp || 'WhatsApp', description: t.navDropdown?.contact?.whatsappDesc || 'Chat with us on WhatsApp', href: 'https://wa.me/8613392172330', icon: MessageCircle },
    ],
    about: [
      { title: 'Our Company', description: 'Company history and mission', href: '/company', icon: BookOpen },
      { title: 'Our Factory', description: 'Manufacturing facilities and capabilities', href: '/factory', icon: Factory },
      { title: t.navDropdown?.about?.leadership || 'Member Team', description: t.navDropdown?.about?.leadershipDesc || 'Meet our team members', href: '/leadership', icon: Users },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 gap-2 md:gap-3 lg:gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0 h-10 min-w-0 ml-2 md:ml-0">
            <Image
              src="/magic chip Logo.png"
              alt="MagicChip"
              width={150}
              height={40}
              className="h-7 md:h-8 lg:h-10 w-auto object-contain md:hidden"
              priority
            />
            <Image
              src="/logo.png"
              alt="MagicChip"
              width={150}
              height={40}
              className="hidden md:block h-8 lg:h-10 w-auto object-contain"
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
                  className="nav-item group relative px-2 lg:px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors whitespace-nowrap text-sm lg:text-base"
                >
                  <span className="relative">
                    {item.label}
                    {/* Hover underline effect */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
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
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-md shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          className={`flex items-start px-4 py-3 transition-colors ${
                            dropdownItem.description
                              ? 'hover:bg-gray-50'
                              : 'hover:bg-blue-50 text-blue-600 font-medium border-t border-gray-100 mt-2 pt-3'
                          }`}
                        >
                          {dropdownItem.icon && (
                            <div className="mr-3 w-5 h-5 flex items-center justify-center flex-shrink-0">
                              <dropdownItem.icon className="w-5 h-5 text-gray-500" />
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
                            <ChevronRight className="w-4 h-4 ml-2 text-blue-600" />
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
          <div className="flex items-center gap-1 md:gap-2 lg:gap-4 flex-shrink-0 ml-auto">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1.5 md:p-2 text-gray-700 hover:text-gray-900 transition-colors touch-manipulation"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language/Region Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="hidden sm:flex items-center gap-1 p-1.5 md:p-2 text-gray-700 hover:text-gray-900 transition-colors touch-manipulation"
                aria-label="Change language"
              >
                <Globe className="w-5 h-5 flex-shrink-0" />
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
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
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
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
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
              className="md:hidden p-1.5 md:p-2 text-gray-700 hover:text-gray-900 transition-colors touch-manipulation"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-200"
            >
              <div className="py-3 sm:py-4">
                <input
                  type="text"
                  placeholder={t.nav.searchPlaceholder}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
                          ? 'bg-blue-50 text-blue-600 font-medium'
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
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors touch-manipulation"
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
    </nav>
  );
}
