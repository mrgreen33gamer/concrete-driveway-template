import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Service Areas | IronPath Concrete — Waco, Temple, Killeen & Central Texas',
  description:
    'IronPath Concrete serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and Central Texas. Free on-site estimates. Flat-rate quotes.',
  alternates: { canonical: `${BASE}/service-areas` },
  openGraph: {
    title: 'Service Areas | IronPath Concrete',
    description: 'Concrete driveways, patios, foundations, and flatwork across Central Texas.',
    url: `${BASE}/service-areas`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
