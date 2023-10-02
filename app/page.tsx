import { format, fetchAPI } from "../lib/api";
import React from "react";
import Home from "./home";

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const meetingsRes = await fetchAPI(
    "meetings?populate=*&pagination[limit]=300"
  );
  const meetings = meetingsRes?.data?.map(format) || [];
  const bibliography = bibliographyRes?.data?.map(format) || [];

  return <Home meetings={meetings} bibliography={bibliography} />;
};

export default Page;
