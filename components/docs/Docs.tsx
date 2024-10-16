import Code from "@/context/code/Code";
import { MarkdownFile } from "@/types/types";
import Markdown from "markdown-to-jsx";
import "./style.scss";
import { RefreshCw } from "lucide-react";

const Docs = ({ data }: { data: MarkdownFile }) => {
  return (
    <div id="Docs">
      <div className="date_time">
        <p>Created At: {new Date(data.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(data.updatedAt).toLocaleString()}</p>
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
