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
