import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viethomesolutions.vn";
const siteName = "VIET HOME";

export function generateMetadata(
  title: string,
  description: string,
  path: string = "",
  image?: string,
  additionalKeywords?: string[]
): Metadata {
  const keywords = [
    "lọc nước tổng",
    "máy lọc nước",
    "nước nóng trung tâm",
    "heat pump",
    "sưởi ấm dưới sàn",
    "khí tươi",
    "VIET HOME",
    ...(additionalKeywords || []),
  ];

  const url = `${siteUrl}${path}`;
  const ogImage = image || "https://viethomesolutions.vn/wp-content/uploads/2024/07/3-1.png";

  return {
    title,
    description,
    keywords,
    authors: [{ name: "VIET HOME" }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
      locale: "vi_VN",
      type: "website",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function generateStructuredData(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      ...data,
    }),
  };
}

export const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VIET HOME",
  image: "https://viethomesolutions.vn/wp-content/uploads/2024/07/3-1.png",
  description:
    "Đơn vị hàng đầu cung cấp giải pháp toàn diện: Lọc nước tổng, Nước nóng trung tâm Heat Pump, Cấp khí tươi và Sưởi ấm dưới sàn cao cấp tại Hà Nội.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Tầng 2, Tòa nhà Hoàng Thành, B6 Lô B, Ô đất D4, KĐT mới Cầu Giấy",
    addressLocality: "Hà Nội",
    addressRegion: "Hà Nội",
    postalCode: "100000",
    addressCountry: "VN",
  },
  telephone: "+84968034333",
  url: siteUrl,
  sameAs: [],
  openingHours: "Mo-Su 08:00-18:00",
};

export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VIET HOME",
  url: siteUrl,
  logo: "https://viethomesolutions.vn/wp-content/uploads/2024/07/logo.jpg",
  description:
    "Cung cấp và thi công giải pháp lọc nước, nước nóng, khí tươi & sưởi sàn cao cấp",
  foundingDate: "2020",
  founder: "VIET HOME",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Tầng 2, Tòa nhà Hoàng Thành, B6 Lô B, Ô đất D4, KĐT mới Cầu Giấy",
    addressLocality: "Hà Nội",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+84968034333",
    contactType: "Customer Support",
  },
};
