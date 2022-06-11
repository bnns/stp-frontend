import React from "react";
import Script from "next/script";
import type { NextPage } from "next";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

const Badiou: NextPage = () => {
  return (
    <PageWrapper title="Badiou Reading Group">
      <h2>Badiou Reading Group</h2>
      <p>Coming Soon</p>
      <Script strategy="lazyOnload" src="/stp-hasse.js" />
    </PageWrapper>
  );
};

export default Badiou;
