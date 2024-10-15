import Docs from "@/components/docs/Docs";
import { MarkdownFile } from "@/types/types";

type Props = {
  params: { docsId: string };
};

async function getData(): Promise<MarkdownFile[]> {
  const API = process.env.NEXT_PUBLIC_API;

  const res = await fetch(`${API}`, {
    next: { revalidate: 3600 },
    //cache: "no-store",
    cache: "reload",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }: Props) => {
  const slug = params.docsId;

  const data: MarkdownFile[] = await getData();
  const object = data.find((file) => file.id === slug);

  return (
    <section id="docs">{data && object && <Docs data={object} />}</section>
  );
};

export default Page;
