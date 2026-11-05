import ResourceHub from '@/components/ResourceHub';
import { getPublishedArticles } from '@/lib/editorial';

export default function DocumentsPage() {
  return <ResourceHub caseStudyCount={getPublishedArticles('case-study').length} technicalArticleCount={getPublishedArticles('technical').length} />;
}
