"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Droplets, Flame, Wind, Home, ArrowRight, Shield, Wrench, Star } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const categories = [
  {
    title: "Hệ Thống Lọc Nước Tổng",
    description: "Giải pháp lọc nước toàn nhà, loại bỏ tạp chất, kim loại nặng, vi khuẩn và clo dư thừa. Đảm bảo nguồn nước sạch cho cả gia đình.",
    img: "/images/san-pham/loc-tong-icon.png",
    href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
    icon: Droplets,
    count: "3 sản phẩm",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Hệ Thống Nước Nóng Trung Tâm",
    description: "Máy nước nóng Heat Pump Sanden (Nhật Bản) & Rheem (Úc) – tiết kiệm điện, an toàn và bền bỉ cho cả gia đình.",
    img: "/images/san-pham/nuoc-nong-trung-tam-icon.jpg",
    href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
    icon: Flame,
    count: "3 sản phẩm",
    color: "from-orange-500 to-red-500",
  },
];

const commitments = [
  {
    icon: Shield,
    title: "Nhập khẩu chính hãng",
    desc: "100% sản phẩm có chứng nhận NSF, WQA, TUV, ISO, FDA...",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wrench,
    title: "Lắp đặt chuyên nghiệp",
    desc: "Đội ngũ kỹ thuật viên được đào tạo bài bản, tận tâm.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Star,
    title: "Bảo hành dài hạn",
    desc: "Chế độ bảo hành, bảo trì rõ ràng, minh bạch.",
    color: "from-amber-500 to-amber-600",
  },
];

export default function SanPhamPage() {
  return (
    <main className="bg-white">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]} />

      {/* ─── Hero Banner ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[380px] md:h-[460px] bg-gradient-to-br from-[#1a5276] via-[#1a6e9e] to-[#2196f3] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-12 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-white w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-5 tracking-tighter leading-tight"
          >
            SẢN PHẨM & GIẢI PHÁP
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light"
          >
            Các giải pháp cao cấp cho không gian sống hiện đại và bền vững
          </motion.p>
        </div>
      </motion.div>

      {/* ─── Categories ─── */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
            >
              <Link
                href={category.href}
                className="group block bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a5276]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon badge */}
                  <div className={`absolute top-6 left-6 w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Arrow on hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-[#1a5276]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-[#1a5276] transition-colors duration-300">
                      {category.title}
                    </h2>
                    <span className="text-xs bg-[#1a5276]/10 text-[#1a5276] px-3 py-1.5 rounded-full font-semibold whitespace-nowrap">
                      {category.count}
                    </span>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#1a5276] font-semibold group-hover:gap-3 transition-all duration-300">
                    Khám phá giải pháp
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Cam kết chất lượng ─── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-24"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-4">
              TẠI SAO NÊN CHỌN GIẢI PHÁP CỦA VIET HOME?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Cam kết chất lượng từ sản phẩm đến dịch vụ
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1a5276] to-[#2196f3] mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group bg-white border border-gray-100 p-8 rounded-3xl text-center hover:shadow-2xl hover:border-[#1a5276]/20 transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-[#1a5276] mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 bg-gradient-to-br from-[#1a5276] via-[#1a6e9e] to-[#2196f3] text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BẠN CẦN TƯ VẤN GIẢI PHÁP PHÙ HỢP?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Liên hệ ngay để được đội ngũ chuyên gia VIET HOME tư vấn miễn phí
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a5276] px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Liên hệ ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0377778513"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                📞 Gọi ngay: 0377.778.513
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
