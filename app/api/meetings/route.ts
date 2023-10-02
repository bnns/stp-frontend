import { format, fetchAPI } from "../../../lib/api";

export async function GET() {
  const meetingData = await fetchAPI("meetings?populate=*");
  const { data, ...others } = meetingData;
  const responseData = { meetings: data?.map(format) ?? [], ...others };

  return new Response(responseData);
}
