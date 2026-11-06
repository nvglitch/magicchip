import type { CatalogProductCopy } from '@/lib/catalog-product-copy';
import type { ProductSpecification } from '@/lib/product-specifications';

type AiGalleryCard = { image: string; title: string; description?: string };

// German presentation only. Original model identifiers, quantities and interfaces
// remain in the catalog; these helpers are called only for German AI product pages.
export const germanAiCopy: Record<string, Partial<CatalogProductCopy> & { sellingPoints?: AiGalleryCard[] }> = {
  mcai1: {
    tagline: 'AMD Ryzen AI Max+ 395 mit bis zu 128 GB RAM und vier Bildschirmausgängen',
    description: 'MCAIPC1 kombiniert den AMD Ryzen AI Max+ 395 mit bis zu 128 GB LPDDR5x-Arbeitsspeicher und vier Bildschirmausgängen. Das 220 × 220 × 83 mm große Gehäuse bietet einen 10-GbE- und einen 2,5-GbE-Netzwerkanschluss, vier M.2-NVMe-Steckplätze, USB4 und PD 3.1. Prozessorprofil, Kühlung, Software und gewählte Konfiguration bestimmen die Leistung für lokale KI und professionelle Anwendungen.',
    highlights: ['AMD Ryzen AI Max+ 395', 'TDP bis zu 140 W', 'Vier Bildschirmausgänge', '10GbE + 2.5GbE LAN'],
    specificationHeading: 'MCAIPC1 – Technische Daten',
    featureHeading: 'KI-Plattform, Anschlüsse und Erweiterungen',
    advantageSummary: 'Vergleichen Sie Arbeitsspeicher, vier M.2-Steckplätze, Bildausgänge, Netzwerk und Stromversorgung für Ihre Anwendung. Die nutzbare KI-Leistung und mögliche Speicherkonfiguration hängen vom gewählten Leistungsprofil und der eingesetzten Software ab.',
    features: [
      { icon: 'Cpu', title: 'AI-Max+-Plattform', description: 'AMD Ryzen AI Max+ 395 mit integrierter NPU. Die Nutzung der KI-Beschleuniger hängt von Software und Arbeitslast ab.' },
      { icon: 'Monitor', title: 'Vier Bildschirmausgänge', description: 'HDMI 2.1, DisplayPort 2.1 und zwei USB4-Anschlüsse bieten Bildausgabe für mehrere Monitore. Auflösung und Kombination sind für die gewählte Anzeige zu prüfen.' },
      { icon: 'HardDrive', title: 'Vier M.2-Steckplätze', description: 'Vier M.2-2280-PCIe-4.0-Steckplätze bieten Platz für lokale SSDs. Laufwerkskapazität und RAID-Einrichtung sind anhand von Laufwerken und Software zu prüfen.' },
      { icon: 'Network', title: 'Zwei schnelle Netzwerkanschlüsse', description: 'Ein 10GbE-Anschluss mit AQC113 und ein 2.5GbE-Anschluss mit Intel I226 verbinden das System mit getrennten Netzwerken; PXE und Wake-on-LAN sind aufgeführt.' },
      { icon: 'Zap', title: 'Drei Stromversorgungswege', description: '8-poliger ATX-Eingang, 19-V-Gleichstromeingang und USB-C PD 3.1 mit 28 V bieten Anschlussmöglichkeiten. Netzteil und Verkabelung müssen zur gewählten Konfiguration passen.' },
      { icon: 'Thermometer', title: 'Kühlung passend auslegen', description: 'Lüfteranschlüsse für CPU und System ermöglichen eine abgestimmte Kühllösung. Prüfen Sie Leistungsprofil, Luftstrom und Einbausituation für Ihre Arbeitslast.' },
    ],
    galleryCards: Array.from({ length: 9 }, (_, index) => ({
      image: `/assets/products/ai/mcaipc1/gallery/${index + 1}.jpg`,
      title: `MCAIPC1 – Produktansicht ${index + 1}`,
    })),
    sellingPoints: [
      { image: '/assets/products/ai/mcaipc1/details/2.jpg', title: 'AI-Max+-Plattform' },
      { image: '/assets/products/ai/mcaipc1/details/5.jpg', title: 'Kühlsystem' },
      { image: '/assets/products/ai/mcaipc1/details/6.jpg', title: 'WLAN 7 und Bluetooth 5.4' },
      { image: '/assets/products/ai/mcaipc1/details/7.jpg', title: 'Vier M.2-Speichersteckplätze' },
    ],
  },
  mcai2: {
    tagline: 'Drei Mainboard-Serien mit wählbarem Arbeitsspeicher, Netzwerk und Gehäuse',
    description: 'MCAIPC2 ist eine konfigurierbare KI-Rechnerfamilie mit den Mainboards AXB35-02, AXB35-03 und AEB35-04. Wählen Sie je nach Serie AMD-Prozessoren, LPDDR5-Arbeitsspeicher, einen 2.5GbE-Anschluss oder zwei 10GbE-Anschlüsse sowie Erweiterungen über USB4, optionales Flex I/O oder MCIO. Kompatible Desktop- und Tower-Gehäuse bieten interne oder externe Stromversorgung. Der Konfigurator zeigt die unterstützten Kombinationen.',
    highlights: ['AXB35-02 / AXB35-03 / AEB35-04', 'Bis zu 128 GB, je nach Serie', '2.5GbE oder zwei 10GbE-Anschlüsse', 'Kompatible Gehäuse und Stromversorgung'],
    specificationHeading: 'MCAIPC2 – Technische Daten',
    featureHeading: 'Mainboard und Gehäuse aufeinander abstimmen',
    advantageSummary: 'Vergleichen Sie die vollständigen Daten der gewählten Kombination. Prozessor, Grafik, NPU, RAM, Netzwerk und Erweiterungen richten sich nach der Mainboard-Serie; Abmessungen, Netzteil und Gehäuseoptionen nach dem kompatiblen Gehäuse.',
    galleryCards: [],
    features: [
      { icon: 'Cpu', title: 'Drei Mainboard-Serien', description: 'Wählen Sie AXB35-02, AXB35-03 oder AEB35-04. Prozessor, Grafik, NPU, RAM und Betriebssystemunterstützung hängen von der gewählten Serie ab.' },
      { icon: 'Network', title: 'Anschlüsse nach Serie', description: 'AXB35-02 bietet einen 2.5GbE-RJ45-Anschluss. AXB35-03 und AEB35-04 bieten je zwei 10GbE-RJ45-Anschlüsse und unterschiedliche optionale Hochgeschwindigkeitserweiterungen.' },
      { icon: 'Layers', title: 'Gehäuse und Stromversorgung', description: 'Kombinieren Sie das Mainboard mit einem kompatiblen Gehäuse und internem 300/350-W-Flex-Netzteil oder externem 240-W-Netzteil. Fingerabdrucksensor, Beleuchtung und Kühlung hängen vom Gehäuse ab.' },
    ],
  },
  mcaipc3: {
    tagline: 'Kompakter KI-PC mit vier AMD- und Intel-Konfigurationen',
    description: 'Wählen Sie MCAIPC3A, B, C oder D nach Prozessorplattform, Arbeitsspeicher und Erweiterungen. Alle vier Konfigurationen bieten zwei 2.5GbE-LAN-Anschlüsse und zwei PCIe-4.0-M.2-SSD-Steckplätze in einem 132 × 132 × 50,5 mm großen Gehäuse. CPU, Grafik, aufgelöteter LPDDR5-RAM oder DDR5-SO-DIMMs, Anschlüsse an Vorder- und Rückseite sowie MCIO oder OCuLink richten sich nach dem gewählten Typ.',
    highlights: ['Vier AMD-/Intel-Konfigurationen', 'Bis zu 64 GB, je nach Konfiguration', 'Zwei 2.5GbE-LAN-Anschlüsse', 'Zwei M.2-PCIe-4.0-SSDs'],
    specificationHeading: 'MCAIPC3 – Technische Daten',
    featureHeading: 'Plattform, RAM und Erweiterungen wählen',
    advantageSummary: 'Wählen Sie Typ A oder B für AMD Ryzen beziehungsweise Ryzen AI und Typ C oder D für Intel Core Ultra. RAM-Bauform und Erweiterungsschnittstelle unterscheiden sich je Typ; vergleichen Sie deshalb die vollständige Tabelle der gewählten Konfiguration.',
    galleryCards: [],
    features: [
      { icon: 'Cpu', title: 'AMD- und Intel-Plattformen', description: 'Typ A und B bieten AMD Ryzen beziehungsweise Ryzen AI, Typ C und D Intel Core Ultra. Prozessor- und Grafikoptionen richten sich nach der gewählten Variante.' },
      { icon: 'Network', title: 'Netzwerk und Bildausgabe', description: 'Zwei 2.5GbE-LAN-Anschlüsse, HDMI 2.1, DisplayPort 2.1 und die Bildausgabe über USB4 verbinden Netzwerk, Arbeitsplatz und Monitore.' },
      { icon: 'HardDrive', title: 'RAM und Erweiterungen', description: 'A und D verwenden aufgelöteten LPDDR5-RAM, B und C DDR5-SO-DIMM-Steckplätze. A bietet MCIO; B, C und D bieten OCuLink. Alle vier unterstützen zwei PCIe-4.0-M.2-SSDs.' },
    ],
  },
};

