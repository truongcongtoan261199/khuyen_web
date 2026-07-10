"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

/* ====================== DATA ====================== */

const images = [
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-0.jpg",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-3.jpg",
];

const filterStages = [
  {
    desc: "Với công nghệ từ trường làm chuyển đổi cấu trúc tinh thể Canxi Carbonat từ dạng calcite cứng sang aragonite mềm, giúp hạn chế bám cặn trên đường ống, bình nóng lạnh, sen vòi và thiết bị gia dụng.",
  },
  {
    desc: "Không làm thay đổi thành phần khoáng tự nhiên của nước như hệ làm mềm bằng muối.",
  },
  {
    desc: "Hiệu quả xử lý làm mềm nước, chống bám cáu cặn canxi lên tới 80%.",
  },
  {
    desc: "Hoàn toàn không mất chi phí vận hành đổ muối định kì như các hệ lọc hoàn nguyên muối.",
  },
  {
    desc: "Ngoài ra hệ thống còn được trang bị các cấp lọc khác để xử lý Kim loại nặng: Sắt, Mangan, Asen… , Loại bỏ Clo dư, khử màu khử mùi, loại bỏ các chất hóa học, thuốc trừ sâu trong nước …",
  },
  {
    desc: "Hệ thống được chia ra làm 2 chu trình lọc với cột lọc thô được đặt trước téc để xử lý về cặn bẩn, kim loại nặng, Clo dư, màu mùi. Sau đó là tủ lọc tinh được đặt sau téc để xử lý nước cứng, làm mềm nước chống bám cáu cặn, loại bỏ vi khuẩn… giúp nước sinh hoạt là nước tươi mới, không bị lưu cữu.",
  },
];

