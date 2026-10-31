"""Import only the five manually reviewed October 29 brochures.

Source PDFs are read-only. Platform qualifiers and translations below are authored
copy, not inferred from filenames. Builds consume the generated local JSON/assets.
"""
import json
import re
from hashlib import sha256
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
from PIL import Image
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r'D:\本地资源库\电脑相关\电脑册子归档\ver2')
LANGS = ['en', 'de', 'fr', 'it', 'es']


def L(en, de, fr, it, es):
    return dict(zip(LANGS, [en, de, fr, it, es]))


# Localized fragments for concise technical rows; all substitutions are explicit.
TERMS = {
    'up to': L('up to', 'bis', 'jusqu’à', 'fino a', 'hasta'),
    'optional': L('optional', 'optional', 'en option', 'opzionale', 'opcional'),
    'only': L('only', 'nur', 'uniquement', 'solo', 'solo'),
    'slots': L('slots', 'Steckplätze', 'emplacements', 'slot', 'ranuras'),
    'slot': L('slot', 'Steckplatz', 'emplacement', 'slot', 'ranura'),
    'Core platforms': L('Core platforms', 'Core-Plattformen', 'plateformes Core', 'piattaforme Core', 'plataformas Core'),
    'by generation': L('by CPU generation', 'nach CPU-Generation', 'selon la génération CPU', 'secondo la generazione CPU', 'según la generación CPU'),
    '4th/5th': L('4th/5th Gen', '4./5. Gen.', '4e/5e gén.', '4a/5a gen.', '4.ª/5.ª gen.'),
    '6th-11th': L('6th-11th Gen', '6.-11. Gen.', '6e-11e gén.', '6a-11a gen.', '6.ª-11.ª gen.'),
    '6th-8th': L('6th-8th Gen', '6.-8. Gen.', '6e-8e gén.', '6a-8a gen.', '6.ª-8.ª gen.'),
    '10th/11th': L('10th/11th Gen', '10./11. Gen.', '10e/11e gén.', '10a/11a gen.', '10.ª/11.ª gen.'),
    '12th/13th': L('12th/13th Gen', '12./13. Gen.', '12e/13e gén.', '12a/13a gen.', '12.ª/13.ª gen.'),
    '4th-10th': L('4th-10th Gen', '4.-10. Gen.', '4e-10e gén.', '4a-10a gen.', '4.ª-10.ª gen.'),
    '11th-13th': L('11th-13th Gen', '11.-13. Gen.', '11e-13e gén.', '11a-13a gen.', '11.ª-13.ª gen.'),
    '6th-13th': L('6th-13th Gen', '6.-13. Gen.', '6e-13e gén.', '6a-13a gen.', '6.ª-13.ª gen.'),
    '6th-10th': L('6th-10th Gen', '6.-10. Gen.', '6e-10e gén.', '6a-10a gen.', '6.ª-10.ª gen.'),
    '4th-11th': L('4th-11th Gen', '4.-11. Gen.', '4e-11e gén.', '4a-11a gen.', '4.ª-11.ª gen.'),
    '11th': L('11th Gen', '11. Gen.', '11e gén.', '11a gen.', '11.ª gen.'),
    '8th/10th': L('8th/10th Gen', '8./10. Gen.', '8e/10e gén.', '8a/10a gen.', '8.ª/10.ª gen.'),
    'support': L('support', 'unterstützen', 'compatibles', 'supportano', 'admiten'),
    'inputs': L('inputs', 'Eingänge', 'entrées', 'ingressi', 'entradas'),
    'outputs': L('outputs', 'Ausgänge', 'sorties', 'uscite', 'salidas'),
    'internal': L('internal', 'intern', 'interne', 'interno', 'interno'),
    'platform-dependent': L('platform-dependent', 'plattformabhängig', 'selon la plateforme', 'secondo la piattaforma', 'según plataforma'),
    'half-size': L('half-size', 'Half-Size', 'demi-format', 'half-size', 'tamaño medio'),
    'full-size': L('full-size', 'Full-Size', 'plein format', 'full-size', 'tamaño completo'),
}


def T(template):
    generations=L('4th-13th Gen','4.-13. Gen.','4e-13e gén.','4a-13a gen.','4.ª-13.ª gen.')
    return {lang: re.sub(r'\{([^}]+)\}', lambda m: TERMS[m[1]][lang], template).replace('4th-13th Gen',generations[lang]) for lang in LANGS}


