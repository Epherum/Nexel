// src/components/Hero/Hero.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Text animation variants (unchanged) ---
const textContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: easings.easeOut },
  },
};

// --- Image reveal animation variants (unchanged) ---
const imageRevealVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const imageScaleVariants: Variants = {
  hidden: { scale: 1.15 },
  visible: {
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealOverlayVariants: Variants = {
  hidden: { y: "0%" },
  visible: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* --- STRUCTURAL FIX START --- */}
      {/* This outer container orchestrates the animation */}
      <motion.div
        className={styles.mobileImageContainer}
        variants={imageRevealVariants}
        initial="hidden"
        animate="visible"
      >
        {/* This wrapper now handles the SCALE animation and contains BOTH the overlay and the image */}
        <motion.div
          className={styles.imageWrapper}
          variants={imageScaleVariants}
        >
          {/* The overlay is now INSIDE the scaling wrapper */}
          <motion.div
            className={styles.revealOverlay}
            variants={revealOverlayVariants}
          />
          <Image
            src="/static/nexel/mobile-hero.png"
            alt="A collage of design assets including a cartoon planet mascot."
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </motion.div>

      <div className={styles.textContainer}>
        <motion.h1
          className={styles.headline}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ... all other AnimatedWord components remain the same ... */}
          <AnimatedWord
            className={`${styles.word} ${styles.white}`}
            variants={wordVariants}
          >
            A
          </AnimatedWord>
          <AnimatedWord
            className={`${styles.word} ${styles.grey}`}
            variants={wordVariants}
          >
            viral
          </AnimatedWord>
          <AnimatedWord
            className={`${styles.word} ${styles.white}`}
            variants={wordVariants}
          >
            business
          </AnimatedWord>
          <br className={styles.desktopBreak} />
          <AnimatedWord
            className={`${styles.word} ${styles.grey}`}
            variants={wordVariants}
          >
            is
          </AnimatedWord>
          <AnimatedWord
            className={`${styles.word} ${styles.white}`}
            variants={wordVariants}
          >
            the
          </AnimatedWord>
          <span className={styles.inlineImageContainer}>
            <AnimatedWord className={styles.word} variants={wordVariants}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/static/nexel/test.jpg"
                  alt="Design snippet"
                  fill
                  className={styles.snippetImage}
                />
              </div>
            </AnimatedWord>
          </span>
          <AnimatedWord
            className={`${styles.word} ${styles.white}`}
            variants={wordVariants}
          >
            result
          </AnimatedWord>
          <AnimatedWord
            className={`${styles.word} ${styles.grey}`}
            variants={wordVariants}
          >
            of a
          </AnimatedWord>
          <br className={styles.desktopBreak} />
          <AnimatedWord
            className={`${styles.word} ${styles.white}`}
            variants={wordVariants}
          >
            great
          </AnimatedWord>
          <AnimatedWord className={styles.highlight} variants={wordVariants}>
            design
          </AnimatedWord>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
