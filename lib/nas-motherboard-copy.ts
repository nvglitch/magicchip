import type { Language } from '@/lib/i18n/config';

type MotherboardCopy = {
  title: string;
  label: string;
  description: string;
  selection: string;
  featureHeading: string;
  galleryDescription: string;
  specifications: string;
  features: { icon: 'HardDrive' | 'Network' | 'Layers'; title: string; description: string }[];
  keywords: string[];
};

export const nasMotherboardCopy: Record<Language, MotherboardCopy> = {
  en: {
    title: 'NAS Motherboards', label: 'NAS Motherboard',
    description: 'Motherboards for custom storage systems, with model-specific SATA, NVMe, network and expansion options.',
    selection: 'Choose Desktop PC, NAS PC or NAS Motherboards, then compare CPU, memory, storage, networking and installation requirements.',
    featureHeading: 'Build a storage system around the motherboard',
    galleryDescription: 'Top and bottom views show the board layout, connectors and component placement.',
    specifications: 'Motherboard specifications',
    features: [
      { icon: 'HardDrive', title: 'Plan the storage connections', description: 'Compare SATA, NVMe, PCIe links and shared resources for the selected board before choosing drives.' },
      { icon: 'Network', title: 'Match the network architecture', description: 'Choose model-specific 2.5GbE or 10GbE interfaces. Dedicated IPMI management is available on NASD2700.' },
      { icon: 'Layers', title: 'Select the complete system', description: 'These products are motherboards. Choose compatible memory, ATX power, cooling, enclosure and drives separately.' },
    ],
    keywords: ['nas motherboard', 'storage mainboard', 'mini itx motherboard', 'bare board', 'system integration'],
  },
  de: {
    title: 'NAS-Mainboards', label: 'NAS-Mainboard',
    description: 'Mainboards für individuelle Speichersysteme mit modellspezifischen SATA-, NVMe-, Netzwerk- und Erweiterungsoptionen.',
    selection: 'Wählen Sie Desktop-PC, NAS-PC oder NAS-Mainboards und vergleichen Sie CPU, Speicher, Netzwerk und Einbauanforderungen.',
    featureHeading: 'Ein Speichersystem um das Mainboard aufbauen',
    galleryDescription: 'Ober- und Unterseite zeigen Platinenlayout, Anschlüsse und Bauteilpositionen.',
    specifications: 'Mainboard-Spezifikationen',
    features: [
      { icon: 'HardDrive', title: 'Laufwerksanschlüsse planen', description: 'Vergleichen Sie SATA, NVMe, PCIe-Verbindungen und gemeinsam genutzte Ressourcen des gewählten Mainboards.' },
      { icon: 'Network', title: 'Netzwerkarchitektur abstimmen', description: 'Wählen Sie modellspezifische 2,5GbE- oder 10GbE-Anschlüsse. NASD2700 bietet dediziertes IPMI-Management.' },
      { icon: 'Layers', title: 'Das Gesamtsystem auswählen', description: 'Diese Produkte sind Mainboards. Kompatibler Speicher, ATX-Netzteil, Kühlung, Gehäuse und Laufwerke werden separat gewählt.' },
    ],
    keywords: ['nas mainboard', 'nas hauptplatine', 'speicher mainboard', 'mini itx mainboard', 'systemintegration'],
  },
  fr: {
    title: 'Cartes mères NAS', label: 'Carte mère NAS',
    description: 'Cartes mères pour des systèmes de stockage personnalisés, avec SATA, NVMe, réseau et extensions selon le modèle.',
    selection: 'Choisissez un PC de bureau, un PC NAS ou une carte mère NAS, puis comparez CPU, mémoire, stockage, réseau et intégration.',
    featureHeading: 'Construire un système de stockage autour de la carte mère',
    galleryDescription: 'Les vues de dessus et de dessous montrent la disposition de la carte, les connecteurs et les composants.',
    specifications: 'Caractéristiques de la carte mère',
    features: [
      { icon: 'HardDrive', title: 'Prévoir les connexions de stockage', description: 'Comparez SATA, NVMe, liaisons PCIe et ressources partagées de la carte choisie avant de sélectionner les disques.' },
      { icon: 'Network', title: 'Adapter l’architecture réseau', description: 'Choisissez les interfaces 2,5GbE ou 10GbE selon le modèle. NASD2700 dispose d’une gestion IPMI dédiée.' },
      { icon: 'Layers', title: 'Choisir le système complet', description: 'Ces produits sont des cartes mères. Mémoire, alimentation ATX, refroidissement, boîtier et disques compatibles sont à choisir séparément.' },
    ],
    keywords: ['carte mère nas', 'cartes mères nas', 'carte mere stockage', 'carte mere mini itx', 'intégration système'],
  },
  it: {
    title: 'Schede madri NAS', label: 'Scheda madre NAS',
    description: 'Schede madri per sistemi di storage personalizzati, con SATA, NVMe, rete ed espansioni specifici per modello.',
    selection: 'Scegli PC desktop, PC NAS o schede madri NAS e confronta CPU, memoria, storage, rete e requisiti di installazione.',
    featureHeading: 'Costruisci un sistema di storage attorno alla scheda madre',
    galleryDescription: 'Le viste superiore e inferiore mostrano il layout della scheda, i connettori e i componenti.',
    specifications: 'Specifiche della scheda madre',
    features: [
      { icon: 'HardDrive', title: 'Pianifica le connessioni di storage', description: 'Confronta SATA, NVMe, collegamenti PCIe e risorse condivise della scheda scelta prima di selezionare le unità.' },
      { icon: 'Network', title: 'Adatta l’architettura di rete', description: 'Scegli interfacce 2,5GbE o 10GbE secondo il modello. NASD2700 offre gestione IPMI dedicata.' },
      { icon: 'Layers', title: 'Scegli il sistema completo', description: 'Questi prodotti sono schede madri. Memoria, alimentatore ATX, raffreddamento, chassis e unità compatibili vanno scelti separatamente.' },
    ],
    keywords: ['scheda madre nas', 'schede madri nas', 'scheda madre storage', 'scheda madre mini itx', 'integrazione sistema'],
  },
  es: {
    title: 'Placas base NAS', label: 'Placa base NAS',
    description: 'Placas base para sistemas de almacenamiento personalizados, con SATA, NVMe, red y ampliaciones según el modelo.',
    selection: 'Elija PC de escritorio, PC NAS o placas base NAS y compare CPU, memoria, almacenamiento, red y requisitos de instalación.',
    featureHeading: 'Construya un sistema de almacenamiento alrededor de la placa base',
    galleryDescription: 'Las vistas superior e inferior muestran la distribución de la placa, los conectores y los componentes.',
    specifications: 'Especificaciones de la placa base',
    features: [
      { icon: 'HardDrive', title: 'Planificar las conexiones de almacenamiento', description: 'Compare SATA, NVMe, enlaces PCIe y recursos compartidos de la placa elegida antes de seleccionar las unidades.' },
      { icon: 'Network', title: 'Adaptar la arquitectura de red', description: 'Elija interfaces 2,5GbE o 10GbE según el modelo. NASD2700 dispone de gestión IPMI dedicada.' },
      { icon: 'Layers', title: 'Elegir el sistema completo', description: 'Estos productos son placas base. Memoria, fuente ATX, refrigeración, chasis y unidades compatibles se eligen por separado.' },
    ],
    keywords: ['placa base nas', 'placas base nas', 'placa madre almacenamiento', 'placa base mini itx', 'integración sistema'],
  },
};
