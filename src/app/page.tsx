// IronPath Concrete — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faRoad, faPersonWalking, faHouse, faIndustry, faWrench, faPaintRoller,
  faTrophy, faChartLine, faClock,
  faClipboardCheck, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faRoad,
      title: "Driveways",
      body: "New and replacement concrete driveways with proper base prep, control joints, and finishes built for Central Texas soil and heat.",
      link: "/services/driveways",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faPersonWalking,
      title: "Patios & Walkways",
      body: "Patio slabs, sidewalks, and walkways with drainage-smart layouts and clean, traction-ready finishes.",
      link: "/services/patios-walkways",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faHouse,
      title: "Foundations",
      body: "Residential and light commercial foundation slabs coordinated with builders — plan-driven and inspection-ready.",
      link: "/services/foundations",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faPaintRoller,
      title: "Stamped & Decorative",
      body: "Stamped patterns, color, and decorative finishes that deliver curb appeal without paver maintenance.",
      link: "/services/stamped-decorative",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faWrench,
      title: "Concrete Repair",
      body: "Crack repair, section replacement, and honest advice on when to repair vs. fully replace a failing slab.",
      link: "/services/concrete-repair",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faIndustry,
      title: "Commercial Flatwork",
      body: "Parking pads, sidewalks, equipment pads, and light commercial slabs for PMs and municipalities.",
      link: "/services/commercial-flatwork",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 4000, label: "Pours completed across Central Texas",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 18,   label: "Years of local concrete craftsmanship", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Free On-Site Estimates",
      description: "We measure on-site, check grade and access, and give you a written flat-rate quote before any forms go in.",
    },
    {
      icon: faShieldHalved,
      title: "ACI-Trained Finishers · Bonded & Insured",
      description: "Crews led by ACI-trained finishers with full bonding and insurance on every pour — documentation available on request.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2008",
      description: "We're not a franchise. IronPath was founded in Waco by Ray Delgado. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a free on-site estimate that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Measure & Assess",
      description: "We measure square footage, check drainage and access, and recommend thickness, finish, and joints in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before excavation or pour day. You decide — zero pressure. The quote covers prep, pour, and finish.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Pour, Cure & Warranty",
      description: "Professional placement and finish, clear cure guidance, and a 5-Year Workmanship Warranty on every project.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Scope Assessment",
      description: "We tell you when a repair is enough and when a full pour makes sense — not what's most profitable to sell.",
    },
    {
      icon: faLayerGroup,
      title: "Base Prep That Lasts",
      description: "Proper excavation, base, and compaction so your slab survives Central Texas clay and heat — not a thin pour on bad dirt.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before we start. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Clear Cure Guidance",
      description: "You'll know when you can walk, park, and seal — so you don't ruin a perfect finish by driving too early.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway pours.", badge: "" },
    { town: "Temple",       benefit: "Bell County driveways, patios, and flatwork.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const faq = [
    { question: "How much does a concrete driveway cost in Waco?", answer: "Pricing depends on square footage, thickness, access, demolition needs, and finish. We provide a free on-site measure and a flat-rate written quote — no ballpark phone guesses that change later." },
    { question: "How long before I can drive on new concrete?", answer: "Light foot traffic is usually fine after 24–48 hours. Most passenger vehicles wait about 7 days. We give you a specific timeline for your pour and weather conditions." },
    { question: "Are you licensed and insured?", answer: "Yes. IronPath Concrete uses ACI-trained finishers and is bonded and insured. Proof of insurance is available for builders and property managers." },
    { question: "Do you remove old concrete?", answer: "Yes — demolition and haul-away can be included in your quote so one crew handles tear-out through pour." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "What warranty do you offer?", answer: "Every project is backed by our 5-Year Workmanship Warranty on finish and installation workmanship." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ · 900+ reviews · 4,000+ pours across Central Texas" />
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" title="18 Years, By the Numbers" />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Concrete Services Built for Central Texas"
          subheading="Driveways, patios, foundations, decorative pours, repairs, and commercial flatwork — flat-rate quotes and ACI-trained finishers."
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect Working With Us" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses IronPath" />
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
        headline="Concrete That Holds Up to Texas."
        subline="Driveways, patios, and flatwork — proper base, control joints, and finishes that survive heat and freezes."
        primaryText="Call (254) 750-4400"
        primaryLink="tel:+12547504400"
        secondaryText="Free On-Site Quote"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving Waco & Central Texas" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Concrete FAQs" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Get Your Free Concrete Estimate"
          cityName="Waco"
          slug="home"
          spot="homepage"
          formVariant={4}
        />
      </div>
    </main>
  );
}
