// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironpathconcrete.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Builders, Designers & Hospitality | IronPath Concrete",
  description:
    "IronPath Concrete builds concrete and flatwork programs for homebuilders and developers, interior designers, and commercial and hospitality groups across Central Texas.",
  keywords: [
    "homebuilder concrete Waco",
    "interior designer flatwork Central Texas",
    "hospitality flatwork Waco TX",
    "commercial concretery property managers",
    "production concrete builder Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | IronPath Concrete — Waco, TX",
    description:
      "Concretery programs for builders, designers, and hospitality groups across Central Texas.",
    url,
    siteName: "IronPath Concrete",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | IronPath Concrete",
    description: "Concretery programs for builders, designers, and hospitality groups across Central Texas.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
