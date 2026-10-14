import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidLanguage } from '@/lib/i18n/config';
import { isPagePath, languageFromPath, LANGUAGE_COOKIE, localizedHref, preferredLanguage } from '@/lib/i18n/routing';

const CANONICAL_HOST = 'szmagicchip.com';

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host');
  const requestHost = forwardedHost || request.headers.get('host') || '';
  const hostname = requestHost.split(',')[0].trim().toLowerCase().replace(/:\d+$/, '');

  if (hostname === `www.${CANONICAL_HOST}`) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.host = CANONICAL_HOST;
    return NextResponse.redirect(destination, 308);
  }

  const pathname = request.nextUrl.pathname;
  if (!isPagePath(pathname) || languageFromPath(pathname)) return NextResponse.next();
  const destination = request.nextUrl.clone();
  if (pathname === '/') {
    const saved = request.cookies.get(LANGUAGE_COOKIE)?.value;
    const language = isValidLanguage(saved || '') ? saved! : preferredLanguage(request.headers.get('accept-language'));
    destination.pathname = `/${language}`;
    const response = NextResponse.redirect(destination, 307);
    response.headers.set('Cache-Control', 'private, no-store');
    response.headers.set('Vary', 'Cookie, Accept-Language');
    return response;
  }
  destination.pathname = localizedHref(pathname, 'en');
  return NextResponse.redirect(destination, 308);
}
