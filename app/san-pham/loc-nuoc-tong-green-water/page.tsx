"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

/* ====================== DATA ====================== */

const heroImages = [
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-00.png",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-green-water-detail-3.jpg",
];

const highlights = [
  "Tích hợp công nghệ IoT – giám sát, điều khiển hệ thống lọc từ xa qua điện thoại",
  "Công nghệ lọc Vortech độc quyền – tối ưu hiệu suất lọc tổng",
  "Cảm biến rò rỉ thông minh – bảo vệ ngôi nhà khỏi nguy cơ ngập nước",
  "Đèn UV diệt khuẩn – loại bỏ vi khuẩn, virus trong nước",
  "Vật liệu lọc nhập khẩu cao cấp từ Mỹ, Đức, Nhật Bản",
  "Đạt chuẩn QCVN 01-1 cho nước sinh hoạt, bảo hành dài hạn",
];

const filterStages = [
  { title: "Cấp 1:", desc: "Xử lý cặn bẩn, bùn đất, kim loại nặng: Sắt, Mangan, Chì, Asen…" },
  { title: "Cấp 2:", desc: "Than hoạt tính cao cấp xử lý Clo dư, màu mùi, chất hóa học, thuốc trừ sâu." },
  { title: "Cấp 3:", desc: "Hạt làm mềm xử lý nước cứng, làm mềm nước, chống đóng cáu cặn canxi, đá vôi." },
  { title: "Cấp 4:", desc: "Phin lọc tinh với các lõi lọc có kích thước 5 micron, giúp loại bỏ các cặn bẩn nhỏ li ti." },
  { title: "Cấp 5:", desc: "Màng siêu lọc UF 0.01 micron (μm). Loại bỏ vi khuẩn, vi nhựa, dầu mỡ, chất keo, nhũ tương…" },
  { title: "Cấp 6:", desc: "Đèn UV diệt vi khuẩn, virus bằng tia cực tím." },
];

