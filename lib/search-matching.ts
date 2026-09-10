import type { SearchEntry } from './site-search';
import { translateSearchTerms, removeSearchFillers } from './search-language';

export function normalizeSearch(value: string): string {
  return translateSearchTerms(value)
    .replace(/[–—−~～]/g, '-')
    .replace(/(\d)\s*v?\s+(?:to|bis|a)\s+(?=\d)/g, '$1-')
    .replace(/\bintell\b/g, 'intel')
    .replace(/wide[ -]?(?:input[ -]?)?voltage/g, 'widevoltage')
    .replace(/(?:gbe|gbps)/g, 'g').replace(/\bcom\b/g, 'serial')
    .replace(/(\d)\s+(v|gb|tb|g|mhz|mt\/s)\b/g, '$1$2')
    .replace(/(usb|ddr)\s+(\d+(?:\.\d+)?)(?![\d.]|\s*[x×])/g, '$1$2')
    .replace(/[®™]/g, '').replace(/\s+/g, ' ').trim();
}

function voltages(value: string) {
  const normalized = normalizeSearch(value);
  const ranges = [...normalized.matchAll(/(\d+(?:\.\d+)?)\s*v?\s*-\s*(\d+(?:\.\d+)?)\s*v\b/g)]
    .map(m => [Number(m[1]), Number(m[2])]);
  const rest = normalized.replace(/\d+(?:\.\d+)?\s*v?\s*-\s*\d+(?:\.\d+)?\s*v\b/g, '');
  return [...ranges, ...[...rest.matchAll(/(\d+(?:\.\d+)?)\s*v\b/g)].map(m => [Number(m[1]), Number(m[1])])];
}

// Typo tolerance is limited to words, never model numbers or numeric specifications.
function oneEdit(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) return a.length === b.length ? a.slice(i + 1) === b.slice(i + 1)
      : a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
  }
  return true;
}

const words = (s: string): string[] => normalizeSearch(s).match(/[\p{L}0-9]+(?:[.+][\p{L}0-9]+)*/gu) || [];
function matches(text: string, token: string) {
  const terms = words(text);
  if (terms.includes(token)) return true;
  if (/^[a-z]{5,}$/.test(token)) return terms.some(word => /^[a-z]{5,}$/.test(word) && oneEdit(word, token));
  return false;
}

export function matchSearch(entry: SearchEntry, query: string): { score: number; matchedSpecs: string[] } | null {
  let remaining = normalizeSearch(query);
  const exactModel = remaining.replace(/[^a-z0-9]/g, '') === normalizeSearch(entry.title).replace(/[^a-z0-9]/g, '');
  if (exactModel) return { score: 1000, matchedSpecs: [] };
  const specs = entry.specs || [];
  const evidence = new Set<string>();
  let score = 0;
  const add = (spec: { label: string; value: string }) => evidence.add(`${spec.label}: ${spec.value}`);
  const voltageQuery = voltages(remaining);
  if (voltageQuery.length) {
    const power = specs.filter(s => /power|voltage|input|psu/i.test(s.label) && !/output/i.test(s.label));
    for (const [low, high] of voltageQuery) {
      const hit = power.find(s => voltages(s.value).some(([min, max]) => min <= low && max >= high));
      if (!hit) return null;
      add(hit); score += 60;
    }
    remaining = remaining.replace(/\d+(?:\.\d+)?\s*v?\s*-\s*\d+(?:\.\d+)?\s*v\b|\d+(?:\.\d+)?\s*v\b/g, ' ');
  }
  if (remaining.includes('widevoltage')) {
    const hit = specs.find(s => /power|voltage|input|psu/i.test(s.label) &&
      (normalizeSearch(s.value).includes('widevoltage') || voltages(s.value).some(([min, max]) => min > 0 && max <= 60 && max / min >= 2)));
    if (!hit) return null;
    add(hit); score += 50; remaining = remaining.replace(/widevoltage/g, ' ');
  }
  // Brand names without a network qualifier refer to the processor field.
  if (!/\b(lan|network|ethernet|i226|i225|i210|i211)\b/.test(remaining)) {
    for (const brand of ['intel', 'amd']) {
      if (!new RegExp(`\\b${brand}\\b`).test(remaining)) continue;
      const hit = specs.find(s => /cpu|processor|mainboard series/i.test(s.label) &&
        (new RegExp(`\\b${brand}\\b`, 'i').test(s.value) ||
          (brand === 'intel' && /alder\s?lake|twin\s?lake/i.test(s.value))));
      if (!hit) return null;
      add(hit); score += 50; remaining = remaining.replace(new RegExp(`\\b${brand}\\b`, 'g'), ' ');
    }
  }
  remaining = removeSearchFillers(remaining);
  const tokens = words(remaining);
  const haystack = `${entry.title} ${entry.description} ${entry.keywords.join(' ')} ${specs.map(s => `${s.label} ${s.value}`).join(' ')}`;
  for (const token of tokens) {
    const title = normalizeSearch(entry.title).replace(/[^a-z0-9]/g, '');
    const modelPrefix = /\d/.test(token) && token.startsWith('mc') && title.startsWith(token.replace(/[^a-z0-9]/g, ''));
    if (!modelPrefix && !matches(haystack, token)) return null;
    const hit = specs.find(s => matches(`${s.label} ${s.value}`, token));
    if (hit) add(hit);
    score += modelPrefix || matches(entry.title, token) ? 30 : 10;
  }
  if (!score) return null;
  return { score: score + (entry.type === 'product' ? 8 : 0), matchedSpecs: [...evidence].slice(0, 3) };
}
