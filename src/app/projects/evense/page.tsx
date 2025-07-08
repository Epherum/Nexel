// src/app/projects/evense/page.tsx
"use client";
import React from "react";
import styles from "./page.module.css";
import Footer from "@/components/layout/Footer";

// Asset Imports
import evense1 from "/public/static/evense/hero.webp";
import evensePhone from "/public/static/evense/mobile.webp";
import evenseFlow from "/public/static/evense/user-flow.webp";

// Component Imports
import HeroSection from "./components/HeroSection";
import HeroImageSection from "./components/HeroImageSection";
import IntroductionSection from "./components/IntroductionSection";
import DesignProcessSection from "./components/DesignProcessSection";
import TypographyAndColorSection from "./components/TypographyAndColorSection";
import UserFlowSection from "./components/UserFlowSection";
import ServicesAndShowcaseSection from "./components/ServicesAndShowcaseSection";
import FullWidthImageSection from "./components/FullWidthImageSection";

// Data
const heroHeadline = {
  line1: "Not just an organizer",
  line2Start: "a creator of",
  highlight: "lasting experiences.",
};

const projectData = {
  services: {
    title: "Services Page",
    subtitle:
      "Careful attention was paid to font sizes and spacing to ensure optimal readability and usability, adhering to established web design principles and preferences.",
    body: "We delivered a comprehensive branding package that included logo design, color palette definition, and typography guidelines. This was complemented by a full UI/UX design for their new platform and the subsequent web development to bring the vision to life, ensuring a cohesive and impactful digital presence.",
  },
  showcase: {
    images: [
      "/static/evense/1.webp",
      "/static/evense/2.webp",
      "/static/evense/3.webp",
      "/static/evense/4.webp",
    ],
    text: "Our design approach extended to practical applications, including merchandise and stationery, to ensure the brand's versatility and consistency across all mediums.",
  },
  fullWidthImage: "/static/evense/full-width.webp",
};

export default function Page() {
  return (
    <main className={styles.contentWrapper}>
      <HeroSection
        line1={heroHeadline.line1}
        line2Start={heroHeadline.line2Start}
        highlight={heroHeadline.highlight}
      />

      <main>
        <HeroImageSection
          mainImage={evense1}
          logoImage="/static/evense/logo-green.svg"
        />
        <IntroductionSection phoneImage={evensePhone} />
        <DesignProcessSection />
        <TypographyAndColorSection />
        <UserFlowSection flowImage={evenseFlow} />
        <ServicesAndShowcaseSection
          services={projectData.services}
          showcase={projectData.showcase}
        />
        <FullWidthImageSection imageSrc={projectData.fullWidthImage} />
      </main>

      <Footer />
    </main>
  );
}
