'use client'
import PageWrapper, { Row } from "../../lib/components/PageWrapper";
import { Link, Tag, LightText } from "../../lib/components";
import styled from "@emotion/styled";
import { Bibliography, ExternalLink } from "../../lib/types";

const LinkWrapper = styled.div`
  display: block;
  margin: 24px 0;
  width: 450px;
`;

type Props = {
    links: ExternalLink[];
    bibliography: Bibliography[];
}

const Links = ({ links, bibliography }: Props) => {
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
}

export default Links
