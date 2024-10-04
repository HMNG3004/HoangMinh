const DailyCapstone: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-start text-left w-3/5">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Nhật ký làm nô lệ cho đồ án tốt nghiệp
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            October 4, 2024
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold dark:text-white">
            Bắt đầu hành trình khổ ải
          </h2>
          <div className="my-4 text-xl text-gray-700">
            <p className="py-3">
              Lúc mình viết bài này, mình đang trên chuyến hành trình làm đồ án
              tốt nghiệp. Chủ đề mình chọn là phát triển Hệ thống Quản lý và Cho
              thuê Máy móc Cơ khí cho công ty Thanh Luan Machinery and Equipment
              Limited Liability Company. Ý tưởng này không quá mới, nhưng nhu
              cầu thực tế của doanh nghiệp rất rõ ràng: họ cần số hóa toàn bộ
              quy trình cho thuê máy móc, quản lý bảo trì, và chăm sóc khách
              hàng thay vì làm thủ công như hiện tại.
            </p>
            <p className="pt-3">
              Hiện tại dự án của mình đã đi qua được giai đoạn phân tích yêu cầu
              và thiết kế hệ thống. Mình đã lập danh sách các tính năng chính:
            </p>
            <ul className="list-disc pl-10">
              <li>Quản lý khách hàng</li>
              <li>Quản lý máy móc</li>
              <li>Quản lý hợp đồng thuê</li>
              <li>Lịch bảo trì</li>
            </ul>
            <p className="pt-3">
              Tạm thời thì mọi thứ nghe rất hoành tráng, nhưng mình biết khổ nạn
              chỉ mới bắt đầu.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold dark:text-white">
            Những cơn ác mộng của việc <span className="italic">fix bug</span>
          </h2>
          <div className="my-4 text-xl text-gray-700">
            <p className="py-3">
              Mình đã dành gần như cả ngày hôm nay chỉ để cho mỗi việc là "fix
              bug". Mình đã nghĩ rằng phần quản lý máy móc sẽ không quá phức
              tạp, nhưng không 🙂. Cuộc đời luôn có những thứ sẽ vả vào mặt mình
              bớt mơ màng.
            </p>
            <p className="py-3">
              Mất cả buổi sáng cho đến khi mình nhận ra là attribute được gửi từ
              API lên thay vì là <code>productID</code> thì nó lại là{" "}
              <code>productId</code> 🤦‍♂️🤦‍♂️.
            </p>
            <p className="py-3">
              Một năm trở lại đây thì mình đang dần trở thành một full-stack
              developer nhưng mà mình vẫn thích làm việc với back-end hơn, việc
              chuyển sang làm hoàn toàn front-end lần này khiến mình cảm thấy
              hơi nhàm chán một tý.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold dark:text-white">
            Nỗi ám ảnh với tài liệu và thiết kế
          </h2>
          <div className="my-4 text-xl text-gray-700">
            <p className="py-3">
              Thú thật, mình ngán ngẩm nhất là phải ngồi làm **documents**, vẽ
              **diagram**, và vô vàn thứ khác. Có cảm giác mỗi lần bắt tay vào
              làm tài liệu là mỗi lần mình bị mất sạch năng lượng.
            </p>
            <p className="py-3">
              Ban đầu mình tưởng phần code là khó nhất, nhưng sau khi trải qua
              vài ngày ngồi viết mô tả chi tiết từng màn hình, từng use case cho
              hệ thống, mình mới nhận ra là mình đã sai. Đúng là làm tài liệu có
              thể giúp team làm việc hiệu quả hơn, nhưng thật sự là mình muốn
              thoát khỏi những thứ khô khan này càng sớm càng tốt.
            </p>
            <p className="py-3">
              Chưa kể đến việc mỗi lần phải điều chỉnh hay bổ sung tài liệu lại
              như thêm một "cơn ác mộng" nữa vậy. Nhưng, cuối cùng thì cũng phải
              hoàn thành thôi, vì đồ án mà!
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold dark:text-white">Lời kết</h2>
          <div className="my-4 text-xl text-gray-700">
            <p className="py-3">
              Đúng là mình đã nói rằng mình sẽ ghi nhật ký hàng ngày, nhưng thực
              tế thì mình không chắc mình có đủ kiên nhẫn để làm điều đó. Mình
              sẽ cố gắng, nhưng không hứa hẹn gì hơn. Cảm ơn bạn đã đọc đến đây!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyCapstone;
