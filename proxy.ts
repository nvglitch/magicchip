import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

  return NextResponse.next();
}