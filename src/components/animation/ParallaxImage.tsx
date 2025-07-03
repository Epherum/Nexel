"use client";

import React, { useRef } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxImage.module.css";

// --- Internal Component for Parallax Logic ---
// This component contains the hooks and is only rendered when needed.
// It assumes it will ALWAYS be used in 'fill' mode.
const ParallaxImage = ({ parallaxAmount, ...rest }: any) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxAmount}%`, `${parallaxAmount}%`]
  );
  const scale = 1 + (parallaxAmount / 100) * 2;

  return (
    <div ref={containerRef} className={styles.imageContainer}>
      <motion.div className={styles.imageWrapper} style={{ y, scale }}>
        {/* We hard-code 'fill' here because this component is only for that purpose */}
        <NextImage {...rest} fill className={styles.image} />
      </motion.div>
    </div>
  );
};

// --- Main Exported Component ---
type ImageProps = NextImageProps & {
  parallaxAmount?: number;
};

const Image = (props: ImageProps) => {
  // Destructure all relevant props. We check for 'fill' specifically.
  const { parallaxAmount = 10, fill, className, ...rest } = props;

  // --- This is the new conditional logic ---
  // If 'fill' is true AND parallax isn't disabled, render the parallax component.
  if (fill && parallaxAmount !== 0) {
    return (
      <ParallaxImage
        parallaxAmount={parallaxAmount}
        className={className}
        {...rest}
      />
    );
  }

  // --- Fallback Renderer ---
  // Otherwise, render a standard NextImage. This handles two cases:
  // 1. Images with `width` and `height` (like the logo).
  // 2. `fill` images where parallax has been disabled (`parallaxAmount={0}`).
  return (
    <NextImage
      fill={fill} // Pass the fill prop along (it will be true or undefined)
      className={className}
      {...rest}
    />
  );
};

export default Image;
