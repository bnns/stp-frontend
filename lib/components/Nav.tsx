import React from "react";
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
`;

const Title = styled.div`
  margin-bottom: 15px;
`;

const Link = styled.a`
  display: block;
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
      <Link href="/about">About STP</Link>
      <Link href="/contact">Contact Us</Link>
      <Link href="/badiou">Badiou Reading Group</Link>
      {bibliography ? <Title>Our Work</Title> : null}
      {bibliography?.map(({ link, name }: { link: string; name: string }) => (
        <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      ))}
    </Box>
  );
}
