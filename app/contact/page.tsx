'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, MessageSquare } from 'lucide-react';

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
      success: 'Thank you! We\'ll get back to you soon.'
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
      success: 'Merci! Nous vous répondrons bientôt.'
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
      success: 'Danke! Wir melden uns bald bei Ihnen.'
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
      success: 'Grazie! Ti risponderemo presto.'
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
      success: '¡Gracias! Te responderemos pronto.'
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-md shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.form.title}</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.name}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.email}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.company}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.subject}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.message}</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {data.form.submit}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  );
}
