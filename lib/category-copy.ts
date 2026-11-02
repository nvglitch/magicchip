import type { Language } from '@/lib/i18n/config';

type AiCopy = {
  overview: string; qualifier: string; sceneAlt: string;
  capabilities: { title: string; description: string }[];
  scenarios: { title: string; description: string; products: string[] }[];
  products: Record<'mcai1' | 'mcai2' | 'mcaipc3', string>;
};

export const aiCategoryCopy: Record<Language, AiCopy> = {
  en: {
    overview: 'AI Mini PCs bring high-performance AMD and Intel computing, model-specific memory options, fast local storage, and multi-display output into a compact workstation format for local AI and demanding professional workloads.',
    qualifier: 'AI performance depends on the selected processor, memory configuration, software stack, and workload.',
    sceneAlt: 'Abstract blue and cyan lightscape representing AI computing',
    capabilities: [
      { title: 'Local AI acceleration', description: 'Choose AMD Ryzen / Ryzen AI or Intel Core Ultra platforms. Graphics and AI acceleration capabilities depend on the selected model and configuration.' },
      { title: 'Large memory configurations', description: 'Model-specific onboard LPDDR5 / LPDDR5x or DDR5 SO-DIMM options support different workloads. MCAIPC2 memory capacity and speed depend on the mainboard series.' },
      { title: 'Fast data and display connections', description: 'Multi-display output, high-speed networking, and multiple NVMe options support demanding local workflows.' },
    ],
    scenarios: [
      { title: 'Local AI development and inference', description: 'Run supported models locally where data proximity, responsiveness, or offline operation matters.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Computer vision development', description: 'Use high-performance computing and external camera connectivity to prototype visual-analysis workflows.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Professional multi-display work', description: 'Quad-display support suits engineering, visualization, media, and information-dense workspaces.', products: ['MCAIPC2', 'MCAIPC1'] },
    ],
    products: { mcai1: 'AMD Ryzen AI Max+ 395 flagship mini PC with quad-display support', mcai2: 'Three mainboard series with configurable memory, networking, and chassis', mcaipc3: 'Compact AI PC with four AMD and Intel configurations' },
  },
  de: {
    overview: 'KI-Mini-PCs vereinen leistungsstarke AMD- und Intel-Prozessoren, modellspezifische Speicheroptionen, schnelle lokale Datenspeicher und mehrere Bildschirmausgänge in einem kompakten Arbeitsplatzrechner. Sie eignen sich für lokale KI-Anwendungen und anspruchsvolle professionelle Aufgaben.',
    qualifier: 'Die KI-Leistung hängt vom gewählten Prozessor, der Speicherkonfiguration, der Softwareumgebung und der jeweiligen Anwendung ab.',
    sceneAlt: 'Abstrakte blaue und türkise Lichtlandschaft als Symbol für KI-Computing',
    capabilities: [
      { title: 'Lokale KI-Beschleunigung', description: 'Wählen Sie eine Plattform mit AMD Ryzen, Ryzen AI oder Intel Core Ultra. Grafikleistung und KI-Beschleunigung hängen vom gewählten Modell und seiner Konfiguration ab.' },
      { title: 'Große Speicherkonfigurationen', description: 'Je nach Modell stehen fest verlöteter LPDDR5-/LPDDR5x-Speicher oder DDR5-SO-DIMMs zur Verfügung. Beim MCAIPC2 hängen Speicherkapazität und Geschwindigkeit von der Mainboard-Serie ab.' },
      { title: 'Schnelle Daten- und Bildschirmanschlüsse', description: 'Mehrere Bildschirmausgänge, schnelle Netzwerkverbindungen und verschiedene NVMe-Optionen unterstützen anspruchsvolle lokale Arbeitsabläufe.' },
    ],
    scenarios: [
      { title: 'Lokale KI-Entwicklung und Inferenz', description: 'Führen Sie unterstützte Modelle lokal aus, wenn kurze Datenwege, schnelle Reaktionen oder der Betrieb ohne Internetverbindung entscheidend sind.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Entwicklung für maschinelles Sehen', description: 'Nutzen Sie hohe Rechenleistung und Anschlüsse für externe Kameras, um Prototypen für die visuelle Datenanalyse zu entwickeln.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Professionelles Arbeiten mit mehreren Bildschirmen', description: 'Die Unterstützung für vier Bildschirme eignet sich für Konstruktion, Visualisierung, Medienarbeit und Arbeitsplätze mit vielen Informationsquellen.', products: ['MCAIPC2', 'MCAIPC1'] },
    ],
    products: { mcai1: 'Leistungsstarker Mini-PC mit AMD Ryzen AI Max+ 395 und Unterstützung für vier Bildschirme', mcai2: 'Drei Mainboard-Serien mit konfigurierbarem Speicher, Netzwerk und Gehäuse', mcaipc3: 'Kompakter KI-PC mit vier AMD- und Intel-Konfigurationen' },
  },
  fr: {
    overview: 'Les mini PC IA réunissent des processeurs AMD et Intel performants, des options de mémoire propres à chaque modèle, un stockage local rapide et plusieurs sorties vidéo dans un poste de travail compact pour l’IA locale et les applications professionnelles exigeantes.',
    qualifier: 'Les performances IA dépendent du processeur choisi, de la mémoire, de l’environnement logiciel et de la charge de travail.',
    sceneAlt: 'Paysage lumineux abstrait bleu et cyan évoquant le calcul pour l’intelligence artificielle',
    capabilities: [
      { title: 'Accélération IA locale', description: 'Choisissez une plateforme AMD Ryzen, Ryzen AI ou Intel Core Ultra. Les capacités graphiques et d’accélération IA dépendent du modèle et de la configuration.' },
      { title: 'Configurations à grande capacité mémoire', description: 'Selon le modèle, la mémoire LPDDR5 / LPDDR5x intégrée ou les modules DDR5 SO-DIMM répondent à différents besoins. Sur le MCAIPC2, la capacité et la vitesse dépendent de la série de carte mère.' },
      { title: 'Connexions rapides pour les données et l’affichage', description: 'Les sorties multiécrans, le réseau haut débit et plusieurs options NVMe prennent en charge des tâches locales exigeantes.' },
    ],
    scenarios: [
      { title: 'Développement et inférence IA en local', description: 'Exécutez les modèles compatibles en local lorsque la proximité des données, la réactivité ou le fonctionnement hors ligne sont essentiels.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Développement en vision par ordinateur', description: 'Associez une puissance de calcul élevée et des caméras externes pour prototyper des applications d’analyse visuelle.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Travail professionnel sur plusieurs écrans', description: 'La prise en charge de quatre écrans convient à l’ingénierie, à la visualisation, aux médias et aux postes riches en informations.', products: ['MCAIPC2', 'MCAIPC1'] },
    ],
    products: { mcai1: 'Mini PC haut de gamme AMD Ryzen AI Max+ 395 prenant en charge quatre écrans', mcai2: 'Trois séries de cartes mères avec mémoire, réseau et boîtier configurables', mcaipc3: 'PC IA compact avec quatre configurations AMD et Intel' },
  },
  it: {
    overview: 'I mini PC per l’IA riuniscono processori AMD e Intel ad alte prestazioni, opzioni di memoria specifiche per modello, archiviazione locale veloce e uscite per più schermi in una workstation compatta per l’IA locale e le applicazioni professionali impegnative.',
    qualifier: 'Le prestazioni IA dipendono dal processore scelto, dalla configurazione della memoria, dall’ambiente software e dal carico di lavoro.',
    sceneAlt: 'Paesaggio luminoso astratto blu e ciano che rappresenta il calcolo per l’intelligenza artificiale',
    capabilities: [
      { title: 'Accelerazione IA locale', description: 'Scegli una piattaforma AMD Ryzen, Ryzen AI o Intel Core Ultra. Le capacità grafiche e di accelerazione IA dipendono dal modello e dalla configurazione.' },
      { title: 'Configurazioni con memoria capiente', description: 'A seconda del modello, la memoria LPDDR5 / LPDDR5x integrata o i moduli DDR5 SO-DIMM supportano carichi di lavoro diversi. Nel MCAIPC2 capacità e velocità dipendono dalla serie della scheda madre.' },
      { title: 'Connessioni veloci per dati e schermi', description: 'Le uscite per più schermi, la rete ad alta velocità e diverse opzioni NVMe supportano flussi di lavoro locali impegnativi.' },
    ],
    scenarios: [
      { title: 'Sviluppo e inferenza IA in locale', description: 'Esegui localmente i modelli compatibili quando contano la vicinanza dei dati, la reattività o il funzionamento offline.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Sviluppo di visione artificiale', description: 'Usa un’elevata potenza di calcolo e telecamere esterne per realizzare prototipi di applicazioni di analisi visiva.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Lavoro professionale con più schermi', description: 'Il supporto per quattro schermi è adatto a progettazione, visualizzazione, contenuti multimediali e postazioni ricche di informazioni.', products: ['MCAIPC2', 'MCAIPC1'] },
    ],
    products: { mcai1: 'Mini PC di punta con AMD Ryzen AI Max+ 395 e supporto per quattro schermi', mcai2: 'Tre serie di schede madri con memoria, rete e chassis configurabili', mcaipc3: 'PC IA compatto con quattro configurazioni AMD e Intel' },
  },
  es: {
    overview: 'Los mini PC con IA reúnen procesadores AMD e Intel de alto rendimiento, opciones de memoria específicas de cada modelo, almacenamiento local rápido y varias salidas de pantalla en una estación de trabajo compacta para IA local y aplicaciones profesionales exigentes.',
    qualifier: 'El rendimiento de IA depende del procesador elegido, la configuración de memoria, el entorno de software y la carga de trabajo.',
    sceneAlt: 'Paisaje luminoso abstracto azul y cian que representa la computación para inteligencia artificial',
    capabilities: [
      { title: 'Aceleración de IA local', description: 'Elija una plataforma AMD Ryzen, Ryzen AI o Intel Core Ultra. Las capacidades gráficas y de aceleración de IA dependen del modelo y de la configuración.' },
      { title: 'Configuraciones con gran capacidad de memoria', description: 'Según el modelo, la memoria LPDDR5 / LPDDR5x integrada o los módulos DDR5 SO-DIMM admiten distintas cargas de trabajo. En el MCAIPC2, la capacidad y la velocidad dependen de la serie de placa base.' },
      { title: 'Conexiones rápidas de datos y pantallas', description: 'Las salidas para varias pantallas, la red de alta velocidad y diversas opciones NVMe permiten flujos de trabajo locales exigentes.' },
    ],
    scenarios: [
      { title: 'Desarrollo e inferencia de IA en local', description: 'Ejecute los modelos compatibles en local cuando sean importantes la proximidad de los datos, la respuesta rápida o el funcionamiento sin conexión.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Desarrollo de visión artificial', description: 'Utilice una elevada capacidad de cómputo y cámaras externas para crear prototipos de aplicaciones de análisis visual.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Trabajo profesional con varias pantallas', description: 'El soporte para cuatro pantallas es adecuado para ingeniería, visualización, medios y puestos con numerosas fuentes de información.', products: ['MCAIPC2', 'MCAIPC1'] },
    ],
    products: { mcai1: 'Mini PC de gama alta con AMD Ryzen AI Max+ 395 y soporte para cuatro pantallas', mcai2: 'Tres series de placas base con memoria, red y chasis configurables', mcaipc3: 'PC con IA compacto con cuatro configuraciones AMD e Intel' },
  },
};

