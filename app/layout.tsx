import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Linh Dương Company | Giải pháp lọc nước - Nước nóng - Khí tươi - Sưởi sàn",
    template: "%s | Linh Dương Company",
  },
  description: "Linh Dương Company - Đơn vị hàng đầu cung cấp giải pháp toàn diện: Lọc nước tổng, Nước nóng trung tâm Heat Pump, Cấp khí tươi và Sưởi ấm dưới sàn cao cấp tại Hà Nội.",
  keywords: [
    "lọc nước tổng", "máy lọc nước", "nước nóng trung tâm", "heat pump", 
    "sưởi ấm dưới sàn", "khí tươi", "komfovent", "sanden", "rheem", 
    "linh dương company", "hệ thống lọc nước gia đình"
  ],
  authors: [{ name: "Linh Dương Company" }],
  openGraph: {
    title: "Linh Dương Company - Giải pháp không gian sống cao cấp",
    description: "Cung cấp và thi công các giải pháp lọc nước, nước nóng, khí tươi & sưởi sàn cao cấp từ các thương hiệu hàng đầu thế giới.",
    images: [
      {
        url: "https://ldcompany.vn/wp-content/uploads/2024/07/3-1.png",
        width: 1200,
        height: 630,
        alt: "Linh Dương Company",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png", // nếu bạn có sau này
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-800 antialiased min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Optional: Back to top button */}
        {/* <BackToTop /> */}
      </body>
    </html>
  );
}