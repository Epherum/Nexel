"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion, type Variants } from "framer-motion"; // ✨ 1. Import the 'Variants' type
import { useMediaQuery } from "@/utils/useMediaQuery";
import styles from "./HeroMarquee.module.css";

const images = [7, 6, 5, 4, 3, 2, 1].map((num) => ({
  src: `/static/nexel/hero/${num}.webp`,
}));

// ✨ 2. Apply the 'Variants' type to the constant
const mobileMarqueeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

interface HeroMarqueeProps {
  isPreloading: boolean;
}

const HeroMarquee = ({ isPreloading }: HeroMarqueeProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRowRef = useRef<HTMLDivElement | null>(null);
  const marqueeTimeline = useRef<gsap.core.Timeline | null>(null);
  const hasAnimated = useRef(false);
  const prevIsPreloading = useRef(isPreloading);

  const startInfiniteScroll = useCallback((row: HTMLDivElement) => {
    const tl = gsap.timeline();
    const singleSetWidth = row.offsetWidth / 2;
    if (singleSetWidth === 0) return;
    tl.to(row, {
      x: `-=${singleSetWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const runSimpleEntranceAnimation = useCallback(() => {
    if (!wrapperRef.current || !imageRowRef.current) return;
    const row = imageRowRef.current;
    const yOffset = "30px";
    gsap.set(row, { paddingBottom: yOffset });
    marqueeTimeline.current = gsap.timeline();
    marqueeTimeline.current
      .to(wrapperRef.current, { opacity: 1, duration: 0.8, ease: "power3.out" })
      .from(
        row.children,
        {
          y: yOffset,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.6"
      );
    startInfiniteScroll(row);
  }, [startInfiniteScroll]);

  const runComplexEntranceAnimation = useCallback(() => {
    if (!wrapperRef.current || !imageRowRef.current) return;
    const row = imageRowRef.current;
    const imageContainers = Array.from(row.children) as HTMLDivElement[];
    const finalPositions = imageContainers.map((img) => img.offsetLeft);
    gsap.set(row, { height: row.getBoundingClientRect().height });
    gsap.set(imageContainers, {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      zIndex: (index: number) => images.length - 1 - index,
    });
    gsap.set(wrapperRef.current, { opacity: 1 });
    marqueeTimeline.current = gsap.timeline({
      onComplete: () => {
        gsap.set(imageContainers, { clearProps: "position,left,top,zIndex" });
        gsap.set(row, { clearProps: "height" });
        startInfiniteScroll(row);
      },
    });
    marqueeTimeline.current.to(imageContainers, {
      left: (index: number) => finalPositions[index],
      duration: 0.8,
      ease: "power3.out",
      stagger: { amount: 0.15 },
    });
    marqueeTimeline.current.to(
      imageContainers,
      { opacity: 1, duration: 0, stagger: { amount: 0.15 } },
      "<"
    );
  }, [startInfiniteScroll]);

  useEffect(() => {
    if (isPreloading || hasAnimated.current || isMobile === null) {
      prevIsPreloading.current = isPreloading;
      return;
    }

    if (isMobile) {
      hasAnimated.current = true;
    } else {
      hasAnimated.current = true;
      const wasPreloading = prevIsPreloading.current;
      if (wasPreloading) {
        runComplexEntranceAnimation();
      } else {
        const timer = setTimeout(() => runSimpleEntranceAnimation(), 50);
        return () => clearTimeout(timer);
      }
    }
  }, [
    isPreloading,
    isMobile,
    runComplexEntranceAnimation,
    runSimpleEntranceAnimation,
  ]);

  useEffect(() => {
    return () => {
      marqueeTimeline.current?.kill();
    };
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      className={styles.marqueeWrapper}
      variants={isMobile ? mobileMarqueeVariants : undefined}
      initial="hidden"
      animate={!isPreloading ? "visible" : "hidden"}
      onAnimationComplete={() => {
        if (isMobile && imageRowRef.current) {
          startInfiniteScroll(imageRowRef.current);
        }
      }}
    >
      <div ref={imageRowRef} className={styles.imageRow}>
        {images.map((item, index) => (
          <div key={`marquee-img-${index}`} className={styles.imageContainer}>
            <Image
              src={item.src}
              alt={`Marquee item ${7 - index}`}
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
              alt={`Showcase of a hero project ${index + 1}`} // Descriptive alt text is good practice
              fill
              priority
              sizes="(max-width: 768px) 50vw, 10vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroMarquee;
