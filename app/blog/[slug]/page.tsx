import { fetchAPI, format } from "../../../lib/api";
import { Article } from "../../../lib/types";
import ExpandedPost from './expandedPost';

export async function generateStaticParams() {
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");
  const formattedArticles = articles?.data?.map(format) || [];

  return formattedArticles.map((a: Article) => ({
    slug: a.slug,
  }));
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const bibliographyRes = await fetchAPI("bibliographies");
  const articlesRes = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const formattedArticles = articlesRes?.data?.map(format) || [];
  const bibliography = bibliographyRes?.data?.map(format) || [];
  const article = formattedArticles.length ? formattedArticles[0] : null;

  return (
    <ExpandedPost article={article} bibliography={bibliography} />
  );
};

export default Page;
