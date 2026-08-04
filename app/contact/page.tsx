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

const formExtras = {
  en: {
    eyebrow: 'Project Inquiry',
    intro: 'Tell us what you are building so our team can respond with the right product and configuration.',
    inquiryType: 'Inquiry Type',
    chooseType: 'Select an inquiry type',
    inquiryOptions: ['Sample evaluation', 'Bulk purchase', 'OEM/ODM customization', 'Technical question'],
    product: 'Product / Model (optional)',
    productPlaceholder: 'e.g. MCSRP6 or Industrial Mini PC',
    quantity: 'Estimated Quantity (optional)',
    quantityPlaceholder: 'e.g. 1 sample or 100 units',
    helpfulTitle: 'Helpful details to include',
    helpfulDetails: ['Product model or CPU platform', 'Expected quantity and timeline', 'Required ports, storage, or branding'],
    emailPrompt: 'Prefer email?',
    requiredNote: 'Required fields are marked with *.',
  },
  fr: {
    eyebrow: 'Demande de Projet',
    intro: 'Décrivez votre projet afin que notre équipe puisse recommander le bon produit et la bonne configuration.',
    inquiryType: 'Type de Demande',
    chooseType: 'Sélectionnez un type de demande',
    inquiryOptions: ['Évaluation d’échantillon', 'Achat en volume', 'Personnalisation OEM/ODM', 'Question technique'],
    product: 'Produit / Modèle (facultatif)',
    productPlaceholder: 'ex. MCSRP6 ou Mini PC industriel',
    quantity: 'Quantité Estimée (facultatif)',
    quantityPlaceholder: 'ex. 1 échantillon ou 100 unités',
    helpfulTitle: 'Informations utiles à fournir',
    helpfulDetails: ['Modèle ou plateforme CPU', 'Quantité et calendrier prévus', 'Ports, stockage ou marquage requis'],
    emailPrompt: 'Vous préférez l’e-mail ?',
    requiredNote: 'Les champs obligatoires sont marqués d’un *.',
  },
  de: {
    eyebrow: 'Projektanfrage',
    intro: 'Beschreiben Sie Ihr Projekt, damit unser Team das passende Produkt und die richtige Konfiguration empfehlen kann.',
    inquiryType: 'Art der Anfrage',
    chooseType: 'Art der Anfrage auswählen',
    inquiryOptions: ['Musterbewertung', 'Mengeneinkauf', 'OEM/ODM-Anpassung', 'Technische Frage'],
    product: 'Produkt / Modell (optional)',
    productPlaceholder: 'z. B. MCSRP6 oder Industrie-Mini-PC',
    quantity: 'Geschätzte Menge (optional)',
    quantityPlaceholder: 'z. B. 1 Muster oder 100 Stück',
    helpfulTitle: 'Hilfreiche Projektdetails',
    helpfulDetails: ['Produktmodell oder CPU-Plattform', 'Erwartete Menge und Zeitplan', 'Benötigte Ports, Speicher oder Branding'],
    emailPrompt: 'Lieber per E-Mail?',
    requiredNote: 'Pflichtfelder sind mit * markiert.',
  },
  it: {
    eyebrow: 'Richiesta di Progetto',
    intro: 'Descrivi il tuo progetto per aiutarci a consigliare il prodotto e la configurazione più adatti.',
    inquiryType: 'Tipo di Richiesta',
    chooseType: 'Seleziona un tipo di richiesta',
    inquiryOptions: ['Valutazione campione', 'Acquisto in volume', 'Personalizzazione OEM/ODM', 'Domanda tecnica'],
    product: 'Prodotto / Modello (opzionale)',
    productPlaceholder: 'es. MCSRP6 o Mini PC industriale',
    quantity: 'Quantità Stimata (opzionale)',
    quantityPlaceholder: 'es. 1 campione o 100 unità',
    helpfulTitle: 'Dettagli utili da includere',
    helpfulDetails: ['Modello o piattaforma CPU', 'Quantità e tempistiche previste', 'Porte, storage o branding richiesti'],
    emailPrompt: 'Preferisci l’e-mail?',
    requiredNote: 'I campi obbligatori sono contrassegnati con *.',
  },
  es: {
    eyebrow: 'Consulta de Proyecto',
    intro: 'Cuéntenos qué está desarrollando para recomendarle el producto y la configuración adecuados.',
    inquiryType: 'Tipo de Consulta',
    chooseType: 'Seleccione un tipo de consulta',
    inquiryOptions: ['Evaluación de muestra', 'Compra por volumen', 'Personalización OEM/ODM', 'Pregunta técnica'],
    product: 'Producto / Modelo (opcional)',
    productPlaceholder: 'p. ej. MCSRP6 o Mini PC industrial',
    quantity: 'Cantidad Estimada (opcional)',
    quantityPlaceholder: 'p. ej. 1 muestra o 100 unidades',
    helpfulTitle: 'Detalles útiles para incluir',
    helpfulDetails: ['Modelo o plataforma de CPU', 'Cantidad y plazo previstos', 'Puertos, almacenamiento o marca requeridos'],
    emailPrompt: '¿Prefiere el correo?',
    requiredNote: 'Los campos obligatorios están marcados con *.',
  },
};

