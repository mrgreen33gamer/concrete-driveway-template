import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'About IronPath Concrete | Waco Concrete Contractor Since 2008',
  description:
    'IronPath Concrete is a locally owned Waco concrete contractor founded in 2008 by Ray Delgado. ACI-trained finishers, bonded & insured, 5-Year Workmanship Warranty. 4,000+ pours across Central Texas.',
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'About IronPath Concrete | Waco, TX',
    description:
      'Locally owned since 2008. Driveways, patios, foundations, and commercial flatwork for Central Texas.',
    url: `${BASE}/about`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
