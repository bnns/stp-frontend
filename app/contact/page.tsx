import React from "react";
import styled from "@emotion/styled";
import { format as formatBibliographies } from "./api/bibliography";
import { fetchAPI } from "../lib/api";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

const Content = styled.p`
  font-family: Raleway;
  font-weight: 500;
`;

const Contact = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const bibliography = bibliographyRes?.data?.map(formatBibliographies) || [];

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

export default Contact;
