import LegalDocumentPage from '@/components/LegalDocumentPage';
import { websiteTerms } from '@/lib/website-terms';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Website Terms',
  description: 'Terms for using MagicChip product information, downloadable materials, website content and external services.',
  path: '/terms-of-use',
  }, (await params).lang);
}

export default function WebsiteTermsPage() {
  return <LegalDocumentPage documentId="terms" documents={websiteTerms} />;
}
