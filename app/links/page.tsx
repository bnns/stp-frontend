import { format as formatBibliography } from "../api/bibliography";
import { format as formatLink } from "../api/links";
import { fetchAPI } from "../../lib/api";
import {ExternalLink} from '../../lib/types'
import Links from './links'

const Page = async () => {
  const bibliographyRes = await fetchAPI("bibliographies");
  const linksRes = await fetchAPI("links");

  const links: ExternalLink[] = linksRes?.data?.map(formatLink) || [];
  const bibliography = bibliographyRes?.data?.map(formatBibliography) || [];

  return <Links links={links} bibliography={bibliography} />;
};

export default Page;
