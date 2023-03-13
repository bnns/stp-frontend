import type { NextPage } from "next";
import { format as formatBibliographies } from "./api/bibliography";
import { format as formatLinks } from "./api/links";
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import styled from "@emotion/styled";
import { ExternalLink } from "../lib/types";
import { Link, Tag, LightText } from "../lib/components";
import { fetchAPI } from "../lib/api";

const LinkWrapper = styled.div`
  display: block;
  margin: 24px 0;
  width: 450px;
`;

interface Props extends NavProps {
  links: ExternalLink[];
}

const Links: NextPage<Props> = ({ links, bibliography }: Props) => {
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

export async function getStaticProps() {
  const bibliography = await fetchAPI("bibliographies");
  const links = await fetchAPI("links");

  return {
    props: {
      links: links?.data?.map(formatLinks) || [],
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
    revalidate: 60,
  };
}

export default Links;
