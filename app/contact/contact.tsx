'use client'
import React from "react";
import styled from "@emotion/styled";
import PageWrapper from "../../lib/components/PageWrapper";
import { NavProps } from "../../lib/components/Nav";

const Content = styled.p`
  font-family: var(--font-raleway);
  font-weight: 400;
`;

const Contact = async ({ bibliography }: NavProps) => {
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
