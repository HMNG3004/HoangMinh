import { formatDate } from "../../../utils/formatDate";
import { Collapse } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { backendQuestion } from "../../../api/reviewKnowledge";

const CustomCollapse = styled(Collapse)`
  .ant-collapse-header {
    display: flex !important;
    align-items: center !important;
  }
`;

const BackendInterviewQuestion = () => {
  const [backendQuestionList, setBackendQuestionList] = useState<any[]>([]);

  const backendQuestionData = backendQuestion;
  useEffect(() => {
    setBackendQuestionList(backendQuestionData);
  }, [backendQuestionData]);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-3/5">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Ôn tập backend
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {formatDate(new Date(2024, 11, 15).toString())}
          </p>
        </div>

        <div className="w-full">
          <div className="grid gap-3">
            {backendQuestionList.map((question, index) => (
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
                      <div className="text-xl mx-5">{question.answer}</div>
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

export default BackendInterviewQuestion;
