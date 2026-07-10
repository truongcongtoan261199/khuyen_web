"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Layers,
  ShieldCheck,
  Users,
  CreditCard,
  Mail,
  BadgeCheck,
  AlertTriangle,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardHover = {
  hover: {
    y: -8,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function DieuKhoanDichVuPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Điều khoản dịch vụ" },
        ]}
      />

      {/* ─── Hero Banner ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[380px] md:h-[460px] bg-gradient-to-br from-[#1a5276] via-[#1a6e9e] to-[#2196f3] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-12 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-white w-full z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-black/10"
          >
            <FileText className="w-11 h-11 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-5 tracking-tighter leading-tight"
          >
            ĐIỀU KHOẢN DỊCH VỤ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light"
          >
            Minh Bạch – Chuyên Nghiệp – Uy Tín
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg text-blue-100/90 max-w-2xl leading-relaxed"
          >
            Tại VIET HOME, chúng tôi cam kết mang đến dịch vụ chất lượng cao
            với các điều khoản minh bạch, rõ ràng, bảo vệ quyền lợi khách hàng.
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Content ─── */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">

        {/* Section 1: Giới thiệu */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <Layers className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">
              1. Giới Thiệu Về VIET HOME
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-10 rounded-3xl">
              <p className="text-gray-700 leading-relaxed text-[17px] mb-6">
                VIET HOME là đơn vị chuyên cung cấp{" "}
                <strong>giải pháp lọc nước tổng cao cấp</strong>,{" "}
                <strong>nước nóng trung tâm</strong>,{" "}
                <strong>lọc khí tươi</strong> và <strong>sưởi ấm dưới sàn</strong>{" "}
                cho các công trình biệt thự, nhà phố, khách sạn và resort.
              </p>
              <p className="text-gray-700 leading-relaxed text-[17px] mb-6">
                Chúng tôi cam kết mang đến sản phẩm nhập khẩu chất lượng, có đầy đủ
                giấy tờ chứng nhận nguồn gốc và được lắp đặt bởi đội ngũ kỹ thuật
                chuyên nghiệp.
              </p>
              <p className="text-gray-700 leading-relaxed text-[17px]">
                Với slogan <strong className="text-[#1a5276]">NÂNG TẦM CHẤT LƯỢNG CUỘC SỐNG</strong>,
                VIET HOME luôn đặt khách hàng làm trọng tâm, mang lại những giá trị sống
                cốt lõi đến từng gia đình người Việt.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 2: Phạm vi dịch vụ */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">
              2. Phạm Vi Dịch Vụ
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lọc nước tổng cao cấp",
                desc: "Loại bỏ tạp chất, kim loại nặng, vi khuẩn, đảm bảo nước sạch cho sinh hoạt.",
                icon: "💧",
              },
              {
                title: "Nước nóng trung tâm",
                desc: "Công nghệ tiết kiệm năng lượng, đảm bảo cung cấp nước nóng nhanh, ổn định và an toàn cho cả gia đình.",
                icon: "🔥",
              },
              {
                title: "Lọc khí tươi",
                desc: "Hệ thống giúp lưu thông không khí sạch, kiểm soát chất lượng không khí, tốt cho sức khỏe.",
                icon: "🌬️",
              },
              {
                title: "Sưởi ấm dưới sàn",
                desc: "Giải pháp sưởi ấm hiện đại, phân bổ nhiệt đều, nâng cao chất lượng sống.",
                icon: "♨️",
              },
              {
                title: "Bảo trì định kỳ",
                desc: "Đảm bảo hệ thống vận hành ổn định, kéo dài tuổi thọ sản phẩm và giảm thiểu sự cố.",
                icon: "🔧",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={cardHover}
                className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:border-[#1a5276]/30 hover:bg-gray-50 transition-all duration-500"
              >
                <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-[#1a5276] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 3: Chính sách bảo hành & hỗ trợ kỹ thuật */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">
              3. Chính Sách Bảo Hành & Hỗ Trợ Kỹ Thuật
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bảo hành chính hãng",
                desc: "Tất cả sản phẩm do VIET HOME cung cấp đều có bảo hành chính hãng từ 2 – 15 năm (tùy dòng sản phẩm).",
                icon: "🛡️",
                color: "from-blue-50 to-white",
              },
              {
                title: "Bảo trì định kỳ",
                desc: "Dịch vụ bảo trì định kỳ giúp hệ thống hoạt động hiệu quả, giảm thiểu sự cố và kéo dài tuổi thọ sản phẩm.",
                icon: "🔄",
                color: "from-emerald-50 to-white",
              },
              {
                title: "Hỗ trợ 24 giờ",
                desc: "Đội ngũ kỹ thuật viên sẵn sàng hỗ trợ trong vòng 24 giờ khi có yêu cầu từ khách hàng.",
                icon: "⚡",
                color: "from-purple-50 to-white",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={cardHover}
                className={`bg-gradient-to-br ${item.color} border border-gray-100 p-9 rounded-3xl text-center hover:shadow-2xl transition-all duration-500`}
              >
                <div className="text-5xl mb-6 transition-transform hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-2xl text-[#1a5276] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 text-center"
          >
            <a
              href="/chinh-sach-bao-hanh"
              className="inline-flex items-center gap-2 text-[#1a5276] font-semibold hover:underline text-lg"
            >
              Xem chi tiết chính sách bảo hành →
            </a>
          </motion.div>
        </motion.section>

        {/* Section 4: Quyền và nghĩa vụ khách hàng */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">
              4. Quyền & Nghĩa Vụ Của Khách Hàng
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
            {/* Quyền khách hàng */}
            <div className="bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100 p-10 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-2xl text-emerald-700">
                  Khách hàng có quyền
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  "Nhận tư vấn miễn phí về tất cả các giải pháp của VIET HOME.",
                  "Kiểm tra chất lượng sản phẩm trước khi nhận bàn giao.",
                  "Hưởng đầy đủ chính sách bảo hành, bảo trì theo quy định.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:rotate-12">
                      <BadgeCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Nghĩa vụ khách hàng */}
            <div className="bg-gradient-to-br from-amber-50/80 to-white border border-amber-100 p-10 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-2xl text-amber-700">
                  Khách hàng cần cam kết
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  "Cung cấp thông tin chính xác khi đặt hàng.",
                  "Sử dụng hệ thống đúng hướng dẫn để đảm bảo hiệu quả và độ bền.",
                  "Thanh toán đúng hạn theo hợp đồng.",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:rotate-12">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 5: Chính sách thanh toán */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">
              5. Chính Sách Thanh Toán
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:border-[#1a5276]/30 hover:bg-gray-50 transition-all duration-500"
            >
              <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110">
                💳
              </div>
              <h3 className="font-semibold text-xl text-[#1a5276] mb-3">
                Thanh toán linh hoạt
              </h3>
              <p className="text-gray-600 leading-relaxed">
                VIET HOME áp dụng thanh toán linh hoạt qua chuyển khoản ngân hàng
                hoặc tiền mặt, tiện lợi cho khách hàng.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:border-[#1a5276]/30 hover:bg-gray-50 transition-all duration-500"
            >
              <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110">
                🔄
              </div>
              <h3 className="font-semibold text-xl text-[#1a5276] mb-3">
                Đổi mới & Hoàn tiền
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nếu sản phẩm có lỗi kỹ thuật từ nhà sản xuất, khách hàng được
                đổi mới hoặc hoàn tiền theo chính sách bảo hành hiện hành.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* CTA Liên hệ */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1a5276] via-[#1a6e9e] to-[#2196f3] text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ để được hỗ trợ
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a
                href="tel:0377778513"
                className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">📞</div>
                <div className="text-blue-200 mb-1">Hotline</div>
                <div className="font-bold text-2xl">0377.778.513</div>
              </a>

              <a
                href="mailto:viet_home@gmail.com"
                className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">📧</div>
                <div className="text-blue-200 mb-1">Email</div>
                <div className="font-bold text-2xl">viet_home@gmail.com</div>
              </a>

              <a
                href="https://maps.app.goo.gl/NxGDUraGGvHu1RiC8"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">📍</div>
                <div className="text-blue-200 mb-1">Địa chỉ</div>
                <div className="font-bold text-xl leading-tight">
                  Lô MĐ 219 - Tiên Dược - Sóc Sơn - Hà Nội
                </div>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
