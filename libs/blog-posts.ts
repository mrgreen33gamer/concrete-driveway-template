// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-long-before-drive-on-new-concrete',
    title:    'How Long Before You Can Drive on New Concrete?',
    excerpt:  'A practical cure timeline for Central Texas driveways — foot traffic, cars, and heavy vehicles — plus weather factors that change the clock.',
    category: 'Curing',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/home/welcome/hero-main.jpg',
    imageAlt: 'New concrete driveway curing timeline for Waco Texas homes',
    featured: true,
  },
  {
    slug:     'stamped-vs-broom-finish-texas',
    title:    'Stamped vs. Broom Finish Concrete in Texas: Which Is Right?',
    excerpt:  'Cost, traction, maintenance, and curb appeal — how to choose between stamped decorative concrete and classic broom finish for Central Texas outdoor slabs.',
    category: 'Finishes',
    date:     'April 14, 2026',
    readTime: 8,
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Stamped concrete versus broom finish comparison for Texas homes',
  },
  {
    slug:     'foundation-cracks-when-to-call',
    title:    'Foundation Cracks: When to Call a Concrete Pro in Waco',
    excerpt:  'Hairline vs structural cracks, Texas clay movement, and when a crack is a DIY watch-item versus a call-a-pro situation for Central Texas homes.',
    category: 'Foundations',
    date:     'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-1.jpg',
    imageAlt: 'Foundation crack warning signs for Waco Texas homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
