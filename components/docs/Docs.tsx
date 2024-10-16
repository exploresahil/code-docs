import Code from "@/context/code/Code";
import { Data, MarkdownFile } from "@/types/types";
import Markdown from "markdown-to-jsx";
import "./style.scss";

const Docs = ({ data }: { data: Data }) => {
  return (
    <div id="Docs">
      <div className="date_time">
        <p>Created At: {new Date(data.createdAt).toLocaleDateString()}</p>
        <p>Updated At: {new Date(data.updatedAt).toLocaleDateString()}</p>
      </div>
      <Markdown
        className="md"
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
