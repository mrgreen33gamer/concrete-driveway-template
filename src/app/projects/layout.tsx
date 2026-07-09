import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Projects Gallery | IronPath Concrete — Waco, TX',
  description:
    'Concrete project gallery by IronPath Concrete across Central Texas — driveways, patios, foundations, stamped & decorative pours, repairs, and commercial flatwork in Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: `${BASE}/projects` },
  openGraph: {
    title: 'Projects Gallery | IronPath Concrete',
    description:
      'A portfolio of driveways, patios, foundations, decorative concrete, repairs, and commercial flatwork completed by IronPath Concrete across Central Texas.',
    url: `${BASE}/projects`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
