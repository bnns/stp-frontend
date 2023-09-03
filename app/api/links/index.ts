// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getStrapiUrl, getBearerToken, fetchAPI } from "../../../lib/api";

export const format = ({
  id,
  attributes,
}: {
  id: string;
  attributes: Record<string, unknown>;
}) => ({ id, ...attributes });

export async function GET() {
  const bibData = await fetchAPI("links");
  const { data, ...others } = bibData;
  const responseData = { links: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
