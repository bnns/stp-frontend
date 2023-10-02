import { format, fetchAPI } from "../../lib/api";
import { ExternalLink } from '../../lib/types'
import Links from './links'

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const linksRes = await fetchAPI("links");

  const links: ExternalLink[] = linksRes?.data?.map(format) || [];
  const bibliography = bibliographyRes?.data?.map(format) || [];

  return <Links links={links} bibliography={bibliography} />;
};

export default Page;
