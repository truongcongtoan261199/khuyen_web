import { jsonLdBusiness, jsonLdOrganization } from "@/app/utils/seo";

export function StructuredDataBusiness() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdBusiness),
      }}
    />
  );
}

export function StructuredDataOrganization() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdOrganization),
      }}
    />
  );
}

export function StructuredDataProduct(product: {
  name: string;
  description: string;
  image: string;
  url: string;
  offers?: { price: string; currency: string; availability: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: "VIET HOME",
    },
    manufacturer: {
      "@type": "Organization",
      name: "VIET HOME",
    },
    ...(product.offers && { offers: product.offers }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function StructuredDataBreadcrumb(items: Array<{ name: string; url: string }>) {
  const breadcrumbItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
