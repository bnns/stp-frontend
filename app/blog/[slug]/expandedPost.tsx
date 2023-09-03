'use client'
import Script from "next/script";
import Post from "../../../lib/components/Post";
import PageWrapper from "../../../lib/components/PageWrapper";
import { Article } from "../../../lib/types";
import { NavProps } from "../../../lib/components/Nav";

type Props = {
    article: Article;
}

const ExpandedPost = ({ article, bibliography }: Props & NavProps ) => {
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
