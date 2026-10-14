const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// A fake browser and fake Google-tag queue: these tests make no network requests.
function browser(host = 'szmagicchip.com', blockedStorage = false) {
  let now = Date.parse('2026-10-14T00:00:00Z');
  const storage = new Map();
  const cookies = new Map([['_ga', 'test'], ['_ga_2SBJEQKDQZ', 'test'], ['magicchip-language', 'de']]);
  const scripts = [];
  let product = 'mc30s';
  class Element {
    constructor(attributes) { this.attributes = attributes; }
    getAttribute(name) { return this.attributes[name] ?? null; }
    hasAttribute(name) { return name in this.attributes; }
    closest(selector) {
      if (selector === '[data-analytics-configuration]') return this.hasAttribute('data-analytics-configuration') ? this : null;
      if (selector === 'a[href]') return this.hasAttribute('href') ? this : null;
      return null;
    }
  }
  const document = {
    title: 'Do not collect customer Alice',
    referrer: 'https://www.google.com/search?q=customer%40example.com',
    get cookie() { return Array.from(cookies, ([k, v]) => `${k}=${v}`).join('; '); },
    set cookie(value) { const [pair] = value.split(';'); const [name, content] = pair.split('='); if (value.includes('Max-Age=0')) cookies.delete(name); else cookies.set(name, content); },
    querySelector(selector) { return selector === '[data-analytics-product]' && product ? new Element({ 'data-analytics-product': product }) : null; },
    getElementById(id) { return scripts.find(script => script.id === id) || null; },
    createElement() { return { remove() { scripts.splice(scripts.indexOf(this), 1); } }; },
    head: { appendChild(script) { scripts.push(script); } },
  };
  const localStorage = {
    getItem(key) { if (blockedStorage) throw Error('Storage blocked'); return storage.get(key) || null; },
    setItem(key, value) { if (blockedStorage) throw Error('Storage blocked'); storage.set(key, value); },
  };
  const window = { location: { hostname: host, origin: `https://${host}`, pathname: '/en/products/firewall-mini-pc/mc30s', search: '?email=customer%40example.com', hash: '#private-message' }, dispatchEvent() {} };
  const sandbox = { document, window, localStorage, URL, Element, Event, Date: class extends Date { static now() { return now; } }, setTimeout() { return 1; }, clearTimeout() {} };
  const cache = new Map();
  function load(filename) {
    const file = path.resolve(__dirname, '..', filename);
    if (cache.has(file)) return cache.get(file);
    const exports = {};
    cache.set(file, exports);
    const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
    vm.runInNewContext(code, { ...sandbox, exports, require(name) {
      return load(name.startsWith('@/') ? `${name.slice(2)}.ts` : path.relative(path.resolve(__dirname, '..'), path.resolve(path.dirname(file), `${name}.ts`)));
    } });
    return exports;
  }
  return { api: load('lib/analytics.ts'), load, window, document, storage, cookies, scripts, Element, setProduct(id) { product = id; }, advance(ms) { now += ms; }, commands() { return (window.dataLayer || []).map(entry => Array.from(entry)); }, events() { return this.commands().filter(entry => entry[0] === 'event'); } };
}

