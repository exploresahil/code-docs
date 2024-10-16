import { RefreshCw } from "lucide-react";

const loading = () => {
  const loaderSize = 25;

  return (
    <section id="Home">
      <div id="Docs">
        <div className="loading_container">
          <RefreshCw size={loaderSize} strokeWidth={2} className="loader" />
          <p>loading</p>
        </div>
      </div>
    </section>
  );
};

export default loading;
