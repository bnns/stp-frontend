import { fetchAPI } from "../../../lib/api";

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

export async function GET() {
  const articleData = await fetchAPI(
    "articles?populate=*&pagination[limit]=200"
  );
  const { data, ...others } = articleData;
  const responseData = { articles: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
