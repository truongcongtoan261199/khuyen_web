import Link from "next/link";
import HeroSlider from "../components/HeroSlider";

const products = [
  {
    title: "Hệ Thống Lọc Nước Tổng",
    href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f1.png",
  },
  {
    title: "Hệ Thống Nước Nóng Trung Tâm",
    href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
    img: "https://ldcompany.vn/wp-content/uploads/2024/07/123123.jpg",
  },
  {
    title: "Hệ Thống Lọc và Cấp Khí Tươi",
    href: "/danh-muc-san-pham/he-thong-loc-va-cap-khi-tuoi",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f3.png",
  },
  {
    title: "Hệ Thống Sưởi Ấm Dưới Sàn",
    href: "/danh-muc-san-pham/he-thong-suoi-am-duoi-san",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/f4.jpg",
  },
];

const projects = [
  { title: "Công Trình Tại Hà Đông, Hà Nội", img: "https://ldcompany.vn/wp-content/uploads/2024/07/Anh-bia-ngoai-1-1400x788.jpg", href: "#" },
  { title: "Biệt Thự Tại Thành Phố Vinh, Nghệ An", img: "https://ldcompany.vn/wp-content/uploads/2024/07/Anh-bia-ngoai-1400x788.jpg", href: "#" },
  { title: "Công Trình Biệt Thự Tại TP. Vinh, Nghệ An", img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-13-1400x788.jpg", href: "#" },
  { title: "Công Trình Biệt Thự Tại TP. Hải Dương", img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-12-1400x788.jpg", href: "#" },
  { title: "Công Trình Biệt Thự Tại Vĩnh Yên, Vĩnh Phúc", img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-11-1400x788.jpg", href: "#" },
  { title: "Biệt Thự Tại Hải Tân, Hải Dương", img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-10-1400x788.jpg", href: "#" },
  { title: "Biệt Thự Tại Đại Lải Vĩnh Phúc", img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-9-1400x788.jpg", href: "#" },
  { title: "Công Trình Biệt Thự Tại Đồng Bèn, Quốc Oai", img: "https://ldcompany.vn/wp-content/uploads/2024/06/Anh-bia-ngoai-8-1400x788.jpg", href: "#" },
];

const reasons = [
  {
    icon: "https://ldcompany.vn/wp-content/uploads/2024/07/icon-chat-luong-400x400.png",
    title: "Chất lượng sản phẩm",
    desc: "Sản phẩm của công ty Linh Dương được nhập khẩu 100% từ những thương hiệu nổi tiếng và chất lượng nhất trên thế giới.",
  },
  {
    icon: "https://ldcompany.vn/wp-content/uploads/2024/07/icon-bao-hanh-bao-tri-1-400x400.png",
    title: "Chế độ bảo hành, bảo trì",
    desc: "Linh Dương luôn đặt giá trị và quyền lợi khách hàng làm trọng tâm với chế độ bảo hành số 1 hiện nay.",
  },
  {
    icon: "https://ldcompany.vn/wp-content/uploads/2024/07/icon-doi-ngu-ky-thuat-1-400x400.png",
    title: "Đội ngũ kỹ thuật",
    desc: "Đội ngũ kỹ thuật giàu kinh nghiệm, tận tâm và trách nhiệm trong mỗi dự án.",
  },
  {
    icon: "https://ldcompany.vn/wp-content/uploads/2024/07/icon-giai-phap-toi-uu-1-400x400.png",
    title: "Giải pháp tối ưu",
    desc: "Căn cứ vào hiện trạng và sở thích của từng khách hàng để đưa ra giải pháp phù hợp nhất.",
  },
  {
    icon: "https://ldcompany.vn/wp-content/uploads/2024/07/icon-quy-trinhg-lam-viec-1-400x400.png",
    title: "Quy trình làm việc",
    desc: "Quy trình chuyên nghiệp giúp khách hàng cảm nhận được sự tận tâm từ khâu tư vấn đến lắp đặt.",
  },
];

const news = [
  {
    title: "NƯỚC CỨNG LÀ GÌ? CÁCH KHẮC PHỤC TÌNH TRẠNG NƯỚC CỨNG?",
    excerpt: "Nước cứng là loại nước chứa hàm lượng cao các khoáng chất như canxi và magiê...",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/t3.jpg",
    href: "#",
  },
  {
    title: "TIMCUP 2024 SẮC TÍM YÊU THƯƠNG – CÙNG EM ĐẾN TRƯỜNG",
    excerpt: "Ngày 08/06/2024 tại sân bóng Thành Công, Giải bóng đá TimCup 2024 nhằm mục đích gây quỹ thiện nguyện...",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/t2-scaled.jpg",
    href: "#",
  },
  {
    title: "LỄ KÝ KẾT HỢP TÁC ĐỘC QUYỀN HEAT PUMP SANDEN TẠI VIỆT NAM",
    excerpt: "Hà Nội, ngày 19 tháng 1 năm 2024 – Trong một bước tiến quan trọng đánh dấu sự phát triển...",
    img: "https://ldcompany.vn/wp-content/uploads/2024/06/t1-scaled.jpg",
    href: "#",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Company Intro */}
      <section className="bg-[#1a5276] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">LINH DƯƠNG COMPANY</h2>
          <p className="max-w-4xl mx-auto text-gray-200 leading-relaxed text-[15px]">
            Linh Dương Company tự hào là một trong những đơn vị hàng đầu tại Việt Nam chuyên cung cấp 
            giải pháp toàn diện về lọc nước tổng, nước nóng trung tâm, cung cấp khí tươi và sưởi ấm dưới sàn 
            phân khúc cao cấp từ các thương hiệu hàng đầu thế giới.
          </p>
        </div>
      </section>

      {/* 3. Sản phẩm chính */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-10">GIẢI PHÁP CỦA CHÚNG TÔI</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-[#1a5276] transition-colors">
                    {product.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Về chúng tôi */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a5276] mb-6">VỀ CHÚNG TÔI</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Được thành lập từ năm 2017, Linh Dương Company mang lại không gian sống tiện ích, tinh tế 
                và an lành cho mọi gia đình. Với đội ngũ kỹ thuật giàu kinh nghiệm và sự tận tâm trong mỗi dự án.
              </p>

              <h3 className="text-2xl font-bold text-[#1a5276] mb-4">CHẤT LƯỢNG SẢN PHẨM</h3>
              <p className="text-gray-600 leading-relaxed">
                Chúng tôi luôn tìm kiếm những công nghệ mới nhất từ các thương hiệu uy tín toàn cầu. 
                Tất cả sản phẩm đều được chứng nhận bởi các tổ chức quốc tế như NSF, WQA, TUV NORD, ISO, FDA...
              </p>
            </div>

            <div>
              <img
                src="https://ldcompany.vn/wp-content/uploads/2024/07/3-2.png"
                alt="Về Linh Dương Company"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality Banner */}
      <section className="relative h-[420px]">
        <img
          src="https://ldcompany.vn/wp-content/uploads/2024/07/a2-scaled.jpg"
          alt="Chất lượng sản phẩm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CHẤT LƯỢNG SẢN PHẨM</h2>
          <p className="max-w-2xl text-lg text-gray-200">
            Công nghệ hiện đại - Thương hiệu uy tín - An toàn tuyệt đối
          </p>
        </div>
      </section>

      {/* 6. Dự án đã thi công */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-10">DỰ ÁN ĐÃ THI CÔNG</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group relative overflow-hidden rounded-xl shadow-sm"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium leading-tight">{project.title}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/prj-cate/du-an"
              className="inline-block bg-[#1a5276] text-white px-10 py-3.5 rounded font-semibold hover:bg-[#154360] transition-colors"
            >
              Xem tất cả dự án →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Showroom */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-6">SHOWROOM LINH DƯƠNG COMPANY</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Showroom trưng bày thực tế các giải pháp lọc nước, nước nóng trung tâm, khí tươi và sưởi ấm dưới sàn. 
              Quý khách có thể trực tiếp trải nghiệm sản phẩm trước khi quyết định.
            </p>
            <a
              href="https://maps.app.goo.gl/65KezDh5BjxbZXjq6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a5276] text-white px-8 py-3.5 rounded font-semibold hover:bg-[#154360] transition-colors"
            >
              Xem vị trí Showroom
            </a>
          </div>
          <div>
            <img
              src="https://ldcompany.vn/wp-content/uploads/2024/06/4-min.jpg"
              alt="Showroom Linh Dương Company"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 8. Lý do chọn Linh Dương */}
      <section className="py-16 bg-[#eaf0fb]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a5276] mb-12 text-center">
            TẠI SAO NÊN CHỌN LINH DƯƠNG COMPANY?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={reason.icon}
                  alt={reason.title}
                  className="w-20 h-20 mx-auto mb-6 object-contain"
                />
                <h3 className="font-bold text-[#1a5276] mb-4 text-lg">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Tin tức & Khám phá */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1a5276] mb-10">KHÁM PHÁ</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-base leading-tight mb-3 group-hover:text-[#1a5276] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tin-tuc"
              className="inline-block bg-[#1a5276] text-white px-10 py-3.5 rounded font-semibold hover:bg-[#154360] transition-colors"
            >
              Xem thêm tin tức
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Form tư vấn */}
      <section className="relative py-24">
        <img
          src="https://ldcompany.vn/wp-content/uploads/2024/06/4-min-1400x656.jpg"
          alt="Đăng ký tư vấn miễn phí"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a5276]/85" />

        <div className="relative max-w-xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h2>
          
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Họ và tên *"
              className="w-full px-5 py-4 rounded bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Số điện thoại *"
              className="w-full px-5 py-4 rounded bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email (không bắt buộc)"
              className="w-full px-5 py-4 rounded bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder="Nội dung cần tư vấn..."
              rows={5}
              className="w-full px-5 py-4 rounded bg-white/95 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            />
            <button className="w-full bg-[#e74c3c] hover:bg-[#c0392b] py-4 rounded font-bold text-lg tracking-wider transition-colors">
              GỬI YÊU CẦU TƯ VẤN
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}