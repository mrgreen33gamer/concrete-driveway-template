import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, c) => { fs.writeFileSync(path.join(ROOT, rel), c); console.log('wrote', rel); };
const r = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const patch = (rel, fn) => { const p = path.join(ROOT, rel); let t = fs.readFileSync(p, 'utf8'); t = fn(t); fs.writeFileSync(p, t); console.log('patched', rel); };

// ── Forms ────────────────────────────────────────────────────────────────────
const servicesV1 = `const SERVICES = [
  { icon: faRoad,            label: 'Driveways' },
  { icon: faPersonWalking,   label: 'Patios & Walkways' },
  { icon: faHouse,           label: 'Foundations' },
  { icon: faPaintRoller,     label: 'Stamped & Decorative' },
  { icon: faWrench,          label: 'Concrete Repair' },
  { icon: faIndustry,        label: 'Commercial Flatwork' },
  { icon: faBolt,            label: 'Other / Not Sure' },
];`;

const servicesV4 = `const SERVICES = [
  { icon: faRoad,            label: 'Driveways',             sub: 'New pour or full replacement' },
  { icon: faPersonWalking,   label: 'Patios & Walkways',      sub: 'Patio slabs, sidewalks, paths' },
  { icon: faHouse,           label: 'Foundations',            sub: 'Slabs and foundation flatwork' },
  { icon: faPaintRoller,     label: 'Stamped & Decorative',   sub: 'Patterns, color, sealed finishes' },
  { icon: faWrench,          label: 'Concrete Repair',        sub: 'Cracks, sections, trip hazards' },
  { icon: faIndustry,        label: 'Commercial Flatwork',    sub: 'Pads, sidewalks, PM projects' },
  { icon: faBolt,            label: 'Other / Not Sure',       sub: 'Tell us what you need' },
];`;

