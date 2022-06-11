import React from "react";
import type { NextPage } from "next";
import useSWR from "swr";
import axios from "axios";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

const Contact: NextPage = () => {
  return (
    <PageWrapper title="Contact">
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

export default Contact;
