import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { Article } from "../types";
/* import PageWrapper, { Row } from "../../lib/components/PageWrapper"; */

export default function Post({
  title,
  author,
  content,
  tags,
  preview,
  slug,
}: Article & { preview?: boolean }) {
  if (preview) {
    return (
      <div>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>{title}</Link>
      </div>
    );
  }

  return <div>{content}</div>;
}
