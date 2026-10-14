import LegalDocumentPage from '@/components/LegalDocumentPage';
import { privacyPolicy } from '@/lib/privacy-policy';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Privacy Policy',
  description: 'How Shenzhen Magic Chip Technology Co., Ltd. handles website information, product inquiries, service providers and privacy requests.',
  path: '/privacy-policy',
  }, (await params).lang);
}

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage documentId="privacy" documents={privacyPolicy} />;
}
