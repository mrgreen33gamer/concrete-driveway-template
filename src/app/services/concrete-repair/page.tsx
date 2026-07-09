// IronPath Concrete — Concrete Repair Service Page
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
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faHouse, faIndustry
} from "@fortawesome/free-solid-svg-icons";

export default function ConcreteRepairPage() {

  const expectations = [
    { icon: faSearch, title: "Honest Diagnosis", description: "We tell you when a repair will last and when replacement is the smarter spend." },
    { icon: faFileContract, title: "Clear Repair Scope", description: "Written price for the repair area — not open-ended time and materials surprises." },
    { icon: faCheckCircle, title: "Matched Finish When Possible", description: "We blend repairs to adjacent concrete as closely as practical." },
    { icon: faShieldHalved, title: "Workmanship Warranty", description: "Repairs we perform are backed by our workmanship warranty terms." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Faster Than Full Replacement", description: "Targeted repairs get you safe and functional without a full project timeline." },
    { icon: faWrench, title: "Structural vs. Cosmetic", description: "We separate safety issues from hairline cosmetics so you prioritize correctly." },
    { icon: faShieldHalved, title: "Local Experience With Texas Clay", description: "We understand settlement and movement common to Central Texas soils." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect", description: "On-site assessment of cracks, settlement, and drainage causes.", icon: faHeadset },
    { number: 2, title: "Recommend", description: "Repair, partial replace, or full replace — with reasons.", icon: faSearch },
    { number: 3, title: "Execute", description: "Repair work completed cleanly with proper prep.", icon: faFileContract },
    { number: 4, title: "Follow-Up", description: "Care tips and warranty on the work performed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 800, label: "Repair projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 95, label: "Clients who say we were honest about options", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18, label: "Years diagnosing Central Texas slabs", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for concrete repair.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full concrete repair coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway concrete repair.", badge: "" },
    { town: "Temple",       benefit: "Bell County concrete repair — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Honest repair vs replace advice", us: "✅ Always", others: "❌ Upsell full pour" },
    { feature: "Written repair quote", us: "✅ Yes", others: "❌ Vague" },
    { feature: "Cause assessment (drainage/soil)", us: "✅ Included", others: "❌ Band-aid only" },
    { feature: "Match adjacent finish", us: "✅ Best effort", others: "❌ Obvious patch" },
  ];

  const faq = [
    { question: "Can cracked driveway concrete be repaired?", answer: "Often yes for localized damage. Widespread structural failure may need section or full replacement — we will say which." },
    { question: "Do you mudjack or poly-level?", answer: "We assess leveling needs and recommend the right approach or specialist referral when appropriate." },
    { question: "How much does concrete repair cost?", answer: "Highly dependent on area and method. Small crack work costs far less than section replacement. On-site quotes are free." },
    { question: "Is a hairline crack normal?", answer: "Hairline shrinkage cracks are common. We focus on cracks that grow, trip hazards, or water intrusion." },
    { question: "Can you repair stamped concrete?", answer: "Decorative repairs are more visible; we discuss realistic blend quality before starting." },
    { question: "When should I call about foundation cracks?", answer: "Call for horizontal cracks, stair-step masonry cracks, or doors that stick — early assessment prevents bigger issues. See our foundation crack blog." },
  ];

  const crossServices = [
    { icon: faRoad, title: "Driveways", body: "Full driveway replacement when repair is not enough.", link: "/services/driveways" },
    { icon: faPersonWalking, title: "Patios & Walkways", body: "Replace failing outdoor slabs.", link: "/services/patios-walkways" },
    { icon: faHouse, title: "Foundations", body: "Structural pours and foundation flatwork.", link: "/services/foundations" },
    { icon: faIndustry, title: "Stamped & Decorative", body: "Decorative replacement sections.", link: "/services/stamped-decorative" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Concrete Repair" },
      ]} />
      <SectionIntro
        title={"Concrete Repair in Waco, TX"}
        subtitle={"Crack repair, section replacement, spall fixes, and leveling guidance for driveways, patios, and slabs. Honest assessment — repair when it makes sense, replace when it does not."}
      />
      <TrustBar headline={"Honest repair recommendations — not every crack needs a full tear-out"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Concrete Repair Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose IronPath for Concrete Repair"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/concrete-repair"} title={"Concrete Repair Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Concrete Repair FAQs"} /></div>
      <CTABanner
        headline={"Ready for Concrete Repair Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Concrete Repair Estimate"}
          cityName="Waco"
          slug={"concrete-repair"}
          spot={"concrete-repair-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
