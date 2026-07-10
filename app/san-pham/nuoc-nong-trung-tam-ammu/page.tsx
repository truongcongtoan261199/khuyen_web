"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

/* ====================== DATA ====================== */

const images = [
  "/images/san-pham/chi-tiet-san-pham/nuoc-nong-trung-tam-ammu-0.jpg",
  "/images/san-pham/chi-tiet-san-pham/nuoc-nong-trung-tam-ammu-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/nuoc-nong-trung-tam-ammu-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/nuoc-nong-trung-tam-ammu-3.jpg",
];

const installImages = [
  "/images/san-pham/chi-tiet-san-pham/lap-dat-heatpump-ammu-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-heatpump-ammu-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-3.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-4.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-heatpump-ammu-5.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-heatpump-ammu-6.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-heatpump-ammu-7.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-heatpump-ammu-8.jpg",
];

const highlights = [
  "Tiết kiệm điện đến 70%",
  "Nhiệt độ nước nóng lên đến 75°C",
  "Điều khiển từ xa qua điện thoại",
  "Máy 2 chiều (nóng & lạnh)",
  "Công nghệ Air to Water Heat Pump",
  "Phù hợp gia đình và công trình lớn",
];

/* ====================== LIGHTBOX (ĐÃ NÂNG CẤP) ====================== */

function Lightbox({
  images,
  activeIndex,
  setActiveIndex,
  open,
  onClose,
}: {
  images: string[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  open: boolean;
  onClose: () => void;
}) {
  const prev = () => setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  const next = () => setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, activeIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 md:left-12 text-white text-6xl hover:text-gray-300 transition z-50"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 md:right-12 text-white text-6xl hover:text-gray-300 transition z-50"
          >
            ›
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="relative w-[92vw] md:w-[85vw] h-[85vh]"
              initial={{ opacity: 0, x: 80, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.92 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }: PanInfo) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -8000) next();
                else if (swipe > 8000) prev();
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt=""
                fill
                className="object-contain select-none"
                quality={82}
                priority
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-50"
          >
            ✕
          </button>

          <div className="absolute bottom-8 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {activeIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ====================== MAIN PAGE ====================== */

export default function AmmuHeatPumpPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [installActive, setInstallActive] = useState(0);
  const [installZoomOpen, setInstallZoomOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: "Hệ Thống Nước Nóng Trung Tâm", href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam" },
          { label: "Máy Bơm Nhiệt Heat Pump AMMU" },
        ]}
      />

      {/* HERO SECTION - Khung ảnh cố định */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text bên trái */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a5276] mb-6">
              Máy Bơm Nhiệt Heat Pump AMMU
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Giải pháp nước nóng trung tâm tiết kiệm điện vượt trội từ Guangdong, Trung Quốc. Công nghệ Air to Water Heat Pump hiện đại – Tiết kiệm đến 70% điện năng.
            </p>

            <div className="space-y-4 text-lg">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              <a href="tel:0377778513" className="inline-block bg-[#1a5276] text-white font-semibold px-10 py-4 rounded-xl text-lg hover:bg-[#154360] transition">
                Gọi ngay: 0377.778.513
              </a>
            </motion.div>
          </motion.div>

          {/* Khung ảnh cố định */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onClick={() => setZoomOpen(true)}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={images[activeImage]}
                    alt="Máy bơm nhiệt AMMU"
                    fill
                    className="object-contain p-6"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-8 justify-center flex-wrap"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveImage(i)}
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === i ? 'border-[#1a5276] shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              <Image src={img} alt="" width={120} height={80} className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* NỘI DUNG CHÍNH - Giữ nguyên toàn bộ */}
      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-20">
        {/* Giới thiệu */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">Máy bơm nhiệt Heat Pump AMMU là gì?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AMMU là thương hiệu máy bơm nhiệt Heat Pump đến từ Guangdong, Trung Quốc, chuyên sản xuất các thiết bị năng lượng xanh chất lượng cao. Sản phẩm sử dụng công nghệ <strong>Air to Water Heat Pump</strong>, hấp thụ nhiệt từ không khí để làm nóng nước, giúp tiết kiệm điện lên đến 70% so với bình nóng lạnh truyền thống.
          </p>
        </motion.section>

        {/* Cách hoạt động */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">Cách hoạt động của máy bơm nhiệt AMMU</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "Hấp thụ nhiệt từ không khí",
              "Nén chất làm lạnh",
              "Truyền nhiệt vào nước",
              "Lưu trữ nước nóng",
              "Chu trình lặp lại"
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                <div className="text-4xl mb-3">0{i + 1}</div>
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Ưu điểm nổi bật */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Ưu điểm vượt trội của AMMU</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Tiết kiệm điện đến 70% nhờ công nghệ Heat Pump",
              "Nhiệt độ nước nóng lên đến 75°C – diệt khuẩn Legionella",
              "Điều khiển thông minh qua điện thoại",
              "Máy 2 chiều: làm nóng & làm lạnh nước",
              "Vận hành êm ái, phù hợp khí hậu Việt Nam",
              "Độ bền cao, bảo hành dài hạn",
              "Thân thiện môi trường",
              "Dễ dàng lắp đặt cho mọi quy mô công trình"
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Thông số kỹ thuật */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Thông số kỹ thuật</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            <div><strong>Thương hiệu:</strong> AMMU</div>
            <div><strong>Xuất xứ:</strong> Guangdong, Trung Quốc</div>
            <div><strong>Công nghệ:</strong> Air to Water Heat Pump</div>
            <div><strong>Công suất:</strong> 1.5HP – 150HP</div>
            <div><strong>Dung tích bình:</strong> 200L – 10.000L</div>
            <div><strong>Nhiệt độ nước nóng:</strong> Lên đến 75°C</div>
            <div><strong>Nhiệt độ nước lạnh:</strong> Xuống đến 10°C</div>
            <div><strong>Hệ số COP:</strong> 3.5 – 4.5</div>
            <div><strong>Điều khiển:</strong> WiFi / Ứng dụng di động</div>
            <div><strong>Bảo hành:</strong> 3 năm</div>
          </div>
        </motion.section>

        {/* Hình ảnh lắp đặt */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Hình ảnh lắp đặt thực tế</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {installImages.map((src, i) => (
              <div key={i} onClick={() => { setInstallActive(i); setInstallZoomOpen(true); }} className="cursor-zoom-in rounded-2xl overflow-hidden shadow hover:shadow-xl transition">
                <Image src={src} alt={`Lắp đặt ${i + 1}`} width={500} height={350} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA cuối trang */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a5276] text-white rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn giải pháp Heat Pump AMMU?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Đội ngũ kỹ thuật VIET HOME sẽ khảo sát miễn phí và đưa ra giải pháp tối ưu nhất cho nhu cầu sử dụng của bạn.</p>
          <a href="tel:0377778513" className="inline-block bg-white text-[#1a5276] font-bold px-12 py-5 rounded-2xl text-xl hover:bg-gray-100 transition">
            Gọi ngay: 0377.778.513
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox images={images} activeIndex={activeImage} setActiveIndex={setActiveImage} open={zoomOpen} onClose={() => setZoomOpen(false)} />
      <Lightbox images={installImages} activeIndex={installActive} setActiveIndex={setInstallActive} open={installZoomOpen} onClose={() => setInstallZoomOpen(false)} />
    </main>
  );
}