// libs/local-db/projects.ts
// ─────────────────────────────────────────────────────────────────────────────
// Central data store for IronPath Concrete projects shown on
// /projects and /projects/[slug]. Images reuse existing gallery assets.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'Driveways'
  | 'Patios & Walkways'
  | 'Foundations'
  | 'Stamped & Decorative'
  | 'Concrete Repair'
  | 'Commercial Flatwork';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

const g = (name: string) => `/projects/gallery/${name}`;

const driveways: Project[] = [
  {
    id: 'woodway-broom-driveway',
    title: 'Woodway Broom-Finish Driveway',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Driveways',
    year: '2026',
    duration: '1 week',
    sqft: '1,200 sq ft',
    shortDesc: 'Full driveway replacement with proper base prep, control joints, and a durable broom finish.',
    fullDesc: 'The existing slab had failed joints and edge spalling. IronPath demoed the old concrete, rebuilt the base, and poured a new broom-finish driveway with planned control joints for Central Texas clay movement. Homeowners received clear cure guidance before parking returned.',
    result: 'Full Replacement',
    tags: ['Broom Finish', 'Replacement', 'Woodway'],
    images: [
      { src: g('2.png'), alt: 'New broom-finish concrete driveway', caption: 'Completed driveway' },
      { src: g('3.png'), alt: 'Driveway control joints and edge detail', caption: '' },
    ],
    beforeImage: { src: g('4.png'), alt: 'Failed driveway before replacement' },
    afterImage:  { src: g('2.png'), alt: 'Driveway after IronPath pour' },
    featured: true,
  },
  {
    id: 'hewitt-two-car-driveway',
    title: 'Hewitt Two-Car Driveway Pour',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Driveways',
    year: '2025',
    duration: '5 days',
    sqft: '900 sq ft',
    shortDesc: 'New two-car driveway with apron and approach matching the street grade.',
    fullDesc: 'New residential driveway with careful grade transition at the street, compacted base, and broom finish for wet traction. Flat-rate quote included demo of a failing approach section.',
    result: 'New Pour',
    tags: ['New Construction', 'Hewitt', 'Broom'],
    images: [
      { src: g('5.png'), alt: 'Two-car residential concrete driveway', caption: '' },
      { src: g('7.png'), alt: 'Driveway apron detail', caption: '' },
    ],
    featured: true,
  },
];

const patios: Project[] = [
  {
    id: 'waco-backyard-patio',
    title: 'Waco Backyard Patio Slab',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Patios & Walkways',
    year: '2025',
    duration: '4 days',
    sqft: '450 sq ft',
    shortDesc: 'Patio slab with walkway connector and slope away from the foundation.',
    fullDesc: 'Homeowners wanted outdoor living space without water tracking toward the house. IronPath set elevations for drainage, poured a patio with matching walkway, and finished for outdoor traction.',
    result: 'Outdoor Living',
    tags: ['Patio', 'Walkway', 'Waco'],
    images: [
      { src: g('ertret.png'), alt: 'Concrete patio and walkway', caption: '' },
    ],
    beforeImage: { src: g('ewew.png'), alt: 'Yard before patio pour' },
    afterImage:  { src: g('ertret.png'), alt: 'Patio after IronPath pour' },
  },
  {
    id: 'china-spring-sidewalk',
    title: 'China Spring Sidewalk Run',
    client: 'Private Residence',
    location: 'China Spring, TX',
    category: 'Patios & Walkways',
    year: '2025',
    duration: '3 days',
    shortDesc: 'Front walk and side path with clean edges and broom texture.',
    fullDesc: 'Rural residential walkway pour connecting drive to entry. Consistent width, clean edges, and joints planned for long runs without random cracking.',
    result: 'Clean Path',
    tags: ['Sidewalk', 'China Spring'],
    images: [
      { src: g('htf.png'), alt: 'Residential concrete sidewalk', caption: '' },
    ],
  },
];

const foundations: Project[] = [
  {
    id: 'temple-builder-slab',
    title: 'Temple Builder Foundation Slab',
    client: 'Regional Homebuilder',
    location: 'Temple, TX',
    category: 'Foundations',
    year: '2025',
    duration: 'Pour day',
    shortDesc: 'Production home foundation slab coordinated with framing schedule.',
    fullDesc: 'Plan-driven foundation pour for a production home. Steel and thickness verified, pour window protected, first-pass inspection ready. Builder received COI and closeout docs same week.',
    result: 'Inspection Ready',
    tags: ['Builder', 'Foundation', 'Temple'],
    images: [
      { src: g('kgh.png'), alt: 'Residential foundation slab pour', caption: '' },
    ],
    featured: true,
  },
];

