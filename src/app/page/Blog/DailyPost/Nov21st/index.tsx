import { formatDate } from "../../../../utils/formatDate";

const DailyNov21st = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex flex-col text-left w-3/5">
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
            Càng lớn, tớ càng thích những người dịu dàng
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {formatDate(new Date(2024, 11, 21).toString())}
          </p>
        </div>
      </div>
      <div className="p-6 bg-gray-100 text-gray-800 max-w-4xl mx-auto rounded-lg shadow-md">
        <p className="text-lg leading-relaxed mb-4">
          Càng trưởng thành, tớ càng trân quý những con người dịu dàng – những
          người mà khi ở bên cạnh, tớ cảm thấy bình yên. Nếu ngày còn nhỏ, tớ dễ
          bị cuốn hút bởi những người hài hước, nổi bật hay táo bạo, thì giờ
          đây, tớ thấy mình chậm lại, muốn sống một cách tĩnh lặng hơn, an yên
          hơn.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Tớ thích những người dịu dàng bởi vì họ luôn biết cách lắng nghe,
          không vội vàng phán xét, họ kiên nhẫn, và biết cách mang đến sự ấm áp
          mà không cần phô trương. Sự dịu dàng của họ làm tan biến những lo
          toan, giúp tớ thêm tự tin và yên lòng trước những sóng gió cuộc sống.
        </p>
        <p className="text-lg leading-relaxed">
          Khi bên họ, tớ cảm thấy mình được là chính mình, không cần gồng mình
          hay đóng vai trò nào khác. Có lẽ, chính sự dịu dàng ấy là liều thuốc
          quý giá mà ai trưởng thành cũng đều cần – một chút nhẹ nhàng giữa
          những áp lực, một chút thấu hiểu giữa những ồn ào.
        </p>

        <img
          src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1732178035/BlogImage/u7lkiemybijondlftaaa.png"
          alt=""
          className="w-full mt-6"
        />
      </div>
    </>
  );
};

export default DailyNov21st;
