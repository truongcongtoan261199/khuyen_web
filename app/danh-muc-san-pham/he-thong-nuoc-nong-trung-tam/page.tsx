"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

const products = [
  {
    id: "nuoc-nong-trung-tam-ammu",
    brand: "AMMU",
    name: "Máy Nước Nóng Trung Tâm Heat Pump Thương Hiệu Ammu",
    description: "Công nghệ Heat Pump tiên tiến nhất từ Goangdong, China. Tiết kiệm điện vượt trội, hoạt động ổn định ngay cả ở nhiệt độ thấp.",
    img: "/images/san-pham/nuoc-nong-ammu.jpg",
    imgWidth: 600,
    imgHeight: 600,
    highlight: "Tiết kiệm 70% điện",
    warranty: "Bảo hành 3 năm",
    origin: "Trung Quốc",
  },
  {
    id: "nuoc-nong-trung-tam-eminent",
    brand: "EMINENT",
    name: "Máy Nước Nóng Trung Tâm Heat Pump Eminent Thái Lan",
    description: "Thương hiệu hàng đầu nước Thái Lan với công nghệ cao cấp, thiết kế hiện đại, phù hợp với khí hậu Việt Nam.",
    img: "/images/san-pham/nuoc-nong-eminent-01.jpg",
    imgWidth: 600,
    imgHeight: 600,
    highlight: "Bảo hành 5 năm",
    warranty: "Bảo hành 5 năm",
    origin: "Thái Lan",
  },
  {
    id: "nuoc-nong-trung-tam-rheem",
    brand: "RHEEM",
    name: "Máy Nước Nóng Trung Tâm Heat Pump RHEEM Hoa Kỳ",
    description: "Một trong những thương hiệu hàng đầu thế giới về thiết bị nước nóng, được thành lập tại San Francisco từ năm 1925. Hiện nay Rheem có mặt tại hơn 80 quốc gia và là một trong những hãng tiên phong về công nghệ máy nước nóng trung tâm Heat Pump.",
    img: "/images/san-pham/nuoc-nong-rheem.jpg",
    imgWidth: 600,
    imgHeight: 600,
    highlight: "Thương hiệu 100 năm",
    warranty: "Bảo hành 5 năm",
    origin: "Hoa Kỳ",
  },
];

export default function NuocNongTrungTamPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm', href: '/san-pham' },
          { label: 'Hệ Thống Nước Nóng Trung Tâm' },
        ]}
      />
      <div className="relative h-[650px] overflow-hidden bg-gradient-to-r from-[#0f2d42] to-[#1a5276]">
        <div className="max-w-7xl mx-auto h-full px-4">
          <div className="grid lg:grid-cols-2 items-center h-full gap-10">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                HỆ THỐNG NƯỚC NÓNG TRUNG TÂM
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl text-slate-200 mb-8"
              >
                Giải pháp nước nóng toàn nhà – Tiết kiệm điện, an toàn và tiện nghi
              </motion.p>
            </motion.div>

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex justify-center"
            >
              <div
                className="
                p-3
                rounded-[32px]
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                shadow-2xl
              "
              >
                <Image
                  src="/images/banner/nuoc-nong-trung-tam-banner-1.jpg"
                  alt="Hệ thống nước nóng trung tâm"
                  width={650}
                  height={520}
                  priority
                  className="rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Giới thiệu ngắn */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Nước nóng trung tâm Heat Pump – Xu hướng biệt thự cao cấp
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Thay vì dùng nhiều máy nước nóng cục bộ, hệ thống nước nóng trung tâm sử dụng công nghệ Heat Pump
            để cung cấp nước nóng cho toàn bộ nhà (vòi sen, bồn tắm, bếp...) một cách đồng đều và tiết kiệm.
          </p>
        </motion.div>

        {/* Danh sách sản phẩm */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-10"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              className="
                bg-white
                border
                border-slate-100
                rounded-3xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                group
              "
            >
              <div className="h-80 bg-white-100 relative overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={product.imgWidth}
                  height={product.imgHeight}
                  className="
                    object-contain
                    w-full
                    h-full
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-slate-800
                      leading-tight
                      transition-colors
                      duration-300
                      group-hover:text-[#1a5276]
                    "
                  >
                    {product.name}
                  </h3>
                  <span
                    className="
                      shrink-0
                      text-xs
                      uppercase
                      tracking-wider
                      bg-gradient-to-r
                      from-emerald-500
                      to-emerald-600
                      text-white
                      px-4
                      py-2
                      rounded-full
                      font-semibold
                      shadow-md
                    "
                  >
                    {product.highlight}
                  </span>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm mb-8">
                  <div>
                    <span className="block text-gray-500">Bảo hành</span>
                    <span className="font-semibold text-[#1a5276]">{product.warranty}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Xuất xứ</span>
                    <span className="font-semibold">{product.origin}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href={`/san-pham/${product.id}`}
                    className="
                      flex-1
                      inline-flex
                      items-center
                      justify-center
                      px-6
                      py-3.5
                      rounded-xl
                      border-2
                      border-[#1a5276]
                      bg-white
                      text-[#1a5276]
                      font-semibold
                      transition-all
                      duration-300
                      hover:bg-[#1a5276]
                      hover:text-white
                      hover:shadow-lg
                      hover:-translate-y-0.5
                    "
                  >
                    Chi tiết sản phẩm
                  </Link>

                  <Link
                    href="/lien-he"
                    className="
                      flex-1
                      inline-flex
                      items-center
                      justify-center
                      px-6
                      py-3.5
                      rounded-xl
                      font-semibold
                      text-white
                      bg-gradient-to-r
                      from-[#1a5276]
                      to-[#2980b9]
                      transition-all
                      duration-300
                      hover:shadow-xl
                      hover:-translate-y-0.5
                    "
                  >
                    Tư vấn ngay
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ưu điểm nổi bật */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-12">Ưu điểm vượt trội của Heat Pump</h2>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Tiết kiệm điện",
                desc: "Tiết kiệm đến 70% so với máy nước nóng điện trở thông thường",
                icon: "⚡"
              },
              {
                title: "Nước nóng liên tục",
                desc: "Cung cấp nước nóng ổn định cho nhiều điểm cùng lúc",
                icon: "🌡️"
              },
              {
                title: "Hoạt động êm ái",
                desc: "Công nghệ inverter hiện đại, tiếng ồn rất thấp",
                icon: "🔇"
              },
              {
                title: "Thân thiện môi trường",
                desc: "Sử dụng khí lạnh R410A hoặc R32 không làm suy giảm tầng ozone",
                icon: "🌍"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-[#1a5276]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 bg-[#1a5276] text-white rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Muốn lắp đặt hệ thống nước nóng trung tâm?</h2>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            Liên hệ ngay để được khảo sát miễn phí và nhận báo giá tốt nhất
          </p>
          <a
            href="tel:0377778513"
            className="inline-block bg-white text-[#1a5276] font-bold px-12 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors"
          >
            Gọi ngay: 0377.778.513
          </a>
        </motion.div>
      </div>
    </main>
  );
}