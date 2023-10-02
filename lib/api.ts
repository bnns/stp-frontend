export function getStrapiUrl(path = "", api = true) {
  const base = process.env.PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  return `${base}${api ? "/api/" : ""}${path}`;
}

export function getBearerToken() {
  if (!process.env.PUBLIC_STRAPI_API_TOKEN) {
    throw new Error("missing PUBLIC_STRAPI_API_TOKEN");
  }
  return process.env.PUBLIC_STRAPI_API_TOKEN;
}

export async function fetchAPI(path: string) {
  const requestUrl = getStrapiUrl(path);
  const response = await fetch(requestUrl, {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${getBearerToken()}`,
    },
  });
  const data = await response.json();
  return data;
}

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
