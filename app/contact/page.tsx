import React from "react";
import { format as formatBibliography } from "../api/bibliography";
import { fetchAPI } from "../../lib/api";
import Contact from './contact'

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const bibliography = bibliographyRes?.data?.map(formatBibliography) || [];

  return (
    <Contact bibliography={bibliography} />
  );
};

export default Page;
