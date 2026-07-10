import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dự án tại Thanh Hóa - VIET HOME",
  description:
    "Công trình biệt thự KĐT Đông Vệ, Thanh Hóa – triển khai hệ thống nước nóng trung tâm.",
};

const gallery = [
  "/images/duandathuchien/dong-ve-thanh-hoa-1.jpg",
  "/images/duandathuchien/dong-ve-thanh-hoa-2.jpg",
  "/images/duandathuchien/dong-ve-thanh-hoa-3.jpg",
];

export default function ProjectDongVePage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dự án đã thi công', href: '/prj-cate/du-an' },
          { label: 'Dự Án Tại Đông Vệ, Thanh Hóa' },
        ]}
      />

      {/* HERO */}
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={gallery[0]}
          alt="Dự án Đông Vệ, Thanh Hóa"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                DỰ ÁN TẠI ĐÔNG VỆ, THANH HÓA
              </h1>
              <p className="text-lg md:text-xl max-w-2xl text-gray-100">
                Công trình biệt thự tại KĐT Đông Vệ, Thanh Hóa – triển khai hệ thống nước nóng trung tâm hiện đại
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* LEFT - Main Content */}
        <div className="lg:col-span-2 space-y-16">

          {/* Intro */}
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-6 text-[#1a5276]">
              Giới thiệu dự án
            </h2>
            <p className="text-gray-600 leading-relaxed text-[17px]">
              Dự án biệt thự tại KĐT Đông Vệ, Thanh Hóa được triển khai hệ thống nước nóng trung tâm Heatpump, mang đến nguồn nước nóng ổn định 24/7 cho toàn bộ ngôi nhà. Giải pháp tiên tiến này giúp gia chủ tận hưởng sự tiện nghi tối đa với chi phí vận hành tối ưu.
            </p>
          </div>

          {/* Gallery */}
          <div className="animate-fadeInUp" style={{ animationDelay: "150ms" }}>
            <h2 className="text-3xl font-bold mb-8 text-[#1a5276]">Hình ảnh thực tế</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <Image
                    src={img}
                    alt={`gallery-${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-medium">Ảnh {i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Giải pháp triển khai */}
          <div className="animate-fadeInUp" style={{ animationDelay: "300ms" }}>
            <h2 className="text-3xl font-bold mb-6 text-[#1a5276]">
              Giải pháp triển khai
            </h2>

            <ul className="space-y-5 text-gray-600">
              {[
                "Hệ thống nước nóng trung tâm Heatpump",
                "Cung cấp nước nóng ổn định 24/7",
                "Tiết kiệm năng lượng vượt trội",
                "Thiết kế phù hợp với không gian biệt thự",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[17px] group"
                >
                  <span className="text-[#1a5276] text-xl mt-0.5 transition-transform group-hover:scale-125">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">
          {/* Thông tin dự án */}
          <div
            className="bg-gray-50 p-8 rounded-3xl animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="font-bold text-xl mb-7 text-[#1a5276] border-b border-gray-200 pb-4">
              Thông tin dự án
            </h3>

            <div className="space-y-6 text-sm">
              {[
                { label: "Địa điểm", value: "Đông Vệ, Thanh Hóa" },
                { label: "Loại công trình", value: "Biệt thự" },
                { label: "Hạng mục", value: "Nước nóng trung tâm" },
                { label: "Thời gian", value: "2026" },
              ].map((info, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-gray-500 text-sm">{info.label}</span>
                  <span className="font-semibold text-gray-800 mt-1">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="bg-gradient-to-br from-[#1a5276] to-[#3498db] text-white p-10 rounded-3xl text-center animate-fadeInUp hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="font-bold text-2xl mb-5 leading-tight">
              Cần tư vấn giải pháp cho công trình của bạn?
            </h3>

            <a
              href="tel:0377778513"
              className="inline-block bg-white text-[#1a5276] font-bold px-10 py-4 rounded-2xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md"
            >
              Gọi ngay 0377.778.513
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
