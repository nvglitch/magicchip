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
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(code, { exports, Intl, Map, Set, require(name) {
    const resolved = name.startsWith('@/') ? name.slice(2) : path.resolve(path.dirname(file), name);
    return load(resolved.endsWith('.json') ? resolved : `${resolved}.ts`);
  } });
  return exports;
}
const { searchSite, siteSearchIndex } = load('lib/site-search.ts');
const { industrialCatalog } = load('lib/industrial-catalog.ts');
const { aiCatalog, aiProductAliases, mcaipc2Configurations, mcaipc3Models } = load('lib/ai-catalog.ts');
const { groupProductNavigation } = load('lib/product-navigation.ts');
const { matchSearch } = load('lib/search-matching.ts');
const fixture = (specs) => ({ title: 'Test PC', description: '', keywords: [], href: '/test', type: 'product', specs });
const power = value => fixture([{ label: 'Power', value }]);
assert(matchSearch(power('DC 9V~36V'), '9-36V'));
assert(matchSearch(power('DC 6-48V'), '9-36V'));
assert.equal(matchSearch(power('DC 12-36V'), '9-36V'), null);
assert.equal(matchSearch(power('DC 9-24V'), '9-36V'), null);
assert.equal(matchSearch(power('19V'), '9-36V'), null);
assert.equal(matchSearch(fixture([{ label: 'USB output', value: '9-36V' }]), '9-36V'), null);
assert.equal(matchSearch(power('100-240V AC'), 'wide voltage'), null);
assert.equal(matchSearch(fixture([{ label: 'CPU', value: 'AMD Ryzen' }, { label: 'Network', value: 'Intel i226' }]), 'Intel'), null);
assert(matchSearch(fixture([{ label: 'CPU', value: 'Intel Core i5' }]), 'I want an Intel processor'));
assert(matchSearch(fixture([{ label: 'CPU', value: 'AlderLake-N N100' }]), 'Intel'));
assert.equal(matchSearch(fixture([{ label: 'USB', value: '4 x USB 2.0' }]), 'USB4'), null);
assert(matchSearch(fixture([{ label: 'USB', value: 'USB 4.0' }]), 'USB 4.0'));
assert(matchSearch(fixture([{ label: 'Memory', value: 'DDR5-4800' }]), 'DDR5'));
assert.equal(matchSearch(fixture([{ label: 'Memory', value: 'DDR4' }]), 'DDR5'), null);
assert(matchSearch(fixture([{ label: 'Cooling', value: 'fanless' }]), 'fanles'));
const products = siteSearchIndex.filter(e => e.type === 'product');
assert.equal(products.length, 156);
assert(products.every(e => e.specs?.length));
assert.equal(new Set(products.map(e => e.href)).size, products.length);
for (const entry of products) assert.equal(searchSite(entry.title)[0]?.href, entry.href);
const b2 = groupProductNavigation(industrialCatalog.filter(item => item.series === 'B'))
  .find(group => group.name === 'MCIPCB2');
