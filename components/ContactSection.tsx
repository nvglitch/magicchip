'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { getSiteConfig } from '@/lib/content-loader';

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
      button: 'Send Message'
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
      button: 'Envoyer'
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
      button: 'Nachricht Senden'
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
      button: 'Invia Messaggio'
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
      button: 'Enviar Mensaje'
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
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{data.form.name}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder={data.form.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{data.form.email}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder={data.form.email}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{data.form.message}</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                    placeholder={data.form.message}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {data.form.button}
                  </button>
                  
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