const labels: Record<string, string> = {
  Model: 'Modell', Processor: 'Prozessor', CPU: 'CPU', Graphics: 'Grafik',
  'GPU / NPU': 'GPU / NPU', 'Graphics / NPU': 'Grafik / NPU', Memory: 'Arbeitsspeicher',
  Storage: 'Massenspeicher', 'Storage - M.2 SSD': 'M.2-SSD-Speicher', Network: 'Netzwerk',
  USB: 'USB', Audio: 'Audio', Display: 'Bildausgänge', Wireless: 'Funkverbindungen',
  Adapter: 'Netzteil', OS: 'Betriebssystem', System: 'Betriebssystem', Dimensions: 'Abmessungen',
  Weight: 'Gewicht', 'Mainboard series': 'Mainboard-Serie', Expansion: 'Erweiterungen',
  'Wi-Fi / Bluetooth': 'WLAN / Bluetooth', 'PSU / input': 'Netzteil / Eingang', Power: 'Stromversorgung',
  Chassis: 'Gehäuse', 'Chassis options': 'Gehäuseoptionen',
  'Front I/O - Ports & buttons': 'Vorderseite – Anschlüsse und Tasten',
  'Rear I/O - Ports': 'Rückseite – Anschlüsse', 'High-speed interface': 'Hochgeschwindigkeitsschnittstelle',
  'Front I/O': 'Anschlüsse vorne', 'Rear I/O': 'Anschlüsse hinten', 'Internal I/O': 'Interne Anschlüsse',
  BIOS: 'BIOS', Feature: 'Funktionen',
};

