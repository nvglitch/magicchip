'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

const contactData = {
  en: {
    hero: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help and answer any questions you might have'
    },
    info: [
      {
        title: 'Email',
        description: 'Send us an email anytime',
        content: 'Contact@szmagicchip.com',
        icon: Mail
      },
      {
        title: 'Phone',
        description: 'Mon-Fri from 9am to 6pm',
        content: '+86 0755-23099863',
        icon: Phone
      },
      {
        title: 'WhatsApp',
        description: 'Chat with us on WhatsApp',
        content: '+86 133 9217 2330 [Klaus Lee]',
        icon: MessageCircle
      },
      {
        title: 'Address',
        description: 'Visit our office',
        content: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China',
        icon: MapPin
      }
    ],
    form: {
      title: 'Send us a Message',
      name: 'Your Name',
      email: 'Email Address',
      company: 'Company',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      success: 'Message Sent Successfully!',
      successDesc: 'Thank you for reaching out. We will get back to you soon.',
      error: 'Please fill in all required fields'
    },
    whatsapp: {
      title: 'Chat on WhatsApp',
      description: 'Get quick responses on WhatsApp',
      button: 'Start Chat'
    }
  },
  fr: {
    hero: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes là pour vous aider et répondre à toutes vos questions'
    },
    info: [
      {
        title: 'Email',
        description: 'Envoyez-nous un email à tout moment',
        content: 'Contact@szmagicchip.com',
        icon: Mail
      },
      {
        title: 'Téléphone',
        description: 'Lun-Ven de 9h à 18h',
        content: '+86 0755-23099863',
        icon: Phone
      },
      {
        title: 'WhatsApp',
        description: 'Discutez avec nous sur WhatsApp',
        content: '+86 133 9217 2330 [Klaus Lee]',
        icon: MessageCircle
      },
      {
        title: 'Adresse',
        description: 'Visitez notre bureau',
        content: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China',
        icon: MapPin
      }
    ],
    form: {
      title: 'Envoyez-nous un Message',
      name: 'Votre Nom',
      email: 'Adresse Email',
      company: 'Entreprise',
      subject: 'Sujet',
      message: 'Message',
      submit: 'Envoyer le Message',
      success: 'Message Envoyé avec Succès!',
      successDesc: 'Merci de nous avoir contacté. Nous vous répondrons bientôt.',
      error: 'Veuillez remplir tous les champs obligatoires'
    },
    whatsapp: {
      title: 'Discuter sur WhatsApp',
      description: 'Obtenez des réponses rapides sur WhatsApp',
      button: 'Commencer le Chat'
    }
  },
  de: {
    hero: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Wir sind hier, um Ihnen zu helfen und alle Ihre Fragen zu beantworten'
    },
    info: [
      {
        title: 'E-Mail',
        description: 'Senden Sie uns jederzeit eine E-Mail',
        content: 'Contact@szmagicchip.com',
        icon: Mail
      },
      {
        title: 'Telefon',
        description: 'Mo-Fr von 9 bis 18 Uhr',
        content: '+86 0755-23099863',
        icon: Phone
      },
      {
        title: 'WhatsApp',
        description: 'Chatten Sie mit uns auf WhatsApp',
        content: '+86 133 9217 2330 [Klaus Lee]',
        icon: MessageCircle
      },
      {
        title: 'Adresse',
        description: 'Besuchen Sie unser Büro',
        content: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China',
        icon: MapPin
      }
    ],
    form: {
      title: 'Senden Sie uns eine Nachricht',
      name: 'Ihr Name',
      email: 'E-Mail-Adresse',
      company: 'Unternehmen',
      subject: 'Betreff',
      message: 'Nachricht',
      submit: 'Nachricht Senden',
      success: 'Nachricht Erfolgreich Gesendet!',
      successDesc: 'Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns bald bei Ihnen melden.',
      error: 'Bitte füllen Sie alle erforderlichen Felder aus'
    },
    whatsapp: {
      title: 'Auf WhatsApp chatten',
      description: 'Erhalten Sie schnelle Antworten auf WhatsApp',
      button: 'Chat Starten'
    }
  },
  it: {
    hero: {
      title: 'Contattaci',
      subtitle: 'Siamo qui per aiutarti e rispondere a qualsiasi domanda'
    },
    info: [
      {
        title: 'Email',
        description: 'Inviaci un\'email in qualsiasi momento',
        content: 'Contact@szmagicchip.com',
        icon: Mail
      },
      {
        title: 'Telefono',
        description: 'Lun-Ven dalle 9 alle 18',
        content: '+86 0755-23099863',
        icon: Phone
      },
      {
        title: 'WhatsApp',
        description: 'Chatta con noi su WhatsApp',
        content: '+86 133 9217 2330 [Klaus Lee]',
        icon: MessageCircle
      },
      {
        title: 'Indirizzo',
        description: 'Visita il nostro ufficio',
        content: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China',
        icon: MapPin
      }
    ],
    form: {
      title: 'Inviaci un Messaggio',
      name: 'Il Tuo Nome',
      email: 'Indirizzo Email',
      company: 'Azienda',
      subject: 'Oggetto',
      message: 'Messaggio',
      submit: 'Invia il Messaggio',
      success: 'Messaggio Inviato con Successo!',
      successDesc: 'Grazie per averci contattato. Ti risponderemo presto.',
      error: 'Si prega di compilare tutti i campi richiesti'
    },
    whatsapp: {
      title: 'Chatta su WhatsApp',
      description: 'Ricevi risposte rapide su WhatsApp',
      button: 'Inizia la Chat'
    }
  },
  es: {
    hero: {
      title: 'Contáctenos',
      subtitle: 'Estamos aquí para ayudar y responder cualquier pregunta que tengas'
    },
    info: [
      {
        title: 'Correo',
        description: 'Envíanos un correo en cualquier momento',
        content: 'Contact@szmagicchip.com',
        icon: Mail
      },
      {
        title: 'Teléfono',
        description: 'Lun-Vie de 9am a 6pm',
        content: '+86 0755-23099863',
        icon: Phone
      },
      {
        title: 'WhatsApp',
        description: 'Chatea con nosotros en WhatsApp',
        content: '+86 133 9217 2330 [Klaus Lee]',
        icon: MessageCircle
      },
      {
        title: 'Dirección',
        description: 'Visita nuestra oficina',
        content: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China',
        icon: MapPin
      }
    ],
    form: {
      title: 'Envíanos un Mensaje',
      name: 'Tu Nombre',
      email: 'Correo Electrónico',
      company: 'Empresa',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar Mensaje',
      success: '¡Mensaje Enviado con Éxito!',
      successDesc: 'Gracias por contactarnos. Le responderemos pronto.',
      error: 'Por favor complete todos los campos requeridos'
    },
    whatsapp: {
      title: 'Chatea en WhatsApp',
      description: 'Obtén respuestas rápidas en WhatsApp',
      button: 'Iniciar Chat'
    }
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const dataLanguage = (contactData as any)[language] ? language : 'en';
  const data = (contactData as any)[dataLanguage];

  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string; subject?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; company?: string; subject?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = data.form.error;
    if (!formData.email.trim()) newErrors.email = data.form.error;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.company.trim()) newErrors.company = data.form.error;
    if (!formData.subject.trim()) newErrors.subject = data.form.error;
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
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{data.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.info.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                  <p className="text-blue-600 font-medium">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & WhatsApp - 上下排版 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* 第一行：WhatsApp 卡片 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-md text-white"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <MessageCircle className="w-8 h-8 mr-3" />
                      <h2 className="text-2xl font-bold">{data.whatsapp.title}</h2>
                    </div>
                    <p className="text-green-100">{data.whatsapp.description}</p>
                  </div>
                  <a
                    href="https://wa.me/8613392172330"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors self-start md:self-auto"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {data.whatsapp.button}
                  </a>
                </div>
              </motion.div>

              {/* 第二行：联系表单 */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white p-12 rounded-md shadow-sm text-center"
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
                    className="bg-white p-8 rounded-md shadow-sm"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.form.title}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.name}</label>
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
                              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                                errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                              }`}
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
                          <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.email}</label>
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
                              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                                errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                              }`}
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
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.company}</label>
                          <motion.div
                            animate={errors.company ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => {
                                setFormData({ ...formData, company: e.target.value });
                                if (errors.company) setErrors({ ...errors, company: undefined });
                              }}
                              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                                errors.company ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                              }`}
                            />
                            <AnimatePresence>
                              {errors.company && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                >
                                  <AlertCircle className="w-3 h-3" />
                                  {errors.company}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.subject}</label>
                          <motion.div
                            animate={errors.subject ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <input
                              type="text"
                              value={formData.subject}
                              onChange={(e) => {
                                setFormData({ ...formData, subject: e.target.value });
                                if (errors.subject) setErrors({ ...errors, subject: undefined });
                              }}
                              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                                errors.subject ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                              }`}
                            />
                            <AnimatePresence>
                              {errors.subject && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                >
                                  <AlertCircle className="w-3 h-3" />
                                  {errors.subject}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.message}</label>
                        <motion.div
                          animate={errors.message ? { x: [0, -5, 5, -5, 5, 0] } : { x: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <textarea
                            rows={4}
                            value={formData.message}
                            onChange={(e) => {
                              setFormData({ ...formData, message: e.target.value });
                              if (errors.message) setErrors({ ...errors, message: undefined });
                            }}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all resize-none ${
                              errors.message ? 'border-red-400 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
                            }`}
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
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            {data.form.submit}
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
    </div>
  );
}
