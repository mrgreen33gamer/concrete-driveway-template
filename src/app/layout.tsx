// src/app/layout.tsx
// IronPath Concrete — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#1c1410' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Anton, Archivo, Work_Sans } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Archivo({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Work_Sans({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.ironpathconcrete.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#292524" },
    { media: "(prefers-color-scheme: dark)",  color: "#292524" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IronPath Concrete | Driveways, Patios & Foundations — Waco, TX",
    template: "%s | IronPath Concrete",
  },
  description:
    "IronPath Concrete is a Waco, TX concrete contractor offering driveways, patios & walkways, foundations, stamped & decorative concrete, concrete repair, and commercial flatwork for Central Texas homes and businesses. ACI-trained finishers, bonded & insured, 5-Year Workmanship Warranty.",
  keywords: [
    "IronPath Concrete",
    "concrete contractor Waco TX",
    "concrete driveway Waco Texas",
    "patio concrete Central Texas",
    "foundation pour Waco TX",
    "stamped concrete Waco",
    "concrete repair Hewitt TX",
    "commercial flatwork Waco",
    "concrete company Temple Killeen",
  ],
  authors: [{ name: "IronPath Concrete", url: BASE_URL }],
  creator: "IronPath Concrete",
  publisher: "IronPath Concrete",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "IronPath Concrete | Driveways, Patios & Foundations — Waco, TX",
    description:
      "Waco-based concrete contractor for driveways, patios, foundations, decorative pours, repairs, and commercial flatwork across Central Texas. ACI-trained, bonded & insured. 5-Year Workmanship Warranty.",
    url: BASE_URL,
    siteName: "IronPath Concrete",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 4000,
        height: 630,
        alt: "IronPath Concrete — Waco TX Driveways · Patios · Foundations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronPath Concrete | Waco TX Concrete Contractor",
    description:
      "Driveways, patios, foundations, stamped concrete & commercial flatwork for Central Texas. ACI-trained · 5-Year Workmanship Warranty.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "IronPath Concrete",
  alternateName: "IronPath Concrete Waco",
  description:
    "Residential and commercial concrete services in Waco and Central Texas — driveways, patios & walkways, foundations, stamped & decorative concrete, concrete repair, and commercial flatwork. ACI-trained finishers, bonded & insured, 5-Year Workmanship Warranty.",
  url: BASE_URL,
  telephone: "+12547504400",
  email: "hello@ironpathconcrete.com",
  foundingDate: "2008",
  founder: {
    "@type": "Person",
    name: "Ray Delgado",
    jobTitle: "Owner & Lead Finisher",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1800 S University Parks Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76706",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Concrete Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Driveways" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Patios & Walkways" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foundations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stamped & Decorative Concrete" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Flatwork" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/ironpathconcrete",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#78716c" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#292524",
                }}
              >
                <PulseLoader size={50} color="#78716c" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
