import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Property Management Concrete Contractor | IronPath Concrete — Waco, TX',
  description: 'Concrete repair and flatwork for property management companies in Waco and Central Texas.',
  alternates: { canonical: `${BASE}/industries/property-management` },
  openGraph: {
    title: 'Property Management | IronPath Concrete',
    description: 'Concrete repair and flatwork for property management companies in Waco and Central Texas.',
    url: `${BASE}/industries/property-management`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
