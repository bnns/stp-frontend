import { fetchAPI } from "../lib/api";
import { format as formatMeetings } from "./api/meetings";
import { format as formatBibliographies } from "./api/bibliography";
import React from "react";
import Home from "./home";

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const meetingsRes = await fetchAPI(
    "meetings?populate=*&pagination[limit]=300"
  );
  const meetings = meetingsRes?.data?.map(formatMeetings) || [];
  const bibliography = bibliographyRes?.data?.map(formatBibliographies) || [];

  return <Home meetings={meetings} bibliography={bibliography} />;
};

export default Page;
