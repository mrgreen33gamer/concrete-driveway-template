// IronPath Concrete — Patios & Walkways Service Page
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
  faPersonWalking, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faHouse, faIndustry, faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function PatiosWalkwaysPage() {

  const expectations = [
    { icon: faSearch, title: "Layout & Drainage First", description: "We set elevations so water drains away from the house — not toward the foundation." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Forms, concrete, finish, and cleanup in one number before we start." },
    { icon: faCheckCircle, title: "Clean Edges & Joints", description: "Straight lines, consistent finish, and joints that control cracking." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty", description: "Patio and walkway pours covered by our 5-year workmanship warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Coordinated With Your Schedule", description: "We pour when weather and your project timeline line up — clear communication." },
    { icon: faPersonWalking, title: "Traction-Smart Finishes", description: "Broom and other finishes chosen for outdoor grip, not just looks." },
    { icon: faShieldHalved, title: "Bonded & Insured Crews", description: "ACI-trained finishers on residential outdoor pours across Central Texas." },
  ];

  const processSteps = [
    { number: 1, title: "Site Visit", description: "Measure patio or walkway layout, check slope and access.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Flat-rate price for prep, pour, and finish.", icon: faSearch },
    { number: 3, title: "Form & Pour", description: "Base, forms, place, finish, and joint.", icon: faFileContract },
    { number: 4, title: "Cure Guidance", description: "Care instructions and warranty paperwork.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 900, label: "Patio & walkway pours completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18, label: "Years of outdoor flatwork", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for patios & walkways.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full patios & walkways coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway patios & walkways.", badge: "" },
    { town: "Temple",       benefit: "Bell County patios & walkways — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Proper slope away from foundation", us: "✅ Planned", others: "❌ Often ignored" },
    { feature: "Flat-rate outdoor pour quote", us: "✅ Written", others: "❌ Vague estimate" },
    { feature: "5-Year Workmanship Warranty", us: "✅ Included", others: "❌ Short or none" },
    { feature: "Matching driveway finish available", us: "✅ Yes", others: "❌ Separate contractors" },
  ];

  const faq = [
    { question: "How much does a concrete patio cost in Waco?", answer: "Depends on size, thickness, access, and finish. We quote flat-rate after measuring on site." },
    { question: "Can you match my driveway?", answer: "Often yes — we can match broom texture and color tones closely on new pours." },
    { question: "How soon can we use the patio?", answer: "Light foot traffic usually after 24–48 hours; furniture after several days. We specify for your pour." },
    { question: "Do you do stamped patios?", answer: "Yes — see our Stamped & Decorative Concrete service for pattern and color options." },
    { question: "Will water pool on the patio?", answer: "We design slope for drainage. Standing water is almost always a grade issue we solve in the plan." },
    { question: "Can you pour walkways to the driveway?", answer: "Yes — continuous pours or matched sections so the property looks intentional." },
  ];

  const crossServices = [
    { icon: faRoad, title: "Driveways", body: "New and replacement residential driveways.", link: "/services/driveways" },
    { icon: faHouse, title: "Foundations", body: "Structural foundation pours.", link: "/services/foundations" },
    { icon: faWrench, title: "Concrete Repair", body: "Repair cracked outdoor slabs.", link: "/services/concrete-repair" },
    { icon: faIndustry, title: "Stamped & Decorative", body: "Patterned and colored concrete finishes.", link: "/services/stamped-decorative" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Patios & Walkways" },
      ]} />
      <SectionIntro
        title={"Patios & Walkways in Waco, TX"}
        subtitle={"Patio slabs, sidewalks, and walkways with clean edges, proper slope, and finishes that hold up to Texas sun. Flat-rate quotes, 5-Year Workmanship Warranty."}
      />
      <TrustBar headline={"Outdoor living concrete done right by IronPath"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Patios & Walkways Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose IronPath for Patios & Walkways"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/patios-walkways"} title={"Patios & Walkways Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Patios & Walkways FAQs"} /></div>
      <CTABanner
        headline={"Ready for Patios & Walkways Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Patios & Walkways Estimate"}
          cityName="Waco"
          slug={"patios-walkways"}
          spot={"patios-walkways-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
