export function getStrapiUrl(path = "", api = true) {
  const base = process.env.PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  return `${base}${api ? "/api/" : ""}${path}`;
}

export function getBearerToken() {
  if (!process.env.PUBLIC_STRAPI_API_TOKEN) {
    console.warn("missing PUBLIC_STRAPI_API_TOKEN - API requests will fail");
    return "";
  }
  return process.env.PUBLIC_STRAPI_API_TOKEN;
}

export async function fetchAPI(path: string) {
  const requestUrl = getStrapiUrl(path);
  try {
    const response = await fetch(requestUrl, {
      next: { revalidate: 3600, tags: ['strapi'] },
      headers: {
        Authorization: `Bearer ${getBearerToken()}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(`Failed to fetch from Strapi at ${requestUrl}:`, error);
    return { data: [] };
  }
}

type Formattable = {
  id: string;
  attributes?: Record<string, unknown>;
  [key: string]: unknown;
};

type ExpandableAttribute = { data: Formattable[] };

export const format = (item: Formattable): Record<string, unknown> => {
  // Handle both Strapi v4 format (with attributes) and v5 format (flat)
  if (item.attributes) {
    // Strapi v4 format
    const { id, attributes } = item;
    return {
      id,
      ...attributes,
      materials:
        (attributes?.materials as ExpandableAttribute)?.data?.map(format) ?? [],
      tags: (attributes?.tags as ExpandableAttribute)?.data?.map(format) ?? [],
    };
  } else {
    // Strapi v5 format (flat object)
    const { id, materials, tags, ...rest } = item;
    return {
      id,
      ...rest,
      materials: Array.isArray(materials) ? materials.map(format) : [],
      tags: Array.isArray(tags) ? tags.map(format) : [],
    };
  }
};
