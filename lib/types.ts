export type Meeting = {
  id: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  recording: string;
  description: string;
  name: string;
  link: string;
  materials?: MeetingMaterial[];
  references?: MeetingReference[];
  tags?: Tag[];
};

export type Article = {
  id: number;
  title: string;
  author: string;
  content: string;
  summary: string;
  slug: string;
  tags?: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Bibliography = {
  id: number;
  name: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Tag = {
  Name: string;
};

export type MeetingMaterial = {
  name: string;
  url: string;
};

export type MeetingReference = {
  name: string;
  link: string;
};

export type ExternalLink = {
  name: string;
  link: string;
  description?: string;
  tags?: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
