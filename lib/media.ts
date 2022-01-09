import { getStrapiUrl} from './api'

export function getStrapiMedia(media: {url: string}) {
    const imageUrl = media.url.startsWith("/")
        ? getStrapiUrl(media.url)
        : media.url;

    return imageUrl;
}
