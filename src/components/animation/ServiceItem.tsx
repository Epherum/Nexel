// src/components/animation/ServiceItem.tsx
"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useRef } from "react";
import styles from "@/app/(home)/components/Services.module.scss";
import { easings } from "@/utils/easings";

import AnimatedWord from "./AnimatedWord";
import FloatingPill from "./FloatingPill";

// Type Definitions
interface PillData {
  text: string;
  color: string;
  top: string;
  left: string;
}
interface ServiceData {
  letter: string;
  title: string;
  pills: PillData[];
}
interface ServiceItemProps {
  service: ServiceData;
}

// --- Animation Variants ---

// A single main container for the entire item.
const itemContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger between letter and content
    },
  },
};

// Variants for the letter reveal
const letterVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
      delay: 0.2,
    },
  },
};

// Variants for the content (title and pills)
const titleContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const pillsContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const titleWordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

const ServiceItem = ({ service }: ServiceItemProps) => {
  const ref = useRef(null);

  // --- 1. HOOK FOR THE REVEAL ANIMATION (UNCHANGED) ---
  // This triggers the word-by-word reveal when the item is centered.
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // This now maps the scroll progress to COLOR values.
  const color = useTransform(
    scrollYProgress,
    // Input scroll points
    [0.2, 0.5, 0.8],
    // Output COLOR values (dim, bright, dim)
    // Using hex codes for clarity. You can also use your SCSS variables if they are accessible as JS constants.
    ["#888888", "#FFFFFF", "#888888"]
  );

  return (
    <motion.div
      ref={ref}
      className={styles.serviceItem}
      variants={itemContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <AnimatedWord variants={letterVariants} className={styles.letter}>
        {service.letter}
      </AnimatedWord>

      <motion.div className={styles.content} variants={{}}>
        {/*
          We've replaced `style={{ opacity }}` with `style={{ color }}`.
        */}
        <motion.h3
          className={styles.serviceTitle}
          variants={titleContainerVariants}
          style={{ color }} // Apply the dynamic COLOR here!
        >
          {service.title.split(" ").map((word, index) => (
            <AnimatedWord key={index} variants={titleWordVariants}>
              {word}
              {index < service.title.split(" ").length - 1 ? "\u00A0" : ""}
            </AnimatedWord>
          ))}
        </motion.h3>

        <motion.div
          className={styles.pillsContainer}
          variants={pillsContainerVariants}
        >
          {service.pills.map((pill) => (
            <FloatingPill key={pill.text} pill={pill} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceItem;
