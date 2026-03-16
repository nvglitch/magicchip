import { getAllNews } from '@/lib/content-loader';
import { notFound } from 'next/navigation';
import NewsArticleClient from './NewsArticleClient';

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const newsArticles = getAllNews();
  const article = newsArticles.find(a => a.id === params.id);

  if (!article) {
    notFound();
  }

  return <NewsArticleClient article={article} />;
}

export async function generateStaticParams() {
  const newsArticles = getAllNews();
  return newsArticles.map(article => ({
    id: article.id,
  }));
}
