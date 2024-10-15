"use client";

import "./style.scss";
import TSIcon from "@/components/icons/TSIcon";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeProps = {
  children: string;
  className?: string;
};

const Code = ({ children, className }: CodeProps) => {
  const [copy, setCopy] = useState<boolean>(false);

  const languageMatch = className && className.match(/lang-(\w+)/);
  const language = languageMatch ? languageMatch[1] : "javascript";

  const match = className && className.match(/tsx:([^ ]+)/);
  const title = match ? match[1] : "Code Snippet";

  const customStyle = {
    ...materialDark,
    hljs: {
      background: "none",
      color: "hsl(0,0%,93%)",
      lineHeight: "1.2rem",
    },
    operator: {
      color: "hsl(0,0%,93%)"
    },
    keyword: {
      color : "hsl(341,90%,67%)"
    },
    function: {
      color : "hsl(341,90%,67%)"
    },
    "attr-name": {
      color : "hsl(275,80%,71%)"
    },
    "attr-value": {
      color: "hsl(131,43%,57%)"
    },
    string:{
      color: "hsl(131,43%,57%)"
    },
    tag: {
      color: "hsl(131,43%,57%)"
    }
  };

 //console.log('customStyle->',customStyle)

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(children).then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
      });
    } else {
      alert("Clipboard API not supported");
    }
  };

  return (
    <div id="Code">
      <div className="title">
        <div className="left">
          {language === "tsx" && <TSIcon />}
          <p>{title}</p>
        </div>
        {copy ? (
          <button>
            <Check size={16} />
          </button>
        ) : (
          <button onClick={handleCopy}>
            <Copy size={16} />
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        wrapLines={true}
        showLineNumbers={true}
        lineNumberStyle={{ color: "hsl(0,0%,53%)" }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
