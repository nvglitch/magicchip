import { languageFromPath, withoutLanguage } from '@/lib/i18n/routing';

export const GA_MEASUREMENT_ID = 'G-2SBJEQKDQZ';
export const ANALYTICS_CONSENT_KEY = 'magicchip-analytics-consent';
export const ANALYTICS_SETTINGS_EVENT = 'magicchip:analytics-settings';
export const CONSENT_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;
export type AnalyticsConsent = 'loading' | 'unknown' | 'granted' | 'denied';
type ConsentRecord = { version: 1; choice: 'granted' | 'denied'; savedAt: number };
type SiteEvent = 'whatsapp_click' | 'email_click' | 'email_draft_prepared' | 'chat_widget_open' | 'file_download' | 'document_view' | 'select_configuration';
type EventDetails = { source?: string; document_id?: string; configuration_id?: string; configuration_type?: string };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let status: AnalyticsConsent = 'loading';
let record: ConsentRecord | null = null;
let initialized = false;
let tagInitialized = false;
let tagLoaded = false;
let expiryTimer: ReturnType<typeof setTimeout> | undefined;
let lastPage = '';
let previousPage = '';
const listeners = new Set<() => void>();
const deniedState = { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };

export function parseAnalyticsConsent(value: string | null, now = Date.now()): ConsentRecord | null {
  try {
    const candidate = JSON.parse(value || 'null');
    if (candidate?.version !== 1 || !['granted', 'denied'].includes(candidate.choice)
      || !Number.isFinite(candidate.savedAt) || candidate.savedAt > now || now - candidate.savedAt >= CONSENT_LIFETIME_MS) return null;
    return { version: 1, choice: candidate.choice, savedAt: candidate.savedAt };
  } catch { return null; }
}

function storedConsent(): ConsentRecord | null | undefined {
  try { return parseAnalyticsConsent(localStorage.getItem(ANALYTICS_CONSENT_KEY)); }
  catch { return undefined; }
}

function productionHost(): boolean {
  return typeof window !== 'undefined' && ['szmagicchip.com', 'www.szmagicchip.com'].includes(window.location.hostname);
}

function disableTag() {
  if (typeof window === 'undefined') return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  // Remove commands queued while a previously accepted tag was still loading.
  if (!tagLoaded && window.dataLayer) { window.dataLayer.length = 0; tagInitialized = false; }
  if (tagLoaded) window.gtag?.('consent', 'update', deniedState);
  lastPage = '';
  previousPage = '';
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (!/^_ga(?:_[A-Za-z0-9]+)?$/.test(name)) continue;
    const removal = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = removal;
    document.cookie = `${removal}; Domain=${window.location.hostname}`;
    if (productionHost()) document.cookie = `${removal}; Domain=szmagicchip.com`;
  }
}

function applyRecord(next: ConsentRecord | null) {
  record = next;
  const nextStatus = next?.choice || 'unknown';
  const changed = nextStatus !== status;
  status = nextStatus;
  if (expiryTimer) clearTimeout(expiryTimer);
  if (next) {
    const remaining = next.savedAt + CONSENT_LIFETIME_MS - Date.now();
    expiryTimer = setTimeout(refreshAnalyticsConsent, Math.min(Math.max(remaining, 1), 2_147_000_000));
  }
  if (status !== 'granted') disableTag();
  if (changed) listeners.forEach(listener => listener());
  if (status === 'granted') {
    if (changed && tagInitialized && productionHost()) {
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
      window.gtag?.('consent', 'update', { ...deniedState, analytics_storage: 'granted' });
    }
    trackPageView();
  }
}

export function initializeAnalyticsConsent() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  applyRecord(storedConsent() || null);
}

export function refreshAnalyticsConsent() {
  const saved = storedConsent();
  applyRecord(saved === undefined ? (record && Date.now() - record.savedAt < CONSENT_LIFETIME_MS ? record : null) : saved);
}

export function setAnalyticsConsent(choice: 'granted' | 'denied') {
  const next: ConsentRecord = { version: 1, choice, savedAt: Date.now() };
  try { localStorage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify(next)); } catch { /* Apply this visit's choice even when storage is blocked. */ }
  applyRecord(next);
}

export function subscribeAnalyticsConsent(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}
export const getAnalyticsConsent = () => status;
export const getServerAnalyticsConsent = (): AnalyticsConsent => 'loading';
export function openAnalyticsSettings() { window.dispatchEvent(new Event(ANALYTICS_SETTINGS_EVENT)); }

