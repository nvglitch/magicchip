const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const cache = new Map();
const root = path.resolve(__dirname, '..');
function load(filename) {
  const file = path.resolve(root, filename);
  if (file.endsWith('.json')) return JSON.parse(fs.readFileSync(file, 'utf8'));
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  vm.runInNewContext(code, { exports, Intl, Date, require(name) {
    if (name === 'next/link') return ({ children, ...props }) => React.createElement('a', props, children);
    if (!name.startsWith('@/') && !name.startsWith('.')) return require(name);
    const resolved = name.startsWith('@/') ? path.join(root, name.slice(2)) : path.resolve(path.dirname(file), name);
    const target = /\.(json|tsx?)$/.test(resolved) ? resolved : ['.ts', '.tsx'].map(ext => resolved + ext).find(fs.existsSync);
    if (!target) throw new Error(`Cannot load ${name}`);
    return load(target);
  } });
  return exports;
}
const api = load('lib/editorial.ts');
const words = load('lib/editorial-copy.ts').editorialCopy;
const Listing = load('components/ArticleListing.tsx').default;
const Detail = load('components/EditorialArticle.tsx').default;
const languages = ['en', 'de', 'fr', 'it', 'es'];
const makeArticle = (id, kind = 'technical') => ({ id, kind, published: true, date: '2026-11-05', image: '/assets/brand/og-default.png', translations: Object.fromEntries(languages.map(lang => [lang, {
  title: `${lang} title ${id}`, excerpt: `${lang} excerpt`, imageAlt: `${lang} image`, body: [
    { type: 'heading', text: `${lang} section` }, { type: 'paragraph', text: '<script>alert("unsafe")</script>' },
    { type: 'list', items: ['First fact', 'Second fact'] }, { type: 'image', src: '/assets/brand/og-default.png', alt: `${lang} detail`, caption: `${lang} caption` },
  ],
}])) });
const clone = item => JSON.parse(JSON.stringify(item));
const published = makeArticle('published-guide');
assert(api.isPublishableArticle(published));
for (const change of [
  item => { item.published = false; }, item => { delete item.translations.de; },
  item => { item.translations.fr.body = []; }, item => { item.translations.it.excerpt = ''; },
  item => { item.image = '/assets/../private.png'; }, item => { item.id = '../draft'; },
  item => { item.date = '2026-02-31'; }, item => { item.updated = '2025-01-01'; },
  item => { item.translations.es.body = [{ type: 'image', src: 'javascript:alert(1)', alt: 'bad' }]; },
]) {
  const invalid = clone(published); change(invalid);
  assert(!api.isPublishableArticle(invalid));
  assert.equal(api.getPublishedArticles(undefined, [invalid]).length, 0);
  assert.equal(api.getArticle('technical', invalid.id, [invalid]), undefined);
}
const fixture = Array.from({ length: 11 }, (_, i) => makeArticle(`guide-${String(i).padStart(2, '0')}`));
const older = makeArticle('older'); older.date = '2026-10-01';
const draft = makeArticle('draft'); draft.published = false;
const caseStudy = makeArticle('case', 'case-study');
const source = [...fixture, older, draft, caseStudy];
assert.equal(api.getPublishedArticles('technical', source).length, 12);
assert.equal(api.getPublishedArticles('case-study', source).length, 1);
assert.equal(api.getArticlePage('technical', '1', source).items.length, 9);
assert.equal(api.getArticlePage('technical', '2', source).items.length, 3);
assert.equal(api.getArticlePage('technical', '999', source).page, 2);
assert.equal(api.getArticlePage('technical', '-1', source).page, 1);
assert.equal(api.getArticlePage('technical', ['2'], source).page, 1);
assert.equal(api.getPublishedArticles('technical', source).at(-1).id, 'older');
assert.equal(source.length, 14);
// Fixtures never enter the content file; real published content must pass the same guard.
assert(api.getPublishedArticles().every(api.isPublishableArticle));
assert(!api.getPublishedArticles().some(item => ['published-guide', 'draft'].includes(item.id)));
for (const lang of languages) {
  for (const kind of ['technical', 'case-study']) {
    const empty = renderToStaticMarkup(React.createElement(Listing, { kind, language: lang, articles: [] }));
    assert(empty.includes(words[lang][kind].title));
    assert(empty.includes(`href="/${lang}/contact"`));
    assert(!empty.includes('role="tablist"'));
    const filled = renderToStaticMarkup(React.createElement(Listing, { kind, language: lang, articles: [makeArticle('guide', kind)], page: 2, totalPages: 3 }));
    const route = api.articlePaths[kind];
    assert(filled.includes(`href="/${lang}${route}/guide"`));
    assert(/datetime="2026-11-05"/i.test(filled));
    assert(filled.includes(`${lang} title guide`));
    assert(filled.includes('rel="prev"') && filled.includes('rel="next"'));
    const detail = renderToStaticMarkup(React.createElement(Detail, { article: makeArticle('guide', kind), language: lang }));
    assert(detail.includes(`href="/${lang}${route}"`));
    assert(detail.includes('&lt;script&gt;'));
    assert(!detail.includes('<script>'));
    assert(detail.includes(`${lang} caption`) && detail.includes('Second fact'));
  }
}
console.log('Editorial checks passed: empty live collections, five-language publication guard, draft exclusion, Type-safe body blocks, escaped text, sorted/paginated cards, details and localized links.');
