import type { Metadata } from "next";
import HomePage from "./components/HomePage";
import { generateMetadata } from "./utils/seo";

export const metadata: Metadata = generateMetadata(
  "VIET HOME | Giải pháp lọc nước - Nước nóng - Khí tươi - Sưởi sàn",
  "VIET HOME - Đơn vị hàng đầu cung cấp giải pháp toàn diện: Lọc nước tổng, Nước nóng trung tâm Heat Pump, Cấp khí tươi và Sưởi ấm dưới sàn cao cấp tại Hà Nội.",
  "/",
  "#",
  [
    "heat pump",
    "lọc nước gia đình",
    "sanden",
    "rheem",
    "komfovent",
    "warmup"
  ]
);

export default function Home() {
  return <HomePage />;
}