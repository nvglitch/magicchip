'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Factory, MonitorUp, Router, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const scenarios = [
  { id: 'industrialAutomation', icon: Factory, image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg', products: [
    { name: 'MCIPCB13', href: '/products/industrial-mini-pc/mcipcb13' },
    { name: 'MCIPCB12', href: '/products/industrial-mini-pc/mcipcb12' },
  ] },
  { id: 'edgeAi', icon: BrainCircuit, image: '/assets/products/ai/mcaipc2/hero.png', products: [
    { name: 'MCAIPC2', href: '/products/ai-mini-pc/mcai2' },
    { name: 'MCAIPC1', href: '/products/ai-mini-pc/mcai1' },
  ] },
  { id: 'networkSecurity', icon: ShieldCheck, image: '/assets/products/firewall/mcr20/images/1.jpg', products: [
    { name: 'MCR20', href: '/products/firewall-mini-pc/mcr20' },
    { name: 'MCSRP6', href: '/products/firewall-mini-pc/mcsrp6' },
    { name: 'MCIPCD3', href: '/products/industrial-mini-pc/mcipcd3' },
  ] },
  { id: 'digitalSignage', icon: MonitorUp, image: '/assets/products/industrial/b-series/mcipcb12/images/1.jpg', products: [
    { name: 'MCIPCB12', href: '/products/industrial-mini-pc/mcipcb12' },
    { name: 'MC15UH', href: '/products/commercial-mini-pc/mc15uh' },
  ] },
  { id: 'businessEducation', icon: BriefcaseBusiness, image: '/assets/products/commercial/mc15uh/images/1.jpg', products: [
    { name: 'MC15UH', href: '/products/commercial-mini-pc/mc15uh' },
    { name: 'MCTAR7', href: '/products/commercial-mini-pc/mctar7' },
  ] },
  { id: 'iotGateway', icon: Router, image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg', products: [
    { name: 'MCIPCD3', href: '/products/industrial-mini-pc/mcipcd3' },
    { name: 'MCSRP6', href: '/products/firewall-mini-pc/mcsrp6' },
    { name: 'MCR20', href: '/products/firewall-mini-pc/mcr20' },
  ] },
] as const;

