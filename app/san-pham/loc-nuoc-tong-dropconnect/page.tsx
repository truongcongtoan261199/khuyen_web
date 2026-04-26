"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://ldcompany.vn/wp-content/uploads/2024/06/1-2.png",
  "https://ldcompany.vn/wp-content/uploads/2024/06/3-2.png",
  "https://ldcompany.vn/wp-content/uploads/2024/06/4-2.png",
];

export default function Page() {
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">

        {/* LEFT */}
        <div>
          {/* MAIN IMAGE */}
          <div
            onClick={() => setZoomOpen(true)}
            className="relative h-[680px] rounded-xl overflow-hidden border cursor-zoom-in"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt="Dropconnect"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition duration-700"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* THUMBNAIL */}
          <div className="flex gap-3 mt-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(i)}
                className={`relative w-24 h-20 rounded-lg overflow-hidden border cursor-pointer transition
                  ${active === i ? "ring-2 ring-[#1a5276]" : "opacity-70 hover:opacity-100"}
                `}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            Lọc Nước Tổng DropConnect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 leading-relaxed"
          >
            Hệ thống lọc nước tổng đầu nguồn DropConnect không chỉ loại bỏ hoàn toàn magie và ion canxi,
            mà còn làm mềm nước hiệu quả. Sản phẩm loại bỏ các chất độc hại như chì, thủy ngân và tạp chất,
            đảm bảo nguồn nước sạch cho cả gia đình.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-3 text-gray-700"
          >
            {[
              "Công nghệ IoT – điều khiển từ xa",
              "Công nghệ Vortech – tăng hiệu suất lọc",
              "Cảm biến rò rỉ nước thông minh",
              "Đèn UV LED – diệt khuẩn",
              "Nhập khẩu 100% từ Mỹ",
              "Bảo hành lên đến 10 năm",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                • {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-6 rounded-xl border"
          >
            <h3 className="font-semibold mb-4">Đăng ký tư vấn</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Email..."
                className="border px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#1a5276]"
              />
              <input
                placeholder="Số điện thoại"
                className="border px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#1a5276]"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a5276] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#154360]"
            >
              ĐĂNG KÝ TƯ VẤN
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 🔥 LIGHTBOX ZOOM */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomOpen(false)}
          >
            <motion.div
              className="relative w-[90vw] h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active]}
                alt="zoom"
                fill
                className="object-contain"
              />
            </motion.div>

            <button
              onClick={() => setZoomOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}