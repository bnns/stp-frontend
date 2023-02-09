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
    materials:
      (attributes?.materials as ExpandableAttribute)?.data?.map(format) ?? [],
    tags: (attributes?.tags as ExpandableAttribute)?.data?.map(format) ?? [],
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const meetingData = await fetchAPI("meetings?populate=*");
  const { data, ...others } = meetingData;
  const responseData = { meetings: data?.map(format) ?? [], ...others };

  res.status(200).json(responseData);
}
