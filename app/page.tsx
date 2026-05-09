import { fetchAPI, format } from "../lib/api";
import React from "react";
import Home from "./home";
import { getSiteConfig } from "../lib/site-config";

export const dynamic = 'force-dynamic';

const Page = async () => {
  const config = getSiteConfig();
  const bibliographyRes = await fetchAPI("bibliographies");
  const meetingsRes = await fetchAPI(
    "meetings?populate=*&pagination[limit]=300",
  );
  const zoomRes = await fetchAPI("zoom");
  const meetings = meetingsRes?.data?.map(format) || [];
  const bibliography = bibliographyRes?.data?.map(format) || [];
  const zoom = format(zoomRes?.data) as { link: string };

  return <Home meetings={meetings} bibliography={bibliography} zoom={zoom} siteConfig={config} />;
};

export default Page;
