import { articleListingMetadata, renderArticleListing, type ArticleListingProps } from '@/lib/editorial-pages';

export const generateMetadata = (props: ArticleListingProps) => articleListingMetadata('technical', props);
export default function TechnicalArticlesPage(props: ArticleListingProps) {
  return renderArticleListing('technical', props);
}
