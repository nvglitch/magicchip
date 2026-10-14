'use client';

import LocalizedLink from '@/components/LocalizedLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import EmailDraftNotice from '@/components/EmailDraftNotice';
import InquiryPrivacyNotice from '@/components/InquiryPrivacyNotice';
import { createInquiryDraft, emailInquiryCopy, type EmailInquiryDraft } from '@/lib/email-inquiry';
import { actionButtonStyles } from '@/lib/action-button-styles';
import { trackSiteEvent } from '@/lib/analytics';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, AlertCircle } from 'lucide-react';
import type { MultiLangText, SiteConfig } from '@/lib/content-loader';
import type { Language } from '@/lib/i18n/config';
import { useState, FormEvent } from 'react';

interface ContactSectionProps {
  siteConfig: SiteConfig | null;
}

function getLocalizedText(text: string | MultiLangText | undefined, language: Language): string {
  if (typeof text === 'string') return text;
  return text?.[language] || text?.en || '';
}

const contactData = {
  en: {
    hero: {
      title: 'Get in Touch',
      subtitle: "Have a project in mind? Let's discuss how we can help"
    },
    labels: {
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      address: 'Address'
    },
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Tell us about your project...',
      button: 'Send Message',
      success: 'Message Sent Successfully!',
      successDesc: 'Thank you for reaching out. We will get back to you soon.',
      error: 'Please fill in all fields'
    },
    whatsapp: {
      button: 'Chat on WhatsApp'
    }
  },
  fr: {
    hero: {
      title: 'Contactez-Nous',
      subtitle: 'Vous avez un projet en tête? Discutons de comment nous pouvons vous aider'
    },
    labels: {
      email: 'Email',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      address: 'Adresse'
    },
    form: {
      name: 'Votre Nom',
      email: 'Votre Email',
      message: 'Parlez-nous de votre projet...',
      button: 'Envoyer',
      success: 'Message Envoyé avec Succès!',
      successDesc: 'Merci de nous avoir contacté. Nous vous répondrons bientôt.',
      error: 'Veuillez remplir tous les champs'
    },
    whatsapp: {
      button: 'Discuter sur WhatsApp'
    }
  },
  de: {
    hero: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Haben Sie ein Projekt? Lassen Sie uns besprechen, wie wir helfen können'
    },
    labels: {
      email: 'E-Mail',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      address: 'Adresse'
    },
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Erzählen Sie uns von Ihrem Projekt...',
      button: 'Nachricht Senden',
      success: 'Nachricht Erfolgreich Gesendet!',
      successDesc: 'Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden.',
      error: 'Bitte füllen Sie alle Felder aus'
    },
    whatsapp: {
      button: 'Auf WhatsApp Chatten'
    }
  },
  it: {
    hero: {
      title: 'Contattaci',
      subtitle: 'Hai un progetto in mente? Discutiamo come possiamo aiutarti'
    },
    labels: {
      email: 'Email',
      phone: 'Telefono',
      whatsapp: 'WhatsApp',
      address: 'Indirizzo'
    },
    form: {
      name: 'Il Tuo Nome',
      email: 'La Tua Email',
      message: 'Parlaci del tuo progetto...',
      button: 'Invia Messaggio',
      success: 'Messaggio Inviato con Successo!',
      successDesc: 'Grazie per averci contattato. Ti risponderemo presto.',
      error: 'Si prega di compilare tutti i campi'
    },
    whatsapp: {
      button: 'Chatta su WhatsApp'
    }
  },
  es: {
    hero: {
      title: 'Contáctenos',
      subtitle: '¿Tienes un proyecto? Discutamos cómo podemos ayudarte'
    },
    labels: {
      email: 'Correo',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
      address: 'Dirección'
    },
    form: {
      name: 'Tu Nombre',
      email: 'Tu Correo',
      message: 'Cuéntanos sobre tu proyecto...',
      button: 'Enviar Mensaje',
      success: '¡Mensaje Enviado con Éxito!',
      successDesc: 'Gracias por contactarnos. Le responderemos pronto.',
      error: 'Por favor complete todos los campos'
    },
    whatsapp: {
      button: 'Chatear en WhatsApp'
    }
  }
};

export default function ContactSection({ siteConfig }: ContactSectionProps) {
  const { language, t } = useLanguage();
  const dataLanguage = language;
  const data = contactData[dataLanguage];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [draft, setDraft] = useState<EmailInquiryDraft | null>(null);
  const isSubmitted = draft !== null;

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = data.form.error;
    if (!formData.email.trim()) newErrors.email = data.form.error;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t.contactPage.invalidEmail;
    if (!formData.message.trim()) newErrors.message = data.form.error;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const prepared = createInquiryDraft(formData, siteConfig?.contact.email);
    setDraft(prepared);
    trackSiteEvent('email_draft_prepared', { source: 'home_form' });
    window.location.href = prepared.mailto;
  };

  if (!siteConfig) return null;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#eaf0ee] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            {data.hero.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            {data.hero.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <LocalizedLink
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.email}</div>
                  <div className="font-medium text-gray-900">{siteConfig.contact.email}</div>
                </div>
              </LocalizedLink>

              <LocalizedLink
                href="tel:+86075523099863"
                className="group flex items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.phone}</div>
                  <div className="font-medium text-gray-900">+86 0755-23099863</div>
                </div>
              </LocalizedLink>

              <LocalizedLink
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.whatsapp}</div>
                  <div className="font-medium text-gray-900">{siteConfig.contact.whatsapp}</div>
                </div>
              </LocalizedLink>

              <LocalizedLink
                href="/company#office-location"
                className="group flex items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all group-hover:bg-blue-100 group-hover:scale-105">
                  <MapPin className="w-5 h-5 text-blue-600 transition-transform group-hover:-translate-y-0.5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.address}</div>
                  <div className="font-medium text-gray-900 text-sm leading-relaxed">
                    {getLocalizedText(siteConfig.contact.address, language)}
                  </div>
                </div>
              </LocalizedLink>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="draft" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
                  {draft && <EmailDraftNotice draft={draft} onEdit={() => setDraft(null)} />}
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 lg:p-10"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{data.form.name}</label>
                        <motion.div
                          animate={errors.name ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                              errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-blue-500 focus:bg-white'
                            }`}
                            placeholder={data.form.name}
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{data.form.email}</label>
                        <motion.div
                          animate={errors.email ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                              errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-blue-500 focus:bg-white'
                            }`}
                            placeholder={data.form.email}
                          />
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              >
                                <AlertCircle className="w-3 h-3" />
                                {errors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{data.form.message}</label>
                      <motion.div
                        animate={errors.message ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <textarea
                          rows={5}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: undefined });
                          }}
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                            errors.message ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-blue-500 focus:bg-white'
                          }`}
                          placeholder={data.form.message}
                        />
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3 h-3" />
                              {errors.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    <InquiryPrivacyNotice />
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        type="submit"
                        className={`${actionButtonStyles.primary} flex-1`}
                      >
                        <Send className="w-5 h-5 shrink-0" />
                        {emailInquiryCopy[language].compose}
                      </button>

                      <LocalizedLink
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={actionButtonStyles.whatsapp}
                      >
                        <MessageCircle className="w-5 h-5 shrink-0" />
                        {data.whatsapp.button}
                      </LocalizedLink>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
