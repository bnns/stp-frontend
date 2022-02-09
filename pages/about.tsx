import React from "react";
import type { NextPage } from "next";
import useSWR from "swr";
import axios from "axios";
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";

interface Props {
  markdown: string;
}

const STP_INTRO = "SyixzsrWCAI";

const About: NextPage<Props> = ({ markdown }: Props) => {
  return (
    <PageWrapper>
      <div className="video-responsive">
        <iframe
          width="600"
          height="400"
          src={`https://www.youtube.com/embed/${STP_INTRO}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Welcome"
        />
      </div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </PageWrapper>
  );
};

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

export default About;
