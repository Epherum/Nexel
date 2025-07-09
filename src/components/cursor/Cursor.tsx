"use client";

import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import styles from "./Cursor.module.css";
import { CursorContext } from "@/components/cursor/CursorContext";
import { easings } from "@/utils/easings";
import { FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CURSOR_SIZE = 20;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const { isHoveringLink, isHoveringDraggable, isCursorVisible } =
    useContext(CursorContext);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorVariants = {
    default: {
      height: CURSOR_SIZE,
      width: CURSOR_SIZE,
      backgroundColor: "var(--accent-color)",
      mixBlendMode: "difference",
    },
    linkHover: {
      height: 100,
      width: 100,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    // 💡 1. UPDATED THE DRAG CURSOR VARIANT
    dragHover: {
      height: 150, // Slightly bigger
      width: 150, // Slightly bigger
      backgroundColor: "#000", // Black background
      mixBlendMode: "normal", // Keep as normal so it doesn't invert
    },
  };

  const currentState = isHoveringDraggable
    ? "dragHover"
    : isHoveringLink
    ? "linkHover"
    : "default";

  const currentSize = cursorVariants[currentState].height;

  const animateProps = {
    ...cursorVariants[currentState],
    x: mousePosition.x - currentSize / 2,
    y: mousePosition.y - currentSize / 2,
    scale: isCursorVisible ? 1 : 0,
  };

  return (
    <motion.div
      className={styles.cursor}
      animate={animateProps}
      transition={{
        type: "tween",
        ease: easings.gentleEaseOut,
        duration: 0.5,
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.2,
        },
      }}
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
          // 💡 2. ADDED A NEW DEDICATED CLASS FOR DRAG STYLING
          <span className={`${styles.cursorContent} ${styles.dragContent}`}>
            <FiArrowLeft /> Drag <FiArrowRight />
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cursor;
