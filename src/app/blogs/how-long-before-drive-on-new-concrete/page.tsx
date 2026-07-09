'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faSun, faTruck, faCheck, faRoad, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'For a typical residential driveway pour in Central Texas, light foot traffic is often fine after 24–48 hours. Passenger vehicles usually wait about 7 days. Heavier trucks and trailers need longer — often 2–4 weeks depending on mix, thickness, and weather. Full design strength continues to develop for weeks after that.',
  },
  {
    type: 'cards',
    heading: 'What Changes the Cure Clock',
    cards: [
      { icon: faSun, title: 'Hot Texas weather', body: 'Heat can speed surface set but still requires proper moisture care. Do not assume you can park early just because the surface feels hard.' },
      { icon: faClock, title: 'Thickness & mix', body: 'Thicker slabs and cooler days generally need more patience before vehicle loads. Admixtures also affect early strength.' },
      { icon: faTruck, title: 'Load matters', body: 'Cars, delivery trucks, dumpsters, and RVs are not the same. Early heavy traffic can leave permanent marks or edge damage.' },
      { icon: faRoad, title: 'Access edges', body: 'Edges and aprons are vulnerable early. Keep construction traffic and dumpsters off the slab until cleared.' },
      { icon: faCheck, title: 'Your pour timeline', body: 'Your contractor should give you a specific timeline for your pour — not a one-size-fits-all internet rule.' },
      { icon: faShieldHalved, title: 'Warranty protection', body: 'Following cure guidance protects both the finish and your workmanship warranty coverage.' },
    ],
  },
  {
    type: 'table',
    heading: 'Typical Residential Timeline (Guideline)',
    tableHeaders: ['Activity', 'Typical Wait', 'Notes'],
    tableRows: [
      ['Light foot traffic', '24–48 hours', 'Keep pets and kids from scuffing edges'],
      ['Passenger vehicles', 'About 7 days', 'Confirm with your pour crew'],
      ['Heavy trucks / trailers', '2–4 weeks', 'Depends on mix and weather'],
      ['Full strength development', 'Weeks ongoing', 'Concrete continues curing long after'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: If Texas heat is extreme on pour week, ask about moisture care and sealer timing. Driving early is the #1 way homeowners ruin a perfect finish.',
  },
  {
    type: 'tips',
    heading: 'How IronPath Sets Expectations',
    items: [
      'We walk you through foot traffic, car traffic, and sealing timing in plain English',
      'Weather adjustments are part of the plan — not an afterthought',
      'You get clear “when can I park?” guidance with every driveway pour',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Long Before You Can Drive on New Concrete?"
        description="A practical cure timeline for Central Texas driveways — foot traffic, cars, and heavy vehicles — plus weather factors that change the clock."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="New concrete driveway curing timeline for Waco Texas homes"
        category="Curing"
        date="April 18, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Planning a New Driveway in Waco?"
        body="IronPath pours driveways with clear cure guidance and a 5-Year Workmanship Warranty. Free on-site estimates."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="how-long-before-drive-on-new-concrete-blog" />
    </>
  );
}
