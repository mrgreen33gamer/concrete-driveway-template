// IronPath Concrete — Stamped & Decorative Concrete Service Page
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

export default function StampedDecorativePage() {

  const expectations = [
    { icon: faSearch, title: "Pattern & Color Selection", description: "We review stamp patterns and color samples so expectations match the finished pour." },
    { icon: faFileContract, title: "Decorative Scope in Writing", description: "Base pour plus decorative process priced upfront — no vague “it depends” mid-job." },
    { icon: faCheckCircle, title: "Sealed Finish Options", description: "Sealer recommendations for UV and traffic based on use." },
    { icon: faShieldHalved, title: "5-Year Workmanship Warranty", description: "Decorative pours backed by the same workmanship warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Weather-Smart Scheduling", description: "Stamped work needs the right temperature window — we plan for Texas conditions." },
    { icon: faIndustry, title: "Curb Appeal Without Pavers", description: "Get the look of stone or brick with a monolithic pour that is easier to maintain." },
    { icon: faShieldHalved, title: "Experienced Decorative Crews", description: "Finishers trained for stamps, releases, and clean detailing." },
  ];

  const processSteps = [
    { number: 1, title: "Design Consult", description: "Pick pattern, color, and borders for patio, walkway, or driveway accents.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Full decorative scope in a flat-rate quote.", icon: faSearch },
    { number: 3, title: "Pour & Stamp", description: "Place, color, stamp, detail edges and joints.", icon: faFileContract },
    { number: 4, title: "Seal & Care", description: "Sealer timing and care guide for long-term color.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 450, label: "Decorative pours completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 4.9, label: "Average customer rating", suffix: "★", duration: 2 },
    { icon: faClock,     value: 18, label: "Years of finish craftsmanship", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for stamped & decorative.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full stamped & decorative coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway stamped & decorative.", badge: "" },
    { town: "Temple",       benefit: "Bell County stamped & decorative — permit-ready installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger residential pours.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Pattern samples before pour", us: "✅ Always", others: "❌ Surprise finish" },
    { feature: "Color process explained", us: "✅ Clear options", others: "❌ Vague" },
    { feature: "5-Year Workmanship Warranty", us: "✅ Included", others: "❌ Decorative excluded" },
    { feature: "Sealer guidance included", us: "✅ Yes", others: "❌ Homeowner guesses" },
  ];

  const faq = [
    { question: "How much does stamped concrete cost vs. plain?", answer: "Stamped and colored work costs more than broom finish due to labor and materials. We quote the full decorative package after design selection." },
    { question: "Does stamped concrete crack?", answer: "It is still concrete — control joints and proper base matter. Stamping does not prevent movement cracks if the slab is poorly built." },
    { question: "Can you stamp a driveway?", answer: "Yes for many residential driveways; we discuss traffic, pattern scale, and maintenance first." },
    { question: "How long does color last?", answer: "Integral color and quality sealers hold up well; resealing intervals depend on sun and traffic. We advise a maintenance plan." },
    { question: "Can you match existing stamped work?", answer: "We can get close with pattern and color; exact matches to aged work are never perfect — we set realistic expectations." },
    { question: "Is stamped harder to maintain than pavers?", answer: "Usually easier — no sand joints to weed. Occasional cleaning and resealing keep it sharp." },
  ];

  const crossServices = [
    { icon: faPersonWalking, title: "Patios & Walkways", body: "Ideal base projects for decorative finishes.", link: "/services/patios-walkways" },
    { icon: faRoad, title: "Driveways", body: "Broom or decorative driveway options.", link: "/services/driveways" },
    { icon: faWrench, title: "Concrete Repair", body: "Fix damaged decorative sections.", link: "/services/concrete-repair" },
    { icon: faHouse, title: "Foundations", body: "Structural pours before decorative exterior work.", link: "/services/foundations" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Stamped & Decorative" },
      ]} />
      <SectionIntro
        title={"Stamped & Decorative Concrete in Waco, TX"}
        subtitle={"Stamped patterns, integral color, and decorative finishes that look like stone or brick — with the durability of concrete. Flat-rate design quotes, 5-Year Workmanship Warranty."}
      />
      <TrustBar headline={"Decorative concrete that stands up to Texas weather"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Stamped & Decorative Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose IronPath for Stamped & Decorative"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/stamped-decorative"} title={"Stamped & Decorative Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Stamped & Decorative FAQs"} /></div>
      <CTABanner
        headline={"Ready for Stamped & Decorative Done Right?"}
        subline="Free on-site estimate. Flat-rate quotes. ACI-trained finishers. 5-Year Workmanship Warranty."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Stamped & Decorative Estimate"}
          cityName="Waco"
          slug={"stamped-decorative"}
          spot={"stamped-decorative-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
