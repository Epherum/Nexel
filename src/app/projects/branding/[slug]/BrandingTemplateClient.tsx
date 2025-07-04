// src/app/projects/branding/[slug]/BrandingTemplateClient.tsx
"use client"; // <-- This is the most important line!

import React from "react";
import { motion, Variants } from "framer-motion";
// import Image from "@/components/animation/ParallaxImage";
import Image from "next/image";

import styles from "./branding.module.css"; // UPDATED
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { BrandingProject } from "@/data/allProjects"; // Import the type
import Footer from "@/components/layout/Footer";

// --- Animation Variants (Copied from the page) ---
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

// The component now receives the project data as a prop
export default function BrandingTemplateClient({
  project,
}: {
  project: BrandingProject;
}) {
  return (
    <>
      <header className={styles.hero}>
        <motion.h1
          className={styles.heroHeadline}
          variants={wordRevealContainer}
          initial="hidden"
          animate="visible"
        >
          {project.heroHeadline.split(" ").map((word, index) => (
            <AnimatedWord key={index} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
        </motion.h1>
      </header>

      <main className={styles.contentWrapper}>
        <section className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={project.heroImage}
              alt="Hero image for the branding project"
              priority
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <p className={styles.introText}>{project.introText}</p>

        <section className={styles.textGridSection}>
          <h3 className={styles.gridTitle}>The challenge</h3>
          <p className={styles.gridBody}>{project.challengeText}</p>
        </section>

        <section className={styles.textGridSection}>
          <h3 className={styles.gridTitle}>Our approach</h3>
          <p className={styles.gridBody}>{project.approachText}</p>
        </section>

        <section className={styles.fullWidthImageSection}>
          <Image
            src={project.fullWidthImage}
            alt="Outdoor billboard showcase of the branding"
            fill
            style={{ objectFit: "cover" }}
          />
        </section>

        <section className={styles.underImageTextGridSection}>
          <div>
            <h3 className={styles.gridTitle}>{project.services.title}</h3>
            <p className={styles.gridSubtitle}>{project.services.subtitle}</p>
          </div>
          <p className={styles.gridBody}>{project.services.body}</p>
        </section>

        <section className={styles.imageShowcaseGrid}>
          {project.showcase.images.map((imageSrc, index) => (
            <div key={index} className={styles.gridItem}>
              <div className={styles.showcaseImageContainer}>
                <Image
                  src={imageSrc}
                  alt={`Showcase image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {index === 2 && (
                <p className={styles.showcaseText}>{project.showcase.text}</p>
              )}
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
