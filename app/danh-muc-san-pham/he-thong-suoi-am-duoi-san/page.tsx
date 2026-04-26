import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hệ Thống Sưởi Ấm Dưới Sàn - Linh Dương Company",
  description:
    "Giải pháp sưởi sàn Châu Âu cao cấp – ấm đều, tiết kiệm năng lượng, nâng tầm không gian sống.",
};

const products = [
  {
    id: 1,
    brand: "HEATCOM",
    name: "Sưởi Sàn Điện Heatcom",
    description:
      "Giải pháp sưởi sàn bằng điện từ Đan Mạch, phù hợp cải tạo và nhà phố.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/suoi-san-1.jpg",
    highlight: "Lắp đặt linh hoạt",
    warranty: "10 năm",
    origin: "Denmark",
  },
  {
    id: 2,
    brand: "REHAU",
    name: "Sưởi Sàn Nước REHAU",
    description:
      "Hệ thống sưởi sàn bằng nước nóng từ Đức, tối ưu cho biệt thự và công trình lớn.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/suoi-san-2.jpg",
    highlight: "Hiệu suất cao",
    warranty: "10 năm",
    origin: "Germany",
  },
];

export default function SuoiSanCategoryPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="relative h-[450px] bg-gradient-to-br from-[#7b241c] to-[#922b21] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HỆ THỐNG SƯỞI ẤM DƯỚI SÀN
          </h1>
          <p className="text-xl max-w-2xl">
            Giải pháp sưởi ấm cao cấp – ấm đều từ dưới chân, sang trọng cho toàn bộ không gian
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#7b241c] mb-6">
            Sưởi ấm dưới sàn là gì?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hệ thống sưởi sàn hoạt động bằng cách truyền nhiệt từ dưới lên thông qua bức xạ nhiệt, 
            giúp làm ấm không gian một cách đồng đều và tự nhiên hơn so với điều hòa nóng.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="relative h-96 bg-gray-100 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-[#7b241c]">
                  {product.brand}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7b241c]">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                  <div>
                    <span className="text-gray-500 block">Xuất xứ</span>
                    <span className="font-semibold">{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Bảo hành</span>
                    <span className="font-semibold text-[#7b241c]">
                      {product.warranty}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="#" className="flex-1 btn-primary text-center py-4">
                    Tư vấn & Báo giá
                  </Link>

                  <Link
                    href="#"
                    className="flex-1 border-2 border-[#7b241c] text-[#7b241c] hover:bg-[#7b241c] hover:text-white py-4 text-center rounded-xl"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BENEFITS */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-[#7b241c] mb-12">
            Lợi ích của sưởi ấm dưới sàn
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔥",
                title: "Nhiệt lan tỏa đồng đều",
                desc: "Sưởi ấm toàn bộ không gian, không có điểm nóng lạnh",
              },
              {
                icon: "🔇",
                title: "Vận hành êm ái",
                desc: "Không gây tiếng ồn, phù hợp phòng ngủ và biệt thự",
              },
              {
                icon: "💡",
                title: "Tiết kiệm năng lượng",
                desc: "Hiệu suất cao hơn so với hệ thống sưởi truyền thống",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-10 rounded-3xl text-center hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-[#7b241c]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#7b241c] to-[#c0392b] text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bạn muốn trải nghiệm sưởi ấm chuẩn Châu Âu?
          </h2>
          <p className="mb-6">
            Liên hệ ngay để được tư vấn giải pháp phù hợp nhất
          </p>

          <a
            href="tel:0968034333"
            className="bg-white text-[#7b241c] font-bold px-10 py-4 rounded-xl"
          >
            Gọi ngay 0968.034.333
          </a>
        </div>
      </div>
    </main>
  );
}