import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sản phẩm & Giải pháp - Linh Dương Company",
  description: "Các giải pháp cao cấp: Hệ thống lọc nước tổng, Nước nóng trung tâm Heat Pump, Cấp khí tươi và Sưởi ấm dưới sàn từ các thương hiệu hàng đầu thế giới.",
};

const categories = [
  {
    title: "Hệ Thống Lọc Nước Tổng",
    description: "Giải pháp lọc nước toàn nhà, loại bỏ tạp chất, kim loại nặng, vi khuẩn và clo dư thừa.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f1.png",
    href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
    icon: "💧",
    count: "8 sản phẩm",
  },
  {
    title: "Hệ Thống Nước Nóng Trung Tâm",
    description: "Máy nước nóng Heat Pump Sanden (Nhật Bản) & Rheem (Úc) – tiết kiệm điện, an toàn và bền bỉ.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/123123.jpg",
    href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
    icon: "🔥",
    count: "6 sản phẩm",
  },
  {
    title: "Hệ Thống Lọc & Cấp Khí Tươi",
    description: "Hệ thống thông gió hồi nhiệt Komfovent – mang không khí sạch và trong lành vào nhà.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f3.png",
    href: "/danh-muc-san-pham/he-thong-loc-va-cap-khi-tuoi",
    icon: "🌬️",
    count: "4 sản phẩm",
  },
  {
    title: "Hệ Thống Sưởi Ấm Dưới Sàn",
    description: "Công nghệ sưởi ấm dưới sàn Warmup (Anh) – ấm áp, tiết kiệm và không chiếm diện tích.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f4.jpg",
    href: "/danh-muc-san-pham/he-thong-suoi-am-duoi-san",
    icon: "🏠",
    count: "5 sản phẩm",
  },
];

export default function SanPhamPage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[420px] bg-[#1a5276] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SẢN PHẨM & GIẢI PHÁP</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Các giải pháp cao cấp cho không gian sống hiện đại và bền vững
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={category.href}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 card-hover flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={category.img} 
                  alt={category.title}
                  className="w-full h-full object-cover img-hover-zoom"
                />
                <div className="absolute top-6 left-6 bg-white text-5xl w-16 h-16 flex items-center justify-center rounded-2xl shadow-md">
                  {category.icon}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#1a5276] transition-colors">
                    {category.title}
                  </h2>
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                    {category.count}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  {category.description}
                </p>

                <div className="inline-flex items-center text-[#1a5276] font-semibold group-hover:gap-3 transition-all">
                  Khám phá giải pháp 
                  <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Phần cam kết chất lượng */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Tại sao nên chọn giải pháp của Linh Dương Company?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Tất cả sản phẩm đều được nhập khẩu chính hãng 100%, có đầy đủ chứng nhận quốc tế 
            (NSF, WQA, TUV, ISO, FDA...) và được bảo hành dài hạn bởi đội ngũ kỹ thuật chuyên nghiệp.
          </div>
        </div>
      </div>
    </main>
  );
}