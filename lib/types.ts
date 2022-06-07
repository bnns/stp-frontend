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
  tags?: Tag[];
};

export type Tag = {
  Name: string;
};

export type MeetingMaterial = {
  name: string;
  url: string;
};
