"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    slug: "du-an-tai-ha-dong-ha-noi",
    title: "Công Trình Tại Hà Đông, Hà Nội",
    location: "Hà Đông, Hà Nội",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/Anh-bia-ngoai-1-1400x788.jpg",
    category: "Lọc nước tổng & Nước nóng",
  },
  {
    id: 2,
    slug: "biet-thu-tai-thanh-pho-vinh-nghe-an",
    title: "Biệt Thự Tại Thành Phố Vinh, Nghệ An",
    location: "TP. Vinh, Nghệ An",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/Anh-bia-ngoai-1400x788.jpg",
    category: "Toàn bộ giải pháp",
  },
  {
    id: 3,
    slug: "biet-thu-tai-tp-vinh-nghe-an",
    title: "Công Trình Biệt Thự Tại TP. Vinh, Nghệ An",
    location: "TP. Vinh, Nghệ An",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-13-1400x788.jpg",
    category: "Nước nóng trung tâm",
  },
  {
    id: 4,
    slug: "biet-thu-tai-hai-duong",
    title: "Công Trình Biệt Thự Tại TP. Hải Dương",
    location: "TP. Hải Dương",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-12-1400x788.jpg",
    category: "Lọc nước & Khí tươi",
  },
  {
    id: 5,
    slug: "biet-thu-vinh-yen-vinh-phuc",
    title: "Công Trình Biệt Thự Tại Vĩnh Yên, Vĩnh Phúc",
    location: "Vĩnh Yên, Vĩnh Phúc",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-11-1400x788.jpg",
    category: "Sưởi ấm dưới sàn",
  },
  {
    id: 6,
    slug: "biet-thu-hai-tan-hai-duong",
    title: "Biệt Thự Tại Hải Tân, Hải Dương",
    location: "Hải Tân, Hải Dương",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-10-1400x788.jpg",
    category: "Toàn bộ giải pháp",
  },
  {
    id: 7,
    slug: "biet-thu-dai-lai-vinh-phuc",
    title: "Biệt Thự Tại Đại Lải, Vĩnh Phúc",
    location: "Đại Lải, Vĩnh Phúc",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-9-1400x788.jpg",
    category: "Nước nóng & Khí tươi",
  },
  {
    id: 8,
    slug: "biet-thu-quoc-oai-ha-noi",
    title: "Công Trình Biệt Thự Tại Đồng Bèn, Quốc Oai",
    location: "Quốc Oai, Hà Nội",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-8-1400x788.jpg",
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
      {/* Hero */}
      <div className="relative h-[420px] bg-[#1a5276] flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DỰ ÁN ĐÃ THI CÔNG
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Những công trình thực tế mà Linh Dương Company đã tư vấn, cung cấp và lắp đặt
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {filters.map((f) => (
            <motion.button
              key={f}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeFilter === f
                    ? "bg-[#1a5276] text-white"
                    : "border border-gray-300 hover:border-[#1a5276] hover:text-[#1a5276]"
                }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Grid animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
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
        <div className="text-center mt-16">
          <button className="btn-primary px-12 py-4 text-base">
            XEM THÊM DỰ ÁN
          </button>
        </div>
      </div>
    </main>
  );
}