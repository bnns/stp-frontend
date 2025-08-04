import { fetchAPI, format } from "../lib/api";
import React from "react";
import Home from "./home";

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const meetingsRes = await fetchAPI(
    "meetings?populate=*&pagination[limit]=300",
  );
  const zoomRes = await fetchAPI("zoom");
  const meetings = meetingsRes?.data?.map(format) || [];
  const bibliography = bibliographyRes?.data?.map(format) || [];
  const zoom = format(zoomRes?.data) as { link: string };

  return <Home meetings={meetings} bibliography={bibliography} zoom={zoom} />;
};

export default Page;
