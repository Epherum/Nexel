// src/app/about/components/AboutHero.tsx
"use client";

import React from "react";
import styles from "./AboutHero.module.scss";
import { motion, Variants } from "framer-motion";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Animation Variants (Unchanged) ---
const mainContainer: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};
const delayedWordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easings.easeOut, delay: 0.5 },
  },
};

const AboutHero = () => {
  const descriptionText =
    "We’re a team of diverse talents, each person valued not just for what they do, but for who they are.";

  return (
    <motion.section
      className={styles.heroSection}
      variants={mainContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.contentWrapper}
        variants={wordRevealContainer}
      >
        <h1 className={styles.headline}>
          <AnimatedWord variants={wordVariants}>Creative</AnimatedWord>
        </h1>

        {/* This container will stagger the paragraph and the button */}
        <motion.div
          className={styles.descriptionBox}
          variants={wordRevealContainer}
        >
          <motion.p variants={wordRevealContainer}>
            {descriptionText.split(" ").map((word, index) => (
              <AnimatedWord key={index} variants={wordVariants}>
                {word}
                {index < descriptionText.split(" ").length - 1 ? "\u00A0" : ""}
              </AnimatedWord>
            ))}
          </motion.p>

          {/*
            --- THIS IS THE FIX ---
            We wrap the entire <button> inside our AnimatedWord component.
            This provides the necessary masking and animation.
          */}
          <AnimatedWord variants={wordVariants}>
            <button className={styles.exploreButton}>Explore</button>
          </AnimatedWord>
        </motion.div>

        <h1 className={styles.headline}>
          <AnimatedWord variants={wordVariants}>Inspiring</AnimatedWord>
        </h1>
      </motion.div>

      <div className={styles.scrollIndicator}>
        <AnimatedWord variants={delayedWordVariants}>Scroll down</AnimatedWord>
      </div>

      <motion.div className={styles.bottomBar} variants={wordRevealContainer}>
        <span className={styles.valueLabel}>
          <AnimatedWord variants={wordVariants}>
            Our{"\u00A0"}value
          </AnimatedWord>
        </span>
        <span className={styles.tagline}>
          {"Heart-led, idea-fueled, and always creating."
            .split(" ")
            .map((word, index) => (
              <AnimatedWord key={index} variants={wordVariants}>
                {word}
                {index < 5 ? "\u00A0" : ""}
              </AnimatedWord>
            ))}
        </span>
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;
