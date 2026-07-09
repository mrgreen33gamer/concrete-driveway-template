import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Foundations in Waco, TX | IronPath Concrete',
  description: 'Residential and light commercial foundation concrete in Waco, TX. Plan-driven pours, builder scheduling, ACI-trained finishers, 5-Year Workmanship Warranty.',
  keywords: ["concrete foundation Waco TX","slab foundation pour Central Texas","home foundation concrete Waco","builder foundation contractor"],
  alternates: { canonical: `${BASE}/services/foundations` },
  openGraph: {
    title: 'Foundations | IronPath Concrete — Waco, TX',
    description: 'Residential and light commercial foundation concrete in Waco, TX. Plan-driven pours, builder scheduling, ACI-trained finishers, 5-Year Workmanship Warranty.',
    url: `${BASE}/services/foundations`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
