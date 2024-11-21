import { formatDate } from "../../../../utils/formatDate";
import { Collapse } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { backendQuestion } from "./reviewBackend";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CustomCollapse = styled(Collapse)`
  .ant-collapse-header {
    display: flex !important;
    align-items: center !important;
  }
`;

const BackendInterviewQuestion = () => {
  const [backendQuestionList, setBackendQuestionList] = useState<any[]>([]);
  const navigate = useNavigate();

  const backendQuestionData = backendQuestion;
  useEffect(() => {
    setBackendQuestionList(backendQuestionData);
  }, [backendQuestionData]);

  const handlePreviousBlog = () => {
    navigate("/blog/series-on-tap-kien-thuc-p1");
  };

  const handleNextBlog = () => {
    navigate("/blog/CSharp-interview-question");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-4/5 md:w-3/5">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
          Ôn tập kiến thức phần 2: Backend
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {formatDate(new Date(2024, 11, 15).toString())}
        </p>

        <div className="mb-4 text-2xl text-gray-700">
          <p className="py-3">
            Mở đầu cho series này thì mình sẽ bắt đầu với phần Backend. Mình sẽ
            cố gắng chia sẻ với các bạn những kiến thức mà mình đã học được
            trong quá trình học tập và cũng là những kiến thức mà mình sẽ cần
            phải ôn tập lại để chuẩn bị cho công việc sắp tới.
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
        <div className="flex justify-between w-full">
          <div className="mt-6">
            <button
              className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handlePreviousBlog}
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Chuẩn bị kiến thức đi làm
            </button>
          </div>
          <div className="mt-6">
            <button
              className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handleNextBlog}
            >
              Ôn tập C#
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendInterviewQuestion;
