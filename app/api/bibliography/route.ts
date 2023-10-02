// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { format, fetchAPI } from "../../../lib/api";

export async function GET() {
  const bibData = await fetchAPI("bibliographies");
  const { data, ...others } = bibData;
  const responseData = { bibliography: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
