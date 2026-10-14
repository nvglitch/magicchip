'use client';

import NextLink, { type LinkProps } from 'next/link';
import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { isPagePath, localizedHref } from '@/lib/i18n/routing';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps;

const LocalizedLink = forwardRef<HTMLAnchorElement, Props>(function LocalizedLink({ href, ...props }, ref) {
  const { language } = useLanguage();
  if (typeof href === 'string') {
    const path = href.split(/[?#]/)[0];
    if (!isPagePath(path) || props.download) {
      const anchorProps = { ...props };
      delete anchorProps.prefetch;
      delete anchorProps.replace;
      delete anchorProps.scroll;
      delete anchorProps.onNavigate;
      return <a ref={ref} href={href} {...anchorProps} />;
    }
    return <NextLink ref={ref} href={localizedHref(href, language)} {...props} />;
  }
  return <NextLink ref={ref} href={{ ...href, pathname: typeof href.pathname === 'string' ? localizedHref(href.pathname, language) : href.pathname }} {...props} />;
});

export default LocalizedLink;
