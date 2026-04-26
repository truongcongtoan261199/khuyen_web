import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hệ Thống Nước Nóng Trung Tâm - Linh Dương Company",
  description: "Máy nước nóng trung tâm Heat Pump Sanden (Nhật Bản) và Rheem (Úc) – Tiết kiệm điện đến 70%, an toàn, bền bỉ cho biệt thự và nhà phố cao cấp.",
};

const products = [
  {
    id: 1,
    brand: "SANDEN",
    name: "Máy Nước Nóng Trung Tâm Heat Pump Sanden Nhật Bản",
    description: "Công nghệ Heat Pump tiên tiến nhất từ Nhật Bản. Tiết kiệm điện vượt trội, hoạt động ổn định ngay cả ở nhiệt độ thấp.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/123123.jpg",
    highlight: "Tiết kiệm 70% điện",
    warranty: "Bảo hành 3 năm",
    origin: "Nhật Bản",
  },
  {
    id: 2,
    brand: "RHEEM",
    name: "Máy Nước Nóng Trung Tâm Heat Pump Rheem Úc",
    description: "Thương hiệu hàng đầu nước Úc với công nghệ cao cấp, thiết kế hiện đại, phù hợp với khí hậu Việt Nam.",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/123123.jpg",
    highlight: "Công suất lớn",
    warranty: "Bảo hành 5 năm",
    origin: "Úc",
  },
];

export default function NuocNongTrungTamPage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[450px] bg-gradient-to-br from-[#1a5276] via-[#1e6a9e] to-[#3498db] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HỆ THỐNG NƯỚC NÓNG TRUNG TÂM</h1>
          <p className="text-xl max-w-2xl">
            Giải pháp nước nóng toàn nhà hiện đại – Tiết kiệm điện, an toàn và tiện nghi
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Giới thiệu */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Nước nóng trung tâm Heat Pump – Xu hướng biệt thự cao cấp
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thay vì dùng nhiều máy nước nóng cục bộ, hệ thống nước nóng trung tâm sử dụng công nghệ Heat Pump 
            để cung cấp nước nóng cho toàn bộ nhà (vòi sen, bồn tắm, bếp...) một cách đồng đều và tiết kiệm.
          </p>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              <div className="relative h-96 overflow-hidden bg-gray-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white px-5 py-2 rounded-full text-sm font-semibold shadow">
                  {product.origin}
                </div>
              </div>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-[#1a5276]">{product.brand}</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                    {product.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-5 leading-tight">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm mb-10">
                  <div>
                    <span className="block text-gray-500">Bảo hành</span>
                    <span className="font-semibold text-[#1a5276]">{product.warranty}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Xuất xứ</span>
                    <span className="font-semibold">{product.origin}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="flex-1 btn-primary text-center py-4"
                  >
                    Tư vấn & Báo giá
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 border border-[#1a5276] text-[#1a5276] hover:bg-[#1a5276] hover:text-white font-semibold py-4 text-center rounded-xl transition-all"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ưu điểm nổi bật */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-12">Ưu điểm vượt trội của Heat Pump</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Tiết kiệm điện", desc: "Tiết kiệm đến 70% so với máy nước nóng điện trở thông thường" },
              { icon: "🌡️", title: "Nước nóng liên tục", desc: "Cung cấp nước nóng ổn định cho nhiều điểm cùng lúc" },
              { icon: "🔇", title: "Hoạt động êm ái", desc: "Công nghệ inverter hiện đại, tiếng ồn rất thấp" },
              { icon: "🌍", title: "Thân thiện môi trường", desc: "Sử dụng khí lạnh R410A hoặc R32 không làm suy giảm tầng ozone" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow transition-all">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA tư vấn */}
        <div className="mt-20 bg-[#1a5276] text-white rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Muốn lắp đặt hệ thống nước nóng trung tâm?</h2>
          <p className="text-gray-200 mb-10 max-w-xl mx-auto">
            Liên hệ ngay để được khảo sát miễn phí và nhận báo giá tốt nhất
          </p>
          <a 
            href="tel:0968034333"
            className="inline-block bg-white text-[#1a5276] font-bold px-14 py-5 rounded-2xl text-xl hover:bg-gray-100 transition-colors"
          >
            Gọi ngay: 0968.034.333
          </a>
        </div>
      </div>
    </main>
  );
}