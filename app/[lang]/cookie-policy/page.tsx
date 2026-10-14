import LegalDocumentPage from '@/components/LegalDocumentPage';
import { cookiePolicy } from '@/lib/cookie-policy';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Cookie Policy',
  description: 'Browser language preferences, optional Google Maps and external services used on the MagicChip website.',
  path: '/cookie-policy',
  }, (await params).lang);
}

export default function CookiePolicyPage() {
  return <LegalDocumentPage documentId="cookies" documents={cookiePolicy} />;
}
