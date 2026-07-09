import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironpathconcrete.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact IronPath Concrete | Free Quotes in Waco & Central Texas',
  description:
    'Contact IronPath Concrete to schedule a free in-home estimate for hardwood, tile, LVP, carpet, commercial flooring, or repair. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 750-4400.',
  keywords: [
    'contact IronPath Waco',
    'flooring estimate Waco TX',
    'free flooring quote Central Texas',
    'IronPath contact',
    'licensed contractor Waco phone',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact IronPath Concrete | Free Quotes in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free on-site estimates. Flat-rate pricing, 5-Year Workmanship Warranty, licensed craftspeople.',
    url,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact IronPath Concrete | Waco & Central Texas',
    description: 'Schedule a free flooring estimate. Call (254) 750-4400.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
