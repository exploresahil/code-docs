import Code from "@/context/code/Code";
import { MarkdownFile } from "@/types/types";
import Markdown from "markdown-to-jsx";

const Docs = ({ data }: { data: MarkdownFile }) => {
  return (
    <div id="Docs">
      {" "}
      <p>Created At: {new Date(data.createdAt).toLocaleString()}</p>
      <p>Updated At: {new Date(data.updatedAt).toLocaleString()}</p>
      <Markdown
        options={{
          overrides: {
            code: {
              component: Code,
            },
          },
        }}
      >
        {data.content}
      </Markdown>
      <br />
    </div>
  );
};

export default Docs;
