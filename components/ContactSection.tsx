'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { getSiteConfig } from '@/lib/content-loader';
import { useState, FormEvent } from 'react';

interface ContactSectionProps {
  siteConfig: ReturnType<typeof getSiteConfig>;
}

function getLocalizedText(text: any, language: string): string {
  if (typeof text === 'string') return text;
  return text?.[language as keyof typeof text] || text?.en || '';
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
  const { language } = useLanguage();
  const dataLanguage = (contactData as any)[language] ? language : 'en';
  const data = (contactData as any)[dataLanguage];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = data.form.error;
    if (!formData.email.trim()) newErrors.email = data.form.error;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = data.form.error;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  if (!siteConfig) return null;

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.hero.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            {data.hero.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.email}</div>
                  <div className="font-medium text-gray-900">{siteConfig.contact.email}</div>
                </div>
              </a>

              <a 
                href="tel:+86075523099863"
                className="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-100 transition-colors">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.phone}</div>
                  <div className="font-medium text-gray-900">+86 0755-23099863</div>
                </div>
              </a>

              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-100 transition-colors">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.whatsapp}</div>
                  <div className="font-medium text-gray-900">{siteConfig.contact.whatsapp}</div>
                </div>
              </a>

              <div className="flex items-start p-5 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">{data.labels.address}</div>
                  <div className="font-medium text-gray-900 text-sm leading-relaxed">
                    {getLocalizedText(siteConfig.contact.address, language)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl shadow-lg p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-900 mb-2"
                  >
                    {data.form.success}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600"
                  >
                    {data.form.successDesc}
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-8 lg:p-10"
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

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="flex-1 flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {data.form.button}
                          </>
                        )}
                      </motion.button>

                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-8 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {data.whatsapp.button}
                      </a>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