LABELS = {
    'Model': L('Model', 'Modell', 'Modèle', 'Modello', 'Modelo'),
    'CPU': T('CPU'), 'Graphics': L('Graphics', 'Grafik', 'Graphiques', 'Grafica', 'Gráficos'),
    'Memory': L('Memory', 'Arbeitsspeicher', 'Mémoire', 'Memoria', 'Memoria'),
    'Display': L('Display', 'Bildausgänge', 'Affichage', 'Uscite video', 'Salidas de vídeo'),
    'Network': L('Network', 'Netzwerk', 'Réseau', 'Rete', 'Red'), 'USB': T('USB'),
    'Serial': L('Serial', 'Serielle Anschlüsse', 'Ports série', 'Porte seriali', 'Puertos serie'),
    'GPIO': T('GPIO'), 'Audio': T('Audio'),
    'Controls': L('Controls', 'Bedienelemente', 'Commandes', 'Comandi', 'Controles'),
    'Antennas': L('Antennas', 'Antennen', 'Antennes', 'Antenne', 'Antenas'),
    'Storage': L('Storage', 'Speicher', 'Stockage', 'Archiviazione', 'Almacenamiento'),
    'M.2 SATA': T('M.2 SATA'), 'M.2 NVMe': T('M.2 NVMe'),
    'Drive bay': L('Drive bay', 'Laufwerksschacht', 'Baie de disque', 'Vano unità', 'Bahía de unidad'),
    'Wireless': L('Wireless', 'Funkmodule', 'Sans fil', 'Wireless', 'Conectividad inalámbrica'),
    'Cellular / SIM': L('Cellular / SIM', 'Mobilfunk / SIM', 'Cellulaire / SIM', 'Rete mobile / SIM', 'Red móvil / SIM'),
    'Monitoring': L('Monitoring', 'Überwachung', 'Surveillance', 'Monitoraggio', 'Supervisión'),
    'Power': L('Power', 'Stromversorgung', 'Alimentation', 'Alimentazione', 'Alimentación'),
    'Cooling': L('Cooling', 'Kühlung', 'Refroidissement', 'Raffreddamento', 'Refrigeración'),
    'Enclosure': L('Enclosure', 'Gehäuse', 'Boîtier', 'Chassis', 'Chasis'),
    'Mounting': L('Mounting', 'Montage', 'Montage', 'Montaggio', 'Montaje'),
    'Dimensions': L('Dimensions', 'Abmessungen', 'Dimensions', 'Dimensioni', 'Dimensiones'),
    'PCB dimensions': L('PCB dimensions', 'Platinenmaße', 'Dimensions de carte', 'Dimensioni scheda', 'Dimensiones de placa'),
    'Weight': L('Weight', 'Gewicht', 'Poids', 'Peso', 'Peso'),
    'System': L('System', 'Betriebssystem', 'Système', 'Sistema', 'Sistema'),
    'Operating temperature': L('Operating temperature', 'Betriebstemperatur', 'Température de fonctionnement', 'Temperatura operativa', 'Temperatura de funcionamiento'),
    'Storage temperature': L('Storage temperature', 'Lagertemperatur', 'Température de stockage', 'Temperatura di stoccaggio', 'Temperatura de almacenamiento'),
    'Humidity': L('Humidity', 'Luftfeuchte', 'Humidité', 'Umidità', 'Humedad'),
    'Environment': L('Environment', 'Umgebung', 'Environnement', 'Ambiente', 'Entorno'),
    'Configuration notes': L('Configuration notes', 'Hinweise zur Konfiguration', 'Notes de configuration', 'Note di configurazione', 'Notas de configuración'),
    'Fan': L('Fan', 'Lüfter', 'Ventilateur', 'Ventola', 'Ventilador'),
    'BIOS': T('BIOS'), 'JP3': T('JP3'), 'TPM': T('TPM'),
}
REFERENCE = L('Images are for reference; final I/O follows the confirmed configuration.', 'Abbildungen dienen als Referenz; Anschlüsse nach bestätigter Konfiguration.', 'Images indicatives ; ports selon la configuration confirmée.', 'Immagini indicative; porte secondo la configurazione confermata.', 'Imágenes de referencia; puertos según la configuración confirmada.')
FANLESS = L('Fanless aluminum enclosure', 'Lüfterloses Aluminiumgehäuse', 'Boîtier aluminium sans ventilateur', 'Chassis in alluminio senza ventola', 'Chasis de aluminio sin ventilador')
FAN = L('Fan-equipped aluminum enclosure', 'Aluminiumgehäuse mit Lüfter', 'Boîtier aluminium avec ventilateur', 'Chassis in alluminio con ventola', 'Chasis de aluminio con ventilador')
HUMIDITY = L('10-90% RH at 30°C, non-condensing', '10-90% rF bei 30°C, nicht kondensierend', '10-90 % HR à 30°C, sans condensation', '10-90% UR a 30°C, senza condensa', '10-90 % HR a 30°C, sin condensación')
PLATFORM = L('CPU and memory', 'CPU und RAM', 'CPU et mémoire', 'CPU e memoria', 'CPU y memoria')
INTERFACES = L('Equipment interfaces', 'Geräteanschlüsse', 'Interfaces des équipements', 'Interfacce dispositivi', 'Interfaces de equipos')
STORAGE = L('Storage and expansion', 'Speicher und Erweiterung', 'Stockage et extension', 'Archiviazione ed espansione', 'Almacenamiento y expansión')


def join(*values):
    return {lang: ' '.join(value[lang] for value in values) for lang in LANGS}


def rows(defs, lang):
    assert len({key for key, _ in defs}) == len(defs), 'Duplicate specification label'
    return [{'label': LABELS[key][lang], 'value': value[lang]} for key, value in defs]


def gallery(model, image_id, lang, angled=False):
    front = L('Product view', 'Produktansicht', 'Vue du produit', 'Vista prodotto', 'Vista del producto') if angled else L('Front panel', 'Frontansicht', 'Face avant', 'Pannello anteriore', 'Panel frontal')
    rear = L('I/O panel', 'Anschlussseite', 'Panneau E/S', 'Pannello I/O', 'Panel E/S') if angled else L('Rear panel', 'Rückansicht', 'Face arrière', 'Pannello posteriore', 'Panel trasero')
    return [{'image': f'/assets/products/industrial/october/{image_id}/{side}.webp', 'title': f'{model} - {words[lang]}'} for side, words in [('front', front), ('rear', rear)]]


SOURCES = {
    'mcipcbp1': ('工控机IPC/B系列/MCIPCBP1 brochure.pdf', 'c50b21d786415548949b117daa414d0684de9eb6c1be7e1a96dc3cae2a26478e'),
    'mcipc1': ('工控机IPC/C系列/MCIPC1 Brochure.pdf', '4c76c6ecea61f537278167160fc4770b7f2dc9e9a2f5fe84875c35cb61776975'),
    'mcipc8': ('工控机IPC/C系列/MCIPC8 brochure.pdf', 'dfbc4eeb8a7d54524401d1994707dfe496156801c08e8dd293ab754e2c1124ec'),
    'mcipc2': ('工控机IPC/C系列/MCIPC2 brochure.pdf', '38808c1e74575452f365ccd91cc13bbf6af1f80e2783d656c3baa0affe0d433e'),
    'mcipcd5': ('工控机IPC/D系列/MCIPCD5 Brochure.pdf', 'e344b609b6524b2191bf9eb65006ae9f84309b5c8153814cdba7182e4fb8f259'),
}

# A website rename does not rename the original brochure or its stable image URLs.
PRODUCT_RENAMES = {'mcipc1': ('mcipc8-hdmi', 'MCIPC8-HDMI')}


def rename_model_copy(value, old_name, new_name, key=''):
    if key == 'sourceBrochures':
        return value
    if isinstance(value, str):
        return value if value.startswith('/assets/') else value.replace(old_name, new_name)
    if isinstance(value, list):
        return [rename_model_copy(item, old_name, new_name, key) for item in value]
    if isinstance(value, dict):
        return {name: rename_model_copy(item, old_name, new_name, name) for name, item in value.items()}
    return value


