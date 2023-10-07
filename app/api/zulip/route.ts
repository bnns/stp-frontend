import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { revalidateTag } from 'next/cache'
import zulipInit from "zulip-js";

enum Model {
  ZOOM = 'zoom'
}

enum Event {
  CREATE = "entry.create",
  UPDATE = "entry.update",
  DELETE = "entry.delete",
  PUBLISH = "entry.publish",
  UNPUBLISH = "entry.unpublish",
  MEDIA_CREATE = "media.create",
  MEDIA_UPDATE = "media.update",
  MEDIA_DELETE = "media.delete",
}

const zulipMessage = (
  event: string,
  model: string,
  entry?: Record<string, unknown>,
  media?: Record<string, unknown>
): string => {
  let message = "";
  let displayName = entry?.name || entry?.Name || entry?.title || media?.name; // TODO: annoying
  if (model === Model.ZOOM) {
    return `Someone changed the zoom link.`
  }
  if (!displayName) {
    return `Someone changed the ${model}`
  }
  switch (event) {
    case Event.CREATE:
      message = `Someone created a new ${model} "${displayName}"`;
      break;
    case Event.UPDATE:
      message = `Someone updated the ${model} "${displayName}"`;
      break;
    case Event.DELETE:
      message = `Someone removed the ${model} "${displayName}"`;
      break;
    case Event.PUBLISH:
      message = `Someone published the ${model} "${displayName}"`;
      break;
    case Event.UNPUBLISH:
      message = `Someone unpublished the ${model} "${displayName}"`;
      break;
    case Event.MEDIA_CREATE:
      message = `Someone uploaded a new file "${displayName}"`;
      break;
    case Event.MEDIA_UPDATE:
      message = `Someone updated the file "${displayName}"`;
      break;
    case Event.MEDIA_DELETE:
      message = `Someone removed the file "${displayName}"`;
      break;
    default:
      console.log(event);
  }
  return message;
};

export async function POST(req: NextRequest) {
  const headersList = headers();
  const authorization = headersList.get("authorization");
  if (authorization?.trim() === process.env.WEBHOOK_TOKEN?.trim()) {
    revalidateTag('strapi')
    const zulipClient = await zulipInit({
      username: process.env.ZULIP_USERNAME,
      apiKey: process.env.ZULIP_API_KEY,
      realm: process.env.ZULIP_REALM,
    });
    const { event, model, entry, media } = await req.json();
    console.log(event, model, entry, media);
    let message = "";
    if (model === "about") {
      message = "Someone changed the about page";
    } else {
      message = zulipMessage(event, model, entry, media);
    }

    await zulipClient.messages.send({
      to: "STP organization",
      type: "stream",
      topic: "Automated Messages",
      content: message,
    });

    return new Response();
  }

  return new Response(null, { status: 401 });
}
