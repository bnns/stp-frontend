// GET /api/blogs?filters\[Slug\][$eq] = ...
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import Post from "../../lib/components/Post";
import PageWrapper, { Row } from "../../lib/components/PageWrapper";
import { fetchAPI } from "../../lib/api";
import {
  format as formatArticles,
  format as formatBibliographies,
} from "../api/articles";
import { Article } from "../../lib/types";
import { NavProps } from "../../lib/components/Nav";

interface Props extends NavProps {
  article: Article;
}

const ExpandedPost: NextPage<Props> = ({ article, bibliography }: Props) => {
  if (article) {
    return (
      <PageWrapper title={article.title} bibliography={bibliography}>
        <Post {...article} />
      </PageWrapper>
    );
  }

  return <div>Sorry, no article found!</div>;
};

export default ExpandedPost;

export async function getStaticPaths() {
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");
  const formattedArticles = articles?.data?.map(formatArticles) || [];
  return {
    paths: formattedArticles.map((a: Article) => ({
      params: { slug: a.slug },
    })),
    fallback: "blocking",
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticProps(context: { params: Params }) {
  const { slug } = context.params as Params;
  const bibliography = await fetchAPI("bibliographies");
  const articles = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const formattedArticles = articles?.data?.map(formatArticles) || [];
  return {
    props: {
      article: formattedArticles.length ? formattedArticles[0] : null,
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
    revalidate: 60,
  };
}
