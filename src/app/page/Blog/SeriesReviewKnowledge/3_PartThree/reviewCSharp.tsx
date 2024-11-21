import { TextBold } from "../../../../component/ui/text-bold";
import { ReviewKnowledgeViewModel } from "../../../../models/Blogs";

export const CSharpQuestion: ReviewKnowledgeViewModel[] = [
  {
    id: 1,
    title: "How is C# different from C",
    answer: (
      <p className="mb-3">
        You would always know C being the procedural language while C# is a more
        object-oriented language. The biggest difference is that C# supports
        automatic garbage collection by Common Language Runtime (CLR) while C
        does not. C# primarily needs a <TextBold>.NET framework</TextBold> to
        execute while C is a platform-agnostic language.
      </p>
    ),
  },
];
