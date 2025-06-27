"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./AboutHero.module.scss";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
// CHANGE: Import the Lenis instance getter
import { getScrollInstance } from "@/components/HOC/smoothScroll";

// --- Data and Variants are unchanged, so they are omitted for brevity ---
// ... (paste your teamImages, mainContainer, wordRevealContainer, etc. here)
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

// --- NEW, more premium card animation variants ---
const cardContainerVariants: Variants = {
  // The parent doesn't need variants, but let's keep it clean
  initial: {},
  animate: {
    transition: {
      // Stagger the reveal of each card
      staggerChildren: 0.15,
      delayChildren: 0.2, // Start revealing cards slightly after the container is ready
    },
  },
};

const cardVariants: Variants = {
  // Start the cards off-screen at the bottom
  initial: { y: "110vh", rotate: 15 },
  // Animate to their final position based on the style prop
  animate: {
    y: 0,
    rotate: 0, // We can let the style prop handle the final rotation
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1], // A high-quality quintic ease-out
    },
  },
};

const AboutHero = () => {
  const descriptionText =
    "We’re a team of diverse talents, each person valued not just for what they do, but for who they are.";

  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);

  // This effect handles the entire scroll lock/unlock logic
  useEffect(() => {
    const lenis = getScrollInstance();

    // On mount, immediately stop scrolling
    // A slight delay ensures Lenis is definitely initialized
    setTimeout(() => {
      lenis?.stop();
    }, 50);

    // This function will be called when the component unmounts
    return () => {
      // CRITICAL: Always re-enable scrolling when the user navigates away
      // or the component unmounts for any reason.
      lenis?.start();
    };
  }, []); // Empty dependency array means this runs only once on mount and cleanup on unmount

  const handleIntroAnimationComplete = () => {
    // This is called when the final card has animated into view.
    // Now, we can re-enable scrolling.
    setIntroAnimationComplete(true);
    const lenis = getScrollInstance();
    lenis?.start();
  };

  return (
    // We remove the onAnimationComplete from the section, as we'll trigger it from the cards
    <motion.section
      className={styles.heroSection}
      variants={mainContainer}
      initial="hidden"
      animate="visible"
    >
      {/* CHANGE: The card animation is now driven by a single parent container */}
      {/* This will animate all cards sequentially on load, no scroll needed yet */}
      <motion.div
        className={styles.cardsContainer}
        variants={cardContainerVariants}
        initial="initial"
        animate="animate"
        // CHANGE: When the LAST card finishes its stagger, unlock the scroll
        onAnimationComplete={handleIntroAnimationComplete}
      >
        {teamImages.map((card) => (
          <motion.div
            key={card.id}
            className={`${styles.card} ${
              card.color === "lime" ? styles.lime : ""
            }`}
            style={card.style} // The final resting position and rotation
            variants={cardVariants}
            // initial and animate are inherited from the parent
          >
            <div className={styles.imageContainer}>
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 30vw, 25vw"
                style={{ objectFit: "cover" }}
                priority // Good to have for LCP images
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- ORIGINAL TEXT CONTENT (Unchanged) --- */}
      <motion.div
        className={styles.contentWrapper}
        variants={wordRevealContainer}
      >
        <h1 className={styles.headline}>
          <AnimatedWord variants={wordVariants}>Creative</AnimatedWord>
        </h1>
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
          <AnimatedWord variants={wordVariants}>
            <button className={styles.exploreButton}>Explore</button>
          </AnimatedWord>
        </motion.div>
        <h1 className={styles.headline}>
          <AnimatedWord variants={wordVariants}>Inspiring</AnimatedWord>
        </h1>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      {/* We can use Framer Motion to fade this in only when scrolling is unlocked */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ opacity: introAnimationComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <AnimatedWord variants={delayedWordVariants}>Scroll down</AnimatedWord>
      </motion.div>

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
