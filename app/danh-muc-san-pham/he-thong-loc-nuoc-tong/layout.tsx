import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hệ Thống Lọc Nước Tổng - VIET HOME",
  description: "Giải pháp lọc nước tổng gia đình cao cấp từ Green Water Việt Nam, KalyxX Home Thụy Sỹ và Clack Mỹ. Lọc sạch toàn bộ nước sinh hoạt trong nhà.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
