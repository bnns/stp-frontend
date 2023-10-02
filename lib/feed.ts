import { NextResponse } from "next/server";
import { Feed, Item } from "feed";
import { format, fetchAPI } from "./api";
import { sortByPublishedDate } from "./dates";
import { Article, Meeting, ExternalLink } from "./types";
import md from "./markdown";

const onlyRecorded = ({ recording }: Meeting) => !!recording?.trim();

type FeedType = "atom" | "rss" | "json";

export default async function generateRSS(feedType: FeedType) {
  const meetings = await fetchAPI("meetings?populate=*&pagination[limit]=200");
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");
  const links = await fetchAPI("links?populate=*&pagination[limit]=200");

  const siteURL = "https://theoreticalpractice.com";
  const date = new Date();
  const author = {
    name: "Subset of Theoretical Practice",
    email: "SubsetOfTheoreticalPractice@gmail.com",
    link: siteURL,
  };

  const feed = new Feed({
    title: "Subset of Theoretical Practice",
    description:
      "The Subset of Theoretical Practice is a research group that is currently engaged with developing a new approach to Leftist political thinking, in which political economic analysis and questions of political organization can be treated under a common theoretical framework.",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Subset of Theoretical Practice`,
    updated: date, // today's date
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/rss2.xml`,
      atom: `${siteURL}/rss/atom1.xml`,
    },
    author,
  });

  links?.data?.map(format).forEach((link: ExternalLink) => {
    feed.addItem({
      title: link.name,
      id: `${link.link}`,
      link: link.link,
      description: link.description,
      content: `<p><a href="${link.link}">Link</a></p> <p>${link.description ?? ""
        }</p>`,
      author: [author],
      contributor: [author],
      date: new Date(link.publishedAt),

      updated: new Date(link.publishedAt),
    } as unknown as Item);
  });

  meetings?.data
    ?.map(format)
    .filter(onlyRecorded)
    .forEach((meeting: Meeting) => {
      feed.addItem({
        title: meeting.name,
        id: `${meeting.id}`,
        link: meeting.recording,
        description: meeting.description,
        content: `<p>The recording for the meeting can be found at <a href="${meeting.recording
          }">here</a>.</p> <p>${meeting.description ?? ""}</p>`,
        author: [author],
        contributor: [author],
        date: new Date(meeting.date),

        updated: new Date(meeting.date),
      } as unknown as Item);
    });

  articles?.data
    ?.map(format)
    .sort(sortByPublishedDate)
    .forEach((article: Article) => {
      const url = `${siteURL}/blog/${article.slug}`;
      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        description: article.summary,
        content: md.render(article.content),
        author: [author],
        contributor: [author],
        date: new Date(article.publishedAt),

        updated: new Date(article.publishedAt),
      } as unknown as Item);
    });

  if (feedType === "atom") {
    return feed.atom1();
  }

  if (feedType === "json") {
    return feed.json1();
  }

  return feed.rss2();
}

export const setFeedHeaders = (
  res: NextResponse,
  feedType: FeedType
) => {
  res.headers.set(
    "Content-Type",
    `application/${feedType === "atom" ? "atom+xml" : "rss+xml"}`
  );
  res.headers.set("Content-Disposition", "inline");
  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  res.headers.set(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );
};
