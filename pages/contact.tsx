import React from "react";
import { NavProps } from "../lib/components/Nav";
import { format as formatBibliographies } from "./api/bibliography";
import { fetchAPI } from "../lib/api";
import type { NextPage } from "next";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

interface Props extends NavProps {}

const Contact: NextPage<Props> = ({ bibliography }) => {
  return (
    <PageWrapper title="Contact STP" bibliography={bibliography}>
      <p>
        <a
          style={{ display: "inline" }}
          href="mailto:SubsetOfTheoreticalPractice@gmail.com"
        >
          Email us
        </a>{" "}
        if you&apos;re interested in working together or would like to subscribe
        to new developments in the group.
      </p>
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const bibliography = await fetchAPI("bibliographies");
  return {
    props: {
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
  };
}

export default Contact;
