import { getAllNews } from '@/lib/content-loader';
import NewsPageClient from './NewsPageClient';

export default function NewsPage() {
  const newsArticles = getAllNews();

  return <NewsPageClient newsArticles={newsArticles} />;
}
