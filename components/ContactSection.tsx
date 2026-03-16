'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, MessageSquare, ChevronRight } from 'lucide-react';

const contactData = {
  en: {
    hero: {
      title: 'Get in Touch',
      subtitle: "We're here to help and answer any questions you might have"
    },
    globalOffices: 'Global Offices',
    quickLinks: 'Quick Links',
    links: {
      latestNews: 'Latest News',
      downloads: 'Downloads',
      techDocuments: 'Tech Documents',
      aboutUs: 'About Us',
      ourFactory: 'Our Factory',
      memberTeam: 'Member Team'
    },
    info: [
      { title: 'Email', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: 'Phone', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: 'Headquarters', content: 'San Jose, CA, USA', icon: MapPin, href: '#' },
      { title: 'Business Hours', content: 'Mon-Fri: 9AM - 6PM (PST)', icon: Clock, href: '#' }
    ],
    offices: [
      { city: 'USA', address: 'San Jose, CA' },
      { city: 'China', address: 'Shenzhen' },
      { city: 'Germany', address: 'Munich' },
      { city: 'Japan', address: 'Tokyo' }
    ],
    form: {
      title: 'Send us a Message',
      name: 'Name',
      email: 'Email',
      message: 'How can we help?',
      button: 'Send Message'
    },
    whatsapp: {
      title: 'Chat on WhatsApp',
      button: 'Start Chat'
    }
  },
  fr: {
    hero: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes ici pour vous aider et répondre à toutes vos questions'
    },
    globalOffices: 'Bureaux Mondiaux',
    quickLinks: 'Liens Rapides',
    links: {
      latestNews: 'Actualités',
      downloads: 'Téléchargements',
      techDocuments: 'Documents Techniques',
      aboutUs: 'À Propos',
      ourFactory: 'Notre Usine',
      memberTeam: 'Équipe'
    },
    info: [
      { title: 'Email', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: 'Téléphone', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: 'Siège', content: 'San Jose, CA, USA', icon: MapPin, href: '#' },
      { title: 'Horaires', content: 'Lun-Ven: 9h-18h (PST)', icon: Clock, href: '#' }
    ],
    offices: [
      { city: 'USA', address: 'San Jose, CA' },
      { city: 'Chine', address: 'Shenzhen' },
      { city: 'Allemagne', address: 'Munich' },
      { city: 'Japon', address: 'Tokyo' }
    ],
    form: {
      title: 'Envoyez-nous un Message',
      name: 'Nom',
      email: 'Email',
      message: 'Comment pouvons-nous vous aider?',
      button: 'Envoyer'
    },
    whatsapp: {
      title: 'Discuter sur WhatsApp',
      button: 'Commencer'
    }
  },
  de: {
    hero: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Wir sind hier, um Ihnen zu helfen und alle Ihre Fragen zu beantworten'
    },
    globalOffices: 'Globale Büros',
    quickLinks: 'Schnelllinks',
    links: {
      latestNews: 'Neuigkeiten',
      downloads: 'Downloads',
      techDocuments: 'Technische Dokumente',
      aboutUs: 'Über Uns',
      ourFactory: 'Unsere Fabrik',
      memberTeam: 'Team'
    },
    info: [
      { title: 'E-Mail', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: 'Telefon', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: 'Hauptquartier', content: 'San Jose, CA, USA', icon: MapPin, href: '#' },
      { title: 'Geschäftszeiten', content: 'Mo-Fr: 9-18 Uhr (PST)', icon: Clock, href: '#' }
    ],
    offices: [
      { city: 'USA', address: 'San Jose, CA' },
      { city: 'China', address: 'Shenzhen' },
      { city: 'Deutschland', address: 'München' },
      { city: 'Japan', address: 'Tokio' }
    ],
    form: {
      title: 'Nachricht senden',
      name: 'Name',
      email: 'E-Mail',
      message: 'Wie können wir Ihnen helfen?',
      button: 'Senden'
    },
    whatsapp: {
      title: 'Auf WhatsApp chatten',
      button: 'Starten'
    }
  },
  it: {
    hero: {
      title: 'Contattaci',
      subtitle: 'Siamo qui per aiutarti e rispondere a qualsiasi domanda'
    },
    globalOffices: 'Uffici Globali',
    quickLinks: 'Link Rapidi',
    links: {
      latestNews: 'Notizie',
      downloads: 'Download',
      techDocuments: 'Documenti Tecnici',
      aboutUs: 'Chi Siamo',
      ourFactory: 'La Nostra Fabbrica',
      memberTeam: 'Team'
    },
    info: [
      { title: 'Email', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: 'Telefono', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: 'Sede', content: 'San Jose, CA, USA', icon: MapPin, href: '#' },
      { title: 'Orari', content: 'Lun-Ven: 9-18 (PST)', icon: Clock, href: '#' }
    ],
    offices: [
      { city: 'USA', address: 'San Jose, CA' },
      { city: 'Cina', address: 'Shenzhen' },
      { city: 'Germania', address: 'Monaco' },
      { city: 'Giappone', address: 'Tokyo' }
    ],
    form: {
      title: 'Inviaci un Messaggio',
      name: 'Nome',
      email: 'Email',
      message: 'Come possiamo aiutarti?',
      button: 'Invia'
    },
    whatsapp: {
      title: 'Chatta su WhatsApp',
      button: 'Inizia'
    }
  },
  es: {
    hero: {
      title: 'Contáctenos',
      subtitle: 'Estamos aquí para ayudarte y responder cualquier pregunta'
    },
    globalOffices: 'Oficinas Globales',
    quickLinks: 'Enlaces Rápidos',
    links: {
      latestNews: 'Noticias',
      downloads: 'Descargas',
      techDocuments: 'Documentos Técnicos',
      aboutUs: 'Sobre Nosotros',
      ourFactory: 'Nuestra Fábrica',
      memberTeam: 'Equipo'
    },
    info: [
      { title: 'Email', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: 'Teléfono', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: 'Sede', content: 'San Jose, CA, USA', icon: MapPin, href: '#' },
      { title: 'Horario', content: 'Lun-Vie: 9-18 (PST)', icon: Clock, href: '#' }
    ],
    offices: [
      { city: 'EE.UU.', address: 'San Jose, CA' },
      { city: 'China', address: 'Shenzhen' },
      { city: 'Alemania', address: 'Múnich' },
      { city: 'Japón', address: 'Tokio' }
    ],
    form: {
      title: 'Envíanos un Mensaje',
      name: 'Nombre',
      email: 'Email',
      message: '¿Cómo podemos ayudarte?',
      button: 'Enviar'
    },
    whatsapp: {
      title: 'Chatear en WhatsApp',
      button: 'Iniciar'
    }
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const dataLanguage = (contactData as any)[language] ? language : 'en';
  const data = (contactData as any)[dataLanguage];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {data.hero.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.hero.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {data.info.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-4 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                    <div className="font-medium text-gray-900">{item.content}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">{data.whatsapp.button}</span>
            </a>

            {/* Global Offices */}
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h4 className="font-semibold text-gray-900 mb-3">
                {data.globalOffices}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {data.offices.map((office: any, index: number) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium text-gray-900">{office.city}</span>
                    <span className="text-gray-500"> - {office.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{data.form.title}</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {data.form.button}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-semibold text-gray-900 mb-3">{data.quickLinks}</h4>
              <div className="space-y-2">
                <a href="/news" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.latestNews}
                </a>
                <a href="/downloads" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.downloads}
                </a>
                <a href="/tech-docs" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.techDocuments}
                </a>
                <a href="/about" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.aboutUs}
                </a>
                <a href="/factory" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.ourFactory}
                </a>
                <a href="/leadership" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.memberTeam}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
