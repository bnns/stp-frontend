import { format, fetchAPI } from "../../lib/api";
import { sortByPublishedDate } from "../../lib/dates";
import Blog from './blog'

import React from "react";

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const articlesRes = await fetchAPI(
    "articles?populate=*&pagination[limit]=200"
  );
  const articles =
    articlesRes?.data?.map(format).sort(sortByPublishedDate) || [];
  const bibliography = bibliographyRes?.data?.map(format) || [];

  return (
    <Blog bibliography={bibliography} articles={articles} />
  );
};

export default Page;
