import generateRSS, { setFeedHeaders } from "../../lib/feed";

export async function GET() {
  const feed = await generateRSS("atom");
  const res = new Response(feed);
  setFeedHeaders(res, "atom");
  return res;
}
