// src/components/Hero/Hero.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import styles from "./Hero.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

const containerVariants: Variants = {
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

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* ... mobile image container ... */}
      <div className={styles.mobileImageContainer}>
        <Image
          src="/static/nexel/mobile-hero.png"
          alt="A collage of design assets including a cartoon planet mascot."
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className={styles.textContainer}>
        <motion.h1
          className={styles.headline}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- CHANGE START: Added .word class, removed {"\u00A0"} --- */}
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
            of
          </AnimatedWord>
          <AnimatedWord
            className={`${styles.word} ${styles.grey}`}
            variants={wordVariants}
          >
            a
          </AnimatedWord>

          <br className={styles.desktopBreak} />

          <AnimatedWord
            className={`${styles.word} ${styles.white}`}
            variants={wordVariants}
          >
            great
          </AnimatedWord>
          {/* The last word doesn't need the .word class for margin */}
          <AnimatedWord className={styles.highlight} variants={wordVariants}>
            design
          </AnimatedWord>
          {/* --- CHANGE END --- */}
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
