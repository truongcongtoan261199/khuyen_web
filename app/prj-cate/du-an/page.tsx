import type { Metadata } from "next";
import DuAnClient from "./DuAnClient";

export const metadata: Metadata = {
  title: "Dự án đã thi công - VIET HOME",
  description:
    "Các công trình thực tế mà VIET HOME đã thi công: biệt thự, nhà phố cao cấp tại Hà Nội, Hải Dương, Vĩnh Phúc, Nghệ An...",
};

export default function DuAnPage() {
  return <DuAnClient />;
}