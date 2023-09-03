import React from "react";
import { MdRssFeed } from "react-icons/md";
import styled from "@emotion/styled";
import { Bibliography } from "../types";

const Box = styled.div`
  z-index: 1;
  position: absolute;
  right: 50px;
  top: 50px;
  border: 3px solid #444;
  padding: 10px 15px;
  @media (max-width: 1450px) {
    position: inherit;
  }
  font-family: Futura;
`;

const Title = styled.div`
  margin-bottom: 15px;
`;

type LinkProps = {
  inline?: boolean;
};

const Link = styled.a<LinkProps>`
  display: ${(props) => (props.inline ? "inline" : "block")};
  margin-bottom: 14px;
`;

export interface NavProps {
  bibliography?: Bibliography[];
}

export default function Nav({ bibliography }: NavProps) {
  return (
    <Box>
      <Title>Pages</Title>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/links">Links</Link>
      <Link href="/about">About STP</Link>
      <Link href="/contact">Contact Us</Link>
      {bibliography ? <Title>Our Work</Title> : null}
      {bibliography?.map(({ link, name }: { link: string; name: string }) => (
        <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      ))}
      <Title>
        Syndicate{" "}
        <Link
          inline
          href="https://en.wikipedia.org/wiki/RSS"
          rel="noreferrer"
          target="_blank"
        >
          *
        </Link>
      </Title>
      <Link inline href="/rss/rss2.xml" rel="noreferrer" target="_blank">
        RSS <MdRssFeed />
      </Link>
      /
      <Link inline href="/rss/atom1.xml" rel="noreferrer" target="_blank">
        Atom <MdRssFeed />
      </Link>
    </Box>
  );
}
