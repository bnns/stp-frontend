import React from "react";
import { format, fetchAPI } from "../../lib/api";
import Contact from './contact'

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const bibliography = bibliographyRes?.data?.map(format) || [];

  return (
    <Contact bibliography={bibliography} />
  );
};

export default Page;
