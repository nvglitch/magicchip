'use client';

import { useState } from 'react';
import { Search, Globe, Menu, X, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
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

  // 多语言下拉菜单内容
  const getDropdownContent = (): Record<string, DropdownItem[]> => ({
    products: [
      { title: t.navDropdown?.products?.enterpriseCPUs || 'Enterprise CPUs', description: t.navDropdown?.products?.enterpriseCPUsDesc || 'High-performance processors for data centers', href: '#', icon: '💻' },
      { title: t.navDropdown?.products?.aiAccelerators || 'AI Accelerators', description: t.navDropdown?.products?.aiAcceleratorsDesc || 'Specialized chips for ML workloads', href: '#', icon: '🤖' },
      { title: t.navDropdown?.products?.networkChips || 'Network Chips', description: t.navDropdown?.products?.networkChipsDesc || 'Advanced connectivity solutions', href: '#', icon: '🌐' },
      { title: t.navDropdown?.products?.securityModules || 'Security Modules', description: t.navDropdown?.products?.securityModulesDesc || 'Hardware-based data protection', href: '#', icon: '🔒' },
      { title: t.navDropdown?.products?.viewAll || 'View All Products', href: '#products' },
    ],
    solutions: [
      { title: t.navDropdown?.solutions?.dataCenter || 'Data Center', description: t.navDropdown?.solutions?.dataCenterDesc || 'Scalable infrastructure solutions', href: '#', icon: '🏢' },
      { title: t.navDropdown?.solutions?.cloudComputing || 'Cloud Computing', description: t.navDropdown?.solutions?.cloudComputingDesc || 'Flexible cloud architecture', href: '#', icon: '☁️' },
      { title: t.navDropdown?.solutions?.edgeComputing || 'Edge Computing', description: t.navDropdown?.solutions?.edgeComputingDesc || 'Low-latency edge processing', href: '#', icon: '⚡' },
      { title: t.navDropdown?.solutions?.aiML || 'AI & Machine Learning', description: t.navDropdown?.solutions?.aiMLDesc || 'Intelligent computing platforms', href: '#', icon: '🧠' },
      { title: t.navDropdown?.solutions?.viewAll || 'View All Solutions', href: '#solutions' },
    ],
    services: [
      { title: t.navDropdown?.services?.consulting || 'Consulting', description: t.navDropdown?.services?.consultingDesc || 'Expert architecture guidance', href: '#', icon: '💡' },
      { title: t.navDropdown?.services?.implementation || 'Implementation', description: t.navDropdown?.services?.implementationDesc || 'End-to-end deployment support', href: '#', icon: '🚀' },
      { title: t.navDropdown?.services?.training || 'Training', description: t.navDropdown?.services?.trainingDesc || 'Technical certification programs', href: '#', icon: '📚' },
      { title: t.navDropdown?.services?.support || 'Support', description: t.navDropdown?.services?.supportDesc || '24/7 technical assistance', href: '#', icon: '🎧' },
      { title: t.navDropdown?.services?.viewAll || 'View All Services', href: '#services' },
    ],
    about: [
      { title: t.navDropdown?.about?.ourStory || 'Our Story', description: t.navDropdown?.about?.ourStoryDesc || 'Company history and mission', href: '#', icon: '📖' },
      { title: t.navDropdown?.about?.leadership || 'Leadership', description: t.navDropdown?.about?.leadershipDesc || 'Meet our executive team', href: '#', icon: '👥' },
      { title: t.navDropdown?.about?.careers || 'Careers', description: t.navDropdown?.about?.careersDesc || 'Join our growing team', href: '#', icon: '🎯' },
      { title: t.navDropdown?.about?.press || 'Press & Media', description: t.navDropdown?.about?.pressDesc || 'News and announcements', href: '#', icon: '📰' },
      { title: t.navDropdown?.about?.contactUs || 'Contact Us', href: '#about' },
    ],
  });

  const dropdownContent = getDropdownContent();

  const navItems: NavItem[] = [
    { label: t.nav.products, href: '#products', dropdown: dropdownContent.products },
    { label: t.nav.solutions, href: '#solutions', dropdown: dropdownContent.solutions },
    { label: t.nav.services, href: '#services', dropdown: dropdownContent.services },
    { label: t.nav.aboutUs, href: '#about', dropdown: dropdownContent.about },
  ];

  const languages = [
    { code: 'en' as const, label: t.language.en },
    { code: 'zh' as const, label: t.language.zh },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span>MagicChip</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
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
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
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
                            <span className="mr-3 text-lg">{dropdownItem.icon}</span>
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
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language/Region Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="hidden sm:flex items-center space-x-1 p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                  >
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                      {t.language.title}
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <Check className="w-4 h-4 text-blue-600" />
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
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
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
              className="overflow-hidden"
            >
              <div className="py-4">
                <input
                  type="text"
                  placeholder={t.nav.searchPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <a
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.icon && (
                            <span className="mr-2">{dropdownItem.icon}</span>
                          )}
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-500 mb-2">{t.language.title}</div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2 py-2 text-sm rounded-lg transition-colors ${
                        language === lang.code 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
