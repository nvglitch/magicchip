import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Mini PC Application Scenarios',
  description: 'Compare MagicChip systems for industrial automation, local AI, network security, digital signage, office computing, IoT, panel PC / HMI and NAS storage. Explore uses, selection checks and recommended models.',
  path: '/scenarios',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
