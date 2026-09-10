// Common product requirements in the site's five supported languages.
const aliases: [string, string[]][] = [
  ['widevoltage', [
    'wide voltage', 'wide input voltage', 'wide voltage input', 'wide voltage range', 'wide input voltage range',
    'weitbereichseingang', 'weitbereichsspannung', 'breitspannungsbereich', 'weiter spannungsbereich', 'breiter spannungsbereich', 'weiter eingangsspannungsbereich', 'breiter eingangsspannungsbereich',
    'large plage de tension', "large plage de tension d'entree", "large plage de tension d’entrée", 'large plage de tension en entree',
    'ampio intervallo di tensione', 'ampia gamma di tensione', 'ampio range di tensione',
    'amplio rango de tension', 'amplio rango de voltaje', 'amplia gama de voltajes',
  ]],
  ['fanless', ['fanless', 'lufterlos', 'ohne lufter', 'sans ventilateur', 'senza ventola', 'senza ventole', 'sin ventilador', 'sin ventiladores']],
  ['cpu', ['processor', 'processors', 'prozessor', 'prozessoren', 'processeur', 'processeurs', 'processore', 'processori', 'procesador', 'procesadores']],
  ['memory', ['arbeitsspeicher', 'memoire', 'memoria', 'ram']],
  ['storage', ['datenspeicher', 'stockage', 'archiviazione', 'almacenamiento']],
  ['serial', ['serial port', 'serial ports', 'serielle schnittstelle', 'serielle schnittstellen', 'port serie', 'ports serie', 'porta seriale', 'porte seriali', 'puerto serie', 'puertos serie']],
  ['network', ['netzwerk', 'reseau', 'rete', 'red']],
  ['lan', ['netzwerkanschluss', 'netzwerkanschlusse', 'port ethernet', 'ports ethernet', 'porta ethernet', 'porte ethernet', 'puerto ethernet', 'puertos ethernet']],
  ['dual lan', ['dual lan', 'dual ethernet', 'zwei lan ports', 'deux ports ethernet', 'due porte ethernet', 'dos puertos ethernet']],
  ['industrial', ['industrie pc', 'industriecomputer', 'industriell', 'industrielle', 'industrieller', 'industriel', 'industrielle', 'industriale', 'industrial']],
  ['firewall', ['pare feu', 'pare-feu', 'cortafuegos']],
];

export function foldSearchLanguage(value: string) {
  return value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/ß/g, 'ss').replace(/[’']/g, ' ');
}

const phrases = aliases.flatMap(([canonical, terms]) => terms.map(term => ({ canonical, term: foldSearchLanguage(term) })))
  .sort((a, b) => b.term.length - a.term.length)
  .map(({ canonical, term }) => ({ canonical, pattern: new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}\\b`, 'g') }));

const translatedCache = new Map<string, string>();

export function translateSearchTerms(value: string) {
  const cached = translatedCache.get(value);
  if (cached !== undefined) return cached;
  let normalized = foldSearchLanguage(value);
  for (const { canonical, pattern } of phrases) {
    normalized = normalized.replace(pattern, ` ${canonical} `);
  }
  if (translatedCache.size >= 4096) translatedCache.clear();
  translatedCache.set(value, normalized);
  return normalized;
}

// Deliberately exclude negations and comparisons: unsupported constraints must not be silently dropped.
export function removeSearchFillers(value: string) {
  return value.replace(/\b(i|want|need|looking|for|with|and|a|an|the|please|support|supports|cpu|dc|input|ich|suche|brauche|mochte|bitte|mit|und|einen|eine|ein|der|die|das|fur|je|cherche|veux|voudrais|avec|et|un|une|le|la|les|des|du|de|d|en|pour|vorrei|cerco|con|e|un|una|il|lo|la|di|per|busco|quiero|necesito|con|y|un|una|el|la|de|para)\b/g, ' ');
}
