// src/app/about/components/BeliefSection.tsx
"use client";

import styles from "./BeliefSection.module.css"; // UPDATED
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Animation Variants (reusable from our system) ---
const containerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.04 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

const BeliefSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const headlineText =
    "We believe design works best when it's thoughtful, brave, and well-rooted";
  const descriptionText =
    "We stay creative by embracing new challenges. Each project, client, and team is one of a kind.";

  return (
    <motion.section
      ref={sectionRef}
      className={styles.beliefSection}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* 
        IMPORTANT: The source order is changed here to H2 then P for a more natural 
        animation flow. The CSS `float` property will handle the final visual layout.
      */}
      <motion.h2 className={styles.headline} variants={wordRevealContainer}>
        {headlineText.split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {index < headlineText.split(" ").length - 1 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </motion.h2>

      <motion.p className={styles.description} variants={wordRevealContainer}>
        {descriptionText.split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {index < descriptionText.split(" ").length - 1 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </motion.p>
    </motion.section>
  );
};

export default BeliefSection;
