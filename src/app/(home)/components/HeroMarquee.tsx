// src/app/(home)/components/HeroMarquee.js
"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./HeroMarquee.module.css"; // We will create this file next

const images = [1, 2, 3, 4, 5, 6, 7].map((num) => ({
  src: `/static/nexel/hero/${num}.webp`,
}));

// The component now accepts the `isPreloading` prop
const HeroMarquee = ({ isPreloading }) => {
  const imageRowRef = useRef(null);
  const hasAnimated = useRef(false);
  const finalPositions = useRef([]);
  const marqueeTimeline = useRef(null);

  // This is the animation logic, now named to be clearer
  const runEntranceAnimation = useCallback(() => {
    // Exit if the animation has already run or if the ref isn't ready
    if (hasAnimated.current || !imageRowRef.current) return;
    hasAnimated.current = true;

    const imageContainers = gsap.utils.toArray(imageRowRef.current.children);
    const row = imageRowRef.current;

    marqueeTimeline.current = gsap.timeline();

    // Step 1: Spread ALL images out into the double-wide row.
    marqueeTimeline.current.to(imageContainers, {
      left: (index) => finalPositions.current[index].left,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: {
        amount: 0.2,
        from: "start",
      },
    });

    // Step 2: Calculate the correct width of ONLY the FIRST set of images.
    const singleSetWidth = finalPositions.current[images.length].left;

    // Step 3: Animate the marquee.
    marqueeTimeline.current.to(
      row,
      {
        x: -singleSetWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      },
      "-=0.3"
    );
  }, []);

  // First useEffect: Sets up the initial state ONCE on mount
  useEffect(() => {
    const row = imageRowRef.current;
    if (!row) return;

    const imageContainers = gsap.utils.toArray(row.children);

    // Measure the final layout
    finalPositions.current = imageContainers.map((img) => ({
      left: img.offsetLeft,
      top: img.offsetTop,
    }));

    // Set the initial stacked state
    gsap.set(row, { height: row.getBoundingClientRect().height });
    gsap.set(imageContainers, {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
    });
  }, []);

  // Second useEffect: The NEW TRIGGER.
  // This watches the isPreloading prop.
  useEffect(() => {
    // When isPreloading becomes false, run the animation.
    if (!isPreloading) {
      runEntranceAnimation();
    }
  }, [isPreloading, runEntranceAnimation]);

  return (
    // The button is now GONE.
    <div className={styles.marqueeWrapper}>
      <div ref={imageRowRef} className={styles.imageRow}>
        {/* First set of images */}
        {images.map((item, index) => (
          <div key={`marquee-img-${index}`} className={styles.imageContainer}>
            <Image
              src={item.src}
              alt={`Marquee item ${index + 1}`}
              fill
              className={styles.image}
              quality={90}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((item, index) => (
          <div
            key={`duplicate-img-${index}`}
            className={styles.imageContainer}
            aria-hidden="true"
          >
            <Image
              src={item.src}
              alt=""
              fill
              className={styles.image}
              quality={90}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMarquee;
