// IronPath Concrete — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faLayerGroup,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2008",
      description: "IronPath was founded in Waco by Ray Delgado, a finisher with deep roots in the concrete trade. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Property",
      description: "Every finisher on our team works under bonded, insured leadership. We treat every driveway and patio like it is on our own street — protected landscaping, clean jobsite, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full tear-out when a section repair will do the job for years. We won't skip base prep to save an afternoon. Our reputation is built on straight talk — and 18 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 4000, label: "Pours across Central Texas",        suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",       suffix: "%", duration: 2 },
    { icon: faClock,     value: 18,   label: "Years serving Waco-area families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free On-Site Estimate", description: "Ray or a senior estimator measures your project, checks grade and access, and gives you a firm written price — no surprises later.", icon: faClipboardCheck },
    { number: 2, title: "Plan the Pour Right", description: "Thickness, joints, finish, and drainage are locked before we form. Good concrete is won or lost in the prep.", icon: faShieldHalved },
    { number: 3, title: "Pour With Precision", description: "ACI-trained finishers place and finish to professional standards, then leave a clean site and clear cure instructions.", icon: faLayerGroup },
    { number: 4, title: "Final Walkthrough & Warranty", description: "We walk the finished slab with you before we call the job done, and back the work with our 5-Year Workmanship Warranty.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About IronPath Concrete"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2008. We pour honest concrete at fair prices for the families and businesses we've called neighbors for 18 years."
      />

      <TrustBar headline="4,000+ pours trust IronPath — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="18 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Concrete Crew — Ready When You Are"
        subline="Free on-site estimates. Flat-rate quotes. 5-Year Workmanship Warranty. No pressure — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Request a Free Quote"
        secondaryLink="/contact"
      />

    </main>
  );
}
