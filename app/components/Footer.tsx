import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2636] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Cột 1: Thông tin công ty */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
            LINH DƯƠNG COMPANY
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-[#3498db] mt-0.5 text-lg">📍</span>
              <span>
                Office & Showroom: Tầng 2, Tòa nhà Hoàng Thành, B6 Lô B, Ô đất D4, 
                KĐT mới Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3498db] mt-0.5 text-lg">🕒</span>
              <span>Thời gian mở cửa: 8h00 - 18h00 (Kể cả Thứ 7 & Chủ Nhật)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#3498db] mt-0.5 text-lg">🅿️</span>
              <span>Có vị trí đỗ xe ô tô rộng rãi</span>
            </li>
          </ul>

          <a 
            href="https://maps.app.goo.gl/mQuXt1vN2LvwH4Fs6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-[#3498db] hover:text-[#5dade2] hover:underline transition-colors"
          >
            Xem trên Google Maps →
          </a>
        </div>

        {/* Cột 2: Thông tin liên hệ */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
            THÔNG TIN LIÊN HỆ
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Hotline 1:{" "}
              <a href="tel:0968034333" className="text-white font-semibold hover:text-[#3498db] transition-colors">
                0968.034.333
              </a>
            </li>
            <li>
              Hotline 2:{" "}
              <a href="tel:0919194588" className="text-white font-semibold hover:text-[#3498db] transition-colors">
                091.919.4588
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Dịch vụ */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
            DỊCH VỤ CỦA CHÚNG TÔI
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Giải pháp lọc nước tổng", href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong" },
              { label: "Giải pháp nước nóng trung tâm", href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam" },
              { label: "Giải pháp cung cấp khí tươi", href: "/danh-muc-san-pham/he-thong-loc-va-cap-khi-tuoi" },
              { label: "Giải pháp sưởi ấm dưới sàn", href: "/danh-muc-san-pham/he-thong-suoi-am-duoi-san" },
            ].map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href} 
                  className="hover:text-white hover:underline transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột 4: Hỗ trợ khách hàng */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
            HỖ TRỢ KHÁCH HÀNG
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chinh-sach-bao-hanh" className="hover:text-white hover:underline transition-colors duration-200">
                Chính sách bảo hành
              </Link>
            </li>
            <li>
              <Link href="/dieu-khoan-dich-vu" className="hover:text-white hover:underline transition-colors duration-200">
                Điều khoản dịch vụ
              </Link>
            </li>
            {/* Bạn có thể thêm các link khác nếu website có: Chính sách đổi trả, Hướng dẫn thanh toán, v.v. */}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Linh Dương Company. All rights reserved.
      </div>
    </footer>
  );
}