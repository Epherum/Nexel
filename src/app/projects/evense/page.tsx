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
  // ✨ Reworded for a stronger, more positive tone
  line1: "More than an organizer,",
  line2Start: "we create",
  // ✨ "Unforgettable" is more evocative than "lasting"
  highlight: "unforgettable experiences.",
};

const projectData = {
  services: {
    // ✨ Title is more descriptive of the work done
    title: "Brand Identity & Digital Platform",
    // ✨ Subtitle focuses on the outcome, not just the technical details
    subtitle: "Designing an intuitive platform for a seamless user experience.",
    // ✨ Body text is more concise and uses stronger, active language
    body: "We delivered a comprehensive branding package—including logo, color palette, and typography—and a full UI/UX design for their new platform. Our team then handled the web development, bringing the vision to life with a cohesive and impactful digital presence.",
  },
  showcase: {
    images: [
      "/static/evense/1.webp",
      "/static/evense/2.webp",
      "/static/evense/3.webp",
      "/static/evense/4.webp",
    ],
    // ✨ Reworded to be more direct and benefit-focused
    text: "The new brand identity was designed for versatility. We applied the system to key physical touchpoints, including merchandise and stationery, to ensure a consistent and recognizable presence across all mediums.",
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
