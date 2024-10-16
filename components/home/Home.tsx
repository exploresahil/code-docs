import Code from "@/context/code/Code";
import { Data } from "@/types/types";
import { getHomeMarkdown } from "@/utils/GetHomeMarkdown";
import Markdown from "markdown-to-jsx";
import "@/components/docs/style.scss";

const Home = () => {
  const data: Data | null = getHomeMarkdown();

  if (!data) {
    return (
      <section id="Home">
        <div id="Docs">
          <h1>No Home Markdown File Found</h1>
        </div>
      </section>
    );
  }

  return (
    <section id="Home">
      <div id="Docs" className="home_docs">
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
    </section>
  );
};

export default Home;
