// _archetype-library/header-5-dual-cta/Component.tsx
//
// Variant 5: marquee + dual primary CTAs. Call and "Book Now" (or custom
// secondary) sit side-by-side with equal visual weight — no primary/secondary
// hierarchy. Nav is horizontal on desktop; hamburger on smaller viewports.
'use client';
import Link from 'next/link';
import { PhoneIcon } from './_shared/icons';
import { useScrollChrome } from './_shared/useScrollChrome';
import { useMobileDrawer } from './_shared/useMobileDrawer';
import styles from './styles.module.scss';

export default function Header() {
const logoName = 'IronPath Concrete';
const logoTagline = 'Driveways · Patios · Foundations';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blogs', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
const phoneDisplay = '(254) 750-4400';
const phoneHref = 'tel:+12547504400';
const ctaLabel = 'Free Quote';
const ctaHref = '/contact';
const marqueeItems = [
  'Free On-Site Estimates',
  '5-Year Workmanship Warranty',
  'Flat-Rate Quotes — No Surprises',
  '4.9★ Google Rating · 900+ Reviews',
  'ACI-Trained Finishers · Fully Insured',
  '4,000+ Pours',
  'Serving Central Texas Since 2008',
  'ACI-Trained · Bonded & Insured · Waco, TX',
];
const footerLine = 'ACI-Trained Finishers · Bonded & Insured · Waco, TX';
const secondaryCtaLabel = 'Book Now';
const secondaryCtaHref = '/contact';
const hoursText = 'Mon–Sat · 7am–7pm';
const serviceAreaText = 'Serving Central Texas';
const ratingText = '4.9★ Local Rating';
  const { scrolled, progressRef } = useScrollChrome();
  const { menuOpen, setMenuOpen, drawerRef, triggerRef, pathname } = useMobileDrawer();
  const bookHref = secondaryCtaHref ?? ctaHref;
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div ref={progressRef} className={styles.progressBar}
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center', willChange: 'transform' }}
          aria-hidden="true" />

        <div className={styles.topBar} aria-hidden="true"
          style={{ maxHeight: scrolled ? '0px' : '34px', opacity: scrolled ? 0 : 1 }}>
          <div className={styles.marqueeTrack}>
            <ul className={styles.marquee} role="list">
              {doubled.map((text, i) => <li key={i} className={styles.marqueeItem}>{text}</li>)}
            </ul>
          </div>
        </div>

        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} aria-label={`${logoName} home`}>
            <span className={styles.logoText}>
              <span className={styles.logoName}>{logoName}</span>
              <span className={styles.logoTagline}>{logoTagline}</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href} className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} aria-current={isActive ? 'page' : undefined}>
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.ctaGroup}>
            <a href={phoneHref} className={styles.ctaEqual}>
              <PhoneIcon size={13} /> Call Now
            </a>
            <Link href={bookHref} className={styles.ctaEqualAccent}>
              {secondaryCtaLabel}
            </Link>
            <Link href={ctaHref} className={styles.ctaEqualOutline}>
              {ctaLabel}
            </Link>
          </div>

          <button ref={triggerRef} className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen} aria-controls="mobile-drawer-5">
            <span className={styles.hBar} /><span className={styles.hBar} /><span className={styles.hBar} />
          </button>
        </div>
      </header>

      <div className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <nav id="mobile-drawer-5" ref={drawerRef} className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerBrand}>{logoName}</span>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <ul className={styles.drawerLinks} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`${styles.drawerLink} ${pathname === href ? styles.drawerLinkActive : ''}`} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.drawerActions}>
          <a href={phoneHref} className={styles.drawerCallBtn} onClick={() => setMenuOpen(false)}>
            <PhoneIcon size={14} /> Call {phoneDisplay}
          </a>
          <Link href={bookHref} className={styles.drawerEstimateBtn} onClick={() => setMenuOpen(false)}>
            {secondaryCtaLabel}
          </Link>
          <Link href={ctaHref} className={styles.drawerOutlineBtn} onClick={() => setMenuOpen(false)}>
            {ctaLabel}
          </Link>
        </div>
        <div className={styles.drawerFoot}>{footerLine}</div>
      </nav>
    </>
  );
}
