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

export async function GET() {
  const bibData = await fetchAPI("bibliographies");
  const { data, ...others } = bibData;
  const responseData = { bibliography: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