for (const f of [
  'components/PageComponents/ContactForms/Variant1/Form.tsx',
  'components/PageComponents/ContactForms/Variant2/Form.tsx',
  'components/PageComponents/ContactForms/Variant3/Form.tsx',
  'components/PageComponents/ContactForms/Variant4/Form.tsx',
]) {
  patch(f, (t) => {
    t = t.replace(/const SERVICES = \[[\s\S]*?\];/, f.includes('Variant4') ? servicesV4 : servicesV1);
    t = t.replace(/from '@fortawesome\/free-solid-svg-icons';/, (m) => m);
    // rebuild solid icon import
    t = t.replace(/import \{([\s\S]*?)\} from '@fortawesome\/free-solid-svg-icons';/, () => {
      return `import {
  faCircleCheck, faExclamationTriangle, faArrowRight,
  faPhone, faStar, faShieldHalved, faClock, faTag,
  faRoad, faPersonWalking, faHouse, faPaintRoller, faWrench, faIndustry, faBolt,
} from '@fortawesome/free-solid-svg-icons';`;
    });
    t = t
      .replace(/Arctic Air/g, 'IronPath')
      .replace(/A licensed IronPath tech(?:nician)?/g, 'An IronPath estimator')
      .replace(/tel:\+12549001234/g, 'tel:+12547504400')
      .replace(/\(254\) 900-1234/g, '(254) 750-4400')
      .replace(/4\.9★ · \d+\+ reviews/g, '4.9★ · 900+ reviews')
      .replace(/NATE · TDLR/g, 'ACI · Insured')
      .replace(/Licensed · Insured/g, 'ACI · Insured')
      .replace(/Same-day available/g, 'Free estimates')
      .replace(/Craftline/g, 'IronPath')
      .replace(/#f97316/g, '#b45309');
    return t;
  });
}

// ── TechStack ────────────────────────────────────────────────────────────────
w('components/PageComponents/TechStack/TechStack.tsx', `'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'What We Pour',
    items: [
      { name: 'Driveways', type: 'brand', icon: '🛤️' },
      { name: 'Patios', type: 'brand', icon: '🏡' },
      { name: 'Walkways', type: 'brand', icon: '🚶' },
      { name: 'Foundations', type: 'brand', icon: '🏠' },
      { name: 'Stamped Concrete', type: 'brand', icon: '✨' },
      { name: 'Commercial Pads', type: 'brand', icon: '🏢' },
      { name: 'Sidewalks', type: 'brand', icon: '➡️' },
      { name: 'Repairs', type: 'brand', icon: '🔧' },
    ],
  },
  {
    label: 'Credentials',
    items: [
      { name: 'ACI-Trained Finishers', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured', type: 'cert', icon: '✓' },
      { name: '5-Year Warranty', type: 'cert', icon: '✓' },
      { name: 'Flat-Rate Quotes', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Finishes & Methods',
    items: [
      { name: 'Broom Finish', type: 'tool', icon: '🧱' },
      { name: 'Stamped Patterns', type: 'tool', icon: '🧱' },
      { name: 'Integral Color', type: 'tool', icon: '🧱' },
      { name: 'Control Joints', type: 'tool', icon: '🧱' },
      { name: 'Base Prep', type: 'tool', icon: '🧱' },
      { name: 'Section Repair', type: 'tool', icon: '🧱' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Concrete Done Right',
  subtitle = 'Driveways, patios, foundations, decorative pours, repairs, and commercial flatwork — finished by ACI-trained crews.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Services and credentials">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>
        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item} data-type={item.type}>
                    <span className={styles.itemIcon}>{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
`);

// ── GuaranteeSection ─────────────────────────────────────────────────────────
w('components/PageComponents/GuaranteeSection/GuaranteeSection.tsx', `// components/PageComponents/GuaranteeSection/GuaranteeSection.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faRotateLeft,
  faTag,
  faCertificate,
  faCalendarCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface Guarantee {
  icon: any;
  title: string;
  description: string;
}

interface GuaranteeSectionProps {
  title?:      string;
  headline?:   string;
  guarantees?: Guarantee[];
  ctaText?:    string;
  ctaLink?:    string;
}

const DEFAULT_GUARANTEES: Guarantee[] = [
  {
    icon: faTag,
    title: "Flat-Rate Quotes. Always.",
    description:
      "You get a firm price before we start — no hourly billing, no surprise add-ons. What we quote is what you pay.",
  },
  {
    icon: faShieldHalved,
    title: "5-Year Workmanship Warranty",
    description:
      "Every project we complete is covered for five full years on workmanship. If our work fails within that window, we fix it at no charge.",
  },
  {
    icon: faRotateLeft,
    title: "Satisfaction Guarantee",
    description:
      "Not satisfied with our work? We'll return to make it right. We stand behind every pour, no exceptions.",
  },
  {
    icon: faCertificate,
    title: "ACI-Trained Finishers · Bonded & Insured",
    description:
      "Crews led by ACI-trained finishers with full bonding and insurance. Documentation available on request.",
  },
  {
    icon: faCalendarCheck,
    title: "Clear Pour Schedules",
    description:
      "We give honest prep and pour timelines with your quote — not vague windows that slip week after week.",
  },
  {
    icon: faStar,
    title: "On-Time or We Call Ahead",
    description:
      "We respect your time. If we're running late for an estimate or pour, we call before your window closes.",
  },
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  title      = "Our Promise to You",
  headline   = "We back every pour\\nwith real guarantees.",
  guarantees = DEFAULT_GUARANTEES,
  ctaText    = "Request a Free Quote",
  ctaLink    = "/contact",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.section} aria-label="Our Guarantees">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>{title}</span>
          <h2 className={styles.headline}>
            {headline.split("\\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className={styles.iconWrap}>
                <FontAwesomeIcon icon={g.icon} />
              </span>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardBody}>{g.description}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link
            href={ctaLink}
            className={styles.cta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: ctaText, section: 'GuaranteeSection' })}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
`);

// ── TrustBar, WhyChooseUs, CTABanner, ValueComparison, ServiceCard defaults ──
patch('components/PageComponents/TrustBar/TrustBar.tsx', (t) =>
  t
    .replace(/NATE Certified/g, 'ACI-Trained')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
    .replace(/1-Year Warranty/g, '5-Year Warranty')
    .replace(/Same-Day Service/g, 'Free Estimates')
);

patch('components/PageComponents/WhyChooseUs/WhyChooseUs.tsx', (t) =>
  t
    .replace(/Why Central Texas Chooses Arctic Air/g, 'Why Central Texas Chooses IronPath')
    .replace(/The Arctic Air Difference/g, 'The IronPath Difference')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
    .replace(/HVAC companies/g, 'concrete contractors')
    .replace(/cabinet shops/g, 'concrete contractors')
);

patch('components/PageComponents/CTABanner/CTABanner.tsx', (t) =>
  t
    .replace(/tel:\+12549001234/g, 'tel:+12547504400')
    .replace(/tel:\+12547412800/g, 'tel:+12547504400')
    .replace(/\(254\) 900-1234/g, '(254) 750-4400')
    .replace(/\(254\) 741-2800/g, '(254) 750-4400')
    .replace(/#f97316/g, '#b45309')
);

patch('components/PageComponents/ValueComparison/ValueComparison.tsx', (t) =>
  t
    .replace(/Arctic Air vs\. The Other Guys/g, 'IronPath vs. The Other Guys')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
);

patch('components/PageComponents/ServiceCardComponent/ServiceCardComponent.tsx', (t) =>
  t
    .replace(/From emergency AC repairs to annual maintenance plans, Arctic Air handles it all — on time, on price\./g,
      'From driveways and patios to foundations and commercial flatwork — IronPath handles it all, on time and on price.')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
);

patch('components/PageComponents/LocalCitationBlock/LocalCitationBlock.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Craftline Cabinetry[^"']*/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
);

patch('components/PageComponents/AboutHero/AboutHero.tsx', (t) => {
  return t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline Cabinetry[^"']*/g, 'IronPath Concrete')
    .replace(/Craftline/g, 'IronPath')
    .replace(/NATE Certified/g, 'ACI-Trained')
    .replace(/HVAC technicians/g, 'concrete finishers')
    .replace(/keeping homes and businesses comfortable/g, 'pouring driveways, patios, and foundations');
});

patch('components/PageComponents/AboutStory/AboutStory.tsx', (t) =>
  t
    .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
    .replace(/HVAC contractors/g, 'concrete contractors')
    .replace(/NATE-certified, TDLR-licensed technicians/g, 'ACI-trained finishers')
    .replace(/Mike Hawkins/g, 'Ray Delgado')
    .replace(/Elena Vargas/g, 'Ray Delgado')
    .replace(/Elena/g, 'Ray')
);

patch('components/GeneralComponents/CookieBanner/CookieBanner.tsx', (t) =>
  t
    .replace(/Arctic Air Template/g, 'IronPath Concrete')
    .replace(/Craftline Template/g, 'IronPath Concrete')
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
);

patch('components/BlogComponents/BlogHero/BlogHero.tsx', (t) =>
  t.replace(/Scott Applications/g, 'IronPath Concrete').replace(/authorName = '[^']*'/g, "authorName = 'IronPath Concrete'")
);

// Admin chrome
patch('src/app/admin/AdminNav.tsx', (t) =>
  t.replace(/ARCTIC AIR HVAC/g, 'IRONPATH CONCRETE').replace(/SCOTT APPLICATIONS/g, 'IRONPATH CONCRETE').replace(/Craftline/gi, 'IronPath')
);
patch('src/app/admin/login/page.tsx', (t) =>
  t.replace(/Scott Applications/g, 'IronPath Concrete').replace(/Arctic Air/g, 'IronPath').replace(/Craftline/g, 'IronPath')
);
patch('src/app/admin/layout.tsx', (t) =>
  t.replace(/Scott Applications/g, 'IronPath Concrete').replace(/Arctic Air/g, 'IronPath')
);

// Privacy + API email subjects
patch('src/app/privacy-policy/layout.tsx', (t) =>
  t.replace(/Scott Applications/g, 'IronPath Concrete')
);
patch('src/app/privacy-policy/page.tsx', (t) =>
  t.replace(/Scott Applications/g, 'IronPath Concrete').replace(/Arctic Air HVAC/g, 'IronPath Concrete').replace(/Arctic Air/g, 'IronPath').replace(/Craftline[^<\n"]*/g, 'IronPath Concrete').replace(/craftlinecabinetry\.com/g, 'ironpathconcrete.com').replace(/arcticairhvac\.com/g, 'ironpathconcrete.com')
);

// NearbyAreasHero
patch('components/PageComponents/NearbyAreasHero/NearbyAreasHero.tsx', (t) =>
  t.replace(/HVAC Service in \$\{cityName\}, TX/g, 'Concrete Service in ${cityName}, TX')
    .replace(/HVAC/g, 'Concrete')
);

// SectionMap
patch('components/PageComponents/SectionMap/SectionMap.tsx', (t) =>
  t.replace(/Scott Applications HQ/g, 'IronPath Concrete HQ')
    .replace(/212 Dallas St, Waco, Texas 76704/g, '1800 S University Parks Dr, Waco, TX 76706')
    .replace(/Scott Applications/g, 'IronPath Concrete')
);

// API
for (const f of fs.readdirSync(path.join(ROOT, 'src/app/api'), { recursive: true })) {
  const rel = path.join('src/app/api', f).replace(/\\/g, '/');
  const full = path.join(ROOT, rel);
  if (!fs.statSync(full).isFile() || !/\.ts$/.test(rel)) continue;
  patch(rel, (t) =>
    t
      .replace(/Scott Applications/g, 'IronPath Concrete')
      .replace(/Arctic Air HVAC/g, 'IronPath Concrete')
      .replace(/Arctic Air/g, 'IronPath')
      .replace(/Craftline Cabinetry & Millwork/g, 'IronPath Concrete')
      .replace(/Craftline/g, 'IronPath')
      .replace(/arcticairhvac\.com/g, 'ironpathconcrete.com')
      .replace(/craftlinecabinetry\.com/g, 'ironpathconcrete.com')
  );
}

// AuthorBio
w('components/PageComponents/AuthorBio/AuthorBio.tsx', r('components/PageComponents/AuthorBio/AuthorBio.tsx')
  .replace(/Scott Applications/g, 'IronPath Concrete')
  .replace(/Joshua Feliciano/g, 'Ray Delgado')
  .replace(/Founder of IronPath Concrete in Waco, TX\. 10\+ years building websites[\s\S]*?no middlemen\./,
    'Owner of IronPath Concrete in Waco, TX. 18+ years pouring driveways, patios, and foundations for Central Texas homes and businesses.')
  .replace(/Founder & Lead Developer · IronPath Concrete/g, 'Owner & Lead Finisher · IronPath Concrete')
  .replace(/Lead Developer/g, 'Lead Finisher')
);

console.log('forms+shared done');