const exactValues: Record<string, string> = {
  '1 x audio combo jack, Realtek ALC869': '1 x Audio-Kombibuchse, Realtek ALC869',
  '1 x HDMI2.1; 1 x DP2.1; 1 x USB4 Type-C display output': '1 x HDMI2.1; 1 x DP2.1; Bildausgabe über 1 x USB4 Type-C',
  'AC 100-240 V input; DC 19 V output (5.5 x 2.5 mm)': 'Eingang: 100–240 V AC; Ausgang: 19 V DC (5,5 × 2,5 mm)',
  'Approx. 605 g': 'Ca. 605 g',
  'AXB35-02: AMD FP11 Strix Halo, Ryzen AI Max 300; AXB35-03: AMD FP11 Strix/Gorgon Halo, Ryzen AI Max 300/400; AEB35-04: AMD FP10 Medusa Point (Zen 6)': 'AXB35-02: AMD FP11 Strix Halo, Ryzen AI Max 300; AXB35-03: AMD FP11 Strix/Gorgon Halo, Ryzen AI Max 300/400; AEB35-04: AMD FP10 Medusa Point (Zen 6)',
  'AXB35-02: AMD integrated graphics; AXB35-03: Radeon 8000S series; AEB35-04: next-generation RDNA GPU, up to 50 TOPS, and XDNA 3 NPU, up to 100 TOPS': 'AXB35-02: integrierte AMD-Grafik; AXB35-03: Radeon-8000S-Serie; AEB35-04: RDNA-GPU der nächsten Generation, bis zu 50 TOPS, und XDNA-3-NPU, bis zu 100 TOPS',
  'AXB35-02/-03: LPDDR5 8000 MT/s, up to 128 GB; AEB35-04: LPDDR5 9600 MT/s, 64 GB or 96 GB': 'AXB35-02/-03: LPDDR5 mit 8000 MT/s, bis zu 128 GB; AEB35-04: LPDDR5 mit 9600 MT/s, 64 GB oder 96 GB',
  'AXB35-02: 2 x M.2 2280 PCIe 4.0 x4; AXB35-03: 2 x M.2 2280 plus optional M.2 2242/2280 for Flex I/O; AEB35-04: 2 x M.2 2280 PCIe 4.0 x4; SD 4.0 supported': 'AXB35-02: 2 x M.2 2280 PCIe 4.0 x4; AXB35-03: 2 x M.2 2280 sowie optional M.2 2242/2280 für Flex I/O; AEB35-04: 2 x M.2 2280 PCIe 4.0 x4; SD 4.0 wird unterstützt',
  'AXB35-02: 1 x RJ45 2.5 GbE; AXB35-03 and AEB35-04: 2 x RJ45 10 GbE': 'AXB35-02: 1 x RJ45 2.5 GbE; AXB35-03 und AEB35-04: 2 x RJ45 10 GbE',
  'Front, all series: 2 x USB 3.2 Gen 2 Type-A and 1 x USB4; rear: AXB35-02 has 1 x USB 3.2 Gen 2, 2 x USB 2.0 and 1 x USB4; AXB35-03/AEB35-04 have 1 x USB 3.2, 1 x USB 2.0 and 1 x USB4': 'Vorne bei allen Serien: 2 x USB 3.2 Gen 2 Type-A und 1 x USB4; hinten bei AXB35-02: 1 x USB 3.2 Gen 2, 2 x USB 2.0 und 1 x USB4; hinten bei AXB35-03/AEB35-04: 1 x USB 3.2, 1 x USB 2.0 und 1 x USB4',
  'AXB35-02/-03: front and rear combo jacks; AEB35-04: 1 x combo jack': 'AXB35-02/-03: Audio-Kombibuchsen vorne und hinten; AEB35-04: 1 x Audio-Kombibuchse',
  'AXB35-02/-03: HDMI 2.1, DP 1.4 and 2 x USB4; AEB35-04: HDMI 2.1, DP 2.0 and 2 x USB4': 'AXB35-02/-03: HDMI 2.1, DP 1.4 und 2 x USB4; AEB35-04: HDMI 2.1, DP 2.0 und 2 x USB4',
  'AXB35-03: optional M.2 Flex I/O for OCuLink or dual 80 Gbps USB4 data; AEB35-04: 1 x MCIO, PCIe 4.0 x8': 'AXB35-03: optionales M.2 Flex I/O für OCuLink oder zwei USB4-Datenverbindungen mit 80 Gbit/s; AEB35-04: 1 x MCIO, PCIe 4.0 x8',
  'M.2 2230 PCIe/USB module; AXB35-02 supports 2.4/5 GHz; AXB35-03/AEB35-04 support 2.4/5/6 GHz; Bluetooth 5.0 or later': 'M.2-2230-PCIe/USB-Modul; AXB35-02 unterstützt 2,4/5 GHz; AXB35-03/AEB35-04 unterstützen 2,4/5/6 GHz; Bluetooth 5.0 oder neuer',
  'H01/H02/H03/H06/H07: internal 300/350 W Flex PSU; other documented chassis: 20 V / 12 A, 240 W external adapter': 'H01/H02/H03/H06/H07: internes 300/350-W-Flex-Netzteil; andere dokumentierte Gehäuse: externes 240-W-Netzteil, 20 V / 12 A',
  'AXB35-02/-03: Windows 11; AEB35-04: Windows 11 or Linux': 'AXB35-02/-03: Windows 11; AEB35-04: Windows 11 oder Linux',
  'Chassis-dependent; see the chassis compatibility guide below for dimensions and power options.': 'Gehäuseabhängig; Abmessungen und Stromversorgungsoptionen finden Sie unten bei den kompatiblen Gehäusen.',
  'AMD integrated graphics': 'Integrierte AMD-Grafik',
  'Radeon 8000S series': 'Radeon-8000S-Serie',
  'Next-generation RDNA GPU, up to 50 TOPS; XDNA 3 NPU, up to 100 TOPS': 'RDNA-GPU der nächsten Generation, bis zu 50 TOPS; XDNA-3-NPU, bis zu 100 TOPS',
  'Front and rear combo jacks': 'Audio-Kombibuchsen vorne und hinten',
  '1 x combo jack': '1 x Audio-Kombibuchse',
  'M.2 2230 PCIe/USB wireless module': 'M.2-2230-PCIe/USB-Funkmodul',
  'M.2 2230 PCIe/USB module; 2.4/5 GHz; Bluetooth 5.0 or later': 'M.2-2230-PCIe/USB-Modul; 2,4/5 GHz; Bluetooth 5.0 oder neuer',
  'M.2 2230 PCIe/USB module; 2.4/5/6 GHz; Bluetooth 5.0 or later': 'M.2-2230-PCIe/USB-Modul; 2,4/5/6 GHz; Bluetooth 5.0 oder neuer',
  'Internal 300/350 W Flex PSU': 'Internes 300/350-W-Flex-Netzteil',
  '20 V / 12 A, 240 W external adapter': 'Externes 240-W-Netzteil, 20 V / 12 A',
  'audio jack': 'Audiobuchse',
  'MOC fingerprint; audio jack': 'MOC-Fingerabdrucksensor; Audiobuchse',
  'ambient LED; audio jack': 'LED-Ambientebeleuchtung; Audiobuchse',
  'optional fingerprint; audio jack': 'Optionaler Fingerabdrucksensor; Audiobuchse',
  'ambient LED; optional fingerprint': 'LED-Ambientebeleuchtung; optionaler Fingerabdrucksensor',
  'Liquid-cooled; optional 3.5-inch touch TFT': 'Flüssigkeitsgekühlt; optionales 3,5-Zoll-Touch-TFT',
  'optional fingerprint; speakers vary': 'Optionaler Fingerabdrucksensor; Lautsprecher je nach Ausführung',
  'Optional M.2 Flex I/O for OCuLink or dual 80Gbps USB4 data': 'Optionales M.2 Flex I/O für OCuLink oder zwei USB4-Datenverbindungen mit 80 Gbit/s',
  'Onboard LPDDR5, up to 6400 MT/s, max 64 GB': 'Aufgelöteter LPDDR5-RAM, bis zu 6400 MT/s, maximal 64 GB',
  '2 x DDR5 SO-DIMM slots, up to 5600 MT/s, max 64 GB': '2 x DDR5-SO-DIMM-Steckplätze, bis zu 5600 MT/s, maximal 64 GB',
  '1 x power button; 1 x reset pinhole; 1 x audio jack; 2 x USB3.0; 1 x MCIO': '1 x Ein-/Austaste; 1 x Resetöffnung; 1 x Audiobuchse; 2 x USB3.0; 1 x MCIO',
  '1 x power button; 1 x reset pinhole; 1 x audio jack; 2 x USB3.0; 1 x USB4 Type-C; 1 x OCuLink': '1 x Ein-/Austaste; 1 x Resetöffnung; 1 x Audiobuchse; 2 x USB3.0; 1 x USB4 Type-C; 1 x OCuLink',
  '1 x DC input; 1 x USB4 Type-C; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0': '1 x Gleichstromeingang; 1 x USB4 Type-C; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0',
  '1 x DC input; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0': '1 x Gleichstromeingang; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0',
  'AMD Ryzen™ AI Max+ 395, TDP up to 140W': 'AMD Ryzen™ AI Max+ 395, TDP bis zu 140 W',
  'LPDDR5x 8533MT/s, 256-bit, up to 128GB': 'LPDDR5x mit 8533 MT/s, 256 Bit, bis zu 128 GB',
  '1x HDMI 2.1 + 1x DP 2.1 + 2x USB4 (Quad Display)': '1x HDMI 2.1 + 1x DP 2.1 + 2x USB4 (vier Bildschirme)',
  '2x USB4 + 6x USB3.0 (2x Front 10Gbps, 4x Rear)': '2x USB4 + 6x USB3.0 (2x vorne mit 10 Gbit/s, 4x hinten)',
  '8Pin ATX + 19V DC-IN + Type-C PD3.1 28V': '8-poliger ATX-Eingang + 19 V DC-IN + Type-C PD3.1 mit 28 V',
  'M.2 2230 PCIe (WiFi/BT), ARGB Header, FG Header': 'M.2 2230 PCIe (WLAN/BT), ARGB-Anschluss, FG-Anschluss',
  '1 x USB4; 2 x USB 3.0 (10Gbps); 1 x SD card reader; 1 x combo audio jack; 1 x power button; 1 x Clear CMOS; 1 x CPU power selector (High / Medium / Low)': '1 x USB4; 2 x USB 3.0 (10 Gbit/s); 1 x SD-Kartenleser; 1 x Audio-Kombibuchse; 1 x Ein-/Austaste; 1 x CMOS-Löschtaste; 1 x CPU-Leistungswahlschalter (Hoch / Mittel / Niedrig)',
  '1 x HDMI 2.1; 1 x DisplayPort 2.1; 1 x USB4 with PD 3.1 28V; 4 x USB 3.0; 1 x 2.5GbE RJ45; 1 x 10GbE RJ45; 1 x audio jack': '1 x HDMI 2.1; 1 x DisplayPort 2.1; 1 x USB4 mit PD 3.1 und 28 V; 4 x USB 3.0; 1 x 2.5GbE RJ45; 1 x 10GbE RJ45; 1 x Audiobuchse',
  '2 x fan headers (CPU and system); 1 x stereo speaker header (2W x 2); 1 x 5V ARGB header; 1 x fingerprint-module header; 1 x 8-pin ATX power input': '2 x Lüfteranschlüsse (CPU und System); 1 x Stereo-Lautsprecheranschluss (2 W x 2); 1 x 5-V-ARGB-Anschluss; 1 x Anschluss für ein Fingerabdruckmodul; 1 x 8-poliger ATX-Stromeingang',
  'AMI BIOS in SPI flash ROM': 'AMI BIOS im SPI-Flash-ROM',
  'Supports S0/S4/S5 power states (S3 not supported), USB wake, PXE, RTC power-on, Wake-on-LAN, and scheduled power-on': 'Unterstützt S0/S4/S5-Energiezustände (S3 wird nicht unterstützt), Aufwecken per USB, PXE, RTC-Einschalten, Wake-on-LAN und zeitgesteuertes Einschalten',
};

