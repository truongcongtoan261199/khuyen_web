"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

const products = [
  {
    id: "loc-nuoc-tong-green-water",
    name: "Hệ Thống Lọc Nước Tổng Việt Nam",
    description: "Hệ thống lọc nước tổng Green Water với đa dạng các cấp lọc, đa dạng công suất lọc và vật liệu lọc phù hợp với nhiều nguồn nước khác nhau tại Việt Nam...",
    img: "/images/san-pham/may-loc-nuoc-tong-green-water.webp",
    imgWidth: 585,
    imgHeight: 585,
    priceRange: "Chi tiết sản phẩm",
    highlight: "Bảo hành 5 năm",
  },
  {
    id: "loc-nuoc-tong-kalyxx",
    name: "Hệ Thống Lọc Nước Tổng Công Nghệ Từ Trường",
    description: "Công nghệ xử lý nước IPS KalyxX phát triển tại Châu Âu, ứng dụng nguyên lý phân cực điện hóa TGP® tiên tiến trong chống đóng cặn cho hệ thống nước...",
    img: "/images/san-pham/loc-nuoc-tong-kalyxx.png",
    imgWidth: 800,
    imgHeight: 800,
    priceRange: "Chi tiết sản phẩm",
    highlight: "Tiết kiệm không gian",
  },
  {
    id: "loc-nuoc-tong-clack",
    name: "Hệ Thống Lọc Nước Tổng Clack Mỹ",
    description: "Clack là thương hiệu hàng đầu của Mỹ trong lĩnh vực giải pháp lọc nước tổng, nổi tiếng toàn cầu với độ bền vượt trội, khả năng xử lý nước mạnh mẽ và độ ổn định...",
    img: "/images/san-pham/loc-nuoc-tong-clack.jpg",
    imgWidth: 600,
    imgHeight: 600,
    priceRange: "Chi tiết sản phẩm",
    highlight: "Bảo hành 5 năm",
  },
];

export default function HeThongLocNuocTongPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm', href: '/san-pham' },
          { label: 'Hệ Thống Lọc Nước Tổng' },
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
                HỆ THỐNG LỌC NƯỚC TỔNG
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl text-slate-200 mb-8"
              >
                Giải pháp lọc nước toàn nhà – Nước sạch an toàn cho mọi sinh hoạt gia đình
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
                  src="/images/banner/loc-nuoc-tong-banner.jpg"
                  alt="Hệ thống lọc nước tổng"
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
            Tại sao cần hệ thống lọc nước tổng?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Nước máy thành phố hiện nay thường chứa nhiều tạp chất, clo, kim loại nặng và vi sinh vật.
            Hệ thống lọc nước tổng giúp xử lý toàn bộ nguồn nước vào nhà, mang lại nước sạch an toàn cho sinh hoạt và nấu ăn.
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

                  {/* Nút Tư vấn ngay đã được sửa */}
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
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-12">Ưu điểm nổi bật</h2>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid md:grid-cols-3 gap-8"
          >
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
          <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn giải pháp lọc nước phù hợp?</h2>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            Đội ngũ kỹ thuật của VIET HOME sẽ khảo sát miễn phí và đưa ra giải pháp tối ưu nhất cho ngôi nhà của bạn.
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