import generateRSS, { setFeedHeaders } from "../../lib/feed";
import React from "react";
import type { NextPage, GetServerSidePropsContext } from "next";

const Rss2: NextPage = () => {
  return null;
};

export default Rss2;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = context.res;
  if (!res) {
    return;
  }

  const feed = await generateRSS("rss");
  setFeedHeaders(res, "rss");
  res.write(feed);
  res.end();

  return { props: {} };
}