def make(mid, series, tagline, description, highlights, defs, features, variants=None):
    name=mid.upper(); relative,fingerprint=SOURCES[mid]
    assert sha256((SOURCE/relative).read_bytes()).hexdigest()==fingerprint, f'Source changed: {relative}'
    family=variants is not None
    def copy(lang):
        return {'tagline':tagline[lang], 'description':description[lang], 'highlights':[x[lang] for x in highlights],
                'specs':rows(defs if family else [('Model',T(name)),*defs],lang),
                'galleryCards':[] if family else gallery(name,mid,lang,mid=='mcipcbp1'),
                'specificationHeading':name+' - '+L('Hardware specifications','Technische Daten','Caractéristiques techniques','Specifiche hardware','Especificaciones de hardware')[lang],
                'featureHeading':L('Industrial interfaces and configuration choices','Industrieanschlüsse und Optionen','Interfaces industrielles et configurations','Interfacce industriali e configurazioni','Interfaces industriales y configuraciones')[lang],
                'advantageSummary':L('Match the platform, memory, storage and interfaces to the confirmed configuration.','Plattform, Speicher und Anschlüsse nach der bestätigten Konfiguration auswählen.','Choisissez plateforme, mémoire, stockage et ports selon la configuration confirmée.','Scegli piattaforma, memoria, archiviazione e porte secondo la configurazione confermata.','Elige plataforma, memoria, almacenamiento y puertos según la configuración confirmada.')[lang],
                'features':[{'icon':icon,'title':title[lang],'description':text[lang]} for icon,title,text in features]}
    product={'id':mid,'name':name,'category':'industrial-mini-pc','series':series,'published':True,
             'image':f'/assets/products/industrial/october/{mid}/main.webp',
             'galleryImages':[] if family else [f'/assets/products/industrial/october/{mid}/{s}.webp' for s in ['front','rear']],
             'sourceBrochures':[relative],'sourceSha256':fingerprint, **copy('en'),
             'translations':{lang:copy(lang) for lang in LANGS[1:]}}
    if family:
        product['skus']=[]
        for key,legacy,label,specific,image_id in variants:
            all_defs=[('Model',T(legacy)),*defs,*specific]
            order=['Model','Series','Mainboard series','CPU','Memory','Graphics','Graphics / NPU','Display','DisplayPort','Network','USB','Serial','Storage','Storage expansion','Expansion','Power','Power connector','Cooling','System','OS','Operating Environment','Chassis','Dimensions']
            all_defs.sort(key=lambda row: order.index(row[0]) if row[0] in order else len(order))
            product['skus'].append({'key':key,'label':label['en'],'labelTranslations':{lang:label[lang] for lang in LANGS[1:]},
                'legacyNames':[legacy],'image':f'/assets/products/industrial/october/{image_id}/main.webp','specs':rows(all_defs,'en'),
                'galleryCards':gallery(legacy,image_id,'en'),
                'translations':{lang:{'specs':rows(all_defs,lang),'galleryCards':gallery(legacy,image_id,lang)} for lang in LANGS[1:]}})
    if mid in PRODUCT_RENAMES:
        canonical_id, canonical_name = PRODUCT_RENAMES[mid]
        product = rename_model_copy(product, name, canonical_name)
        product['id'] = canonical_id
        product['legacyNames'] = [name]
    return product


core_ram=T('{4th/5th}: 1 x DDR3L SO-DIMM, max. 8 GB; {6th-11th}: 2 x DDR4 SO-DIMM ({6th-8th}: max. 32 GB; {10th/11th}: max. 64 GB); {12th/13th}: 2 x DDR5 SO-DIMM, max. 64 GB')
core_lan=T('{4th-10th}: 2 x Intel i210 / i211 / i219 Gigabit LAN; {11th-13th}: 2 x Intel I225-V / I226-V 2.5GbE')
core_usb=T('{4th/5th}: 2 x USB 3.0 + 4 x USB 2.0; {6th-13th}: 4 x USB 3.0 + 2 x USB 2.0')
core_serial=T('6 x DB9 RS-232 COM; 4 {support} RS-422/485')
core_storage=T('1 x mSATA; M.2 2280: SATA / NVMe ({6th-10th}), {only} NVMe ({11th-13th}); 1 x HDD / SSD')
core_wireless=T('{4th-11th}: Mini PCIe ({half-size}); {12th/13th}: M.2 2230 (Wi-Fi / Bluetooth)')
core_common=[('CPU',T('Intel Core i3 / i5 / i7, 4th-13th Gen')),('Memory',core_ram),('Network',core_lan),('USB',core_usb),('Serial',core_serial),
    ('GPIO',T('14 GPIO: 7 {inputs} + 7 {outputs}')),
    ('Controls',L('Power, Reset and Clear CMOS buttons; ATX / AT switch; 1 x PS/2','Power-, Reset- und Clear-CMOS-Tasten; ATX/AT-Schalter; 1 x PS/2','Boutons Power, Reset et Clear CMOS ; commutateur ATX / AT ; 1 x PS/2','Pulsanti Power, Reset e Clear CMOS; selettore ATX / AT; 1 x PS/2','Botones Power, Reset y Clear CMOS; selector ATX / AT; 1 x PS/2')),
    ('Audio',L('Headphone and microphone jacks','Kopfhörer- und Mikrofonbuchsen','Prises casque et microphone','Prese cuffie e microfono','Conectores de auriculares y micrófono')),
    ('Antennas',L('2 antenna connectors','2 Antennenanschlüsse','2 connecteurs d’antenne','2 connettori antenna','2 conectores de antena')),
    ('Storage',core_storage),('Wireless',core_wireless),
    ('Cellular / SIM',L('1 x full-size Mini PCIe with SIM slot for 3G / 4G','1 x Full-Size Mini PCIe mit SIM-Steckplatz für 3G / 4G','1 x Mini PCIe plein format avec emplacement SIM pour 3G / 4G','1 x Mini PCIe full-size con slot SIM per 3G / 4G','1 x Mini PCIe de tamaño completo con ranura SIM para 3G / 4G')),
    ('Monitoring',L('Watchdog; one-key recovery; diskless boot','Watchdog; Wiederherstellung per Taste; Start ohne lokales Laufwerk','Watchdog ; restauration par bouton ; démarrage sans disque','Watchdog; ripristino con pulsante; avvio senza disco','Watchdog; recuperación con un botón; arranque sin disco')),
    ('Power',L('9-36 V DC; 3-pin Phoenix terminal','9-36 V DC; 3-polige Phoenix-Klemme','9-36 V CC ; bornier Phoenix 3 broches','9-36 V CC; morsetto Phoenix a 3 poli','9-36 V CC; terminal Phoenix de 3 pines')),
    ('Cooling',FANLESS),('Mounting',L('Desktop or wall mounting','Tisch- oder Wandmontage','Bureau ou montage mural','Desktop o montaggio a parete','Sobremesa o montaje en pared')),
    ('Dimensions',T('249 x 150 x 86 mm')),('Weight',T('2.2 kg')),
    ('System',T('Windows 7 / 10 / 11; WES 7 / 10; Linux ({platform-dependent})')),
    ('Operating temperature',T('-20°C ... +60°C')),('Storage temperature',T('-30°C ... +70°C')),('Humidity',HUMIDITY),
    ('Configuration notes',join(L('Memory, USB, LAN and storage depend on CPU generation.','RAM, USB, LAN und Speicher hängen von der CPU-Generation ab.','Mémoire, USB, LAN et stockage dépendent de la génération CPU.','Memoria, USB, LAN e archiviazione dipendono dalla generazione CPU.','Memoria, USB, LAN y almacenamiento dependen de la generación CPU.'),REFERENCE))]
