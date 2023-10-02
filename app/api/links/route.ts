import { format, fetchAPI } from "../../../lib/api";

export async function GET() {
  const bibData = await fetchAPI("links");
  const { data, ...others } = bibData;
  const responseData = { links: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
