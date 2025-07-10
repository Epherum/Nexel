"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./HeroMarquee.module.css";

const images = [7, 6, 5, 4, 3, 2, 1].map((num) => ({
  src: `/static/nexel/hero/${num}.webp`,
}));

interface HeroMarqueeProps {
  isPreloading: boolean;
}

const HeroMarquee = ({ isPreloading }: HeroMarqueeProps) => {
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
      {
        opacity: 1,
        duration: 0,
        stagger: { amount: 0.15 },
      },
      "<"
    );
  }, [startInfiniteScroll]);

  useEffect(() => {
    if (isPreloading || hasAnimated.current) {
      prevIsPreloading.current = isPreloading;
      return;
    }

    hasAnimated.current = true;
    const wasPreloading = prevIsPreloading.current;

    if (wasPreloading) {
      runComplexEntranceAnimation();
    } else {
      const timer = setTimeout(() => runSimpleEntranceAnimation(), 50);
      return () => clearTimeout(timer);
    }
  }, [isPreloading, runComplexEntranceAnimation, runSimpleEntranceAnimation]);

  // ✅ FIXED THE TS ERROR HERE
  useEffect(() => {
    // The cleanup function for the component unmount
    return () => {
      marqueeTimeline.current?.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.marqueeWrapper}>
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
