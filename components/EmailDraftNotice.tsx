'use client';

import LocalizedLink from '@/components/LocalizedLink';
import { useState } from 'react';
import { Copy, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { emailInquiryCopy } from '@/lib/email-inquiry';
import type { EmailInquiryDraft } from '@/lib/email-inquiry';

export default function EmailDraftNotice({ draft, onEdit }: { draft: EmailInquiryDraft; onEdit: () => void }) {
  const { language } = useLanguage();
  const labels = emailInquiryCopy[language];
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  }

  return (
    <div className="text-left">
      <Mail className="h-8 w-8 text-blue-600" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold text-slate-900" role="status">{labels.ready}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{labels.notice}</p>
      <LocalizedLink href={`mailto:${draft.recipient}`} className="mt-2 inline-block break-all font-medium text-blue-600 hover:underline">{draft.recipient}</LocalizedLink>
      <label className="mt-5 block text-sm font-medium text-slate-700">
        {labels.message}
        <textarea readOnly value={draft.body} rows={6} className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm font-normal leading-6 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </label>
      <div className="mt-4 flex flex-wrap gap-3">
        <LocalizedLink href={draft.mailto} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{labels.open}</LocalizedLink>
        <button type="button" onClick={copyMessage} className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"><Copy className="h-4 w-4" aria-hidden="true" />{copyStatus === 'copied' ? labels.copied : labels.copy}</button>
        <button type="button" onClick={onEdit} className="px-1 py-2 text-sm font-semibold text-blue-600 hover:underline">{labels.back}</button>
      </div>
      <p aria-live="polite" className="mt-3 text-sm text-slate-500">{copyStatus === 'copied' ? labels.copied : copyStatus === 'failed' ? labels.copyError : ''}</p>
    </div>
  );
}
