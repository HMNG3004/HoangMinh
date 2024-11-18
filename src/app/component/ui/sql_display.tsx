import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { format } from "sql-formatter";

const SqlDisplay = React.forwardRef<
  HTMLDivElement,
  { sqlQuery: string } & React.HTMLAttributes<HTMLDivElement>
>(({ sqlQuery, className, ...props }, ref) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const formattedQuery = format(sqlQuery, {
    language: "sql",
    tabWidth: 2,
    keywordCase: "upper",
    linesBetweenQueries: 2,
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedQuery);
      setCopySuccess(true);

      // Reset success message after 2 seconds
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div className="my-5 p-4 bg-black text-white rounded-lg overflow-auto">
      <div className="relative">
        <div ref={ref} className={className} {...props}>
          <SyntaxHighlighter
            language="sql"
            style={dracula}
            customStyle={{ fontSize: "14px", lineHeight: "1.5" }}
          >
            {formattedQuery}
          </SyntaxHighlighter>
        </div>
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 transition"
        >
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
});

SqlDisplay.displayName = "SqlDisplay";

export default SqlDisplay;
