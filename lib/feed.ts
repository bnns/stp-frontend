import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";
import { Feed, Item } from "feed";
import { fetchAPI } from "./api";
import { sortByPublishedDate, sortByMeetingDate } from "./dates";
import { format as formatArticles } from "../pages/api/articles";
import { format as formatLinks } from "../pages/api/links";
import { Article, Meeting, ExternalLink } from "./types";
import md from "./markdown";

const onlyRecorded = ({ recording }: Meeting) => !!recording?.trim();

export default async function generateRSS() {
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
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/feed.atom`,
    },
    author,
  });

  links?.data?.map(formatLinks).forEach((link: ExternalLink) => {
    feed.addItem({
      title: link.name,
      id: `${link.link}`,
      link: link.link,
      description: link.description,
      content: `<p><a href="${link.link}">Link</a></p> <p>${
        link.description ?? ""
      }</p>`,
      author: [author],
      contributor: [author],
      date: new Date(link.publishedAt),

      updated: new Date(link.publishedAt),
    } as unknown as Item);
  });

  meetings?.data
    ?.map(formatArticles)
    .filter(onlyRecorded)
    .forEach((meeting: Meeting) => {
      feed.addItem({
        title: meeting.name,
        id: `${meeting.id}`,
        link: meeting.recording,
        description: meeting.description,
        content: `<p>The recording for the meeting can be found at <a href="${
          meeting.recording
        }">here</a>.</p> <p>${meeting.description ?? ""}</p>`,
        author: [author],
        contributor: [author],
        date: new Date(meeting.date),

        updated: new Date(meeting.date),
      } as unknown as Item);
    });

  articles?.data
    ?.map(formatArticles)
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

  fs.mkdirSync(path.join(process.cwd(), "public", "rss"), { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), "public", "rss", "feed.xml"),
    feed.rss2()
  );
  fs.writeFileSync(
    path.join(process.cwd(), "public", "rss", "feed.json"),
    feed.json1()
  );
  fs.writeFileSync(
    path.join(process.cwd(), "public", "rss", "feed.atom"),
    feed.atom1()
  );
}