products=[]
for mid,display in [('mcipc1',T('2 x HDMI')),('mcipc8',T('1 x HDMI + 1 x VGA'))]:
    name=mid.upper()
    tagline=L(f'{name}: six COM ports and 4th-13th Gen Intel Core options',f'{name}: sechs COM-Ports und Intel Core der 4. bis 13. Generation',f'{name} : six ports COM et Intel Core de 4e à 13e génération',f'{name}: sei porte COM e Intel Core dalla 4a alla 13a generazione',f'{name}: seis puertos COM e Intel Core de 4.ª a 13.ª generación')
    desc=L(f'{name} is a fanless industrial PC with six DB9 serial ports, 14 GPIO channels and 9-36 V DC input. Display connections: {display["en"]}. Memory, USB, LAN speed and storage follow the CPU generation; compare the complete platform details below.',f'{name} ist ein lüfterloser Industrie-PC mit sechs DB9-Ports, 14 GPIO-Kanälen und 9-36 V DC. Bildausgänge: {display["de"]}. RAM, USB, LAN-Geschwindigkeit und Speicher richten sich nach der CPU-Generation; Details stehen in der Tabelle.',f'{name} est un PC industriel sans ventilateur avec six ports DB9, 14 GPIO et une entrée 9-36 V CC. Sorties vidéo : {display["fr"]}. Mémoire, USB, débit LAN et stockage varient selon la génération CPU ; consultez le tableau.',f'{name} è un PC industriale senza ventola con sei porte DB9, 14 GPIO e ingresso 9-36 V CC. Uscite video: {display["it"]}. Memoria, USB, velocità LAN e archiviazione dipendono dalla generazione CPU; consulta la tabella.',f'{name} es un PC industrial sin ventilador con seis puertos DB9, 14 GPIO y entrada de 9-36 V CC. Salidas de vídeo: {display["es"]}. Memoria, USB, velocidad LAN y almacenamiento dependen de la generación CPU; consulta la tabla.')
    products.append(make(mid,'C',tagline,desc,[T('Intel Core 4th-13th Gen'),T('6 x COM; 14 GPIO'),display,T('9-36 V DC')],core_common[:2]+[('Display',display)]+core_common[2:],[('Cpu',PLATFORM,core_ram),('Network',INTERFACES,join(core_lan,core_serial)),('HardDrive',STORAGE,core_storage)]))

