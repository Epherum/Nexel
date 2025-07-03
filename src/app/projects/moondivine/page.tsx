// src/app/projects/moondivine/page.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "@/components/animation/ParallaxImage";

import styles from "./moondivine.module.css";
import Footer from "@/components/layout/Footer";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { ReactLenis } from "lenis/react";

// --- Local Image Imports (Update these paths with your new project images) ---
import img1 from "/public/static/moondivine/1.webp";
import img2 from "/public/static/moondivine/2.webp";
import img3 from "/public/static/moondivine/3.webp";
import img4 from "/public/static/moondivine/4.webp";
import img5 from "/public/static/moondivine/5.webp";

// --- Local Text Data for MoonDivine ---
const heroHeadlineLine1 = "Where design";
const heroHeadlineLine2Start = "meets the";
const heroHeadlineHighlight = "divine.";
const textSection1 = {
  title: "A celestial brand experience crafted for the modern mystic.",
  subtitle:
    "We embarked on a journey to create an identity that felt both ethereal and grounded, capturing the essence of spiritual wellness with a touch of cosmic elegance.",
};
const textSection2 = {
  title: "Intuitive, immersive, and inspiring.",
  subtitle:
    "Every design choice was made to guide the user on a serene digital pilgrimage, ensuring the online presence was as calming and restorative as the products themselves.",
};

// --- Animation Variants (Unchanged from book-app) ---
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

// --- AnimatedTextSection Component (Unchanged from book-app) ---
const AnimatedTextSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -100px 0px",
    once: true,
  });
  return (
    <motion.section
      ref={sectionRef}
      className={styles.textSection}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className={styles.textHeadline} variants={wordRevealContainer}>
        {title.split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {"\u00A0"}
          </AnimatedWord>
        ))}
      </motion.h2>
      <motion.p
        className={styles.textDescription}
        variants={wordRevealContainer}
      >
        {subtitle.split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {"\u00A0"}
          </AnimatedWord>
        ))}
      </motion.p>
    </motion.section>
  );
};

export default function MoonDivinePage() {
  return (
    <ReactLenis
      root
      options={{ smoothWheel: true, lerp: 0.06, wheelMultiplier: 1.3 }}
    >
      <header className={styles.hero}>
        <motion.h1
          className={styles.heroHeadline}
          variants={wordRevealContainer}
          initial="hidden"
          animate="visible"
        >
          {heroHeadlineLine1.split(" ").map((word, index) => (
            <AnimatedWord key={`line1-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}{" "}
          <br />
          {heroHeadlineLine2Start.split(" ").map((word, index) => (
            <AnimatedWord key={`line2-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
          <span className={styles.highlight}>
            <AnimatedWord variants={wordVariants}>
              {heroHeadlineHighlight}
            </AnimatedWord>
          </span>
        </motion.h1>
      </header>

      {/* === MAIN CONTENT REORDERED AS REQUESTED === */}
      <main className={styles.showcaseWrapper}>
        {/* 1. Image (Padded) */}
        <section className={styles.paddedImageSection}>
          <div className={styles.imageContainer}>
            <Image src={img1} alt="MoonDivine UI detail" />
          </div>
        </section>

        {/* 2. Full-width Image */}
        <section className={styles.fullWidthImageSection}>
          <div className={styles.imageContainer}>
            <Image src={img2} alt="Widescreen showcase of MoonDivine project" />
          </div>
        </section>

        {/* 3. Text Section */}
        <AnimatedTextSection
          title={textSection1.title}
          subtitle={textSection1.subtitle}
        />

        {/* 4. Full-width Image */}
        <section className={styles.fullWidthImageSection}>
          <div className={styles.imageContainer}>
            <Image src={img3} alt="Multiple screens of the MoonDivine app" />
          </div>
        </section>

        {/* 5. Image (Padded) - This is a simple image now */}
        <section className={styles.paddedImageSection}>
          <div className={styles.imageContainer}>
            <Image src={img4} alt="MoonDivine UI detail" />
          </div>
        </section>

        {/* 6. Text Section */}
        <AnimatedTextSection
          title={textSection2.title}
          subtitle={textSection2.subtitle}
        />

        {/* 7. Full-width Image */}
        <section className={styles.fullWidthImageSection}>
          <div className={styles.imageContainer}>
            <Image src={img5} alt="Close up of MoonDivine UI elements" />
          </div>
        </section>
      </main>

      <Footer />
    </ReactLenis>
  );
}
