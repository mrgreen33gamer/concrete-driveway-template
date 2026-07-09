// IronPath Concrete — Industries Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";

import {
  faHardHat, faBuilding, faLandmark,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faHeadset, faFileContract,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const industries = [
    {
      icon: faHardHat,
      title: "Homebuilders",
      body: "Production and custom home foundations and flatwork that hit pour windows and pass inspection.",
      link: "/industries/homebuilders",
    },
    {
      icon: faBuilding,
      title: "Property Management",
      body: "Sidewalks, pads, and repairs for multifamily and commercial portfolios — COIs and clear scopes.",
      link: "/industries/property-management",
    },
    {
      icon: faLandmark,
      title: "Municipalities & Public Works",
      body: "Public sidewalks, pads, and flatwork with bonded, insured crews and documentation.",
      link: "/industries/municipalities",
    },
  ];

  const whyFeatures = [
    {
      icon: faHeadset,
      title: "Schedule-Driven Communication",
      description: "Builders, PMs, and city staff get clear pour windows and responsive updates — not radio silence.",
    },
    {
      icon: faFileContract,
      title: "Written Scopes & Flat Rates",
      description: "Commercial and production pricing in writing so purchasing and supers can approve with confidence.",
    },
    {
      icon: faShieldHalved,
      title: "Bonded, Insured, Documented",
      description: "COIs and insurance paperwork without the chase. ACI-trained finishers on every crew.",
    },
  ];

  const metrics = [
    { icon: faTrophy, value: 4000, label: "Pours across residential & commercial work", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule mobilization target", suffix: "%", duration: 2 },
    { icon: faClock, value: 18, label: "Years serving Central Texas partners", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you work with production homebuilders?", answer: "Yes — foundation slabs and related flatwork coordinated with builder schedules across Central Texas." },
    { question: "Can property managers get per-property invoicing?", answer: "Yes — we support portfolio-friendly scopes, COIs, and property-level billing." },
    { question: "Do you bid municipal work?", answer: "Yes within our bonding and capacity. Send packages to hello@ironpathconcrete.com." },
    { question: "What is your service radius?", answer: "Waco home base with coverage across Central Texas including Temple, Killeen, and surrounding communities." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />
      <SectionIntro
        title="Industries We Serve"
        subtitle="Homebuilders, property management, and municipalities trust IronPath for schedule-driven concrete flatwork across Central Texas."
      />
      <TrustBar headline="Builder, PM, and public-works flatwork done right since 2008" />
      <div className={styles.section}>
        <ServiceCardComponent heading="Who We Partner With" cards={industries} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="A Concrete Partner Who Shows Up" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partner FAQs" />
      </div>
      <CTABanner
        headline="Need a Reliable Concrete Partner?"
        subline="Request a bid or call (254) 750-4400. ACI-trained finishers · Bonded & insured."
        primaryText="Call Us Now"
        primaryLink="tel:+12547504400"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
    </main>
  );
}
