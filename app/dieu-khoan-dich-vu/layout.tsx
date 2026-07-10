import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản dịch vụ",
  description:
    "Điều khoản dịch vụ tại VIET HOME - Quyền và nghĩa vụ khách hàng, chính sách thanh toán, phạm vi dịch vụ lọc nước, nước nóng trung tâm, khí tươi & sưởi sàn.",
  openGraph: {
    title: "Điều khoản dịch vụ | VIET HOME",
    description:
      "Điều khoản dịch vụ minh bạch tại VIET HOME - Cam kết chất lượng, hỗ trợ kỹ thuật chuyên nghiệp.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
