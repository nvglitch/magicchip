import { articleDetailMetadata, renderArticleDetail, type ArticleDetailProps } from '@/lib/editorial-pages';

export const generateMetadata = (props: ArticleDetailProps) => articleDetailMetadata('technical', props);
export default function TechnicalArticlePage(props: ArticleDetailProps) {
  return renderArticleDetail('technical', props);
}
