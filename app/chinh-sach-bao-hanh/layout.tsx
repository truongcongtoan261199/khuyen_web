import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo hành",
  description:
    "Chính sách bảo hành sản phẩm tại VIET HOME - Cam kết chất lượng, bảo hành chuyên nghiệp cho hệ thống lọc nước, nước nóng trung tâm, khí tươi và sưởi sàn.",
  openGraph: {
    title: "Chính sách bảo hành | VIET HOME",
    description:
      "Chính sách bảo hành minh bạch, chuyên nghiệp tại VIET HOME. Bảo hành trọn đời hệ thống lọc nước, 3-15 năm nước nóng trung tâm.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
