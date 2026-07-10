"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Phone, Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import LazySection from "../components/LazySection";

/* ─── Animation Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/* ─── Data ─── */
const products = [
  {
    title: "Hệ Thống Lọc Nước Tổng",
    href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
    img: "/images/san-pham/loc-nuoc-tong-v1.jpg",
    desc: "Giải pháp lọc nước tổng gia đình và công trình, loại bỏ tạp chất, kim loại nặng, vi khuẩn.",
    objectFit: "object-contain",
  },
  {
    title: "Hệ Thống Nước Nóng Trung Tâm",
    href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
    img: "/images/san-pham/nuoc-nong-trung-tam.jpg",
    desc: "Công nghệ Heat Pump tiết kiệm năng lượng, cung cấp nước nóng nhanh và an toàn.",
    objectFit: "object-cover",
  },
];

const projects = [
  { title: "Dự án nhà anh Hưng – chị Thơm tại Phúc Thọ - Hà Nội", img: "/images/duandathuchien/phuc-tho-ha-noi-3.jpg", slug: "du-an-anh-hung-chi-thom-tai-phuc-tho-ha-noi" },
  { title: "Dự án nhà anh Tỉnh tại KĐT Pháp Vân – Hà Nội", img: "/images/duandathuchien/phap-van-ha-noi-1.png", slug: "biet-thu-anh-tinh-tai-kdt-phap-van" },
  { title: "Dự án nhà anh Nguyên KĐT Lam Hạ - Phủ Lý – Hà Nam", img: "/images/duandathuchien/phu-ly-ha-nam-1.jpg", slug: "biet-thu-anh-nguyen-tai-phu-ly-ha-nam" },
  { title: "Dự án nhà bác Á – KĐT Nam An Khánh – Hoài Đức – Hà Nội", img: "/images/duandathuchien/an-khanh-hoai-duc-hanoi-1.jpg", slug: "biet-thu-bac-a-tai-kdt-nam-an-khanh-hoai-duc-ha-noi" },
  { title: "Dự án công trình nhà anh Long KĐT Đông Vệ - Thanh Hóa", img: "/images/duandathuchien/dong-ve-thanh-hoa-1.jpg", slug: "biet-thu-anh-long-tai-kdt-dong-ve-thanh-hoa" },
  { title: "Dự án nhà a Dũng – Hồng Tiến – Long Biên – Hà Nội", img: "/images/duandathuchien/hong-tien-long-bien-1.png", slug: "biet-thu-anh-dung-hong-tien-long-bien-ha-noi" },
  { title: "Dự án nhà chú Tuấn – Starlake – Tây Hồ", img: "/images/duandathuchien/starlake-tay-ho-1.png", slug: "biet-thu-anh-tuan-starlake-tay-ho-ha-noi" },
  { title: "Dự án nhà anh Cường – KĐT The Manor – Nguyễn Xiển", img: "/images/duandathuchien/the-manor-nguyen-xien-1.jpg", slug: "biet-thu-anh-cuong-the-manor-nguyen-xien-ha-noi" },
];

const reasons = [
  { icon: "/images/icon/icon-chat-luong-400x400.png", title: "Chất lượng sản phẩm", desc: "Nhập khẩu 100% từ thương hiệu nổi tiếng, chất lượng nhất trên thế giới." },
  { icon: "/images/icon/icon-bao-hanh-bao-tri-1-400x400.png", title: "Bảo hành, bảo trì", desc: "Đặt quyền lợi khách hàng làm trọng tâm với chế độ bảo hành số 1 hiện nay." },
  { icon: "/images/icon/icon-doi-ngu-ky-thuat-1-400x400.png", title: "Đội ngũ kỹ thuật", desc: "Đội ngũ kỹ sư được đào tạo bài bản, tận tâm và trách nhiệm trong mỗi dự án." },
  { icon: "/images/icon/icon-giai-phap-toi-uu-1-400x400.png", title: "Giải pháp tối ưu", desc: "Căn cứ vào hiện trạng và sở thích để đưa ra giải pháp phù hợp nhất." },
  { icon: "/images/icon/icon-quy-trinhg-lam-viec-1-400x400.png", title: "Quy trình làm việc", desc: "Chuyên nghiệp từ khâu tư vấn đến lắp đặt, tận tâm trong từng bước." },
];

