import type { Metadata } from "next";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  title: "Linh Dương Company | Giải pháp lọc nước - Nước nóng - Khí tươi - Sưởi sàn",
  description: "Chuyên cung cấp và thi công giải pháp toàn diện: Lọc nước tổng, Nước nóng trung tâm Heat Pump Sanden & Rheem, Cấp khí tươi Komfovent, Sưởi ấm dưới sàn Warmup tại Hà Nội.",
  keywords: [
    "lọc nước tổng", "nước nóng trung tâm", "heat pump sanden", "heat pump rheem",
    "khí tươi komfovent", "sưởi ấm dưới sàn", "linh dương company", "lọc nước gia đình cao cấp"
  ],
  alternates: {
    canonical: "https://ldcompany.vn",
  },
};

export default function Home() {
  return <HomePage />;
}