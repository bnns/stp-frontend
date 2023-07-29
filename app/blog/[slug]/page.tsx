// GET /api/blogs?filters\[Slug\][$eq] = ...
import type { NextPage } from "next";
import Script from "next/script";
import { ParsedUrlQuery } from "querystring";

import Post from "../../lib/components/Post";
import PageWrapper from "../../lib/components/PageWrapper";
import { fetchAPI } from "../../lib/api";
import {
  format as formatArticles,
  format as formatBibliographies,
} from "../api/articles";
import { Article } from "../../lib/types";
import { NavProps } from "../../lib/components/Nav";

export async function generateStaticParams() {
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");
  const formattedArticles = articles?.data?.map(formatArticles) || [];

  return formattedArticles.map((a: Article) => ({
    slug: a.slug,
  }));
}

const ExpandedPost = async ({ params }: { params: { slug: string } }) => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const articlesRes = await fetchAPI(`articles?filters[slug][$eq]=${slug}`);
  const formattedArticles = articlesRes?.data?.map(formatArticles) || [];
  const bibliography = bibliographyRes?.data?.map(formatBibliographies) || [];
  const article = formattedArticles.length ? formattedArticles[0] : null;

  if (article) {
    return (
      <PageWrapper title={article.title} bibliography={bibliography}>
        <Post {...article} />
        <Script src="https://cdn.commento.io/js/commento.js" />
        <div id="commento" />
      </PageWrapper>
    );
  }

  return <div>Sorry, no article found!</div>;
};

export default ExpandedPost;
