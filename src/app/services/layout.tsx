import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Concrete Services | IronPath Concrete — Waco, TX',
  description:
    'IronPath Concrete offers driveways, patios & walkways, foundations, stamped & decorative concrete, concrete repair, and commercial flatwork for Waco and Central Texas. ACI-trained finishers, 5-Year Workmanship Warranty.',
  keywords: [
    'concrete services Waco TX',
    'concrete driveway Waco',
    'patio concrete Central Texas',
    'foundation pour Waco',
    'stamped concrete Waco',
    'concrete repair Waco',
    'commercial flatwork Central Texas',
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: 'Concrete Services | IronPath Concrete',
    description:
      'Driveways, patios, foundations, decorative pours, repairs, and commercial flatwork for Waco and Central Texas.',
    url: `${BASE}/services`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