# BP1: six serial channels do not mean six external DB9 connectors.
bp_cpu=T('Intel J4125 / J6412; Core i3 / i5 / i7 (8th / 10th / 11th Gen)')
bp_ram=T('DDR4 SO-DIMM: J4125 / J6412: 1 {slot}; {Core platforms}: 2 {slots}')
bp_lan=L('2 x Intel I225-V 2.5GbE RJ45; optional expansion to 4 LAN ports','2 x Intel I225-V 2.5GbE RJ45; optional auf 4 LAN-Ports erweiterbar','2 x RJ45 Intel I225-V 2,5GbE ; extension à 4 ports LAN en option','2 x RJ45 Intel I225-V 2.5GbE; espansione opzionale a 4 porte LAN','2 x RJ45 Intel I225-V 2.5GbE; ampliación opcional a 4 puertos LAN')
bp_usb=T('J4125 / J6412 / {11th}: 4 x USB 3.0 + 2 x USB 2.0; {8th/10th}: 2 x USB 3.0 + 4 x USB 2.0')
bp_serial=L('6 x RS-232: 2 x DB9 + 4 via expansion I/O; 2 support RS-422/485','6 x RS-232: 2 x DB9 + 4 über Erweiterungs-I/O; 2 unterstützen RS-422/485','6 x RS-232 : 2 x DB9 + 4 via E/S d’extension ; 2 compatibles RS-422/485','6 x RS-232: 2 x DB9 + 4 tramite I/O di espansione; 2 supportano RS-422/485','6 x RS-232: 2 x DB9 + 4 mediante E/S de expansión; 2 admiten RS-422/485')
bp_storage=L('M.2 SATA, M.2 NVMe and a 2.5-inch HDD / SSD bay','M.2 SATA, M.2 NVMe und ein 2,5-Zoll-HDD-/SSD-Schacht','M.2 SATA, M.2 NVMe et une baie HDD / SSD 2,5 pouces','M.2 SATA, M.2 NVMe e vano HDD / SSD da 2,5 pollici','M.2 SATA, M.2 NVMe y una bahía HDD / SSD de 2,5 pulgadas')
bp_defs=[('CPU',bp_cpu),('Memory',bp_ram),('Display',T('1 x HDMI')),('Network',bp_lan),('USB',bp_usb),('Serial',bp_serial),('GPIO',T('10 GPIO')),
    ('Controls',L('1 remote power-switch input','1 Eingang für externen Einschalttaster','1 entrée de commande d’alimentation à distance','1 ingresso interruttore di accensione remoto','1 entrada de interruptor de encendido remoto')),
    ('Audio',L('Headphone jack','Kopfhörerbuchse','Prise casque','Presa cuffie','Conector de auriculares')),
    ('Antennas',L('5 connectors for Wi-Fi / Bluetooth / cellular','5 Anschlüsse für WLAN / Bluetooth / Mobilfunk','5 connecteurs pour Wi-Fi / Bluetooth / cellulaire','5 connettori per Wi-Fi / Bluetooth / rete mobile','5 conectores para Wi-Fi / Bluetooth / red móvil')),
    ('M.2 SATA',T('1 x M.2 2242 / 2260 / 2280 SATA')),('M.2 NVMe',T('1 x M.2 2280 NVMe')),
    ('Drive bay',L('1 x 2.5-inch HDD / SSD bay','1 x 2,5-Zoll-HDD-/SSD-Schacht','1 x baie HDD / SSD 2,5 pouces','1 x vano HDD / SSD da 2,5 pollici','1 x bahía HDD / SSD de 2,5 pulgadas')),
    ('Cellular / SIM',L('M.2 3042 / 3052 for 3G / 4G / 5G; onboard SIM slot','M.2 3042 / 3052 für 3G / 4G / 5G; SIM-Steckplatz auf der Platine','M.2 3042 / 3052 pour 3G / 4G / 5G ; emplacement SIM intégré','M.2 3042 / 3052 per 3G / 4G / 5G; slot SIM sulla scheda','M.2 3042 / 3052 para 3G / 4G / 5G; ranura SIM en placa')),
    ('Wireless',T('M.2 2230: Wi-Fi / Bluetooth')),('Monitoring',L('Watchdog timer; diskless boot','Watchdog-Timer; Start ohne lokales Laufwerk','Temporisateur watchdog ; démarrage sans disque','Timer watchdog; avvio senza disco','Temporizador watchdog; arranque sin disco')),
    ('Power',L('9-36 V DC; 4-pin aviation connector','9-36 V DC; 4-poliger Rundsteckverbinder','9-36 V CC ; connecteur aviation 4 broches','9-36 V CC; connettore aviation a 4 poli','9-36 V CC; conector de aviación de 4 pines')),
    ('Cooling',FANLESS),('Mounting',L('Desktop','Tischaufstellung','Bureau','Desktop','Sobremesa')),('Dimensions',T('300 x 155 x 50 mm')),('Weight',T('1.8 kg')),('System',T('Windows 10 / WES 10 / Linux')),
    ('Operating temperature',T('-20°C ... +60°C')),('Storage temperature',T('-30°C ... +70°C')),('Humidity',HUMIDITY),
    ('Configuration notes',join(L('RAM slots and USB mix depend on the CPU platform; four LAN ports are optional.','RAM-Steckplätze und USB hängen von der CPU-Plattform ab; vier LAN-Ports sind optional.','Emplacements mémoire et USB selon la plateforme CPU ; quatre ports LAN en option.','Slot RAM e USB secondo la piattaforma CPU; quattro LAN sono opzionali.','Ranuras RAM y USB según plataforma CPU; cuatro LAN son opcionales.'),REFERENCE))]
products.append(make('mcipcbp1','B',L('Fanless industrial edge PC with 2.5GbE and expansion I/O','Lüfterloser Industrie-PC mit 2.5GbE und Erweiterungs-I/O','PC industriel sans ventilateur avec 2,5GbE et E/S d’extension','PC industriale senza ventola con 2.5GbE e I/O di espansione','PC industrial sin ventilador con 2.5GbE y E/S de expansión'),L('MCIPCBP1 offers J4125, J6412 and selected Intel Core platforms in a fanless aluminum chassis. Dual Intel I225-V 2.5GbE, six RS-232 channels (two DB9 and four through expansion I/O), 10 GPIO and 9-36 V input support equipment integration. RAM and USB depend on the platform; four LAN ports are optional.','MCIPCBP1 bietet J4125, J6412 und Intel-Core-Plattformen im lüfterlosen Aluminiumgehäuse. Zwei Intel-I225-V-2.5GbE-Ports, sechs RS-232-Kanäle (zwei DB9 und vier über Erweiterungs-I/O), 10 GPIO und 9-36 V unterstützen die Geräteintegration. RAM und USB sind plattformabhängig; vier LAN-Ports sind optional.','MCIPCBP1 propose J4125, J6412 et Intel Core dans un boîtier aluminium sans ventilateur. Deux Intel I225-V 2,5GbE, six RS-232 (deux DB9 et quatre via E/S d’extension), 10 GPIO et 9-36 V facilitent l’intégration. Mémoire et USB selon plateforme ; quatre LAN en option.','MCIPCBP1 offre J4125, J6412 e Intel Core in uno chassis in alluminio senza ventola. Due Intel I225-V 2.5GbE, sei RS-232 (due DB9 e quattro tramite I/O di espansione), 10 GPIO e 9-36 V supportano l’integrazione. RAM e USB dipendono dalla piattaforma; quattro LAN sono opzionali.','MCIPCBP1 ofrece J4125, J6412 e Intel Core en un chasis de aluminio sin ventilador. Dos Intel I225-V 2.5GbE, seis RS-232 (dos DB9 y cuatro mediante E/S de expansión), 10 GPIO y 9-36 V facilitan la integración. RAM y USB según plataforma; cuatro LAN opcionales.'),[T('Intel J4125 / J6412 / Core'),T('2 x Intel I225-V 2.5GbE'),T('6 x RS-232; 10 GPIO'),T('9-36 V DC')],bp_defs,[('Cpu',PLATFORM,join(bp_cpu,bp_ram)),('Network',INTERFACES,join(bp_lan,bp_serial)),('HardDrive',STORAGE,bp_storage)]))

# MCIPC2: A/B differences remain in exact SKU rows, never inferred from photos.
c2_shared=[('Display',T('HDMI + VGA')),('GPIO',T('10 GPIO')),
    ('Audio',L('Audio output and microphone input','Audioausgang und Mikrofoneingang','Sortie audio et entrée microphone','Uscita audio e ingresso microfono','Salida de audio y entrada de micrófono')),
    ('Wireless',T('Mini PCIe ({half-size}): Wi-Fi / Bluetooth; Mini PCIe ({full-size}): 3G / 4G')),
    ('Power',T('12 V DC')),('Enclosure',L('Aluminum','Aluminium','Aluminium','Alluminio','Aluminio')),('Storage temperature',T('-30°C ... +70°C')),
    ('Configuration notes',join(L('The brochure uses the same reference photos for Types A and B; dimensions and ports follow the selected Type.','Die Broschüre nutzt dieselben Referenzfotos für Typ A und B; Maße und Anschlüsse nach gewähltem Typ.','La brochure utilise les mêmes photos de référence pour les types A et B ; dimensions et ports selon le type choisi.','La brochure usa le stesse foto per i tipi A e B; dimensioni e porte secondo il tipo selezionato.','El folleto utiliza las mismas fotos para los tipos A y B; dimensiones y puertos según el tipo elegido.'),REFERENCE))]
