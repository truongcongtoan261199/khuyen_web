import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu - VIET HOME",
  description: "Tìm hiểu về VIET HOME - Đơn vị chuyên cung cấp giải pháp lọc nước tổng, nước nóng trung tâm, khí tươi và sưởi ấm dưới sàn cao cấp tại Hà Nội.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
