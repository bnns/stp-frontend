import React from "react";
import { format, fetchAPI } from "../../lib/api";
import About from "./about";

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const aboutRes = await fetchAPI("about");
  const markdown = aboutRes?.data?.attributes?.text || "";
  const bibliography = bibliographyRes?.data?.map(format) || [];

  return <About markdown={markdown} bibliography={bibliography} />;
};

export default Page;
