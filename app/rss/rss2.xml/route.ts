import generateRSS, { setFeedHeaders } from "../../lib/feed";

export async function GET() {
  const feed = await generateRSS("rss");
  const res = new Response(feed);
  setFeedHeaders(res, "rss");
  return res;
}
