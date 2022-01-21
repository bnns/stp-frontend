import React from "react";
import type { NextPage } from "next";
import useSWR from "swr";
import axios from "axios";
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from 'react-markdown'

interface Props {
    markdown: string;
}

const About: NextPage<Props> = ({ markdown }: Props) => {
  return (
    <PageWrapper>
        <ReactMarkdown>{markdown}</ReactMarkdown>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const about = await fetchAPI("about");
  if (about?.data?.attributes?.text) {
    return {
      props: { markdown: about?.data?.attributes?.text },
    };
  }
  return {
    props: {},
  };
}

export default About
