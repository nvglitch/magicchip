import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Mini PC Application Scenarios',
  description: 'Match MagicChip industrial, AI, commercial, and firewall Mini PCs to automation, edge AI, networking, digital signage, business, and IoT deployments.',
  path: '/scenarios',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