const stats = [
  { value: "24/7", label: "Hỗ trợ khách hàng" },
  { value: "100%", label: "Sản phẩm chính hãng" },
  { value: "24h", label: "Phản hồi yêu cầu" },
  { value: "3+", label: "Năm bảo hành" },
];

export default function HomePage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, phone: false });

  const handleSubmit = () => {
    const newErrors = {
      name: form.name.trim() === "",
      phone: form.phone.trim() === "",
    };
    setErrors(newErrors);
    if (!newErrors.name && !newErrors.phone) {
      setShowSuccess(true);
      setForm({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <main>
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Company Intro + Stats */}
      <section className="relative bg-[#1a5276] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative max-w-7xl mx-auto px-4"
        >
          <motion.div variants={fadeUp} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm text-blue-100 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Giải pháp không gian sống cao cấp</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              VIỆT HOME
            </h2>
            <p className="max-w-3xl mx-auto text-blue-100/90 leading-relaxed text-lg">
              Đội ngũ kỹ sư được đào tạo chuyên nghiệp, tư vấn và hỗ trợ khách hàng nhanh chóng.
              VIET HOME cam kết mang đến giải pháp xử lý nước tốt nhất với dịch vụ tận tâm.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Giải pháp chính */}
      <LazySection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-4">
                  GIẢI PHÁP NỔI BẬT
                </h2>
                <p className="text-gray-500 mb-4 max-w-2xl mx-auto text-lg">
                  Chúng tôi chuyên cung cấp các giải pháp hiện đại, tiết kiệm và bền vững cho ngôi nhà Việt
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#1a5276] to-[#2196f3] mx-auto rounded-full" />
              </motion.div>

              <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {products.map((product, i) => (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <Link
                      href={product.href}
                      className="group block bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#1a5276]/20"
                    >
                      <div className="overflow-hidden relative h-72 bg-white">
                        <Image
                          src={product.img}
                          alt={product.title}
                          fill
                          className={`transition-transform duration-700 group-hover:scale-110 ${product.objectFit || "object-cover"}`}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={95}
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a5276]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <ArrowRight className="w-5 h-5 text-[#1a5276]" />
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#1a5276] transition-colors duration-300 mb-3">
                          {product.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          {product.desc}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </LazySection>

      {/* 4. Về chúng tôi */}
      <LazySection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={slideLeft}>
                <div className="inline-block px-4 py-1.5 bg-[#1a5276]/10 text-[#1a5276] rounded-full text-sm font-medium mb-6">
                  Về chúng tôi
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-6 leading-tight">
                  NÂNG TẦM CHẤT LƯỢNG<br />CUỘC SỐNG
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-[17px]">
                  Công ty TNHH GIẢI PHÁP CÔNG NGHỆ VIỆT HOME là doanh nghiệp mới thành lập,
                  quy tụ đội ngũ lãnh đạo & nhân viên có trình độ cao, đam mê và tận tâm
                  trong lĩnh vực xử lý nước.
                </p>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1a5276] mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#1a5276] text-white rounded-lg flex items-center justify-center text-sm">★</span>
                    CHẤT LƯỢNG SẢN PHẨM
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Sản phẩm nhập khẩu chính hãng, được chứng nhận bởi các tổ chức quốc tế NSF, WQA, TUV NORD, ISO...
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about/about_us.png"
                    alt="Về VIET HOME"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-5 -left-5 bg-[#1a5276] text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">Mới</div>
                  <div className="text-xs text-blue-200">Thành lập 2024</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </LazySection>

      {/* 5. Quality Banner */}
      <LazySection>
        <section className="relative h-[400px] md:h-[460px] overflow-hidden">
          <Image
            src="/images/slider/slide-4.png"
            alt="Chất lượng sản phẩm"
            fill
            className="object-cover scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a5276]/90 via-[#1a5276]/70 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="relative h-full flex flex-col items-start justify-center text-white px-8 md:px-16 max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Cam kết chất lượng
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-5 max-w-xl leading-tight">
              CHẤT LƯỢNG SẢN PHẨM
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-blue-100 max-w-xl mb-8">
              Công nghệ hiện đại - Thương hiệu uy tín - An toàn tuyệt đối
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4">
              <Link href="/gioi-thieu" className="bg-white text-[#1a5276] px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Tìm hiểu thêm
              </Link>
              <Link href="/lien-he" className="border-2 border-white/40 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Liên hệ ngay
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </LazySection>

      {/* 6. Dự án đã thi công */}
      <LazySection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-4">DỰ ÁN ĐÃ THI CÔNG</h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Các dự án tiêu biểu đã được VIET HOME thiết kế và thi công
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#1a5276] to-[#2196f3] mx-auto rounded-full mt-4" />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <Link
                      href={`/prj-cate/${project.slug}`}
                      className="group relative overflow-hidden rounded-2xl shadow-sm h-60 block"
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-white text-sm font-medium leading-tight drop-shadow-lg">
                          {project.title}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center mt-12"
              >
                <Link
                  href="/prj-cate/du-an"
                  className="inline-flex items-center gap-2 bg-[#1a5276] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#154360] transition-all duration-300 shadow-lg shadow-[#1a5276]/20 hover:shadow-xl hover:shadow-[#1a5276]/30 hover:-translate-y-0.5"
                >
                  Xem tất cả dự án
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </LazySection>

      {/* 7. Showroom */}
      <LazySection>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={slideLeft}>
                <div className="inline-block px-4 py-1.5 bg-[#1a5276]/10 text-[#1a5276] rounded-full text-sm font-medium mb-6">
                  Trải nghiệm thực tế
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-6 leading-tight">
                  SHOWROOM VIET HOME
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-[17px]">
                  Showroom trưng bày thực tế các giải pháp lọc nước, nước nóng trung tâm, khí tươi và sưởi ấm dưới sàn.
                  Quý khách có thể trực tiếp trải nghiệm sản phẩm trước khi quyết định.
                </p>
                <a
                  href="https://maps.app.goo.gl/65KezDh5BjxbZXjq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a5276] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#154360] transition-all duration-300 shadow-lg shadow-[#1a5276]/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <MapPin className="w-5 h-5" />
                  Xem vị trí Showroom
                </a>
              </motion.div>

              <motion.div variants={slideRight} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/banner/loc-tong-drop-banner.jpg"
                    alt="Showroom VIET HOME"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Showroom</div>
                    <div className="text-xs text-gray-500">Mở cửa 8h - 18h</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </LazySection>

      {/* 8. Lý do chọn VIET HOME */}
      <LazySection>
        <section className="py-20 bg-gradient-to-b from-[#eaf0fb] to-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a5276] mb-4">
                  TẠI SAO NÊN CHỌN VIET HOME?
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                  Những cam kết và giá trị mà VIET HOME mang đến cho khách hàng
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#1a5276] to-[#2196f3] mx-auto rounded-full mt-4" />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group bg-white rounded-3xl shadow-sm p-8 text-center border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-[#1a5276]/20"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-[#1a5276]/5 transition-colors duration-300">
                      <Image
                        src={reason.icon}
                        alt={reason.title}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-[#1a5276] mb-3 text-base">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </LazySection>

      {/* 10. Form tư vấn */}
      <LazySection>
        <section className="relative py-24 overflow-hidden">
          <Image
            src="/images/banner/loc-tong-drop-banner.jpg"
            alt="Đăng ký tư vấn miễn phí"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a5276]/90 via-[#1a5276]/80 to-[#1a6e9e]/85" />

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="relative max-w-xl mx-auto px-4 text-center text-white"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full text-sm text-blue-100 mb-6">
                <Phone className="w-4 h-4" />
                Liên hệ ngay
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h2>
              <p className="text-blue-100/80 mb-10 text-lg">
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên *"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                  className={`w-full px-6 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 shadow-lg ${errors.name ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.name && <p className="text-red-300 text-sm mt-1.5 text-left">Vui lòng nhập họ và tên</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại *"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }}
                  className={`w-full px-6 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 shadow-lg ${errors.phone ? "ring-2 ring-red-400" : ""}`}
                />
                {errors.phone && <p className="text-red-300 text-sm mt-1.5 text-left">Vui lòng nhập số điện thoại</p>}
              </div>
              <input
                type="email"
                placeholder="Email (không bắt buộc)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-6 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 shadow-lg"
              />
              <textarea
                placeholder="Nội dung cần tư vấn..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-6 py-4 rounded-xl bg-white/95 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-300 resize-none shadow-lg"
              />
              <motion.button
                type="button"
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#e74c3c] hover:bg-[#c0392b] py-4 rounded-xl font-bold text-lg tracking-wider transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40"
              >
                GỬI YÊU CẦU TƯ VẤN
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </LazySection>

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
