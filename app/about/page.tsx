import React from "react";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { format as formatBibliographies } from "./api/bibliography";
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import { fetchAPI } from "../lib/api";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

const Content = styled.div`
  font-family: Raleway;
  font-weight: 500;
`;

const STP_INTRO = "SyixzsrWCAI";

const About = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const aboutRes = await fetchAPI("about");
  const markdown = aboutRes?.data?.attributes?.text || "";
  const bibliography = bibliographyRes?.data?.map(formatBibliographies) || [];

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

export default About;
