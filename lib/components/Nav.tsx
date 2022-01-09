import React from "react";
import styled from "@emotion/styled";
import useSWR from "swr";
import axios from "axios";

const Box = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  border: 3px solid #444;
  padding: 10px 15px;
  @media (max-width: 1000px) {
    position: inherit;
  }
`;

const Title = styled.div`
    margin-bottom: 15px;
`;

const Link = styled.a`
    display: block;
    margin-bottom: 14px;
`

export default function Nav() {
    const { data, error } = useSWR("/api/bibliography", axios);
    const bibliography = data?.data?.bibliography ?? [];

    return (
        <Box>
            <Title>Bibliography</Title>
            {bibliography.map(({link, name}) => (
                <Link
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {name}
                </Link>
            ))}
        </Box>
    )
} ;
