"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

/* ====================== DATA ====================== */

const images = [
  "/images/san-pham/eminent-heat-pump-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/eminent-heat-pump-3.jpg",
  "/images/san-pham/eminent-heat-pump-2.jpg",
];

const installImages = [
  "/images/san-pham/chi-tiet-san-pham/lap-dat-eminent-1.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-eminent-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-eminent-3.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-eminent-4.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-eminent-5.jpg",
  "/images/san-pham/chi-tiet-san-pham/lap-dat-eminent-6.jpg",
];

const highlights = [
  "Tiết kiệm điện đến 80%",
  "Hệ số COP lên đến 4.4",
  "Nhiệt độ nước nóng lên đến 75°C",
  "Linh kiện cao cấp Mitsubishi / Toshiba / Emerson",
  "Vận hành ổn định mọi điều kiện thời tiết",
  "Bảo hành dài hạn từ nhà sản xuất",
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
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 md:left-12 text-white text-6xl hover:text-gray-300 z-50">‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 md:right-12 text-white text-6xl hover:text-gray-300 z-50">›</button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="relative w-[92vw] md:w-[85vw] h-[85vh]"
              initial={{ opacity: 0, x: 80, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.92 }}
              transition={{ duration: 0.4 }}
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
              <Image src={images[activeIndex]} alt="" fill className="object-contain select-none" quality={100} priority draggable={false} />
            </motion.div>
          </AnimatePresence>

          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-50">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function EminentHeatPumpPage() {
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
          { label: "Nước Nóng Trung Tâm Heat Pump Eminent Thái Lan" },
        ]}
      />

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a5276] mb-6">
              Nước Nóng Trung Tâm Heat Pump Eminent Thái Lan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Giải pháp nước nóng trung tâm tiết kiệm điện vượt trội từ Thái Lan. Công nghệ Heat Pump hiện đại – Tiết kiệm đến 80% điện năng, vận hành ổn định, an toàn tuyệt đối.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onClick={() => setZoomOpen(true)}
          >
            <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl cursor-zoom-in border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={images[activeImage]} alt="Eminent Heat Pump" fill className="object-contain p-4" priority />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

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
              className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-[#1a5276] shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              <Image src={img} alt="" width={120} height={80} className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* NỘI DUNG CHI TIẾT - GIỮ TOÀN BỘ THÔNG TIN */}
      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-20 text-gray-700">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Eminent – Chuyên gia máy nước nóng tổng Heat Pump số 1 Thái Lan
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Thành lập từ năm <strong>1978</strong>, Eminent là một trong những thương
              hiệu máy nước nóng và Heat Pump hàng đầu tại Thái Lan với gần
              <strong> 50 năm kinh nghiệm</strong> trong lĩnh vực cung cấp giải pháp nước
              nóng trung tâm. Các sản phẩm của Eminent hiện được sử dụng rộng rãi tại
              Thái Lan, Việt Nam và nhiều quốc gia Châu Á nhờ chất lượng ổn định,
              độ bền cao và khả năng tiết kiệm điện vượt trội.
            </p>

            <p>
              Toàn bộ sản phẩm được sản xuất theo
              <strong> tiêu chuẩn quản lý chất lượng ISO</strong>, ứng dụng công nghệ
              <strong> Air to Water Heat Pump</strong> hiện đại, thu nhiệt từ không khí để
              làm nóng nước thay vì sử dụng điện trở đốt nóng truyền thống. Công nghệ
              này giúp giảm đáng kể chi phí điện năng đồng thời đảm bảo nguồn nước nóng
              ổn định cho cả gia đình, biệt thự, khách sạn và spa.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">
            Công nghệ Air to Water Heat Pump hoạt động như thế nào?
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Heat Pump Eminent không tạo nhiệt trực tiếp bằng điện trở như bình nóng
              lạnh thông thường. Thay vào đó, hệ thống hấp thụ năng lượng nhiệt có sẵn
              trong không khí thông qua môi chất lạnh, sau đó sử dụng máy nén để nâng
              nhiệt độ và truyền vào bình chứa nước.
            </p>

            <p>
              Nhờ chỉ sử dụng điện để vận hành máy nén thay vì đun nóng trực tiếp,
              Heat Pump Eminent có thể tiết kiệm tới
              <strong> 60–80% điện năng</strong>, đồng thời vẫn cung cấp lượng nước nóng
              lớn liên tục 24/7.
            </p>

            <p>
              Đây là công nghệ đang được ứng dụng rộng rãi trong các biệt thự,
              khách sạn, resort và spa cao cấp nhờ khả năng tiết kiệm năng lượng,
              vận hành bền bỉ và thân thiện với môi trường.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">
            Được phát triển riêng cho khí hậu Đông Nam Á
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Hoạt động ổn định trong điều kiện nhiệt độ và độ ẩm cao.",
              "Khả năng chống ăn mòn tốt, phù hợp môi trường ven biển và khí hậu nhiệt đới.",
              "Hiệu suất làm nóng luôn ổn định quanh năm tại Việt Nam.",
              "Ít lỗi vặt, chi phí bảo trì thấp trong quá trình sử dụng.",
              "Được tối ưu riêng cho điều kiện thời tiết Đông Nam Á thay vì khí hậu ôn đới."
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Ưu điểm nổi bật</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              [
                "Tiết kiệm 60–80% điện năng nhờ công nghệ Air to Water Heat Pump.",
                "Hệ số COP cao lên đến 4.4, tạo ra nhiều nhiệt hơn lượng điện tiêu thụ.",
                "Làm nóng nước bằng nhiệt từ không khí, thân thiện với môi trường.",
                "Máy nén Mitsubishi chất lượng cao cho tuổi thọ và hiệu suất vượt trội.",
                "Van Danfoss và các linh kiện quốc tế giúp hệ thống hoạt động bền bỉ.",
                "Bộ điều khiển thông minh giúp tối ưu hiệu suất và dễ dàng vận hành.",
                "Hoạt động ổn định trong điều kiện thời tiết nóng ẩm của Việt Nam.",
                "Nhiệt độ nước nóng lên đến 75°C, đáp ứng nhu cầu sử dụng liên tục.",
                "An toàn tuyệt đối, không sử dụng điện trở đun nước trực tiếp.",
                "Phù hợp biệt thự, villa, khách sạn, resort, spa và công trình cao cấp."
              ]
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">
            Linh kiện quốc tế – Độ bền vượt thời gian
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Một trong những điểm tạo nên danh tiếng của Heat Pump Eminent là việc sử
              dụng các linh kiện đến từ những thương hiệu hàng đầu thế giới nhằm đảm
              bảo hiệu suất và độ bền lâu dài.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Máy nén Mitsubishi</strong>
                  <p>Hiệu suất cao, vận hành êm ái và tuổi thọ dài.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Van Danfoss</strong>
                  <p>Đảm bảo chu trình làm lạnh ổn định và bền bỉ.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Bộ điều khiển thông minh</strong>
                  <p>Tự động tối ưu vận hành và giảm tiêu hao điện năng.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Độ bền cao</strong>
                  <p>Được thiết kế để vận hành liên tục cho biệt thự, khách sạn, spa và resort.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Thông số kỹ thuật</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-lg">
            <div><strong>Công suất điện đầu vào:</strong> 0.9 kW</div>
            <div><strong>Công suất làm nóng:</strong> 4 kW</div>
            <div><strong>Hệ số hiệu suất (COP):</strong> 4.4</div>
            <div><strong>Nhiệt độ nước đầu ra cao nhất:</strong> 75°C</div>
            <div><strong>Công suất sản xuất nước nóng:</strong> 80 Lít/giờ</div>
            <div><strong>Điện áp:</strong> 220V / 50Hz</div>
            <div><strong>Linh kiện chính:</strong> Mitsubishi, Toshiba, Emerson, Danfoss</div>
            <div><strong>Ứng dụng:</strong> Biệt thự, nhà phố, khách sạn, spa</div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Hình ảnh lắp đặt thực tế</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {installImages.map((src, i) => (
              <div
                key={i}
                onClick={() => { setInstallActive(i); setInstallZoomOpen(true); }}
                className="cursor-zoom-in rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <Image src={src} alt={`Lắp đặt ${i + 1}`} width={500} height={350} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a5276] text-white rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn giải pháp Heat Pump Eminent?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Đội ngũ VIET HOME sẽ khảo sát miễn phí, tư vấn và báo giá tốt nhất cho hệ thống nước nóng trung tâm Eminent Thái Lan.</p>
          <a href="tel:0377778513" className="inline-block bg-white text-[#1a5276] font-bold px-12 py-5 rounded-2xl text-xl hover:bg-gray-100 transition">
            Gọi ngay: 0377.778.513
          </a>
        </motion.div>
      </div>

      <Lightbox images={images} activeIndex={activeImage} setActiveIndex={setActiveImage} open={zoomOpen} onClose={() => setZoomOpen(false)} />
      <Lightbox images={installImages} activeIndex={installActive} setActiveIndex={setInstallActive} open={installZoomOpen} onClose={() => setInstallZoomOpen(false)} />
    </main>
  );
}