assert.deepEqual(Array.from(b2.models, item => item.id), ['mcipcb2', 'mcipcb2-j5005']);
assert.equal(industrialCatalog.find(item => item.id === 'mcipcb2').skus.length, 2);
assert.equal(industrialCatalog.find(item => item.id === 'mcipcb2-j5005').skus, undefined);
assert.equal(searchSite('MCIPCB2-J5005')[0]?.href, '/products/industrial-mini-pc/mcipcb2-j5005');
const titles = q => Array.from(searchSite(q), e => e.title).sort();
for (const q of ['9～36 V', '9V-36V', '9 to 36V', '９－３６Ｖ']) assert.deepEqual(titles(q), titles('9-36V'));
assert(searchSite('9-36V').length > 0);
for (const query of ['Intel Prozessor', 'processeur Intel', 'processore Intel', 'procesador Intel']) assert.deepEqual(titles(query), titles('Intel'));
for (const query of ['weiter Spannungsbereich', 'breiter Eingangsspannungsbereich', 'large plage de tension', "large plage de tension d’entrée", 'ampio intervallo di tensione', 'amplio rango de tensión']) assert.deepEqual(titles(query), titles('wide voltage'));
for (const query of ['lüfterlos', 'sans ventilateur', 'senza ventola', 'sin ventilador']) assert.deepEqual(titles(query), titles('fanless'));
for (const query of ['Arbeitsspeicher DDR5', 'mémoire DDR5', 'memoria DDR5']) assert.deepEqual(titles(query), titles('memory DDR5'));
for (const query of ['Ich suche einen Intel Prozessor mit 9 bis 36V', 'Je cherche un processeur Intel avec 9 à 36V', 'Cerco un processore Intel con 9 a 36V', 'Busco un procesador Intel con 9 a 36V']) assert.deepEqual(titles(query), titles('Intel 9-36V'));
assert.equal(searchSite('宽电压').length, 0);
assert.equal(searchSite('英特尔').length, 0);
const intel = titles('Intel'), voltage = titles('9-36V');
assert.deepEqual(titles('Intel 9-36V'), intel.filter(t => voltage.includes(t)));
assert(searchSite('Intel').every(e => e.matchedSpecs.some(s => /CPU|Processor|Mainboard series/.test(s))));
assert.equal(searchSite('').length, 0);
assert.equal(searchSite('999-1000V').length, 0);
assert.equal(searchSite('zzzzzznothing').length, 0);
for (const query of ['9-36V', 'wide voltage', 'Intel', 'Intel 9-36V', 'USB4', 'DDR5']) console.log(`${query}: ${searchSite(query).length} results`);
console.log(`Search regression checks passed: all ${products.length} product/SKU entries, voltage boundaries, CPU scope, spelling, units, compound queries, and exact model links.`);

assert.equal(searchSite('MCIPCE1')[0]?.href, '/products/industrial-mini-pc/mcipce1');
assert(searchSite('9-36V').some(item => item.title === 'MCIPCE1'));
for (const [name, target] of Object.entries({
  MCIPCB1A: 'mcipcb1#sku-type-a', MCIPCB1B: 'mcipcb1#sku-type-b', MCIPCB1F: 'mcipcb1#sku-fan',
  'MCIPCB2-D3': 'mcipcb2#sku-type-a', 'MCIPCB2-D4': 'mcipcb2#sku-type-b',
  'MCIPCB6-DDR3L': 'mcipcb6#sku-type-b', 'MCIPCB6-DDR4': 'mcipcb6#sku-type-c',
  MCIPCB13A: 'mcipcb13#sku-type-a', MCIPCB13B: 'mcipcb13#sku-type-b',
  MCIPCB14F: 'mcipcb14#sku-fan',
  MCIPCB15A: 'mcipcb15#sku-type-a', MCIPCB15B: 'mcipcb15#sku-type-b', MCIPCB15C: 'mcipcb15#sku-type-c', MCIPCB15D: 'mcipcb15#sku-type-d', MCIPCB15E: 'mcipcb15#sku-fan',
  MCIPCB16A: 'mcipcb16#sku-type-a', MCIPCB16B: 'mcipcb16#sku-type-b',
})) assert.equal(searchSite(name)[0]?.href, `/products/industrial-mini-pc/${target}`);
assert(searchSite('12-19V').some(item => item.href === '/products/industrial-mini-pc/mcipcb15#sku-fan'));
assert(!searchSite('12-19V').some(item => item.href === '/products/industrial-mini-pc/mcipcb15#sku-type-a'));
assert(searchSite('DDR5').some(item => item.href === '/products/industrial-mini-pc/mcipcb13#sku-type-b'));
assert(searchSite('DDR4').some(item => item.href === '/products/industrial-mini-pc/mcipcb1#sku-type-a'));
assert(!searchSite('DDR4').some(item => item.href === '/products/industrial-mini-pc/mcipcb1#sku-type-b'));

// Every selected configuration exposes the full facts without duplicate labels.
const b15aSpecs = searchSite('MCIPCB15A')[0].specs;
assert.match(b15aSpecs.find(item => item.label === 'Network').value, /RTL8111H/);
assert.equal(b15aSpecs.find(item => item.label === 'Storage').value, '1 × SATA 3.0');
assert.equal(b15aSpecs.find(item => item.label === 'Dimensions').value, '148 × 126 × 56 mm');
assert.equal(searchSite('MCIPCB15E')[0].specs.find(item => item.label === 'Dimensions').value, '148 × 125 × 56 mm');
assert.match(searchSite('MCIPCB14F')[0].specs.find(item => item.label === 'Memory').value, /DDR5/);
for (const entry of products.filter(item => item.href.includes('#sku-'))) {
  assert.equal(new Set(entry.specs.map(item => item.label.toLowerCase())).size, entry.specs.length);
}

