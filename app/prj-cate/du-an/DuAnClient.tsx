"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "../../components/Breadcrumb";

const projects = [
  {
    id: 1,
    slug: "du-an-anh-hung-chi-thom-tai-phuc-tho-ha-noi",
    title: "Dự án nhà anh Hưng – chị Thơm tại Phúc Thọ - Hà Nội",
    location: "Phúc Thọ, Hà Nội",
    img: "/images/duandathuchien/phuc-tho-ha-noi-3.jpg",
    category: "Lọc nước tổng & Nước nóng",
  },
  {
    id: 2,
    slug: "biet-thu-anh-tinh-tai-kdt-phap-van",
    title: "Dự án nhà anh Tỉnh tại KĐT Pháp Vân – Hà Nội",
    location: "KĐT Pháp Vân, Hà Nội",
    img: "/images/duandathuchien/phap-van-ha-noi-1.png",
    category: "Lọc nước tổng & Nước nóng",
  },
  {
    id: 3,
    slug: "biet-thu-anh-nguyen-tai-phu-ly-ha-nam",
    title: "Dự án nhà anh Nguyên KĐT Lam Hạ - Phủ Lý – Hà Nam",
    location: "Phủ Lý, Hà Nam",
    img: "/images/duandathuchien/phu-ly-ha-nam-1.jpg",
    category: "Lọc nước tổng & Nước nóng",
  },
  {
    id: 4,
    slug: "biet-thu-bac-a-tai-kdt-nam-an-khanh-hoai-duc-ha-noi",
    title: "Dự án nhà bác Á – KĐT Nam An Khánh – Hoài Đức – Hà Nội",
    location: "Hoài Đức, Hà Nội",
    img: "/images/duandathuchien/an-khanh-hoai-duc-hanoi-1.jpg",
    category: "Nước nóng trung tâm",
  },
  {
    id: 5,
    slug: "biet-thu-anh-long-tai-kdt-dong-ve-thanh-hoa",
    title: "Dự án công trình nhà anh Long KĐT Đông Vệ - Thanh Hóa ",
    location: "Đông Vệ, Thanh Hóa",
    img: "/images/duandathuchien/dong-ve-thanh-hoa-1.jpg",
    category: "Nước nóng trung tâm",
  },
  {
    id: 6,
    slug: "biet-thu-anh-dung-hong-tien-long-bien-ha-noi",
    title: "Dự án nhà a Dũng – Hồng Tiến – Long Biên – Hà Nội ",
    location: "Hồng Tiến, Long Biên, Hà Nội",
    img: "/images/duandathuchien/hong-tien-long-bien-1.png",
    category: "Toàn bộ giải pháp",
  },
  {
    id: 7,
    slug: "biet-thu-anh-tuan-starlake-tay-ho-ha-noi",
    title: "Dự án nhà chú Tuấn – Starlake – Tây Hồ",
    location: "Star Lake, Tây Hồ, Hà Nội",
    img: "/images/duandathuchien/starlake-tay-ho-1.png",
    category: "Lọc nước tổng & Nước nóng",
  },
  {
    id: 8,
    slug: "biet-thu-anh-cuong-the-manor-nguyen-xien-ha-noi",
    title: "Dự án nhà anh Cường – KĐT The Manor – Nguyễn Xiển ",
    location: "Nguyễn Xiển, Hà Nội",
    img: "/images/duandathuchien/the-manor-nguyen-xien-1.jpg",
    category: "Lọc nước tổng",
  },
];

const filters = [
  "Tất cả dự án",
  "Lọc nước tổng",
  "Nước nóng trung tâm",
  "Khí tươi",
  "Sưởi ấm dưới sàn",
];

export default function DuAnClient() {
  const [activeFilter, setActiveFilter] = useState("Tất cả dự án");

  const matchCategory = (projectCategory: string, filter: string) => {
    if (filter === "Tất cả dự án") return true;
    return projectCategory.toLowerCase().includes(filter.toLowerCase());
  };

  const filteredProjects = projects.filter((project) =>
    matchCategory(project.category, activeFilter)
  );

  return (
    <main>
      <Breadcrumb items={[{ label: 'Trang chủ', href: '/' }, { label: 'Dự án đã thi công' }]} />
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[420px] bg-[#1a5276] flex items-center justify-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DỰ ÁN ĐÃ THI CÔNG
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Những công trình thực tế mà VIET HOME đã tư vấn, cung cấp và lắp đặt
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filter */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="flex flex-wrap gap-3 mb-10 justify-center"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === f
                  ? "bg-[#1a5276] text-white"
                  : "border border-gray-300 hover:border-[#1a5276] hover:text-[#1a5276]"
                }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid animation */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-[#1a5276] text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-[#1a5276] transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {project.location}
                  </p>

                  <Link
                    href={`/prj-cate/${project.slug}`}
                    className="inline-flex items-center text-[#1a5276] hover:text-[#154360] font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Xem chi tiết
                    <span className="text-lg group-hover:translate-x-1 transition">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button className="btn-primary px-12 py-4 text-base">
            XEM THÊM DỰ ÁN
          </button>
        </motion.div>
      </div>
    </main>
  );
}