type CategoryId = 'ai-mini-pc' | 'industrial-mini-pc' | 'firewall-mini-pc' | 'commercial-mini-pc';
type CategoryUi = {
  browse: string; viewApplications: string; sections: string; overview: string; applications: string; models: string;
  recommended: string; choose: string; compare: string;
  overviewTitles: Record<CategoryId, string>; applicationTitles: Record<CategoryId, string>;
};
export const categoryUiCopy: Record<Language, CategoryUi> = {
  en: {
    browse: 'Browse models', viewApplications: 'View applications', sections: 'Category sections', overview: 'Category overview', applications: 'Application scenarios', models: 'Current models', recommended: 'Recommended models', choose: 'Choose the right configuration', compare: 'Compare the current models by processor platform, connectivity, expansion, and deployment requirements.',
    overviewTitles: { 'ai-mini-pc': 'Compact workstations for local AI', 'industrial-mini-pc': 'Compact computers for machines, data, and the industrial edge', 'firewall-mini-pc': 'Network appliances from compact edge gateways to 1U servers', 'commercial-mini-pc': 'Compact desktop and NAS platforms for work, displays, and local services' },
    applicationTitles: { 'ai-mini-pc': 'Applications for AI mini PCs', 'industrial-mini-pc': 'From machine control to operator stations', 'firewall-mini-pc': 'From branch firewalls to rackmount network platforms', 'commercial-mini-pc': 'From everyday desktops to compact storage and network services' },
  },
  de: {
    browse: 'Modelle ansehen', viewApplications: 'Anwendungen ansehen', sections: 'Bereiche der Produktkategorie', overview: 'Kategorieübersicht', applications: 'Anwendungsbereiche', models: 'Aktuelle Modelle', recommended: 'Empfohlene Modelle', choose: 'Die passende Konfiguration wählen', compare: 'Vergleichen Sie die aktuellen Modelle anhand von Prozessorplattform, Anschlüssen, Erweiterungsmöglichkeiten und Einsatzanforderungen.',
    overviewTitles: { 'ai-mini-pc': 'Kompakte Arbeitsplatzrechner für lokale KI', 'industrial-mini-pc': 'Kompakte Computer für Maschinen, Daten und industrielle Edge-Anwendungen', 'firewall-mini-pc': 'Netzwerkgeräte vom kompakten Edge-Gateway bis zum 1U-Server', 'commercial-mini-pc': 'Kompakte Desktop- und NAS-Plattformen für Arbeit, Anzeigen und lokale Dienste' },
    applicationTitles: { 'ai-mini-pc': 'Einsatzbereiche für KI-Mini-PCs', 'industrial-mini-pc': 'Von der Maschinensteuerung bis zum Bedienplatz', 'firewall-mini-pc': 'Von der Filial-Firewall bis zur Netzwerkplattform im Rack', 'commercial-mini-pc': 'Vom Desktop-PC bis zu kompakten Speicher- und Netzwerkdiensten' },
  },
  fr: {
    browse: 'Voir les modèles', viewApplications: 'Voir les applications', sections: 'Rubriques de la catégorie', overview: 'Présentation de la catégorie', applications: 'Domaines d’application', models: 'Modèles actuels', recommended: 'Modèles recommandés', choose: 'Choisir la bonne configuration', compare: 'Comparez les modèles actuels selon le processeur, la connectivité, les possibilités d’extension et les besoins de déploiement.',
    overviewTitles: { 'ai-mini-pc': 'Des postes de travail compacts pour l’IA locale', 'industrial-mini-pc': 'Des ordinateurs compacts pour les machines, les données et l’informatique industrielle en périphérie', 'firewall-mini-pc': 'Des équipements réseau, des passerelles compactes aux serveurs 1U', 'commercial-mini-pc': 'Des plateformes compactes de bureau et NAS pour le travail, l’affichage et les services locaux' },
    applicationTitles: { 'ai-mini-pc': 'Applications des mini PC IA', 'industrial-mini-pc': 'De la commande des machines aux postes opérateurs', 'firewall-mini-pc': 'Des pare-feu de sites aux plateformes réseau en rack', 'commercial-mini-pc': 'Des postes de bureau aux services compacts de stockage et de réseau' },
  },
  it: {
    browse: 'Scopri i modelli', viewApplications: 'Scopri le applicazioni', sections: 'Sezioni della categoria', overview: 'Panoramica della categoria', applications: 'Ambiti di applicazione', models: 'Modelli attuali', recommended: 'Modelli consigliati', choose: 'Scegli la configurazione adatta', compare: 'Confronta i modelli attuali in base a processore, connettività, espansione e requisiti di installazione.',
    overviewTitles: { 'ai-mini-pc': 'Workstation compatte per l’IA locale', 'industrial-mini-pc': 'Computer compatti per macchine, dati e applicazioni edge industriali', 'firewall-mini-pc': 'Dispositivi di rete dai gateway edge compatti ai server 1U', 'commercial-mini-pc': 'Piattaforme desktop e NAS compatte per lavoro, schermi e servizi locali' },
    applicationTitles: { 'ai-mini-pc': 'Applicazioni dei mini PC per l’IA', 'industrial-mini-pc': 'Dal controllo macchina alle postazioni operatore', 'firewall-mini-pc': 'Dai firewall di filiale alle piattaforme di rete in rack', 'commercial-mini-pc': 'Dai desktop ai servizi compatti di archiviazione e rete' },
  },
  es: {
    browse: 'Ver modelos', viewApplications: 'Ver aplicaciones', sections: 'Secciones de la categoría', overview: 'Descripción de la categoría', applications: 'Ámbitos de aplicación', models: 'Modelos actuales', recommended: 'Modelos recomendados', choose: 'Elija la configuración adecuada', compare: 'Compare los modelos actuales según el procesador, la conectividad, las posibilidades de ampliación y los requisitos de instalación.',
    overviewTitles: { 'ai-mini-pc': 'Estaciones de trabajo compactas para IA local', 'industrial-mini-pc': 'Ordenadores compactos para máquinas, datos y computación industrial en el borde', 'firewall-mini-pc': 'Dispositivos de red desde pasarelas compactas hasta servidores 1U', 'commercial-mini-pc': 'Plataformas compactas de escritorio y NAS para trabajo, pantallas y servicios locales' },
    applicationTitles: { 'ai-mini-pc': 'Aplicaciones de los mini PC con IA', 'industrial-mini-pc': 'Del control de máquinas a los puestos de operador', 'firewall-mini-pc': 'De los cortafuegos de sucursal a las plataformas de red en rack', 'commercial-mini-pc': 'De los equipos de escritorio a los servicios compactos de almacenamiento y red' },
  },
};