export default function ContactPage() {
  const { language, t } = useLanguage();
  const dataLanguage = (contactData as any)[language] ? language : 'en';
  const data = (contactData as any)[dataLanguage];
  const extras = formExtras[dataLanguage as keyof typeof formExtras] || formExtras.en;

  const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiryType: '', product: '', quantity: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string; inquiryType?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; company?: string; inquiryType?: string; message?: string } = {};
    if (!formData.name.trim()) newErrors.name = data.form.error;
    if (!formData.email.trim()) newErrors.email = data.form.error;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t.contactPage.invalidEmail;
    if (!formData.company.trim()) newErrors.company = data.form.error;
    if (!formData.inquiryType.trim()) newErrors.inquiryType = data.form.error;
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
    setFormData({ name: '', email: '', company: '', inquiryType: '', product: '', quantity: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#101827] text-white">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(245,158,11,0.14),transparent_28%)]" />
          <div className="absolute inset-0 -z-10 opacity-20 tech-pattern-overlay" />
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{data.hero.title}</h1>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">{data.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="relative z-10 -mt-8 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.info.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 ring-1 ring-blue-200">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                  <p className="font-semibold text-blue-800">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & WhatsApp - 上下排版 */}
        <section className="bg-[#eaf0ee] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mx-auto max-w-3xl rounded-[2rem] border border-emerald-200 bg-white p-10 text-center shadow-xl shadow-slate-900/5 md:p-14"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                    <CheckCircle className="h-8 w-8 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">{data.form.success}</h3>
                  <p className="mt-3 text-slate-600">{data.form.successDesc}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.1)] lg:grid-cols-[0.78fr_1.22fr]"
                >
                  <aside className="relative overflow-hidden bg-[#101827] p-7 text-white sm:p-9 lg:p-10">
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-emerald-500/15 blur-3xl" />
                    <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
                    <div className="relative">
                      <span className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        {extras.eyebrow}
                      </span>
                      <h2 className="mt-6 text-3xl font-bold">{data.whatsapp.title}</h2>
                      <p className="mt-3 max-w-md leading-relaxed text-slate-300">{data.whatsapp.description}</p>
                      <a
                        href="https://wa.me/8613392172330"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-emerald-950/25 transition-colors hover:bg-emerald-400"
                      >
                        <MessageSquare className="mr-2 h-5 w-5" />
                        {data.whatsapp.button}
                      </a>

                      <div className="my-8 h-px bg-white/10" />
                      <h3 className="font-semibold text-white">{extras.helpfulTitle}</h3>
                      <ul className="mt-4 space-y-3">
                        {extras.helpfulDetails.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.055] p-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{extras.emailPrompt}</p>
                        <a href="mailto:Contact@szmagicchip.com" className="mt-1 block font-medium text-white hover:text-emerald-300">
                          Contact@szmagicchip.com
                        </a>
                      </div>
                    </div>
                  </aside>

                  <div className="p-6 sm:p-9 lg:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{extras.eyebrow}</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-950">{data.form.title}</h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{extras.intro}</p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">{data.form.name} *</label>
                          <input
                            id="contact-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: undefined });
                            }}
                            aria-invalid={Boolean(errors.name)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">{data.form.email} *</label>
                          <input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            aria-invalid={Boolean(errors.email)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                          {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="contact-company" className="mb-2 block text-sm font-semibold text-slate-700">{data.form.company} *</label>
                          <input
                            id="contact-company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => {
                              setFormData({ ...formData, company: e.target.value });
                              if (errors.company) setErrors({ ...errors, company: undefined });
                            }}
                            aria-invalid={Boolean(errors.company)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                          {errors.company && <p className="mt-1.5 text-sm text-red-600">{errors.company}</p>}
                        </div>
                        <div>
                          <label htmlFor="contact-type" className="mb-2 block text-sm font-semibold text-slate-700">{extras.inquiryType} *</label>
                          <select
                            id="contact-type"
                            value={formData.inquiryType}
                            onChange={(e) => {
                              setFormData({ ...formData, inquiryType: e.target.value });
                              if (errors.inquiryType) setErrors({ ...errors, inquiryType: undefined });
                            }}
                            aria-invalid={Boolean(errors.inquiryType)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          >
                            <option value="">{extras.chooseType}</option>
                            {extras.inquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                          </select>
                          {errors.inquiryType && <p className="mt-1.5 text-sm text-red-600">{errors.inquiryType}</p>}
                        </div>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label htmlFor="contact-product" className="mb-2 block text-sm font-semibold text-slate-700">{extras.product}</label>
                          <input
                            id="contact-product"
                            type="text"
                            value={formData.product}
                            placeholder={extras.productPlaceholder}
                            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-quantity" className="mb-2 block text-sm font-semibold text-slate-700">{extras.quantity}</label>
                          <input
                            id="contact-quantity"
                            type="text"
                            value={formData.quantity}
                            placeholder={extras.quantityPlaceholder}
                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">{data.form.message} *</label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: undefined });
                          }}
                          aria-invalid={Boolean(errors.message)}
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-950 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                        {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
                      </div>

                      <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-slate-500">{extras.requiredNote}</p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              {data.form.submit}
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
    </div>
  );
}
