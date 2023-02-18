import type { NextPage } from "next";
import { fetchAPI } from "../../lib/api";
import {
  format as formatArticles,
  format as formatBibliographies,
} from "../api/articles";
import PageWrapper, { Row } from "../../lib/components/PageWrapper";
import Post from "../../lib/components/Post";
import { Article } from "../../lib/types";
import { NavProps } from "../../lib/components/Nav";
import { sortByPublishedDate } from "../../lib/dates";

import React from "react";
import styled from "@emotion/styled";
import { cx } from "@emotion/css";

interface Props extends NavProps {
  articles: Article[];
}

const Wrapper = styled.div`
  margin: 20px 0;
`;

const Blog: NextPage<Props> = ({ articles, bibliography }: Props) => {
  return (
    <PageWrapper title="Blog" bibliography={bibliography}>
      {!articles.length ? <p>There are no posts yet.</p> : null}
      {articles.map((a: Article) => (
        <Wrapper key={a.title}>
          <Post {...a} preview />
        </Wrapper>
      ))}
    </PageWrapper>
  );
};

export default Blog;

export async function getStaticProps() {
  const bibliography = await fetchAPI("bibliographies");
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");
  return {
    props: {
      articles:
        articles?.data?.map(formatArticles).sort(sortByPublishedDate) || [],
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
    revalidate: 60,
  };
}
