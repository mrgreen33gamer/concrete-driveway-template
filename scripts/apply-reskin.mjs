/**
 * IronPath Concrete — full reskin generator
 * Run: node scripts/apply-reskin.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const write = (rel, content) => {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('wrote', rel);
};

const rmrf = (rel) => {
  const full = path.join(ROOT, rel);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log('rm', rel);
  }
};

// ─── SERVICE PAGE TEMPLATE ───────────────────────────────────────────────────
const servicePage = (s) => `// IronPath Concrete — ${s.name} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  ${s.iconImport}
} from "@fortawesome/free-solid-svg-icons";

export default function ${s.fn}() {

  const expectations = [
${s.expectations.map(([icon, title, desc]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)} },`).join('\n')}
  ];

  const whyFeatures = [
${s.why.map(([icon, title, desc]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)} },`).join('\n')}
  ];

  const processSteps = [
${s.process.map(([n, title, desc, icon]) => `    { number: ${n}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)}, icon: ${icon} },`).join('\n')}
  ];

  const metrics = [
    { icon: faTrophy,    value: ${s.metrics[0][0]}, label: ${JSON.stringify(s.metrics[0][1])}, suffix: ${JSON.stringify(s.metrics[0][2])}, duration: ${s.metrics[0][3]} },
    { icon: faChartLine, value: ${s.metrics[1][0]}, label: ${JSON.stringify(s.metrics[1][1])}, suffix: ${JSON.stringify(s.metrics[1][2])}, duration: ${s.metrics[1][3]} },
    { icon: faClock,     value: ${s.metrics[2][0]}, label: ${JSON.stringify(s.metrics[2][1])}, suffix: ${JSON.stringify(s.metrics[2][2])}, duration: ${s.metrics[2][3]} },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for ${s.short.toLowerCase()}.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full ${s.short.toLowerCase()} coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway ${s.short.toLowerCase()}.", badge: "" },
    { town: "Temple",       benefit: "Bell County ${s.short.toLowerCase()} — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
${s.comparison.map(([f, us, o]) => `    { feature: ${JSON.stringify(f)}, us: ${JSON.stringify(us)}, others: ${JSON.stringify(o)} },`).join('\n')}
  ];

  const faq = [
${s.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join('\n')}
  ];

  const crossServices = [
${s.cross.map(([icon, title, body, link]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, body: ${JSON.stringify(body)}, link: ${JSON.stringify(link)} },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: ${JSON.stringify(s.short)} },
      ]} />
      <SectionIntro
        title={${JSON.stringify(s.name + ' in Waco, TX')}}
        subtitle={${JSON.stringify(s.subtitle)}}
      />
      <TrustBar headline={${JSON.stringify(s.trust)}} />
      <div className={styles.section}><WhatToExpect sectionTitle={${JSON.stringify('What Happens on a ' + s.short + ' Project')}} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify('Why Homeowners Choose IronPath for ' + s.short)}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={${JSON.stringify('services/' + s.slug)}} title={${JSON.stringify(s.short + ' Across Central Texas')}} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={${JSON.stringify(s.short + ' FAQs')}} /></div>
      <CTABanner
        headline={${JSON.stringify('Ready for ' + s.short + ' Done Right?')}}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={${JSON.stringify('Get a Free ' + s.short + ' Estimate')}}
          cityName="Waco"
          slug={${JSON.stringify(s.slug)}}
          spot={${JSON.stringify(s.slug + '-page')}}
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;

const serviceLayout = (s) => `import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: '${s.name} in Waco, TX | IronPath Concrete',
  description: '${s.desc}',
  keywords: ${JSON.stringify(s.keywords)},
  alternates: { canonical: \`\${BASE}/services/${s.slug}\` },
  openGraph: {
    title: '${s.name} | IronPath Concrete — Waco, TX',
    description: '${s.desc}',
    url: \`\${BASE}/services/${s.slug}\`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

const SERVICES = [
  {
    slug: 'driveways',
    name: 'Concrete Driveways',
    short: 'Driveways',
    fn: 'DrivewaysPage',
    iconImport: 'faRoad, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faPersonWalking, faHouse, faIndustry, faWrench',
    subtitle: 'New concrete driveways and replacements — proper base prep, control joints, and broom finishes built for Central Texas heat and soil. Flat-rate quotes, 5-Year Workmanship Warranty.',
    trust: '4,000+ pours across Central Texas by IronPath Concrete',
    expectations: [
      ['faSearch', 'On-Site Measure & Grade Check', 'We measure square footage, check drainage, and review access before quoting — no ballpark guesses from a photo.'],
      ['faFileContract', 'Flat-Rate Written Quote', 'Excavation, base, forms, concrete, finish, and cleanup are in the number. No surprise change orders mid-pour.'],
      ['faCheckCircle', 'Code-Ready Base & Joints', 'Proper compaction, thickness, and control joints so your driveway lasts through Texas summers and clay soil movement.'],
      ['faShieldHalved', '5-Year Workmanship Warranty', 'Every driveway pour is backed by our 5-Year Workmanship Warranty on finish and installation.'],
    ],
    why: [
      ['faClock', 'Clear Pour Schedule', 'We give you a realistic pour window and cure timeline so you know when you can park again.'],
      ['faRoad', 'Built for Texas Soil', 'We design thickness and joints for Central Texas clay expansion — not a thin slab that cracks in year two.'],
      ['faShieldHalved', 'ACI-Trained Finishers · Bonded & Insured', 'Crews led by ACI-trained finishers. Fully bonded and insured on every pour.'],
    ],
    process: [
      [1, 'Free Estimate', 'We measure, check grade and drainage, and recommend thickness and finish.', 'faHeadset'],
      [2, 'Quote & Schedule', 'You get a flat-rate quote. We schedule excavation, forms, and pour day.', 'faSearch'],
      [3, 'Pour Day', 'Base prepped, forms set, concrete placed and finished with proper control joints.', 'faFileContract'],
      [4, 'Cure & Warranty', 'We walk you through cure care and back the work with our 5-year warranty.', 'faCheckCircle'],
    ],
    metrics: [[1200, 'Driveways poured in Central Texas', '+', 3], [99, 'On-schedule pour rate', '%', 2], [18, 'Years pouring Waco-area driveways', '+', 2]],
    comparison: [
      ['Proper base prep & compaction', '✅ Always', '❌ Often skipped'],
      ['Flat-rate quote (base + pour + finish)', '✅ Written', '❌ Hourly + extras'],
      ['5-Year Workmanship Warranty', '✅ Every pour', '❌ Rare'],
      ['ACI-trained finishers', '✅ All crews', '❌ Varies'],
      ['Control joints planned for Texas clay', '✅ Standard', '❌ Guesswork'],
    ],
    faq: [
      ['How much does a concrete driveway cost in Waco?', 'Most residential driveways run based on square footage, thickness, access, and whether we replace an existing slab. We provide a flat-rate written quote after an on-site measure.'],
      ['How long before I can drive on new concrete?', 'Light foot traffic is usually fine after 24–48 hours. Vehicles typically wait 7 days; full strength continues to build for weeks. We give you a specific timeline for your pour.'],
      ['Do you remove the old driveway?', 'Yes — demolition, haul-away, and re-pour can be included in one quote so one crew handles the full job.'],
      ['What finish options do you offer?', 'Standard broom finish is most popular for traction. We also offer stamped and decorative options — see our stamped & decorative service.'],
      ['Do you handle permits?', 'When a permit is required by the city or HOA, we coordinate the process and include known permit costs in your quote.'],
      ['Will my driveway crack?', 'All concrete can develop hairline cracks; proper base, thickness, and control joints minimize structural cracking. Our warranty covers workmanship defects.'],
    ],
    cross: [
      ['faPersonWalking', 'Patios & Walkways', 'Matching patio and walkway pours that tie the whole property together.', '/services/patios-walkways'],
      ['faHouse', 'Foundations', 'Structural slabs and foundation pours for new builds and additions.', '/services/foundations'],
      ['faWrench', 'Concrete Repair', 'Crack repair, leveling, and section replacement on existing slabs.', '/services/concrete-repair'],
      ['faIndustry', 'Commercial Flatwork', 'Parking pads, sidewalks, and commercial slabs on schedule.', '/services/commercial-flatwork'],
    ],
    keywords: ['concrete driveway Waco TX', 'driveway installation Waco', 'new concrete driveway Central Texas', 'driveway replacement Hewitt', 'broom finish driveway Woodway'],
    desc: 'Concrete driveway installation and replacement in Waco, TX. Proper base prep, flat-rate quotes, ACI-trained finishers, 5-Year Workmanship Warranty.',
  },
  {
    slug: 'patios-walkways',
    name: 'Patios & Walkways',
    short: 'Patios & Walkways',
    fn: 'PatiosWalkwaysPage',
    iconImport: 'faPersonWalking, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faHouse, faIndustry, faWrench',
    subtitle: 'Patio slabs, sidewalks, and walkways with clean edges, proper slope, and finishes that hold up to Texas sun. Flat-rate quotes, 5-Year Workmanship Warranty.',
    trust: 'Outdoor living concrete done right by IronPath',
    expectations: [
      ['faSearch', 'Layout & Drainage First', 'We set elevations so water drains away from the house — not toward the foundation.'],
      ['faFileContract', 'Flat-Rate Written Quote', 'Forms, concrete, finish, and cleanup in one number before we start.'],
      ['faCheckCircle', 'Clean Edges & Joints', 'Straight lines, consistent finish, and joints that control cracking.'],
      ['faShieldHalved', '5-Year Workmanship Warranty', 'Patio and walkway pours covered by our 5-year workmanship warranty.'],
    ],
    why: [
      ['faClock', 'Coordinated With Your Schedule', 'We pour when weather and your project timeline line up — clear communication.'],
      ['faPersonWalking', 'Traction-Smart Finishes', 'Broom and other finishes chosen for outdoor grip, not just looks.'],
      ['faShieldHalved', 'Bonded & Insured Crews', 'ACI-trained finishers on residential outdoor pours across Central Texas.'],
    ],
    process: [
      [1, 'Site Visit', 'Measure patio or walkway layout, check slope and access.', 'faHeadset'],
      [2, 'Quote', 'Flat-rate price for prep, pour, and finish.', 'faSearch'],
      [3, 'Form & Pour', 'Base, forms, place, finish, and joint.', 'faFileContract'],
      [4, 'Cure Guidance', 'Care instructions and warranty paperwork.', 'faCheckCircle'],
    ],
    metrics: [[900, 'Patio & walkway pours completed', '+', 3], [98, 'Customer satisfaction rating', '%', 2], [18, 'Years of outdoor flatwork', '+', 2]],
    comparison: [
      ['Proper slope away from foundation', '✅ Planned', '❌ Often ignored'],
      ['Flat-rate outdoor pour quote', '✅ Written', '❌ Vague estimate'],
      ['5-Year Workmanship Warranty', '✅ Included', '❌ Short or none'],
      ['Matching driveway finish available', '✅ Yes', '❌ Separate contractors'],
    ],
    faq: [
      ['How much does a concrete patio cost in Waco?', 'Depends on size, thickness, access, and finish. We quote flat-rate after measuring on site.'],
      ['Can you match my driveway?', 'Often yes — we can match broom texture and color tones closely on new pours.'],
      ['How soon can we use the patio?', 'Light foot traffic usually after 24–48 hours; furniture after several days. We specify for your pour.'],
      ['Do you do stamped patios?', 'Yes — see our Stamped & Decorative Concrete service for pattern and color options.'],
      ['Will water pool on the patio?', 'We design slope for drainage. Standing water is almost always a grade issue we solve in the plan.'],
      ['Can you pour walkways to the driveway?', 'Yes — continuous pours or matched sections so the property looks intentional.'],
    ],
    cross: [
      ['faRoad', 'Driveways', 'New and replacement residential driveways.', '/services/driveways'],
      ['faHouse', 'Foundations', 'Structural foundation pours.', '/services/foundations'],
      ['faWrench', 'Concrete Repair', 'Repair cracked outdoor slabs.', '/services/concrete-repair'],
      ['faIndustry', 'Stamped & Decorative', 'Patterned and colored concrete finishes.', '/services/stamped-decorative'],
    ],
    keywords: ['concrete patio Waco TX', 'sidewalk installation Waco', 'walkway concrete Central Texas', 'patio slab Hewitt TX'],
    desc: 'Concrete patios and walkways in Waco, TX. Drainage-smart layouts, clean finishes, flat-rate quotes, 5-Year Workmanship Warranty.',
  },
  {
    slug: 'foundations',
    name: 'Foundations',
    short: 'Foundations',
    fn: 'FoundationsPage',
    iconImport: 'faHouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faIndustry, faWrench',
    subtitle: 'Residential and light commercial foundation slabs, footings, and structural flatwork coordinated with builders. Permit-ready, ACI-trained, 5-Year Workmanship Warranty.',
    trust: 'Builder-trusted foundation pours across Central Texas',
    expectations: [
      ['faSearch', 'Plans & Elevations Reviewed', 'We pour to the drawings — rebar, thickness, and elevations verified before the truck arrives.'],
      ['faFileContract', 'Builder-Friendly Scheduling', 'Clear pour windows that fit framing schedules and inspections.'],
      ['faCheckCircle', 'Structural Best Practices', 'Proper reinforcement placement, consolidation, and finish for slabs-on-grade.'],
      ['faShieldHalved', '5-Year Workmanship Warranty', 'Foundation workmanship covered for five years.'],
    ],
    why: [
      ['faClock', 'On the Critical Path', 'We show up ready so your project does not sit waiting on concrete.'],
      ['faHouse', 'Homebuilder Experience', 'Repeated work with Central Texas builders on production and custom homes.'],
      ['faShieldHalved', 'Bonded & Insured', 'ACI-trained finishers and full insurance documentation for GCs.'],
    ],
    process: [
      [1, 'Review Plans', 'Scope, rebar, thickness, and schedule with builder or homeowner.', 'faHeadset'],
      [2, 'Site Ready Check', 'Forms, grade, and steel verified before pour day.', 'faSearch'],
      [3, 'Pour & Finish', 'Place, consolidate, finish, and cut joints as specified.', 'faFileContract'],
      [4, 'Inspect & Warranty', 'Walkthrough for GC/homeowner; warranty documentation.', 'faCheckCircle'],
    ],
    metrics: [[600, 'Foundation pours completed', '+', 3], [99, 'First-pass inspection rate', '%', 2], [18, 'Years serving builders & owners', '+', 2]],
    comparison: [
      ['Pour-day readiness checklist', '✅ Standard', '❌ Often rushed'],
      ['Builder schedule coordination', '✅ Reliable', '❌ No-shows'],
      ['5-Year Workmanship Warranty', '✅ Included', '❌ Limited'],
      ['ACI-trained finishers', '✅ All crews', '❌ Varies'],
    ],
    faq: [
      ['Do you pour house foundations in Waco?', 'Yes — residential slabs and related foundation flatwork for new homes and additions.'],
      ['Can you work from engineer plans?', 'Yes. We pour to approved plans and coordinate with inspections as required.'],
      ['Do you supply rebar?', 'Scope is quoted clearly — rebar supply and placement can be included or coordinated with your framing crew.'],
      ['How far in advance should we book?', 'Builder production pours should be scheduled as early as possible; residential additions often book 1–3 weeks out depending on season.'],
      ['Do you pour piers?', 'We focus on flatwork slabs and related foundation concrete — ask us about your specific foundation type.'],
      ['What warranty applies?', '5-Year Workmanship Warranty on our pour and finish workmanship.'],
    ],
    cross: [
      ['faRoad', 'Driveways', 'Site driveways after foundation.', '/services/driveways'],
      ['faPersonWalking', 'Patios & Walkways', 'Outdoor living slabs.', '/services/patios-walkways'],
      ['faIndustry', 'Commercial Flatwork', 'Commercial slabs and sidewalks.', '/services/commercial-flatwork'],
      ['faWrench', 'Concrete Repair', 'Foundation crack assessment & repair guidance.', '/services/concrete-repair'],
    ],
    keywords: ['concrete foundation Waco TX', 'slab foundation pour Central Texas', 'home foundation concrete Waco', 'builder foundation contractor'],
    desc: 'Residential and light commercial foundation concrete in Waco, TX. Plan-driven pours, builder scheduling, ACI-trained finishers, 5-Year Workmanship Warranty.',
  },
  {
    slug: 'stamped-decorative',
    name: 'Stamped & Decorative Concrete',
    short: 'Stamped & Decorative',
    fn: 'StampedDecorativePage',
    iconImport: 'faIndustry, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faHouse, faWrench',
    subtitle: 'Stamped patterns, integral color, and decorative finishes that look like stone or brick — with the durability of concrete. Flat-rate design quotes, 5-Year Workmanship Warranty.',
    trust: 'Decorative concrete that stands up to Texas weather',
    expectations: [
      ['faSearch', 'Pattern & Color Selection', 'We review stamp patterns and color samples so expectations match the finished pour.'],
      ['faFileContract', 'Decorative Scope in Writing', 'Base pour plus decorative process priced upfront — no vague “it depends” mid-job.'],
      ['faCheckCircle', 'Sealed Finish Options', 'Sealer recommendations for UV and traffic based on use.'],
      ['faShieldHalved', '5-Year Workmanship Warranty', 'Decorative pours backed by the same workmanship warranty.'],
    ],
    why: [
      ['faClock', 'Weather-Smart Scheduling', 'Stamped work needs the right temperature window — we plan for Texas conditions.'],
      ['faIndustry', 'Curb Appeal Without Pavers', 'Get the look of stone or brick with a monolithic pour that is easier to maintain.'],
      ['faShieldHalved', 'Experienced Decorative Crews', 'Finishers trained for stamps, releases, and clean detailing.'],
    ],
    process: [
      [1, 'Design Consult', 'Pick pattern, color, and borders for patio, walkway, or driveway accents.', 'faHeadset'],
      [2, 'Quote', 'Full decorative scope in a flat-rate quote.', 'faSearch'],
      [3, 'Pour & Stamp', 'Place, color, stamp, detail edges and joints.', 'faFileContract'],
      [4, 'Seal & Care', 'Sealer timing and care guide for long-term color.', 'faCheckCircle'],
    ],
    metrics: [[450, 'Decorative pours completed', '+', 3], [4.9, 'Average customer rating', '★', 2], [18, 'Years of finish craftsmanship', '+', 2]],
    comparison: [
      ['Pattern samples before pour', '✅ Always', '❌ Surprise finish'],
      ['Color process explained', '✅ Clear options', '❌ Vague'],
      ['5-Year Workmanship Warranty', '✅ Included', '❌ Decorative excluded'],
      ['Sealer guidance included', '✅ Yes', '❌ Homeowner guesses'],
    ],
    faq: [
      ['How much does stamped concrete cost vs. plain?', 'Stamped and colored work costs more than broom finish due to labor and materials. We quote the full decorative package after design selection.'],
      ['Does stamped concrete crack?', 'It is still concrete — control joints and proper base matter. Stamping does not prevent movement cracks if the slab is poorly built.'],
      ['Can you stamp a driveway?', 'Yes for many residential driveways; we discuss traffic, pattern scale, and maintenance first.'],
      ['How long does color last?', 'Integral color and quality sealers hold up well; resealing intervals depend on sun and traffic. We advise a maintenance plan.'],
      ['Can you match existing stamped work?', 'We can get close with pattern and color; exact matches to aged work are never perfect — we set realistic expectations.'],
      ['Is stamped harder to maintain than pavers?', 'Usually easier — no sand joints to weed. Occasional cleaning and resealing keep it sharp.'],
    ],
    cross: [
      ['faPersonWalking', 'Patios & Walkways', 'Ideal base projects for decorative finishes.', '/services/patios-walkways'],
      ['faRoad', 'Driveways', 'Broom or decorative driveway options.', '/services/driveways'],
      ['faWrench', 'Concrete Repair', 'Fix damaged decorative sections.', '/services/concrete-repair'],
      ['faHouse', 'Foundations', 'Structural pours before decorative exterior work.', '/services/foundations'],
    ],
    keywords: ['stamped concrete Waco TX', 'decorative concrete patio Waco', 'colored concrete Central Texas', 'stamped driveway Temple'],
    desc: 'Stamped and decorative concrete in Waco, TX. Patterns, color, and sealed finishes with flat-rate quotes and 5-Year Workmanship Warranty.',
  },
  {
    slug: 'concrete-repair',
    name: 'Concrete Repair',
    short: 'Concrete Repair',
    fn: 'ConcreteRepairPage',
    iconImport: 'faWrench, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faHouse, faIndustry',
    subtitle: 'Crack repair, section replacement, spall fixes, and leveling guidance for driveways, patios, and slabs. Honest assessment — repair when it makes sense, replace when it does not.',
    trust: 'Honest repair recommendations — not every crack needs a full tear-out',
    expectations: [
      ['faSearch', 'Honest Diagnosis', 'We tell you when a repair will last and when replacement is the smarter spend.'],
      ['faFileContract', 'Clear Repair Scope', 'Written price for the repair area — not open-ended time and materials surprises.'],
      ['faCheckCircle', 'Matched Finish When Possible', 'We blend repairs to adjacent concrete as closely as practical.'],
      ['faShieldHalved', 'Workmanship Warranty', 'Repairs we perform are backed by our workmanship warranty terms.'],
    ],
    why: [
      ['faClock', 'Faster Than Full Replacement', 'Targeted repairs get you safe and functional without a full project timeline.'],
      ['faWrench', 'Structural vs. Cosmetic', 'We separate safety issues from hairline cosmetics so you prioritize correctly.'],
      ['faShieldHalved', 'Local Experience With Texas Clay', 'We understand settlement and movement common to Central Texas soils.'],
    ],
    process: [
      [1, 'Inspect', 'On-site assessment of cracks, settlement, and drainage causes.', 'faHeadset'],
      [2, 'Recommend', 'Repair, partial replace, or full replace — with reasons.', 'faSearch'],
      [3, 'Execute', 'Repair work completed cleanly with proper prep.', 'faFileContract'],
      [4, 'Follow-Up', 'Care tips and warranty on the work performed.', 'faCheckCircle'],
    ],
    metrics: [[800, 'Repair projects completed', '+', 3], [95, 'Clients who say we were honest about options', '%', 2], [18, 'Years diagnosing Central Texas slabs', '+', 2]],
    comparison: [
      ['Honest repair vs replace advice', '✅ Always', '❌ Upsell full pour'],
      ['Written repair quote', '✅ Yes', '❌ Vague'],
      ['Cause assessment (drainage/soil)', '✅ Included', '❌ Band-aid only'],
      ['Match adjacent finish', '✅ Best effort', '❌ Obvious patch'],
    ],
    faq: [
      ['Can cracked driveway concrete be repaired?', 'Often yes for localized damage. Widespread structural failure may need section or full replacement — we will say which.'],
      ['Do you mudjack or poly-level?', 'We assess leveling needs and recommend the right approach or specialist referral when appropriate.'],
      ['How much does concrete repair cost?', 'Highly dependent on area and method. Small crack work costs far less than section replacement. On-site quotes are free.'],
      ['Is a hairline crack normal?', 'Hairline shrinkage cracks are common. We focus on cracks that grow, trip hazards, or water intrusion.'],
      ['Can you repair stamped concrete?', 'Decorative repairs are more visible; we discuss realistic blend quality before starting.'],
      ['When should I call about foundation cracks?', 'Call for horizontal cracks, stair-step masonry cracks, or doors that stick — early assessment prevents bigger issues. See our foundation crack blog.'],
    ],
    cross: [
      ['faRoad', 'Driveways', 'Full driveway replacement when repair is not enough.', '/services/driveways'],
      ['faPersonWalking', 'Patios & Walkways', 'Replace failing outdoor slabs.', '/services/patios-walkways'],
      ['faHouse', 'Foundations', 'Structural pours and foundation flatwork.', '/services/foundations'],
      ['faIndustry', 'Stamped & Decorative', 'Decorative replacement sections.', '/services/stamped-decorative'],
    ],
    keywords: ['concrete repair Waco TX', 'driveway crack repair Waco', 'concrete leveling Central Texas', 'slab repair Hewitt'],
    desc: 'Concrete repair in Waco, TX — cracks, sections, and honest replace-vs-repair advice. Flat-rate quotes and workmanship warranty.',
  },
  {
    slug: 'commercial-flatwork',
    name: 'Commercial Flatwork',
    short: 'Commercial Flatwork',
    fn: 'CommercialFlatworkPage',
    iconImport: 'faIndustry, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faHouse, faWrench',
    subtitle: 'Parking pads, sidewalks, dumpster pads, equipment pads, and light commercial slabs for property managers and municipalities. Schedule-driven, insured, 5-Year Workmanship Warranty.',
    trust: 'Commercial concrete on your opening date — not when it is convenient for us',
    expectations: [
      ['faSearch', 'Scope From Plans or Site Walk', 'We quote from drawings or a site walk with clear square footage and thickness.'],
      ['faFileContract', 'Commercial Documentation', 'COI, scheduling, and invoice clarity for PMs and municipalities.'],
      ['faCheckCircle', 'Traffic-Ready Specs', 'Thickness and finish matched to vehicle or pedestrian use.'],
      ['faShieldHalved', 'Bonded & Insured', 'Full insurance for commercial and public-works adjacent jobs.'],
    ],
    why: [
      ['faClock', 'Reliable Mobilization', 'We protect your tenant openings and municipal timelines.'],
      ['faIndustry', 'PM & City Experience', 'Property management and public-works flatwork is core work for us.'],
      ['faShieldHalved', 'ACI-Trained Finishers', 'Commercial finish standards, not residential-only crews.'],
    ],
    process: [
      [1, 'Bid / Scope', 'Plans review or site measure with written commercial quote.', 'faHeadset'],
      [2, 'Schedule Lock', 'Pour window coordinated with other trades and access.', 'faSearch'],
      [3, 'Pour', 'Mobilized crew, proper traffic control coordination as needed.', 'faFileContract'],
      [4, 'Closeout', 'Walkthrough, punch, warranty docs, invoice.', 'faCheckCircle'],
    ],
    metrics: [[350, 'Commercial flatwork projects', '+', 3], [98, 'On-schedule mobilization', '%', 2], [18, 'Years commercial & municipal work', '+', 2]],
    comparison: [
      ['COI & commercial paperwork ready', '✅ Fast', '❌ Delays start'],
      ['Schedule-driven pour windows', '✅ Reliable', '❌ Flexible-only'],
      ['5-Year Workmanship Warranty', '✅ Available', '❌ Limited'],
      ['PM-friendly communication', '✅ Standard', '❌ Hard to reach'],
    ],
    faq: [
      ['Do you pour commercial sidewalks and pads?', 'Yes — sidewalks, parking pads, equipment pads, dumpster pads, and similar light commercial flatwork.'],
      ['Can you work nights or off-hours?', 'Often yes for access-sensitive sites — discuss at bid time.'],
      ['Do you work with municipalities?', 'Yes — public-works flatwork within our capacity and insurance profile.'],
      ['What about prevailing wage or bonded jobs?', 'Tell us bid requirements early so we can confirm eligibility and paperwork.'],
      ['How large of a pour can you handle?', 'We scale crews and suppliers to the pour; multi-day commercial sequences are common.'],
      ['Do you offer warranties on commercial work?', 'Yes — 5-Year Workmanship Warranty on our workmanship, terms confirmed in the contract.'],
    ],
    cross: [
      ['faHouse', 'Foundations', 'Structural residential and light commercial slabs.', '/services/foundations'],
      ['faRoad', 'Driveways', 'Residential driveway pours.', '/services/driveways'],
      ['faWrench', 'Concrete Repair', 'Commercial slab repairs.', '/services/concrete-repair'],
      ['faPersonWalking', 'Patios & Walkways', 'Residential outdoor pours.', '/services/patios-walkways'],
    ],
    keywords: ['commercial concrete Waco TX', 'commercial flatwork Central Texas', 'sidewalk contractor Waco', 'property management concrete'],
    desc: 'Commercial flatwork in Waco, TX — pads, sidewalks, and light commercial slabs for PMs and municipalities. Insured, schedule-driven.',
  },
];

// ─── INDUSTRY PAGE TEMPLATE ──────────────────────────────────────────────────
const industryPage = (ind) => `// IronPath Concrete — ${ind.name}
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant4         from "#/PageComponents/ContactForms/Variant4/Form";

import {
  ${ind.iconImport}
} from "@fortawesome/free-solid-svg-icons";

export default function ${ind.fn}() {
  const whyFeatures = [
${ind.why.map(([icon, title, desc]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)} },`).join('\n')}
  ];

  const processSteps = [
${ind.process.map(([n, title, desc, icon]) => `    { number: ${n}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)}, icon: ${icon} },`).join('\n')}
  ];

  const metrics = [
    { icon: faTrophy, value: ${ind.metrics[0][0]}, label: ${JSON.stringify(ind.metrics[0][1])}, suffix: ${JSON.stringify(ind.metrics[0][2])}, duration: 3 },
    { icon: faChartLine, value: ${ind.metrics[1][0]}, label: ${JSON.stringify(ind.metrics[1][1])}, suffix: ${JSON.stringify(ind.metrics[1][2])}, duration: 2 },
    { icon: faClock, value: ${ind.metrics[2][0]}, label: ${JSON.stringify(ind.metrics[2][1])}, suffix: ${JSON.stringify(ind.metrics[2][2])}, duration: 2 },
  ];

  const faq = [
${ind.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: ${JSON.stringify(ind.name)} },
      ]} />
      <SectionIntro
        title={${JSON.stringify(ind.name + ' Concrete Partner — Waco & Central Texas')}}
        subtitle={${JSON.stringify(ind.subtitle)}}
      />
      <TrustBar headline={${JSON.stringify(ind.trust)}} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify('Why ' + ind.name + ' Choose IronPath')}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={${JSON.stringify(ind.name + ' FAQs')}} /></div>
      <CTABanner
        headline={${JSON.stringify('Need a Reliable Concrete Partner?')}}
        subline="Flat-rate commercial and production quotes. ACI-trained finishers. Bonded & insured. Call (254) 750-4400."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={${JSON.stringify('Request a Bid for ' + ind.name)}}
          cityName="Waco"
          slug={${JSON.stringify(ind.slug)}}
          spot={${JSON.stringify(ind.slug + '-industry')}}
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;

const industryLayout = (ind) => `import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: '${ind.name} Concrete Contractor | IronPath Concrete — Waco, TX',
  description: '${ind.desc}',
  alternates: { canonical: \`\${BASE}/industries/${ind.slug}\` },
  openGraph: {
    title: '${ind.name} | IronPath Concrete',
    description: '${ind.desc}',
    url: \`\${BASE}/industries/${ind.slug}\`,
    siteName: 'IronPath Concrete',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

const INDUSTRIES = [
  {
    slug: 'homebuilders',
    name: 'Homebuilders',
    fn: 'HomebuildersPage',
    iconImport: 'faHardHat, faClock, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine',
    subtitle: 'Production and custom homebuilders need concrete partners who hit pour windows, pass inspection, and do not hold up framing. IronPath delivers foundation and flatwork for Central Texas builders.',
    trust: 'Preferred concrete partner for Central Texas homebuilders',
    why: [
      ['faHardHat', 'Production-Ready Scheduling', 'We protect your framing schedule with reliable pour-day mobilization and clear communication.'],
      ['faShieldHalved', 'Inspection-Ready Work', 'Thickness, steel, and finish standards that pass first-pass inspections.'],
      ['faUsers', 'Builder-Friendly Crews', 'Professional crews that coordinate with your supers and other trades on site.'],
    ],
    process: [
      [1, 'Scope & Bid', 'Plans review and competitive production pricing.', 'faHeadset'],
      [2, 'Schedule', 'Lock pour windows into your construction calendar.', 'faSearch'],
      [3, 'Pour', 'On-time placement and finish to plan.', 'faFileContract'],
      [4, 'Closeout', 'Walkthrough and warranty documentation.', 'faCheckCircle'],
    ],
    metrics: [[400, 'Builder pours completed', '+'], [99, 'First-pass inspection rate', '%'], [18, 'Years with Central Texas builders', '+']],
    faq: [
      ['Do you pour production home slabs?', 'Yes — production and custom residential foundations and related flatwork.'],
      ['Can you support multiple simultaneous sites?', 'Yes within crew capacity — we plan mobilization with your supers.'],
      ['Do you provide COIs quickly?', 'Yes — insurance documentation is standard for builder accounts.'],
      ['What is your typical lead time?', 'Season and volume dependent; established builder accounts get priority scheduling.'],
    ],
    desc: 'Concrete partner for homebuilders in Waco and Central Texas — foundations and flatwork on production schedules.',
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    fn: 'PropertyManagementPage',
    iconImport: 'faBuilding, faClock, faShieldHalved, faClipboardCheck, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine',
    subtitle: 'Multifamily and commercial property managers need safe sidewalks, parking pads, and repairs without tenant chaos. IronPath delivers flat-rate scopes, COIs, and schedule-aware crews.',
    trust: 'Flatwork and repair partner for Central Texas property managers',
    why: [
      ['faBuilding', 'Tenant-Aware Scheduling', 'We work around access windows and occupied sites carefully.'],
      ['faClipboardCheck', 'Clear Scopes & Invoices', 'Written scopes PM teams can approve and file.'],
      ['faShieldHalved', 'Fully Insured', 'COIs for property portfolios without chase-down delays.'],
    ],
    process: [
      [1, 'Site Walk', 'Assess sidewalks, pads, trip hazards, and drainage.', 'faHeadset'],
      [2, 'Written Scope', 'Flat-rate repair or replace options.', 'faSearch'],
      [3, 'Mobilize', 'Scheduled work with minimal tenant disruption.', 'faFileContract'],
      [4, 'Closeout', 'Photos, invoice, warranty.', 'faCheckCircle'],
    ],
    metrics: [[200, 'PM portfolio projects', '+'], [98, 'On-time start rate', '%'], [18, 'Years commercial flatwork', '+']],
    faq: [
      ['Do you handle multifamily sidewalk repairs?', 'Yes — trip-hazard repairs and section replacements are common PM work.'],
      ['Can you invoice per property?', 'Yes — we support property-level billing and documentation.'],
      ['Emergency trip hazard response?', 'Call (254) 750-4400 — we prioritize safety hazards when capacity allows.'],
      ['Do you pour dumpster and equipment pads?', 'Yes — commercial pads sized for use and traffic.'],
    ],
    desc: 'Concrete repair and flatwork for property management companies in Waco and Central Texas.',
  },
  {
    slug: 'municipalities',
    name: 'Municipalities & Public Works',
    fn: 'MunicipalitiesPage',
    iconImport: 'faLandmark, faClock, faShieldHalved, faRoad, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine',
    subtitle: 'Cities and public-works departments need dependable sidewalk, pad, and flatwork contractors who understand paperwork, access, and public safety. IronPath is bonded, insured, and schedule-driven.',
    trust: 'Public-works flatwork for Central Texas municipalities',
    why: [
      ['faLandmark', 'Public-Sector Ready', 'We understand bid docs, COIs, and public access constraints.'],
      ['faRoad', 'Sidewalks & Pads', 'Pedestrian flatwork, pads, and related municipal concrete within our capacity.'],
      ['faShieldHalved', 'Bonded & Insured', 'Coverage profile suitable for municipal and public-adjacent work.'],
    ],
    process: [
      [1, 'Bid Package', 'Review plans/specs and submit responsive pricing.', 'faHeadset'],
      [2, 'Award & Schedule', 'Coordinate access and traffic control needs.', 'faSearch'],
      [3, 'Construct', 'Safe work zones and quality finish.', 'faFileContract'],
      [4, 'Accept & Invoice', 'Punch list closeout and documentation.', 'faCheckCircle'],
    ],
    metrics: [[100, 'Municipal / public projects', '+'], [100, 'Safety-first job sites', '%'], [18, 'Years Central Texas public work', '+']],
    faq: [
      ['Do you bid municipal sidewalk projects?', 'Yes within our bonding and capacity — send bid packages to hello@ironpathconcrete.com.'],
      ['Prevailing wage jobs?', 'Confirm requirements at bid time so we can respond correctly.'],
      ['Emergency public sidewalk repairs?', 'Contact us for urgent trip-hazard work when schedules allow.'],
      ['Service area for public works?', 'Waco and Central Texas communities within our operational radius.'],
    ],
    desc: 'Municipal and public-works concrete flatwork in Central Texas — sidewalks, pads, and schedule-driven crews.',
  },
];

// ─── BLOG POST TEMPLATE ──────────────────────────────────────────────────────
const blogPage = (b) => `// IronPath Concrete — Blog: ${b.title}
"use client";

import styles from "../_shared/page.module.scss";
import BlogHero from "#/BlogComponents/BlogHero/BlogHero";
import BlogBody from "#/BlogComponents/BlogBody/BlogBody";
import BlogCTA from "#/BlogComponents/BlogCTA/BlogCTA";
import ContentSection from "#/BlogComponents/ContentSection/ContentSection";
import SectionWithTips from "#/BlogComponents/SectionWithTips/SectionWithTips";
import RelatedLinks from "#/BlogComponents/RelatedLinks/RelatedLinks";

export default function BlogPostPage() {
  return (
    <main className={styles.page}>
      <BlogHero
        title={${JSON.stringify(b.title)}}
        category={${JSON.stringify(b.category)}}
        date={${JSON.stringify(b.date)}}
        readTime={${b.readTime}}
        imageSrc={${JSON.stringify(b.imageSrc)}}
        imageAlt={${JSON.stringify(b.imageAlt)}}
      />
      <BlogBody>
${b.sections.map(sec => {
  if (sec.type === 'content') {
    return `        <ContentSection
          title={${JSON.stringify(sec.title)}}
          body={${JSON.stringify(sec.body)}}
        />`;
  }
  if (sec.type === 'tips') {
    return `        <SectionWithTips
          title={${JSON.stringify(sec.title)}}
          intro={${JSON.stringify(sec.intro)}}
          tips={${JSON.stringify(sec.tips)}}
        />`;
  }
  return '';
}).join('\n')}
        <RelatedLinks links={${JSON.stringify(b.related)}} />
      </BlogBody>
      <BlogCTA
        title={${JSON.stringify(b.ctaTitle)}}
        body={${JSON.stringify(b.ctaBody)}}
        buttonText="Get a Free Estimate"
        buttonHref="/contact"
      />
    </main>
  );
}
`;

const blogLayout = (b) => `import type { Metadata } from 'next';

const BASE = 'https://www.ironpathconcrete.com';

export const metadata: Metadata = {
  title: ${JSON.stringify(b.title + ' | IronPath Concrete')},
  description: ${JSON.stringify(b.excerpt)},
  keywords: ${JSON.stringify(b.keywords)},
  alternates: { canonical: \`\${BASE}/blogs/${b.slug}\` },
  openGraph: {
    title: ${JSON.stringify(b.title)},
    description: ${JSON.stringify(b.excerpt)},
    url: \`\${BASE}/blogs/${b.slug}\`,
    siteName: 'IronPath Concrete',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

const BLOGS = [
  {
    slug: 'how-long-before-drive-on-new-concrete',
    title: 'How Long Before You Can Drive on New Concrete?',
    category: 'Curing',
    date: 'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'New concrete driveway curing timeline for Waco Texas homes',
    excerpt: 'A practical cure timeline for Central Texas driveways — foot traffic, cars, and heavy vehicles — plus weather factors that change the clock.',
    keywords: ['drive on new concrete', 'concrete cure time driveway', 'how long before drive on concrete Waco', 'concrete driveway curing Texas'],
    ctaTitle: 'Planning a New Driveway in Waco?',
    ctaBody: 'IronPath pours driveways with clear cure guidance and a 5-Year Workmanship Warranty. Free on-site estimates.',
    related: [
      { label: 'Concrete Driveways', href: '/services/driveways' },
      { label: 'Concrete Repair', href: '/services/concrete-repair' },
      { label: 'Get a Free Estimate', href: '/contact' },
    ],
    sections: [
      {
        type: 'content',
        title: 'The short answer for most driveways',
        body: 'For a typical residential driveway pour in Central Texas, light foot traffic is often fine after 24–48 hours. Passenger vehicles usually wait about 7 days. Heavier trucks and trailers need longer — often 2–4 weeks depending on mix, thickness, and weather. Full design strength continues to develop for weeks after that. Your contractor should give you a specific timeline for your pour, not a one-size-fits-all internet rule.',
      },
      {
        type: 'tips',
        title: 'What changes the cure clock',
        intro: 'Concrete does not “dry” like paint — it cures through hydration. These factors matter in Waco and Central Texas:',
        tips: [
          'Hot, dry weather can speed surface set but still requires proper moisture care',
          'Thicker slabs and cooler days generally need more patience before vehicle loads',
          'Mix design and admixtures affect early strength — ask what was used',
          'Driving too early can leave permanent tire marks or edge damage',
          'Keep construction traffic and dumpsters off the slab until cleared',
        ],
      },
      {
        type: 'content',
        title: 'How IronPath sets expectations',
        body: 'When we pour your driveway, we walk you through foot traffic, car traffic, and sealing timing in plain English. If Texas heat is extreme on pour week, we adjust care instructions. Our goal is a driveway that looks good on day one and still looks good years later — not a rushed open that ruins the finish.',
      },
    ],
  },
  {
    slug: 'stamped-vs-broom-finish-texas',
    title: 'Stamped vs. Broom Finish Concrete in Texas: Which Is Right?',
    category: 'Finishes',
    date: 'April 14, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Stamped concrete versus broom finish comparison for Texas homes',
    excerpt: 'Cost, traction, maintenance, and curb appeal — how to choose between stamped decorative concrete and classic broom finish for Central Texas outdoor slabs.',
    keywords: ['stamped vs broom finish', 'decorative concrete Texas', 'broom finish driveway Waco', 'stamped patio cost'],
    ctaTitle: 'Want Help Choosing a Finish?',
    ctaBody: 'We show pattern and finish options on-site and quote flat-rate — broom, stamped, or a mix.',
    related: [
      { label: 'Stamped & Decorative', href: '/services/stamped-decorative' },
      { label: 'Patios & Walkways', href: '/services/patios-walkways' },
      { label: 'Driveways', href: '/services/driveways' },
    ],
    sections: [
      {
        type: 'content',
        title: 'Broom finish: the durable workhorse',
        body: 'Broom finish is the most common driveway and sidewalk texture in Central Texas for good reason. It offers reliable traction when wet, costs less than decorative systems, and is easier to repair or match. For high-traffic driveways and HOA-simple aesthetics, broom finish is often the smart default.',
      },
      {
        type: 'content',
        title: 'Stamped & decorative: curb appeal with caveats',
        body: 'Stamped concrete delivers stone, brick, or slate looks with a monolithic pour. It costs more, needs careful weather timing, and usually benefits from periodic resealing for color and protection. Done right, it transforms a patio or entry. Done wrong (poor base, bad joints, rushed stamps), it is an expensive disappointment.',
      },
      {
        type: 'tips',
        title: 'How to choose for your property',
        intro: 'Use this practical filter before you fall in love with a showroom photo:',
        tips: [
          'Driveways that see daily parking: broom often wins on cost and traction',
          'Patio entertaining spaces: stamped or colored can elevate outdoor living',
          'Budget: decorative can cost significantly more per square foot',
          'Maintenance appetite: stamped usually needs more sealer care',
          'Match existing work: blending old stamped to new is never perfect',
        ],
      },
    ],
  },
  {
    slug: 'foundation-cracks-when-to-call',
    title: 'Foundation Cracks: When to Call a Concrete Pro in Waco',
    category: 'Foundations',
    date: 'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Foundation crack warning signs for Waco Texas homes',
    excerpt: 'Hairline vs structural cracks, Texas clay movement, and when a crack is a DIY watch-item versus a call-a-pro situation for Central Texas homes.',
    keywords: ['foundation cracks Waco', 'when to worry about foundation cracks', 'concrete foundation repair Central Texas', 'slab cracks Texas clay'],
    ctaTitle: 'Seeing Cracks You Are Unsure About?',
    ctaBody: 'IronPath can assess slab and flatwork issues and tell you honestly whether repair or replacement makes sense.',
    related: [
      { label: 'Foundations', href: '/services/foundations' },
      { label: 'Concrete Repair', href: '/services/concrete-repair' },
      { label: 'Contact Us', href: '/contact' },
    ],
    sections: [
      {
        type: 'content',
        title: 'Not every crack is a crisis',
        body: 'Hairline shrinkage cracks are common in concrete as it cures. Central Texas clay soils also expand and contract with moisture, which can stress slabs over years. The key is distinguishing cosmetic cracking from movement that affects structure, doors, drainage, or safety.',
      },
      {
        type: 'tips',
        title: 'Call a pro when you see',
        intro: 'These signs deserve a professional look sooner rather than later:',
        tips: [
          'Cracks that are widening quickly or opening more than about 1/4 inch',
          'Horizontal cracks in foundation walls or stair-step cracks in masonry',
          'Doors and windows that suddenly stick or will not latch',
          'Slabs with trip-hazard offsets between sections',
          'Water intrusion paths through cracks toward living space',
          'Uneven floors that are getting worse seasonally',
        ],
      },
      {
        type: 'content',
        title: 'What IronPath can help with',
        body: 'We assess driveways, patios, and flatwork cracks every week. For foundation structural engineering issues, we may recommend a structural specialist — and we will say so. When the right fix is concrete repair or section replacement, we quote flat-rate and explain the cause so you are not paying for a band-aid twice.',
      },
    ],
  },
];

// ─── GENERATE SERVICES / INDUSTRIES / BLOGS ──────────────────────────────────
console.log('=== Services ===');
['ac-repair','heating','installation','duct-cleaning','indoor-air-quality','maintenance'].forEach(s => rmrf(`src/app/services/${s}`));
SERVICES.forEach(s => {
  write(`src/app/services/${s.slug}/page.tsx`, servicePage(s));
  write(`src/app/services/${s.slug}/layout.tsx`, serviceLayout(s));
});

console.log('=== Industries ===');
['automotive','manufacturing','oil-gas'].forEach(s => rmrf(`src/app/industries/${s}`));
INDUSTRIES.forEach(ind => {
  write(`src/app/industries/${ind.slug}/page.tsx`, industryPage(ind));
  write(`src/app/industries/${ind.slug}/layout.tsx`, industryLayout(ind));
});

console.log('=== Blogs ===');
['heat-pump-vs-traditional-hvac-texas','how-often-should-you-replace-hvac-filter','signs-ac-needs-replacement-waco-tx'].forEach(s => rmrf(`src/app/blogs/${s}`));
BLOGS.forEach(b => {
  write(`src/app/blogs/${b.slug}/page.tsx`, blogPage(b));
  write(`src/app/blogs/${b.slug}/layout.tsx`, blogLayout(b));
  write(`src/app/blogs/${b.slug}/page.module.scss`, `@use '../../_shared/page.module.scss';\n`);
});

console.log('Done core generation');
