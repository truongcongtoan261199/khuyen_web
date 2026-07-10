"use client";
import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavSubItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavCategory {
  label: string;
  href: string;
  children?: NavSubItem[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavCategory[];
}

const navItems: NavItem[] = [
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
          { label: "Lọc Nước Tổng Việt Nam", href: "/san-pham/loc-nuoc-tong-green-water" },
          { label: "Lọc Nước Tổng Công Nghệ Từ Trường", href: "/san-pham/loc-nuoc-tong-kalyxx" },
          { label: "Lọc Nước Tổng Clack Mỹ", href: "/san-pham/loc-nuoc-tong-clack" },
        ],
      },
      {
        label: "Hệ thống nước nóng trung tâm",
        href: "/danh-muc-san-pham/he-thong-nuoc-nong-trung-tam",
        children: [
          { label: "Máy Nước Nóng Tổng Heatpump Ammu", href: "/san-pham/nuoc-nong-trung-tam-ammu" },
          { label: " Máy Nước Nóng Tổng Heatpump Eminent", href: "/san-pham/nuoc-nong-trung-tam-eminent" },
          { label: "Máy nước nóng trung tâm Heat Pump Rheem", href: "/san-pham/nuoc-nong-trung-tam-rheem" },
        ],
      },
    ],
  },
  { label: "Dự án", href: "/prj-cate/du-an" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = useCallback((label: string) => {
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const memoNavItems = useMemo(() => navItems, []);

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/logo.jpg"
            alt="VIET HOME"
            width={180}
            height={64}
            priority
            className="object-contain h-16 transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {memoNavItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`px-5 py-6 text-sm font-medium transition-all duration-300 flex items-center gap-1 relative
                  ${isActive(item.href)
                    ? "text-[#1a5276]"
                    : "text-gray-700 hover:text-[#1a5276]"
                  }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {/* Underline effect */}
                <span
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 bg-[#1a5276] transition-all duration-300
                    ${isActive(item.href) ? "w-6" : "w-0 group-hover:w-6"}`}
                />
              </Link>

              {/* Mega Dropdown với animation */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <div
                    className="bg-white shadow-2xl border border-gray-100 rounded-2xl py-6 px-8 min-w-[720px] 
                               opacity-0 scale-95 translate-y-2 transition-all duration-300
                               group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0"
                  >
                    <div className="grid grid-cols-2 gap-x-10">
                      {item.children.map((category) => (
                        <div key={category.label} className="py-2">
                          <Link
                            href={category.href}
                            className="block font-semibold text-[#1a5276] hover:text-[#154360] pb-4 border-b border-gray-200 text-base transition-colors"
                          >
                            {category.label}
                          </Link>
                          <div className="mt-4 space-y-1">
                            {category.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                target={sub.external ? "_blank" : undefined}
                                rel={sub.external ? "noopener noreferrer" : undefined}
                                className="block py-2.5 px-3 text-sm text-gray-600 hover:bg-[#f8fafc] hover:text-[#1a5276] rounded-xl transition-all duration-200"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hotline Desktop */}
        <div className="hidden lg:flex items-center gap-3 text-sm">
          <span className="text-gray-500">Hotline:</span>
          <a
            href="tel:0377778513"
            className="font-semibold text-[#1a5276] hover:text-red-600 transition-colors"
          >
            0377.778.513
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-3 text-gray-700 hover:text-[#1a5276] transition-colors"
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

      {/* Mobile Menu với animation */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />

          <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-100 shadow-xl z-50 max-h-[calc(100vh-5rem)] overflow-y-auto animate-slideDown">
            <div className="px-6 py-8 space-y-6">
              {memoNavItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-6 last:border-none last:pb-0">
                  <Link
                    href={item.href}
                    className={`block py-3 text-lg font-medium transition-colors ${isActive(item.href) ? "text-[#1a5276]" : "text-gray-800"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div className="pl-4 mt-3 space-y-4">
                      {item.children.map((category) => (
                        <div key={category.label}>
                          <Link
                            href={category.href}
                            className="block py-2 font-medium text-[#1a5276]"
                            onClick={() => setMobileOpen(false)}
                          >
                            {category.label}
                          </Link>
                          <div className="pl-4 space-y-2 mt-2">
                            {category.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                target={sub.external ? "_blank" : undefined}
                                rel={sub.external ? "noopener noreferrer" : undefined}
                                className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                • {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Hotline trong mobile */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-gray-500 mb-3">Liên hệ ngay qua hotline</p>
                <div className="space-y-3">
                  <a href="tel:0377778513" className="block text-2xl font-semibold text-[#1a5276]">
                    0377.778.513
                  </a>
                  <a href="tel:0919194588" className="block text-2xl font-semibold text-[#1a5276]">
                    0377778513
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}