// Limited wording shared by the existing AI spec values. Brand names, port
// standards, CPU names and model IDs deliberately pass through unchanged.
const valueTerms: [string, string][] = [
  ['Front', 'Vorne'], ['rear', 'hinten'], ['and', 'und'], ['or', 'oder'],
  ['optional', 'optional'], ['for', 'für'], ['up to', 'bis zu'],
  ['ports', 'Anschlüsse'], ['series', 'Serie'],
];

function translateValueDe(value: string): string {
  if (exactValues[value]) return exactValues[value];
  return valueTerms.reduce((text, [source, target]) => text.replace(new RegExp(`\\b${source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g'), target), value);
}

export function translateAiSpecsDe(specs: readonly ProductSpecification[]): ProductSpecification[] {
  return specs.map(spec => ({ label: labels[spec.label] || spec.label, value: translateValueDe(spec.value) }));
}

export function translateAiGalleryDe(cards: AiGalleryCard[]): AiGalleryCard[] {
  const translateTitle = (value: string) => value
    .replace(/front panel|front view/g, 'Vorderansicht')
    .replace(/rear panel|rear view/g, 'Rückansicht')
    .replace(/enclosure view/g, 'Gehäuseansicht')
    .replace(/product view/gi, 'Produktansicht');
  return cards.map(card => ({ ...card, title: translateTitle(card.title), ...(card.description ? { description: translateValueDe(card.description) } : {}) }));
}

export function translateAiConfigurationLabelDe(label: string): string {
  return label.replace(/^Type ([A-D])\b/, 'Typ $1');
}
