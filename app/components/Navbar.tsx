"use client";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    children: [
      {
        label: "Hệ thống lọc nước tổng",
        href: "/danh-muc-san-pham/he-thong-loc-nuoc-tong",
        children: [
          { label: "Lọc Nước Tổng DropConnect", href: "/san-pham/loc-nuoc-tong-dropconnect" },
          { label: "Lọc Nước Tổng RainSoft", href: "/san-pham/loc-nuoc-tong-rainsoft" },
        ],
      },
      {
        label: "Hệ thống nước nóng trung tâm",
        href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
        children: [
          { label: "Máy nước nóng trung tâm Heat Pump SANDEN Nhật Bản", href: "/san-pham/nuoc-nong-sanden" },
          { label: "Máy nước nóng trung tâm Heat Pump Rheem Úc", href: "/san-pham/nuoc-nong-rheem" },
        ],
      },
      {
        label: "Hệ thống lọc và cấp khí tươi",
        href: "/danh-muc-san-pham/he-thong-loc-va-cap-khi-tuoi",
        children: [
          { label: "Khí Tươi Komfovent", href: "/san-pham/khi-tuoi-komfovent" },
        ],
      },
      {
        label: "Hệ thống sưởi ấm dưới sàn",
        href: "/danh-muc-san-pham/he-thong-suoi-am-duoi-san",
        children: [
          { label: "Hệ Thống Sưởi Sàn Warmup", href: "https://www.warmup.com/vn", external: true },
        ],
      },
    ],
  },
  { label: "Dự án", href: "/prj-cate/du-an" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Xử lý hover trên desktop
  const handleMouseEnter = (label: string) => setActiveDropdown(label);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://ldcompany.vn/wp-content/uploads/2024/07/logo-LD.png"
            alt="LINH DƯƠNG COMPANY"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="px-5 py-6 text-sm font-medium text-gray-700 hover:text-[#1a5276] transition-colors flex items-center gap-1 relative"
              >
                {item.label}
                {item.children && (
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Mega Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                  <div className="bg-white shadow-xl border border-gray-100 rounded-xl py-2 min-w-[700px] grid grid-cols-2 gap-x-8 px-8">
                    {item.children.map((category) => (
                      <div key={category.label} className="py-4">
                        <Link
                          href={category.href}
                          className="block font-semibold text-[#1a5276] hover:text-[#154360] pb-3 border-b border-gray-200 text-base"
                        >
                          {category.label}
                        </Link>
                        
                        <div className="mt-3 space-y-1">
                          {category.children?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              target={sub.external ? "_blank" : undefined}
                              rel={sub.external ? "noopener noreferrer" : undefined}
                              className="block py-2.5 px-3 text-sm text-gray-600 hover:bg-[#f8fafc] hover:text-[#1a5276] rounded-lg transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hotline Desktop */}
        <div className="hidden lg:flex items-center gap-2 text-sm">
          <span className="text-gray-500">Hotline:</span>
          <a href="tel:0968034333" className="font-semibold text-[#1a5276] hover:text-red-600 transition-colors">
            0968.034.333
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#1a5276] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="mb-2">
              <Link
                href={item.href}
                className="block py-3 px-4 font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>

              {item.children && (
                <div className="pl-6 mt-1 space-y-1">
                  {item.children.map((category) => (
                    <div key={category.label}>
                      <Link
                        href={category.href}
                        className="block py-2 text-sm font-medium text-[#1a5276]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {category.label}
                      </Link>
                      {category.children?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          target={sub.external ? "_blank" : undefined}
                          rel={sub.external ? "noopener noreferrer" : undefined}
                          className="block py-2 pl-4 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          • {sub.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Hotline trong mobile menu */}
          <div className="mt-6 px-4 py-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Liên hệ ngay</p>
            <a href="tel:0968034333" className="text-lg font-semibold text-[#1a5276]">
              0968.034.333
            </a>
            <a href="tel:0919194588" className="block text-lg font-semibold text-[#1a5276] mt-1">
              0919.194.588
            </a>
          </div>
        </div>
      )}
    </header>
  );
}