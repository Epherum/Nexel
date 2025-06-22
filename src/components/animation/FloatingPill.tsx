// src/components/FloatingPill.tsx
"use client";

import { motion, Variants } from "framer-motion";
import styles from "@/app/(home)/components/Services.module.scss";
import { easings } from "@/utils/easings"; // Import our new easings
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
  // We still use useMemo to create a unique floating pattern for each pill
  const floatingAnimation = useMemo(() => {
    const y = (Math.random() - 0.5) * 12;
    const x = (Math.random() - 0.5) * 12;
    const duration = 2.5 + Math.random() * 1.5;

    return {
      y: [0, y, 0],
      x: [0, x, 0],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    };
  }, []);

  // Define variants for the pill itself
  const pillVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      ...floatingAnimation, // Spread the floating animation into the 'visible' state!
      transition: {
        scale: {
          type: "spring", // A spring for the scale feels nice
          damping: 15,
          stiffness: 150,
        },
        opacity: {
          duration: 0.4,
        },
        // We apply the floating animation's transition here
        ...floatingAnimation.transition,
      },
    },
  };

  return (
    // This is now a motion component that will be controlled by its parent's variants
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
