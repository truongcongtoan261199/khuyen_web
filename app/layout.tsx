import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { StructuredDataOrganization, StructuredDataBusiness } from "./components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "VIET HOME | Giải pháp lọc nước - Nước nóng - Khí tươi - Sưởi sàn",
    template: "%s | VIET HOME",
  },
  description: "VIET HOME - Đơn vị hàng đầu cung cấp giải pháp toàn diện: Lọc nước tổng, Nước nóng trung tâm Heat Pump, Cấp khí tươi và Sưởi ấm dưới sàn cao cấp tại Hà Nội.",
  keywords: [
    "lọc nước tổng", "máy lọc nước", "nước nóng trung tâm", "heat pump",
    "sưởi ấm dưới sàn", "khí tươi", "komfovent", "sanden", "rheem",
    "VIET HOME", "hệ thống lọc nước gia đình"
  ],
  authors: [{ name: "VIET HOME" }],
  creator: "VIET HOME",
  publisher: "VIET HOME",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "VIET HOME - Giải pháp không gian sống cao cấp",
    description: "Cung cấp và thi công các giải pháp lọc nước, nước nóng, khí tươi & sưởi sàn cao cấp từ các thương hiệu hàng đầu thế giới.",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIET HOME - Giải pháp không gian sống cao cấp",
    description: "Cung cấp và thi công giải pháp lọc nước, nước nóng, khí tươi & sưởi sàn",
  },
  icons: {
    icon: "/favicon.ico",
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
      <head>
        <StructuredDataOrganization />
        <StructuredDataBusiness />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-white text-gray-800 antialiased min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}