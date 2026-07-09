// IronPath Concrete — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faRoad, faPersonWalking, faHouse, faIndustry, faWrench, faPaintRoller,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faRoad, title: "Driveways", body: "New and replacement concrete driveways with proper base prep, control joints, and finishes built for Central Texas.", link: "/services/driveways" },
    { icon: faPersonWalking, title: "Patios & Walkways", body: "Patio slabs, sidewalks, and walkways with drainage-smart layouts and clean outdoor finishes.", link: "/services/patios-walkways" },
    { icon: faHouse, title: "Foundations", body: "Residential and light commercial foundation slabs — plan-driven, builder-friendly, inspection-ready.", link: "/services/foundations" },
    { icon: faPaintRoller, title: "Stamped & Decorative", body: "Stamped patterns, color, and decorative finishes for patios, entries, and accent pours.", link: "/services/stamped-decorative" },
    { icon: faWrench, title: "Concrete Repair", body: "Crack repair, section replacement, and honest repair-vs-replace recommendations.", link: "/services/concrete-repair" },
    { icon: faIndustry, title: "Commercial Flatwork", body: "Pads, sidewalks, and light commercial slabs for property managers and municipalities.", link: "/services/commercial-flatwork" },
  ];

  const expectations = [
    { icon: faSearch, title: "Free On-Site Estimate", description: "We measure on-site, check grade and access, and explain exactly what's included with a written price before work starts." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Pricing", description: "No hourly billing, no surprise fees. You approve the price before we excavate or pour." },
    { icon: faShieldHalved, title: "ACI-Trained · Bonded & Insured", description: "Finishers trained to professional standards. Bonded and insured on every job." },
    { icon: faTag, title: "5-Year Workmanship Warranty", description: "Every pour is backed by five full years of coverage on our workmanship." },
  ];

  const metrics = [
    { icon: faTrophy, value: 4000, label: "Pours completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years serving Waco and Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real IronPath team member — not a call center. We schedule your free estimate fast." },
    { icon: faShieldHalved, title: "Honest Scope Advice", description: "We'll tell you when a repair is enough and when a full pour makes sense — no upselling for the sake of it." },
    { icon: faLock, title: "Bonded & Insured", description: "Fully insured crews. Proof of insurance available on request for builders and property managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or the form below. We'll confirm a free on-site estimate that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Measure & Assess", description: "We measure, check drainage, and recommend the right thickness and finish in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Pour & Warranty", description: "Professional placement and finish, cure guidance, 5-Year Workmanship Warranty.", icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway pours.", badge: "" },
    { town: "McGregor", benefit: "Reliable turnaround for McGregor customers.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Temple", benefit: "Full service for Bell County homes and businesses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "5-Year Workmanship Warranty", us: "✅ Every pour", others: "❌ Rare or none" },
    { feature: "ACI-trained finishers", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Proper base prep included", us: "✅ Standard", others: "❌ Often skipped" },
    { feature: "Clear cure / drive-on timeline", us: "✅ Always", others: "❌ Guesswork" },
  ];

  const faq = [
    { question: "How much does concrete work cost in Waco?", answer: "Driveways, patios, and repairs vary by size and scope. We always provide a flat-rate written quote after an on-site estimate." },
    { question: "Are your finishers ACI-trained?", answer: "Yes — IronPath crews are led by ACI-trained finishers and we are bonded and insured." },
    { question: "Do you offer emergency repairs?", answer: "We prioritize trip hazards and safety issues when capacity allows. Call (254) 750-4400." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — every project is backed by our 5-Year Workmanship Warranty." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule a free on-site estimate and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <SectionIntro
        title="Concrete Services in Waco, TX"
        subtitle="Driveways, patios, foundations, decorative pours, repairs, and commercial flatwork — flat-rate quotes, ACI-trained finishers, 5-Year Workmanship Warranty."
      />
      <TrustBar headline="4,000+ pours · 4.9★ from 900+ reviews across Central Texas" />
      <div className={styles.section}><ServiceCardComponent heading="What We Pour" cards={services} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Hire IronPath" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Service Areas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Service FAQs" /></div>
      <CTABanner
        headline="Ready to Get a Flat-Rate Concrete Quote?"
        subline="Free on-site estimates. ACI-trained finishers. Call (254) 750-4400."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2
          title="Request a Free Estimate"
          cityName="Waco"
          slug="services"
          spot="services-index"
          formVariant={2}
        />
      </div>
    </main>
  );
}
