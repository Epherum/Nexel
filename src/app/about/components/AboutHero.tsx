"use client";

import React, { useRef } from "react";
import styles from "./AboutHero.module.css";
import { motion, useScroll, Variants } from "framer-motion";
// FIXED: Removed the { CardData } named import
import ScrollAnimatedCard from "./ScrollAnimatedCard";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { useMediaQuery } from "@/utils/useMediaQuery";

// ADDED: Define the type for our card data here
interface CardData {
  id: number;
  src: string;
  alt: string;
  zIndex: { mobile: number; desktop: number }; // <-- This is now an object

  initialRotate: { mobile: number; desktop: number };
  finalRotate: { mobile: number; desktop: number };
  positions: {
    mobile: React.CSSProperties;
    desktop: React.CSSProperties;
  };
}

// --- UPDATED DATA STRUCTURE ---
// This array now correctly matches the CardData type we just defined
const teamImages: CardData[] = [
  {
    id: 1,
    src: "/static/nexel/about/team-1.webp",
    alt: "A woman with dark hair and white glasses, wearing a light-colored jacket.",
    initialRotate: { mobile: -30, desktop: -15 },
    finalRotate: { mobile: 16, desktop: -8 },
    zIndex: { mobile: 5, desktop: 5 }, // <-- Updated

    positions: {
      mobile: { top: "15%", left: "-12%" },
      desktop: { top: "10%", left: "5%" },
    },
  },
  {
    id: 2,
    src: "/static/nexel/about/team-2.webp",
    alt: "A man with glasses and a thoughtful expression.",
    initialRotate: { mobile: -45, desktop: -20 },
    finalRotate: { mobile: -11, desktop: -12 },
    zIndex: { mobile: 1, desktop: 4 }, // <-- Updated
    positions: {
      mobile: { top: "10%", left: "30%" },
      desktop: { top: "45%", left: "8%" },
    },
  },
  {
    id: 3,
    src: "/static/nexel/about/team-3.webp",
    alt: "A selfie of a smiling man with sunglasses and a woman with glasses.",
    initialRotate: { mobile: 40, desktop: 18 },
    finalRotate: { mobile: -15, desktop: 9 },
    zIndex: { mobile: 4, desktop: 3 }, // <-- Updated
    positions: {
      mobile: { top: "18%", right: "-5%" },
      desktop: { top: "20%", left: "28%" },
    },
  },
  {
    id: 4,
    src: "/static/nexel/about/team-4.webp",
    alt: "Two glasses of matcha latte on a wooden bench.",
    initialRotate: { mobile: -35, desktop: -12 },
    finalRotate: { mobile: -20, desktop: -4 },
    zIndex: { mobile: 6, desktop: 2 }, // <-- Updated
    positions: {
      mobile: { top: "40%", left: "-10%" },
      desktop: { top: "45%", left: "42%" },
    },
  },
  {
    id: 5,
    src: "/static/nexel/about/team-6.webp",
    alt: "A man with curly hair and glasses, wearing headphones.",
    initialRotate: { mobile: 45, desktop: 22 },
    finalRotate: { mobile: -30, desktop: 11 },
    zIndex: { mobile: 3, desktop: 1 }, // <-- Updated
    positions: {
      mobile: { top: "40%", right: "-5%" },
      desktop: { top: "3%", right: "4%" },
    },
  },
  {
    id: 6,
    src: "/static/nexel/about/team-5.webp",
    alt: "A man wearing a light-colored cap, looking to his side.",
    initialRotate: { mobile: 50, desktop: 30 },
    finalRotate: { mobile: 20, desktop: -15 },
    zIndex: { mobile: 2, desktop: 6 }, // <-- Updated
    positions: {
      mobile: { top: "30%", right: "25%" },
      desktop: { top: "50%", right: "10%" },
    },
  },
];

const descriptionText =
  "We’re a team of diverse talents, each person valued not just for what they do, but for who they are.";

const textContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const AboutHero = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end 0.7"],
  });

  return (
    <div ref={scrollContainerRef} className={styles.scrollWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.cardsContainer}>
          {isDesktop !== null &&
            teamImages.map((card, index) => (
              <ScrollAnimatedCard
                key={card.id}
                card={card}
                index={index}
                totalCards={teamImages.length}
                scrollYProgress={scrollYProgress}
                // Now, inside this block, TypeScript knows `isDesktop` is a boolean.
                isDesktop={isDesktop}
              />
            ))}
        </div>
        <motion.div
          className={styles.contentWrapper}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.headline}>
            <AnimatedWord variants={wordVariants}>Creative</AnimatedWord>
          </h1>
          <motion.div
            className={styles.descriptionBox}
            variants={textContainerVariants}
          >
            <p>
              {descriptionText.split(" ").map((word, index) => (
                <AnimatedWord key={index} variants={wordVariants}>
                  {word}
                  {index < descriptionText.split(" ").length - 1
                    ? "\u00A0"
                    : ""}
                </AnimatedWord>
              ))}
            </p>
          </motion.div>
          <h1 className={styles.headline}>
            <AnimatedWord variants={wordVariants}>Inspiring</AnimatedWord>
          </h1>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatedWord variants={wordVariants}>Scroll down</AnimatedWord>
        </motion.div>

        <motion.div
          className={styles.bottomBar}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <span className={styles.valueLabel}>
            <AnimatedWord variants={wordVariants}>Our value</AnimatedWord>
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
      </section>
    </div>
  );
};

export default AboutHero;
