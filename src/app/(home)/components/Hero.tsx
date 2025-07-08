// src/components/Hero/Hero.js
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import TextScramble from "@/components/animation/TextScramble";
import { easings } from "@/utils/easings";

// --- Data & Constants ---
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
const marqueeContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easings.easeOut, delay: 0.4 },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.headlineContainer}>
        <motion.h1
          className={styles.headline}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
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
                <TextScramble words={scrambleWords} />
              </AnimatedWord>
            </div>
          </div>
        </motion.h1>
      </div>

      {/* --- Marquee (Now on Desktop & Mobile) --- */}
      <motion.div
        // Using the existing class. You may want to rename or adjust its styles
        // in Hero.module.css to better suit desktop view.
        className={styles.imageMarquee}
        variants={marqueeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={styles.marqueeTrack}
          // --- FLIPPED ANIMATION ---
          // We start at -50% and animate to 0% to scroll from left-to-right
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* We still duplicate the images for a seamless loop */}
          {[...images, ...images].map((item, index) => (
            <div
              key={`marquee-${index}`}
              className={styles.marqueeImageContainer}
            >
              <Image
                src={item.src}
                alt={`Hero portfolio item ${index + 1}`}
                fill
                className={styles.gridImage}
                quality={90}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
