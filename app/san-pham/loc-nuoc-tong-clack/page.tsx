"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

/* ====================== DATA ====================== */

const images = [
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-clack-water-detail-0.png",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-clack-water-detail-100.png",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-clack-water-detail-200.png",
  "/images/san-pham/chi-tiet-san-pham/may-loc-nuoc-tong-clack-water-detail-300.png",
];

const highlights = [
  "Van điều khiển Clack – công nghệ Mỹ, vận hành trơn tru, độ bền vượt trội",
  "Cột lọc Composite / Inox SUS 304 cao cấp – chịu áp lực tốt, tuổi thọ cao",
  "Vật liệu lọc nhập khẩu từ Mỹ, Đức, Nhật Bản – hiệu quả xử lý tối ưu",
  "Tích hợp van sục rửa tự động – tiết kiệm thời gian, chi phí bảo trì",
  "Đèn UV diệt khuẩn – loại bỏ vi khuẩn, virus trong nước",
  "Đạt chuẩn QCVN 01-1 cho nước sinh hoạt, bảo hành chính hãng",
];

const filterStages = [
  { title: "Cấp 1:", desc: "Xử lý cặn bẩn, bùn đất, kim loại nặng: Sắt, Mangan, Chì, Asen…" },
  { title: "Cấp 2:", desc: "Than hoạt tính cao cấp xử lý Clo dư, màu mùi, chất hóa học, thuốc trừ sâu." },
  { title: "Cấp 3:", desc: "Hạt làm mềm xử lý nước cứng, làm mềm nước, chống đóng cáu cặn canxi." },
  { title: "Cấp 4:", desc: "Phin lọc tinh 5 micron, loại bỏ các cặn bẩn nhỏ li ti." },
  { title: "Cấp 5:", desc: "Màng siêu lọc UF 0.01 micron – loại bỏ vi khuẩn, vi nhựa, dầu mỡ." },
  { title: "Cấp 6:", desc: "Đèn UV diệt vi khuẩn, virus bằng tia cực tím." },
];

