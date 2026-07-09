'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faHouse, faRulerHorizontal, faDoorOpen, faWater, faTriangleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Hairline shrinkage cracks are common in concrete as it cures. Central Texas clay soils also expand and contract with moisture, which can stress slabs over years. The key is distinguishing cosmetic cracking from movement that affects structure, doors, drainage, or safety.',
  },
  {
    type: 'cards',
    heading: 'Call a Pro When You See',
    cards: [
      { icon: faRulerHorizontal, title: 'Widening cracks', body: 'Cracks opening more than about 1/4 inch or growing quickly deserve a professional look.' },
      { icon: faHouse, title: 'Horizontal or stair-step cracks', body: 'Horizontal foundation wall cracks or stair-step masonry cracks can signal more than normal shrinkage.' },
      { icon: faDoorOpen, title: 'Sticking doors & windows', body: 'Doors and windows that suddenly stick or will not latch can track with slab or foundation movement.' },
      { icon: faTriangleExclamation, title: 'Trip hazards', body: 'Offset panels and lifted edges are safety issues — repair or replace before someone falls.' },
      { icon: faWater, title: 'Water paths', body: 'Cracks that channel water toward living space need diagnosis sooner, not later.' },
      { icon: faCheck, title: 'Worsening uneven floors', body: 'Floors that get more uneven seasonally should be assessed, not ignored.' },
    ],
  },
  {
    type: 'table',
    heading: 'Hairline vs Concern — Quick Filter',
    tableHeaders: ['Observation', 'Likely', 'Action'],
    tableRows: [
      ['Hairline, stable, no offset', 'Often cosmetic', 'Monitor with photos'],
      ['Widening or offset panels', 'Structural/safety concern', 'Call a pro'],
      ['Doors sticking + new cracks', 'Possible movement', 'Assess soon'],
      ['Water intrusion through crack', 'Moisture path', 'Diagnose drainage + slab'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Not every crack needs a full tear-out — and not every “cheap patch” lasts. An honest on-site assessment beats internet diagnosis for Texas clay homes.',
  },
  {
    type: 'tips',
    heading: 'What IronPath Can Help With',
    items: [
      'Assess driveway, patio, and flatwork cracks with repair-vs-replace clarity',
      'Quote flat-rate section repairs when that is the smart spend',
      'Refer structural engineering needs when the issue is beyond flatwork repair',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Foundation Cracks: When to Call a Concrete Pro in Waco"
        description="Hairline vs structural cracks, Texas clay movement, and when a crack is a DIY watch-item versus a call-a-pro situation for Central Texas homes."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Foundation crack warning signs for Waco Texas homes"
        category="Foundations"
        date="April 10, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Seeing Cracks You Are Unsure About?"
        body="IronPath can assess slab and flatwork issues and tell you honestly whether repair or replacement makes sense."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="foundation-cracks-when-to-call-blog" />
    </>
  );
}
