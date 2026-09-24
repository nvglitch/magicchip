import records from './certificates.json';

export const certificates = records;
export const certificateFileCount = records.length * 2;

export const certificateCopy = {
  en: {
    title: 'Product Certificates & Test Reports',
    intro: 'CE EMC, CE LVD, FCC SDoC and RoHS documents issued by Shenzhen HyCert. Open a certificate preview or download the original PDF and its supporting test report.',
    scope: 'These documents concern the MINI PC models and tested samples specified in each PDF. Refer to the original documents for model coverage and test conditions.',
    issued: 'Issued', preview: 'View certificate', download: 'Download certificate', report: 'Download test report', page: 'page', pages: 'pages', details: 'Standards & listed models', models: 'Models listed in the certificate', standards: 'Referenced standards', files: 'PDF files',
    names: ['EMC Certificate of Compliance', 'Verification of LVD Compliance', 'FCC Supplier’s Declaration of Conformity', 'RoHS Certificate of Conformity'],
    downloads: 'Downloads', downloadsIntro: 'Download original product compliance documents and supporting laboratory reports.',
    displayIntro: 'Product compliance documents for the MINI PC models listed in each certificate.',
  },
  de: {
    title: 'Produktzertifikate & Prüfberichte',
    intro: 'CE-EMC-, CE-LVD-, FCC-SDoC- und RoHS-Dokumente von Shenzhen HyCert. Öffnen Sie die Zertifikatsvorschau oder laden Sie das Original-PDF und den zugehörigen Prüfbericht herunter.',
    scope: 'Diese Dokumente beziehen sich auf die im jeweiligen PDF genannten MINI-PC-Modelle und geprüften Muster. Modellumfang und Prüfbedingungen entnehmen Sie den Originaldokumenten.',
    issued: 'Ausgestellt', preview: 'Zertifikat ansehen', download: 'Zertifikat herunterladen', report: 'Prüfbericht herunterladen', page: 'Seite', pages: 'Seiten', details: 'Normen & aufgeführte Modelle', models: 'Im Zertifikat aufgeführte Modelle', standards: 'Referenzierte Normen', files: 'PDF-Dateien',
    names: ['EMV-Konformitätszertifikat', 'Nachweis der LVD-Konformität', 'FCC-Konformitätserklärung des Lieferanten', 'RoHS-Konformitätszertifikat'],
    downloads: 'Downloads', downloadsIntro: 'Originaldokumente zur Produktkonformität und zugehörige Laborprüfberichte herunterladen.',
    displayIntro: 'Produktkonformitätsdokumente für die in den Zertifikaten aufgeführten MINI-PC-Modelle.',
  },
  fr: {
    title: 'Certificats produits et rapports d’essai',
    intro: 'Documents CE EMC, CE LVD, FCC SDoC et RoHS délivrés par Shenzhen HyCert. Consultez un certificat ou téléchargez le PDF original et son rapport d’essai.',
    scope: 'Ces documents concernent les modèles MINI PC et les échantillons testés indiqués dans chaque PDF. Consultez les originaux pour les modèles couverts et les conditions d’essai.',
    issued: 'Date de délivrance', preview: 'Voir le certificat', download: 'Télécharger le certificat', report: 'Télécharger le rapport', page: 'page', pages: 'pages', details: 'Normes et modèles indiqués', models: 'Modèles indiqués dans le certificat', standards: 'Normes référencées', files: 'fichiers PDF',
    names: ['Certificat de conformité CEM', 'Vérification de conformité LVD', 'Déclaration de conformité FCC du fournisseur', 'Certificat de conformité RoHS'],
    downloads: 'Téléchargements', downloadsIntro: 'Téléchargez les documents originaux de conformité des produits et les rapports d’essai du laboratoire.',
    displayIntro: 'Documents de conformité des produits pour les modèles MINI PC indiqués dans chaque certificat.',
  },
  it: {
    title: 'Certificati di prodotto e rapporti di prova',
    intro: 'Documenti CE EMC, CE LVD, FCC SDoC e RoHS emessi da Shenzhen HyCert. Visualizza un certificato o scarica il PDF originale e il relativo rapporto di prova.',
    scope: 'Questi documenti riguardano i modelli MINI PC e i campioni testati indicati in ciascun PDF. Consulta gli originali per i modelli inclusi e le condizioni di prova.',
    issued: 'Data di emissione', preview: 'Visualizza certificato', download: 'Scarica certificato', report: 'Scarica rapporto di prova', page: 'pagina', pages: 'pagine', details: 'Norme e modelli elencati', models: 'Modelli elencati nel certificato', standards: 'Norme di riferimento', files: 'file PDF',
    names: ['Certificato di conformità EMC', 'Verifica di conformità LVD', 'Dichiarazione di conformità FCC del fornitore', 'Certificato di conformità RoHS'],
    downloads: 'Download', downloadsIntro: 'Scarica i documenti originali di conformità dei prodotti e i relativi rapporti di laboratorio.',
    displayIntro: 'Documenti di conformità dei prodotti per i modelli MINI PC elencati in ciascun certificato.',
  },
  es: {
    title: 'Certificados de producto e informes de ensayo',
    intro: 'Documentos CE EMC, CE LVD, FCC SDoC y RoHS emitidos por Shenzhen HyCert. Consulta un certificado o descarga el PDF original y su informe de ensayo.',
    scope: 'Estos documentos corresponden a los modelos MINI PC y las muestras ensayadas indicados en cada PDF. Consulta los originales para conocer los modelos incluidos y las condiciones de ensayo.',
    issued: 'Fecha de emisión', preview: 'Ver certificado', download: 'Descargar certificado', report: 'Descargar informe', page: 'página', pages: 'páginas', details: 'Normas y modelos indicados', models: 'Modelos indicados en el certificado', standards: 'Normas de referencia', files: 'archivos PDF',
    names: ['Certificado de conformidad EMC', 'Verificación de conformidad LVD', 'Declaración de conformidad FCC del proveedor', 'Certificado de conformidad RoHS'],
    downloads: 'Descargas', downloadsIntro: 'Descarga los documentos originales de conformidad de los productos y los informes de laboratorio correspondientes.',
    displayIntro: 'Documentos de conformidad de producto para los modelos MINI PC indicados en cada certificado.',
  },
};
