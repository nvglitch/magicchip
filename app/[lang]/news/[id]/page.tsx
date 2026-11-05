import { notFound, permanentRedirect } from 'next/navigation';
import { getAllNews } from '@/lib/content-loader';
import { localizedHref } from '@/lib/i18n/routing';

// Historical demo news is retained locally, never relabeled as a customer story.
export default async function LegacyNewsArticlePage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  if (!getAllNews().some(article => article.id === id)) notFound();
  permanentRedirect(localizedHref('/case-studies', lang));
}