const copy = {
  en: {
    eyebrow: 'APPLICATION-BASED SELECTION', title: 'Deployment Scenarios', subtitle: 'Find suitable MagicChip systems by workload, connectivity, display, and operating-environment requirements.',
    recommended: 'Recommended SKUs', note: 'Recommendations are based on the published hardware capabilities of our current product lineup.',
    ctaTitle: 'Need help matching hardware to your project?', ctaText: 'Share your I/O, performance, networking, and deployment requirements with our team.', ctaButton: 'Discuss Your Project',
    items: {
      industrialAutomation: { title: 'Industrial Automation', description: 'Fanless systems with serial connectivity, rich I/O, and platform options for machine control and industrial edge deployments.' },
      edgeAi: { title: 'Edge AI & Local Compute', description: 'High-performance AMD platforms for local AI workloads, professional computing, large memory, and multi-display workflows.' },
      networkSecurity: { title: 'Network Security & SD-WAN', description: 'Multi-port 2.5GbE, 10GbE, routing, VPN, firewall, and network-edge appliance configurations.' },
      digitalSignage: { title: 'Digital Signage & Multi-Display', description: 'Compact systems with multiple display outputs for information displays, control rooms, and visual communication.' },
      businessEducation: { title: 'Business & Education', description: 'Compact commercial systems for office productivity, classrooms, meeting spaces, and everyday desktop deployment.' },
      iotGateway: { title: 'IoT & Edge Gateways', description: 'Flexible network and expansion options for connecting local devices, upstream networks, and edge services.' },
    },
  },
  fr: {
    eyebrow: 'SÉLECTION PAR APPLICATION', title: 'Scénarios de déploiement', subtitle: 'Trouvez les systèmes MagicChip adaptés selon la charge, la connectivité, l’affichage et l’environnement.',
    recommended: 'SKU recommandés', note: 'Les recommandations reposent sur les capacités matérielles publiées de notre gamme actuelle.',
    ctaTitle: 'Besoin d’aide pour choisir le matériel ?', ctaText: 'Partagez vos besoins en E/S, performances, réseau et déploiement avec notre équipe.', ctaButton: 'Discuter du projet',
    items: {
      industrialAutomation: { title: 'Automatisation industrielle', description: 'Systèmes sans ventilateur avec ports série, E/S riches et plateformes flexibles pour le contrôle de machines.' },
      edgeAi: { title: 'IA en périphérie et calcul local', description: 'Plateformes AMD hautes performances pour l’IA locale, la mémoire importante et les flux multi-écrans.' },
      networkSecurity: { title: 'Sécurité réseau et SD-WAN', description: 'Configurations multiports 2,5/10 GbE pour routage, VPN, pare-feu et périphérie réseau.' },
      digitalSignage: { title: 'Affichage dynamique et multi-écrans', description: 'Systèmes compacts à sorties multiples pour affichage d’information et communication visuelle.' },
      businessEducation: { title: 'Entreprise et éducation', description: 'Systèmes compacts pour bureaux, salles de classe, réunions et postes de travail.' },
      iotGateway: { title: 'IoT et passerelles Edge', description: 'Options réseau et d’extension pour relier appareils locaux, réseaux amont et services Edge.' },
    },
  },
  de: {
    eyebrow: 'ANWENDUNGSBASIERTE AUSWAHL', title: 'Einsatzszenarien', subtitle: 'Finden Sie passende MagicChip-Systeme nach Rechenlast, Konnektivität, Anzeige und Umgebung.',
    recommended: 'Empfohlene SKUs', note: 'Die Empfehlungen basieren auf den veröffentlichten Hardwarefähigkeiten des aktuellen Portfolios.',
    ctaTitle: 'Benötigen Sie Hilfe bei der Hardwareauswahl?', ctaText: 'Teilen Sie uns Ihre Anforderungen an I/O, Leistung, Netzwerk und Einsatz mit.', ctaButton: 'Projekt besprechen',
    items: {
      industrialAutomation: { title: 'Industrieautomation', description: 'Lüfterlose Systeme mit seriellen Anschlüssen, umfangreichen I/O und flexiblen Plattformen für Maschinensteuerung.' },
      edgeAi: { title: 'Edge AI und lokale Verarbeitung', description: 'Leistungsstarke AMD-Plattformen für lokale KI, große Speicheranforderungen und Multi-Display-Workflows.' },
      networkSecurity: { title: 'Netzwerksicherheit und SD-WAN', description: 'Multi-Port-2,5/10-GbE-Konfigurationen für Routing, VPN, Firewall und Network Edge.' },
      digitalSignage: { title: 'Digital Signage und Multi-Display', description: 'Kompakte Systeme mit mehreren Displayausgängen für Informationsanzeigen und visuelle Kommunikation.' },
      businessEducation: { title: 'Business und Bildung', description: 'Kompakte Systeme für Büro, Unterricht, Besprechungsräume und tägliche Desktop-Nutzung.' },
      iotGateway: { title: 'IoT- und Edge-Gateways', description: 'Flexible Netzwerk- und Erweiterungsoptionen für lokale Geräte, Upstream-Netze und Edge-Dienste.' },
    },
  },
  it: {
    eyebrow: 'SELEZIONE PER APPLICAZIONE', title: 'Scenari di utilizzo', subtitle: 'Trova i sistemi MagicChip adatti in base a carico, connettività, display e ambiente operativo.',
    recommended: 'SKU consigliati', note: 'I consigli si basano sulle capacità hardware pubblicate dell’attuale gamma prodotti.',
    ctaTitle: 'Serve aiuto per scegliere l’hardware?', ctaText: 'Condividi con il nostro team i requisiti di I/O, prestazioni, rete e installazione.', ctaButton: 'Parla del progetto',
    items: {
      industrialAutomation: { title: 'Automazione industriale', description: 'Sistemi fanless con porte seriali, I/O completi e piattaforme flessibili per controllo macchina.' },
      edgeAi: { title: 'Edge AI e calcolo locale', description: 'Piattaforme AMD ad alte prestazioni per AI locale, memoria capiente e flussi multi-display.' },
      networkSecurity: { title: 'Sicurezza di rete e SD-WAN', description: 'Configurazioni multiporta 2,5/10 GbE per routing, VPN, firewall e network edge.' },
      digitalSignage: { title: 'Digital signage e multi-display', description: 'Sistemi compatti con uscite video multiple per informazione e comunicazione visiva.' },
      businessEducation: { title: 'Business e istruzione', description: 'Sistemi commerciali compatti per uffici, aule, sale riunioni e desktop quotidiani.' },
      iotGateway: { title: 'IoT e gateway Edge', description: 'Opzioni di rete ed espansione per collegare dispositivi locali, reti upstream e servizi Edge.' },
    },
  },
  es: {
    eyebrow: 'SELECCIÓN POR APLICACIÓN', title: 'Escenarios de implementación', subtitle: 'Encuentre sistemas MagicChip según carga, conectividad, visualización y entorno operativo.',
    recommended: 'SKU recomendados', note: 'Las recomendaciones se basan en las capacidades de hardware publicadas de la gama actual.',
    ctaTitle: '¿Necesita ayuda para elegir el hardware?', ctaText: 'Comparta con nuestro equipo sus requisitos de E/S, rendimiento, red e implementación.', ctaButton: 'Hablar del proyecto',
    items: {
      industrialAutomation: { title: 'Automatización industrial', description: 'Sistemas sin ventilador con puertos serie, amplia E/S y plataformas flexibles para control de máquinas.' },
      edgeAi: { title: 'IA en el borde y cómputo local', description: 'Plataformas AMD de alto rendimiento para IA local, gran memoria y flujos multipantalla.' },
      networkSecurity: { title: 'Seguridad de red y SD-WAN', description: 'Configuraciones multipuerto 2,5/10 GbE para routing, VPN, firewall y edge de red.' },
      digitalSignage: { title: 'Señalización digital y multipantalla', description: 'Sistemas compactos con múltiples salidas para información y comunicación visual.' },
      businessEducation: { title: 'Empresa y educación', description: 'Sistemas compactos para oficinas, aulas, salas de reunión y uso diario de escritorio.' },
      iotGateway: { title: 'IoT y gateways Edge', description: 'Opciones flexibles de red y expansión para dispositivos locales, redes ascendentes y servicios Edge.' },
    },
  },
};