const stamped: Project[] = [
  {
    id: 'woodway-stamped-patio',
    title: 'Woodway Stamped Patio',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Stamped & Decorative',
    year: '2026',
    duration: '1 week',
    sqft: '380 sq ft',
    shortDesc: 'Stamped and colored patio with border detail and sealer guidance.',
    fullDesc: 'Decorative patio with ashlar pattern and integral color selected from samples. IronPath stamped, detailed edges, and provided a sealer maintenance plan for Texas sun.',
    result: 'Curb Appeal',
    tags: ['Stamped', 'Color', 'Woodway'],
    images: [
      { src: g('qwe.png'), alt: 'Stamped decorative concrete patio', caption: '' },
      { src: g('rtet.png'), alt: 'Stamped pattern close-up', caption: '' },
    ],
    beforeImage: { src: g('sesrere.png'), alt: 'Patio area before decorative pour' },
    afterImage:  { src: g('qwe.png'), alt: 'Stamped patio after IronPath' },
    featured: true,
  },
];

const repairs: Project[] = [
  {
    id: 'bellmead-trip-hazard-repair',
    title: 'Bellmead Sidewalk Trip-Hazard Repair',
    client: 'Private Residence',
    location: 'Bellmead, TX',
    category: 'Concrete Repair',
    year: '2025',
    duration: '2 days',
    shortDesc: 'Section replacement on a lifted sidewalk panel creating a trip hazard.',
    fullDesc: 'Honest assessment: grinding alone would not fix the offset. IronPath replaced the failed section, matched broom texture as closely as practical, and restored a safe walking surface.',
    result: 'Hazard Fixed',
    tags: ['Repair', 'Sidewalk', 'Bellmead'],
    images: [
      { src: g('uikhj.png'), alt: 'Repaired concrete sidewalk section', caption: '' },
    ],
  },
];

const commercial: Project[] = [
  {
    id: 'killeen-equipment-pads',
    title: 'Killeen Equipment Pad Package',
    client: 'Property Management Co.',
    location: 'Killeen, TX',
    category: 'Commercial Flatwork',
    year: '2025',
    duration: '1 week',
    shortDesc: 'Equipment pads and short sidewalk runs for a commercial suite opening.',
    fullDesc: 'Property manager needed pads and sidewalks before tenant opening. IronPath provided COI, hit the schedule, and poured thickness matched to equipment loads.',
    result: 'On Schedule',
    tags: ['Commercial', 'Pads', 'Killeen'],
    images: [
      { src: g('werwer.png'), alt: 'Commercial concrete equipment pads', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'waco-parking-pad',
    title: 'Waco Parking Pad Extension',
    client: 'Light Commercial Tenant',
    location: 'Waco, TX',
    category: 'Commercial Flatwork',
    year: '2025',
    duration: '4 days',
    shortDesc: 'Parking pad extension with traffic-ready finish.',
    fullDesc: 'Extended existing parking pad for additional vehicle staging. Base prep, thickness for light commercial traffic, and clean joint layout.',
    result: 'More Capacity',
    tags: ['Parking Pad', 'Waco'],
    images: [
      { src: g('zXas.png'), alt: 'Commercial parking pad concrete', caption: '' },
    ],
  },
];

const ALL_PROJECTS: Project[] = [
  ...driveways,
  ...patios,
  ...foundations,
  ...stamped,
  ...repairs,
  ...commercial,
];

export const CATEGORIES: ProjectCategory[] = [
  'Driveways',
  'Patios & Walkways',
  'Foundations',
  'Stamped & Decorative',
  'Concrete Repair',
  'Commercial Flatwork',
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Driveways': driveways,
  'Patios & Walkways': patios,
  'Foundations': foundations,
  'Stamped & Decorative': stamped,
  'Concrete Repair': repairs,
  'Commercial Flatwork': commercial,
};

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export function getFeaturedProjects(): Project[] {
  return ALL_PROJECTS.filter((p) => p.featured);
}

export default ALL_PROJECTS;