c2a=[('CPU',T('Intel Atom J1900')),('Memory',T('DDR3L SO-DIMM, {up to} 8 GB')),('Network',T('2 x Realtek RTL8111H Gigabit LAN (1000 Mbps)')),('USB',T('1 x USB 3.0 + 5 x USB 2.0')),
    ('Serial',L('6 x COM; 2 configurable as RS-232/422/485','6 x COM; 2 als RS-232/422/485 konfigurierbar','6 x COM ; 2 configurables en RS-232/422/485','6 x COM; 2 configurabili RS-232/422/485','6 x COM; 2 configurables como RS-232/422/485')),
    ('Storage',T('mSATA')),('Cellular / SIM',L('3G / 4G via full-size Mini PCIe; SIM slot not specified','3G / 4G über Full-Size Mini PCIe; SIM-Steckplatz nicht angegeben','3G / 4G via Mini PCIe plein format ; emplacement SIM non précisé','3G / 4G tramite Mini PCIe full-size; slot SIM non specificato','3G / 4G mediante Mini PCIe de tamaño completo; ranura SIM no especificada')),
    ('Monitoring',L('Programmable watchdog: 1-255 seconds','Programmierbarer Watchdog: 1-255 Sekunden','Watchdog programmable : 1-255 secondes','Watchdog programmabile: 1-255 secondi','Watchdog programable: 1-255 segundos')),
    ('Dimensions',T('150 x 135 x 49 mm')),('Weight',T('0.64 kg')),('System',T('Windows 7 / 8 / 10; WES 7; Linux')),('Operating temperature',T('-20°C ... +70°C')),('Humidity',T('95% RH @ 40°C'))]
c2b=[('CPU',T('Intel Core i3-6157U / i3-7100U / i3-8130U')),('Memory',T('DDR4 SO-DIMM, {up to} 16 GB')),('Network',T('2 x Intel i211 / i210 Gigabit LAN (1000 Mbps)')),('USB',T('4 x USB 3.0 + 2 x USB 2.0')),('Serial',T('6 x COM; 2 {support} RS-422/485')),
    ('Storage',L('mSATA + 2.5-inch HDD / SSD','mSATA + 2,5-Zoll-HDD / SSD','mSATA + HDD / SSD 2,5 pouces','mSATA + HDD / SSD da 2,5 pollici','mSATA + HDD / SSD de 2,5 pulgadas')),
    ('Cellular / SIM',L('3G / 4G via full-size Mini PCIe; SIM slot','3G / 4G über Full-Size Mini PCIe; SIM-Steckplatz','3G / 4G via Mini PCIe plein format ; emplacement SIM','3G / 4G tramite Mini PCIe full-size; slot SIM','3G / 4G mediante Mini PCIe de tamaño completo; ranura SIM')),
    ('Monitoring',L('Watchdog supported','Watchdog unterstützt','Watchdog pris en charge','Watchdog supportato','Watchdog compatible')),
    ('Dimensions',T('180 x 120 x 54 mm')),('Weight',T('1.0 kg')),('System',T('Windows 7 / 8 / 10; WES 7 / 10; Linux')),('Operating temperature',T('-20°C ... +60°C')),('Humidity',T('10-90% RH @ 30°C'))]
c2_desc=L('Choose Type A (J1900, DDR3L up to 8 GB) or Type B (Intel Core i3, DDR4 up to 16 GB). Both provide six COM ports, HDMI plus VGA, dual Gigabit LAN and 12 V DC. Network controllers, USB, storage, watchdog, dimensions and operating limits follow the selected Type.','Typ A bietet J1900 und DDR3L bis 8 GB, Typ B Intel Core i3 und DDR4 bis 16 GB. Beide haben sechs COM-Ports, HDMI und VGA, zwei Gigabit-LAN-Ports und 12 V DC. Netzwerkcontroller, USB, Speicher, Watchdog, Maße und Betriebsgrenzen hängen vom Typ ab.','Choisissez le type A (J1900, DDR3L jusqu’à 8 Go) ou B (Intel Core i3, DDR4 jusqu’à 16 Go). Les deux proposent six COM, HDMI et VGA, deux LAN Gigabit et 12 V CC. Contrôleurs, USB, stockage, watchdog, dimensions et limites selon le type.','Scegli tipo A (J1900, DDR3L fino a 8 GB) o B (Intel Core i3, DDR4 fino a 16 GB). Entrambi offrono sei COM, HDMI e VGA, due LAN Gigabit e 12 V CC. Controller, USB, archiviazione, watchdog, dimensioni e limiti variano per tipo.','Elige tipo A (J1900, DDR3L hasta 8 GB) o B (Intel Core i3, DDR4 hasta 16 GB). Ambos ofrecen seis COM, HDMI y VGA, doble LAN Gigabit y 12 V CC. Controladores, USB, almacenamiento, watchdog, dimensiones y límites dependen del tipo.')
products.append(make('mcipc2','C',L('Six-COM industrial PC with J1900 or Intel Core i3 configurations','Industrie-PC mit sechs COM und J1900- oder Core-i3-Konfiguration','PC industriel à six COM avec configurations J1900 ou Core i3','PC industriale a sei COM con configurazioni J1900 o Core i3','PC industrial de seis COM con configuraciones J1900 o Core i3'),c2_desc,[T('J1900 / Intel Core i3'),T('6 x COM'),T('2 x Gigabit LAN'),T('12 V DC')],c2_shared,[('Cpu',PLATFORM,join(c2a[1][1],c2b[1][1])),('Network',INTERFACES,L('Both Types: six COM, dual Gigabit LAN, HDMI and VGA.','Beide Typen: sechs COM, zwei Gigabit-LAN-Ports, HDMI und VGA.','Les deux types : six COM, deux LAN Gigabit, HDMI et VGA.','Entrambi i tipi: sei COM, due LAN Gigabit, HDMI e VGA.','Ambos tipos: seis COM, doble LAN Gigabit, HDMI y VGA.')),('HardDrive',STORAGE,L('Type A: mSATA; Type B: mSATA plus 2.5-inch HDD / SSD.','Typ A: mSATA; Typ B: mSATA plus 2,5-Zoll-HDD / SSD.','Type A : mSATA ; type B : mSATA et HDD / SSD 2,5 pouces.','Tipo A: mSATA; tipo B: mSATA e HDD / SSD da 2,5 pollici.','Tipo A: mSATA; tipo B: mSATA y HDD / SSD de 2,5 pulgadas.'))],[('type-a','MCIPC2A',L('Type A · J1900 · DDR3L · 6 COM','Typ A · J1900 · DDR3L · 6 COM','Type A · J1900 · DDR3L · 6 COM','Tipo A · J1900 · DDR3L · 6 COM','Tipo A · J1900 · DDR3L · 6 COM'),c2a,'mcipc2a'),('type-b','MCIPC2B',L('Type B · Intel Core i3 · DDR4 · 6 COM','Typ B · Intel Core i3 · DDR4 · 6 COM','Type B · Intel Core i3 · DDR4 · 6 COM','Tipo B · Intel Core i3 · DDR4 · 6 COM','Tipo B · Intel Core i3 · DDR4 · 6 COM'),c2b,'mcipc2b')]))

