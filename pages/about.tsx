import React from "react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { format as formatBibliographies } from "./api/bibliography";
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import { fetchAPI } from "../lib/api";
import MarkdownIt from "markdown-it";
import { NavProps } from "../lib/components/Nav";

const md = new MarkdownIt();

interface Props extends NavProps {
  markdown: string;
}

const Content = styled.div`
  font-family: Raleway;
  font-weight: 500;
`;

const STP_INTRO = "SyixzsrWCAI";

const About: NextPage<Props> = ({ markdown, bibliography }: Props) => {
  return (
    <PageWrapper title="About STP" bibliography={bibliography}>
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
      <Content>
        <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} />
      </Content>
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const bibliography = await fetchAPI("bibliographies");
  const about = await fetchAPI("about");
  return {
    props: {
      markdown: about?.data?.attributes?.text || "",
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
    revalidate: 60,
  };
}

export default About;
