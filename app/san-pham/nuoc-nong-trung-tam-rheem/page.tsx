"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";

/* ====================== DATA ====================== */

const images = [
  "/images/san-pham/nuoc-nong-rheem.jpg",
  "/images/san-pham/nuoc-nong-rheem-1.jpg",
  "/images/san-pham/nuoc-nong-rheem-2.jpg",
];

const installImages = [
  "/images/san-pham/nuoc-nong-rheem-3.jpg",
  "/images/san-pham/chi-tiet-san-pham/rheem-lap-dat-2.jpg",
  "/images/san-pham/chi-tiet-san-pham/rheem-lap-dat-3.jpg",
  "/images/san-pham/chi-tiet-san-pham/rheem-lap-dat-4.jpg",
  "/images/san-pham/chi-tiet-san-pham/rheem-lap-dat-5.jpg",
];

const highlights = [
  "COP 5.1 – Tiết kiệm lên đến 80% điện năng",
  "Bình thép không gỉ 316L cao cấp – Không cần thanh Anode",
  "Dải nhiệt vận hành −7°C đến 43°C",
  "Môi chất lạnh R290 (GWP = 0.02) thân thiện môi trường",
  "Độ ồn siêu êm chỉ 47 dB",
  "Bảo hành bình chứa 10 năm – Sản xuất tại Việt Nam",
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
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 md:left-12 text-white text-6xl hover:text-gray-300 z-50">&#8249;</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 md:right-12 text-white text-6xl hover:text-gray-300 z-50">&#8250;</button>

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

          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-50">&#10005;</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function RheemHeatPumpPage() {
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
          { label: "Trang ch\u1EE7", href: "/" },
          { label: "S\u1EA3n ph\u1EA9m", href: "/san-pham" },
          { label: "H\u1EC7 Th\u1ED1ng N\u01B0\u1EDBc N\u00F3ng Trung T\u00E2m", href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam" },
          { label: "N\u01B0\u1EDBc N\u00F3ng Trung T\u00E2m Heat Pump Rheem AmbiPower Split 320L" },
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
              Máy Bơm Nhiệt Heat Pump Rheem AmbiPower Split 320L
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hệ thống nước nóng trung tâm tiêu chuẩn Úc – Giải pháp đầu tư bền vững cho biệt thự cao cấp. Bình thép không gỉ 316L, COP 5.1, tiết kiệm đến 80% điện năng.
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
                  <Image src={images[activeImage]} alt="Rheem AmbiPower Split 320L" fill className="object-contain p-4" priority />
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

      {/* NỘI DUNG CHI TIẾT */}
      <div className="max-w-7xl mx-auto px-4 pb-20 space-y-20 text-gray-700">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-6">
            Rheem – Thương hiệu nước nóng trung tâm số 1 đến từ Úc
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Thành lập năm <strong>1925</strong> tại San Francisco, Hoa Kỳ, Rheem là một trong những thương hiệu hàng đầu thế giới trong lĩnh vực sản xuất máy nước nóng và hệ thống sưởi ấm với hơn <strong>100 năm kinh nghiệm</strong>. Với 3 nhà máy sản xuất tại Bình Dương từ năm 2013, Rheem xuất khẩu sang Úc, New Zealand và Hoa Kỳ với chất lượng đồng nhất toàn cầu.
            </p>

            <p>
              Dòng <strong>AmbiPower® Split 320L</strong> là đỉnh cao công nghệ heat pump của Rheem, tích hợp môi chất lạnh tự nhiên <strong>R290</strong>, bình thép không gỉ <strong>316L</strong> và hệ số hiệu suất <strong>COP 5.1</strong> – mức tiết kiệm điện lên đến 80% so với bình nóng lạnh điện trở truyền thống.
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
            Vấn đề thường gặp với hệ thống nước nóng trung tâm
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Ăn mòn, rò rỉ sau 3–5 năm do chất lượng nước máy không ổn định.",
              "Nước nóng chập chờn khi rét đậm dưới 10°C – máy đóng băng, ngừng hoạt động.",
              "Tiếng ồn máy nén phá vỡ không gian yên tĩnh của biệt thự.",
              "Thiết kế cồng kềnh làm xấu cảnh quan sân vườn và kiến trúc.",
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
            Giải pháp Rheem AmbiPower Split 320L
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Rheem giải quyết triệt để các vấn đề trên bằng 3 lựa chọn thiết kế cốt lõi:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Bình thép không gỉ 316L</strong>
                  <p>Vật liệu y tế và hàng hải, không cần thanh Anode, chống ăn mòn vĩnh viễn.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Công nghệ Split tách rời</strong>
                  <p>Cục nóng ngoài trời – bình chứa trong nhà, loại bỏ tiếng ồn khỏi không gian sống.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Dải vận hành −7°C đến 43°C</strong>
                  <p>Hoạt động ổn định mọi mùa, kể cả rét đậm dưới 10°C.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Môi chất lạnh R290</strong>
                  <p>Gas tự nhiên, GWP gần bằng 0, gia nhiệt nhanh hơn R134a.</p>
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
            <div><strong>Model:</strong> T565E32AM0 (Split)</div>
            <div><strong>Dung tích:</strong> 325 Lít</div>
            <div><strong>Vật liệu bình:</strong> Thép không gỉ 316L</div>
            <div><strong>Hệ số COP:</strong> 5.1 (tại 33°C)</div>
            <div><strong>Công suất gia nhiệt:</strong> 5.9 kW</div>
            <div><strong>Môi chất lạnh:</strong> R290 (GWP = 0.02)</div>
            <div><strong>Nhiệt độ nước tối đa:</strong> 70°C</div>
            <div><strong>Dải nhiệt vận hành:</strong> −7°C đến 43°C</div>
            <div><strong>Độ ồn:</strong> 47 dB</div>
            <div><strong>Áp suất làm việc:</strong> 850 kPa</div>
            <div><strong>Nguồn điện:</strong> 220–240V / 50Hz</div>
            <div><strong>Bảo hành bình chứa:</strong> 10 năm</div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">
            Công nghệ môi chất R290
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Gas R290 là môi chất lạnh tự nhiên với hiệu suất truyền nhiệt cao hơn R134a, giúp máy đạt nhiệt độ mong muốn nhanh hơn, đặc biệt hiệu quả vào mùa đông lạnh. Chỉ số GWP gần bằng 0 (0.02) trong khi các dòng gas thông thường lên tới hàng nghìn.
            </p>

            <p>
              R290 là môi chất tự nhiên, không nằm trong danh sách bị hạn chế theo lộ trình loại bỏ HFC/HCFC toàn cầu, đảm bảo thiết bị không bị lỗi thời trong suốt vòng đời 20 năm sản phẩm.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a5276] mb-8">Tính năng thông minh</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Vacation Mode: Tự động nghỉ khi gia đình đi vắng, kích hoạt lại trước khi bạn về.",
              "Chu trình khử khuẩn tự động: Bảo vệ chống vi khuẩn Legionella.",
              "Tích hợp điện mặt trời: Tự động tối ưu gia nhiệt vào khung giờ cao điểm nắng.",
              "Màn hình LED cảm ứng: Điều khiển trực quan, hỗ trợ qua App.",
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
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
            Bài toán kinh tế – Hoàn vốn và sinh lời
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Gia đình 5–7 người sử dụng 600 lít nước nóng/ngày (villa 3–4 phòng tắm):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#1a5276]">
                    <th className="py-3 pr-4"></th>
                    <th className="py-3 pr-4">Bình điện trở thông thường</th>
                    <th className="py-3">Rheem AmbiPower Split</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium">Hệ số COP</td>
                    <td className="py-3 pr-4">~1.0</td>
                    <td className="py-3">~5.1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium">Chi phí điện/tháng</td>
                    <td className="py-3 pr-4">2.500.000 – 3.000.000 VNĐ</td>
                    <td className="py-3">500.000 – 600.000 VNĐ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium">Tiết kiệm/tháng</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3 font-semibold text-emerald-600">~2.000.000 VNĐ</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium">Tiết kiệm/năm</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3 font-semibold text-emerald-600">~24.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Thời gian hoàn vốn</td>
                    <td className="py-3 pr-4">—</td>
                    <td className="py-3 font-semibold">3–4 năm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              Với vòng đời 15–20 năm nhờ bình thép không gỉ, từ năm thứ 5 trở đi gia đình bạn tận hưởng nước nóng với chi phí gần bằng 0.
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
            Quy trình lắp đặt "Clean & Silent" tại VIỆT HOME
          </h2>

          <div className="space-y-5 text-lg leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Khảo sát hạ tầng kỹ thuật (Thermal Site Audit) – đo áp suất, lưu lượng, tính toán đường ống.",
                "Thiết kế bản vẽ thi công 2D/3D – xác định vị trí module bơm nhiệt và bình chứa.",
                "Lắp đặt tiêu chuẩn Clean & Silent – cao su giảm chấn, bảo ôn chống UV.",
                "Kiểm thử hệ thống – hút chân không, kiểm tra dòng điện, áp suất gas, nhiệt độ nước ra.",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
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
          <h2 className="text-3xl font-bold mb-4">Bạn cần tư vấn giải pháp Heat Pump Rheem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Đội ngũ VTech sẽ khảo sát miễn phí, tư vấn và báo giá tốt nhất cho hệ thống nước nóng trung tâm Rheem AmbiPower Split 320L.</p>
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
