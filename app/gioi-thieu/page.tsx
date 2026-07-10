"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

export default function GioiThieuPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: false, phone: false });

  const handleSubmit = () => {
    const newErrors = {
      name: form.name.trim() === "",
      phone: form.phone.trim() === "",
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.phone) {
      setShowSuccess(true);
      setForm({ name: "", phone: "" });
    }
  };

  return (
    <main className="bg-white">
      <Breadcrumb items={[{ label: 'Trang chủ', href: '/' }, { label: 'Giới thiệu' }]} />
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] bg-[#1a5276] flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 text-white flex flex-col">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            GIỚI THIỆU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-gray-200 self-end"
          >
            Về VIỆT HOME
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Giới thiệu về công ty */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="section-title text-left mb-4">PHẦN GIỚI THIỆU</h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="indent-8">
              VIỆT HOME tự hào là một trong những đơn vị hàng đầu tại Việt Nam với chuyên môn cao trong lĩnh vực cung cấp giải pháp toàn diện về <strong>lọc nước trung tâm, nước nóng trung tâm Heatpump</strong> với đa dạng phân khúc từ các thương hiệu hàng đầu thế giới.
            </p>

            <p className="indent-8">
              Tại VIỆT HOME, chúng tôi luôn đặt chất lượng sản phẩm và dịch vụ lên hàng đầu. Đội ngũ kỹ thuật viên giàu kinh nghiệm của chúng tôi cam kết đảm bảo cung cấp và lắp đạt các giải pháp an toàn, hiệu quả.
            </p>
          </div>
        </motion.section>

        {/* Về chúng tôi */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="section-title text-left mb-4">VỀ CHÚNG TÔI</h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="indent-8">
              Công ty TNHH GIẢI PHÁP CÔNG NGHỆ VIỆT HOME viết tắt VIỆT HOME là một doanh nghiệp được thành lập từ đội ngũ lãnh đạo & nhân viên có trình độ cao, có nhiều kinh nghiệm hoạt động lâu năm trong lĩnh vực xử lý nước.
            </p>

            <p className="indent-8">
              Với slogan <strong>NÂNG TẦM CHẤT LƯỢNG CUỘC SỐNG</strong>, phương châm hoạt động của Công ty VIỆT HOME luôn đặt khách hàng là trọng tâm, mang lại những giá trị sống cốt lõi đến từng gia đình người Việt. Công ty chúng tôi cam kết duy trì tiêu chuẩn chất lượng cao nhất, sáng tạo và nỗ lực không ngừng để đáp ứng mọi yêu cầu của Quý Khách Hàng.
            </p>
          </div>
        </motion.section>

        {/* Lĩnh vực hoạt động */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-20"
        >
          <h2 className="section-title text-left mb-4">
            LĨNH VỰC HOẠT ĐỘNG
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-4 indent-8">
            VIỆT HOME chuyên nhập khẩu, phân phối, thiết kế thi công trọn gói hạng mục lọc nước tổng của các thương hiệu đến từ trong và ngoài nước như: Karofi, Green Water, Clack, Pentair...
          </p>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-6 indent-8">
            Hệ thống nước nóng trung tâm Eminent, Rheem… những thương hiệu hàng đầu trên thế giới đến từ Mỹ, Nhật, Úc, Đức, Ý...
          </p>

          <ul className="text-gray-600 text-lg leading-relaxed max-w-4xl space-y-3 ml-8 mb-10">
            <li>
              – Dịch vụ tư vấn thiết kế, thi công lắp đặt máy nước nóng trung tâm, lọc nước
            </li>
            <li>
              – Dịch vụ nâng cấp cải tạo, sửa chữa hạ tầng, thiết kế thi công trọn gói
            </li>
            <li>
              – Dịch vụ hỗ trợ kỹ thuật, bảo trì máy nước nóng trung tâm, lọc nước
            </li>
          </ul>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="grid md:grid-cols-2 gap-8"
          >

            {/* Card 1 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-5">
                Giải pháp & Thiết bị
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  • Hệ thống lọc nước tổng gia đình và công trình
                </li>

                <li>
                  • Hệ thống nước nóng trung tâm Heat Pump
                </li>

                <li>
                  • Nhập khẩu và phân phối các thương hiệu:
                  Karofi, Green Water, Clack, Pentair,
                  Eminent, Rheem...
                </li>

                <li>
                  • Thiết bị và công nghệ từ Mỹ, Nhật Bản,
                  Úc, Đức, Ý...
                </li>
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-5">
                Dịch vụ triển khai
              </h3>

              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>
                  • Tư vấn thiết kế hệ thống lọc nước và
                  nước nóng trung tâm
                </li>

                <li>
                  • Thi công lắp đặt trọn gói cho nhà ở,
                  biệt thự và công trình
                </li>

                <li>
                  • Nâng cấp, cải tạo và sửa chữa hạ tầng kỹ thuật
                </li>

                <li>
                  • Hỗ trợ kỹ thuật, bảo trì và bảo dưỡng định kỳ
                </li>
              </ul>
            </motion.div>

          </motion.div>
        </motion.section>

        {/* Tầm nhìn & Sứ mệnh */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">TẦM NHÌN</h2>
            <p className="text-gray-700 leading-relaxed">
              Trở thành một trong những công ty mạnh hàng đầu về lĩnh vực năng lượng xanh- năng lượng tái tạo và xử lý nước ( lọc nước trung tâm và nước nóng trung tâm bảo vệ cho sức khỏe) giúp cho nền kinh tế của đất nước ngày càng phát triển hơn nữa.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-4">SỨ MỆNH</h2>
            <p className="text-gray-700 leading-relaxed">
              Ðưa giải pháp và những sản phẩm <strong>Chất lượng tốt - Tiết kiệm điện- Bảo vệ sức khỏe và môi trường</strong> tới những công trình Công nghiệp và Dân dụng. Bao phủ nền năng lượng xanh tới mọi nhà.
            </p>
          </div>
        </motion.section>

        {/* Giá trị cốt lõi */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-20"
        >
          <h2 className="section-title text-left mb-4">GIÁ TRỊ CỐT LÕI</h2>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "CHẤT LƯỢNG",
                desc: "Tối đa hóa lợi ích cho khách hàng bằng việc tổ chức thi công chuyên nghiệp, cung cấp các dịch vụ đa dạng, sản phẩm đúng tiến độ, chất lượng tốt cùng với các giải pháp thiết kế tối ưu.",
                icon: "⭐"
              },
              {
                title: "AN TOÀN",
                desc: "Cam kết xây dựng một môi trường làm việc an toàn cho người lao động, các đối tác, khách hàng và cộng đồng.",
                icon: "🛡️"
              },
              {
                title: "CAM KẾT",
                desc: "Một khi chúng tôi đã cam kết thì bằng mọi giá, mọi cách thức đều thực hiện để bảo vệ tính cam kết của mình.",
                icon: "🤝"
              },
              {
                title: "CHÍNH TRỰC",
                desc: "Trung thực, minh bạch và uy tín trong kinh doanh.",
                icon: "⚖️"
              },
              {
                title: "TẬN TỤY",
                desc: "Sự thành công sẽ không đến nếu không có sự chăm chỉ vì lợi ích của khách hàng. Và bởi chính quan điểm đó, trong mọi hoạt động công việc chúng tôi luôn có sự chỉn chu và bền bỉ.",
                icon: "⚡"
              },
              {
                title: "CHÂN THÀNH",
                desc: "Một mối quan hệ bền vững với khách hàng thì việc chân thật, cởi mở là điều không thể thiếu. Vì vậy, chúng tôi luôn chia sẻ những khó khăn và chung vui với niềm vui của họ.",
                icon: "❤️"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="
                  bg-white border border-gray-200 p-8 rounded-2xl text-center
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-[#1a5276]/10
                  hover:border-[#1a5276]
                "
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1a5276]/10 rounded-full flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg text-[#1a5276] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Mục tiêu trọng tâm */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="section-title text-left mb-8">MỤC TIÊU TRỌNG TÂM</h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="space-y-10"
            >

              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="flex gap-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#1a5276] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a5276] mb-3">
                    Phát triển bền vững
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Xây dựng Công ty ngày càng lớn mạnh trên cơ sở hướng đến chất lượng, chuyên nghiệp để phát triển bền vững và đem lại giá trị dài hạn cho cổ đông.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="flex gap-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#1a5276] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a5276] mb-3">
                    Cải tiến &amp; Mở rộng
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tập trung cải tiến nâng cấp công nghệ và tập trung nguồn lực vào hoạt động kinh doanh chủ lực nhằm nâng cao năng suất, chất lượng và giảm thiểu chi phí. Tìm kiếm đối tác mới để mở rộng thị trường và gia tăng thị phần.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                className="flex gap-6"
              >
                <div className="w-10 h-10 rounded-full bg-[#1a5276] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a5276] mb-3">
                    Phát triển nhân lực
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Phát triển nguồn nhân lực có chuyên môn giỏi, tính chuyên nghiệp cao, tận tâm với công việc và luôn vì sự nghiệp phát triển của Công ty.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.section>

        {/* Form đăng ký tư vấn */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-[#1a5276] text-white rounded-3xl p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h2>
          <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn giải pháp phù hợp nhất cho ngôi nhà của bạn.
          </p>

          <div className="max-w-lg mx-auto space-y-4">
            <div>
              <input
                type="text"
                placeholder="Họ và tên *"
                value={form.name}
                onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                className={`w-full px-6 py-4 rounded-lg bg-white/10 border text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors ${errors.name ? "border-red-400 bg-red-500/10" : "border-white/30"}`}
              />
              {errors.name && <p className="text-red-300 text-sm mt-1.5 text-left">Vui lòng nhập họ và tên</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Số điện thoại *"
                value={form.phone}
                onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }}
                className={`w-full px-6 py-4 rounded-lg bg-white/10 border text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors ${errors.phone ? "border-red-400 bg-red-500/10" : "border-white/30"}`}
              />
              {errors.phone && <p className="text-red-300 text-sm mt-1.5 text-left">Vui lòng nhập số điện thoại</p>}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#e74c3c] hover:bg-red-700 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              GỬI YÊU CẦU
            </button>
          </div>
        </motion.section>

      </div>

      {/* ─── Success Popup ─── */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-[#1a5276] via-[#2196f3] to-[#1a6e9e]" />
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
              <div className="px-8 pt-10 pb-8 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.15 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="text-2xl font-bold text-gray-900 mb-3"
                >
                  Cảm ơn bạn!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="text-gray-500 leading-relaxed mb-8"
                >
                  Yêu cầu tư vấn của bạn đã được gửi thành công.
                  <br />
                  <span className="text-gray-700 font-medium">Chúng tôi sẽ liên hệ tới bạn sớm nhất!</span>
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-7"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="space-y-3 text-sm text-gray-500 mb-8"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#1a5276]" />
                    <span>Hotline: <strong className="text-gray-700">0377.778.513</strong></span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-[#1a5276]" />
                    <span>Email: <strong className="text-gray-700">viet_home@gmail.com</strong></span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-[#1a5276]" />
                    <span className="text-xs">Lô MĐ 219 - Tiên Dược - Sóc Sơn - Hà Nội</span>
                  </div>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-gradient-to-r from-[#1a5276] to-[#1a6e9e] hover:from-[#154360] hover:to-[#1a5276] text-white py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-md shadow-[#1a5276]/20 hover:shadow-lg hover:shadow-[#1a5276]/30"
                >
                  ĐÓNG
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}