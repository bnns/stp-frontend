import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import md from "../markdown";
import { Article } from "../types";
import { Row } from "../../lib/components/PageWrapper";
import { formatDate } from "../dates";

const getPreview = (md: string) => md.split(" ").slice(0, 100).join(" ");

const Content = styled(Row)`
  font-family: var(--font-raleway);
  flex-direction: column;
  margin-top: 1em;
  img {
    width: 100%;
  }
  margin-bottom: 2em;
  .footnote-item {
    font-size: 12px;
  }
`;

const Item = styled.div`
  font-family: Futura;
  flex: 1;
`;

const DateText = styled.div<{ align: "left" | "right" | "center" }>`
  flex: 1;
  font-family: var(--font-raleway);
  font-weight: 400;
  font-size: 14px;
  text-align: ${(props) => props.align};
  align-self: center;
`;

export default function Post({
  title,
  author,
  content,
  tags,
  preview,
  slug,
  summary,
  publishedAt,
}: Article & { preview?: boolean }) {
  if (preview) {
    return (
      <div>
        <Row>
          <Item>
            <Link href={`/blog/${encodeURIComponent(slug)}`}>{title}</Link>
          </Item>
          <DateText align="right">{formatDate(publishedAt)}</DateText>
        </Row>
        <Content>
          {/* <Markdown openLinksInNewTab>{getPreview(content)}</Markdown> */}
          {summary}
        </Content>
      </div>
    );
  }

  return (
    <Content>
      <DateText align="center">{formatDate(publishedAt)}</DateText>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </Content>
  );
}
