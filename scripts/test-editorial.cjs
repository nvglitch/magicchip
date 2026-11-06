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
  vm.runInNewContext(code, { exports, Intl, Date, URL, require(name) {
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
    { type: 'table', columns: ['Model', 'Interface'], rows: [['MCIPC8-HDMI', '6 x COM']] },
    { type: 'links', items: [{ text: 'Compare industrial PCs', href: '/products/industrial-mini-pc' }, { text: 'Type A', href: '/products/ai-mini-pc/mcaipc3#sku-type-a' }] },
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
  item => { item.translations.de.body = [{ type: 'links', items: [{ text: 'Unsafe', href: 'javascript:alert(1)' }] }]; },
  item => { item.translations.fr.body = [{ type: 'links', items: [{ text: 'Wrong locale', href: '/en/products' }] }]; },
  item => { item.translations.it.body = [{ type: 'table', columns: ['Model', 'Interface'], rows: [['Missing cell']] }]; },
  item => { item.translations.en.body = [{ type: 'image', src: '/assets/brand/og-default.png', alt: 'Image', presentation: 'invalid' }]; },
  item => { item.translations.en.body = [{ type: 'links', items: [{ text: 'Unsafe', href: 'https://ollama.com.attacker.example/model' }] }]; },
  item => { item.translations.en.body = [{ type: 'models', items: [{name:'Model',workload:'Chat',download:'4GB',command:'ollama run model',note:'Example',href:'https://user:password@ollama.com/library/model'}] }]; },
  item => { item.translations.en.image = '/assets/../private.png'; },
  item => { item.translations.en.cta = {title:'Hardware',description:'Explore',label:'View',href:'javascript:alert(1)'}; },
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
assert.equal(api.getPublishedArticles('technical').length, 3);
assert.equal(api.getPublishedArticles('case-study').length, 0);
for (const article of api.getPublishedArticles()) {
  assert(fs.existsSync(path.join(root, 'public', article.image)));
  for (const copy of Object.values(article.translations)) {
    if (copy.image) assert(fs.existsSync(path.join(root, 'public', copy.image)));
    for (const block of copy.body) {
      if (block.type === 'image') assert(fs.existsSync(path.join(root, 'public', block.src)));
    }
  }
}
const guideArticle = api.getArticle('technical', 'local-ai-mini-pc-memory');
const guide = guideArticle.translations.en;
assert.equal(guide.title, 'Local AI Hardware Guide: How Much RAM Do You Really Need?');
assert.equal(guide.metaTitle, 'Local AI Hardware Guide: RAM, GPU Memory & Model Sizes');
assert(!/MagicChip|MCAIPC\d|MCai2|mini\s+pc/i.test(JSON.stringify(guide.body)));
assert(!guide.body.some(block => block.type === 'image'));
assert.equal(guide.body.filter(block => block.type === 'heading' && block.level !== 3).length, 7);
const modelCards = guide.body.find(block => block.type === 'models').items;
assert.equal(modelCards.length, 7);
for (const model of modelCards) {
  assert(api.isArticleReference(model.href));
  assert.equal(model.command, `ollama run ${model.href.split('/').at(-1)}`);
}
const guideHtml = renderToStaticMarkup(React.createElement(Detail, {article:guideArticle,language:'en'}));
assert.equal((guideHtml.match(/href="\/en\/products\//g) || []).length, 1);
assert(guideHtml.includes('data-article-cta') && guideHtml.includes('Explore AI Hardware'));
assert(guideHtml.includes('qwen3-5-official.png') && !guideHtml.includes('ai-memory-formats.svg'));
assert(guideHtml.includes('bg-[#101e31] text-white') && guideHtml.includes('radial-gradient('));
assert(guideHtml.includes('<code>ollama run qwen3.5:9b</code>'));
assert(guideHtml.includes('href="https://ollama.com/"') && guideHtml.includes('href="https://lmstudio.ai/"'));
assert(guideHtml.includes('overflow-x-auto') && guideHtml.includes('data-article-toc'));
assert.equal((guideHtml.match(/<h2 id="section-/g) || []).length, 7);
for (const id of ['industrial-box-pc-vs-panel-pc','connect-multiple-rs232-devices']) {
  const article = api.getArticle('technical',id);
  const copy = article.translations.en;
  const visible = copy.body.map(block => block.type === 'image' ? {alt:block.alt,caption:block.caption} : block);
  assert.equal(copy.presentation,'guide');
  assert(!/MagicChip|MCIPC\d|MCTPC|MCAIPC|MCai\d/i.test(JSON.stringify(visible)));
  assert(!/MCIPC|MCTPC/.test(copy.excerpt));
  assert(copy.body.filter(block=>block.type==='paragraph').every(block=>block.text.split(/\s+/).length<=110));
  assert(!copy.body.some(block=>block.type==='links'&&block.items.some(item=>/^https?:/.test(item.href))));
  assert(!copy.body.some(block=>block.type==='heading'&&block.text==='Further reading'));
  const html = renderToStaticMarkup(React.createElement(Detail,{article,language:'en'}));
  assert.equal((html.match(/href="\/en\/products\//g)||[]).length,1);
  assert.equal((html.match(/<h2 id="section-/g)||[]).length,6);
  assert(html.includes('data-article-cta') && html.includes('Explore Industrial Computing'));
  assert(html.includes('data-article-body') && html.includes('data-article-toc') && html.includes('bg-[#101e31] text-white'));
}
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
    assert(detail.includes('<table') && detail.includes('scope="col"') && detail.includes('6 x COM'));
    assert(detail.includes(`href="/${lang}/products/industrial-mini-pc"`));
    assert(detail.includes(`href="/${lang}/products/ai-mini-pc/mcaipc3#sku-type-a"`));
    assert(detail.includes('href="#section-0"') && detail.includes('id="section-0"'));
    assert(detail.includes('data-article-intro') && detail.includes('data-article-toc'));
    assert(detail.includes('aria-current="location"'));
    assert(!detail.includes('border-l-4'));
    assert(!detail.includes('Planning a configuration?'));
  }
}
console.log('Editorial checks passed: five-language publication guard, draft exclusion, safe tables and localized internal links, escaped text, sorted/paginated cards and details.');
