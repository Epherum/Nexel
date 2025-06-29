"use client";

import React, { useRef } from "react";
import styles from "./AboutHero.module.scss";
import { motion, useScroll, Variants } from "framer-motion";
import ScrollAnimatedCard from "./ScrollAnimatedCard";
// 1. Re-import the components and utils needed for the text animation
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- DATA ---
const teamImages = [
  {
    id: 1,
    src: "/static/nexel/about/team-1.png",
    alt: "A woman with dark hair and white glasses, wearing a light-colored jacket.",
    style: {
      top: "12%",
      left: "5%",
      transform: "rotate(-12deg)",
      width: "25vw",
      height: "35vw",
      maxWidth: "300px",
      maxHeight: "420px",
    },
    color: "white",
  },
  {
    id: 2,
    src: "/static/nexel/about/team-2.png",
    alt: "A man with glasses and a nose ring, looking down thoughtfully.",
    style: {
      top: "55%",
      left: "8%",
      transform: "rotate(-80deg)",
      width: "22vw",
      height: "30vw",
      maxWidth: "260px",
      maxHeight: "360px",
    },
    color: "lime",
  },
  {
    id: 3,
    src: "/static/nexel/about/team-3.png",
    alt: "A selfie of a smiling man with sunglasses and a woman with glasses.",
    style: {
      top: "25%",
      left: "30%",
      transform: "rotate(8deg)",
      width: "28vw",
      height: "38vw",
      maxWidth: "340px",
      maxHeight: "460px",
    },
    color: "white",
  },
  {
    id: 4,
    src: "/static/nexel/about/team-4.png",
    alt: "A woman with long dark hair smiling, with a coastal scene in the background.",
    style: {
      top: "45%",
      left: "55%",
      transform: "rotate(-5deg)",
      width: "20vw",
      height: "28vw",
      maxWidth: "240px",
      maxHeight: "340px",
    },
    color: "lime",
  },
  {
    id: 5,
    src: "/static/nexel/about/team-5.png",
    alt: "A man with curly hair and glasses, in a room with vibrant purple and pink lighting.",
    style: {
      top: "5%",
      right: "8%",
      transform: "rotate(12deg)",
      width: "26vw",
      height: "36vw",
      maxWidth: "320px",
      maxHeight: "440px",
    },
    color: "lime",
  },
  {
    id: 6,
    src: "/static/nexel/about/team-6.png",
    alt: "A man wearing a light-colored cap, looking to his side.",
    style: {
      top: "52%",
      right: "15%",
      transform: "rotate(10deg)",
      width: "24vw",
      height: "33vw",
      maxWidth: "280px",
      maxHeight: "390px",
    },
    color: "white",
  },
];
const descriptionText =
  "We’re a team of diverse talents, each person valued not just for what they do, but for who they are.";

// 2. Define the variants for the initial text reveal (as you had before)
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

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // 3. REMOVED the useTransform hooks for contentOpacity and contentY

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
            />
          ))}
        </div>

        {/* 4. Use standard motion props for a one-time animation on load */}
        <motion.div
          className={styles.contentWrapper}
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          // REMOVED style={{ opacity: contentOpacity, y: contentY }}
        >
          <h1 className={styles.headline}>
            <AnimatedWord variants={wordVariants}>Creative</AnimatedWord>
          </h1>
          <motion.div
            className={styles.descriptionBox}
            variants={textContainerVariants} // Stagger the children inside
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
