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
    headers: {
      Authorization: `Bearer ${getBearerToken()}`,
    },
  });
  const data = await response.json();
  return data;
}
