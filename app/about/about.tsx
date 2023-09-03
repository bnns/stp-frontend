'use client'
import React from "react";
import styled from "@emotion/styled";
import PageWrapper  from "../../lib/components/PageWrapper";
import MarkdownIt from "markdown-it";
import {Bibliography}  from "../../lib/types";

const md = new MarkdownIt();

const Content = styled.div`
  font-family: var(--font-raleway);
  font-weight: 400;
`;

const STP_INTRO = "SyixzsrWCAI";

type Props = {
    markdown: string;
    bibliography: Bibliography[]
}

const About = ({markdown, bibliography}: Props) => {
  return (
    <PageWrapper title="About STP" bibliography={bibliography}>
      <div className="video-responsive">
        <iframe
          width="600"
          height="400"
          src={`https://www.youtube.com/embed/${STP_INTRO}`}
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
}

export default About
