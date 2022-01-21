// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getStrapiUrl, getBearerToken, fetchAPI } from "../../../lib/api";

type Formattable = {
  id: string;
  attributes: Record<string, unknown>;
};
type MaterialAttribute = { data: Formattable[] };

const format = ({ id, attributes }: Formattable): Record<string, unknown> => {
  if (attributes.materials) {
    return {
      id,
      ...attributes,
      materials:
        (attributes.materials as MaterialAttribute).data?.map(format) ?? [],
    };
  }

  return { id, ...attributes };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const meetingData = await fetchAPI(
    "meetings?populate=*&pagination[limit]=200"
  );
  const { data, ...others } = meetingData;
  const responseData = { meetings: data?.map(format) ?? [], ...others };

  res.status(200).json(responseData);
}
