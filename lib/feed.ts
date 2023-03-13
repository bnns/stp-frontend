import fs from "fs";
import MarkdownIt from "markdown-it";
import { Feed } from "feed";
import { fetchAPI } from "./api";
import { sortByPublishedDate } from "./dates";
import { format as formatArticles } from "../pages/api/articles";
import md from "./markdown";

export default async function generateRSS() {
  const meetings = await fetchAPI("meetings?populate=*&pagination[limit]=200");
  const articles = await fetchAPI("articles?populate=*&pagination[limit]=200");

  const siteURL = process.env.VERCEL_URL || "https://theoreticalpractice.com";
  const date = new Date();
  const author = {
    name: "Subset of Theoretical Practice",
    email: "SubsetOfTheoreticalPractice@gmail.com",
    link: "https://theoreticalpractice.com",
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

  articles?.data
    ?.map(formatArticles)
    .sort(sortByPublishedDate)
    .forEach((article) => {
      const url = `${siteURL}/blog/${article.slug}`;
      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        description: article.excerpt,
        content: md.render(article.content),
        author: [author],
        contributor: [author],
        date: new Date(article.publishedAt),
      });
    });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
  fs.writeFileSync("./public/rss/feed.atom", feed.atom1());
}