const b = browser();
const a = b.api;
assert.equal(a.parseAnalyticsConsent('garbage'), null);
assert.equal(a.parseAnalyticsConsent(JSON.stringify({ version: 9, choice: 'granted', savedAt: Date.now() })), null);
assert.equal(a.parseAnalyticsConsent(JSON.stringify({ version: 1, choice: 'granted', savedAt: 100 }), 100 + a.CONSENT_LIFETIME_MS), null);
a.initializeAnalyticsConsent();
assert.equal(a.getAnalyticsConsent(), 'unknown');
assert.equal(b.scripts.length, 0);
assert.equal(b.window.gtag, undefined);
a.trackSiteEvent('email_draft_prepared', { source: 'home_form' });
a.setAnalyticsConsent('denied');
assert.equal(b.scripts.length, 0);
assert.equal(b.events().length, 0);
a.setAnalyticsConsent('granted');
assert.equal(b.scripts.length, 1);
assert.equal(b.scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-2SBJEQKDQZ');
const config = b.commands().find(entry => entry[0] === 'config')[2];
assert.equal(config.send_page_view, false);
assert.equal(config.allow_google_signals, false);
assert.equal(config.allow_ad_personalization_signals, false);
assert.equal(config.cookie_expires, 180 * 86400);
assert.equal(b.commands().find(entry => entry[1] === 'default')[2].analytics_storage, 'denied');
assert.equal(b.commands().find(entry => entry[1] === 'update')[2].ad_user_data, 'denied');
assert.equal(b.events().length, 1);
a.trackPageView();
assert.equal(b.events().length, 1, 'Initial page view is not duplicated');
b.window.location.pathname = '/de/products/firewall-mini-pc/mc30s';
a.trackPageView();
assert.equal(b.events().length, 2);
assert.equal(b.events().at(-1)[2].product_id, 'mc30s');
assert.equal(b.events().at(-1)[2].site_language, 'de');
assert.equal(b.events().at(-1)[2].page_referrer, 'https://szmagicchip.com/en/products/firewall-mini-pc/mc30s');
a.trackSiteEvent('email_draft_prepared', { source: 'home_form', email: 'customer@example.com', message: 'private-message', configuration_id: 'customer@example.com' });
a.trackAnalyticsClick({ target: new b.Element({ href: 'mailto:customer@example.com?body=private-message' }) });
a.trackAnalyticsClick({ target: new b.Element({ href: 'https://wa.me/123?text=private-message' }) });
a.trackAnalyticsClick({ target: new b.Element({ href: '/assets/certificates/mcipc8-ce-emc-certificate.pdf', download: '' }) });
assert.equal(b.events().at(-1)[1], 'file_download');
assert.equal(b.events().at(-1)[2].document_id, 'mcipc8-ce-emc-certificate');
a.trackAnalyticsClick({ target: new b.Element({ href: '/assets/certificates/mcipc8-ce-emc-certificate.pdf' }) });
assert.equal(b.events().at(-1)[1], 'document_view');
a.trackAnalyticsClick({ target: new b.Element({ 'data-analytics-configuration': 'ddr5' }) });
assert.equal(b.events().at(-1)[1], 'select_configuration');
assert.equal(b.events().at(-1)[2].configuration_id, 'ddr5');
a.trackSiteEvent('generate_lead');
assert(!b.events().some(entry => entry[1] === 'generate_lead'));
assert(!JSON.stringify(b.commands()).includes('customer'));
assert(!JSON.stringify(b.commands()).includes('private-message'));
assert(!JSON.stringify(b.commands()).includes('?'));
assert.equal(a.publicPageDetails('/en/products/firewall-mini-pc/private-customer').page_location, 'https://szmagicchip.com/en/other');
b.scripts[0].onload();
const beforeWithdrawal = b.events().length;
a.setAnalyticsConsent('denied');
assert.equal(b.window['ga-disable-G-2SBJEQKDQZ'], true);
assert(!b.cookies.has('_ga'));
assert(!b.cookies.has('_ga_2SBJEQKDQZ'));
assert(b.cookies.has('magicchip-language'));
a.trackPageView();
a.trackSiteEvent('whatsapp_click');
assert.equal(b.events().length, beforeWithdrawal);
a.setAnalyticsConsent('granted');
assert.equal(b.scripts.length, 1, 'Reaccepting reuses the loaded tag');
assert.equal(b.window['ga-disable-G-2SBJEQKDQZ'], false);
assert.equal(b.events().length, beforeWithdrawal + 1);
b.advance(a.CONSENT_LIFETIME_MS + 1);
a.refreshAnalyticsConsent();
assert.equal(a.getAnalyticsConsent(), 'unknown');
assert.equal(b.window['ga-disable-G-2SBJEQKDQZ'], true);

const pending = browser();
pending.api.initializeAnalyticsConsent();
pending.api.setAnalyticsConsent('granted');
pending.api.trackSiteEvent('email_click');
pending.api.setAnalyticsConsent('denied');
assert.equal(pending.events().length, 0, 'Withdrawal clears events queued before script load');
pending.api.setAnalyticsConsent('granted');
assert.equal(pending.scripts.length, 1, 'An in-flight tag is not duplicated');
assert(pending.commands().some(entry => entry[0] === 'config' && entry[2].allow_google_signals === false));

const local = browser('127.0.0.1');
local.api.initializeAnalyticsConsent();
local.api.setAnalyticsConsent('granted');
local.api.trackPageView();
assert.equal(local.scripts.length, 0, 'Local testing does not pollute real GA4 data');
assert.equal(local.events().length, 0);
const blocked = browser('szmagicchip.com', true);
blocked.api.initializeAnalyticsConsent();
blocked.api.setAnalyticsConsent('granted');
blocked.api.refreshAnalyticsConsent();
assert.equal(blocked.api.getAnalyticsConsent(), 'granted');
blocked.advance(blocked.api.CONSENT_LIFETIME_MS + 1);
blocked.api.refreshAnalyticsConsent();
assert.equal(blocked.api.getAnalyticsConsent(), 'unknown');

const crossTab = browser();
crossTab.api.initializeAnalyticsConsent();
crossTab.api.setAnalyticsConsent('granted');
crossTab.storage.set(a.ANALYTICS_CONSENT_KEY, JSON.stringify({ version: 1, choice: 'denied', savedAt: Date.parse('2026-10-14T00:00:00Z') }));
crossTab.api.refreshAnalyticsConsent();
assert.equal(crossTab.api.getAnalyticsConsent(), 'denied');

const policies = b.load('lib/cookie-policy.ts').cookiePolicy;
const privacy = b.load('lib/privacy-policy.ts').privacyPolicy;
for (const lang of ['en', 'de', 'fr', 'it', 'es']) {
  assert.equal(policies[lang].sections.find(section => section.id === 'analytics').paragraphs.length, 4);
  assert(policies[lang].sections.find(section => section.id === 'analytics').paragraphs.join(' ').includes('_ga_2SBJEQKDQZ'));
  assert.equal(privacy[lang].sections.find(section => section.id === 'storage').paragraphs.length, 4);
}
console.log('GA4 consent, expiry, withdrawal, cross-tab sync, blocked storage, queued events, SPA/language views, no duplicate tags, PII filtering, contact/document/configuration events, localhost suppression and five-language policies passed. No network requests were made.');
