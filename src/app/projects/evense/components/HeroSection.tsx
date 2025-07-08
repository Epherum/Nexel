// src/app/projects/evense/components/HeroSection.tsx
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

interface HeroSectionProps {
  line1: string;
  line2Start: string;
  highlight: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  line1,
  line2Start,
  highlight,
}) => {
  return (
    <header className={styles.hero}>
      <motion.h1
        className={styles.heroHeadline}
        variants={wordRevealContainer}
        initial="hidden"
        animate="visible"
      >
        {line1.split(" ").map((word, index) => (
          <AnimatedWord key={`line1-${index}`} variants={wordVariants}>
            {word}
            {"\u00A0"}
          </AnimatedWord>
        ))}
        <br />
        {line2Start.split(" ").map((word, index) => (
          <AnimatedWord key={`line2-${index}`} variants={wordVariants}>
            {word}
            {"\u00A0"}
          </AnimatedWord>
        ))}
        <span className={styles.highlight}>
          <AnimatedWord variants={wordVariants}>{highlight}</AnimatedWord>
        </span>
      </motion.h1>
    </header>
  );
};

export default HeroSection;
