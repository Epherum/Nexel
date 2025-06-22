// src/app/(home)/components/HowWeDoIt.tsx
"use client";

import React from "react";
import styles from "./HowWeDoIt.module.scss";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Animation Variants ---

// 1. The main container for the whole section
const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger between the title and the content wrapper
    },
  },
};

// 2. Variants for any element revealed word-by-word
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

// 3. Variants for elements revealed as a block (fade and slide up)
const blockVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const HowWeDoIt = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -200px 0px", // Delayed trigger
    once: true,
  });

  const headlineText = "We turn strategy into art and ideas into impact.";

  return (
    <motion.section
      ref={sectionRef}
      className={styles.howWeDoItSection}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* --- Section Title --- */}
      <motion.h2 className={styles.sectionTitle} variants={wordRevealContainer}>
        {"How we do it".split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {index < 2 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </motion.h2>

      {/* --- Content Wrapper --- */}
      {/* This div is also a motion component to be part of the main stagger sequence */}
      <motion.div className={styles.contentWrapper} variants={{}}>
        {/* --- Left Column --- */}
        <div className={styles.leftColumn}>
          <motion.h3 className={styles.headline} variants={wordRevealContainer}>
            {headlineText.split(" ").map((word, index) => (
              <AnimatedWord key={index} variants={wordVariants}>
                {word}
                {index < headlineText.split(" ").length - 1 ? "\u00A0" : ""}
              </AnimatedWord>
            ))}
          </motion.h3>
        </div>

        {/* --- Right Column --- */}
        {/* We make this a motion component to stagger its children (paragraphs & button) */}
        <motion.div
          className={styles.rightColumn}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className={styles.description} variants={blockVariants}>
            We think out of the box when it comes to strategy, design and
            creative. We make the projects that bring inspiration.
          </motion.p>
          <motion.p className={styles.description} variants={blockVariants}>
            Whether your inquiries are big or small, we’re prepared to engage,
            focusing on collaborative problem-solving, even when tackling the
            most complex challenges.
          </motion.p>
          {/* We wrap the Next.js Link component with motion */}
          <motion.div variants={blockVariants}>
            <Link href="/about" className={styles.aboutButton}>
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowWeDoIt;