// AIPC family routes retain exact model facts and configuration-specific images.
assert.deepEqual(Array.from(aiCatalog, item => item.id).sort(), ['mcai2', 'mcaipc3']);
for (const model of mcaipc3Models) {
  const result = searchSite(model.name)[0];
  assert.equal(result.href, aiProductAliases[model.id]);
  assert.equal(result.image, model.image);
  for (const spec of model.specs) assert.equal(result.specs.find(item => item.label === spec.label)?.value, spec.value);
}
assert(searchSite('Intel').some(item => item.title === 'MCAIPC3C'));
assert(searchSite('Intel').some(item => item.title === 'MCAIPC3D'));
assert(!searchSite('Intel').some(item => ['MCAIPC3A', 'MCAIPC3B'].includes(item.title)));
assert.match(searchSite('MCAIPC3A')[0].specs.find(item => item.label === 'Memory').value, /LPDDR5/);
assert.match(searchSite('MCAIPC3B')[0].specs.find(item => item.label === 'Memory').value, /SO-DIMM/);

// Every MCAIPC2 combination must be compatible and expose its own I/O, power and size.
assert.equal(mcaipc2Configurations.length, 25);
for (const [series, count] of Object.entries({ 'AXB35-02': 14, 'AXB35-03': 9, 'AEB35-04': 2 })) {
  assert.equal(mcaipc2Configurations.filter(item => item.seriesId === series).length, count);
}
assert.deepEqual(Array.from(mcaipc2Configurations.filter(item => item.seriesId === 'AEB35-04'), item => item.chassisId).sort(), ['H02', 'H09']);
for (const configuration of mcaipc2Configurations) {
  const result = searchSite(`MCAIPC2 — ${configuration.label}`)[0];
  assert.equal(result.href, `/products/ai-mini-pc/mcai2#sku-${configuration.key}`);
  assert.equal(result.image, configuration.image);
  assert.equal(result.specs.length, 17);
  assert.equal(result.specs.find(item => item.label === 'Mainboard series').value, configuration.seriesId);
  assert.equal(result.specs.find(item => item.label === 'Chassis').value, configuration.chassisId);
}
const selectedSpec = (key, label) => mcaipc2Configurations.find(item => item.key === key).specs.find(item => item.label === label).value;
assert.equal(selectedSpec('axb35-02-h04-bq', 'Network'), '1 x RJ45 2.5GbE');
assert.equal(selectedSpec('axb35-03-h04-bq', 'Network'), '2 x RJ45 10GbE');
assert.equal(selectedSpec('aeb35-04-h02', 'Power'), 'Internal 300/350 W Flex PSU');
assert.equal(selectedSpec('aeb35-04-h09', 'Power'), '20 V / 12 A, 240 W external adapter');
assert.equal(selectedSpec('aeb35-04-h09', 'Dimensions'), '200 x 197.8 x 70 mm');
console.log('AIPC checks passed: canonical series links, four exact MCAIPC3 configurations and 25 compatible MCAIPC2 combinations.');

// TPC X: preserve platform-dependent facts and optional power qualifiers.
for (const code of ['1004', '1201', '1501', '1506', '1701', '1901', '2105']) {
  const name = `MCTPC-${code}X`;
  const product = searchSite(name)[0];
  assert.equal(product.href, `/products/industrial-mini-pc/mctpc-${code}x`);
  for (const query of ['Intel', 'J1900', 'DDR4 32GB', '9-36V']) assert(searchSite(query).some(item => item.title === name));
  assert(!searchSite('DDR5').some(item => item.title === name));
  const value = label => product.specs.find(s => s.label === label).value;
  assert.match(value('Power'), /12 V standard.*optional 9-36 V/);
  assert.equal(value('Protection'), 'IP65-rated front panel only');
  const small = ['1004', '1201'].includes(code);
  assert(value('Platform - J1900').includes(small ? '1 x USB 3.0 + 3 x USB 2.0' : '1 x USB 3.0 + 5 x USB 2.0'));
  assert.equal(value('Platform - J1900').includes('1 x SATA'), !small);
}
