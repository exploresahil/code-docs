import Code from "@/context/code/Code";
import { Data, MarkdownFile } from "@/types/types";
import Markdown from "markdown-to-jsx";
import "./style.scss";

const Docs = ({ data }: { data: Data }) => {
  //console.log("data.content->", data.content);

  return (
    <div id="Docs">
      <div className="date_time"></div>
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
