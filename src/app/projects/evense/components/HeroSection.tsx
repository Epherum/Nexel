"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./HeroSection.module.css";
import { easings } from "@/utils/easings";

// A self-contained component to handle the word animation
const AnimatedWord = ({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants: Variants;
}) => (
  <span style={{ display: "inline-block", overflow: "hidden" }}>
    <motion.span variants={variants} style={{ display: "inline-block" }}>
      {children}
    </motion.span>
  </span>
);

// Animation variants for the headline words
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

// --- 1. UPDATED PROP TYPES ---
// These now match the detailed data structure from page.tsx
type HeroSectionProps = {
  line1: string;
  line2Start: string;
  line2Highlight: string;
  line3Highlight: string;
};

// --- 2. UPDATED COMPONENT LOGIC ---
const HeroSection: React.FC<HeroSectionProps> = ({
  line1,
  line2Start,
  line2Highlight,
  line3Highlight,
}) => {
  return (
    <header className={styles.hero}>
      <motion.h1
        className={styles.heroHeadline}
        variants={wordRevealContainer}
        initial="hidden"
        animate="visible"
      >
        {/* --- Line 1 Rendering --- */}
        {line1.split(" ").map((word, index) => (
          <AnimatedWord key={`line1-${index}`} variants={wordVariants}>
            {word}
            {"\u00A0"}
            {/* Adds a space */}
          </AnimatedWord>
        ))}

        <br />

        {/* --- Line 2 Rendering (in two parts) --- */}
        {line2Start
          .trim()
          .split(" ")
          .map((word, index) => (
            <AnimatedWord key={`line2-start-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
        <span className={styles.highlight}>
          <AnimatedWord variants={wordVariants}>{line2Highlight}</AnimatedWord>
        </span>

        <br />

        {/* --- Line 3 Rendering (highlighted) --- */}
        <span className={styles.highlight}>
          <AnimatedWord variants={wordVariants}>{line3Highlight}</AnimatedWord>
        </span>
      </motion.h1>
    </header>
  );
};

export default HeroSection;
