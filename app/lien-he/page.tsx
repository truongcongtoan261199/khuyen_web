import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ - Linh Dương Company",
  description: "Liên hệ với Linh Dương Company để được tư vấn miễn phí về lọc nước, nước nóng trung tâm, khí tươi và sưởi ấm dưới sàn.",
};

export default function LienHePage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[380px] bg-[#1a5276] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">LIÊN HỆ</h1>
          <p className="text-xl text-gray-200">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-8">THÔNG TIN LIÊN HỆ</h2>

            <div className="space-y-8">
              {/* Địa chỉ */}
              <div className="flex gap-5">
                <div className="text-4xl text-[#3498db] mt-1">📍</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office & Showroom</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tầng 2, Tòa nhà Hoàng Thành, B6 Lô B, Ô đất D4,<br />
                    KĐT mới Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội.
                  </p>
                </div>
              </div>

              {/* Thời gian */}
              <div className="flex gap-5">
                <div className="text-4xl text-[#3498db] mt-1">🕒</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Thời gian làm việc</h3>
                  <p className="text-gray-600">
                    8h00 - 18h00<br />
                    (Kể cả Thứ 7 và Chủ Nhật)
                  </p>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex gap-5">
                <div className="text-4xl text-[#3498db] mt-1">☎️</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hotline tư vấn & hỗ trợ</h3>
                  <div className="space-y-2">
                    <a href="tel:0968034333" className="block text-2xl font-bold text-[#1a5276] hover:text-red-600 transition-colors">
                      0968.034.333
                    </a>
                    <a href="tel:0919194588" className="block text-2xl font-bold text-[#1a5276] hover:text-red-600 transition-colors">
                      0919.194.588
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="pt-6">
                <a 
                  href="https://maps.app.goo.gl/mQuXt1vN2LvwH4Fs6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a5276] text-white px-6 py-3 rounded-lg hover:bg-[#154360] transition-colors"
                >
                  Xem vị trí trên Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form liên hệ */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-[#1a5276] mb-8">GỬI THÔNG TIN LIÊN HỆ</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a5276]" 
                    placeholder="Nhập họ và tên"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a5276]" 
                    placeholder="Nhập số điện thoại"
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a5276]" 
                  placeholder="Nhập email của bạn"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dịch vụ quan tâm</label>
                <select className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a5276]">
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
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a5276] resize-y"
                  placeholder="Viết nội dung bạn cần tư vấn..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold py-4 rounded-xl text-lg transition-colors duration-200"
              >
                GỬI THÔNG TIN
              </button>

              <p className="text-xs text-gray-500 text-center">
                Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bản đồ Google Maps */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9999999999995!2d105.785!3d21.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAyJzA2LjAiTiAxMDXCsDQ3JzA2LjAiRQ!5e0!3m2!1svi!2s!4v1720000000000" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}