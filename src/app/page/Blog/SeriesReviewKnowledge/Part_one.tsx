import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import { ArrowRight } from "lucide-react";

const ReviewPartOne = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blog/backend-question-interview");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-3/5">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Chuẩn bị kiến thức đi làm
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {formatDate(new Date(2024, 11, 15).toString())}
          </p>
        </div>

        <div>
          <div className="my-4 text-2xl text-gray-700">
            <p className="py-3">
              Hi xin chào các bạn. Chuyện là kì đồ án của mình đang dần đi đến
              hồi kết. Sau khi đồ án kết thúc thì hành trình đại học của mình
              cũng sẽ khép lại và mở ra chương mới đó là "
              <span className="font-bold">Đi làm</span>"
            </p>
            <p className="py-3">
              Do đó mình đã bắt đầu một series bài viết để chia sẻ với các bạn
              về những câu hỏi phỏng vấn cũng như sẽ ôn tập lại kiến thức. Mình
              sẽ chia sẻ với các bạn những kiến thức mà mình đã học được trong
              quá trình học tập và cũng là những kiến thức mà mình sẽ cần phải
              ôn tập lại để chuẩn bị cho công việc sắp tới.
            </p>
            <p className="py-3">
              Mặc dù mình không phải là người giỏi trình bày hay viết lách nhưng
              mình sẽ cố gắng hết sức để chia sẻ với các bạn những kiến thức mà
              mình biết một cách rõ ràng và dễ hiểu nhất có thể.
            </p>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <div className="mt-6">
            <button
              className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handleNavigate}
            >
              Ôn tập backend <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPartOne;
