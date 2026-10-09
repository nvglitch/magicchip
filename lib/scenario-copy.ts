import type { Language } from '@/lib/i18n/config';
import type { ScenarioId } from '@/lib/scenarios';

type ScenarioText = {
  title: string;
  description: string;
  applications: string[];
  selection: string[];
  reasons: string[];
};
type ScenarioCopy = {
  title: string;
  subtitle: string;
  browse: string;
  applications: string;
  selection: string;
  recommended: string;
  note: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  items: Record<ScenarioId, ScenarioText>;
};

export const scenarioCopy: Record<Language, ScenarioCopy> = {
  en: {
    title: 'Deployment Scenarios',
    subtitle: 'From machine control and touch interfaces to local AI and storage: compare systems by the work they need to do.',
    browse: 'Browse application scenarios', applications: 'Typical uses', selection: 'What to check', recommended: 'Models to compare',
    note: 'Compare the selected Type, mainboard and chassis on each product page. Software support, modules and deployment requirements depend on the configuration.',
    ctaTitle: 'Need help choosing a system?', ctaText: 'Tell us about your workload, required interfaces and installation space. We can help compare suitable configurations.', ctaButton: 'Contact Sales',
    items: {
      industrialAutomation: {
        title: 'Industrial Automation',
        description: 'Connect machine-side equipment and run local control or monitoring software with industrial box PCs chosen for their serial ports, network interfaces and CPU platform.',
        applications: ['Machine monitoring', 'PLC communication', 'Production data collection'],
        selection: ['Match COM count and RS-232 / RS-485 signaling to each device.', 'Check input voltage, cooling and operating temperature for the selected Type.'],
        reasons: ['Core / Core Ultra options with dual Gigabit LAN and dual COM.', 'Multiple CPU Types; dual LAN and RS-485 via jumper.', 'Type B provides six COM ports and dual Gigabit LAN.'],
      },
      edgeAi: {
        title: 'Edge AI & Local Compute',
        description: 'Build a local AI or development workstation with AMD Ryzen AI or Intel Core Ultra platforms. Select memory, graphics and expansion around your model and software stack.',
        applications: ['Local model evaluation', 'AI-assisted development', 'Vision inference prototyping'],
        selection: ['Size memory for the model and runtime; confirm GPU / NPU software support.', 'Compare onboard LPDDR5 with SO-DIMM options, and verify USB4 / MCIO / OCuLink by Type.'],
        reasons: ['Ryzen AI Max+ 395, up to 128GB LPDDR5x and four M.2 SSD slots.', 'Three mainboard series with compatible chassis and platform-specific I/O.', 'AMD / Intel Types with different memory and expansion options.'],
      },
      networkSecurity: {
        title: 'Network Security & SD-WAN',
        description: 'Choose a compact appliance or rackmount platform for routing, firewall and VPN software. Compare physical port count, link speed and expansion for branch or network-edge deployments.',
        applications: ['Branch gateways', 'Multi-WAN routing', 'Network segmentation'],
        selection: ['Plan WAN / LAN ports and choose RJ45 or SFP+ for the upstream link.', 'Size CPU and memory for your software, VPN encryption and traffic profile.'],
        reasons: ['Four Intel 2.5GbE ports in a compact N100 appliance.', 'Dual 2.5GbE plus dual 10GbE; choose RJ45 or SFP+.', '1U platform with six 2.5GbE ports and 12th–14th Gen Intel options.'],
      },
      digitalSignage: {
        title: 'Digital Signage & Multi-Display',
        description: 'Drive information displays, dashboards and meeting-room screens from a compact PC. Choose the video connections and CPU platform for your content and screen layout.',
        applications: ['Retail information displays', 'Control-room dashboards', 'Meeting-room screens'],
        selection: ['Check simultaneous display support, resolution and refresh rate for the chosen platform.', 'Match HDMI / DP / USB-C connections and allow ventilation behind the display.'],
        reasons: ['Two HDMI outputs plus DisplayPort, with dual LAN and COM.', 'HDMI, DisplayPort and USB4, with Intel Core options.', 'Core Ultra platform with HDMI, DP and USB4 connectivity.'],
      },
      businessEducation: {
        title: 'Business & Education',
        description: 'Equip desks, classrooms and shared workspaces with compact Intel or AMD systems. Balance daily applications, memory, peripherals and display connections.',
        applications: ['Office workstations', 'Classroom computers', 'Shared meeting spaces'],
        selection: ['Choose CPU, memory and SSD capacity for the applications used together.', 'Check OS support, display ports and USB connections for existing peripherals.'],
        reasons: ['Intel Core U/P options, DDR5 and dual Gigabit LAN.', 'Ryzen HS options, up to 64GB DDR5 and dual 2.5GbE.', 'Core Ultra desktop with USB4 and OCuLink expansion.'],
      },
      iotGateway: {
        title: 'IoT & Edge Gateways',
        description: 'Collect device data and connect local equipment to upstream services. Compare industrial multi-LAN systems and compact appliances for network separation and local processing.',
        applications: ['Device data acquisition', 'Equipment telemetry', 'Local edge services'],
        selection: ['Count Ethernet and serial connections; verify GPIO and wireless module interfaces.', 'Check DC input, mounting space and cooling for the installation.'],
        reasons: ['Six Gigabit LAN interfaces for connecting separate networks.', 'Four Intel I226-V interfaces, dual COM and two cooling options.', 'Dual 2.5GbE, DDR5 and DC 12–24V input in a compact enclosure.'],
      },
      panelPc: {
        title: 'Panel PCs & HMI',
        description: 'Combine a computer and touch display for machine operation, status monitoring or an embedded operator terminal. The TPC range offers different screen sizes and platform families.',
        applications: ['Machine operator panels', 'Production status displays', 'Embedded touch terminals'],
        selection: ['Match screen size, resolution, panel cutout and touch requirements to the installation.', 'Verify power and rear I/O by platform; front-panel protection does not cover the whole enclosure.'],
        reasons: ['15-inch 1024 × 768 panel with dual 2.5GbE and DC 9–36V.', '15-inch E-series option with dual LAN and RS-232 / 422 / 485.', '21.5-inch Full HD capacitive panel; J1900 / Core platforms and IP65 front panel.'],
      },
      nasStorage: {
        title: 'NAS & Local Storage',
        description: 'Build a compact file-service, backup or network-storage system. Compare drive connections and network ports together, including models with 10GbE SFP+ uplinks.',
        applications: ['Shared file services', 'Local backup targets', 'Storage and network labs'],
        selection: ['Check SATA / NVMe connections, drive placement and power for the planned storage.', 'Match RJ45 / SFP+ links to your network; verify storage software and RAID support separately.'],
        reasons: ['Four 2.5GbE, dual 10GbE SFP+, NVMe and two SATA connections.', 'Core Ultra, up to 96GB DDR5 and two 10GbE SFP+ ports.', 'Core Ultra with four 2.5GbE and four 10GbE SFP+ ports.'],
      },
    },
  },
  de: {
    title: 'Einsatzszenarien',
    subtitle: 'Von Maschinensteuerung und Touch-Bedienung bis zu lokaler KI und Speicherung: Vergleichen Sie Systeme passend zur Aufgabe.',
    browse: 'Einsatzszenarien durchsuchen', applications: 'Typische Anwendungen', selection: 'Darauf achten', recommended: 'Modelle vergleichen',
    note: 'Vergleichen Sie den ausgewählten Typ, das Mainboard und das Gehäuse auf der Produktseite. Softwareunterstützung, Module und Einsatzanforderungen hängen von der Konfiguration ab.',
    ctaTitle: 'Hilfe bei der Systemauswahl?', ctaText: 'Beschreiben Sie Ihre Rechenlast, benötigten Anschlüsse und den Einbauraum. Wir helfen beim Vergleich passender Konfigurationen.', ctaButton: 'Vertrieb kontaktieren',
    items: {
      industrialAutomation: {
        title: 'Industrieautomation',
        description: 'Verbinden Sie maschinennahe Geräte und führen Sie lokale Steuerungs- oder Überwachungssoftware aus. Wählen Sie Industrie-PCs nach seriellen Anschlüssen, Netzwerk und CPU-Plattform.',
        applications: ['Maschinenüberwachung', 'SPS-Kommunikation', 'Produktionsdatenerfassung'],
        selection: ['COM-Anzahl und RS-232-/RS-485-Signale mit den Geräten abstimmen.', 'Eingangsspannung, Kühlung und Betriebstemperatur des gewählten Typs prüfen.'],
        reasons: ['Core-/Core-Ultra-Optionen mit zwei Gigabit-LAN- und zwei COM-Anschlüssen.', 'Mehrere CPU-Typen; zwei LAN-Anschlüsse und RS-485 über Jumper.', 'Typ B bietet sechs COM-Anschlüsse und zwei Gigabit-LAN-Ports.'],
      },
      edgeAi: {
        title: 'Edge AI und lokale Verarbeitung',
        description: 'Bauen Sie eine lokale KI- oder Entwicklungsstation mit AMD Ryzen AI oder Intel Core Ultra auf. Speicher, Grafik und Erweiterungen richten sich nach Modell und Software.',
        applications: ['Lokale Modelle testen', 'KI-gestützte Entwicklung', 'Prototypen für Bildinferenz'],
        selection: ['Speicher für Modell und Laufzeit dimensionieren; GPU-/NPU-Softwareunterstützung prüfen.', 'LPDDR5 und SO-DIMM vergleichen; USB4 / MCIO / OCuLink je Typ prüfen.'],
        reasons: ['Ryzen AI Max+ 395, bis 128GB LPDDR5x und vier M.2-SSD-Steckplätze.', 'Drei Mainboard-Serien mit kompatiblen Gehäusen und plattformspezifischen Anschlüssen.', 'AMD-/Intel-Typen mit unterschiedlichen Speicher- und Erweiterungsoptionen.'],
      },
      networkSecurity: {
        title: 'Netzwerksicherheit und SD-WAN',
        description: 'Wählen Sie kompakte Appliances oder Rack-Systeme für Routing-, Firewall- und VPN-Software. Portanzahl, Geschwindigkeit und Erweiterungen bestimmen den Einsatz am Netzwerk-Rand.',
        applications: ['Filial-Gateways', 'Multi-WAN-Routing', 'Netzwerksegmentierung'],
        selection: ['WAN-/LAN-Ports planen und RJ45 oder SFP+ für den Uplink wählen.', 'CPU und Speicher nach Software, VPN-Verschlüsselung und Datenverkehr dimensionieren.'],
        reasons: ['Vier Intel-2,5GbE-Ports in einer kompakten N100-Appliance.', 'Zwei 2,5GbE- und zwei 10GbE-Ports; RJ45 oder SFP+ wählbar.', '1U-Plattform mit sechs 2,5GbE-Ports und Intel-Optionen der 12.–14. Generation.'],
      },
      digitalSignage: {
        title: 'Digital Signage und Multi-Display',
        description: 'Steuern Sie Informationsanzeigen, Dashboards und Besprechungsbildschirme mit einem kompakten PC. Videoanschlüsse und CPU-Plattform richten sich nach Inhalt und Bildschirmaufbau.',
        applications: ['Informationsanzeigen im Handel', 'Leitstand-Dashboards', 'Besprechungsbildschirme'],
        selection: ['Gleichzeitige Bildschirmausgabe, Auflösung und Bildrate der Plattform prüfen.', 'HDMI / DP / USB-C passend wählen und Belüftung hinter dem Display einplanen.'],
        reasons: ['Zwei HDMI-Ausgänge und DisplayPort, dazu zwei LAN- und COM-Ports.', 'HDMI, DisplayPort und USB4 mit Intel-Core-Optionen.', 'Core-Ultra-Plattform mit HDMI, DP und USB4.'],
      },
      businessEducation: {
        title: 'Business und Bildung',
        description: 'Statten Sie Arbeitsplätze, Klassenräume und Gemeinschaftsräume mit kompakten Intel- oder AMD-Systemen aus. Stimmen Sie Anwendungen, Speicher, Peripherie und Bildschirme aufeinander ab.',
        applications: ['Büroarbeitsplätze', 'Unterrichtscomputer', 'Gemeinsame Besprechungsräume'],
        selection: ['CPU, Arbeitsspeicher und SSD für gleichzeitig genutzte Anwendungen wählen.', 'Betriebssystem, Video- und USB-Anschlüsse für vorhandene Geräte prüfen.'],
        reasons: ['Intel Core U/P, DDR5 und zwei Gigabit-LAN-Anschlüsse.', 'Ryzen HS, bis 64GB DDR5 und zwei 2,5GbE-Anschlüsse.', 'Core-Ultra-Desktop mit USB4 und OCuLink-Erweiterung.'],
      },
      iotGateway: {
        title: 'IoT- und Edge-Gateways',
        description: 'Erfassen Sie Gerätedaten und verbinden Sie lokale Anlagen mit übergeordneten Diensten. Vergleichen Sie Multi-LAN-Industrie-PCs und kompakte Appliances für getrennte Netze und lokale Verarbeitung.',
        applications: ['Gerätedatenerfassung', 'Anlagentelemetrie', 'Lokale Edge-Dienste'],
        selection: ['Ethernet- und serielle Anschlüsse zählen; GPIO und Funkmodul-Schnittstellen prüfen.', 'DC-Eingang, Einbauraum und Kühlung am Einsatzort prüfen.'],
        reasons: ['Sechs Gigabit-LAN-Schnittstellen für getrennte Netzwerke.', 'Vier Intel-I226-V-Schnittstellen, zwei COM-Ports und zwei Kühlvarianten.', 'Zwei 2,5GbE-Ports, DDR5 und DC 12–24V im kompakten Gehäuse.'],
      },
      panelPc: {
        title: 'Panel-PCs und HMI',
        description: 'Kombinieren Sie Computer und Touch-Display für Maschinenbedienung, Statusanzeigen oder integrierte Bedienplätze. Die TPC-Reihe bietet verschiedene Bildschirmgrößen und Plattformfamilien.',
        applications: ['Maschinenbedienpanels', 'Produktionsstatusanzeigen', 'Integrierte Touch-Terminals'],
        selection: ['Bildschirmgröße, Auflösung, Einbauausschnitt und Touch-Anforderungen abstimmen.', 'Stromversorgung und rückseitige Anschlüsse je Plattform prüfen; Frontschutz gilt nicht für das gesamte Gehäuse.'],
        reasons: ['15-Zoll-Panel mit 1024 × 768, zwei 2,5GbE-Ports und DC 9–36V.', '15-Zoll-E-Serie mit zwei LAN-Ports und RS-232 / 422 / 485.', '21,5-Zoll-Full-HD-Touch-Panel; J1900-/Core-Plattformen und IP65-Front.'],
      },
      nasStorage: {
        title: 'NAS und lokale Speicherung',
        description: 'Bauen Sie ein kompaktes System für Dateidienste, Backups oder Netzwerkspeicher auf. Vergleichen Sie Laufwerksanschlüsse und Netzwerkports gemeinsam, auch mit 10GbE-SFP+-Uplinks.',
        applications: ['Gemeinsame Dateidienste', 'Lokale Backup-Ziele', 'Speicher- und Netzwerklabore'],
        selection: ['SATA-/NVMe-Anschlüsse, Laufwerksplatz und Stromversorgung prüfen.', 'RJ45-/SFP+-Verbindungen an das Netzwerk anpassen; Speichersoftware und RAID separat prüfen.'],
        reasons: ['Vier 2,5GbE-Ports, zwei 10GbE-SFP+-Ports, NVMe und zwei SATA-Anschlüsse.', 'Core Ultra, bis 96GB DDR5 und zwei 10GbE-SFP+-Ports.', 'Core Ultra mit vier 2,5GbE- und vier 10GbE-SFP+-Ports.'],
      },
    },
  },
  fr: {
    title: 'Scénarios de déploiement',
    subtitle: 'Du contrôle de machines aux interfaces tactiles, à l’IA locale et au stockage : comparez les systèmes selon les tâches à accomplir.',
    browse: 'Parcourir les scénarios', applications: 'Usages courants', selection: 'Points à vérifier', recommended: 'Modèles à comparer',
    note: 'Comparez le Type, la carte mère et le boîtier sélectionnés sur chaque page produit. Les logiciels, modules et exigences de déploiement dépendent de la configuration.',
    ctaTitle: 'Besoin d’aide pour choisir un système ?', ctaText: 'Décrivez votre charge de travail, les interfaces nécessaires et l’espace disponible. Nous vous aidons à comparer les configurations adaptées.', ctaButton: 'Contacter le service commercial',
    items: {
      industrialAutomation: {
        title: 'Automatisation industrielle',
        description: 'Connectez les équipements de production et exécutez des logiciels locaux de contrôle ou de supervision. Choisissez les PC industriels selon les ports série, le réseau et la plateforme CPU.',
        applications: ['Supervision de machines', 'Communication avec les automates', 'Collecte de données de production'],
        selection: ['Adapter le nombre de ports COM et les signaux RS-232 / RS-485 aux appareils.', 'Vérifier la tension, le refroidissement et la température du Type choisi.'],
        reasons: ['Options Core / Core Ultra avec deux ports Gigabit LAN et deux COM.', 'Plusieurs Types CPU ; double LAN et RS-485 par cavalier.', 'Le Type B propose six ports COM et deux Gigabit LAN.'],
      },
      edgeAi: {
        title: 'IA en périphérie et calcul local',
        description: 'Créez un poste d’IA locale ou de développement avec AMD Ryzen AI ou Intel Core Ultra. Choisissez mémoire, graphique et extensions selon le modèle et les logiciels.',
        applications: ['Évaluation de modèles locaux', 'Développement assisté par IA', 'Prototypage d’inférence visuelle'],
        selection: ['Dimensionner la mémoire pour le modèle et son exécution ; vérifier les logiciels GPU / NPU.', 'Comparer LPDDR5 intégrée et SO-DIMM ; vérifier USB4 / MCIO / OCuLink par Type.'],
        reasons: ['Ryzen AI Max+ 395, jusqu’à 128GB LPDDR5x et quatre emplacements SSD M.2.', 'Trois séries de cartes mères avec boîtiers compatibles et E/S propres à chaque plateforme.', 'Types AMD / Intel avec différentes mémoires et extensions.'],
      },
      networkSecurity: {
        title: 'Sécurité réseau et SD-WAN',
        description: 'Choisissez une appliance compacte ou une plateforme en rack pour les logiciels de routage, pare-feu et VPN. Comparez ports, débits et extensions pour les agences et la périphérie réseau.',
        applications: ['Passerelles d’agence', 'Routage multi-WAN', 'Segmentation du réseau'],
        selection: ['Prévoir les ports WAN / LAN et choisir RJ45 ou SFP+ pour la liaison amont.', 'Dimensionner CPU et mémoire selon les logiciels, le chiffrement VPN et le trafic.'],
        reasons: ['Quatre ports Intel 2,5GbE dans une appliance N100 compacte.', 'Deux ports 2,5GbE et deux 10GbE, au choix RJ45 ou SFP+.', 'Plateforme 1U avec six ports 2,5GbE et options Intel de 12e–14e génération.'],
      },
      digitalSignage: {
        title: 'Affichage dynamique et multi-écrans',
        description: 'Pilotez affichages d’information, tableaux de bord et écrans de réunion avec un PC compact. Adaptez les sorties vidéo et la plateforme CPU aux contenus et aux écrans.',
        applications: ['Affichage d’information en magasin', 'Tableaux de bord de supervision', 'Écrans de salle de réunion'],
        selection: ['Vérifier les écrans simultanés, la résolution et la fréquence selon la plateforme.', 'Adapter HDMI / DP / USB-C et prévoir la ventilation derrière l’écran.'],
        reasons: ['Deux HDMI et DisplayPort, avec double LAN et COM.', 'HDMI, DisplayPort et USB4 avec options Intel Core.', 'Plateforme Core Ultra avec HDMI, DP et USB4.'],
      },
      businessEducation: {
        title: 'Entreprise et éducation',
        description: 'Équipez bureaux, classes et espaces partagés avec des systèmes Intel ou AMD compacts. Équilibrez applications, mémoire, périphériques et connexions d’écran.',
        applications: ['Postes de travail de bureau', 'Ordinateurs de classe', 'Espaces de réunion partagés'],
        selection: ['Choisir CPU, mémoire et SSD pour les applications utilisées simultanément.', 'Vérifier système d’exploitation, vidéo et USB pour les périphériques existants.'],
        reasons: ['Options Intel Core U/P, DDR5 et double Gigabit LAN.', 'Options Ryzen HS, jusqu’à 64GB DDR5 et double 2,5GbE.', 'PC Core Ultra avec USB4 et extension OCuLink.'],
      },
      iotGateway: {
        title: 'IoT et passerelles Edge',
        description: 'Collectez les données des appareils et reliez les équipements locaux aux services amont. Comparez PC industriels multi-LAN et appliances compactes pour séparer les réseaux et traiter les données localement.',
        applications: ['Acquisition de données', 'Télémétrie des équipements', 'Services Edge locaux'],
        selection: ['Compter Ethernet et ports série ; vérifier GPIO et interfaces des modules sans fil.', 'Vérifier alimentation DC, espace de montage et refroidissement.'],
        reasons: ['Six interfaces Gigabit LAN pour des réseaux séparés.', 'Quatre interfaces Intel I226-V, double COM et deux refroidissements.', 'Double 2,5GbE, DDR5 et DC 12–24V dans un boîtier compact.'],
      },
      panelPc: {
        title: 'Panel PC et IHM',
        description: 'Réunissez ordinateur et écran tactile pour piloter les machines, afficher leur état ou intégrer un terminal opérateur. La gamme TPC propose plusieurs tailles et familles de plateformes.',
        applications: ['Pupitres opérateur', 'Affichage d’état de production', 'Terminaux tactiles intégrés'],
        selection: ['Adapter taille, résolution, découpe du panneau et exigences tactiles.', 'Vérifier alimentation et E/S arrière par plateforme ; la protection frontale ne couvre pas tout le boîtier.'],
        reasons: ['Écran 15 pouces 1024 × 768, double 2,5GbE et DC 9–36V.', 'Série E de 15 pouces, double LAN et RS-232 / 422 / 485.', 'Écran capacitif Full HD de 21,5 pouces ; J1900 / Core et face avant IP65.'],
      },
      nasStorage: {
        title: 'NAS et stockage local',
        description: 'Créez un système compact pour fichiers partagés, sauvegardes ou stockage réseau. Comparez connexions de disques et ports réseau, dont les liaisons SFP+ 10GbE.',
        applications: ['Services de fichiers partagés', 'Cibles de sauvegarde locales', 'Laboratoires stockage et réseau'],
        selection: ['Vérifier SATA / NVMe, emplacement et alimentation des disques.', 'Adapter RJ45 / SFP+ au réseau ; vérifier séparément les logiciels de stockage et le RAID.'],
        reasons: ['Quatre 2,5GbE, deux SFP+ 10GbE, NVMe et deux connexions SATA.', 'Core Ultra, jusqu’à 96GB DDR5 et deux ports SFP+ 10GbE.', 'Core Ultra avec quatre 2,5GbE et quatre SFP+ 10GbE.'],
      },
    },
  },
  it: {
    title: 'Scenari di utilizzo',
    subtitle: 'Dal controllo macchina e dalle interfacce touch all’AI locale e allo storage: confronta i sistemi in base al lavoro da svolgere.',
    browse: 'Esplora gli scenari', applications: 'Usi tipici', selection: 'Cosa verificare', recommended: 'Modelli da confrontare',
    note: 'Confronta Type, scheda madre e chassis selezionati in ogni pagina prodotto. Software, moduli e requisiti di installazione dipendono dalla configurazione.',
    ctaTitle: 'Serve aiuto per scegliere un sistema?', ctaText: 'Descrivi il carico di lavoro, le interfacce richieste e lo spazio disponibile. Ti aiutiamo a confrontare le configurazioni adatte.', ctaButton: 'Contatta le vendite',
    items: {
      industrialAutomation: {
        title: 'Automazione industriale',
        description: 'Collega le apparecchiature a bordo macchina ed esegui software locale di controllo o monitoraggio. Scegli i PC industriali in base a porte seriali, rete e piattaforma CPU.',
        applications: ['Monitoraggio macchine', 'Comunicazione con PLC', 'Raccolta dati di produzione'],
        selection: ['Adattare numero di COM e segnali RS-232 / RS-485 ai dispositivi.', 'Verificare tensione, raffreddamento e temperatura del Type scelto.'],
        reasons: ['Opzioni Core / Core Ultra con doppia Gigabit LAN e doppia COM.', 'Diversi Type CPU; doppia LAN e RS-485 tramite jumper.', 'Il Type B offre sei porte COM e doppia Gigabit LAN.'],
      },
      edgeAi: {
        title: 'Edge AI e calcolo locale',
        description: 'Crea una workstation per AI locale o sviluppo con AMD Ryzen AI o Intel Core Ultra. Scegli memoria, grafica ed espansioni in base al modello e al software.',
        applications: ['Valutazione di modelli locali', 'Sviluppo assistito da AI', 'Prototipi di inferenza visiva'],
        selection: ['Dimensionare la memoria per modello e runtime; verificare il software GPU / NPU.', 'Confrontare LPDDR5 integrata e SO-DIMM; verificare USB4 / MCIO / OCuLink per Type.'],
        reasons: ['Ryzen AI Max+ 395, fino a 128GB LPDDR5x e quattro slot SSD M.2.', 'Tre serie di schede madri con chassis compatibili e I/O specifico per piattaforma.', 'Type AMD / Intel con differenti memorie ed espansioni.'],
      },
      networkSecurity: {
        title: 'Sicurezza di rete e SD-WAN',
        description: 'Scegli appliance compatte o piattaforme rack per software di routing, firewall e VPN. Confronta numero di porte, velocità ed espansioni per filiali e network edge.',
        applications: ['Gateway di filiale', 'Routing multi-WAN', 'Segmentazione della rete'],
        selection: ['Pianificare porte WAN / LAN e scegliere RJ45 o SFP+ per l’uplink.', 'Dimensionare CPU e memoria per software, crittografia VPN e traffico.'],
        reasons: ['Quattro porte Intel 2,5GbE in un’appliance N100 compatta.', 'Doppia 2,5GbE e doppia 10GbE, con scelta RJ45 o SFP+.', 'Piattaforma 1U con sei porte 2,5GbE e opzioni Intel di 12a–14a generazione.'],
      },
      digitalSignage: {
        title: 'Digital signage e multi-display',
        description: 'Gestisci schermi informativi, dashboard e display per riunioni con un PC compatto. Adatta connessioni video e piattaforma CPU ai contenuti e agli schermi.',
        applications: ['Schermi informativi nei negozi', 'Dashboard di sala controllo', 'Display per sale riunioni'],
        selection: ['Verificare schermi simultanei, risoluzione e frequenza per la piattaforma.', 'Abbinare HDMI / DP / USB-C e lasciare ventilazione dietro il display.'],
        reasons: ['Due HDMI più DisplayPort, con doppia LAN e COM.', 'HDMI, DisplayPort e USB4 con opzioni Intel Core.', 'Piattaforma Core Ultra con HDMI, DP e USB4.'],
      },
      businessEducation: {
        title: 'Business e istruzione',
        description: 'Equipaggia uffici, aule e spazi condivisi con sistemi Intel o AMD compatti. Bilancia applicazioni, memoria, periferiche e collegamenti dei display.',
        applications: ['Postazioni da ufficio', 'Computer per aule', 'Spazi riunioni condivisi'],
        selection: ['Scegliere CPU, RAM e SSD per le applicazioni usate insieme.', 'Verificare sistema operativo, video e USB per le periferiche esistenti.'],
        reasons: ['Opzioni Intel Core U/P, DDR5 e doppia Gigabit LAN.', 'Opzioni Ryzen HS, fino a 64GB DDR5 e doppia 2,5GbE.', 'Desktop Core Ultra con USB4 ed espansione OCuLink.'],
      },
      iotGateway: {
        title: 'IoT e gateway Edge',
        description: 'Raccogli dati dai dispositivi e collega le apparecchiature ai servizi upstream. Confronta PC industriali multi-LAN e appliance compatte per reti separate ed elaborazione locale.',
        applications: ['Acquisizione dati', 'Telemetria delle apparecchiature', 'Servizi Edge locali'],
        selection: ['Contare Ethernet e porte seriali; verificare GPIO e interfacce dei moduli wireless.', 'Verificare ingresso DC, spazio di montaggio e raffreddamento.'],
        reasons: ['Sei interfacce Gigabit LAN per collegare reti separate.', 'Quattro interfacce Intel I226-V, doppia COM e due opzioni di raffreddamento.', 'Doppia 2,5GbE, DDR5 e ingresso DC 12–24V in un chassis compatto.'],
      },
      panelPc: {
        title: 'Panel PC e HMI',
        description: 'Unisci computer e display touch per comando macchina, monitoraggio o un terminale operatore integrato. La gamma TPC offre diverse dimensioni e famiglie di piattaforme.',
        applications: ['Pannelli operatore', 'Display di stato produzione', 'Terminali touch integrati'],
        selection: ['Adattare dimensioni, risoluzione, foro di montaggio e requisiti touch.', 'Verificare alimentazione e I/O posteriore per piattaforma; la protezione frontale non copre tutto il chassis.'],
        reasons: ['Pannello 15 pollici 1024 × 768, doppia 2,5GbE e DC 9–36V.', 'Serie E da 15 pollici con doppia LAN e RS-232 / 422 / 485.', 'Touch capacitivo Full HD da 21,5 pollici; J1900 / Core e frontale IP65.'],
      },
      nasStorage: {
        title: 'NAS e storage locale',
        description: 'Crea un sistema compatto per file condivisi, backup o storage di rete. Confronta collegamenti dei dischi e porte di rete, inclusi uplink SFP+ 10GbE.',
        applications: ['Servizi file condivisi', 'Destinazioni di backup locali', 'Laboratori storage e rete'],
        selection: ['Verificare SATA / NVMe, collocazione e alimentazione dei dischi.', 'Abbinare RJ45 / SFP+ alla rete; verificare software storage e RAID separatamente.'],
        reasons: ['Quattro 2,5GbE, doppia SFP+ 10GbE, NVMe e due collegamenti SATA.', 'Core Ultra, fino a 96GB DDR5 e due porte SFP+ 10GbE.', 'Core Ultra con quattro 2,5GbE e quattro SFP+ 10GbE.'],
      },
    },
  },
  es: {
    title: 'Escenarios de implementación',
    subtitle: 'Desde el control de máquinas y las interfaces táctiles hasta la IA local y el almacenamiento: compare sistemas según el trabajo que deben realizar.',
    browse: 'Explorar escenarios', applications: 'Usos habituales', selection: 'Qué comprobar', recommended: 'Modelos para comparar',
    note: 'Compare el Type, la placa base y el chasis seleccionados en cada página de producto. El software, los módulos y los requisitos de instalación dependen de la configuración.',
    ctaTitle: '¿Necesita ayuda para elegir un sistema?', ctaText: 'Describa la carga de trabajo, las interfaces necesarias y el espacio disponible. Le ayudamos a comparar las configuraciones adecuadas.', ctaButton: 'Contactar con ventas',
    items: {
      industrialAutomation: {
        title: 'Automatización industrial',
        description: 'Conecte equipos junto a la máquina y ejecute software local de control o supervisión. Elija PC industriales por sus puertos serie, interfaces de red y plataforma CPU.',
        applications: ['Supervisión de máquinas', 'Comunicación con PLC', 'Recogida de datos de producción'],
        selection: ['Adaptar el número de COM y señales RS-232 / RS-485 a cada dispositivo.', 'Comprobar tensión, refrigeración y temperatura del Type elegido.'],
        reasons: ['Opciones Core / Core Ultra con doble Gigabit LAN y doble COM.', 'Varios Types CPU; doble LAN y RS-485 mediante jumper.', 'El Type B ofrece seis puertos COM y doble Gigabit LAN.'],
      },
      edgeAi: {
        title: 'IA en el borde y cómputo local',
        description: 'Cree una estación de IA local o desarrollo con AMD Ryzen AI o Intel Core Ultra. Elija memoria, gráficos y ampliaciones según el modelo y el software.',
        applications: ['Evaluación de modelos locales', 'Desarrollo asistido por IA', 'Prototipos de inferencia visual'],
        selection: ['Dimensionar memoria para el modelo y su ejecución; verificar software GPU / NPU.', 'Comparar LPDDR5 integrada y SO-DIMM; verificar USB4 / MCIO / OCuLink por Type.'],
        reasons: ['Ryzen AI Max+ 395, hasta 128GB LPDDR5x y cuatro ranuras SSD M.2.', 'Tres series de placas base con chasis compatibles y E/S específica por plataforma.', 'Types AMD / Intel con distintas memorias y ampliaciones.'],
      },
      networkSecurity: {
        title: 'Seguridad de red y SD-WAN',
        description: 'Elija equipos compactos o plataformas en rack para software de routing, firewall y VPN. Compare puertos, velocidades y ampliaciones para sucursales y el borde de la red.',
        applications: ['Gateways de sucursal', 'Routing multi-WAN', 'Segmentación de red'],
        selection: ['Planificar puertos WAN / LAN y elegir RJ45 o SFP+ para el enlace ascendente.', 'Dimensionar CPU y memoria para software, cifrado VPN y tráfico.'],
        reasons: ['Cuatro puertos Intel 2,5GbE en un equipo N100 compacto.', 'Doble 2,5GbE y doble 10GbE; elección de RJ45 o SFP+.', 'Plataforma 1U con seis puertos 2,5GbE y opciones Intel de 12.ª–14.ª generación.'],
      },
      digitalSignage: {
        title: 'Señalización digital y multipantalla',
        description: 'Controle pantallas informativas, paneles de supervisión y pantallas de reunión con un PC compacto. Adapte conexiones de vídeo y CPU al contenido y la distribución de pantallas.',
        applications: ['Pantallas informativas en comercios', 'Paneles de sala de control', 'Pantallas de reunión'],
        selection: ['Comprobar pantallas simultáneas, resolución y frecuencia para la plataforma.', 'Adaptar HDMI / DP / USB-C y prever ventilación detrás de la pantalla.'],
        reasons: ['Dos HDMI más DisplayPort, con doble LAN y COM.', 'HDMI, DisplayPort y USB4 con opciones Intel Core.', 'Plataforma Core Ultra con HDMI, DP y USB4.'],
      },
      businessEducation: {
        title: 'Empresa y educación',
        description: 'Equipe oficinas, aulas y espacios compartidos con sistemas Intel o AMD compactos. Equilibre aplicaciones, memoria, periféricos y conexiones de pantalla.',
        applications: ['Puestos de oficina', 'Ordenadores de aula', 'Salas de reunión compartidas'],
        selection: ['Elegir CPU, memoria y SSD para las aplicaciones usadas a la vez.', 'Verificar sistema operativo, vídeo y USB para los periféricos existentes.'],
        reasons: ['Opciones Intel Core U/P, DDR5 y doble Gigabit LAN.', 'Opciones Ryzen HS, hasta 64GB DDR5 y doble 2,5GbE.', 'PC Core Ultra con USB4 y ampliación OCuLink.'],
      },
      iotGateway: {
        title: 'IoT y gateways Edge',
        description: 'Recoja datos de dispositivos y conecte equipos locales con servicios ascendentes. Compare PC industriales multi-LAN y equipos compactos para separar redes y procesar datos localmente.',
        applications: ['Adquisición de datos', 'Telemetría de equipos', 'Servicios Edge locales'],
        selection: ['Contar Ethernet y puertos serie; verificar GPIO e interfaces de módulos inalámbricos.', 'Comprobar entrada DC, espacio de montaje y refrigeración.'],
        reasons: ['Seis interfaces Gigabit LAN para conectar redes separadas.', 'Cuatro interfaces Intel I226-V, doble COM y dos opciones de refrigeración.', 'Doble 2,5GbE, DDR5 y entrada DC 12–24V en un chasis compacto.'],
      },
      panelPc: {
        title: 'Panel PC y HMI',
        description: 'Combine ordenador y pantalla táctil para operar máquinas, supervisar su estado o integrar un terminal de operador. La gama TPC ofrece distintos tamaños y familias de plataformas.',
        applications: ['Paneles de operador', 'Pantallas de estado de producción', 'Terminales táctiles integrados'],
        selection: ['Adaptar tamaño, resolución, recorte del panel y requisitos táctiles.', 'Verificar alimentación y E/S trasera por plataforma; la protección frontal no cubre todo el chasis.'],
        reasons: ['Panel de 15 pulgadas 1024 × 768, doble 2,5GbE y DC 9–36V.', 'Serie E de 15 pulgadas con doble LAN y RS-232 / 422 / 485.', 'Panel capacitivo Full HD de 21,5 pulgadas; J1900 / Core y frontal IP65.'],
      },
      nasStorage: {
        title: 'NAS y almacenamiento local',
        description: 'Cree un sistema compacto para archivos, copias de seguridad o almacenamiento de red. Compare conexiones de discos y puertos de red, incluidos enlaces SFP+ 10GbE.',
        applications: ['Servicios de archivos compartidos', 'Destinos de copia locales', 'Laboratorios de almacenamiento y red'],
        selection: ['Comprobar SATA / NVMe, ubicación y alimentación de los discos.', 'Adaptar RJ45 / SFP+ a la red; verificar software de almacenamiento y RAID por separado.'],
        reasons: ['Cuatro 2,5GbE, doble SFP+ 10GbE, NVMe y dos conexiones SATA.', 'Core Ultra, hasta 96GB DDR5 y dos puertos SFP+ 10GbE.', 'Core Ultra con cuatro 2,5GbE y cuatro SFP+ 10GbE.'],
      },
    },
  },
};
