// src/components/Hero/Hero.js
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import TextScramble from "@/components/animation/TextScramble";
import { easings } from "@/utils/easings";
import { useMediaQuery } from "@/utils/useMediaQuery";

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
  "small",
];
const images = imagePattern.map((type, i) => ({
  src: `/static/nexel/hero/${i + 1}.webp`,
  type: type,
}));
const MOBILE_BREAKPOINT = 768;

// --- Animation Variants (unchanged) ---
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
const marqueeContainerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easings.easeOut, delay: 0.4 },
  },
};

const Hero = () => {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

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

      {/* --- HYDRATION-SAFE CONDITIONAL RENDERING --- */}
      {isMobile === null ? null : isMobile ? (
        // Render Marquee only when isMobile is definitively true
        <motion.div
          className={styles.mobileMarquee}
          variants={marqueeContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.marqueeTrack}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
      ) : (
        // Render Grid only when isMobile is definitively false
        <motion.div
          className={styles.desktopGrid}
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((item, index) => (
            <motion.div
              key={`desktop-${index}`}
              className={`${styles.imageContainer} ${
                item.type === "small" ? styles.smallImage : styles.largeImage
              }`}
              variants={gridItemVariants}
            >
              <motion.div
                className={styles.imageWrapper}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: easings.easeOut }}
              >
                <Image
                  src={item.src}
                  alt={`Hero portfolio item ${index + 1}`}
                  fill
                  priority={index < 4}
                  className={styles.gridImage}
                  quality={90}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
