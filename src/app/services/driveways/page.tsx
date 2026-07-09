// IronPath Concrete — Concrete Driveways Service Page
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
  faRoad, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faPersonWalking, faHouse, faIndustry, faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function DrivewaysPage() {

  const expectations = [
    { icon: faSearch, title: "On-Site Measure & Grade Check", description: "We measure square footage, check drainage, and review access before quoting — no ballpark guesses from a photo." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Excavation, base, forms, concrete, finish, and cleanup are in the number. No surprise change orders mid-pour." },
    { icon: faCheckCircle, title: "Code-Ready Base & Joints", description: "Proper compaction, thickness, and control joints so your driveway lasts through Texas summers and clay soil movement." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty", description: "Every driveway pour is backed by our 5-Year Workmanship Warranty on finish and installation." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Clear Pour Schedule", description: "We give you a realistic pour window and cure timeline so you know when you can park again." },
    { icon: faRoad, title: "Built for Texas Soil", description: "We design thickness and joints for Central Texas clay expansion — not a thin slab that cracks in year two." },
    { icon: faShieldHalved, title: "ACI-Trained Finishers · Bonded & Insured", description: "Crews led by ACI-trained finishers. Fully bonded and insured on every pour." },
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We measure, check grade and drainage, and recommend thickness and finish.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "You get a flat-rate quote. We schedule excavation, forms, and pour day.", icon: faSearch },
    { number: 3, title: "Pour Day", description: "Base prepped, forms set, concrete placed and finished with proper control joints.", icon: faFileContract },
    { number: 4, title: "Cure & Warranty", description: "We walk you through cure care and back the work with our 5-year warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 4000, label: "Driveways poured in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule pour rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18, label: "Years pouring Waco-area driveways", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for driveways.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full driveways coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway driveways.", badge: "" },
    { town: "Temple",       benefit: "Bell County driveways — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Proper base prep & compaction", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Flat-rate quote (base + pour + finish)", us: "✅ Written", others: "❌ Hourly + extras" },
    { feature: "5-Year Workmanship Warranty", us: "✅ Every pour", others: "❌ Rare" },
    { feature: "ACI-trained finishers", us: "✅ All crews", others: "❌ Varies" },
    { feature: "Control joints planned for Texas clay", us: "✅ Standard", others: "❌ Guesswork" },
  ];

  const faq = [
    { question: "How much does a concrete driveway cost in Waco?", answer: "Most residential driveways run based on square footage, thickness, access, and whether we replace an existing slab. We provide a flat-rate written quote after an on-site measure." },
    { question: "How long before I can drive on new concrete?", answer: "Light foot traffic is usually fine after 24–48 hours. Vehicles typically wait 7 days; full strength continues to build for weeks. We give you a specific timeline for your pour." },
    { question: "Do you remove the old driveway?", answer: "Yes — demolition, haul-away, and re-pour can be included in one quote so one crew handles the full job." },
    { question: "What finish options do you offer?", answer: "Standard broom finish is most popular for traction. We also offer stamped and decorative options — see our stamped & decorative service." },
    { question: "Do you handle permits?", answer: "When a permit is required by the city or HOA, we coordinate the process and include known permit costs in your quote." },
    { question: "Will my driveway crack?", answer: "All concrete can develop hairline cracks; proper base, thickness, and control joints minimize structural cracking. Our warranty covers workmanship defects." },
  ];

  const crossServices = [
    { icon: faPersonWalking, title: "Patios & Walkways", body: "Matching patio and walkway pours that tie the whole property together.", link: "/services/patios-walkways" },
    { icon: faHouse, title: "Foundations", body: "Structural slabs and foundation pours for new builds and additions.", link: "/services/foundations" },
    { icon: faWrench, title: "Concrete Repair", body: "Crack repair, leveling, and section replacement on existing slabs.", link: "/services/concrete-repair" },
    { icon: faIndustry, title: "Commercial Flatwork", body: "Parking pads, sidewalks, and commercial slabs on schedule.", link: "/services/commercial-flatwork" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Driveways" },
      ]} />
      <SectionIntro
        title={"Concrete Driveways in Waco, TX"}
        subtitle={"New concrete driveways and replacements — proper base prep, control joints, and broom finishes built for Central Texas heat and soil. Flat-rate quotes, 5-Year Workmanship Warranty."}
      />
      <TrustBar headline={"4,000+ pours across Central Texas by IronPath Concrete"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Driveways Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose IronPath for Driveways"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/driveways"} title={"Driveways Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Driveways FAQs"} /></div>
      <CTABanner
        headline={"Ready for Driveways Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Driveways Estimate"}
          cityName="Waco"
          slug={"driveways"}
          spot={"driveways-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
