import { Suspense } from 'react';
import SearchResultsPage from '@/components/SearchResultsPage';

export default function SearchPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f3f7f5]" />}>
      <SearchResultsPage />
    </Suspense>
  );
}
