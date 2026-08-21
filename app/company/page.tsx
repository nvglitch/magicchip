'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Target, Eye, Award, MapPin, Lightbulb, Star, Handshake } from 'lucide-react';
import { useRef } from 'react';

const companyData = {
  en: {
    hero: {
      title: 'Our Company',
      subtitle: 'Professional Mini PC & Industrial Computing Solutions Since 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'MagicChip, also known as Magic Chip, is the brand of Shenzhen Magic Chip Technology Co., Ltd., a professional manufacturer of mini PCs and industrial computing equipment based in Shenzhen, China. Founded in 2021, we specialize in R&D, manufacturing, and sales of mini PCs, industrial computers, multi-port industrial hosts, industrial tablets, and laptops. Our products are widely used in intelligent retail, digital signage, financial self-service, industrial automation, education, medical, and IoT fields.'
    },
    stats: [
      { value: '4+', label: 'Years of Experience' },
      { value: '50-100', label: 'Team Members' },
      { value: '$10M-25M', label: 'Annual Revenue' },
      { value: '30+', label: 'Export Markets' }
    ],
    mission: {
      title: 'Our Mission',
      content: 'To provide high-performance, reliable embedded computing solutions that empower businesses worldwide. We are committed to innovation in miniaturization, fanless design, and industrial-grade stability, delivering cost-effective products that meet diverse customer needs.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To become a leading global provider of mini PCs and industrial computing equipment, recognized for our flexible OEM/ODM services, rapid response capabilities, and excellence in embedded computing solutions.'
    },
    values: [
      {
        title: 'Innovation',
        description: 'We continuously innovate in product design, focusing on miniaturization, fanless cooling, and high-performance networking.',
        icon: 'Lightbulb'
      },
      {
        title: 'Quality',
        description: 'Every product undergoes rigorous testing to ensure industrial-grade reliability and long-term stability.',
        icon: 'Star'
      },
      {
        title: 'Flexibility',
        description: 'We offer flexible OEM/ODM customization services to meet specific customer requirements.',
        icon: 'Handshake'
      },
      {
        title: 'Reliability',
        description: 'We build trust through consistent product quality and responsive customer support.',
        icon: 'Award'
      }
    ],
    timeline: [
      { year: '2021', title: 'Founded', description: 'MagicChip was established in Shenzhen, focusing on mini PC R&D' },
      { year: '2022', title: 'Product Launch', description: 'Launched industrial mini PC and tablet product lines' },
      { year: '2023', title: 'Market Expansion', description: 'Expanded to European and North American markets' },
      { year: '2024', title: 'OEM/ODM Growth', description: 'Established flexible customization service capabilities' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  fr: {
    hero: {
      title: 'Notre Entreprise',
      subtitle: 'Solutions Professionnelles de Mini PC et Informatique Industrielle Depuis 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fondée en 2021, Shenzhen Magic Chip Technology Co., Ltd. est un fabricant professionnel de mini PC et d\'équipements informatiques industriels basé à Shenzhen, en Chine. Nous sommes spécialisés dans la R&D, la fabrication et la vente de mini PC, ordinateurs industriels, hôtes industriels multi-ports, tablettes industrielles et ordinateurs portables. Nos produits sont largement utilisés dans la vente au détail intelligente, la signalisation numérique, les services financiers en libre-service, l\'automatisation industrielle, l\'éducation, la médecine et les domaines IoT.'
    },
    stats: [
      { value: '4+', label: 'Années d\'Expérience' },
      { value: '50-100', label: 'Membres de l\'Équipe' },
      { value: '$10M-25M', label: 'Revenus Annuels' },
      { value: '30+', label: 'Marchés d\'Export' }
    ],
    mission: {
      title: 'Notre Mission',
      content: 'Fournir des solutions informatiques embarquées performantes et fiables qui autonomisent les entreprises du monde entier. Nous nous engageons dans l\'innovation en miniaturisation, design sans ventilateur et stabilité industrielle.'
    },
    vision: {
      title: 'Notre Vision',
      content: 'Devenir un fournisseur mondial leader de mini PC et d\'équipements informatiques industriels, reconnu pour nos services OEM/ODM flexibles et notre excellence en solutions informatiques embarquées.'
    },
    values: [
      { title: 'Innovation', description: 'Nous innovons continuellement dans la conception des produits, en nous concentrant sur la miniaturisation et le refroidissement sans ventilateur.', icon: 'Lightbulb' },
      { title: 'Qualité', description: 'Chaque produit subit des tests rigoureux pour assurer une fiabilité de qualité industrielle.', icon: 'Star' },
      { title: 'Flexibilité', description: 'Nous offrons des services de personnalisation OEM/ODM flexibles pour répondre aux besoins spécifiques.', icon: 'Handshake' },
      { title: 'Fiabilité', description: 'Nous construisons la confiance grâce à une qualité de produit constante et un support client réactif.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Fondation', description: 'MagicChip a été fondé à Shenzhen, se concentrant sur la R&D des mini PC' },
      { year: '2022', title: 'Lancement Produit', description: 'Lancement de la première série de mini PC industriels et tablettes' },
      { year: '2023', title: 'Expansion Marché', description: 'Expansion vers les marchés européens et nord-américains' },
      { year: '2024', title: 'Croissance OEM/ODM', description: 'Établissement de capacités de service de personnalisation flexible' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'Chine', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  de: {
    hero: {
      title: 'Unser Unternehmen',
      subtitle: 'Professionelle Mini-PC- und Industrie-Computing-Lösungen seit 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Gegründet 2021, ist Shenzhen Magic Chip Technology Co., Ltd. ein professioneller Hersteller von Mini-PCs und industriellen Computerausrüstungen mit Sitz in Shenzhen, China. Wir sind auf F&E, Herstellung und Vertrieb von Mini-PCs, Industriecomputern, Multi-Port-Industrierechnern, Industrie-Tablets und Laptops spezialisiert. Unsere Produkte finden breite Anwendung in intelligentem Einzelhandel, Digital Signage, finanziellem Self-Service, industrieller Automatisierung, Bildung, Medizin und IoT-Bereichen.'
    },
    stats: [
      { value: '4+', label: 'Jahre Erfahrung' },
      { value: '50-100', label: 'Teammitglieder' },
      { value: '$10M-25M', label: 'Jahresumsatz' },
      { value: '30+', label: 'Exportmärkte' }
    ],
    mission: {
      title: 'Unsere Mission',
      content: 'Leistungsstarke, zuverlässige Embedded-Computing-Lösungen bereitzustellen, die Unternehmen weltweit stärken. Wir engagieren uns für Innovation in Miniaturisierung, lüfterlosem Design und industrieller Stabilität.'
    },
    vision: {
      title: 'Unsere Vision',
      content: 'Ein führender globaler Anbieter von Mini-PCs und industriellen Computerausrüstungen werden, anerkannt für unsere flexiblen OEM/ODM-Dienstleistungen und Exzellenz in Embedded-Computing-Lösungen.'
    },
    values: [
      { title: 'Innovation', description: 'Wir innovieren kontinuierlich im Produktdesign mit Fokus auf Miniaturisierung und lüfterlose Kühlung.', icon: 'Lightbulb' },
      { title: 'Qualität', description: 'Jedes Produkt durchläuft strenge Tests, um industrietaugliche Zuverlässigkeit zu gewährleisten.', icon: 'Star' },
      { title: 'Flexibilität', description: 'Wir bieten flexible OEM/ODM-Anpassungsdienste, um spezifische Kundenanforderungen zu erfüllen.', icon: 'Handshake' },
      { title: 'Zuverlässigkeit', description: 'Wir bauen Vertrauen durch konstante Produktqualität und reaktionsschnellen Kundensupport auf.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Gründung', description: 'MagicChip wurde in Shenzhen gegründet, Fokus auf Mini-PC-F&E' },
      { year: '2022', title: 'Produkteinführung', description: 'Einführung der ersten Serie industrieller Mini-PCs und Tablets' },
      { year: '2023', title: 'Marktexpansion', description: 'Expansion auf europäische und nordamerikanische Märkte' },
      { year: '2024', title: 'OEM/ODM-Wachstum', description: 'Aufbau flexibler Anpassungsdienstleistungen' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  it: {
    hero: {
      title: 'La Nostra Azienda',
      subtitle: 'Soluzioni Professionali di Mini PC e Informatica Industriale dal 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fondata nel 2021, Shenzhen Magic Chip Technology Co., Ltd. è un produttore professionale di mini PC e attrezzature informatiche industriali con sede a Shenzhen, in Cina. Siamo specializzati in R&S, produzione e vendita di mini PC, computer industriali, host industriali multi-porta, tablet industriali e laptop. I nostri prodotti sono ampiamente utilizzati nella vendita al dettaglio intelligente, digital signage, self-service finanziario, automazione industriale, istruzione, medicina e campi IoT.'
    },
    stats: [
      { value: '4+', label: 'Anni di Esperienza' },
      { value: '50-100', label: 'Membri del Team' },
      { value: '$10M-25M', label: 'Fatturato Annuo' },
      { value: '30+', label: 'Mercati di Esportazione' }
    ],
    mission: {
      title: 'La Nostra Missione',
      content: 'Fornire soluzioni di embedded computing ad alte prestazioni e affidabili che diano potere alle aziende in tutto il mondo. Ci impegniamo nell\'innovazione in miniaturizzazione, design senza ventola e stabilità industriale.'
    },
    vision: {
      title: 'La Nostra Visione',
      content: 'Diventare un fornitore globale leader di mini PC e attrezzature informatiche industriali, riconosciuto per i nostri servizi OEM/ODM flessibili e l\'eccellenza nelle soluzioni di embedded computing.'
    },
    values: [
      { title: 'Innovazione', description: 'Innoviamo continuamente nella progettazione dei prodotti, concentrandoci sulla miniaturizzazione e sul raffreddamento senza ventola.', icon: 'Lightbulb' },
      { title: 'Qualità', description: 'Ogni prodotto viene sottoposto a test rigorosi per garantire affidabilità di grado industriale.', icon: 'Star' },
      { title: 'Flessibilità', description: 'Offriamo servizi di personalizzazione OEM/ODM flessibili per soddisfare requisiti specifici dei clienti.', icon: 'Handshake' },
      { title: 'Affidabilità', description: 'Costruiamo fiducia attraverso una qualità del prodotto costante e un supporto clienti reattivo.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Fondazione', description: 'MagicChip è stata fondata a Shenzhen, concentrandosi sulla R&S dei mini PC' },
      { year: '2022', title: 'Lancio Prodotto', description: 'Lancio della prima serie di mini PC industriali e tablet' },
      { year: '2023', title: 'Espansione Mercato', description: 'Espansione verso i mercati europei e nordamericani' },
      { year: '2024', title: 'Crescita OEM/ODM', description: 'Stabilimento di capacità di servizio di personalizzazione flessibile' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'Cina', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  },
  es: {
    hero: {
      title: 'Nuestra Empresa',
      subtitle: 'Soluciones Profesionales de Mini PC e Informática Industrial desde 2021'
    },
    intro: {
      title: 'Shenzhen Magic Chip Technology Co., Ltd.',
      content: 'Fundada en 2021, Shenzhen Magic Chip Technology Co., Ltd. es un fabricante profesional de mini PC y equipos informáticos industriales con sede en Shenzhen, China. Nos especializamos en I+D, fabricación y venta de mini PC, computadoras industriales, hosts industriales multi-puerto, tabletas industriales y laptops. Nuestros productos se utilizan ampliamente en venta minorista inteligente, señalización digital, autoservicio financiero, automatización industrial, educación, medicina y campos IoT.'
    },
    stats: [
      { value: '4+', label: 'Años de Experiencia' },
      { value: '50-100', label: 'Miembros del Equipo' },
      { value: '$10M-25M', label: 'Ingresos Anuales' },
      { value: '30+', label: 'Mercados de Exportación' }
    ],
    mission: {
      title: 'Nuestra Misión',
      content: 'Proporcionar soluciones de computación integrada de alto rendimiento y confiables que empoderen a las empresas de todo el mundo. Nos comprometemos con la innovación en miniaturización, diseño sin ventilador y estabilidad industrial.'
    },
    vision: {
      title: 'Nuestra Visión',
      content: 'Convertirnos en un proveedor global líder de mini PC y equipos informáticos industriales, reconocido por nuestros servicios OEM/ODM flexibles y la excelencia en soluciones de computación integrada.'
    },
    values: [
      { title: 'Innovación', description: 'Innovamos continuamente en el diseño de productos, centrándonos en la miniaturización y el enfriamiento sin ventilador.', icon: 'Lightbulb' },
      { title: 'Calidad', description: 'Cada producto se somete a pruebas rigurosas para garantizar confiabilidad de grado industrial.', icon: 'Star' },
      { title: 'Flexibilidad', description: 'Ofrecemos servicios de personalización OEM/ODM flexibles para satisfacer requisitos específicos del cliente.', icon: 'Handshake' },
      { title: 'Confiabilidad', description: 'Construimos confianza a través de una calidad de producto constante y soporte al cliente receptivo.', icon: 'Award' }
    ],
    timeline: [
      { year: '2021', title: 'Fundación', description: 'MagicChip fue fundada en Shenzhen, enfocándose en I+D de mini PC' },
      { year: '2022', title: 'Lanzamiento Producto', description: 'Lanzamiento de la primera serie de mini PC industriales y tabletas' },
      { year: '2023', title: 'Expansión Mercado', description: 'Expansión a mercados europeos y norteamericanos' },
      { year: '2024', title: 'Crecimiento OEM/ODM', description: 'Establecimiento de capacidades de servicio de personalización flexible' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: '5E, JinDa City, Central Road, Xinqiao Street, Baoan District, Shenzhen City, China' }
    ]
  }
};

export default function CompanyPage() {
  const { language, t } = useLanguage();
  const dataLanguage = (companyData as any)[language] ? language : 'en';
  const data = (companyData as any)[dataLanguage];
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 35%'] });
  const timelineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.32),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(245,158,11,0.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20 tech-pattern-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{data.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-blue-100 md:text-2xl">{data.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{data.hero.title}</p>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{data.intro?.title}</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">{data.intro?.content}</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200">
            {data.stats.map((stat: any, index: number) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="bg-[#f7faf9] p-6 md:p-8">
                <div className="text-3xl font-bold text-amber-600 md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eaf0ee] py-20 md:py-28">
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-blue-200/60" />
        <div className="absolute -right-10 top-2 h-48 w-48 rounded-full border border-amber-200/70" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {[{ ...data.mission, icon: Target }, { ...data.vision, icon: Eye }].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} initial={{ opacity: 0, x: index === 0 ? -32 : 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: index * 0.12 }} className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-8 shadow-sm backdrop-blur md:p-10">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-white"><Icon className="h-6 w-6" /></div>
                <h2 className="text-2xl font-bold md:text-3xl">{item.title}</h2>
                <p className="mt-5 leading-7 text-slate-600">{item.content}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#101827] py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold md:text-5xl">{t.company.valuesTitle}</motion.h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {data.values.map((value: any, index: number) => {
              const iconMap: Record<string, any> = { Lightbulb, Star, Handshake, Award };
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <motion.article key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group bg-[#172235] p-7 transition-colors hover:bg-[#1d2b43] md:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-8 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="relative overflow-hidden bg-[#0b1220] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">MagicChip</p>
            <h2 className="text-4xl font-bold md:text-6xl">{t.company.timelineTitle}</h2>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-1/2" />
            <motion.div style={{ scaleY: timelineProgress }} className="absolute bottom-0 left-5 top-0 w-px origin-top bg-gradient-to-b from-blue-400 via-amber-400 to-blue-500 md:left-1/2" />
            <div className="space-y-16 md:space-y-24">
              {data.timeline.map((item: any, index: number) => (
                <motion.article key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -44 : 44 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`relative grid pl-16 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? '' : 'md:[&>div]:col-start-2'}`}>
                  <div className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} relative`}>
                    <span className="text-5xl font-black tracking-tight text-white/10 md:text-7xl">{item.year}</span>
                    <div className="-mt-3 rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm md:-mt-4 md:p-8">
                      <h3 className="text-xl font-bold text-amber-300">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                    </div>
                  </div>
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ type: 'spring', stiffness: 220, damping: 16 }} className="absolute left-[13px] top-8 z-10 h-4 w-4 rounded-full bg-amber-400 ring-8 ring-[#0b1220] md:left-1/2 md:-translate-x-1/2" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="office-location" className="scroll-mt-16 bg-[#eef3f1] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-3xl font-bold md:text-5xl">{t.company.locationTitle}</motion.h2>
          {data.locations.map((location: any, index: number) => {
            const mapQuery = encodeURIComponent(location.address);
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }} className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 lg:grid-cols-[1.55fr_0.75fr]">
                <div className="relative min-h-[420px] bg-slate-200 lg:min-h-[520px]">
                  <iframe title={`${location.city} office map`} src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" allowFullScreen />
                </div>
                <div className="flex flex-col justify-between bg-[#101827] p-8 text-white md:p-10 lg:p-12">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/20"><MapPin className="h-6 w-6" /></div>
                    <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">{location.country}</p>
                    <h3 className="mt-3 text-4xl font-bold">{location.city}</h3>
                    <p className="mt-6 leading-7 text-slate-300">{location.address}</p>
                  </div>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition-transform hover:-translate-y-0.5">
                    Google Maps <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}