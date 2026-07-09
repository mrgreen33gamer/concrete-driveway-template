// IronPath Concrete — Municipalities & Public Works
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
  faLandmark, faClock, faShieldHalved, faRoad, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function MunicipalitiesPage() {
  const whyFeatures = [
    { icon: faLandmark, title: "Public-Sector Ready", description: "We understand bid docs, COIs, and public access constraints." },
    { icon: faRoad, title: "Sidewalks & Pads", description: "Pedestrian flatwork, pads, and related municipal concrete within our capacity." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Coverage profile suitable for municipal and public-adjacent work." },
  ];

  const processSteps = [
    { number: 1, title: "Bid Package", description: "Review plans/specs and submit responsive pricing.", icon: faHeadset },
    { number: 2, title: "Award & Schedule", description: "Coordinate access and traffic control needs.", icon: faSearch },
    { number: 3, title: "Construct", description: "Safe work zones and quality finish.", icon: faFileContract },
    { number: 4, title: "Accept & Invoice", description: "Punch list closeout and documentation.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 100, label: "Municipal / public projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 100, label: "Safety-first job sites", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years Central Texas public work", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you bid municipal sidewalk projects?", answer: "Yes within our bonding and capacity — send bid packages to hello@ironpathconcrete.com." },
    { question: "Prevailing wage jobs?", answer: "Confirm requirements at bid time so we can respond correctly." },
    { question: "Emergency public sidewalk repairs?", answer: "Contact us for urgent trip-hazard work when schedules allow." },
    { question: "Service area for public works?", answer: "Waco and Central Texas communities within our operational radius." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Municipalities & Public Works" },
      ]} />
      <SectionIntro
        title={"Municipalities & Public Works Concrete Partner — Waco & Central Texas"}
        subtitle={"Cities and public-works departments need dependable sidewalk, pad, and flatwork contractors who understand paperwork, access, and public safety. IronPath is bonded, insured, and schedule-driven."}
      />
      <TrustBar headline={"Public-works flatwork for Central Texas municipalities"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Municipalities & Public Works Choose IronPath"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Municipalities & Public Works FAQs"} /></div>
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
          title={"Request a Bid for Municipalities & Public Works"}
          cityName="Waco"
          slug={"municipalities"}
          spot={"municipalities-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
