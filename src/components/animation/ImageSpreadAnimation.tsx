// src/components/animation/StaticImageRow.js
"use client";

// 1. Import useLayoutEffect alongside the other hooks
import React, { useRef, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./ImageSpreadAnimation.module.css";

const images = [1, 2, 3, 4, 5, 6, 7].map((num) => ({
  src: `/static/nexel/hero/${num}.webp`,
}));

interface Position {
  left: number;
  top: number;
}

const StaticImageRow = () => {
  const imageRowRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const finalPositions = useRef<Position[]>([]);
  const marqueeTimeline = useRef<gsap.core.Timeline | null>(null);

  // 2. Change useEffect to useLayoutEffect
  useLayoutEffect(() => {
    // This code now runs BEFORE the browser paints, preventing the flash.
    const row = imageRowRef.current;
    if (!row) return;

    const imageContainers = gsap.utils.toArray(row.children) as HTMLElement[];

    finalPositions.current = imageContainers.map((img) => ({
      left: img.offsetLeft,
      top: img.offsetTop,
    }));

    const rowBounds = row.getBoundingClientRect();
    gsap.set(row, { height: rowBounds.height });

    gsap.set(imageContainers, {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      // The descending z-index logic we fixed earlier
      zIndex: (index, target, targets) => targets.length - index,
    });
  }, []);

  // The rest of your component remains the same
  const handleAnimateImages = useCallback(() => {
    if (hasAnimated.current || !imageRowRef.current) return;
    hasAnimated.current = true;

    const imageContainers = gsap.utils.toArray(
      imageRowRef.current.children
    ) as HTMLElement[];

    // Using the original images array length to get the width of one set
    const singleSetWidth =
      finalPositions.current[images.length].left -
      finalPositions.current[0].left;

    marqueeTimeline.current = gsap.timeline();

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

    marqueeTimeline.current.to(
      imageRowRef.current,
      {
        x: -singleSetWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      },
      "+=0.5"
    );
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={handleAnimateImages} className={styles.triggerButton}>
        Start Marquee
      </button>

      <div className={styles.marqueeWrapper}>
        <div ref={imageRowRef} className={styles.imageRow}>
          {images.map((item, index) => (
            <div key={`static-img-${index}`} className={styles.imageContainer}>
              <Image
                src={item.src}
                alt={`Static item ${index + 1}`}
                fill
                className={styles.image}
                quality={90}
              />
            </div>
          ))}
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
    </div>
  );
};

export default StaticImageRow;
