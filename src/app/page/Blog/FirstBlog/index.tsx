import React from "react";

const FirstBlog: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-3/5">
        {/* Tiêu đề và Ngày */}
        <div>
          <div className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Giới thiệu về mình
          </div>
          <div className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Ngày 1 tháng 10 năm 2024
          </div>
        </div>

        {/* Giới thiệu về bản thân */}
        <div>
          <div className="text-4xl font-bold dark:text-white">Mình là ai?</div>
          <div className="my-4 text-2xl text-gray-700">
            Chào bạn! Mình là Hoàng Minh, một sinh viên năm cuối ngành Kỹ thuật
            Phần mềm tại Đại học FPT - TPHCM. Mình yêu thích công nghệ và đang
            dấn thân vào con đường phát triển web và di động.
          </div>
        </div>

        {/* Định hướng của mình */}
        <div>
          <div className="text-4xl font-bold dark:text-white">
            Định hướng của mình
          </div>
          <div className="my-4 text-2xl text-gray-700">
            Mình đang hướng tới việc trở thành một lập trình viên full-stack, có
            khả năng làm việc trên cả nền tảng web và di động. Mình sẽ không
            ngừng học hỏi và thực hành để phát triển bản thân.
          </div>
        </div>

        {/* Mục đích của blog này */}
        <div>
          <div className="text-4xl font-bold dark:text-white">
            Tại sao blog này ra đời?
          </div>
          <div className="my-4 text-2xl text-gray-700">
            Blog này được tạo ra để mình ghi lại những hoạt động hàng ngày trong
            cuộc sống, công việc và học tập. Tại đây, mình sẽ chia sẻ những trải
            nghiệm, bài học và những điều thú vị mà mình gặp phải trong hành
            trình trưởng thành.
          </div>
        </div>

        {/* Những gì bạn có thể mong đợi */}
        <div>
          <div className="text-4xl font-bold dark:text-white">
            Những gì bạn có thể mong đợi
          </div>
          <div className="my-4 text-2xl text-gray-700">
            Mình sẽ chia sẻ về những dự án mình đang làm, những kỹ thuật mới
            mình học được, và cả những câu chuyện nhỏ trong cuộc sống hàng ngày.
            Hy vọng rằng những bài viết này không chỉ giúp mình ghi lại kỷ niệm
            mà còn mang lại giá trị cho bạn đọc.
          </div>
        </div>

        {/* Lời kết */}
        <div>
          <div className="text-4xl font-bold dark:text-white">Lời kết</div>
          <div className="my-4 text-2xl text-gray-700">
            Đây là bài viết đầu tiên của mình, và mình hy vọng rằng bạn sẽ tìm
            thấy giá trị trong những gì mình chia sẻ. Hãy theo dõi để không bỏ
            lỡ những nội dung thú vị về lập trình, công nghệ và cuộc sống của
            một sinh viên đang tìm kiếm sự trưởng thành. Cảm ơn bạn đã ghé thăm
            blog của mình!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlog;
