import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm & Giải pháp - VIET HOME",
  description: "Các giải pháp cao cấp: Hệ thống lọc nước tổng, Nước nóng trung tâm Heat Pump, Cấp khí tươi và Sưởi ấm dưới sàn từ các thương hiệu hàng đầu thế giới.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
