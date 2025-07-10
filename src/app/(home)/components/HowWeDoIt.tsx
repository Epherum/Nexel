"use client";

import React from "react";
import styles from "./HowWeDoIt.module.css"; // CHANGED: Import .css file
import Link from "@/components/InteractiveLink";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Animation Variants (Unchanged) ---
const containerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.3 } },
};
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};
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
    margin: "0px 0px -200px 0px",
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
      {/* CHANGED: Added 'text-lg' utility class */}
      <motion.h2
        className={`${styles.sectionTitle} text-lg`}
        variants={wordRevealContainer}
      >
        {"How we do it".split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {index < 3 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </motion.h2>

      {/* --- Content Wrapper --- */}
      <motion.div className={styles.contentWrapper} variants={{}}>
        {/* --- Left Column --- */}
        <div className={styles.leftColumn}>
          {/* CHANGED: Added 'text-3xl' utility class */}
          <motion.h3
            className={`${styles.headline} text-3xl`}
            variants={wordRevealContainer}
          >
            {headlineText.split(" ").map((word, index) => (
              <AnimatedWord key={index} variants={wordVariants}>
                {word}
                {index < headlineText.split(" ").length - 1 ? "\u00A0" : ""}
              </AnimatedWord>
            ))}
          </motion.h3>
        </div>

        {/* --- Right Column --- */}
        <motion.div
          className={styles.rightColumn}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* CHANGED: Added 'text-xs' utility class */}
          <motion.p
            className={`${styles.description} text-xs`}
            variants={blockVariants}
          >
            We think out of the box when it comes to strategy, design and
            creative. We make the projects that bring inspiration.
          </motion.p>
          {/* CHANGED: Added 'text-xs' utility class */}
          <motion.p
            className={`${styles.description} text-xs`}
            variants={blockVariants}
          >
            Whether your inquiries are big or small, we’re prepared to engage,
            focusing on collaborative problem-solving, even when tackling the
            most complex challenges.
          </motion.p>
          <motion.div variants={blockVariants}>
            {/* CHANGED: Added 'text-xs' utility class */}
            <Link href="/about" className={`${styles.aboutButton} text-xs`}>
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowWeDoIt;
