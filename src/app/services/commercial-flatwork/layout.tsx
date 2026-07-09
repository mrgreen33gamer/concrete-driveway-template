import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Commercial Flatwork in Waco, TX | IronPath Concrete',
  description: 'Commercial flatwork in Waco, TX — pads, sidewalks, and light commercial slabs for PMs and municipalities. Insured, schedule-driven.',
  keywords: ["commercial concrete Waco TX","commercial flatwork Central Texas","sidewalk contractor Waco","property management concrete"],
  alternates: { canonical: `${BASE}/services/commercial-flatwork` },
  openGraph: {
    title: 'Commercial Flatwork | IronPath Concrete — Waco, TX',
    description: 'Commercial flatwork in Waco, TX — pads, sidewalks, and light commercial slabs for PMs and municipalities. Insured, schedule-driven.',
    url: `${BASE}/services/commercial-flatwork`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
