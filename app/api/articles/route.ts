import { fetchAPI, format } from "../../../lib/api";

export async function GET() {
  const articleData = await fetchAPI(
    "articles?populate=*&pagination[limit]=200"
  );
  const { data, ...others } = articleData;
  const responseData = { articles: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
