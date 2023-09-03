import generateRSS, { setFeedHeaders } from "../../../lib/feed";
import { NextResponse } from 'next/server'

export async function GET() {
  const feed = await generateRSS("rss");
  const res = new NextResponse(feed);
  setFeedHeaders(res, "rss");
  return res;
}
