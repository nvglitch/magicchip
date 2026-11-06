const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const cache = new Map();
function load(filename) {
  const file = path.resolve(__dirname, '..', filename);
  if (file.endsWith('.json')) return JSON.parse(fs.readFileSync(file, 'utf8'));
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  vm.runInNewContext(code, { exports, Intl, Map, Set, URL, require(name) {
    const resolved = name.startsWith('@/') ? name.slice(2) : path.resolve(path.dirname(file), name);
    return load(resolved.endsWith('.json') ? resolved : `${resolved}.ts`);
  } });
  return exports;
}
const { hasSearchTerm, toggleSearchTerm, searchCategory, categorySearchTerms, categoryResultCopy } = load('lib/category-search.ts');
const { matchSearch } = load('lib/search-matching.ts');
const { categorySearchCopy } = load('lib/category-search-copy.ts');
assert.equal(toggleSearchTerm('MCIPC9', 'COM', true), 'MCIPC9 COM');
assert.equal(toggleSearchTerm('MCIPC9 COM', 'COM', false), 'MCIPC9');
assert.equal(toggleSearchTerm('Intel DDR5', 'DDR5', true), 'Intel DDR5');
assert.equal(toggleSearchTerm('Intel ddr5 NVMe', 'DDR5', false), 'Intel NVMe');
assert.equal(toggleSearchTerm('MCIPC9 COM GPIO', 'COM', false), 'MCIPC9 GPIO');
assert(hasSearchTerm('MCIPC9 com', 'COM'));
assert(!hasSearchTerm('COM1 MCIPCOM', 'COM'));
assert(!hasSearchTerm('DDR5', 'DDR4'));
assert(searchCategory('MCIPC9 COM', 'industrial-mini-pc').some(result => result.title === 'MCIPC9'));
assert.equal(searchCategory('MCN1 COM', 'commercial-mini-pc').length, 0);
assert(searchCategory('MCN1', 'commercial-mini-pc').some(result => result.title === 'MCN1'));
assert(searchCategory('DDR4 NVMe', 'commercial-mini-pc').length > 4, 'Search the catalog, not four examples');
assert(searchCategory('MCIPC2 COM', 'industrial-mini-pc').some(result => result.href.includes('#sku-type-')));
for (const category of Object.keys(categorySearchTerms)) {
  const results = searchCategory('Intel', category);
  assert(results.every(result => result.type === 'product' && result.href.startsWith(`/products/${category}/`)));
  assert.equal(new Set(results.map(result => result.href)).size, results.length);
  for (const lang of ['en', 'de', 'fr', 'it', 'es']) {
    assert.deepEqual(Object.keys(categorySearchCopy[lang]), Object.keys(categorySearchCopy.en));
    for (const result of results.slice(0, 3)) assert(categoryResultCopy(result, lang).title);
  }
}
const box = specs => ({ title: 'Test', description: '', href: '/products/test/test', type: 'product', keywords: [], specs });
const usb10 = box([{ label: 'Network', value: '1 x Gigabit LAN (1000 Mbps)' }, { label: 'USB', value: '2 x USB 10Gbps' }]);
assert.equal(matchSearch(usb10, '10GbE'), null);
assert.equal(matchSearch(usb10, '10GbE LAN'), null);
assert(matchSearch(usb10, '1GbE'));
assert(matchSearch(box([{ label: 'Network', value: '2 x Intel I226-V' }]), 'LAN'));
assert(matchSearch(box([{ label: 'Network', value: '4 x Intel i226 2.5 Gigabit Ethernet' }]), '2.5GbE LAN'));
assert(matchSearch(box([{ label: 'Network', value: '1 x Intel I219LM GbE; 1 x Intel i226-V 2.5 GbE' }]), '1GbE'));
assert(matchSearch(box([{ label: 'Network', value: '2 x Intel 82599ES 10G LAN' }]), '10GbE'));
for (const absent of ['None', 'No COM ports', '0 x COM', 'Not listed', 'Not specified', '—', '']) assert.equal(matchSearch(box([{ label: 'Serial', value: absent }]), 'COM'), null);
assert(matchSearch(box([{ label: 'Expansion', value: '2 x COM array-pin headers' }]), 'COM'));
assert(!searchCategory('10GbE', 'commercial-mini-pc').some(result => result.title === 'MCN1'));
assert.equal(searchCategory('10GbE', 'industrial-mini-pc').length, 0);
console.log('Category search checks passed: checkbox/text synchronization, manual text preservation, full-catalog scope, SKU deep links, five languages and field-bound Ethernet/serial constraints.');
