import Docs from "@/components/docs/Docs";
import HTTP from "@/components/extra/http-response-status-codes-and-their-meanings/HTTP";
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

  if (slug === "http-response-status-codes-and-their-meanings") {
    return (
      <section id="docs">
        <HTTP />
      </section>
    );
  }

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
