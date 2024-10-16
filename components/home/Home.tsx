import Docs from "@/components/docs/Docs";
import { MarkdownFile } from "@/types/types";
import { getDocs } from "@/utils/GetDocs";

const Home = async () => {
  const data: MarkdownFile[] = await getDocs();
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
