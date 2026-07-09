// IronPath Concrete — Foundations Service Page
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
  faHouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faIndustry, faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function FoundationsPage() {

  const expectations = [
    { icon: faSearch, title: "Plans & Elevations Reviewed", description: "We pour to the drawings — rebar, thickness, and elevations verified before the truck arrives." },
    { icon: faFileContract, title: "Builder-Friendly Scheduling", description: "Clear pour windows that fit framing schedules and inspections." },
    { icon: faCheckCircle, title: "Structural Best Practices", description: "Proper reinforcement placement, consolidation, and finish for slabs-on-grade." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty", description: "Foundation workmanship covered for five years." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "On the Critical Path", description: "We show up ready so your project does not sit waiting on concrete." },
    { icon: faHouse, title: "Homebuilder Experience", description: "Repeated work with Central Texas builders on production and custom homes." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "ACI-trained finishers and full insurance documentation for GCs." },
  ];

  const processSteps = [
    { number: 1, title: "Review Plans", description: "Scope, rebar, thickness, and schedule with builder or homeowner.", icon: faHeadset },
    { number: 2, title: "Site Ready Check", description: "Forms, grade, and steel verified before pour day.", icon: faSearch },
    { number: 3, title: "Pour & Finish", description: "Place, consolidate, finish, and cut joints as specified.", icon: faFileContract },
    { number: 4, title: "Inspect & Warranty", description: "Walkthrough for GC/homeowner; warranty documentation.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 600, label: "Foundation pours completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "First-pass inspection rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18, label: "Years serving builders & owners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for foundations.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full foundations coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway foundations.", badge: "" },
    { town: "Temple",       benefit: "Bell County foundations — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Pour-day readiness checklist", us: "✅ Standard", others: "❌ Often rushed" },
    { feature: "Builder schedule coordination", us: "✅ Reliable", others: "❌ No-shows" },
    { feature: "5-Year Workmanship Warranty", us: "✅ Included", others: "❌ Limited" },
    { feature: "ACI-trained finishers", us: "✅ All crews", others: "❌ Varies" },
  ];

  const faq = [
    { question: "Do you pour house foundations in Waco?", answer: "Yes — residential slabs and related foundation flatwork for new homes and additions." },
    { question: "Can you work from engineer plans?", answer: "Yes. We pour to approved plans and coordinate with inspections as required." },
    { question: "Do you supply rebar?", answer: "Scope is quoted clearly — rebar supply and placement can be included or coordinated with your framing crew." },
    { question: "How far in advance should we book?", answer: "Builder production pours should be scheduled as early as possible; residential additions often book 1–3 weeks out depending on season." },
    { question: "Do you pour piers?", answer: "We focus on flatwork slabs and related foundation concrete — ask us about your specific foundation type." },
    { question: "What warranty applies?", answer: "5-Year Workmanship Warranty on our pour and finish workmanship." },
  ];

  const crossServices = [
    { icon: faRoad, title: "Driveways", body: "Site driveways after foundation.", link: "/services/driveways" },
    { icon: faPersonWalking, title: "Patios & Walkways", body: "Outdoor living slabs.", link: "/services/patios-walkways" },
    { icon: faIndustry, title: "Commercial Flatwork", body: "Commercial slabs and sidewalks.", link: "/services/commercial-flatwork" },
    { icon: faWrench, title: "Concrete Repair", body: "Foundation crack assessment & repair guidance.", link: "/services/concrete-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Foundations" },
      ]} />
      <SectionIntro
        title={"Foundations in Waco, TX"}
        subtitle={"Residential and light commercial foundation slabs, footings, and structural flatwork coordinated with builders. Permit-ready, ACI-trained, 5-Year Workmanship Warranty."}
      />
      <TrustBar headline={"Builder-trusted foundation pours across Central Texas"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Foundations Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose IronPath for Foundations"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/foundations"} title={"Foundations Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Foundations FAQs"} /></div>
      <CTABanner
        headline={"Ready for Foundations Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Foundations Estimate"}
          cityName="Waco"
          slug={"foundations"}
          spot={"foundations-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
