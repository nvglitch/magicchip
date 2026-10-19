'use client';

import Link from '@/components/LocalizedLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { emailInquiryCopy } from '@/lib/email-inquiry';

export default function InquiryPrivacyNotice() {
  const { language } = useLanguage();
  const labels = emailInquiryCopy[language];
  return <p className="text-xs leading-5 text-slate-500">{labels.before} <Link href="/privacy-policy" className="text-brand underline underline-offset-2 hover:text-brand-hover">{labels.privacy}</Link></p>;
}
