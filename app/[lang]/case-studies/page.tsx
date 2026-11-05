import { articleListingMetadata, renderArticleListing, type ArticleListingProps } from '@/lib/editorial-pages';

export const generateMetadata = (props: ArticleListingProps) => articleListingMetadata('case-study', props);
export default function CaseStudiesPage(props: ArticleListingProps) {
  return renderArticleListing('case-study', props);
}
