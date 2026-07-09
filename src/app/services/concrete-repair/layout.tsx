import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Concrete Repair in Waco, TX | IronPath Concrete',
  description: 'Concrete repair in Waco, TX — cracks, sections, and honest replace-vs-repair advice. Flat-rate quotes and workmanship warranty.',
  keywords: ["concrete repair Waco TX","driveway crack repair Waco","concrete leveling Central Texas","slab repair Hewitt"],
  alternates: { canonical: `${BASE}/services/concrete-repair` },
  openGraph: {
    title: 'Concrete Repair | IronPath Concrete — Waco, TX',
    description: 'Concrete repair in Waco, TX — cracks, sections, and honest replace-vs-repair advice. Flat-rate quotes and workmanship warranty.',
    url: `${BASE}/services/concrete-repair`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
