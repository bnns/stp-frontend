// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getStrapiUrl, getBearerToken, fetchAPI } from "../../../lib/api";

export const format = ({
  id,
  attributes,
}: {
  id: string;
  attributes: Record<string, unknown>;
}) => ({ id, ...attributes });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bibData = await fetchAPI("links");
  const { data, ...others } = bibData;
  const responseData = { links: data?.map(format) ?? [], ...others };

  res.status(200).json(responseData);
}
