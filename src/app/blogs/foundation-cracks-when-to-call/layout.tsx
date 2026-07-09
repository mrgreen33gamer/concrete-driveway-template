import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: "Foundation Cracks: When to Call a Concrete Pro in Waco | IronPath Concrete",
  description: "Hairline vs structural cracks, Texas clay movement, and when a crack is a DIY watch-item versus a call-a-pro situation for Central Texas homes.",
  keywords: ["foundation cracks Waco","when to worry about foundation cracks","concrete foundation repair Central Texas","slab cracks Texas clay"],
  alternates: { canonical: `${BASE}/blogs/foundation-cracks-when-to-call` },
  openGraph: {
    title: "Foundation Cracks: When to Call a Concrete Pro in Waco",
    description: "Hairline vs structural cracks, Texas clay movement, and when a crack is a DIY watch-item versus a call-a-pro situation for Central Texas homes.",
    url: `${BASE}/blogs/foundation-cracks-when-to-call`,
    siteName: 'IronPath Concrete',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
