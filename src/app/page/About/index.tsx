import React from "react";
import { formatDate } from "../../utils/formatDate";

const About: React.FC = () => {
  return (
    <div className="col-span-12 md:col-span-9 border-2 rounded-2xl p-6 bg-white">
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-start text-left">
          {/* Tiêu đề và Ngày */}
          <div>
            <div className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl dark:text-white">
              Giới thiệu về mình
            </div>
            <div className="mb-6 text-md font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              {formatDate(new Date(2024, 10, 1).toString())}
            </div>
          </div>

          {/*Cảm ơn*/}
          <div>
            <div className="text-2xl md:text-3xl font-bold dark:text-white">
              Cảm ơn bạn đã ghé thăm blog của mình
            </div>
            <div className="my-4 text-md lg:text-xl text-gray-700">
              Mình rất vui khi bạn dành thời gian để đọc những dòng chữ này. Hy
              vọng rằng những bài viết của mình sẽ mang lại giá trị cho bạn và
              giúp bạn hiểu thêm về mình.
            </div>
          </div>
          {/* Giới thiệu về bản thân */}
          <div>
            <div className="text-2xl md:text-3xl font-bold dark:text-white">
              Mình là ai?
            </div>
            <div className="my-4 text-md lg:text-xl text-gray-700">
              Chào bạn! Mình là Hoàng Minh, một sinh viên năm cuối ngành Kỹ
              thuật Phần mềm tại Đại học FPT - TPHCM. Mình yêu thích công nghệ
              và đang dấn thân vào con đường phát triển web và di động.
            </div>
          </div>

          {/* Định hướng của mình */}
          <div>
            <div className="text-2xl md:text-3xl font-bold dark:text-white">
              Định hướng của mình
            </div>
            <div className="my-4 text-md lg:text-xl text-gray-700">
              Mình đang hướng tới việc trở thành một lập trình viên full-stack,
              có khả năng làm việc trên cả nền tảng web và di động. Mình sẽ
              không ngừng học hỏi và thực hành để phát triển bản thân.
            </div>
          </div>

          {/* Mục đích của blog này */}
          <div>
            <div className="text-2xl md:text-3xl font-bold dark:text-white">
              Tại sao blog này ra đời?
            </div>
            <div className="my-4 text-md lg:text-xl text-gray-700">
              Blog này được tạo ra để{" "}
              <span className="line-through">mình khè mọi người</span> mình ghi
              lại những hoạt động hàng ngày trong cuộc sống, công việc và học
              tập. Tại đây, mình sẽ chia sẻ những trải nghiệm, bài học và những
              điều thú vị mà mình gặp phải trong hành trình trưởng thành.
            </div>
          </div>

          {/* Những gì bạn có thể mong đợi */}
          <div>
            <div className="text-2xl md:text-3xl font-bold dark:text-white">
              Những gì bạn có thể mong đợi
            </div>
            <div className="my-4 text-md lg:text-xl text-gray-700">
              Mình sẽ chia sẻ về những dự án mình đang làm, những kỹ thuật mới
              mình học được, và cả những câu chuyện nhỏ trong cuộc sống hàng
              ngày. Hy vọng rằng những bài viết này không chỉ giúp mình ghi lại
              kỷ niệm mà còn mang lại giá trị cho bạn đọc.
            </div>
          </div>

          {/* Lời kết */}
          <div>
            <div className="text-2xl md:text-3xl font-bold dark:text-white">
              Lời kết
            </div>
            <div className="my-4 text-md lg:text-xl text-gray-700">
              Đây là bài viết đầu tiên của mình, và mình hy vọng rằng bạn sẽ tìm
              thấy giá trị trong những gì mình chia sẻ. Hãy theo dõi để không bỏ
              lỡ những nội dung thú vị về lập trình, công nghệ và cuộc sống của
              một sinh viên đang tìm kiếm sự trưởng thành. Cảm ơn bạn đã ghé
              thăm blog của mình!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
