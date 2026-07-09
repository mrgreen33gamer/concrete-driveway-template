'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDollarSign, faPersonWalking, faPaintRoller, faHome, faCheck, faWrench } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Broom finish is the durable workhorse of Central Texas driveways and sidewalks. Stamped and decorative concrete delivers stone or brick looks with a monolithic pour. Both can be excellent — when matched to traffic, budget, and maintenance appetite.',
  },
  {
    type: 'cards',
    heading: 'Where Each Finish Wins',
    cards: [
      { icon: faPersonWalking, title: 'Traction', body: 'Broom finish offers reliable wet traction for driveways and walkways. Stamped needs thoughtful pattern and sealer choices.' },
      { icon: faDollarSign, title: 'Budget', body: 'Decorative systems cost more per square foot due to labor and materials. Broom is usually the cost-efficient default.' },
      { icon: faPaintRoller, title: 'Curb appeal', body: 'Stamped patterns and color can transform a patio or entry without paver maintenance.' },
      { icon: faWrench, title: 'Maintenance', body: 'Stamped usually benefits from periodic resealing. Broom is simpler to live with long term.' },
      { icon: faHome, title: 'Best use cases', body: 'Daily-parking driveways often favor broom. Entertaining patios often favor stamped or colored finishes.' },
      { icon: faCheck, title: 'Matching existing work', body: 'Blending new stamped work to aged decorative concrete is never perfect — set expectations early.' },
    ],
  },
  {
    type: 'table',
    heading: 'Stamped vs Broom — Side by Side',
    tableHeaders: ['Factor', 'Broom Finish', 'Stamped / Decorative'],
    tableRows: [
      ['Cost', 'Lower', 'Higher'],
      ['Traction', 'Excellent for driveways', 'Depends on pattern/sealer'],
      ['Look', 'Clean utilitarian', 'Stone/brick/slate looks'],
      ['Maintenance', 'Low', 'Sealer care recommended'],
      ['Best for', 'Driveways, sidewalks', 'Patios, entries, accents'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Stamping does not fix a bad base. Decorative concrete still needs proper thickness, joints, and base prep — or the pretty surface cracks like any other slab.',
  },
  {
    type: 'tips',
    heading: 'How to Choose for Your Property',
    items: [
      'Prioritize broom for high daily vehicle traffic unless you are ready for decorative care',
      'Use stamped/color where guests gather and you want a design statement',
      'Ask for samples and a flat-rate quote that includes sealer guidance',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Stamped vs. Broom Finish Concrete in Texas: Which Is Right?"
        description="Cost, traction, maintenance, and curb appeal — how to choose between stamped decorative concrete and classic broom finish for Central Texas outdoor slabs."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Stamped concrete versus broom finish comparison for Texas homes"
        category="Finishes"
        date="April 14, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want Help Choosing a Finish?"
        body="We review finish options on-site and quote flat-rate — broom, stamped, or a mix."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="stamped-vs-broom-finish-texas-blog" />
    </>
  );
}
