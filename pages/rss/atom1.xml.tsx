import generateRSS, { setFeedHeaders } from "../../lib/feed";
import React from "react";
import type { NextPage, GetServerSidePropsContext } from "next";

const Atom: NextPage = () => {
  return null;
};

export default Atom;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = context.res;
  if (!res) {
    return;
  }

  const feed = await generateRSS("atom");
  setFeedHeaders(res, "atom");
  res.write(feed);
  res.end();

  return { props: {} };
}
