// IronPath Concrete — Homebuilders
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
  faHardHat, faClock, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function HomebuildersPage() {
  const whyFeatures = [
    { icon: faHardHat, title: "Production-Ready Scheduling", description: "We protect your framing schedule with reliable pour-day mobilization and clear communication." },
    { icon: faShieldHalved, title: "Inspection-Ready Work", description: "Thickness, steel, and finish standards that pass first-pass inspections." },
    { icon: faUsers, title: "Builder-Friendly Crews", description: "Professional crews that coordinate with your supers and other trades on site." },
  ];

  const processSteps = [
    { number: 1, title: "Scope & Bid", description: "Plans review and competitive production pricing.", icon: faHeadset },
    { number: 2, title: "Schedule", description: "Lock pour windows into your construction calendar.", icon: faSearch },
    { number: 3, title: "Pour", description: "On-time placement and finish to plan.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Walkthrough and warranty documentation.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 400, label: "Builder pours completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "First-pass inspection rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years with Central Texas builders", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you pour production home slabs?", answer: "Yes — production and custom residential foundations and related flatwork." },
    { question: "Can you support multiple simultaneous sites?", answer: "Yes within crew capacity — we plan mobilization with your supers." },
    { question: "Do you provide COIs quickly?", answer: "Yes — insurance documentation is standard for builder accounts." },
    { question: "What is your typical lead time?", answer: "Season and volume dependent; established builder accounts get priority scheduling." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Homebuilders" },
      ]} />
      <SectionIntro
        title={"Homebuilders Concrete Partner — Waco & Central Texas"}
        subtitle={"Production and custom homebuilders need concrete partners who hit pour windows, pass inspection, and do not hold up framing. IronPath delivers foundation and flatwork for Central Texas builders."}
      />
      <TrustBar headline={"Preferred concrete partner for Central Texas homebuilders"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homebuilders Choose IronPath"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Homebuilders FAQs"} /></div>
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
          title={"Request a Bid for Homebuilders"}
          cityName="Waco"
          slug={"homebuilders"}
          spot={"homebuilders-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
