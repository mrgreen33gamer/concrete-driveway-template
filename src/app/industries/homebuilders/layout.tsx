import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Homebuilders Concrete Contractor | IronPath Concrete — Waco, TX',
  description: 'Concrete partner for homebuilders in Waco and Central Texas — foundations and flatwork on production schedules.',
  alternates: { canonical: `${BASE}/industries/homebuilders` },
  openGraph: {
    title: 'Homebuilders | IronPath Concrete',
    description: 'Concrete partner for homebuilders in Waco and Central Texas — foundations and flatwork on production schedules.',
    url: `${BASE}/industries/homebuilders`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
