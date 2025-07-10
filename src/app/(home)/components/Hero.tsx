// src/components/Hero/Hero.js
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { gsap } from "gsap";
import styles from "./Hero.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import TextScramble from "@/components/animation/TextScramble";
import { easings } from "@/utils/easings";
import HeroMarquee from "./HeroMarquee";

// Only need 7 images now, no marquee duplication
const images = [1, 2, 3, 4, 5, 6, 7].map((num) => ({
  src: `/static/nexel/hero/${num}.webp`,
}));

const scrambleWords = [
  "design.",
  "development.",
  "branding.",
  "collaboration.",
];
const textContainerVariants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1, ease: easings.easeOut } },
};

const Hero = ({ isPreloading }: any) => {
  const imageRowRef = useRef(null);
  const textAnimationControls = useAnimationControls();

  // It only controls the headline text animation.
  useEffect(() => {
    // When the preloader finishes, start the text animation.
    if (!isPreloading) {
      textAnimationControls.start("visible");
    }
  }, [isPreloading, textAnimationControls]);

  return (
    <section className={styles.hero}>
      <div className={styles.headlineContainer}>
        <motion.h1
          className={styles.headline}
          variants={textContainerVariants}
          initial="hidden"
          animate={textAnimationControls}
        >
          {/* ... All your AnimatedWord and TextScramble components are fine ... */}
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

      <HeroMarquee isPreloading={isPreloading} />
    </section>
  );
};

export default Hero;
