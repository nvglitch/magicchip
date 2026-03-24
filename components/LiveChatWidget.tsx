'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Copy, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LiveChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'message'>('whatsapp');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Close on click outside (desktop only)
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest('[data-chat-panel]') &&
        !target.closest('[data-chat-fab]')
      ) {
        setIsOpen(false);
      }
    };

    // Only add listener on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText('+86 133 9217 2330');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleStartWhatsApp = () => {
    window.open('https://wa.me/8613392172330', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Auto-close after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      setActiveTab('whatsapp');
    }, 3000);

    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        data-chat-fab
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-6 md:right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center z-[9999] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        aria-label={t.chat.fab.tooltip}
        title={t.chat.fab.tooltip}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile: Full screen overlay */}
            <motion.div
              data-chat-panel
              className="md:hidden fixed inset-0 bg-white z-[9999] flex flex-col"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.chat.header.greeting}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label={t.chat.header.close}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'whatsapp'
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t.chat.tabs.whatsapp}
                  {activeTab === 'whatsapp' && (
                    <motion.div
                      layoutId="mobile-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'message'
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t.chat.tabs.message}
                  {activeTab === 'message' && (
                    <motion.div
                      layoutId="mobile-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'whatsapp' ? (
                    <motion.div
                      key="whatsapp"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {t.chat.whatsapp.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.chat.whatsapp.subtitle}
                        </p>
                      </div>

                      {/* WhatsApp Number */}
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">WhatsApp</p>
                          <p className="text-base font-mono font-medium text-gray-900">
                            {t.chat.whatsapp.number}
                          </p>
                        </div>
                        <button
                          onClick={handleCopyNumber}
                          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4" />
                              {t.chat.whatsapp.copied}
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              {t.chat.whatsapp.copyButton}
                            </>
                          )}
                        </button>
                        <button
                          onClick={handleStartWhatsApp}
                          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t.chat.whatsapp.startChat}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="message"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {t.chat.form.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {t.chat.form.subtitle}
                            </p>
                          </div>

                          <div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={t.chat.form.namePlaceholder}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </div>

                          <div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder={t.chat.form.emailPlaceholder}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </div>

                          <div>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder={t.chat.form.messagePlaceholder}
                              required
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
                          >
                            {isSubmitting
                              ? t.chat.form.submitting
                              : t.chat.form.submitButton}
                          </button>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {t.chat.form.successTitle}
                          </h4>
                          <p className="text-gray-600">
                            {t.chat.form.successMessage}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Desktop: Popover panel */}
            <motion.div
              data-chat-panel
              className="hidden md:block fixed bottom-24 right-6 w-[380px] bg-white rounded-2xl shadow-2xl z-[9999] overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{ maxHeight: '600px' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.chat.header.greeting}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  aria-label={t.chat.header.close}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'whatsapp'
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t.chat.tabs.whatsapp}
                  {activeTab === 'whatsapp' && (
                    <motion.div
                      layoutId="desktop-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === 'message'
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t.chat.tabs.message}
                  {activeTab === 'message' && (
                    <motion.div
                      layoutId="desktop-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6" style={{ maxHeight: '480px' }}>
                <AnimatePresence mode="wait">
                  {activeTab === 'whatsapp' ? (
                    <motion.div
                      key="whatsapp"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {t.chat.whatsapp.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t.chat.whatsapp.subtitle}
                        </p>
                      </div>

                      {/* WhatsApp Number */}
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">WhatsApp</p>
                          <p className="text-base font-mono font-medium text-gray-900">
                            {t.chat.whatsapp.number}
                          </p>
                        </div>
                        <button
                          onClick={handleCopyNumber}
                          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4" />
                              {t.chat.whatsapp.copied}
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              {t.chat.whatsapp.copyButton}
                            </>
                          )}
                        </button>
                        <button
                          onClick={handleStartWhatsApp}
                          className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t.chat.whatsapp.startChat}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="message"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {t.chat.form.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {t.chat.form.subtitle}
                            </p>
                          </div>

                          <div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder={t.chat.form.namePlaceholder}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </div>

                          <div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder={t.chat.form.emailPlaceholder}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            />
                          </div>

                          <div>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder={t.chat.form.messagePlaceholder}
                              required
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
                          >
                            {isSubmitting
                              ? t.chat.form.submitting
                              : t.chat.form.submitButton}
                          </button>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {t.chat.form.successTitle}
                          </h4>
                          <p className="text-gray-600">
                            {t.chat.form.successMessage}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
