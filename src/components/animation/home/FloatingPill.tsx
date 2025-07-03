"use client";

import { motion, Variants } from "framer-motion";
import styles from "@/app/(home)/components/Services.module.css";
import { useMemo } from "react";

// Types remain the same...
interface Pill {
  text: string;
  color: string;
  top: string;
  left: string;
}

interface FloatingPillProps {
  pill: Pill;
}

const FloatingPill = ({ pill }: FloatingPillProps) => {
  const floatingAnimation = useMemo(() => {
    const yTarget = (Math.random() - 0.5) * 20;
    const xTarget = (Math.random() - 0.5) * 20;
    const duration = 2.5 + Math.random() * 1.5;

    return {
      y: [0, yTarget, 0],
      x: [0, xTarget, 0],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
        // === THIS IS THE FIX ===
        // We tell TypeScript that "easeInOut" is a specific, constant value.
        ease: "easeInOut" as const,
      },
    };
  }, []);

  const pillVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: floatingAnimation.x,
      y: floatingAnimation.y,
      transition: {
        scale: {
          type: "spring",
          damping: 15,
          stiffness: 150,
        },
        opacity: {
          duration: 0.4,
        },
        x: floatingAnimation.transition,
        y: floatingAnimation.transition,
      },
    },
  };

  return (
    <motion.div
      variants={pillVariants}
      className={`${styles.pill} ${styles[`pill--${pill.color}`]}`}
      style={{ top: pill.top, left: pill.left }}
    >
      {pill.text}
    </motion.div>
  );
};

export default FloatingPill;
