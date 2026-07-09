// _archetype-library/hero-i-editorial/Component.tsx
//
// Hero I: Minimal Editorial — oversized typography, single accent shape,
// large negative space. Optional accentWord as huge watermark typography.
// No canvas, no stat cards, no widget.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
const badgeText = 'Waco\'s Trusted Concrete Contractor — Since 2008';
const headlineLines = [
  'Driveways. Patios.',
  'Foundations.',
];
const headlineAccent = 'IronPath.';
const subheadline = 'Free on-site estimates. Flat-rate quotes. 5-Year Workmanship Warranty on every pour. Driveways · Patios · Foundations done right for Central Texas homes and businesses.';
const primaryCta = { label: 'Call (254) 750-4400', href: 'tel:+12547504400' };
const secondaryCta = { label: 'Free Quote', href: '/contact' };
const chips = [
  'Free Estimates',
  'Flat-Rate Quotes',
  'ACI-Trained',
  '18+ Yrs Local',
  '5-Yr Warranty',
];
const stats = [
  {
    "value": "500+",
    "label": "Jobs Done"
  },
  {
    "value": "4.9 ★",
    "label": "Rating"
  },
  {
    "value": "15+",
    "label": "Years Local"
  },
  {
    "value": "1-Yr",
    "label": "Warranty"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak load";
const meterMidLabel = "Crew";
const meterBotLabel = "Base";
const particleColor = '#78716c';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Cracked slab";
const afterLabel = "New pour";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Broom", swatch: "#78716c", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Stamped", swatch: "#a8a29e", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Exposed", swatch: "#57534e", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Sealed", swatch: "#d6d3d1", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Colored", swatch: "#44403c", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Repair", swatch: "#292524", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Driveway pour was on time, joints look intentional, and the broom finish is perfect.";
const authorName = "Ryan C.";
const authorMeta = "Driveway · McGregor";
const rating = 5;
const schematicLabel = "IronPath schematic";
const gauges = [
  { label: "Pours", value: "2,400+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Cure plan", value: "Included" },
  { label: "Warranty", value: "2-yr" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "IronPath";

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Single geometric accent — not a content widget */}
      <div className={styles.accentShape} aria-hidden="true" />
      <div className={styles.hairline} aria-hidden="true" />

      {accentWord ? (
        <div className={styles.watermarkSlot} aria-hidden="true">
          <motion.span
            className={styles.watermark}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {accentWord}
          </motion.span>
        </div>
      ) : null}

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.div
            className={styles.rule}
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
