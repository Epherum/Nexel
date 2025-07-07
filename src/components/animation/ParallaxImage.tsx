"use client";

import React, { useRef } from "react";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ParallaxImage.module.css";

// --- Internal Component for Parallax Logic ---
const ParallaxImage = ({ parallaxAmount, imageScale, ...rest }: any) => {
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

  // 1. Calculate the MINIMUM scale required to prevent white space.
  const minScaleRequired = 1 + (parallaxAmount / 100) * 2;

  // 2. Determine the final scale. Use the user's 'imageScale' if it's provided
  // and large enough, otherwise fall back to the minimum required scale.
  const finalScale = imageScale
    ? Math.max(imageScale, minScaleRequired)
    : minScaleRequired;

  return (
    <div ref={containerRef} className={styles.imageContainer}>
      <motion.div
        className={styles.imageWrapper}
        // 3. Apply the final calculated scale and the y-transform.
        style={{ y, scale: finalScale }}
      >
        <NextImage {...rest} fill className={styles.image} />
      </motion.div>
    </div>
  );
};

// --- Main Exported Component ---
// Renamed to be more descriptive
type ParallaxImageWrapperProps = NextImageProps & {
  parallaxAmount?: number;
  imageScale?: number; // The new prop for controlling zoom (e.g., 1.1 for 10% zoom)
};

const ParallaxImageWrapper = (props: ParallaxImageWrapperProps) => {
  // Destructure all relevant props, including the new 'imageScale'
  const { parallaxAmount = 10, imageScale, fill, className, ...rest } = props;

  // If 'fill' is true AND parallax isn't disabled, render the parallax component.
  if (fill && parallaxAmount !== 0) {
    return (
      <ParallaxImage
        parallaxAmount={parallaxAmount}
        imageScale={imageScale}
        className={className}
        {...rest}
      />
    );
  }

  // Fallback Renderer for non-parallax images
  return <NextImage fill={fill} className={className} {...rest} />;
};

export default ParallaxImageWrapper;
