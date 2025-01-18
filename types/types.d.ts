export type Data = {
  id: string;
  filename: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type MarkdownFile = {
  category: string | null;
  data: Data[];
};


export type ExtraNavDataType = {
  title: string;
  link: string;
};

type StatusCode = {
  code: number;
  title: string;
  desc: string;
};

type StatusCategory = {
  title: string;
  desc: string;
  codes: StatusCode[];
};

export type HttpResponseDataType = {
  title: string;
  desc: string;
  status: {
    category: StatusCategory[];
  };
};