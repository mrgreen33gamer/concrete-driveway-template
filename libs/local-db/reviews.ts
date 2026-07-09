// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for IronPath Concrete — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Driveways',
    text:     "IronPath replaced our crumbling driveway with a proper base and broom finish. Quote was flat-rate, pour day was clean, and they told us exactly when we could park. Looks sharp and feels solid.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Patios & Walkways',
    text:     'Had a patio and walkway poured connecting to the back door. Slope drains away from the house, edges are clean, and the finish has great traction. Ray walked us through cure times without pressure.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Foundations',
    text:     'Our builder recommended IronPath for the slab. They hit the pour window, passed inspection, and coordinated with framing without drama. Professional crew from start to finish.',
  },
  {
    name:     'Patricia L.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Concrete Repair',
    text:     'Honest about what could be repaired vs. what needed replacement. Fixed a trip-hazard section on our sidewalk for a fair price. Would call them again in a heartbeat.',
  },
  {
    name:     'David M.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Stamped & Decorative',
    text:     'Stamped patio for outdoor entertaining. Pattern and color look like high-end stone without paver maintenance. Sealer guidance was clear. Neighbors keep asking who did it.',
  },
  {
    name:     'Angela W.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Commercial Flatwork',
    text:     'Equipment pads and sidewalks for our commercial suite. IronPath hit the opening date and provided COI paperwork fast. Fair pricing, professional crew — our go-to concrete partner now.',
  },
  {
    name:     'Robert H.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Driveways',
    text:     'Compared three companies. IronPath was clear about thickness, joints, and base prep. The driveway cured as promised and the finish still looks new after a Texas summer.',
  },
  {
    name:     'Cheryl B.',
    location: 'Waco, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Patios & Walkways',
    text:     'Free on-site estimate, flat-rate quote, and a crew that protected our landscaping. With kids at home they were respectful and tidy every day. Thank you, IronPath.',
  },
];

export default reviews;
