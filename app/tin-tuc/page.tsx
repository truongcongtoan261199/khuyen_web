import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tin tức - Linh Dương Company",
  description: "Cập nhật các tin tức mới nhất về sản phẩm, công nghệ lọc nước, nước nóng trung tâm, khí tươi và các dự án của Linh Dương Company.",
};

const newsItems = [
  {
    id: 1,
    title: "NƯỚC CỨNG LÀ GÌ? CÁCH KHẮC PHỤC TÌNH TRẠNG NƯỚC CỨNG?",
    excerpt: "Nước cứng là loại nước chứa hàm lượng cao các khoáng chất như canxi và magiê. Khi nước di chuyển qua các lớp đất đá, nó hòa tan các khoáng chất này...",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/t3.jpg",
    date: "15/06/2024",
    category: "Kiến thức nước",
  },
  {
    id: 2,
    title: "TIMCUP 2024 SẮC TÍM YÊU THƯƠNG – CÙNG EM ĐẾN TRƯỜNG",
    excerpt: "Ngày 08/06/2024 tại sân bóng Thành Công, Giải bóng đá TimCup 2024 nhằm mục đích gây quỹ thiện nguyện hỗ trợ các em học sinh có hoàn cảnh khó khăn.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/t2-scaled.jpg",
    date: "10/06/2024",
    category: "Hoạt động cộng đồng",
  },
  {
    id: 3,
    title: "LỄ KÝ KẾT HỢP TÁC ĐỘC QUYỀN HEAT PUMP SANDEN TẠI VIỆT NAM",
    excerpt: "Hà Nội, ngày 19 tháng 1 năm 2024 – Trong một bước tiến quan trọng đánh dấu sự phát triển trong lĩnh vực công nghệ nước nóng trung tâm...",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/t1-scaled.jpg",
    date: "20/01/2024",
    category: "Sự kiện",
  },
  {
    id: 4,
    title: "LỢI ÍCH CỦA HỆ THỐNG CẤP KHÍ TƯƠI TRONG NHÀ Ở HIỆN ĐẠI",
    excerpt: "Không khí trong lành là yếu tố quan trọng ảnh hưởng trực tiếp đến sức khỏe. Hệ thống cấp khí tươi đang trở thành giải pháp không thể thiếu trong các biệt thự cao cấp.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/3-1.png", // dùng tạm ảnh hero
    date: "05/07/2024",
    category: "Kiến thức",
  },
];

export default function TinTucPage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] bg-[#1a5276] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TIN TỨC</h1>
          <p className="text-xl text-gray-200 max-w-xl">
            Cập nhật những thông tin mới nhất về công nghệ và hoạt động của Linh Dương Company
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="relative overflow-hidden">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-56 object-cover img-hover-zoom"
                />
                <div className="absolute top-4 left-4 bg-white text-xs font-medium px-3 py-1 rounded-full text-[#1a5276]">
                  {news.category}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3">{news.date}</p>
                
                <h3 className="font-bold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-[#1a5276] transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                  {news.excerpt}
                </p>

                <Link
                  href={`/tin-tuc/${news.id}`}
                  className="inline-flex items-center text-[#1a5276] font-medium hover:gap-2 transition-all"
                >
                  Đọc tiếp →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Phân trang (có thể mở rộng sau) */}
        <div className="flex justify-center gap-3 mt-16">
          <button className="px-5 py-3 border border-gray-300 rounded-lg hover:border-[#1a5276] hover:text-[#1a5276] transition-colors">
            1
          </button>
          <button className="px-5 py-3 border border-gray-300 rounded-lg hover:border-[#1a5276] hover:text-[#1a5276] transition-colors">
            2
          </button>
          <button className="px-5 py-3 border border-gray-300 rounded-lg hover:border-[#1a5276] hover:text-[#1a5276] transition-colors">
            3
          </button>
          <button className="px-5 py-3 text-gray-400">→</button>
        </div>
      </div>
    </main>
  );
}