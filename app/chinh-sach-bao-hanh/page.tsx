"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, XCircle, Wrench, Handshake, Headphones } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
};

const cardHover = {
  hover: {
    y: -8,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function ChinhSachBaoHanhPage() {
  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Chính sách bảo hành" },
        ]}
      />

      {/* ─── Hero Banner ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[380px] md:h-[460px] bg-gradient-to-br from-[#1a5276] via-[#1a6e9e] to-[#2196f3] flex items-center overflow-hidden"
      >
        {/* Soft decorative elements */}
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
            <ShieldCheck className="w-11 h-11 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-5 tracking-tighter leading-tight"
          >
            CHÍNH SÁCH BẢO HÀNH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light"
          >
            Cam Kết Chất Lượng – Bảo Hành Vượt Trội
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg text-blue-100/90 max-w-2xl leading-relaxed"
          >
            Tại VIET HOME, chúng tôi tự hào về chất lượng sản phẩm và dịch vụ.
            Chính sách bảo hành minh bạch, chuyên nghiệp mang đến cho khách hàng sự an tâm tuyệt đối.
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Content ─── */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">

        {/* Section 1: Điều kiện bảo hành */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">1. Điều Kiện Bảo Hành</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lỗi kỹ thuật",
                desc: "Sản phẩm được bảo hành nếu có lỗi kỹ thuật từ nhà sản xuất hoặc lỗi phát sinh trong quá trình lắp đặt do VIET HOME thực hiện.",
                icon: "🔧",
              },
              {
                title: "Thời gian rõ ràng",
                desc: "Thời gian bảo hành cụ thể được ghi trên phiếu bảo hành hoặc hợp đồng mua bán, đảm bảo minh bạch thông tin.",
                icon: "📋",
              },
              {
                title: "Thông tin mua hàng",
                desc: "Khách hàng cần cung cấp thông tin mua hàng khi yêu cầu bảo hành để chúng tôi xử lý nhanh chóng.",
                icon: "📎",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={cardHover}
                className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:border-[#1a5276]/30 hover:bg-gray-50 transition-all duration-500"
              >
                <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                <h3 className="font-semibold text-xl text-[#1a5276] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 2: Thời gian bảo hành */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">2. Thời Gian Bảo Hành</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
            {[
              {
                product: "Hệ thống lọc nước tổng",
                warranty: "Trọn đời",
                detail: "Bảo hành thân vỏ trọn đời, van điện tử 5–10 năm, vật liệu làm mềm trọn đời",
                highlight: true,
                icon: "💧",
              },
              {
                product: "Hệ thống nước nóng trung tâm",
                warranty: "3 – 15 năm",
                detail: "Tùy từng thiết bị, bảo hành theo tiêu chuẩn nhà sản xuất",
                highlight: true,
                icon: "🔥",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={cardHover}
                className={`flex gap-6 p-8 rounded-3xl border transition-all duration-500 ${item.highlight
                  ? "bg-gradient-to-br from-[#1a5276]/5 to-white border-[#1a5276]/30 shadow-xl"
                  : "bg-gray-50 border-gray-100"
                  }`}
              >
                <div className="text-5xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-2xl text-gray-800 mb-3">{item.product}</h3>
                  <div className={`inline-block px-5 py-2 rounded-2xl text-lg font-bold mb-4 ${item.highlight
                    ? "bg-[#1a5276] text-white shadow-md"
                    : "bg-gray-200 text-gray-700"
                    }`}>
                    {item.warranty}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-gray-500 italic text-center md:text-left">
            🔧 Các linh kiện, phụ kiện đi kèm được bảo hành theo quy định của nhà sản xuất.
          </motion.p>
        </motion.section>

        {/* Section 3: Không được bảo hành */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">3. Trường Hợp Không Được Bảo Hành</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-red-50/70 border border-red-100 rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Sử dụng sai hướng dẫn", desc: "Sản phẩm hư hỏng do sử dụng không đúng theo hướng dẫn của nhà sản xuất hoặc VIET HOME." },
                { title: "Thiên tai & Môi trường", desc: "Hư hỏng do tác động bởi thiên tai, hỏa hoạn, chập điện hoặc ngập nước." },
                { title: "Sửa chữa bên ngoài", desc: "Sản phẩm đã bị thay đổi, sửa chữa bởi đơn vị không thuộc hệ thống VIET HOME." },
                { title: "Hết thời hạn", desc: "Sản phẩm đã hết thời gian bảo hành được ghi trên phiếu bảo hành." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 items-start group"
                >
                  <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:rotate-12">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Section 4: Quy trình bảo hành */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">4. Quy Trình Bảo Hành Chuyên Nghiệp</h2>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-[13%] right-[13%] h-0.5 bg-gradient-to-r from-transparent via-[#1a5276]/30 to-transparent" />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Tiếp nhận yêu cầu", desc: "Khách hàng liên hệ qua hotline hoặc email để báo lỗi sản phẩm.", icon: "📞" },
                { step: "02", title: "Kiểm tra & Đánh giá", desc: "Đội ngũ kỹ thuật viên kiểm tra và xác định nguyên nhân lỗi.", icon: "🔍" },
                { step: "03", title: "Xử lý bảo hành", desc: "Sửa chữa hoặc thay thế linh kiện miễn phí nếu thuộc phạm vi bảo hành.", icon: "🛠️" },
                { step: "04", title: "Hoàn tất bảo hành", desc: "Khách hàng nghiệm thu và xác nhận bảo hành hoàn tất.", icon: "✅" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={cardHover}
                  className="relative text-center bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-2xl hover:border-[#1a5276]/30 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1a5276] to-[#2196f3] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#1a5276]/30 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4 transition-transform group-hover:scale-125">{item.icon}</div>
                  <h3 className="font-semibold text-xl text-[#1a5276] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 5: Cam kết */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <Handshake className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">5. Cam Kết Của VIET HOME</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Minh bạch thông tin", desc: "Khách hàng được thông báo đầy đủ về tình trạng bảo hành, thời gian và phạm vi sửa chữa.", icon: "📢", color: "from-blue-50 to-white" },
              { title: "Linh kiện chính hãng", desc: "Chỉ sử dụng phụ tùng và linh kiện chính hãng để bảo đảm chất lượng và tuổi thọ thiết bị.", icon: "🏷️", color: "from-emerald-50 to-white" },
              { title: "Bảo mật thông tin", desc: "Thông tin khách hàng được bảo vệ nghiêm ngặt, không chia sẻ cho bên thứ ba.", icon: "🔒", color: "from-purple-50 to-white" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={cardHover}
                className={`bg-gradient-to-br ${item.color} border border-gray-100 p-9 rounded-3xl text-center hover:shadow-2xl transition-all duration-500`}
              >
                <div className="text-5xl mb-6 transition-transform hover:scale-110">{item.icon}</div>
                <h3 className="font-semibold text-2xl text-[#1a5276] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 6: Dịch vụ sau bảo hành */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#1a5276]/10 rounded-2xl flex items-center justify-center">
              <Headphones className="w-6 h-6 text-[#1a5276]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276]">6. Dịch Vụ Hỗ Trợ Sau Bảo Hành</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1a5276] to-[#1a6e9e] text-white p-10 rounded-3xl group">
              <div className="text-5xl mb-6 transition-transform group-hover:rotate-12">💎</div>
              <h3 className="font-bold text-3xl mb-4">Bảo trì định kỳ</h3>
              <p className="text-blue-100 leading-relaxed text-[17px]">
                Đăng ký gói bảo trì để thiết bị luôn hoạt động ổn định, hiệu quả.
                Đội ngũ kỹ thuật viên VIET HOME sẽ kiểm tra và bảo dưỡng định kỳ theo lịch hẹn.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-10 rounded-3xl group">
              <div className="text-5xl mb-6 transition-transform group-hover:scale-110">🤝</div>
              <h3 className="font-bold text-3xl text-[#1a5276] mb-4">Hỗ trợ sửa chữa</h3>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Sau khi hết thời gian bảo hành, VIET HOME vẫn hỗ trợ sửa chữa với mức giá ưu đãi.
                Liên hệ hotline <span className="font-semibold">0377.778.513</span> để được tư vấn chi tiết.
              </p>
            </div>
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
              MỌI THẮC MẮC VÀ YÊU CẦU BẢO HÀNH
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              Vui lòng liên hệ với chúng tôi để được hỗ trợ nhanh nhất
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <a href="tel:0377778513" className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-4">📞</div>
                <div className="text-blue-200 mb-1">Hotline</div>
                <div className="font-bold text-2xl">0377.778.513</div>
              </a>

              <a href="mailto:viet_home@gmail.com" className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-4">📧</div>
                <div className="text-blue-200 mb-1">Email</div>
                <div className="font-bold text-2xl">viet_home@gmail.com</div>
              </a>

              <a href="https://maps.app.goo.gl/NxGDUraGGvHu1RiC8" target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-4xl mb-4">📍</div>
                <div className="text-blue-200 mb-1">Địa chỉ</div>
                <div className="font-bold text-xl leading-tight">Lô MĐ 219 - Tiên Dược - Sóc Sơn - Hà Nội</div>
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}