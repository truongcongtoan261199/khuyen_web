import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Biệt thự tại TP. Vinh, Nghệ An - Linh Dương Company",
  description:
    "Dự án biệt thự tại Nghệ An triển khai hệ thống lọc nước tổng và nước nóng trung tâm cao cấp.",
};

const gallery = [
  "https://ldcompany.vn/wp-content/uploads/2024/07/Anh-bia-ngoai-1400x788.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/07/Anh-bia-ngoai-1-1400x788.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-13-1400x788.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-12-1400x788.jpg",
];

export default function ProjectVinhPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="relative h-[500px]">
        <Image
          src={gallery[0]}
          alt="Biệt thự Nghệ An"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              BIỆT THỰ TẠI TP. VINH, NGHỆ AN
            </h1>
            <p className="text-lg max-w-2xl">
              Giải pháp lọc nước tổng & nước nóng trung tâm nâng tầm tiện nghi sống
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-12">
          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#1a5276]">
              Giới thiệu dự án
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dự án biệt thự tại TP. Vinh (Nghệ An) được triển khai với mục tiêu nâng cao 
              chất lượng sống thông qua hệ thống lọc nước tổng và nước nóng trung tâm. 
              Giải pháp này giúp cung cấp nguồn nước sạch tinh khiết, loại bỏ tạp chất 
              và kim loại nặng, đồng thời đảm bảo nhiệt độ nước ổn định trong mọi điều kiện sử dụng.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((img, i) => (
              <div key={i} className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src={img}
                  alt={`gallery-${i}`}
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#1a5276]">
              Giải pháp triển khai
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>✔️ Hệ thống lọc nước tổng DROPCONNECT</li>
              <li>✔️ Hệ thống nước nóng trung tâm ATLANTIC</li>
              <li>✔️ Cung cấp nước sạch cho toàn bộ ngôi nhà</li>
              <li>✔️ Tối ưu tiết kiệm năng lượng & chi phí vận hành</li>
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-6 text-[#1a5276]">
              Thông tin dự án
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-500 block">Địa điểm</span>
                <span className="font-semibold">TP. Vinh, Nghệ An</span>
              </div>

              <div>
                <span className="text-gray-500 block">Loại công trình</span>
                <span className="font-semibold">Biệt thự</span>
              </div>

              <div>
                <span className="text-gray-500 block">Hạng mục</span>
                <span className="font-semibold">
                  Lọc nước tổng & Nước nóng trung tâm
                </span>
              </div>

              <div>
                <span className="text-gray-500 block">Thiết bị</span>
                <span className="font-semibold">
                  DROPCONNECT, ATLANTIC
                </span>
              </div>

              <div>
                <span className="text-gray-500 block">Năm thực hiện</span>
                <span className="font-semibold">2024</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#1a5276] to-[#3498db] text-white p-8 rounded-2xl text-center">
            <h3 className="font-bold text-xl mb-4">
              Bạn muốn giải pháp tương tự?
            </h3>

            <a
              href="tel:0968034333"
              className="inline-block bg-white text-[#1a5276] font-bold px-6 py-3 rounded-xl"
            >
              Gọi tư vấn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}