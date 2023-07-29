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

const Wrapper = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const Blog = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const articlesRes = await fetchAPI(
    "articles?populate=*&pagination[limit]=200"
  );
  const articles =
    articlesRes?.data?.map(formatarticles).sort(sortbypublisheddate) || [];
  const bibliography = bibliographyRes?.data?.map(formatbibliographies) || [];

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
