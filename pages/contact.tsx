import React from "react";
import styled from "@emotion/styled";
import { NavProps } from "../lib/components/Nav";
import { format as formatBibliographies } from "./api/bibliography";
import { fetchAPI } from "../lib/api";
import type { NextPage } from "next";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

interface Props extends NavProps {}

const Content = styled.p`
  font-family: Raleway;
  font-weight: 500;
`;

const Contact: NextPage<Props> = ({ bibliography }) => {
  return (
    <PageWrapper title="Contact STP" bibliography={bibliography}>
      <Content>
        <a
          style={{ display: "inline" }}
          href="mailto:SubsetOfTheoreticalPractice@gmail.com"
        >
          Email us
        </a>{" "}
        if you&apos;re interested in working together or would like to subscribe
        to new developments in the group.
      </Content>
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const bibliography = await fetchAPI("bibliographies");
  return {
    props: {
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
    revalidate: 60,
  };
}

export default Contact;
