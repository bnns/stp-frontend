import type { NextApiRequest, NextApiResponse } from "next";
import zulipInit from "zulip-js";

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers.authorization?.trim() === process.env.WEBHOOK_TOKEN?.trim()) {
    const zulipClient = await zulipInit({
      username: process.env.ZULIP_USERNAME,
      apiKey: process.env.ZULIP_API_KEY,
      realm: process.env.ZULIP_REALM,
    });
    const { event, model, entry, media } = req.body;
    console.log(req.body);
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
    res.status(200).end();
    return;
  }
  res.status(401).end();
}
