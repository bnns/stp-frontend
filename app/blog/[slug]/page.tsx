import { fetchAPI } from "../../../lib/api";
import {
  format as formatArticles,
  format as formatBibliography,
} from "../../api/articles";
import { Article } from "../../../lib/types";
import ExpandedPost from './expandedPost';

export async function generateStaticParams() {
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");
  const formattedArticles = articles?.data?.map(formatArticles) || [];

  return formattedArticles.map((a: Article) => ({
    slug: a.slug,
  }));
}

const Page = async ({ params: {slug} }: { params: { slug: string } }) => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const articlesRes = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const formattedArticles = articlesRes?.data?.map(formatArticles) || [];
  const bibliography = bibliographyRes?.data?.map(formatBibliography) || [];
  const article = formattedArticles.length ? formattedArticles[0] : null;

    return (
      <ExpandedPost article={article} bibliography={bibliography} />
    );
};

export default Page;
