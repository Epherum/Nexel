//src/app/about/components/AboutHero.tsx
"use client";

import React, { useRef } from "react";
import styles from "./AboutHero.module.css";
import { motion, useScroll, Variants } from "framer-motion";
import ScrollAnimatedCard from "./ScrollAnimatedCard";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { useMediaQuery } from "@/utils/useMediaQuery"; // <-- Import the custom hook

// --- DATA ---
const teamImages = [
  {
    id: 1,
    src: "/static/nexel/about/team-1.png",
    alt: "A woman with dark hair and white glasses, wearing a light-colored jacket.",
    initialRotate: -30,
    finalRotate: -16,
    zIndex: 5,
    positions: {
      mobile: { top: "15%", left: "2%" },
      desktop: { top: "10%", left: "5%" }, // Your desktop values here
    },
  },
  {
    id: 2,
    src: "/static/nexel/about/team-2.png",
    alt: "A man with glasses and a thoughtful expression.",
    initialRotate: -45,
    finalRotate: -29,
    zIndex: 4,
    positions: {
      mobile: { top: "40%", left: "4%" },
      desktop: { top: "45%", left: "8%" }, // Your desktop values here
    },
  },
  {
    id: 3,
    src: "/static/nexel/about/team-3.png",
    alt: "A selfie of a smiling man with sunglasses and a woman with glasses.",
    initialRotate: 40,
    finalRotate: 15,
    zIndex: 3,
    positions: {
      mobile: { top: "22%", left: "23%" },
      desktop: { top: "20%", left: "28%" }, // Your desktop values here
    },
  },
  {
    id: 4,
    src: "/static/nexel/about/team-4.png",
    alt: "Two glasses of matcha latte on a wooden bench.",
    initialRotate: -35,
    finalRotate: -12,
    zIndex: 2,
    positions: {
      mobile: { top: "42%", left: "50%" },
      desktop: { top: "45%", left: "42%" }, // Your desktop values here
    },
  },
  {
    id: 5,
    src: "/static/nexel/about/team-6.png",
    alt: "A man with curly hair and glasses, wearing headphones.",
    initialRotate: 45,
    finalRotate: 20,
    zIndex: 1,
    positions: {
      mobile: { top: "15%", right: "3%" },
      desktop: { top: "3%", right: "4%" }, // Your desktop values here
    },
  },
  {
    id: 6,
    src: "/static/nexel/about/team-5.png",
    alt: "A man wearing a light-colored cap, looking to his side.",
    initialRotate: 50,
    finalRotate: -28,
    zIndex: 6,
    positions: {
      mobile: { top: "55%", right: "27%" },
      desktop: { top: "50%", right: "10%" }, // Your desktop values here
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
  const isDesktop = useMediaQuery("(min-width: 768px)"); // <-- USE THE HOOK

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end 0.7"],
  });

  return (
    <div ref={scrollContainerRef} className={styles.scrollWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.cardsContainer}>
          {teamImages.map((card, index) => (
            <ScrollAnimatedCard
              key={card.id}
              card={card}
              index={index}
              totalCards={teamImages.length}
              scrollYProgress={scrollYProgress}
              isDesktop={isDesktop} // <-- PASS THE VALUE AS A PROP
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
            <AnimatedWord variants={wordVariants}>
              <button className={styles.exploreButton}>Explore</button>
            </AnimatedWord>
          </motion.div>
          <h1 className={styles.headline}>
            <AnimatedWord variants={wordVariants}>Inspiring</AnimatedWord>
          </h1>
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
