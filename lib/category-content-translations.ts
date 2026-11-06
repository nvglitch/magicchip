import type { Language } from '@/lib/i18n/config';

export type IndustrialCategoryCopy = {
  overview: string;
  qualifier: string;
  capabilities: { title: string; description: string }[];
  sceneAlt: string;
  scenarios: { title: string; description: string; products: string[] }[];
  applicationIntro: string;
  selectionIntro: string;
  series: Record<'A' | 'B' | 'C' | 'D' | 'E' | 'TPC', { title: string; description: string }>;
  currentModel: string;
  currentModels: string;
  availableModels: string;
  representativeProduct: string;
};

export const industrialCategoryCopy: Record<Language, IndustrialCategoryCopy> = {
  en: {
    overview: 'MagicChip Industrial Mini PCs bring processing, networking, display output and equipment-facing I/O into compact systems. The range includes fanless models and configurations with optional cooling. They can run control software beside a machine, collect data from serial devices, drive production dashboards or connect local equipment to an industrial edge network.',
    qualifier: 'Choose compact A Series systems, dual-LAN B Series, multi-COM C Series, multi-LAN D Series, configurable E Series or integrated-display TPC models according to the interfaces, compute platform and installation method your project requires.',
    capabilities: [
      { title: 'Run beside the equipment', description: 'Compact enclosures with model-specific cooling options support machine-side computing where space is limited. Check the selected configuration’s thermal and installation requirements.' },
      { title: 'Connect industrial devices', description: 'Serial ports, wired LAN, USB and display outputs connect controllers, sensors, cameras, peripherals and operator displays.' },
      { title: 'Match the system to the task', description: 'Select the series by serial-port count, network architecture, display needs, compute platform and panel-mount requirements.' },
    ],
    sceneAlt: 'Automated robotic production line with conveyors, sensors and safety systems',
    scenarios: [
      { title: 'Compact machine-side control', description: 'A and B Series systems place control software, display output, USB peripherals and essential serial connectivity close to the equipment.', products: ['MCIPCA1', 'MCIPCB12'] },
      { title: 'Serial equipment & data acquisition', description: 'Multi-COM C Series models connect several controllers, instruments, readers or legacy serial devices through one industrial computer.', products: ['MCIPC8-HDMI', 'MCIPC9'] },
      { title: 'Industrial edge & network gateways', description: 'Multi-LAN D Series and expandable box PCs support local data processing, segmented equipment networks, vision systems and edge gateway roles.', products: ['MCIPCD3', 'MCIPCB13'] },
      { title: 'Panel HMI & operator stations', description: 'TPC models combine the display and computer in one panel-mount system for production status, equipment operation and on-site interaction.', products: ['MCTPC-1506E', 'MCTPC-2105E'] },
    ],
    applicationIntro: 'The range covers five box-PC interface architectures plus integrated-display panel PCs. Start with the deployment task, then narrow the choice by I/O and compute platform.',
    selectionIntro: 'Select an IPC series by serial, network and display architecture, then open the available model page.',
    series: {
      A: { title: 'A Series', description: 'Compact industrial computers with one COM port or no COM port' },
      B: { title: 'B Series', description: 'Industrial computers with dual-LAN platforms and configurable serial I/O' },
      C: { title: 'C Series', description: 'Multi-COM industrial computers with dual LAN ports' },
      D: { title: 'D Series', description: 'Multi-LAN industrial computers with dual COM ports' },
      E: { title: 'E Series', description: 'Custom industrial computers with multi-LAN, serial and GPIO connectivity' },
      TPC: { title: 'TPC Series', description: 'Industrial panel PCs with integrated displays' },
    },
    currentModel: 'current model', currentModels: 'current models', availableModels: 'Available models', representativeProduct: 'representative product',
  },
  de: {
    overview: 'MagicChip Industrie-Mini-PCs vereinen Rechenleistung, Netzwerkanschlüsse, Bildausgänge und gerätenahe Schnittstellen in kompakten Systemen. Das Sortiment umfasst lüfterlose Modelle und Konfigurationen mit optionaler Kühlung. Sie können Steuerungssoftware direkt an der Maschine ausführen, Daten von seriellen Geräten erfassen, Produktionsanzeigen betreiben oder lokale Anlagen mit einem industriellen Edge-Netzwerk verbinden.',
    qualifier: 'Wählen Sie kompakte Systeme der A-Serie, die B-Serie mit zwei LAN-Anschlüssen, die C-Serie mit mehreren COM-Anschlüssen, die D-Serie mit mehreren LAN-Anschlüssen, die konfigurierbare E-Serie oder TPC-Modelle mit integriertem Display. Maßgeblich sind die benötigten Schnittstellen, die Rechnerplattform und die Montageart.',
    capabilities: [
      { title: 'Direkt an der Anlage einsetzen', description: 'Kompakte Gehäuse mit modellspezifischen Kühlungsoptionen ermöglichen den Einsatz nahe an der Maschine bei begrenztem Platz. Prüfen Sie die Wärmeabfuhr und Montageanforderungen der gewählten Konfiguration.' },
      { title: 'Industriegeräte verbinden', description: 'Serielle Anschlüsse, kabelgebundenes LAN, USB und Bildausgänge verbinden Steuerungen, Sensoren, Kameras, Peripheriegeräte und Bedienbildschirme.' },
      { title: 'Das System auf die Aufgabe abstimmen', description: 'Wählen Sie die Serie nach Anzahl der seriellen Anschlüsse, Netzwerkaufbau, Bildschirmanforderungen, Rechnerplattform und Bedarf an Schalttafelmontage.' },
    ],
    sceneAlt: 'Automatisierte Roboter-Fertigungslinie mit Förderanlagen, Sensoren und Sicherheitssystemen',
    scenarios: [
      { title: 'Kompakte Steuerung an der Maschine', description: 'Systeme der A- und B-Serie bringen Steuerungssoftware, Bildausgabe, USB-Peripherie und grundlegende serielle Verbindungen direkt an die Anlage.', products: ['MCIPCA1', 'MCIPCB12'] },
      { title: 'Serielle Geräte und Datenerfassung', description: 'Modelle der C-Serie mit mehreren COM-Anschlüssen verbinden mehrere Steuerungen, Messgeräte, Lesegeräte oder ältere serielle Geräte über einen Industriecomputer.', products: ['MCIPC8-HDMI', 'MCIPC9'] },
      { title: 'Industrielles Edge-Computing und Netzwerk-Gateways', description: 'Die D-Serie mit mehreren LAN-Anschlüssen und erweiterbare Box-PCs eignen sich für lokale Datenverarbeitung, getrennte Anlagennetze, Bildverarbeitungssysteme und Edge-Gateways.', products: ['MCIPCD3', 'MCIPCB13'] },
      { title: 'Panel-HMI und Bedienplätze', description: 'TPC-Modelle kombinieren Display und Computer in einem System zur Schalttafelmontage, um Produktionsdaten anzuzeigen, Anlagen zu bedienen und vor Ort zu interagieren.', products: ['MCTPC-1506E', 'MCTPC-2105E'] },
    ],
    applicationIntro: 'Das Sortiment umfasst fünf Schnittstellenarchitekturen für Box-PCs sowie Panel-PCs mit integriertem Display. Beginnen Sie mit der Einsatzaufgabe und grenzen Sie die Auswahl anschließend nach Anschlüssen und Rechnerplattform ein.',
    selectionIntro: 'Wählen Sie eine IPC-Serie nach seriellen Anschlüssen, Netzwerk- und Bildausgabeaufbau. Öffnen Sie anschließend die Seite des verfügbaren Modells.',
    series: {
      A: { title: 'A-Serie', description: 'Kompakte Industriecomputer mit einem COM-Anschluss oder ohne COM-Anschluss' },
      B: { title: 'B-Serie', description: 'Industriecomputer mit zwei LAN-Anschlüssen und konfigurierbaren seriellen Schnittstellen' },
      C: { title: 'C-Serie', description: 'Industriecomputer mit mehreren COM-Anschlüssen und zwei LAN-Anschlüssen' },
      D: { title: 'D-Serie', description: 'Industriecomputer mit mehreren LAN-Anschlüssen und zwei COM-Anschlüssen' },
      E: { title: 'E-Serie', description: 'Anpassbare Industriecomputer mit mehreren LAN-Anschlüssen, seriellen Schnittstellen und GPIO' },
      TPC: { title: 'TPC-Serie', description: 'Industrie-Panel-PCs mit integriertem Display' },
    },
    currentModel: 'aktuelles Modell', currentModels: 'aktuelle Modelle', availableModels: 'Verfügbare Modelle', representativeProduct: 'Beispielmodell',
  },
  fr: {
    overview: 'Les mini PC industriels MagicChip réunissent calcul, réseau, sorties vidéo et interfaces pour équipements dans des systèmes compacts. La gamme comprend des modèles sans ventilateur et des configurations avec refroidissement en option. Ils peuvent exécuter un logiciel de commande au plus près d’une machine, collecter les données d’appareils série, afficher des tableaux de production ou relier des équipements locaux à un réseau industriel en périphérie.',
    qualifier: 'Choisissez les systèmes compacts de série A, la série B à double LAN, la série C à plusieurs ports COM, la série D à plusieurs ports LAN, la série E configurable ou les modèles TPC à écran intégré selon les interfaces, la plateforme de calcul et le mode de montage nécessaires à votre projet.',
    capabilities: [
      { title: 'Installer au plus près des équipements', description: 'Des boîtiers compacts avec des options de refroidissement propres au modèle permettent le calcul près des machines lorsque l’espace est limité. Vérifiez les conditions thermiques et de montage de la configuration choisie.' },
      { title: 'Relier les appareils industriels', description: 'Les ports série, le réseau filaire, l’USB et les sorties vidéo relient automates, capteurs, caméras, périphériques et écrans opérateur.' },
      { title: 'Adapter le système à la tâche', description: 'Choisissez la série selon le nombre de ports série, l’architecture réseau, les besoins d’affichage, la plateforme de calcul et le montage en panneau.' },
    ],
    sceneAlt: 'Ligne de production robotisée automatisée avec convoyeurs, capteurs et systèmes de sécurité',
    scenarios: [
      { title: 'Commande compacte près des machines', description: 'Les séries A et B rapprochent le logiciel de commande, les sorties vidéo, les périphériques USB et les connexions série essentielles des équipements.', products: ['MCIPCA1', 'MCIPCB12'] },
      { title: 'Appareils série et acquisition de données', description: 'Les modèles de série C à plusieurs ports COM relient plusieurs automates, instruments, lecteurs ou anciens appareils série à un seul ordinateur industriel.', products: ['MCIPC8-HDMI', 'MCIPC9'] },
      { title: 'Calcul industriel en périphérie et passerelles réseau', description: 'La série D à plusieurs ports LAN et les PC en boîtier extensibles conviennent au traitement local des données, aux réseaux d’équipements segmentés, à la vision et aux passerelles en périphérie.', products: ['MCIPCD3', 'MCIPCB13'] },
      { title: 'IHM en panneau et postes opérateur', description: 'Les modèles TPC combinent écran et ordinateur dans un système à monter en panneau pour afficher l’état de production, piloter les équipements et interagir sur site.', products: ['MCTPC-1506E', 'MCTPC-2105E'] },
    ],
    applicationIntro: 'La gamme couvre cinq architectures d’interfaces de PC en boîtier ainsi que des PC à écran intégré. Commencez par l’usage prévu, puis affinez le choix selon les interfaces et la plateforme de calcul.',
    selectionIntro: 'Choisissez une série IPC selon les interfaces série, le réseau et l’affichage, puis ouvrez la page du modèle disponible.',
    series: {
      A: { title: 'Série A', description: 'Ordinateurs industriels compacts avec un port COM ou sans port COM' },
      B: { title: 'Série B', description: 'Ordinateurs industriels à double LAN et interfaces série configurables' },
      C: { title: 'Série C', description: 'Ordinateurs industriels à plusieurs ports COM et double LAN' },
      D: { title: 'Série D', description: 'Ordinateurs industriels à plusieurs ports LAN et deux ports COM' },
      E: { title: 'Série E', description: 'Ordinateurs industriels personnalisables à plusieurs ports LAN, interfaces série et GPIO' },
      TPC: { title: 'Série TPC', description: 'PC industriels en panneau avec écran intégré' },
    },
    currentModel: 'modèle actuel', currentModels: 'modèles actuels', availableModels: 'Modèles disponibles', representativeProduct: 'modèle représentatif',
  },
  it: {
    overview: 'I mini PC industriali MagicChip riuniscono elaborazione, rete, uscite video e interfacce per le apparecchiature in sistemi compatti. La gamma comprende modelli senza ventole e configurazioni con raffreddamento opzionale. Possono eseguire software di controllo accanto a una macchina, raccogliere dati da dispositivi seriali, gestire pannelli informativi di produzione o collegare le apparecchiature locali a una rete edge industriale.',
    qualifier: 'Scegli i sistemi compatti della serie A, la serie B con doppia LAN, la serie C con più porte COM, la serie D con più porte LAN, la serie E configurabile o i modelli TPC con display integrato in base alle interfacce, alla piattaforma di calcolo e al metodo di montaggio richiesti dal progetto.',
    capabilities: [
      { title: 'Installazione vicino alle apparecchiature', description: 'Gli involucri compatti con opzioni di raffreddamento specifiche per modello permettono l’elaborazione vicino alle macchine quando lo spazio è limitato. Verifica i requisiti termici e di montaggio della configurazione scelta.' },
      { title: 'Collegare i dispositivi industriali', description: 'Porte seriali, LAN cablata, USB e uscite video collegano controllori, sensori, telecamere, periferiche e display operatore.' },
      { title: 'Adattare il sistema al compito', description: 'Scegli la serie in base al numero di porte seriali, all’architettura di rete, ai display, alla piattaforma di calcolo e al montaggio a pannello.' },
    ],
    sceneAlt: 'Linea di produzione robotizzata automatica con trasportatori, sensori e sistemi di sicurezza',
    scenarios: [
      { title: 'Controllo compatto a bordo macchina', description: 'I sistemi delle serie A e B portano software di controllo, uscite video, periferiche USB e connessioni seriali essenziali vicino alle apparecchiature.', products: ['MCIPCA1', 'MCIPCB12'] },
      { title: 'Dispositivi seriali e acquisizione dati', description: 'I modelli della serie C con più porte COM collegano diversi controllori, strumenti, lettori o dispositivi seriali meno recenti a un unico computer industriale.', products: ['MCIPC8-HDMI', 'MCIPC9'] },
      { title: 'Edge industriale e gateway di rete', description: 'La serie D con più porte LAN e i PC box espandibili si prestano a elaborazione locale, reti di apparecchiature segmentate, sistemi di visione e gateway edge.', products: ['MCIPCD3', 'MCIPCB13'] },
      { title: 'HMI a pannello e postazioni operatore', description: 'I modelli TPC combinano display e computer in un sistema da montare a pannello per visualizzare lo stato della produzione, controllare le apparecchiature e interagire sul posto.', products: ['MCTPC-1506E', 'MCTPC-2105E'] },
    ],
    applicationIntro: 'La gamma comprende cinque architetture di interfaccia per PC box e PC a pannello con display integrato. Parti dal compito da svolgere, poi restringi la scelta in base alle interfacce e alla piattaforma di calcolo.',
    selectionIntro: 'Scegli una serie IPC in base a porte seriali, rete e uscite video, poi apri la pagina del modello disponibile.',
    series: {
      A: { title: 'Serie A', description: 'Computer industriali compatti con una porta COM o senza porte COM' },
      B: { title: 'Serie B', description: 'Computer industriali con doppia LAN e interfacce seriali configurabili' },
      C: { title: 'Serie C', description: 'Computer industriali con più porte COM e doppia LAN' },
      D: { title: 'Serie D', description: 'Computer industriali con più porte LAN e due porte COM' },
      E: { title: 'Serie E', description: 'Computer industriali personalizzabili con più porte LAN, interfacce seriali e GPIO' },
      TPC: { title: 'Serie TPC', description: 'PC industriali a pannello con display integrato' },
    },
    currentModel: 'modello attuale', currentModels: 'modelli attuali', availableModels: 'Modelli disponibili', representativeProduct: 'modello rappresentativo',
  },
  es: {
    overview: 'Los mini PCs industriales MagicChip reúnen procesamiento, red, salidas de vídeo e interfaces para equipos en sistemas compactos. La gama incluye modelos sin ventilador y configuraciones con refrigeración opcional. Pueden ejecutar software de control junto a una máquina, recoger datos de dispositivos serie, gestionar paneles de producción o conectar equipos locales a una red edge industrial.',
    qualifier: 'Elige sistemas compactos de la serie A, la serie B con doble LAN, la serie C con varios puertos COM, la serie D con varios puertos LAN, la serie E configurable o modelos TPC con pantalla integrada según las interfaces, la plataforma de procesamiento y el montaje que necesite el proyecto.',
    capabilities: [
      { title: 'Instalar junto a los equipos', description: 'Las cajas compactas con opciones de refrigeración propias de cada modelo permiten procesar datos junto a la máquina cuando hay poco espacio. Comprueba los requisitos térmicos y de montaje de la configuración elegida.' },
      { title: 'Conectar dispositivos industriales', description: 'Los puertos serie, la LAN por cable, el USB y las salidas de vídeo conectan controladores, sensores, cámaras, periféricos y pantallas de operador.' },
      { title: 'Adaptar el sistema a la tarea', description: 'Elige la serie por el número de puertos serie, la arquitectura de red, las pantallas necesarias, la plataforma de procesamiento y el montaje en panel.' },
    ],
    sceneAlt: 'Línea de producción robotizada automática con transportadores, sensores y sistemas de seguridad',
    scenarios: [
      { title: 'Control compacto junto a la máquina', description: 'Los sistemas de las series A y B acercan el software de control, las salidas de vídeo, los periféricos USB y las conexiones serie esenciales a los equipos.', products: ['MCIPCA1', 'MCIPCB12'] },
      { title: 'Equipos serie y adquisición de datos', description: 'Los modelos de la serie C con varios puertos COM conectan distintos controladores, instrumentos, lectores o equipos serie antiguos a un único ordenador industrial.', products: ['MCIPC8-HDMI', 'MCIPC9'] },
      { title: 'Edge industrial y pasarelas de red', description: 'La serie D con varios puertos LAN y los PCs de caja ampliables se adaptan al procesamiento local, las redes de equipos segmentadas, los sistemas de visión y las pasarelas edge.', products: ['MCIPCD3', 'MCIPCB13'] },
      { title: 'HMI en panel y puestos de operador', description: 'Los modelos TPC combinan pantalla y ordenador en un sistema de montaje en panel para mostrar el estado de producción, controlar equipos e interactuar en las instalaciones.', products: ['MCTPC-1506E', 'MCTPC-2105E'] },
    ],
    applicationIntro: 'La gama abarca cinco arquitecturas de interfaces para PCs de caja y PCs de panel con pantalla integrada. Empieza por la tarea de la instalación y concreta la selección por interfaces y plataforma de procesamiento.',
    selectionIntro: 'Elige una serie IPC según sus puertos serie, red y salidas de vídeo; después, abre la página del modelo disponible.',
    series: {
      A: { title: 'Serie A', description: 'Ordenadores industriales compactos con un puerto COM o sin puertos COM' },
      B: { title: 'Serie B', description: 'Ordenadores industriales con doble LAN e interfaces serie configurables' },
      C: { title: 'Serie C', description: 'Ordenadores industriales con varios puertos COM y doble LAN' },
      D: { title: 'Serie D', description: 'Ordenadores industriales con varios puertos LAN y dos puertos COM' },
      E: { title: 'Serie E', description: 'Ordenadores industriales personalizables con varios puertos LAN, interfaces serie y GPIO' },
      TPC: { title: 'Serie TPC', description: 'PCs industriales de panel con pantalla integrada' },
    },
    currentModel: 'modelo actual', currentModels: 'modelos actuales', availableModels: 'Modelos disponibles', representativeProduct: 'modelo representativo',
  },
};
