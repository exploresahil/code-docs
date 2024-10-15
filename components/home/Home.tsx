import Docs from "@/components/docs/Docs";
import { MarkdownFile } from "@/types/types";

const API: string = process.env.NEXT_PUBLIC_API as string;
async function getData(): Promise<MarkdownFile[]> {
  const res = await fetch(API, {
    //next: { revalidate: 3600 },
    cache: "no-store",
    // cache: "reload",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data: MarkdownFile[] = await getData();
  //console.log("data->", data);

  const sortedData = data.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const latest = sortedData[0];

  return (
    <section id="Home">
      <Docs data={latest} />
    </section>
  );
};

export default Home;