const features = [
  {
    title: "Công nghệ phân cực điện hóa TGP®",
    desc: "Lõi từ trường IPS KalyxX tạo ra trường phân cực mạnh, tác động trực tiếp lên các ion canxi và magie trong dòng nước khi chảy qua, làm thay đổi cấu trúc tinh thể của chúng ngay từ đầu nguồn.",
    bullets: [
      "Không sử dụng điện, không hóa chất, không cần bảo trì định kỳ",
      "Hoạt động liên tục 24/7 ngay khi nước chảy qua thiết bị",
      "Giữ nguyên các khoáng chất có lợi tự nhiên trong nước",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-cong-nghe-tu-truong.png",
    height: "h-[600px]"
  },
  {
    title: "Vật liệu lõi từ cao cấp",
    desc: "Hệ thống nam châm đất hiếm công suất cao được sắp xếp theo cấu trúc nhiều lớp, đảm bảo từ trường đủ mạnh để chuyển hóa toàn bộ lưu lượng nước đi qua, kể cả ở công suất sinh hoạt lớn.",
    bullets: [
      "Hiệu quả chống cáu cặn duy trì ổn định lâu dài, không suy giảm theo thời gian",
      "Phù hợp với nhiều mức lưu lượng, từ hộ gia đình đến công trình lớn",
      "Tương thích với hệ thống đường ống kim loại và nhựa hiện có",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-loi-tu-truong.jpg",
    height: "h-206"     // Ví dụ: cao hơn
  },
  {
    title: "Thân vỏ bền bỉ, lắp đặt linh hoạt",
    desc: "Vỏ thiết bị được chế tạo từ vật liệu chịu áp lực cao, chống ăn mòn, có thể lắp trực tiếp trên đường ống chính mà không cần thay đổi kết cấu hệ thống nước hiện có.",
    bullets: [
      "Lắp đặt nhanh chóng, không gián đoạn nguồn nước sinh hoạt",
      "Không phát sinh nước thải trong quá trình vận hành",
      "Tuổi thọ thiết bị cao, gần như không cần thay thế linh kiện",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-than-vo-ben-bi.jpg",
    height: "h-150"
  },
];

const benefits = [
  { title: "Quần áo luôn mềm mại, giữ màu bền lâu", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-quan-ao.jpg" },
  { title: "Da và tóc khỏe đẹp tự nhiên từ bên trong", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-da-toc.jpg" },
  { title: "Bữa cơm gia đình thêm thơm ngon, tròn vị", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-mon-an.jpg" },
  { title: "Nước sạch thuần khiết bảo vệ sức khỏe gia đình", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-nuoc-sach.jpg" },
  { title: "Tiết kiệm chi phí sử dụng thiết bị gia dụng", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-tiet-kiem.jpg" },
  { title: "Bảo vệ toàn diện thiết bị vệ sinh cao cấp", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-thiet-bi.jpg" },
];

const specs = [
  { label: "Công nghệ", value: "Phân cực điện hóa TGP® (IPS KalyxX)" },
  { label: "Nguồn vận hành", value: "Không cần điện, không hóa chất" },
  { label: "Hiệu quả chống cáu cặn", value: "Lên đến 80%" },
  { label: "Lưu lượng xử lý", value: "Tùy chọn theo công suất sử dụng" },
  { label: "Vật liệu vỏ thiết bị", value: "Chịu áp lực cao, chống ăn mòn" },
  { label: "Chi phí vận hành định kỳ", value: "Không phát sinh (không cần đổ muối)" },
  { label: "Bảo trì", value: "Gần như không cần bảo trì" },
  { label: "Bảo hành", value: "Theo chính sách nhà sản xuất" },
];

const certificates = [
  "/images/san-pham/chi-tiet-san-pham/chung-nhan-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/chung-nhan-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/chung-nhan-3.jpg",
  "/images/san-pham/chi-tiet-san-pham/chung-nhan-4.jpg",
];

const installImages = [
  "/images/san-pham/chi-tiet-san-pham/lap-dat-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-3.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-4.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-5.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-6.jpg",
];

const tabs = [
  { id: "mo-ta", label: "Mô tả" },
  { id: "dac-trung", label: "Đặc trưng nổi bật" },
  { id: "loi-ich", label: "Lợi ích vượt trội" },
  { id: "thong-so", label: "Thông số kỹ thuật" },
  // { id: "chung-nhan", label: "Chứng nhận sản phẩm" },
  { id: "hinh-anh", label: "Hình ảnh lắp đặt" },
];

/* ====================== LIGHTBOX ====================== */

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
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, activeIndex, prev, next, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-6 text-white text-4xl bg-black/40 px-3 py-2 rounded-full hover:bg-black/60 z-50"
          >
            ‹
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-6 text-white text-4xl bg-black/40 px-3 py-2 rounded-full hover:bg-black/60 z-50"
          >
            ›
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="relative w-[90vw] h-[90vh]"
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }: PanInfo) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) next();
                else if (swipe > swipeConfidenceThreshold) prev();
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt=""
                fill
                className="object-contain select-none p-4"
                quality={82}
                priority
                draggable={false}
                sizes="90vw"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ====================== SECTION WRAPPER ====================== */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-tab={id} className="py-14 border-b last:border-0 scroll-mt-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="text-xl md:text-2xl font-bold text-[#1a5276] mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

/* ====================== MAIN PAGE ====================== */

export default function Page() {
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const [installActive, setInstallActive] = useState(0);
  const [installZoomOpen, setInstallZoomOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-tab]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tab = entry.target.getAttribute("data-tab");
            if (tab) setActiveTab(tab);
          }
        });
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToTab = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: "Hệ Thống Lọc Nước Tổng", href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong" },
          { label: "Hệ Thống Lọc Nước Tổng Công Nghệ Từ Trường" },
        ]}
      />

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            onClick={() => setZoomOpen(true)}
            className="relative h-[500px] md:h-[640px] rounded-xl overflow-hidden border cursor-zoom-in bg-gray-100"
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
                  alt="GreenWater"
                  fill
                  priority
                  className="object-cover"
                  quality={92}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(i)}
                className={`relative w-24 h-20 rounded-lg overflow-hidden border cursor-pointer transition
                  ${active === i ? "ring-2 ring-[#1a5276]" : "opacity-70 hover:opacity-100"}`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="96px"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            Hệ Thống Lọc Nước Tổng Công Nghệ Từ Trường
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 leading-relaxed"
          >
            Công nghệ xử lý nước IPS KalyxX phát triển tại Châu Âu, ứng dụng nguyên lý phân cực điện hóa TGP® tiên tiến trong chống đóng cặn cho hệ thống nước.
          </motion.p>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-3 text-gray-700"
          >
            {filterStages.map((item, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
              >
                • {item.desc}
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
              className="bg-[#1a5276] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#154360] w-full"
            >
              ĐĂNG KÝ TƯ VẤN
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* STICKY TABS */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-y">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToTab(tab.id)}
                className={`relative px-2 py-4 text-sm md:text-[15px] font-medium whitespace-nowrap transition-colors
                  ${activeTab === tab.id ? "text-[#1a5276]" : "text-gray-500 hover:text-gray-800"}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#1a5276]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        <Section id="mo-ta" title="Mô tả sản phẩm">
          <p className="text-gray-600 leading-relaxed mb-8">
            Công nghệ từ trường IPS KalyxX được nghiên cứu và phát triển tại Châu Âu, ứng dụng nguyên lý phân cực điện hóa TGP® để xử lý nước cứng mà không cần dùng muối hay hóa chất. Thiết bị lắp trực tiếp trên đường ống chính, hoạt động liên tục mà không cần nguồn điện, phù hợp với cả hộ gia đình và công trình có quy mô lớn.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            {filterStages.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                • {item.desc}
              </motion.li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed">
            Hệ thống được trang bị van sục rửa tự động, giúp tăng tuổi thọ của vật liệu lọc, tiết kiệm thời gian, chi phí vận hành cho người dùng, mang lại nguồn nước sạch chuẩn theo quy định của Bộ Y Tế về nước sinh hoạt.
          </p>
        </Section>

        <Section id="dac-trung" title="Đặc trưng nổi bật">
          <div className="space-y-16">
            {features.map((f, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative rounded-xl overflow-hidden border bg-gray-100 ${f.height || 'h-80'}`}   // ← sửa dòng này
                >
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold text-[#1a5276] mb-3">
                    {i + 1}. {f.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#1a5276] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="loi-ich" title="Lợi ích vượt trội">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="relative h-56 rounded-xl overflow-hidden border bg-gray-100 group"
              >
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm leading-snug">
                  {b.title}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="thong-so" title="Thông số kỹ thuật">
          <div className="overflow-hidden rounded-xl border">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`grid grid-cols-2 px-6 py-3 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <span className="text-gray-500">{s.label}</span>
                <span className="font-medium text-gray-800">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* <Section id="chung-nhan" title="Chứng nhận sản phẩm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative h-44 rounded-xl overflow-hidden border bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`Chứng nhận ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </Section> */}

        <Section id="hinh-anh" title="Hình ảnh lắp đặt">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {installImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  setInstallActive(i);
                  setInstallZoomOpen(true);
                }}
                className="relative h-44 rounded-xl overflow-hidden border cursor-zoom-in bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`Lắp đặt ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* LIGHTBOXES */}
      <Lightbox
        images={images}
        activeIndex={active}
        setActiveIndex={setActive}
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
      />
      <Lightbox
        images={installImages}
        activeIndex={installActive}
        setActiveIndex={setInstallActive}
        open={installZoomOpen}
        onClose={() => setInstallZoomOpen(false)}
      />
    </main>
  );
}