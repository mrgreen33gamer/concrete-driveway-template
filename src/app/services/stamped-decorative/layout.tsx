import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Stamped & Decorative Concrete in Waco, TX | IronPath Concrete',
  description: 'Stamped and decorative concrete in Waco, TX. Patterns, color, and sealed finishes with flat-rate quotes and 5-Year Workmanship Warranty.',
  keywords: ["stamped concrete Waco TX","decorative concrete patio Waco","colored concrete Central Texas","stamped driveway Temple"],
  alternates: { canonical: `${BASE}/services/stamped-decorative` },
  openGraph: {
    title: 'Stamped & Decorative Concrete | IronPath Concrete — Waco, TX',
    description: 'Stamped and decorative concrete in Waco, TX. Patterns, color, and sealed finishes with flat-rate quotes and 5-Year Workmanship Warranty.',
    url: `${BASE}/services/stamped-decorative`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
