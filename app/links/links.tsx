"use client";
import PageWrapper, { Row } from "../../lib/components/PageWrapper";
import { Link, Tag, LightText } from "../../lib/components";
import styled from "@emotion/styled";
import { Bibliography, ExternalLink } from "../../lib/types";

const LinkWrapper = styled.div`
  display: block;
  margin: 0 0 24px 0;
  width: 450px;
`;

type Props = {
  links: ExternalLink[];
  bibliography: Bibliography[];
};

const Links = ({ links, bibliography }: Props) => {
  const grouped = links.reduce<Record<string, ExternalLink[]>>((cats, link) => {
    if (cats[link.category]) {
      return { ...cats, [link.category]: cats[link.category].concat([link]) };
    }
    return { ...cats, [link.category]: [link] };
  }, {});

  return (
    <PageWrapper title="Links" bibliography={bibliography}>
      {!links.length ? <p>There are no links yet.</p> : null}
      {Object.keys(grouped).map((category) => (
        <Row key={category}>
          <Row>
            <strong>{category}</strong>
          </Row>
          {grouped[category].map(
            ({ name, link, description, tags, category }) => (
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
            ),
          )}
        </Row>
      ))}
    </PageWrapper>
  );
};

export default Links;
