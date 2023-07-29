import type { NextPage } from "next";
import { format as formatBibliographies } from "./api/bibliography";
import { format as formatLinks } from "./api/links";
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import styled from "@emotion/styled";
import { ExternalLink } from "../lib/types";
import { Link, Tag, LightText } from "../lib/components";
import { NavProps } from "../lib/components/Nav";
import { fetchAPI } from "../lib/api";

const LinkWrapper = styled.div`
  display: block;
  margin: 24px 0;
  width: 450px;
`;

const Links = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const linksRes = await fetchAPI("links");

  const links = linksRes?.data?.map(formatLinks) || [];
  const bibliography = bibliographyRes?.data?.map(formatBibliographies) || [];

  return (
    <PageWrapper title="Links" bibliography={bibliography}>
      {!links.length ? <p>There are no links yet.</p> : null}
      {links?.map(({ name, link, description, tags }) => (
        <LinkWrapper key={`${name}-wrapper`}>
          <Link
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </Link>
          <Row>
            <LightText>{description}</LightText>
          </Row>
          <Row flexWrap>
            {tags?.map(({ Name }) => (
              <Tag key={Name} dark>
                <p>{Name}</p>
              </Tag>
            ))}
          </Row>
        </LinkWrapper>
      ))}
    </PageWrapper>
  );
};

export default Links;
