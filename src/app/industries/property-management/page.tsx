// IronPath Concrete — Property Management
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
  faBuilding, faClock, faShieldHalved, faClipboardCheck, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementPage() {
  const whyFeatures = [
    { icon: faBuilding, title: "Tenant-Aware Scheduling", description: "We work around access windows and occupied sites carefully." },
    { icon: faClipboardCheck, title: "Clear Scopes & Invoices", description: "Written scopes PM teams can approve and file." },
    { icon: faShieldHalved, title: "Fully Insured", description: "COIs for property portfolios without chase-down delays." },
  ];

  const processSteps = [
    { number: 1, title: "Site Walk", description: "Assess sidewalks, pads, trip hazards, and drainage.", icon: faHeadset },
    { number: 2, title: "Written Scope", description: "Flat-rate repair or replace options.", icon: faSearch },
    { number: 3, title: "Mobilize", description: "Scheduled work with minimal tenant disruption.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Photos, invoice, warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 200, label: "PM portfolio projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-time start rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years commercial flatwork", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you handle multifamily sidewalk repairs?", answer: "Yes — trip-hazard repairs and section replacements are common PM work." },
    { question: "Can you invoice per property?", answer: "Yes — we support property-level billing and documentation." },
    { question: "Emergency trip hazard response?", answer: "Call (254) 750-4400 — we prioritize safety hazards when capacity allows." },
    { question: "Do you pour dumpster and equipment pads?", answer: "Yes — commercial pads sized for use and traffic." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro
        title={"Property Management Concrete Partner — Waco & Central Texas"}
        subtitle={"Multifamily and commercial property managers need safe sidewalks, parking pads, and repairs without tenant chaos. IronPath delivers flat-rate scopes, COIs, and schedule-aware crews."}
      />
      <TrustBar headline={"Flatwork and repair partner for Central Texas property managers"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Property Management Choose IronPath"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Property Management FAQs"} /></div>
      <CTABanner
        headline={"Need a Reliable Concrete Partner?"}
        subline="Flat-rate commercial and production quotes. ACI-trained finishers. Bonded & insured. Call (254) 750-4400."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={"Request a Bid for Property Management"}
          cityName="Waco"
          slug={"property-management"}
          spot={"property-management-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