d5_display=L('2 x HDMI 2.0, up to 4K/60 Hz; internal eDP header, up to 1080p/60 Hz','2 x HDMI 2.0, bis 4K/60 Hz; interner eDP-Anschluss, bis 1080p/60 Hz','2 x HDMI 2.0, jusqu’à 4K/60 Hz ; connecteur eDP interne, jusqu’à 1080p/60 Hz','2 x HDMI 2.0, fino a 4K/60 Hz; connettore eDP interno, fino a 1080p/60 Hz','2 x HDMI 2.0, hasta 4K/60 Hz; conector eDP interno, hasta 1080p/60 Hz')
d5_storage=L('1 x SATA 3.0 (6 Gb/s); 1 x M.2 2280 with SATA / PCIe auto-switching','1 x SATA 3.0 (6 Gb/s); 1 x M.2 2280 mit automatischer SATA-/PCIe-Umschaltung','1 x SATA 3.0 (6 Gb/s) ; 1 x M.2 2280 avec commutation automatique SATA / PCIe','1 x SATA 3.0 (6 Gb/s); 1 x M.2 2280 con commutazione automatica SATA / PCIe','1 x SATA 3.0 (6 Gb/s); 1 x M.2 2280 con conmutación automática SATA / PCIe')
d5_lan=L('4 x Intel I226-V RJ45; LAN1 may use an internal pin header','4 x Intel I226-V RJ45; LAN1 kann als interner Pfostenstecker ausgeführt sein','4 x RJ45 Intel I226-V ; LAN1 peut utiliser un connecteur interne','4 x RJ45 Intel I226-V; LAN1 può usare un connettore interno','4 x RJ45 Intel I226-V; LAN1 puede utilizar un conector interno')
d5_defs=[('CPU',T('Intel N100 / Core i3-N305')),('Graphics',T('Intel UHD Graphics')),('Memory',T('1 x DDR5-4800 SO-DIMM, {up to} 32 GB')),('Display',d5_display),('Storage',d5_storage),('Network',d5_lan),
    ('USB',L('4 x USB 2.0 (header option) + 2 x USB 3.2 Gen 2','4 x USB 2.0 (interne Header-Option) + 2 x USB 3.2 Gen 2','4 x USB 2.0 (option par connecteur interne) + 2 x USB 3.2 Gen 2','4 x USB 2.0 (opzione su connettore interno) + 2 x USB 3.2 Gen 2','4 x USB 2.0 (opción de conector interno) + 2 x USB 3.2 Gen 2')),
    ('Serial',L('2 x RS-232 COM; COM2 supports RS-485; COM1 RJ45 option','2 x RS-232 COM; COM2 unterstützt RS-485; COM1 optional als RJ45','2 x COM RS-232 ; COM2 compatible RS-485 ; COM1 RJ45 en option','2 x COM RS-232; COM2 supporta RS-485; COM1 RJ45 opzionale','2 x COM RS-232; COM2 admite RS-485; COM1 RJ45 opcional')),
    ('Wireless',T('M.2 E-key 2230 / Mini PCIe: Wi-Fi / 4G')),('Cellular / SIM',T('1 x Nano SIM')),('GPIO',T('8 GPIO')),
    ('Monitoring',L('Watchdog: 4-255 seconds','Watchdog: 4-255 Sekunden','Watchdog : 4-255 secondes','Watchdog: 4-255 secondi','Watchdog: 4-255 segundos')),
    ('BIOS',T('AMI 128 Mb; Auto Power On; PXE; Wake-on-LAN')),
    ('JP3',L('(1-2): auto power-on; (2-3): normal','(1-2): automatisches Einschalten; (2-3): normal','(1-2) : mise sous tension automatique ; (2-3) : normal','(1-2): accensione automatica; (2-3): normale','(1-2): encendido automático; (2-3): normal')),
    ('TPM',L('TPM 2.0 hardware encryption, optional','TPM 2.0 Hardwareverschlüsselung, optional','Chiffrement matériel TPM 2.0, en option','Cifratura hardware TPM 2.0, opzionale','Cifrado por hardware TPM 2.0, opcional')),
    ('Power',L('12 V DC; 5.5 x 2.5 mm jack','12 V DC; Buchse 5,5 x 2,5 mm','12 V CC ; prise 5,5 x 2,5 mm','12 V CC; presa 5,5 x 2,5 mm','12 V CC; conector de 5,5 x 2,5 mm')),
    ('Dimensions',T('148 x 125 x 56 mm')),('PCB dimensions',T('120 x 120 mm')),
    ('Environment',L('Operating / storage: -20°C ... +60°C; 0-90% RH, non-condensing','Betrieb / Lagerung: -20°C ... +60°C; 0-90% rF, nicht kondensierend','Fonctionnement / stockage : -20°C ... +60°C ; 0-90 % HR, sans condensation','Funzionamento / stoccaggio: -20°C ... +60°C; 0-90% UR, senza condensa','Funcionamiento / almacenamiento: -20°C ... +60°C; 0-90 % HR, sin condensación')),
    ('Configuration notes',join(L('Electrical specifications are shared; installed fan and enclosure appearance follow the selected option.','Elektrische Daten sind gemeinsam; eingebauter Lüfter und Aussehen nach gewählter Option.','Caractéristiques électriques communes ; ventilateur installé et aspect selon l’option choisie.','Specifiche elettriche condivise; ventola installata e aspetto secondo l’opzione selezionata.','Especificaciones eléctricas compartidas; ventilador instalado y aspecto según la opción elegida.'),REFERENCE))]
