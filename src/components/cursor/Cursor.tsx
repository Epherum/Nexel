"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Cursor.module.css";
import { easings } from "@/utils/easings";

// Define the size of the cursor circle for centering
const CURSOR_SIZE = 20;

const Cursor = () => {
  // 1. Use React's useState to store the mouse position.
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 2. useEffect to update the state on "mousemove".
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

  return (
    <motion.div
      className={styles.cursor}
      // 3. Use the `animate` prop. Framer Motion will animate to these new values
      // whenever the state changes.
      animate={{
        // We subtract half the cursor's size to center it perfectly on the pointer
        x: mousePosition.x - CURSOR_SIZE / 2,
        y: mousePosition.y - CURSOR_SIZE / 2,
      }}
      // 4. Define the animation type and easing using the `transition` prop.
      transition={{
        type: "tween", // A "tween" is a duration-based animation
        ease: easings.gentleEaseOut, // This applies a cubic-bezier ease-out curve
        duration: 0.5, // Adjust this duration for a faster or slower follow
      }}
    />
  );
};

export default Cursor;
