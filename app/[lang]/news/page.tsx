import { permanentRedirect } from 'next/navigation';
import { localizedHref } from '@/lib/i18n/routing';

export default async function LegacyNewsPage({ params }: { params: Promise<{ lang: string }> }) {
  permanentRedirect(localizedHref('/case-studies', (await params).lang));
}
