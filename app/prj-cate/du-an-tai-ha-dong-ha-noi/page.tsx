import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dự án tại Hà Đông, Hà Nội - Linh Dương Company",
  description:
    "Công trình biệt thự tại Hà Đông – triển khai hệ thống khí tươi, sưởi sàn và nước nóng trung tâm cao cấp.",
};

const gallery = [
  "https://ldcompany.vn/wp-content/uploads/2024/07/1-1.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/07/2-1.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/07/3-1.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/07/4-1.jpg",
];

export default function ProjectHaDongPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="relative h-[500px]">
        <Image
          src={gallery[0]}
          alt="Dự án Hà Đông"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DỰ ÁN TẠI HÀ ĐÔNG, HÀ NỘI
            </h1>
            <p className="text-lg max-w-2xl">
              Biệt thự cao cấp ứng dụng giải pháp khí tươi, nước nóng trung tâm và sưởi ấm dưới sàn
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
              Dự án biệt thự tại Hà Đông được thiết kế và thi công với tiêu chuẩn cao cấp, 
              ứng dụng các giải pháp công nghệ hiện đại nhằm nâng cao chất lượng sống cho gia chủ.
              Hệ thống khí tươi giúp lưu thông không khí, sưởi sàn mang lại cảm giác ấm áp 
              và hệ thống nước nóng trung tâm đảm bảo tiện nghi tối đa.
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

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#1a5276]">
              Giải pháp triển khai
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>✔️ Hệ thống cấp khí tươi Komfovent</li>
              <li>✔️ Hệ thống sưởi sàn Châu Âu</li>
              <li>✔️ Nước nóng trung tâm Heat Pump</li>
              <li>✔️ Tối ưu vận hành & tiết kiệm năng lượng</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-6 text-[#1a5276]">
              Thông tin dự án
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-500 block">Địa điểm</span>
                <span className="font-semibold">Hà Đông, Hà Nội</span>
              </div>

              <div>
                <span className="text-gray-500 block">Loại công trình</span>
                <span className="font-semibold">Biệt thự</span>
              </div>

              <div>
                <span className="text-gray-500 block">Hạng mục</span>
                <span className="font-semibold">
                  Khí tươi, sưởi sàn, nước nóng
                </span>
              </div>

              <div>
                <span className="text-gray-500 block">Thời gian</span>
                <span className="font-semibold">2024</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#1a5276] to-[#3498db] text-white p-8 rounded-2xl text-center">
            <h3 className="font-bold text-xl mb-4">
              Cần tư vấn giải pháp cho công trình của bạn?
            </h3>

            <a
              href="tel:0968034333"
              className="inline-block bg-white text-[#1a5276] font-bold px-6 py-3 rounded-xl"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}