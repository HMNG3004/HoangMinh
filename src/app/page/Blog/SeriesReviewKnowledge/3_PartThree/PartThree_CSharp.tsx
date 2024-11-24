import { formatDate } from "../../../../utils/formatDate";
import { Collapse } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CSharpQuestion } from "./reviewCSharp";

const CSharpInterview = () => {
  const [questionList, setQuestionList] = useState<any[]>([]);

  const questionData = CSharpQuestion;
  useEffect(() => {
    setQuestionList(questionData);
  }, [questionData]);

  const CustomCollapse = styled(Collapse)`
    .ant-collapse-header {
      display: flex !important;
      align-items: center !important;
    }
    .ant-collapse-content-box {
      padding: 0px 0px 0px 20px !important;
    }
  `;
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-4/5 md:w-3/5">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
          Ôn tập kiến thức phần 3: C#
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {formatDate(new Date(2024, 11, 21).toString())}
        </p>

        <div className="mb-4 text-2xl text-gray-700">
          <p className="py-3">
            Đây là phần thứ hai trong series ôn tập kiến thức. Trong phần này,
            mình sẽ chia sẻ với các bạn những kiến thức cơ bản về ngôn ngữ lập
            trình C#. Đây là ngôn ngữ mà mình đã học từ học kỳ thứ 5 và cũng
            cũng có thể sẽ là ngôn ngữ mà mình sẽ sử dụng trong công việc sắp
            tới.
          </p>
        </div>

        <div className="w-full">
          <div className="grid gap-3">
            {questionList.map((question, index) => (
              <CustomCollapse
                key={index}
                className="w-full"
                size="large"
                items={[
                  {
                    key: question.id.toString(),
                    label: (
                      <div className="font-bold text-2xl">{question.title}</div>
                    ),
                    children: (
                      <div className="text-xl ml-5 max-h-[100vh] overflow-auto">
                        <div className="mr-3 mt-3">{question.answer}</div>
                      </div>
                    ),
                  },
                ]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSharpInterview;
