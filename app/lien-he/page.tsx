"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function LienHePage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState({ name: false, phone: false, message: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: form.name.trim() === "",
      phone: form.phone.trim() === "",
      message: form.message.trim() === "",
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.phone && !newErrors.message) {
      setShowSuccess(true);
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    }
  };

  return (
    <main className="bg-white">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[380px] md:h-[420px] bg-gradient-to-br from-[#1a5276] via-[#1a6e9e] to-[#2196f3] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-12 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-white w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-5 tracking-tighter leading-tight"
          >
            LIÊN HỆ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light"
          >
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Thông tin liên hệ */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#1a5276]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">Thông Tin Liên Hệ</h2>
            </motion.div>

            <div className="space-y-10">
              {/* Địa chỉ */}
              <motion.div variants={fadeUp} className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a5276]/20 transition-colors">
                  <MapPin className="w-7 h-7 text-[#1a5276]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Office & Showroom</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lô MĐ 219 - Khu TĐC Tiên Dược - Mai Đình - Sóc Sơn - Hà Nội
                  </p>
                </div>
              </motion.div>

              {/* Thời gian */}
              <motion.div variants={fadeUp} className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a5276]/20 transition-colors">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Thời gian làm việc</h3>
                  <p className="text-gray-600">
                    8h00 - 18h00 (Kể cả Thứ 7 và Chủ Nhật)
                  </p>
                </div>
              </motion.div>

              {/* Hotline */}
              <motion.div variants={fadeUp} className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a5276]/20 transition-colors">
                  <Phone className="w-7 h-7 text-[#1a5276]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Hotline tư vấn & hỗ trợ</h3>
                  <a href="tel:0377778513" className="text-3xl font-bold text-[#1a5276] hover:text-red-600 transition-all hover:translate-x-2 inline-block">
                    0377.778.513
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeUp} className="flex gap-6 group">
                <div className="w-14 h-14 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a5276]/20 transition-colors">
                  <Mail className="w-7 h-7 text-[#1a5276]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">Email</h3>
                  <a href="mailto:viet_home@gmail.com" className="text-lg text-[#1a5276] hover:text-red-600 transition-colors font-medium">
                    viet_home@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Google Maps Button */}
              <motion.div variants={fadeUp} className="pt-2">
                <a
                  href="https://maps.app.goo.gl/NxGDUraGGvHu1RiC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#1a5276] text-white px-8 py-4 rounded-2xl hover:bg-[#154360] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-semibold"
                >
                  <MapPin className="w-5 h-5" />
                  Xem vị trí trên Google Maps
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Form liên hệ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-[#1a5276] mb-10">GỬI THÔNG TIN LIÊN HỆ</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                    className={`w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-4 transition-all duration-300 ${errors.name ? "border-red-400 bg-red-50 focus:ring-red-400/10" : "border-gray-300 focus:border-[#1a5276] focus:ring-[#1a5276]/10"}`}
                    placeholder="Nhập họ và tên"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1.5">Vui lòng nhập họ và tên</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }}
                    className={`w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-4 transition-all duration-300 ${errors.phone ? "border-red-400 bg-red-50 focus:ring-red-400/10" : "border-gray-300 focus:border-[#1a5276] focus:ring-[#1a5276]/10"}`}
                    placeholder="Nhập số điện thoại"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1.5">Vui lòng nhập số điện thoại</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#1a5276] focus:ring-4 focus:ring-[#1a5276]/10 transition-all duration-300"
                  placeholder="Nhập email của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dịch vụ quan tâm</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#1a5276] focus:ring-4 focus:ring-[#1a5276]/10 transition-all duration-300 bg-white"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="loc-nuoc">Hệ thống lọc nước tổng</option>
                  <option value="nuoc-nong">Hệ thống nước nóng trung tâm</option>
                  <option value="khi-tuoi">Hệ thống cấp khí tươi</option>
                  <option value="suoi-am">Hệ thống sưởi ấm dưới sàn</option>
                  <option value="khac">Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: false }); }}
                  className={`w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-4 transition-all duration-300 resize-y ${errors.message ? "border-red-400 bg-red-50 focus:ring-red-400/10" : "border-gray-300 focus:border-[#1a5276] focus:ring-[#1a5276]/10"}`}
                  placeholder="Viết nội dung bạn cần tư vấn..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1.5">Vui lòng nhập nội dung</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#e74c3c] hover:bg-[#c0392b] active:scale-[0.985] text-white font-bold py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GỬI THÔNG TIN
              </button>

              <p className="text-xs text-gray-500 text-center">
                Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9999999999995!2d105.785!3d21.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAyJzA2LjAiTiAxMDXCsDQ3JzA2LjAiRQ!5e0!3m2!1svi!2s!4v1720000000000"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
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
                  Thông tin liên hệ của bạn đã được gửi thành công.
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