const features = [
  {
    title: "Van điều khiển Clack Autovalve – Tiêu chuẩn vàng từ Mỹ",
    desc: "Van Clack được sản xuất 100% tại Mỹ, nổi tiếng là dòng van điều khiển ổn định và bền bỉ nhất thế giới. Hoạt động hoàn toàn tự động với chu trình rửa ngược - rửa xuôi - hoàn nguyên thông minh.",
    bullets: [
      "Công nghệ Autovalve cao cấp, vận hành 24/7 không lỗi",
      "Tự động sục rửa theo lưu lượng hoặc thời gian",
      "Tuổi thọ cao, dễ bảo trì và thay thế linh kiện",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-van-clack.png",
    height: "h-[450px]",
    width: "w-full md:w-[620px]"   // ← Thêm width
  },
  {
    title: "Vật liệu lọc cao cấp đạt chứng nhận quốc tế",
    desc: "Sử dụng vật liệu lọc nhập khẩu cao cấp đạt nhiều chứng nhận nghiêm ngặt NSF/ANSI, UL, CE, WQA… Đảm bảo an toàn tuyệt đối cho nước sinh hoạt.",
    bullets: [
      "Khử sắt, mangan, amoni hiệu quả cao",
      "Giảm độ cứng, chống cáu cặn, loại bỏ clo và hóa chất",
      "Cải thiện mùi vị, màu sắc nước rõ rệt",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-vat-lieu-loc-clack.png",
    height: "h-[550px]",
    width: "w-full md:w-[700px]"   // ← Thêm width
  },
  {
    title: "Hiệu suất mạnh mẽ – Phù hợp mọi nguồn nước",
    desc: "Hệ thống hoạt động ổn định với lưu lượng lớn, xử lý tốt cả nước máy và nước giếng khoan bị ô nhiễm nặng.",
    bullets: [
      "Công suất linh hoạt từ 1 – 10 m³/h",
      "Phù hợp cho biệt thự, penthouse, khách sạn, nhà hàng",
      "Xử lý triệt để nhiều loại nguồn nước khó",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-hieu-suat-lon-2.png",
    height: "h-[370px]",
    width: "w-full md:w-[600px]"   // ← Thêm width
  },
  {
    title: "Độ bền vượt trội – Tiết kiệm chi phí dài hạn",
    desc: "Clack Corporation với hơn 80 năm kinh nghiệm sản xuất, mang đến giải pháp lọc nước có tuổi thọ cao nhất và chi phí vận hành thấp nhất trên thị trường.",
    bullets: [
      "Vật liệu và van có tuổi thọ cao gấp nhiều lần dòng thông thường",
      "Tiết kiệm nước và điện năng nhờ chu trình tự động",
      "Bảo hành dài hạn, ít phải bảo trì",
    ],
    image: "/images/san-pham/chi-tiet-san-pham/feature-do-ben-cao.png",
    height: "h-[600px]",
    width: "w-full md:w-[520px]"   // ← Thêm width
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
  { label: "Sản phẩm", value: "Clack WS1TC-05 USA" },
  { label: "Nhập khẩu", value: "Hoa Kỳ" },
  { label: "Kích thước hệ thống", value: "1200x680x1780mm" },
  { label: "Công suất lọc", value: "2500 - 3000 lit/h" },
  { label: "Áp lực nước cấp phù hợp", value: "1.4 - 8 bar" },
  { label: "Nhiệt độ nước cấp phù hợp", value: "4 - 49°C" },
  { label: "Điện áp đầu vào", value: "220VAC/50Hz" },
  { label: "Khả năng làm mềm tối đa", value: "900mg/lit" },
  { label: "Lọc bỏ sắt tối đa", value: "10ppm" },
  { label: "Phương pháp sục rửa", value: "Tự động 100%" },
  { label: "Hệ thống khung giá", value: "Inox SS304 sơn tĩnh điện" },
  { label: "Chế độ và dịch vụ", value: "Bảo hành 3 năm, bảo trì trọn đời" },
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
                className="object-contain select-none"
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
          { label: "Hệ Thống Lọc Nước Tổng Clack Mỹ" },
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
            className="relative aspect-[4/3] md:aspect-[1/1] max-h-[640px] rounded-xl overflow-hidden border cursor-zoom-in bg-gray-100"
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
                  alt="Clack"
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
                <Image src={img} alt="" fill className="object-cover" quality={85} sizes="96px" />
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
            Hệ Thống Lọc Nước Tổng Clack Mỹ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-gray-600 leading-relaxed"
          >
            Hệ thống lọc nước Clack – Thương hiệu số 1 của Mỹ cho giải pháp lọc nước tổng cao cấp
          </motion.p>

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
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p className="text-lg font-semibold">
              Hệ thống lọc nước Clack – Thương hiệu số 1 của Mỹ cho giải pháp lọc nước tổng cao cấp
            </p>

            <p>
              Clack là thương hiệu hàng đầu của Mỹ trong lĩnh vực giải pháp lọc nước tổng, nổi tiếng toàn cầu với độ bền vượt trội, khả năng xử lý nước mạnh mẽ và độ ổn định. Nhờ tích hợp van điều khiển Clack Autovalve – dòng van được xem là “tiêu chuẩn vàng” trong ngành xử lý nước – hệ thống Clack hoạt động hoàn toàn tự động, bền bỉ 24/7 và hầu như không gặp lỗi kỹ thuật.
            </p>

            <h3 className="text-xl font-bold text-[#1a5276] mt-10 mb-4">Điểm nổi bật của hệ thống lọc nước Clack (USA)</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">1. Van điều khiển tự động Clack – ổn định số 1 thế giới</h4>
                <p>Van Clack được sản xuất 100% tại Mỹ, sử dụng công nghệ điều khiển thông minh, tuổi thọ cao và khả năng vận hành trơn tru ngay cả trong môi trường nước khó xử lý. Van tự động rửa ngược – rửa xuôi – hoàn nguyên theo đúng chu trình, giúp hệ thống luôn duy trì hiệu suất tối đa.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">2. Vật liệu lọc đạt nhiều chứng nhận quốc tế NSF, UL, CE, WQA,… hiệu quả xử lý vượt trội</h4>
                <p>Clack sử dụng vật liệu lọc cao cấp, đạt chứng nhận an toàn nước uống theo tiêu chuẩn NSF/ANSI:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Khử sắt, mangan, amoni</li>
                  <li>Giảm độ cứng – chống bám cặn</li>
                  <li>Loại bỏ cặn bẩn, clo, mùi và hóa chất</li>
                  <li>Cải thiện toàn diện chất lượng nước sinh hoạt</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">3. Hiệu suất lớn – phù hợp mọi nguồn nước ô nhiễm: nước máy &amp; nước giếng khoan</h4>
                <p>Hệ thống hoạt động ổn định với lưu lượng lớn, đáp ứng nhu cầu cho penthouse, nhà phố, biệt thự, villa, khách sạn, và công trình thương mại.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">4. Độ bền cực cao – chi phí vận hành thấp</h4>
                <p>Tuổi thọ vật liệu và van Clack cao hơn nhiều so với các dòng phổ thông. Chu trình hoàn nguyên tự động giúp tiết kiệm thời gian, nước và công sức bảo trì.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">5. Thương hiệu Mỹ – tiêu chuẩn quốc tế</h4>
                <p>Clack Corporation là nhà sản xuất hơn 80 năm kinh nghiệm, được tin dùng tại 80+ quốc gia. Tất cả sản phẩm đều được kiểm định nghiêm ngặt theo tiêu chuẩn Hoa Kỳ.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#1a5276] mt-10 mb-4">Ứng dụng của hệ thống lọc nước Clack</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Lọc nước đầu nguồn cho gia đình – biệt thự</li>
              <li>Lọc nước sinh hoạt cho khách sạn – spa – nhà hàng</li>
              <li>Hệ thống xử lý nước công nghiệp</li>
            </ul>
          </div>
        </Section>

        <Section id="dac-trung" title="Đặc trưng nổi bật">
          <div className="space-y-16">
            {features.map((f, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-[1fr_1.15fr] gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative rounded-xl overflow-hidden border bg-gray-100 ${f.height || 'h-80'} ${f.width || 'w-full'}`}
                >
                  <Image src={f.image} alt={f.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold text-[#1a5276] mb-3">{i + 1}. {f.title}</h3>
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
                <Image src={src} alt={`Lắp đặt ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
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