// Only public routes and identifiers rendered by the product/news page are used.
// Search terms, URL queries, hashes, document titles and form values are never copied.
export function publicPageDetails(pathname: string, productId = '', articleId = '') {
  const language = languageFromPath(pathname) || 'en';
  const plain = withoutLanguage(pathname).replace(/\/$/, '') || '/';
  const staticPaths = ['/', '/about', '/company', '/factory', '/contact', '/products', '/scenarios', '/documents', '/downloads', '/tech-docs', '/news', '/search', '/privacy-policy', '/cookie-policy', '/terms-of-use'];
  const categories = ['industrial-mini-pc', 'ai-mini-pc', 'commercial-mini-pc', 'firewall-mini-pc'];
  const pieces = plain.split('/').filter(Boolean);
  const product = pieces[0] === 'products' && categories.includes(pieces[1]) && pieces.length === 3
    && pieces[2] === productId && /^[a-z0-9-]{1,80}$/.test(productId);
  const article = pieces[0] === 'news' && pieces.length === 2 && pieces[1] === articleId && /^[a-z0-9-]{1,80}$/.test(articleId);
  const category = pieces[0] === 'products' && pieces.length === 2 && categories.includes(pieces[1]);
  const path = staticPaths.includes(plain) || product || article || category ? plain : '/other';
  return {
    page_location: `https://szmagicchip.com/${language}${path === '/' ? '' : path}`,
    page_title: `MagicChip | ${product ? productId : article ? articleId : path === '/' ? 'Home' : path.slice(1)}`,
    site_language: language,
    ...(product ? { product_id: productId, product_category: pieces[1] } : {}),
  };
}

function pageDetails() {
  return publicPageDetails(window.location.pathname,
    document.querySelector('[data-analytics-product]')?.getAttribute('data-analytics-product') || '',
    document.querySelector('[data-analytics-article]')?.getAttribute('data-analytics-article') || '');
}

function referrerOrigin() {
  try {
    const url = new URL(document.referrer);
    return ['https:', 'http:'].includes(url.protocol) ? url.origin : '';
  } catch { return ''; }
}

function canTrack() {
  if (record && Date.now() - record.savedAt >= CONSENT_LIFETIME_MS) applyRecord(null);
  return status === 'granted' && productionHost();
}

function loadTag() {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params -- Google's documented queue uses Arguments objects.
    window.gtag = function () { window.dataLayer!.push(arguments); };
  }
  if (tagInitialized) return;
  tagInitialized = true;
  window.gtag('consent', 'default', deniedState);
  window.gtag('consent', 'update', { ...deniedState, analytics_storage: 'granted' });
  window.gtag('set', { ...pageDetails(), page_referrer: referrerOrigin(), allow_google_signals: false, allow_ad_personalization_signals: false });
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    cookie_domain: 'szmagicchip.com', cookie_path: '/', cookie_expires: CONSENT_LIFETIME_MS / 1000,
    ...pageDetails(), page_referrer: referrerOrigin(),
  });
  if (document.getElementById('magicchip-ga4')) return;
  const script = document.createElement('script');
  script.id = 'magicchip-ga4';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.onload = () => { tagLoaded = true; };
  script.onerror = () => {
    script.remove();
    tagInitialized = false;
    if (window.dataLayer) window.dataLayer.length = 0;
    lastPage = '';
  };
  document.head.appendChild(script);
}

export function trackPageView() {
  if (!canTrack()) return;
  const details = pageDetails();
  if (details.page_location === lastPage) return;
  loadTag();
  const page_referrer = previousPage || referrerOrigin();
  window.gtag?.('set', { ...details, page_referrer });
  window.gtag?.('event', 'page_view', { ...details, page_referrer, send_to: GA_MEASUREMENT_ID });
  lastPage = details.page_location;
  previousPage = lastPage;
}

export function trackSiteEvent(name: SiteEvent, details: EventDetails = {}) {
  if (!canTrack()) return;
  const events: SiteEvent[] = ['whatsapp_click', 'email_click', 'email_draft_prepared', 'chat_widget_open', 'file_download', 'document_view', 'select_configuration'];
  if (!events.includes(name)) return;
  loadTag();
  const safeDetails: Record<string, string> = {};
  for (const key of ['source', 'document_id', 'configuration_id', 'configuration_type'] as const) {
    const value = details[key];
    if (typeof value === 'string' && /^[a-zA-Z0-9_-]{1,100}$/.test(value)) safeDetails[key] = value;
  }
  window.gtag?.('event', name, { ...pageDetails(), ...safeDetails, send_to: GA_MEASUREMENT_ID });
}

export function trackAnalyticsClick(event: MouseEvent) {
  const target = event.target instanceof Element ? event.target : null;
  const configuration = target?.closest('[data-analytics-configuration]');
  if (configuration) {
    trackSiteEvent('select_configuration', { configuration_id: configuration.getAttribute('data-analytics-configuration') || '', configuration_type: configuration.getAttribute('data-analytics-configuration-type') || 'sku' });
    return;
  }
  const link = target?.closest('a[href]');
  if (!link) return;
  try {
    const url = new URL(link.getAttribute('href')!, window.location.origin);
    if (url.protocol === 'mailto:') trackSiteEvent('email_click');
    else if (['wa.me', 'api.whatsapp.com'].includes(url.hostname)) trackSiteEvent('whatsapp_click');
    else if (url.origin === window.location.origin && url.pathname.startsWith('/assets/') && /\.pdf$/i.test(url.pathname)) {
      const basename = url.pathname.split('/').pop()?.replace(/\.pdf$/i, '') || '';
      trackSiteEvent(link.hasAttribute('download') ? 'file_download' : 'document_view', { document_id: /^[a-zA-Z0-9_-]{1,100}$/.test(basename) ? basename : 'brochure' });
    }
  } catch { /* Invalid links have no analytics side effect. */ }
}
