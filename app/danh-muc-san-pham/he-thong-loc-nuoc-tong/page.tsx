import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hệ Thống Lọc Nước Tổng - Linh Dương Company",
  description: "Giải pháp lọc nước tổng gia đình cao cấp từ RainSoft (Mỹ) và DropConnect. Lọc sạch toàn bộ nước sinh hoạt trong nhà.",
};

const products = [
  {
    id: 1,
    name: "Hệ Thống Lọc Nước Tổng RainSoft",
    description: "Công nghệ lọc nước tổng hàng đầu Mỹ, loại bỏ 99.9% tạp chất, kim loại nặng, vi khuẩn và clo dư thừa.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f1.png",
    priceRange: "Liên hệ",
    highlight: "Bảo hành 5 năm",
  },
  {
    id: 2,
    name: "Hệ Thống Lọc Nước Tổng DropConnect",
    description: "Giải pháp lọc nước tổng hiện đại, thiết kế compact, hiệu suất cao, phù hợp với nhà phố và biệt thự.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f1.png", // tạm dùng ảnh này, sau có thể thay
    priceRange: "Liên hệ",
    highlight: "Tiết kiệm không gian",
  },
];

export default function HeThongLocNuocTongPage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[450px] bg-gradient-to-r from-[#1a5276] to-[#3498db] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HỆ THỐNG LỌC NƯỚC TỔNG</h1>
          <p className="text-xl max-w-2xl">
            Giải pháp lọc nước toàn nhà – Nước sạch an toàn cho mọi sinh hoạt gia đình
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Giới thiệu ngắn */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Tại sao cần hệ thống lọc nước tổng?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nước máy thành phố hiện nay thường chứa nhiều tạp chất, clo, kim loại nặng và vi sinh vật. 
            Hệ thống lọc nước tổng giúp xử lý toàn bộ nguồn nước vào nhà, mang lại nước sạch an toàn cho sinh hoạt và nấu ăn.
          </p>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-80 bg-gray-100 relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#1a5276] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full font-medium">
                    {product.highlight}
                  </span>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Giá tham khảo</span>
                    <p className="text-xl font-semibold text-[#1a5276]">{product.priceRange}</p>
                  </div>

                  <Link
                    href="#"
                    className="btn-primary px-8 py-3 text-sm"
                  >
                    Tư vấn ngay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ưu điểm nổi bật */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-12">Ưu điểm nổi bật</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lọc sạch toàn diện",
                desc: "Loại bỏ đến 99.9% tạp chất, kim loại nặng, clo, vi khuẩn và mùi lạ",
                icon: "🛡️"
              },
              {
                title: "Tiết kiệm chi phí",
                desc: "Không cần mua nước đóng chai, giảm chi phí lâu dài cho gia đình",
                icon: "💰"
              },
              {
                title: "Bảo hành dài hạn",
                desc: "Bảo hành chính hãng từ 3 - 5 năm, hỗ trợ kỹ thuật trọn đời",
                icon: "🔧"
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-[#1a5276]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#1a5276] text-white rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn giải pháp lọc nước phù hợp?</h2>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            Đội ngũ kỹ thuật của Linh Dương Company sẽ khảo sát miễn phí và đưa ra giải pháp tối ưu nhất cho ngôi nhà của bạn.
          </p>
          <a 
            href="tel:0968034333"
            className="inline-block bg-white text-[#1a5276] font-bold px-12 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors"
          >
            Gọi ngay: 0968.034.333
          </a>
        </div>
      </div>
    </main>
  );
}