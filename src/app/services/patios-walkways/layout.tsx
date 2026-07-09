import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Patios & Walkways in Waco, TX | IronPath Concrete',
  description: 'Concrete patios and walkways in Waco, TX. Drainage-smart layouts, clean finishes, flat-rate quotes, 5-Year Workmanship Warranty.',
  keywords: ["concrete patio Waco TX","sidewalk installation Waco","walkway concrete Central Texas","patio slab Hewitt TX"],
  alternates: { canonical: `${BASE}/services/patios-walkways` },
  openGraph: {
    title: 'Patios & Walkways | IronPath Concrete — Waco, TX',
    description: 'Concrete patios and walkways in Waco, TX. Drainage-smart layouts, clean finishes, flat-rate quotes, 5-Year Workmanship Warranty.',
    url: `${BASE}/services/patios-walkways`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
