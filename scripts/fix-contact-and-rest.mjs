import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const p = (...a) => path.join(ROOT, ...a);
const read = (rel) => fs.readFileSync(p(rel), 'utf8');
const write = (rel, c) => { fs.writeFileSync(p(rel), c); console.log('wrote', rel); };
const patch = (rel, fn) => { write(rel, fn(read(rel))); };

// Contact page services + cleanup
patch('src/app/contact/page.tsx', (t) => {
  t = t.replace(/const SERVICES = \[[\s\S]*?\];/, `const SERVICES = [
  'Driveways', 'Patios & Walkways', 'Foundations',
  'Stamped & Decorative', 'Concrete Repair', 'Commercial Flatwork',
  'Other / Not Sure',
];`);
  t = t.replace(/estimateations/g, 'estimates');
  t = t.replace(/Driveway Flatwork/g, 'Patios & Walkways');
  t = t.replace(/show samples/g, 'check grade and access');
  t = t.replace(/#f97316/g, '#b45309');
  t = t.replace(/Arctic Air/g, 'IronPath');
  t = t.replace(/Craftline/g, 'IronPath');
  t = t.replace(/reface or a full replacement/gi, 'repair or a full replacement');
  t = t.replace(/refacing/gi, 'repair');
  t = t.replace(/cabinet/gi, 'concrete');
  t = t.replace(/millwork/gi, 'flatwork');
  t = t.replace(/contact@ironpathconcrete\.com/g, 'hello@ironpathconcrete.com');
  t = t.replace(/2200 S University Parks Dr/g, '1800 S University Parks Dr');
  t = t.replace(/4521 Bosque Blvd/g, '1800 S University Parks Dr');
  t = t.replace(/76710/g, '76706');
  t = t.replace(/tel:\+1254\d+/g, 'tel:+12547504400');
  t = t.replace(/\(254\) \d{3}-\d{4}/g, '(254) 750-4400');
  return t;
});

patch('src/app/contact/layout.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline[^|"]*/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
    .replace(/HVAC/g, 'concrete')
    .replace(/cabinetry|cabinet/gi, 'concrete')
    .replace(/millwork/gi, 'flatwork')
    .replace(/\(254\) \d{3}-\d{4}/g, '(254) 750-4400')
    .replace(/254-\d{3}-\d{4}/g, '254-750-4400')
    .replace(/ironpathconcrete\.com/g, 'ironpathconcrete.com')
);

// Variant1 form
patch('components/PageComponents/ContactForms/Variant1/Form.tsx', (t) => {
  t = t.replace(/const SERVICES = \[[\s\S]*?\];/, `const SERVICES = [
  { icon: faRoad,            label: 'Driveways' },
  { icon: faPersonWalking,   label: 'Patios & Walkways' },
  { icon: faHouse,           label: 'Foundations' },
  { icon: faPaintRoller,     label: 'Stamped & Decorative' },
  { icon: faWrench,          label: 'Concrete Repair' },
  { icon: faIndustry,        label: 'Commercial Flatwork' },
  { icon: faBolt,            label: 'Other / Not Sure' },
];`);
  t = t.replace(/import \{[\s\S]*?\} from '@fortawesome\/free-solid-svg-icons';/, `import {
  faCircleCheck, faExclamationTriangle, faArrowRight,
  faPhone, faStar, faShieldHalved, faClock, faTag,
  faRoad, faPersonWalking, faHouse, faPaintRoller, faWrench, faIndustry, faBolt,
} from '@fortawesome/free-solid-svg-icons';`);
  t = t.replace(/Arctic Air/g, 'IronPath');
  t = t.replace(/A licensed IronPath tech(?:nician)?/g, 'An IronPath estimator');
  t = t.replace(/#f97316/g, '#b45309');
  t = t.replace(/4\.9★ · \d+\+ reviews/g, '4.9★ · 900+ reviews');
  t = t.replace(/NATE · TDLR|Licensed · Insured/g, 'ACI · Insured');
  t = t.replace(/Same-day available/g, 'Free estimates');
  t = t.replace(/tel:\+1254\d+/g, 'tel:+12547504400');
  t = t.replace(/\(254\) \d{3}-\d{4}/g, '(254) 750-4400');
  return t;
});

// Header logo strings
patch('components/GeneralComponents/Header/Header.tsx', (t) => {
  t = t.replace(/Arctic Air HVAC/g, 'IronPath Concrete');
  t = t.replace(/Craftline Cabinetry(?: & Millwork)?/g, 'IronPath Concrete');
  t = t.replace(/Craftline/g, 'IronPath');
  t = t.replace(/Heating · Cooling · Comfort/g, 'Driveways · Patios · Foundations');
  t = t.replace(/Custom Cabinets · Millwork/g, 'Driveways · Patios · Foundations');
  t = t.replace(/logoTagline">[^<]+/g, 'logoTagline">Driveways · Patios · Foundations');
  t = t.replace(/tel:\+1254\d+/g, 'tel:+12547504400');
  t = t.replace(/\(254\) \d{3}-\d{4}/g, '(254) 750-4400');
  t = t.replace(/#f97316/g, '#b45309');
  return t;
});

// Footer cleanup
patch('components/GeneralComponents/Footer/Footer.tsx', (t) => {
  t = t.replace(/Free Consultations/g, 'Free Estimates');
  t = t.replace(/Custom cabinets and fine millwork|Driveways, patios, and foundations for Central Texas homes and businesses\. Flat-rate quotes, material lookbooks, and a 5-Year Workmanship Warranty since 2008\./g,
    'Driveways · Patios · Foundations done right for Central Texas homes and businesses. Flat-rate quotes and a 5-Year Workmanship Warranty since 2008.');
  // if tagline still messy:
  t = t.replace(/<p className={styles\.tagline}>[\s\S]*?<\/p>/, `<p className={styles.tagline}>
              Driveways · Patios · Foundations done right for Central Texas homes and businesses. Flat-rate quotes and a 5-Year Workmanship Warranty since 2008.
            </p>`);
  t = t.replace(/Craftline[^<\n"]*/g, 'IronPath Concrete');
  t = t.replace(/Arctic Air HVAC/g, 'IronPath Concrete');
  t = t.replace(/Arctic Air/g, 'IronPath');
  t = t.replace(/2200 S University Parks Dr/g, '1800 S University Parks Dr');
  t = t.replace(/4521 Bosque Blvd/g, '1800 S University Parks Dr');
  t = t.replace(/tel:\+1254\d+/g, 'tel:+12547504400');
  t = t.replace(/\(254\) \d{3}-\d{4}/g, '(254) 750-4400');
  t = t.replace(/hello@craftlinecabinetry\.com|contact@arcticairhvac\.com/g, 'hello@ironpathconcrete.com');
  t = t.replace(/TDLR License #XXXXXXXX|Licensed Contractor · Custom Shop/g, 'ACI-Trained Finishers · Bonded & Insured');
  t = t.replace(/Book a Tech Today/g, 'Get a Free Quote');
  t = t.replace(/24\/7 Emergency Line/g, 'Call (254) 750-4400');
  return t;
});

// ProjectCardGrid service CTAs
patch('components/PageComponents/ProjectCardGrid/ProjectCardGrid.tsx', (t) => {
  // replace SERVICE_CTAS block if present
  if (t.includes('SERVICE_CTAS')) {
    t = t.replace(/const SERVICE_CTAS = \[[\s\S]*?\];/, `const SERVICE_CTAS = [
  {
    key: 'driveways',
    icon: faHouseChimney,
    eyebrow: 'Driveways',
    headline: 'Ready for a driveway done right?',
    body: 'New and replacement concrete driveways — flat-rate quote before we form or pour.',
    cta: 'Get a Free Quote',
    href: '/services/driveways',
    accent: 'green' as const,
  },
  {
    key: 'patios',
    icon: faBath,
    eyebrow: 'Patios & Walkways',
    headline: 'Planning a patio or walkway?',
    body: 'Outdoor slabs with drainage-smart layouts and clean finishes.',
    cta: 'Start a Patio Project',
    href: '/services/patios-walkways',
    accent: 'obsidian' as const,
  },
  {
    key: 'repair',
    icon: faDraftingCompass,
    eyebrow: 'Concrete Repair',
    headline: 'Need a crack or section fixed?',
    body: 'Honest repair-vs-replace advice and clean section work.',
    cta: 'Explore Repairs',
    href: '/services/concrete-repair',
    accent: 'green' as const,
  },
  {
    key: 'commercial',
    icon: faBuilding,
    eyebrow: 'Commercial Flatwork',
    headline: 'Planning commercial pads or sidewalks?',
    body: 'Pads, sidewalks, and light commercial slabs delivered on schedule.',
    cta: 'Talk to Our Team',
    href: '/services/commercial-flatwork',
    accent: 'obsidian' as const,
  },
];`);
  }
  t = t.replace(/Craftline/g, 'IronPath');
  t = t.replace(/cabinet/gi, 'concrete');
  return t;
});

// Projects slug page brand
patch('src/app/projects/[slug]/page.tsx', (t) =>
  t
    .replace(/craftlinecabinetry\.com/g, 'ironpathconcrete.com')
    .replace(/Craftline Cabinetry & Millwork/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
);

// Blogs index
patch('src/app/blogs/page.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline[^<\-"]*/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
    .replace(/HVAC/g, 'concrete')
    .replace(/heating, cooling, and maintenance/g, 'driveways, patios, and foundations')
    .replace(/keeping Waco-area homes and businesses comfortable/g, 'pouring concrete for Waco-area homes and businesses')
    .replace(/Blog Center/g, 'Blog')
);

patch('src/app/blogs/layout.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Craftline[^|"]*/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
    .replace(/HVAC/g, 'concrete')
    .replace(/cabinetry|cabinet/gi, 'concrete')
);

// Industries layout
patch('src/app/industries/layout.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Craftline[^|"]*/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
    .replace(/HVAC/g, 'concrete')
);

// robots
patch('src/app/robots.ts', (t) =>
  t
    .replace(/craftlinecabinetry\.com/g, 'ironpathconcrete.com')
    .replace(/arcticairhvac\.com/g, 'ironpathconcrete.com')
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Craftline Cabinetry & Millwork/g, 'IronPath Concrete')
);

// not-found
patch('src/app/not-found.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
    .replace(/#f97316/g, '#b45309')
);

// ServicesPage leftover Scott Applications
patch('components/Pages/Home/ServicesPage/ServicesPage.tsx', (t) =>
  t.replace(/Scott Applications(?: LLC)?/g, 'IronPath Concrete')
);

// RotatingLogo
patch('components/PageComponents/RotatingLogo/RotatingLogo.tsx', (t) =>
  t.replace(/Scott Applications/g, 'IronPath Concrete')
);

// InsuredBadge
patch('components/PageComponents/InsuredBadge/InsuredBadge.tsx', (t) =>
  t
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
    .replace(/fully insured/gi, 'bonded & insured')
);

// ProcessTimeline / FAQ defaults if any
for (const f of [
  'components/PageComponents/ProcessTimeline/ProcessTimeline.tsx',
  'components/PageComponents/FAQ/FAQ.tsx',
  'components/PageComponents/BlogPreviewGrid/BlogPreviewGrid.tsx',
]) {
  if (fs.existsSync(p(f))) {
    patch(f, (t) =>
      t
        .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
        .replace(/Arctic Air/g, 'IronPath')
        .replace(/Craftline/g, 'IronPath')
        .replace(/NATE/g, 'ACI')
        .replace(/HVAC/g, 'concrete')
    );
  }
}

// Hex cleanup
function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'COMBINE_FILES_SERVICE'].includes(ent.name)) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, files);
    else if (/\.(tsx?|scss|css|js)$/.test(ent.name)) files.push(full);
  }
  return files;
}
let hex = 0;
for (const file of walk(ROOT)) {
  let t = fs.readFileSync(file, 'utf8');
  const o = t;
  t = t.replace(/#f97316/g, '#b45309').replace(/#fb923c/g, '#d97706').replace(/#c2410c/g, '#92400e');
  if (t !== o) { fs.writeFileSync(file, t); hex++; }
}
console.log('hex files', hex);

// GuaranteeSection headline fix - avoid double-escaped newlines in source
patch('components/PageComponents/GuaranteeSection/GuaranteeSection.tsx', (t) => {
  // ensure headline default uses real newline via template
  return t.replace(
    /headline\s*=\s*"We back every pour\\nwith real guarantees\."/,
    'headline   = {`We back every pour\\nwith real guarantees.`}'
  ).replace(
    /headline\s*=\s*"We back every pour\\\\nwith real guarantees\."/,
    'headline   = {`We back every pour\\nwith real guarantees.`}'
  );
});

console.log('done fix-contact-and-rest');
