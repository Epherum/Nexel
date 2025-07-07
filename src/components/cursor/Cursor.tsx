"use client";

import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import styles from "./Cursor.module.css";
import { CursorContext } from "@/components/cursor/CursorContext"; // Corrected path assuming context is in the same folder
import { easings } from "@/utils/easings";

// Define the size of the cursor circle for centering
const CURSOR_SIZE = 20;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHoveringLink } = useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      height: CURSOR_SIZE,
      width: CURSOR_SIZE,
      backgroundColor: "var(--accent-color)",
      mixBlendMode: "difference",
    },
    linkHover: {
      height: 80,
      width: 80,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className={styles.cursor}
      // 1. Use variants to control the hover state (size, color, etc.)
      variants={cursorVariants}
      // 2. Animate between variants AND also animate the x/y position here.
      animate={{
        ...(isHoveringLink ? cursorVariants.linkHover : cursorVariants.default),
        x: mousePosition.x - (isHoveringLink ? 80 : CURSOR_SIZE) / 2, // Center based on current size
        y: mousePosition.y - (isHoveringLink ? 80 : CURSOR_SIZE) / 2, // Center based on current size
      }}
      // 3. This transition now applies to x, y, width, height, and backgroundColor
      transition={{
        type: "tween",
        ease: easings.gentleEaseOut, // Your custom easing
        duration: 0.5,
      }}
    >
      <motion.span
        className={styles.cursorText}
        animate={{
          opacity: isHoveringLink ? 1 : 0,
          scale: isHoveringLink ? 1 : 0,
        }}
        // Give the text its own, faster transition
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.2,
        }}
      >
        Visit
      </motion.span>
    </motion.div>
  );
};

export default Cursor;
