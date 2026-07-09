import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: "How Long Before You Can Drive on New Concrete? | IronPath Concrete",
  description: "A practical cure timeline for Central Texas driveways — foot traffic, cars, and heavy vehicles — plus weather factors that change the clock.",
  keywords: ["drive on new concrete","concrete cure time driveway","how long before drive on concrete Waco","concrete driveway curing Texas"],
  alternates: { canonical: `${BASE}/blogs/how-long-before-drive-on-new-concrete` },
  openGraph: {
    title: "How Long Before You Can Drive on New Concrete?",
    description: "A practical cure timeline for Central Texas driveways — foot traffic, cars, and heavy vehicles — plus weather factors that change the clock.",
    url: `${BASE}/blogs/how-long-before-drive-on-new-concrete`,
    siteName: 'IronPath Concrete',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
