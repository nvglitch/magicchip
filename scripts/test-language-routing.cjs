const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function load(filename) {
  const file = path.resolve(__dirname, '..', filename);
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  vm.runInNewContext(code, { exports, require(name) { return load(path.relative(path.resolve(__dirname, '..'), path.resolve(path.dirname(file), name)) + '.ts'); } });
  return exports;
}

const { localizedHref, preferredLanguage } = load('lib/i18n/routing.ts');
assert.equal(localizedHref('/fr/products/ai-mini-pc/mcai2?q=USB4#sku-axb35-02-h07', 'de'), '/de/products/ai-mini-pc/mcai2?q=USB4#sku-axb35-02-h07');
for (const href of ['/assets/certificates/report.pdf', '/assets/brand/logo.png', '/api/newsletter', '/sitemap.xml', 'https://example.com/x', 'mailto:test@example.com', '//example.com/x', '#controller']) assert.equal(localizedHref(href, 'de'), href);
assert.equal(preferredLanguage('de;q=0, fr-FR;q=0.8, en;q=0.3'), 'fr');
assert.equal(preferredLanguage('zh-CN, *;q=0.5'), 'en');
assert.equal(preferredLanguage('de;q=9, es;q=0.5'), 'es');

const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3109';
const languages = ['en', 'de', 'fr', 'it', 'es'];
async function request(route, headers = {}) {
  return fetch(origin + route, { redirect: 'manual', headers });
}
function assertDestination(response, target) {
  assert.equal(new URL(response.headers.get('location'), origin).href, origin + target);
}

async function main() {
  for (const lang of languages) {
    for (const path of ['', '/privacy-policy', '/cookie-policy', '/terms-of-use', '/products', '/scenarios', '/contact', '/company', '/downloads', '/news']) {
      const route = `/${lang}${path}`;
      const response = await request(route, { Cookie: 'magicchip-language=es', 'Accept-Language': 'en-US' });
      assert.equal(response.status, 200, route);
      const html = await response.text();
      assert(html.includes(`<html lang="${lang}"`), `SSR language: ${route}`);
      assert(html.includes(`rel="canonical" href="https://szmagicchip.com${route}"`), `Canonical: ${route}`);
      for (const target of [...languages, 'x-default']) assert(html.includes(`hrefLang="${target}"`), `hreflang ${target}: ${route}`);
      for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
        if (href.startsWith('/') && !href.startsWith('/assets/') && !href.startsWith('/_next/') && !/\.[a-z0-9]+(?:[?#]|$)/i.test(href)) assert(href === `/${lang}` || href.startsWith(`/${lang}/`), `Language lost: ${route} -> ${href}`);
      }
    }
  }
  console.log('50 static pages: server language overrides conflicting cookie; canonical, hreflang and internal links passed.');

  for (const [route, target] of [['/privacy-policy', '/en/privacy-policy'], ['/products/ai-mini-pc/mcai2', '/en/products/ai-mini-pc/mcai2'], ['/search?q=USB4', '/en/search?q=USB4']]) {
    const response = await request(route, { Cookie: 'magicchip-language=de' });
    assert.equal(response.status, 308);
    assertDestination(response, target);
  }
  for (const [headers, lang] of [[{ Cookie: 'magicchip-language=de', 'Accept-Language': 'fr' }, 'de'], [{ 'Accept-Language': 'fr-FR, en;q=0.8' }, 'fr'], [{ 'Accept-Language': 'zh-CN' }, 'en']]) {
    const response = await request('/', headers);
    assert.equal(response.status, 307);
    assertDestination(response, `/${lang}`);
    assert(response.headers.get('cache-control').includes('no-store'));
  }
  for (const lang of languages) {
    for (const [old, target] of [['mc30s-n100', 'mc30s#sku-ddr5'], ['mcsr6n12u', 'mcsr6n1']]) {
      const response = await request(`/${lang}/products/firewall-mini-pc/${old}`);
      assert.equal(response.status, 308);
      assertDestination(response, `/${lang}/products/firewall-mini-pc/${target}`);
    }
    for (const path of ['/products/firewall-mini-pc/mc30s', '/products/firewall-mini-pc/mcsr6n3', '/products/ai-mini-pc/mcai2', '/products/ai-mini-pc/mcaipc3', '/products/commercial-mini-pc/nasn150']) {
      const response = await request(`/${lang}${path}`);
      assert.equal(response.status, 200, `${lang}${path}`);
      const html = await response.text();
      assert(html.includes(`<html lang="${lang}"`));
      assert(html.includes(`https://szmagicchip.com/${lang}${path}`));
    }
  }
  assert.equal((await request('/de/unknown-page')).status, 404);
  assert.equal((await request('/assets/brand/og-default.png')).status, 200);
  const sitemap = await (await request('/sitemap.xml')).text();
  for (const lang of languages) assert(sitemap.includes(`https://szmagicchip.com/${lang}/privacy-policy`));
  console.log('Legacy redirects, query strings, root preferences, 25 product pages, SKU aliases, sitemap, assets and 404 passed.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
