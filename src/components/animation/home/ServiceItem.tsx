"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { useRef } from "react";
import styles from "@/app/(home)/components/Services.module.css";
import { easings } from "@/utils/easings";

import AnimatedWord from "../AnimatedWord";
import FloatingPill from "./FloatingPill";

// --- Type Definitions (Unchanged) ---
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

// --- Animation Variants (Unchanged) ---
const itemContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
};
const letterVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.5, ease: easings.easeOut, delay: 0.2 },
  },
};
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
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const color = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
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
      {/* === START OF CHANGE === */}
      {/* ADDED: A div wrapper to apply the .letter style */}
      <div className={styles.letter}>
        {/* REMOVED: className from AnimatedWord */}
        <AnimatedWord variants={letterVariants}>{service.letter}</AnimatedWord>
      </div>
      {/* === END OF CHANGE === */}

      <motion.div className={styles.content} variants={{}}>
        <motion.h3
          className={styles.serviceTitle}
          variants={titleContainerVariants}
          style={{ color }}
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
