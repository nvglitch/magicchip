import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Mini PC Application Scenarios',
  description: 'Compare MagicChip systems for industrial automation, local AI, network security, digital signage, office computing, IoT, panel PC / HMI and NAS storage. Explore uses, selection checks and recommended models.',
  path: '/scenarios',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
