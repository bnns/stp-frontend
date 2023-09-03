'use client'
import React from "react";
import styled from "@emotion/styled";
import PageWrapper from "../../lib/components/PageWrapper";
import Post from "../../lib/components/Post";
import { Article } from "../../lib/types";
import { NavProps } from "../../lib/components/Nav";

const Wrapper = styled.div`
  margin: 20px 0;
  width: 100%;
`;

type Props = {
    articles: Article[]
}

const Blog = async ({articles, bibliography}: NavProps & Props) => {

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
