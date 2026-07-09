import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Municipalities & Public Works Concrete Contractor | IronPath Concrete — Waco, TX',
  description: 'Municipal and public-works concrete flatwork in Central Texas — sidewalks, pads, and schedule-driven crews.',
  alternates: { canonical: `${BASE}/industries/municipalities` },
  openGraph: {
    title: 'Municipalities & Public Works | IronPath Concrete',
    description: 'Municipal and public-works concrete flatwork in Central Texas — sidewalks, pads, and schedule-driven crews.',
    url: `${BASE}/industries/municipalities`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
