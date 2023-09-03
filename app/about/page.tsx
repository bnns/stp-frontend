import React from "react";
import { format as formatBibliography } from "../api/bibliography";
import { fetchAPI } from "../../lib/api";
import About from './about'

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const aboutRes = await fetchAPI("about");
  const markdown = aboutRes?.data?.attributes?.text || "";
  const bibliography = bibliographyRes?.data?.map(formatBibliography) || [];

  return <About markdown={markdown} bibliography={bibliography} />
};

export default Page;
