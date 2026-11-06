const assert = require('node:assert/strict');
const articles = require('../content/articles.json').filter(article => article.published);
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3109';
const languages = ['en', 'de', 'fr', 'it', 'es'];
const decode = value => value.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
async function page(path) {
  const response = await fetch(origin + path, { headers: { 'user-agent': 'Googlebot' } });
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert(html.includes(`<html lang="${path.slice(1, 3)}"`), path);
  assert(html.includes(`rel="canonical" href="https://szmagicchip.com${path}"`), path);
  for (const language of languages) assert(html.includes(`hrefLang="${language}"`) || html.includes(`hreflang="${language}"`), path);
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
  assert(title && title.endsWith('| MagicChip'), path);
  assert(/name="description" content="[^"]+"/.test(html), path);
  const body = decode((html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  return { html, body, title };
}
async function main() {
  for (const lang of languages) {
    const industrial = await page(`/${lang}/products/industrial-mini-pc`);
    assert(industrial.html.includes('selection-heading'));
    const ai = await page(`/${lang}/products/ai-mini-pc`);
    for (const category of ['industrial-mini-pc', 'ai-mini-pc', 'commercial-mini-pc', 'firewall-mini-pc']) {
      const categoryPage = category === 'industrial-mini-pc' ? industrial : category === 'ai-mini-pc' ? ai : await page(`/${lang}/products/${category}`);
      assert(categoryPage.html.includes(`data-category-search="${category}"`));
      assert(categoryPage.html.includes('type="checkbox"'));
      assert(categoryPage.html.includes('data-category-query'));
    }
    const mcn1 = await page(`/${lang}/products/commercial-mini-pc/mcn1`);
    assert(mcn1.title.includes('N95/N100/N150'));
    if (lang === 'en') {
      assert.equal(ai.title, 'AI Mini PCs for Local AI & Edge Computing | MagicChip');
      assert.equal(industrial.title, 'Industrial Mini PCs with Multi-COM & LAN | MagicChip');
    }
    if (lang === 'de') {
      for (const phrase of ['Industriegeräte verbinden', 'Serielle Geräte und Datenerfassung', 'Verfügbare Modelle', 'C-Serie']) assert(industrial.body.includes(phrase), phrase);
      assert(!/MagicChip Industrial Mini PCs bring|Select an IPC series|Available models|The expanded range|Run beside the equipment/.test(industrial.body));
      assert(ai.body.includes('lokale KI'));
    }
    const listing = await page(`/${lang}/tech-docs`);
    for (const article of articles) {
      assert(listing.html.includes(`/${lang}/tech-docs/${article.id}`));
      const detail = await page(`/${lang}/tech-docs/${article.id}`);
      assert(detail.body.includes(article.translations[lang].title));
      assert(detail.html.includes('<table'));
      assert(detail.html.includes('data-article-intro') && detail.html.includes('data-article-toc'));
      assert(!detail.body.includes('Planning a configuration?'));
      assert(detail.html.includes(`href="/${lang}/products/`));
      const jsonLd = [...detail.html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      assert(jsonLd.some(item => item['@type'] === 'Article' && item.inLanguage === lang));
    }
  }
  for (const id of ['mcai1', 'mcai2', 'mcaipc3']) {
    const result = await page(`/de/products/ai-mini-pc/${id}`);
    assert(result.title.includes('KI-Mini-PC'));
    assert(!/Powered by|Choose MCAIPC|Three Mainboard Series|Configurable Computing Platform|Front and rear combo|up to 128GB|Memory and Expansion Choices/.test(result.body), id);
    assert(result.body.includes('Arbeitsspeicher'), id);
    if (id === 'mcaipc3') {
      const panel = result.html.split('id="sku-panel"')[1]?.split('</section>')[0] || '';
      assert.equal((panel.match(/>Modell</g) || []).length, 1, 'Merge common and Type specs before translation');
      assert.equal((panel.match(/>Netzwerk</g) || []).length, 1, 'Avoid duplicate translated common rows');
    }
  }
  for (const id of ['mcipc8-hdmi', 'mcipcb13']) {
    const result = await page(`/de/products/industrial-mini-pc/${id}`);
    assert(result.body.includes('Zurück zu') && result.body.includes('Industrie-Mini-PC'));
  }
  const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
  for (const article of articles) for (const lang of languages) assert(sitemap.includes(`/${lang}/tech-docs/${article.id}`));
  console.log('Live SEO/localization checks passed: three focus pages in five languages, German industrial content and five product samples, three five-language articles, internal links, canonical/hreflang and article sitemap entries.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
