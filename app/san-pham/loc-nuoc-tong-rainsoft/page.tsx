"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "	https://ldcompany.vn/wp-content/uploads/2024/06/1-1.jpg",
  "https://ldcompany.vn/wp-content/uploads/2024/06/2-1.png",
  "https://ldcompany.vn/wp-content/uploads/2024/06/3-1.png",
];

export default function Page() {
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">

        {/* LEFT */}
        <div>
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
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt="RainSoft"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* THUMB */}
          <div className="flex gap-3 mt-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`relative w-24 h-20 rounded-lg overflow-hidden border cursor-pointer
                  ${active === i ? "ring-2 ring-[#1a5276]" : "opacity-70"}
                `}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Lọc Nước Tổng RainSoft
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Hệ thống lọc nước tổng RainSoft đến từ Mỹ, cung cấp giải pháp xử lý nước toàn diện cho gia đình.
            Công nghệ tiên tiến giúp loại bỏ chlorine, kim loại nặng, mùi hôi và các tạp chất,
            mang lại nguồn nước sạch, an toàn cho sinh hoạt hàng ngày.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>• Công nghệ lọc đa tầng cao cấp</li>
            <li>• Loại bỏ chlorine, kim loại nặng, VOC</li>
            <li>• Tùy chỉnh theo nguồn nước từng gia đình</li>
            <li>• Bảo vệ đường ống & thiết bị</li>
            <li>• Nhập khẩu Mỹ</li>
            <li>• Bảo hành dài hạn</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-xl border">
            <h3 className="font-semibold mb-4">Đăng ký tư vấn</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border px-4 py-2 rounded-lg text-sm" placeholder="Email..." />
              <input className="border px-4 py-2 rounded-lg text-sm" placeholder="SĐT" />
            </div>

            <button className="bg-[#1a5276] text-white px-6 py-2 rounded-lg text-sm">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setZoomOpen(false)}
          >
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={images[active]}
                alt="zoom"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}