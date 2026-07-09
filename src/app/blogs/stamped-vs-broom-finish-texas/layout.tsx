import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: "Stamped vs. Broom Finish Concrete in Texas: Which Is Right? | IronPath Concrete",
  description: "Cost, traction, maintenance, and curb appeal — how to choose between stamped decorative concrete and classic broom finish for Central Texas outdoor slabs.",
  keywords: ["stamped vs broom finish","decorative concrete Texas","broom finish driveway Waco","stamped patio cost"],
  alternates: { canonical: `${BASE}/blogs/stamped-vs-broom-finish-texas` },
  openGraph: {
    title: "Stamped vs. Broom Finish Concrete in Texas: Which Is Right?",
    description: "Cost, traction, maintenance, and curb appeal — how to choose between stamped decorative concrete and classic broom finish for Central Texas outdoor slabs.",
    url: `${BASE}/blogs/stamped-vs-broom-finish-texas`,
    siteName: 'IronPath Concrete',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
