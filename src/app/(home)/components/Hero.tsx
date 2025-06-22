// src/app/(home)/components/Hero.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.scss";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- 1. Standardized Animation Variants ---

// The main conductor for the entire headline
const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08, // A snappy, premium stagger speed
      delayChildren: 0.3, // A small delay to let the page load before animating
    },
  },
};

// The standard masking reveal for all text words
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

// The special reveal for the inline image
const imageVariants: Variants = {
  hidden: {
    y: "110%",
    width: "0em",
  },
  visible: {
    y: "0%",
    width: "1em", // Corresponds to the width in your SCSS
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* 2. The h1 is the main animation conductor */}
      <motion.h1
        className={styles.headline}
        variants={containerVariants}
        initial="hidden"
        // "visible" will trigger automatically on load
        animate="visible"
      >
        {/*
          3. Cleaner JSX with non-breaking spaces (\u00A0)
             This prevents layout shifts and is more robust.
        */}
        <AnimatedWord className={styles.white} variants={wordVariants}>
          A{"\u00A0"}
        </AnimatedWord>
        <AnimatedWord className={styles.grey} variants={wordVariants}>
          viral{"\u00A0"}
        </AnimatedWord>
        <AnimatedWord className={styles.white} variants={wordVariants}>
          business
        </AnimatedWord>
        <br />
        <AnimatedWord className={styles.grey} variants={wordVariants}>
          is{"\u00A0"}
        </AnimatedWord>
        <AnimatedWord className={styles.white} variants={wordVariants}>
          the{"\u2009"}
        </AnimatedWord>

        {/* The image is treated as just another "word" in the sequence */}
        <AnimatedWord variants={imageVariants}>
          <div className={styles.imagePlaceholder}>
            <Image
              src="/static/nexel/test.jpg"
              alt="Design snippet"
              layout="fill"
              objectFit="cover"
              className={styles.snippetImage}
              priority // Add priority=true for LCP (Largest Contentful Paint) images
            />
          </div>
        </AnimatedWord>

        <AnimatedWord className={styles.white} variants={wordVariants}>
          {"\u2009"}result{"\u00A0"}
        </AnimatedWord>
        <AnimatedWord className={styles.grey} variants={wordVariants}>
          of a
        </AnimatedWord>
        <br />
        <AnimatedWord className={styles.white} variants={wordVariants}>
          great{"\u00A0"}
        </AnimatedWord>
        <AnimatedWord className={styles.highlight} variants={wordVariants}>
          design
        </AnimatedWord>
      </motion.h1>
    </section>
  );
};

export default Hero;
