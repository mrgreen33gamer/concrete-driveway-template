import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const servicesSimple = `const SERVICES = [
  { icon: faRoad,            label: 'Driveways' },
  { icon: faPersonWalking,   label: 'Patios & Walkways' },
  { icon: faHouse,           label: 'Foundations' },
  { icon: faPaintRoller,     label: 'Stamped & Decorative' },
  { icon: faWrench,          label: 'Concrete Repair' },
  { icon: faIndustry,        label: 'Commercial Flatwork' },
  { icon: faBolt,            label: 'Other / Not Sure' },
];`;

const servicesSub = `const SERVICES = [
  { icon: faRoad,            label: 'Driveways',             sub: 'New pour or full replacement' },
  { icon: faPersonWalking,   label: 'Patios & Walkways',      sub: 'Patio slabs, sidewalks, paths' },
  { icon: faHouse,           label: 'Foundations',            sub: 'Slabs and foundation flatwork' },
  { icon: faPaintRoller,     label: 'Stamped & Decorative',   sub: 'Patterns, color, sealed finishes' },
  { icon: faWrench,          label: 'Concrete Repair',        sub: 'Cracks, sections, trip hazards' },
  { icon: faIndustry,        label: 'Commercial Flatwork',    sub: 'Pads, sidewalks, PM projects' },
  { icon: faBolt,            label: 'Other / Not Sure',       sub: 'Tell us what you need' },
];`;

for (const v of [1,2,3,4]) {
  const rel = `components/PageComponents/ContactForms/Variant${v}/Form.tsx`;
  let t = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const useSub = t.includes('sub:');
  t = t.replace(/const SERVICES = \[[\s\S]*?\];/, useSub ? servicesSub : servicesSimple);

  // Replace HVAC icon names in import with concrete icons, keep rest
  const hvacIcons = ['faFan','faFire','faFilter','faThermometerHalf','faWind','faSnowflake'];
  for (const h of hvacIcons) t = t.replace(new RegExp(h + ',?\\s*', 'g'), '');
  // Ensure concrete icons in import
  if (!t.includes('faRoad')) {
    t = t.replace(
      /} from '@fortawesome\/free-solid-svg-icons';/,
      `  faRoad, faPersonWalking, faHouse, faPaintRoller, faIndustry,\n} from '@fortawesome/free-solid-svg-icons';`
    );
  }
  // also need faWrench faBolt - usually present
  if (!t.includes('faWrench')) {
    t = t.replace(
      /} from '@fortawesome\/free-solid-svg-icons';/,
      `  faWrench,\n} from '@fortawesome/free-solid-svg-icons';`
    );
  }
  if (!t.includes('faBolt')) {
    t = t.replace(
      /} from '@fortawesome\/free-solid-svg-icons';/,
      `  faBolt,\n} from '@fortawesome/free-solid-svg-icons';`
    );
  }
  if (!t.includes('faPaintRoller')) {
    t = t.replace(
      /} from '@fortawesome\/free-solid-svg-icons';/,
      `  faPaintRoller,\n} from '@fortawesome/free-solid-svg-icons';`
    );
  }

  t = t
    .replace(/Arctic Air/g, 'IronPath')
    .replace(/Craftline/g, 'IronPath')
    .replace(/A licensed IronPath tech(?:nician)?/g, 'An IronPath estimator')
    .replace(/tel:\+1254\d+/g, 'tel:+12547504400')
    .replace(/\(254\) \d{3}-\d{4}/g, '(254) 750-4400')
    .replace(/#f97316/g, '#b45309')
    .replace(/4\.9★ · \d+\+ reviews/g, '4.9★ · 900+ reviews')
    .replace(/NATE · TDLR/g, 'ACI · Insured')
    .replace(/Licensed · Insured/g, 'ACI · Insured')
    .replace(/Same-day available/g, 'Free estimates')
    .replace(/Custom Shop/g, 'ACI-Trained')
    .replace(/1-Year Warranty/g, '5-Year Warranty')
    .replace(/NATE Certified/g, 'ACI-Trained');

  fs.writeFileSync(path.join(ROOT, rel), t);
  console.log('ok', rel, 'hasRoad', t.includes('faRoad'), 'hasUseState', t.includes('useState'), 'hasStyles', t.includes("from './styles"));
}
