// src/components/animation/AnimatedWord.tsx
"use client";

import { motion, Variants } from "framer-motion";
import styles from "@/app/(home)/components/Services.module.scss";

interface AnimatedWordProps {
  children: React.ReactNode;
  className?: string;
  // The variants prop is required for this component to function.
  variants: Variants;
}

const AnimatedWord = ({ children, className, variants }: AnimatedWordProps) => {
  return (
    // This is the "mask" that has overflow: hidden
    <span className={styles.wordWrapper}>
      {/* 
        This is the element that moves. The inline-block style is
        crucial for the transform animation to work.
      */}
      <motion.span
        variants={variants}
        className={className}
        style={{ display: "inline-block" }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default AnimatedWord;
