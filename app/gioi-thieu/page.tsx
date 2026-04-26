import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu - Linh Dương Company",
  description: "Tìm hiểu về Linh Dương Company - Đơn vị chuyên cung cấp giải pháp lọc nước tổng, nước nóng trung tâm, khí tươi và sưởi ấm dưới sàn cao cấp tại Hà Nội.",
};

export default function GioiThieuPage() {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] bg-[#1a5276] flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GIỚI THIỆU</h1>
          <p className="text-xl text-gray-200">Về Linh Dương Company</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Giới thiệu về công ty */}
        <section className="mb-20">
          <h2 className="section-title text-left">GIỚI THIỆU VỀ CÔNG TY LINH DƯƠNG</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Linh Dương Company là nhà phân phối sản phẩm và chuyển giao công nghệ trong lĩnh vực nước và năng lượng tại Việt Nam. 
              Được thành lập năm 2017 bởi Kỹ sư Trịnh Xuân Dương và Kỹ sư Trần Công Linh.
            </p>
            <p>
              Với hơn 7 năm kinh nghiệm, chúng tôi tự hào cung cấp các giải pháp toàn diện: 
              <strong> Lọc nước tổng, Nước nóng trung tâm, Cấp khí tươi và Sưởi ấm dưới sàn </strong> 
              từ các thương hiệu hàng đầu thế giới như RainSoft, DropConnect, Sanden, Rheem, Komfovent, Warmup...
            </p>
            <p>
              Tất cả sản phẩm đều được nhập khẩu 100% chính hãng với chứng nhận quốc tế: 
              NSF, WQA, TUV NORD, ISO, FDA...
            </p>
          </div>
        </section>

        {/* Lĩnh vực hoạt động */}
        <section className="mb-20">
          <h2 className="section-title text-left">LĨNH VỰC HOẠT ĐỘNG</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-4">Giải pháp Nước</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Hệ thống lọc nước tổng gia đình</li>
                <li>• Máy lọc nước uống trực tiếp</li>
                <li>• Hệ thống nước nóng trung tâm Heat Pump</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1a5276] mb-4">Giải pháp Không khí & Năng lượng</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Hệ thống cấp khí tươi hồi nhiệt</li>
                <li>• Hệ thống sưởi ấm dưới sàn</li>
                <li>• Giải pháp thông gió và kiểm soát độ ẩm</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tầm nhìn & Sứ mệnh */}
        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-6">TẦM NHÌN</h2>
            <p className="text-gray-700 leading-relaxed">
              Trở thành đơn vị tư vấn và cung cấp giải pháp hàng đầu Việt Nam trong phân khúc cao cấp về nước sạch, nước nóng và không khí trong lành.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1a5276] mb-6">SỨ MỆNH</h2>
            <p className="text-gray-700 leading-relaxed">
              Mang đến cho khách hàng những giải pháp tiên tiến, bền vững, góp phần nâng cao chất lượng cuộc sống và bảo vệ môi trường.
            </p>
          </div>
        </section>

        {/* Giá trị cốt lõi */}
        <section className="mb-20">
          <h2 className="section-title text-left">GIÁ TRỊ CỐT LÕI</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Chất lượng & Độ bền",
              "Sáng tạo & Tiên tiến",
              "Tận tụy & Trách nhiệm",
              "Bền vững & Bảo vệ môi trường"
            ].map((value, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8 rounded-2xl text-center hover:border-[#1a5276] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1a5276]/10 rounded-full flex items-center justify-center text-3xl">
                  {i === 0 && "⭐"}
                  {i === 1 && "💡"}
                  {i === 2 && "🤝"}
                  {i === 3 && "🌱"}
                </div>
                <h3 className="font-semibold text-lg text-[#1a5276]">{value}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Form đăng ký tư vấn */}
        <section className="bg-[#1a5276] text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4">ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h2>
          <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn giải pháp phù hợp nhất cho ngôi nhà của bạn.
          </p>
          {/* Bạn có thể reuse form từ HomePage hoặc tạo component riêng sau */}
          <div className="max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Họ và tên *" className="w-full px-6 py-4 rounded-lg text-gray-900" />
            <input type="tel" placeholder="Số điện thoại *" className="w-full px-6 py-4 rounded-lg text-gray-900" />
            <button className="w-full bg-[#e74c3c] hover:bg-red-700 py-4 rounded-lg font-bold text-lg transition-colors">
              GỬI YÊU CẦU
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}