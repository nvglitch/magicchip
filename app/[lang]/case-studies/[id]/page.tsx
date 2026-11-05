import { articleDetailMetadata, renderArticleDetail, type ArticleDetailProps } from '@/lib/editorial-pages';

export const generateMetadata = (props: ArticleDetailProps) => articleDetailMetadata('case-study', props);
export default function CaseStudyPage(props: ArticleDetailProps) {
  return renderArticleDetail('case-study', props);
}
