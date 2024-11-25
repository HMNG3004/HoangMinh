import { formatDate } from "../../../../utils/formatDate";

const DailyCapstoneNov25th = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-3/5">
        <div className="mb-3">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Chill cuối tuần với đồ án tốt nghiệp
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {formatDate(new Date(2024, 11, 24).toString())}
          </p>
        </div>

        <div className="mb-3"></div>
        <h2 className="text-2xl font-bold dark:text-white">
          Một tuần đầy mệt mỏi
        </h2>
        <div className="my-4 text-xl text-gray-700">
          <p className="py-3">
            Hi xin chào các bạn, tuần vừa qua thì cả nhóm đã bắt đầu giai đoạn
            test và fix bug. Mình đã dành cả tuần để chỉ fix bug, và mình nhận
            ra là mình code còn khá là ẩu và chưa có tính mở rộng cao cho lắm.
            Nên ngoài việc fix bug thì mình cũng phải viết lại một số phần code
            để nó có tính ứng dụng tốt hơn và flexible hơn.
          </p>
          <p className="py-3">
            Trong quá trình làm đồ án tốt nghiệp thì trường mình sẽ có một số
            buổi review giữa nhóm với các thầy cô để nhận xét và chỉ dẫn cho dự
            án của mình trước khi ra hội đồng bảo vệ.
          </p>
          <p className="py-3">
            Để chuẩn bị cho buổi review cuối cùng trước khi ra báo cáo thì mình
            và nhóm đã cố gắng hết sức để hoàn thiện hệ thống. Mình cảm thấy rất
            vui và hạnh phúc khi thấy sản phẩm của mình ngày càng hoàn thiện.
          </p>
          <p className="py-3">
            Trước khi đi review thì nhóm mình sẽ phải demo trước cho mentor để
            mentor nhận xét và cho ý kiến để giúp dự án của nhóm có thể trở nên
            tốt hơn. Mình cảm thấy rất may mắn khi mà mentor của mình rất tận
            tâm và nhận xét rất chi tiết. Một phần vì cô khá kĩ tính, nhưng mình
            cảm thấy rất vui khi mà mình làm việc với cô.
          </p>
          <p className="flex flex-col items-center py-3">
            <img
              src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1732498711/BlogImage/wgwaunvsutbimnguwmgy.jpg"
              alt=""
              className="w-full h-auto"
            />
            <p className="italic ">
              Cuối tuần mọi người đi chơi thì chúng mình lại ngồi code từ sáng
              đến tối :))
            </p>
          </p>

          <p className="flex flex-col items-center py-3">
            <img
              src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1732498712/BlogImage/a0mtnv6jdv7zsifsgipo.png"
              alt=""
              className="w-full h-auto"
            />
            <p className="italic ">11h đêm rồi vẫn còn họp nè</p>
          </p>

          <p>
            Bài viết này đến đây thôi, chuẩn bị tiếp tục cho một tuần mới thôi
            nào :))
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyCapstoneNov25th;
