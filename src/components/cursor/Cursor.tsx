"use client";

import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import styles from "./Cursor.module.css";
import { CursorContext } from "@/components/cursor/CursorContext";
import { easings } from "@/utils/easings";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CURSOR_SIZE = 20;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const {
    isHoveringLink,
    isHoveringDraggable,
    isCursorVisible,
    mouseDetected,
  } = useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mouseDetected) {
    return null;
  }

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
      mixBlendMode: "normal",
    },
    dragHover: {
      height: 90,
      width: 90,
      backgroundColor: "#fff",
      mixBlendMode: "normal",
    },
  };

  const currentState = isHoveringDraggable
    ? "dragHover"
    : isHoveringLink
    ? "linkHover"
    : "default";

  const currentSize = cursorVariants[currentState].height;

  // Combine variant properties with positioning
  const animateProps = {
    ...cursorVariants[currentState],
    x: mousePosition.x - currentSize / 2,
    y: mousePosition.y - currentSize / 2,
    scale: isCursorVisible ? 1 : 0,
  };

  return (
    <motion.div
      className={styles.cursor}
      // Animate all properties, including x and y
      animate={animateProps}
      // --- START: Corrected Transition Logic ---
      transition={{
        // Default transition for all properties (x, y, width, height, etc.)
        type: "tween",
        ease: easings.gentleEaseOut,
        duration: 0.5,

        // Override for the 'scale' property to make it faster
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.2, // Spring duration is approximate
        },
      }}
      // --- END: Corrected Transition Logic ---
    >
      <motion.div
        animate={{ opacity: currentState !== "default" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {currentState === "linkHover" && (
          <span className={styles.cursorContent}>
            Visit <FiArrowUpRight />
          </span>
        )}
        {currentState === "dragHover" && (
          <span className={styles.cursorContent}>
            <FiArrowLeft /> Drag <FiArrowRight />
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cursor;
