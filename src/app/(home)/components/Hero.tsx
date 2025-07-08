"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import TextScramble from "@/components/animation/TextScramble";
import { easings } from "@/utils/easings";

// --- Data (unchanged) ---
const scrambleWords = [
  "design.",
  "development.",
  "branding.",
  "collaboration.",
];
const imagePattern: ("small" | "large")[] = [
  "large",
  "small",
  "small",
  "large",
  "small",
  "small",
  "large",
  "small",
  "small",
];
const images = imagePattern.map((type, i) => ({
  src: `/static/nexel/hero/${i + 1}.webp`,
  type: type,
}));

// --- Animation Variants ---
const textContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: easings.easeOut } },
};
const gridContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
};
const gridItemVariants: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

// --- Variants for the Mobile Marquee Reveal (This is still correct) ---
const marqueeContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: easings.gentleEaseOut,
      delay: 0.4, // Delay ensures it animates after the headline text appears
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.headlineContainer}>
        {/* Headline motion.h1 remains unchanged */}
        <motion.h1
          className={styles.headline}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ... all the AnimatedWord components ... */}
          <AnimatedWord variants={wordVariants}>A</AnimatedWord>
          <AnimatedWord variants={wordVariants}>viral</AnimatedWord>
          <AnimatedWord variants={wordVariants}>business</AnimatedWord>
          <AnimatedWord variants={wordVariants}>is</AnimatedWord>
          <AnimatedWord variants={wordVariants}>the</AnimatedWord>

          <span className={styles.desktopOnlyBreak}></span>

          <AnimatedWord variants={wordVariants}>result</AnimatedWord>
          <AnimatedWord variants={wordVariants}>of</AnimatedWord>
          <AnimatedWord variants={wordVariants}>a</AnimatedWord>
          <AnimatedWord variants={wordVariants}>great</AnimatedWord>

          <div className={styles.scrambleContainer}>
            <div className={styles.scrambleAbsolute}>
              <AnimatedWord variants={wordVariants}>
                <TextScramble words={scrambleWords} initialDelay={2000} />
              </AnimatedWord>
            </div>
            <span className={styles.scramblePlaceholder}>collaboration.</span>
          </div>
        </motion.h1>
      </div>

      {/* Desktop Grid (unchanged) */}
      <motion.div
        className={styles.desktopGrid}
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ... mapping of desktop images ... */}
      </motion.div>

      {/* --- CORRECTED: Mobile Marquee with Page-Load Reveal Animation --- */}
      <motion.div
        className={styles.mobileMarquee}
        variants={marqueeContainerVariants}
        initial="hidden"
        animate="visible" // Use `animate` to fire on load
        // `viewport` prop is removed as it's not needed
      >
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((item, index) => (
            <div
              key={`marquee-${index}`}
              className={styles.marqueeImageContainer}
            >
              <Image
                src={item.src}
                alt=""
                fill
                className={styles.gridImage}
                quality={90}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
      {/* --- END: Corrected Mobile Marquee --- */}
    </section>
  );
};

export default Hero;
