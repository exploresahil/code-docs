import Docs from "@/components/docs/Docs";
import { MarkdownFile } from "@/types/types";
import { getDocs } from "@/utils/GetDocs";

type Props = {
  params: { docsId: string };
};

const Page = ({ params }: Props) => {
  const slug = params.docsId;

  const data: MarkdownFile[] = getDocs();
  const object = data.find((file) => file.id === slug);

  return (
    <section id="docs">{data && object && <Docs data={object} />}</section>
  );
};

export default Page;
