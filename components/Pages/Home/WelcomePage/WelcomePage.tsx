// IronPath Hero — Minimal Editorial + authentic parallax photography
// Oversized typography, single accent shape treatment replaced with a real
// jobsite photo: scroll-linked parallax background behind a stone/charcoal
// scrim, plus a framed crew photo card on the right (spec-card overlay with
// two proof points). Photos live in /public/pages/home/welcome.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '14%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduceMotion ? 1.06 : 1.14]);

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

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — real driveway pour, Central Texas */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-parallax-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Charcoal/stone scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

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

        {/* Authentic jobsite photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-crew-card.jpg"
              alt="Concrete crew member power-troweling a freshly poured driveway slab"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Live Pour · Central TX
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Free on-site estimates
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> 5-Year workmanship warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
