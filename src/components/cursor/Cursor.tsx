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
  const [isMounted, setIsMounted] = useState(false); // ✨ 1. Add state to track initial mount
  const { isHoveringLink, isHoveringDraggable, isCursorVisible } =
    useContext(CursorContext);

  useEffect(() => {
    // ✨ 2. Use a timer to set the cursor to visible after 1 second
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1000); // 1000ms = 1s

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ✨ 3. Add cleanup for both the timer and the event listener
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // ✨ Empty dependency array ensures this runs only once

  const cursorVariants = {
    // ... (no changes in this object)
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
    dragHover: {
      height: 150,
      width: 150,
      backgroundColor: "#000",
      mixBlendMode: "normal",
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
    // ✨ 4. Control opacity based on the new 'isMounted' state
    opacity: isMounted ? 1 : 0,
  };

  return (
    <motion.div
      className={styles.cursor}
      initial={{ opacity: 0 }}
      animate={animateProps}
      transition={{
        type: "tween",
        ease: easings.gentleEaseOut,
        duration: 0.5,
        opacity: { duration: 0.4, ease: "linear" },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 30,
          duration: 0.2,
        },
      }}
    >
      {/* ... (no changes to the children) */}
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
          <span className={`${styles.cursorContent} ${styles.dragContent}`}>
            <FiArrowLeft /> Drag <FiArrowRight />
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cursor;
