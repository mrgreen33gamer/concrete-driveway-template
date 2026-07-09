/**
 * Bulk rebrand Craftline cabinetry → IronPath Concrete
 * Plus targeted service/path rewrites and shared component defaults.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SKIP = new Set(['node_modules', '.next', '.git', 'COMBINE_FILES_SERVICE', 'GeoLite2-City.mmdb']);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|scss|css|md|txt|json|mjs)$/.test(ent.name)) files.push(p);
  }
  return files;
}

// Ordered replacements (longer phrases first)
const pairs = [
  // Domains / contact
  ['https://www.craftlinecabinetry.com', 'https://www.ironpathconcrete.com'],
  ['craftlinecabinetry.com', 'ironpathconcrete.com'],
  ['hello@craftlinecabinetry.com', 'hello@ironpathconcrete.com'],
  ['+12547412800', '+12547504400'],
  ['(254) 741-2800', '(254) 750-4400'],
  ['254-741-2800', '254-750-4400'],
  ['2200 S University Parks Dr, Waco, TX 76706', '1800 S University Parks Dr, Waco, TX 76706'],
  ['2200 S University Parks Dr', '1800 S University Parks Dr'],
  ['facebook.com/craftlinecabinetry', 'facebook.com/ironpathconcrete'],
  ['g.page/r/craftlinecabinetry', 'g.page/r/ironpathconcrete'],

  // Brand names
  ['Craftline Cabinetry & Millwork', 'IronPath Concrete'],
  ['Craftline Cabinetry', 'IronPath Concrete'],
  ['Craftline', 'IronPath'],
  ['Elena Vargas', 'Ray Delgado'],
  ['Elena', 'Ray'],

  // Warranty / credentials
  ['5-Year Craftsmanship Warranty', '5-Year Workmanship Warranty'],
  ['5-Yr Craftsmanship Warranty', '5-Yr Workmanship Warranty'],
  ['5-Year Craftsmanship', '5-Year Workmanship'],
  ['Licensed Contractor · Custom Shop', 'ACI-Trained Finishers · Bonded & Insured'],
  ['Licensed Contractor', 'ACI-Trained · Bonded & Insured'],
  ['Custom Shop', 'ACI-Trained Finishers'],
  ['Free Design Consultations', 'Free On-Site Estimates'],
  ['Free design consultations', 'Free on-site estimates'],
  ['Free Design Consultation', 'Free On-Site Estimate'],
  ['Free design consultation', 'Free on-site estimate'],
  ['Free Consults', 'Free Estimates'],
  ['design consult', 'on-site estimate'],
  ['shop-built', 'crew-poured'],
  ['Shop-built', 'Crew-poured'],
  ['Shop-Built', 'Crew-Poured'],
  ['custom shop', 'local concrete crews'],
  ['1,200+ Custom Installs', '4,000+ Pours'],
  ['1,200+ custom installs', '4,000+ pours'],
  ['1200', '4000'],
  ['340+ Reviews', '900+ Reviews'],
  ['340+ reviews', '900+ reviews'],
  ['300+ reviews', '900+ reviews'],

  // Service path rewrites (cabinet → concrete)
  ['/services/custom-cabinets', '/services/driveways'],
  ['/services/kitchen-remodel-millwork', '/services/patios-walkways'],
  ['/services/bathroom-vanities', '/services/foundations'],
  ['/services/commercial-millwork', '/services/commercial-flatwork'],
  ['/services/cabinet-refacing', '/services/stamped-decorative'],
  ['/services/closet-built-ins', '/services/concrete-repair'],

  // Industry paths
  ['/industries/homebuilders-developers', '/industries/homebuilders'],
  ['/industries/interior-designers', '/industries/property-management'],
  ['/industries/commercial-hospitality', '/industries/municipalities'],

  // Labels
  ['Custom Cabinets', 'Driveways'],
  ['Kitchen Remodel Millwork', 'Patios & Walkways'],
  ['Bathroom Vanities', 'Foundations'],
  ['Commercial Millwork', 'Commercial Flatwork'],
  ['Cabinet Refacing', 'Stamped & Decorative'],
  ['Closet & Built-Ins', 'Concrete Repair'],
  ['Closet & Built-Ins', 'Concrete Repair'],
  ['Homebuilders & Developers', 'Homebuilders'],
  ['Interior Designers', 'Property Management'],
  ['Commercial & Hospitality', 'Municipalities & Public Works'],

  // Generic millwork/cabinet language
  ['cabinets and fine millwork', 'driveways, patios, and foundations'],
  ['custom cabinets and millwork', 'concrete driveways and flatwork'],
  ['Custom cabinets and fine millwork', 'Driveways, patios, and foundations'],
  ['cabinetry and millwork', 'concrete and flatwork'],
  ['cabinet and millwork', 'concrete and flatwork'],
  ['cabinets and millwork', 'concrete pours and flatwork'],
  ['custom cabinet shop', 'concrete contractor'],
  ['custom cabinets', 'concrete driveways'],
  ['Custom cabinets', 'Concrete driveways'],
  ['millwork', 'flatwork'],
  ['Millwork', 'Flatwork'],
  ['cabinets', 'concrete'],
  ['Cabinets', 'Concrete'],
  ['cabinet', 'concrete'],
  ['Cabinet', 'Concrete'],
  ['fabrication', 'pour prep'],
  ['Fabrication', 'Pour prep'],
  ['fabricate', 'pour'],
  ['shop tours', 'site visits'],
  ['door styles', 'finish options'],
  ['wood species', 'mix designs'],
  ['soft-close', 'control-joint'],
  ['vanities', 'slabs'],
  ['kitchens', 'driveways'],
  ['kitchen', 'driveway'],
  ['Kitchen', 'Driveway'],

  // Hex leftovers (HVAC orange)
  ['#f97316', '#b45309'],
  ['#fb923c', '#d97706'],
  ['#c2410c', '#92400e'],

  // HVAC leftovers if any remain
  ['Arctic Air HVAC', 'IronPath Concrete'],
  ['Arctic Air', 'IronPath'],
  ['arcticairhvac.com', 'ironpathconcrete.com'],
  ['contact@arcticairhvac.com', 'hello@ironpathconcrete.com'],
  ['+12549001234', '+12547504400'],
  ['(254) 900-1234', '(254) 750-4400'],
  ['254-900-1234', '254-750-4400'],
  ['NATE Certified', 'ACI-Trained'],
  ['NATE-certified', 'ACI-trained'],
  ['NATE · TDLR', 'ACI · Insured'],
  ['Mike Hawkins', 'Ray Delgado'],
  ['4521 Bosque Blvd', '1800 S University Parks Dr'],
  ['76710', '76706'],
];

let changed = 0;
for (const file of walk(ROOT)) {
  // skip this script and apply-reskin to avoid self-mutation chaos
  if (file.includes(`${path.sep}scripts${path.sep}`)) continue;
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;
  for (const [from, to] of pairs) {
    if (text.includes(from)) text = text.split(from).join(to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
    console.log('updated', path.relative(ROOT, file));
  }
}
console.log('Files updated:', changed);
