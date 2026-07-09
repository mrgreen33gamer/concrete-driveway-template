import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: 'Concrete Driveways in Waco, TX | IronPath Concrete',
  description: 'Concrete driveway installation and replacement in Waco, TX. Proper base prep, flat-rate quotes, ACI-trained finishers, 5-Year Workmanship Warranty.',
  keywords: ["concrete driveway Waco TX","driveway installation Waco","new concrete driveway Central Texas","driveway replacement Hewitt","broom finish driveway Woodway"],
  alternates: { canonical: `${BASE}/services/driveways` },
  openGraph: {
    title: 'Concrete Driveways | IronPath Concrete — Waco, TX',
    description: 'Concrete driveway installation and replacement in Waco, TX. Proper base prep, flat-rate quotes, ACI-trained finishers, 5-Year Workmanship Warranty.',
    url: `${BASE}/services/driveways`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
