import Docs from "@/components/docs/Docs";
import { MarkdownFile, Data } from "@/types/types";
import { getDocs } from "@/utils/GetDocs";

type Props = {
  params: { docsId: string };
};

const Page = ({ params }: Props) => {
  const slug = params.docsId;
  const markdownFiles: MarkdownFile[] = getDocs();

  const matchingData: Data | undefined = markdownFiles
    .flatMap((file) => file.data)
    .find((data) => data.id === slug);

  if (!matchingData) {
    return <section id="docs">No Matching Data Found</section>;
  }

  return (
    <section id="docs">
      <Docs data={matchingData} />
    </section>
  );
};

export default Page;
