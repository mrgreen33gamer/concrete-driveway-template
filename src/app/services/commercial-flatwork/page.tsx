// IronPath Concrete — Commercial Flatwork Service Page
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
  faIndustry, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faRoad, faPersonWalking, faHouse, faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialFlatworkPage() {

  const expectations = [
    { icon: faSearch, title: "Scope From Plans or Site Walk", description: "We quote from drawings or a site walk with clear square footage and thickness." },
    { icon: faFileContract, title: "Commercial Documentation", description: "COI, scheduling, and invoice clarity for PMs and municipalities." },
    { icon: faCheckCircle, title: "Traffic-Ready Specs", description: "Thickness and finish matched to vehicle or pedestrian use." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Full insurance for commercial and public-works adjacent jobs." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Reliable Mobilization", description: "We protect your tenant openings and municipal timelines." },
    { icon: faIndustry, title: "PM & City Experience", description: "Property management and public-works flatwork is core work for us." },
    { icon: faShieldHalved, title: "ACI-Trained Finishers", description: "Commercial finish standards, not residential-only crews." },
  ];

  const processSteps = [
    { number: 1, title: "Bid / Scope", description: "Plans review or site measure with written commercial quote.", icon: faHeadset },
    { number: 2, title: "Schedule Lock", description: "Pour window coordinated with other trades and access.", icon: faSearch },
    { number: 3, title: "Pour", description: "Mobilized crew, proper traffic control coordination as needed.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Walkthrough, punch, warranty docs, invoice.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 350, label: "Commercial flatwork projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-schedule mobilization", suffix: "%", duration: 2 },
    { icon: faClock,     value: 18, label: "Years commercial & municipal work", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for commercial flatwork.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full commercial flatwork coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway commercial flatwork.", badge: "" },
    { town: "Temple",       benefit: "Bell County commercial flatwork — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "COI & commercial paperwork ready", us: "✅ Fast", others: "❌ Delays start" },
    { feature: "Schedule-driven pour windows", us: "✅ Reliable", others: "❌ Flexible-only" },
    { feature: "5-Year Workmanship Warranty", us: "✅ Available", others: "❌ Limited" },
    { feature: "PM-friendly communication", us: "✅ Standard", others: "❌ Hard to reach" },
  ];

  const faq = [
    { question: "Do you pour commercial sidewalks and pads?", answer: "Yes — sidewalks, parking pads, equipment pads, dumpster pads, and similar light commercial flatwork." },
    { question: "Can you work nights or off-hours?", answer: "Often yes for access-sensitive sites — discuss at bid time." },
    { question: "Do you work with municipalities?", answer: "Yes — public-works flatwork within our capacity and insurance profile." },
    { question: "What about prevailing wage or bonded jobs?", answer: "Tell us bid requirements early so we can confirm eligibility and paperwork." },
    { question: "How large of a pour can you handle?", answer: "We scale crews and suppliers to the pour; multi-day commercial sequences are common." },
    { question: "Do you offer warranties on commercial work?", answer: "Yes — 5-Year Workmanship Warranty on our workmanship, terms confirmed in the contract." },
  ];

  const crossServices = [
    { icon: faHouse, title: "Foundations", body: "Structural residential and light commercial slabs.", link: "/services/foundations" },
    { icon: faRoad, title: "Driveways", body: "Residential driveway pours.", link: "/services/driveways" },
    { icon: faWrench, title: "Concrete Repair", body: "Commercial slab repairs.", link: "/services/concrete-repair" },
    { icon: faPersonWalking, title: "Patios & Walkways", body: "Residential outdoor pours.", link: "/services/patios-walkways" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Flatwork" },
      ]} />
      <SectionIntro
        title={"Commercial Flatwork in Waco, TX"}
        subtitle={"Parking pads, sidewalks, dumpster pads, equipment pads, and light commercial slabs for property managers and municipalities. Schedule-driven, insured, 5-Year Workmanship Warranty."}
      />
      <TrustBar headline={"Commercial concrete on your opening date — not when it is convenient for us"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Commercial Flatwork Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose IronPath for Commercial Flatwork"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/commercial-flatwork"} title={"Commercial Flatwork Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Commercial Flatwork FAQs"} /></div>
      <CTABanner
        headline={"Ready for Commercial Flatwork Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Commercial Flatwork Estimate"}
          cityName="Waco"
          slug={"commercial-flatwork"}
          spot={"commercial-flatwork-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
