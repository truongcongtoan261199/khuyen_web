import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hệ Thống Lọc & Cấp Khí Tươi - Linh Dương Company",
  description: "Hệ thống cấp khí tươi Komfovent – Giải pháp thông gió hồi nhiệt, mang không khí sạch và trong lành vào biệt thự, nhà phố cao cấp.",
};

const products = [
  {
    id: 1,
    brand: "KOMFOVENT",
    name: "Máy Cấp Khí Tươi Hồi Nhiệt Komfovent",
    description: "Công nghệ thông gió hồi nhiệt hiện đại nhất từ Lithuania (Châu Âu). Giữ lại 95% nhiệt độ, lọc sạch bụi mịn PM2.5, phấn hoa và vi khuẩn.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f3.png",
    highlight: "Hồi nhiệt lên đến 95%",
    warranty: "Bảo hành 3 năm",
    origin: "Lithuania",
  },
  {
    id: 2,
    brand: "KOMFOVENT",
    name: "Hệ Thống Cấp Khí Tươi Toàn Nhà",
    description: "Giải pháp thông gió trung tâm dành cho biệt thự và nhà phố cao tầng. Điều hòa không khí, kiểm soát độ ẩm và lọc không khí tinh khiết.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f3.png",
    highlight: "Lọc HEPA + Than hoạt tính",
    warranty: "Bảo hành 3 năm",
    origin: "Lithuania",
  },
];

export default function KhiTuoiPage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[450px] bg-gradient-to-br from-[#1a5276] to-[#0f3a5e] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HỆ THỐNG LỌC & CẤP KHÍ TƯƠI</h1>
          <p className="text-xl max-w-2xl">
            Không khí trong lành – Yếu tố quan trọng nhất cho sức khỏe gia đình bạn
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Giới thiệu */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Tại sao cần hệ thống cấp khí tươi?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trong các ngôi nhà kín hiện nay, không khí bên trong thường ô nhiễm gấp nhiều lần không khí bên ngoài. 
            Hệ thống cấp khí tươi Komfovent giúp đưa không khí sạch từ bên ngoài vào, đồng thời loại bỏ CO₂, mùi hôi và vi khuẩn.
          </p>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-96 overflow-hidden bg-gray-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold text-[#1a5276]">
                  {product.brand}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-5 group-hover:text-[#1a5276] transition-colors">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-6 text-sm mb-10">
                  <div>
                    <span className="text-gray-500 block">Xuất xứ</span>
                    <span className="font-semibold">{product.origin}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Bảo hành</span>
                    <span className="font-semibold text-[#1a5276]">{product.warranty}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex-1 btn-primary text-center py-4 text-sm"
                  >
                    Tư vấn & Báo giá
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 border-2 border-[#1a5276] text-[#1a5276] hover:bg-[#1a5276] hover:text-white font-semibold py-4 text-center rounded-xl transition-all"
                  >
                    Xem chi tiết kỹ thuật
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ưu điểm nổi bật */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-12">Lợi ích của hệ thống cấp khí tươi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌬️",
                title: "Không khí sạch 24/7",
                desc: "Lọc bụi mịn PM2.5, phấn hoa, vi khuẩn và nấm mốc"
              },
              {
                icon: "♻️",
                title: "Hồi nhiệt thông minh",
                desc: "Giữ lại đến 95% nhiệt độ, tiết kiệm điện năng lượng"
              },
              {
                icon: "🛡️",
                title: "Bảo vệ sức khỏe",
                desc: "Giảm nguy cơ dị ứng, hen suyễn và các bệnh hô hấp"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-3xl text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-[#1a5276]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#1a5276] to-[#3498db] text-white rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Muốn có không khí trong lành cho cả gia đình?</h2>
          <p className="text-gray-200 mb-10 max-w-xl mx-auto">
            Liên hệ ngay để được tư vấn và thiết kế hệ thống cấp khí tươi phù hợp với ngôi nhà của bạn.
          </p>
          <a 
            href="tel:0968034333"
            className="inline-block bg-white text-[#1a5276] font-bold px-14 py-5 rounded-2xl text-xl hover:bg-gray-100 transition-colors"
          >
            Gọi tư vấn: 0968.034.333
          </a>
        </div>
      </div>
    </main>
  );
}