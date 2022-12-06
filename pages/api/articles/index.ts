// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getStrapiUrl, getBearerToken, fetchAPI } from "../../../lib/api";

type Formattable = {
  id: string;
  attributes: Record<string, unknown>;
};
type ExpandableAttribute = { data: Formattable[] };

export const format = ({
  id,
  attributes,
}: Formattable): Record<string, unknown> => {
  return {
    id,
    ...attributes,
    tags: (attributes?.tags as ExpandableAttribute)?.data?.map(format) ?? [],
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const articleData = await fetchAPI(
    "articles?populate=*&pagination[limit]=200"
  );
  const { data, ...others } = articleData;
  const responseData = { articles: data?.map(format) ?? [], ...others };

  res.status(200).json(responseData);
}
