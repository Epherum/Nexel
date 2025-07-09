"use client";

import React, { useState, useLayoutEffect } from "react";
import styles from "./AboutImage.module.css";
import Image from "@/components/animation/ParallaxImage";
import { useMediaQuery } from "@/utils/useMediaQuery";

const AboutImage = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [stableHeight, setStableHeight] = useState(0);

  // Measure the window height once on mount to get a stable pixel value
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setStableHeight(window.innerHeight);
    }
  }, []);

  // Calculate the section's height in pixels based on our stable measurement.
  const getSectionHeight = () => {
    if (stableHeight === 0) {
      // Fallback for the initial server render before the effect has run.
      return isDesktop ? "100vh" : "60vh";
    }
    // Once we have the stable height, calculate the pixel value.
    const heightInPixels = isDesktop ? stableHeight : stableHeight * 0.6;
    return `${heightInPixels}px`;
  };

  return (
    <section
      className={styles.fullscreenSection}
      style={{ height: getSectionHeight() }}
    >
      <Image
        src={"/static/nexel/office.webp"}
        alt={
          "A modern, well-lit office interior with comfortable seating and plants."
        }
        fill
        sizes="100vw"
        priority
        className={styles.fullscreenImage}
      />
    </section>
  );
};

export default AboutImage;