d5_standard=[('Cooling',FANLESS),('Fan',L('4-pin 12 V fan header; fan-equipped enclosure optional','4-poliger 12-V-Lüfteranschluss; Gehäuse mit Lüfter optional','Connecteur ventilateur 4 broches 12 V ; boîtier avec ventilateur en option','Connettore ventola a 4 poli 12 V; chassis con ventola opzionale','Conector de ventilador de 4 pines y 12 V; chasis con ventilador opcional'))]
d5_fan=[('Cooling',FAN),('Fan',L('4-pin 12 V controlled system fan installed','Geregelter 12-V-Systemlüfter mit 4-poligem Anschluss eingebaut','Ventilateur système régulé 4 broches 12 V installé','Ventola di sistema controllata a 4 poli 12 V installata','Ventilador de sistema controlado de 4 pines y 12 V instalado'))]
products.append(make('mcipcd5','D',L('Intel N100 / i3-N305 industrial PC with two cooling options','Industrie-PC mit Intel N100 / i3-N305 und zwei Kühloptionen','PC industriel Intel N100 / i3-N305 avec deux refroidissements','PC industriale Intel N100 / i3-N305 con due opzioni di raffreddamento','PC industrial Intel N100 / i3-N305 con dos opciones de refrigeración'),L('Choose standard fanless MCIPCD5 or optional fan-equipped MCIPCD5F. Both share Intel N100 / i3-N305, DDR5 up to 32 GB, four Intel I226-V interfaces and dual COM. The complete table distinguishes internal headers, optional TPM 2.0 and the installed fan.','Wählen Sie das lüfterlose MCIPCD5 oder das optionale MCIPCD5F mit Lüfter. Beide teilen Intel N100 / i3-N305, DDR5 bis 32 GB, vier Intel-I226-V-Schnittstellen und zwei COM-Ports. Die Tabelle unterscheidet interne Anschlüsse, optionales TPM 2.0 und den eingebauten Lüfter.','Choisissez MCIPCD5 sans ventilateur ou MCIPCD5F avec ventilateur en option. Les deux partagent Intel N100 / i3-N305, DDR5 jusqu’à 32 Go, quatre Intel I226-V et deux COM. Le tableau distingue connecteurs internes, TPM 2.0 optionnel et ventilateur installé.','Scegli MCIPCD5 senza ventola o MCIPCD5F con ventola opzionale. Entrambi condividono Intel N100 / i3-N305, DDR5 fino a 32 GB, quattro Intel I226-V e due COM. La tabella distingue connettori interni, TPM 2.0 opzionale e ventola installata.','Elige MCIPCD5 sin ventilador o MCIPCD5F con ventilador opcional. Ambos comparten Intel N100 / i3-N305, DDR5 hasta 32 GB, cuatro Intel I226-V y dos COM. La tabla distingue conectores internos, TPM 2.0 opcional y ventilador instalado.'),[T('Intel N100 / i3-N305'),T('DDR5; max. 32 GB'),T('4 x Intel I226-V; 2 COM'),L('Fanless / optional fan','Lüfterlos / optionaler Lüfter','Sans / avec ventilateur en option','Senza ventola / ventola opzionale','Sin ventilador / ventilador opcional')],d5_defs,[('Cpu',PLATFORM,d5_defs[2][1]),('Network',INTERFACES,join(d5_display,d5_lan)),('HardDrive',STORAGE,d5_storage)],[('standard','MCIPCD5',L('MCIPCD5 · Fanless','MCIPCD5 · Lüfterlos','MCIPCD5 · Sans ventilateur','MCIPCD5 · Senza ventola','MCIPCD5 · Sin ventilador'),d5_standard,'mcipcd5'),('fan','MCIPCD5F',L('MCIPCD5F · Fan-cooled','MCIPCD5F · Mit Lüfter','MCIPCD5F · Avec ventilateur','MCIPCD5F · Con ventola','MCIPCD5F · Con ventilador'),d5_fan,'mcipcd5f')]))


def canvas(image, size, bounds):
    image=image.convert('RGBA'); scale=min(bounds[0]/image.width,bounds[1]/image.height)
    image=image.resize((round(image.width*scale),round(image.height*scale)),Image.Resampling.LANCZOS)
    result=Image.new('RGBA',size,'white'); result.alpha_composite(image,((size[0]-image.width)//2,(size[1]-image.height)//2))
    return result.convert('RGB')


if __name__=='__main__':
    loader=spec_from_file_location('pdf_product_images',ROOT/'scripts/pdf-product-images.py'); pdf_images=module_from_spec(loader); loader.loader.exec_module(pdf_images)
    for product in products:
        source_id = product.get('legacyNames', [product['id']])[0].lower()
        reader=PdfReader(SOURCE/SOURCES[source_id][0]); pages=[pdf_images.rendered_images(p) for p in reader.pages]
        image_sets=[(source_id,pages[0])]
        if product['id']=='mcipc2': image_sets += [('mcipc2a',pages[0]),('mcipc2b',pages[0])]
        if product['id']=='mcipcd5': image_sets += [('mcipcd5f',pages[1])]
        for image_id,views in image_sets:
            assert len(views)==2,(image_id,len(views))
            target=ROOT/f'public/assets/products/industrial/october/{image_id}'; target.mkdir(parents=True,exist_ok=True)
            for side,view in zip(['front','rear'],views): canvas(view,(1200,800),(1080,640)).save(target/f'{side}.webp','WEBP',quality=93)
            canvas(views[0],(1200,1200),(1056,960)).save(target/'main.webp','WEBP',quality=93)
        (ROOT/f'content/products/items/{product["id"]}.json').write_text(json.dumps(product,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
        print(product['name'],'written with five-language copy;',len(product.get('skus',[])),'configurations')
