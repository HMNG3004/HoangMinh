import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel"; // For JavaScript/TypeScript formatting
import parserHtml from "prettier/parser-html"; // For HTML formatting
import parserPostcss from "prettier/parser-postcss"; // For CSS formatting

type CodeDisplayProps = {
  code: string; // The code to display
  output?: string; // The output to display
  language: "javascript" | "typescript" | "html" | "css" | "csharp" | "sql"; // Supported languages
};

const CodeDisplay: React.FC<CodeDisplayProps> = ({
  code,
  language,
  output,
}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  // Format the code based on the language
  const formatCode = async (
    code: string,
    language: string
  ): Promise<string> => {
    try {
      if (language === "javascript" || language === "typescript") {
        return prettier.format(code, {
          parser: "babel",
          plugins: [parserBabel],
        });
      } else if (language === "html") {
        return prettier.format(code, { parser: "html", plugins: [parserHtml] });
      } else if (language === "css") {
        return prettier.format(code, {
          parser: "css",
          plugins: [parserPostcss],
        });
      }
      // For unsupported languages (e.g., csharp, sql), return the code as is
      return code;
    } catch (error) {
      console.error("Formatting failed: ", error);
      return code; // Return the unformatted code if formatting fails
    }
  };

  const [formattedCode, setFormattedCode] = useState<string>("");

  useEffect(() => {
    const format = async () => {
      const result = await formatCode(code, language);
      setFormattedCode(result);
    };
    format();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedCode);
      setCopySuccess(true);

      // Reset success message after 2 seconds
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div className="my-5 p-4 bg-black text-white rounded-lg">
      <div className="relative">
        <div>
          <SyntaxHighlighter
            language={language}
            style={dracula}
            customStyle={{ fontSize: "14px", lineHeight: "1.5" }}
          >
            {formattedCode || ""}
          </SyntaxHighlighter>
        </div>
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600 transition"
        >
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Display Output */}
      {output && (
        <div className="mt-5 p-4 bg-gray-800 text-white rounded-lg overflow-auto">
          <h4 className="text-lg font-semibold mb-2">Output:</h4>
          <pre className="whitespace-pre-wrap text-sm">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeDisplay;
