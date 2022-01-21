import { getStrapiUrl} from './api'

export function getStrapiMedia({url}: {url: string}) {
    const imageUrl = url.startsWith("/")
        ? getStrapiUrl(url, false)
        : url;

    return imageUrl;
}