export default function ScenariosPage() {
  const { language } = useLanguage();
  const text = copy[language] || copy.en;

  return (
    <main className="min-h-screen bg-[#f3f7f5] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(245,158,11,0.14),transparent_28%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 tech-pattern-overlay" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
            <p className="text-sm font-bold tracking-normal text-blue-300">{text.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">{text.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">{text.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {scenarios.map((scenario) => {
              const item = text.items[scenario.id];
              const Icon = scenario.icon;
              return (
                <article id={scenario.id} key={scenario.id} className="group scroll-mt-24 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image src={scenario.image} alt={`${item.title} recommended Mini PC`} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 420px" className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="border-t border-slate-200/80 p-6">
                    <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
                    <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">{item.description}</p>
                    <div className="mt-6 border-t border-slate-200 pt-5">
                      <p className="text-xs font-bold uppercase tracking-normal text-slate-500">{text.recommended}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {scenario.products.map((product) => (
                          <Link key={product.href} href={product.href} className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-400 hover:bg-blue-100">
                            {product.name}<ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-500">{text.note}</p>
        </div>
      </section>

      <section className="bg-[#eaf0ee] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#101827] p-10 text-center text-white shadow-xl shadow-slate-900/10 md:p-14">
            <h2 className="text-3xl font-bold md:text-4xl">{text.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{text.ctaText}</p>
            <Link href="/contact" className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500">
              {text.ctaButton}<ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