const features = [
  {
    title: "Công nghệ lọc đa cấp xử lý",
    desc: "Hệ thống lọc nước tổng Việt Nam với đa dạng các cấp lọc, đa dạng công suất lọc và vật liệu lọc phù hợp với nhiều nguồn nước khác nhau tại Việt Nam. ",
    bullets: [
      "Hệ thống được trang bị van sục rửa tự động, giúp tăng tuổi thọ của vật liệu lọc.",
      "Hệ thống thông minh tiết kiệm thời gian, chi phí vận hành cho người dùng.",
      "Cảm biến phát hiện rò rỉ, cảnh báo tức thì khi có sự cố.",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-cong-nghe-thong-minh.png",
    height: "h-[300px]",
    width: "w-full md:w-[630px]"
  },
  {
    title: "Công nghệ lọc Vortech tiên tiến",
    desc: "Thiết kế đĩa phân phối Vortech giúp tối ưu hóa dòng chảy, tăng hiệu suất lọc và kéo dài tuổi thọ vật liệu lọc.",
    bullets: [
      "Chịu lực vượt trội, ổn định trong quá trình sục rửa",
      "Hệ thống tự làm sạch, hạn chế tắc nghẽn",
      "Tiết kiệm đến 30% thời gian và chi phí vận hành",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-cong-nghe-vortech.png",
    height: "h-[700px]",
    width: "w-full md:w-[730px]"
  },
  {
    title: "Vật liệu lọc cao cấp nhập khẩu",
    desc: "Than hoạt tính Catalytic Carbon và hạt làm mềm cao cấp được nhập khẩu trực tiếp, đảm bảo hiệu quả lọc và an toàn cho sức khỏe.",
    bullets: [
      "Loại bỏ Clo dư, kim loại nặng, hóa chất và mùi lạ",
      "Làm mềm nước, ngăn cáu cặn canxi hiệu quả",
      "Đạt chuẩn quốc tế, không gây tác dụng phụ",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-vat-lieu-loc.png",
  },
  {
    title: "Cột lọc công nghệ cao",
    desc: "Vỏ cột lọc được gia cố nhiều lớp, chịu áp lực và va đập tốt, đảm bảo độ bền vượt thời gian trong mọi điều kiện vận hành.",
    bullets: [
      "Thân bình Composite hoặc Inox SUS 304 cao cấp",
      "Lớp lót trong an toàn cho nguồn nước sinh hoạt",
      "Vận hành ổn định, ít bảo trì",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-cot-loc-cao-cap.png",
  },
];

const benefits = [
  { title: "Nước sạch tinh khiết, bảo vệ sức khỏe gia đình", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-nuoc-sach.jpg" },
  { title: "Bảo vệ toàn diện thiết bị vệ sinh, gia dụng", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-thiet-bi.jpg" },
  { title: "Tiết kiệm chi phí vận hành, bảo trì lâu dài", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-tiet-kiem.jpg" },
  { title: "Da và tóc khỏe đẹp tự nhiên hơn mỗi ngày", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-da-toc.jpg" },
  { title: "Bữa ăn thơm ngon, trọn vị hơn", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-mon-an.jpg" },
  { title: "Quần áo mềm mại, giữ màu bền lâu", image: "/images/san-pham/chi-tiet-san-pham/loi-ich-quan-ao.jpg" },
];

const specs = [
  { label: "Công suất lọc", value: "1 – 10 m³/h" },
  { label: "Số cấp lọc", value: "2 – 6 cấp tùy chọn" },
  { label: "Áp suất làm việc", value: "1.5 – 4.5 kg/cm²" },
  { label: "Nhiệt độ nước đầu vào", value: "5°C – 45°C" },
  { label: "Vật liệu vỏ cột lọc", value: "Inox SUS 304 / Composite cao cấp" },
  { label: "Nguồn điện sử dụng", value: "220V – 50Hz" },
  { label: "Chế độ sục rửa", value: "Tự động theo thời gian / lưu lượng" },
  { label: "Bảo hành", value: "Lên đến 10 năm" },
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
  { id: "hinh-anh", label: "Hình ảnh lắp đặt" },
];

/* ====================== LIGHTBOX (dùng chung) ====================== */

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
  }, [open, activeIndex]);

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
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 md:left-6 text-white text-4xl bg-black/40 px-3 py-2 rounded-full hover:bg-black/60 z-50"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
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
                className="object-contain select-none"
                quality={100}
                priority
                draggable={false}
                sizes="90vw"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
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

/* ====================== PAGE ====================== */

export default function Page() {
  // hero gallery
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  // installation gallery
  const [installActive, setInstallActive] = useState(0);
  const [installZoomOpen, setInstallZoomOpen] = useState(false);

  // sticky tabs
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
      {/* ============ BREADCRUMB ============ */}
      <Breadcrumb
        items={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm', href: '/san-pham' },
          { label: 'Hệ Thống Lọc Nước Tổng', href: '/danh-muc-san-pham/he-thong-loc-nuoc-tong' },
          { label: 'Hệ Thống Lọc Nước Tổng Việt Nam' },
        ]}
      />

      {/* ============ HERO ============ */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
        {/* LEFT: GALLERY */}
        <div>
          <div
            onClick={() => setZoomOpen(true)}
            className="relative h-[500px] md:h-[640px] rounded-xl overflow-hidden border cursor-zoom-in"
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
                  src={heroImages[active]}
                  alt="GreenWater"
                  fill
                  priority
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mt-4">
            {heroImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(i)}
                className={`relative w-24 h-20 rounded-lg overflow-hidden border cursor-pointer transition
                  ${active === i ? "ring-2 ring-[#1a5276]" : "opacity-70 hover:opacity-100"}`}
              >
                <Image src={img} alt="" fill className="object-cover" quality={85} sizes="96px" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold"
          >
            Hệ Thống Lọc Nước Tổng Việt Nam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 leading-relaxed"
          >
            Hệ thống lọc nước tổng Green Water với đa dạng các cấp lọc, đa dạng công suất lọc và vật liệu lọc phù hợp với nhiều nguồn nước khác nhau tại Việt Nam.
          </motion.p>

          {/* HIGHLIGHT LIST */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="space-y-3"
          >
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1a5276] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
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

      {/* ============ STICKY TABS ============ */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToTab(tab.id)}
                className={`relative px-4 py-3 my-2 rounded-full text-sm md:text-[15px] font-medium whitespace-nowrap transition-all duration-200
                  ${activeTab === tab.id
                    ? "text-white bg-[#1a5276] shadow-md"
                    : "text-gray-600 hover:text-[#1a5276] hover:bg-gray-100"
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute left-2 right-2 -bottom-[6px] h-[3px] rounded-full bg-[#1a5276]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============ TAB CONTENT ============ */}
      <div className="max-w-7xl mx-auto px-4">
        {/* MÔ TẢ */}
        <Section id="mo-ta" title="Mô tả sản phẩm">
          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>
              Hệ thống có từ 2 – 3 – 4 – 5 – 6 cấp lọc. Công suất từ 1 m³/h – 10 m³/h. Vật liệu lọc đa dạng nhập khẩu cao cấp từ Mỹ, Đức, Nhật Bản,… Vỏ cột lọc là Inox SUS 304, Inox Posco Hàn Quốc hay vỏ Composite linh hoạt xử lý được nhiều nguồn nước:
            </p>
          </div>

          <ul className="space-y-3 text-gray-700 mb-8">
            {filterStages.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                • <span className="font-bold">{item.title}</span> {item.desc}
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
                  className={`relative rounded-xl overflow-hidden border bg-gray-100 ${f.height || 'h-80'} ${f.width || 'w-full'}`}
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

        {/* LỢI ÍCH VƯỢT TRỘI */}
        <Section id="loi-ich" title="Lợi ích vượt trội">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="relative h-56 rounded-xl overflow-hidden border group"
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

        {/* THÔNG SỐ KỸ THUẬT */}
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


        {/* HÌNH ẢNH LẮP ĐẶT */}
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
                className="relative h-44 rounded-xl overflow-hidden border cursor-zoom-in"
              >
                <Image src={src} alt={`Lắp đặt ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* ============ LIGHTBOXES ============ */}
      <Lightbox
        images={heroImages}
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