"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import styles from "./preloader.module.css";
import Loader from "@/components/animation/Loader";
import { useMediaQuery } from "@/utils/useMediaQuery"; // ✨ 1. Import your hook

gsap.registerPlugin(Flip);

const imageData = [...Array(2)].flatMap(() => [1, 2, 3, 4, 5, 6, 7]);
const totalImages = imageData.length;

type PreloaderProps = {
  onComplete: () => void;
};

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  // ✨ 2. Use the hook to detect viewport. Breakpoint can be adjusted.
  const isMobile = useMediaQuery("(max-width: 768px)");

  // --- Refs ---
  const counter1Ref = useRef<HTMLDivElement>(null);
  const counter2Ref = useRef<HTMLDivElement>(null);
  const counter3Ref = useRef<HTMLDivElement>(null);
  const counterContainerRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const truePreloaderRef = useRef<HTMLDivElement>(null); // The initial spinner/loader

  // --- State Refs for controlling animation flow ---
  const loadedImageCount = useRef(0);
  const areImagesLoaded = useRef(false);
  const isMinTimePassed = useRef(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null); // A single ref for the active timeline

  useEffect(() => {
    // On mount, when the preloader is visible, disable scrolling.
    document.body.style.overflow = "hidden";

    // On unmount (when the preloader is gone), restore scrolling.
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // ✨ 3. Renamed the original animation logic to be specific to desktop
  const runDesktopAnimation = useCallback(() => {
    if (!imagesContainerRef.current) return;
    const images = Array.from(
      imagesContainerRef.current.querySelectorAll(`.${styles.img}`)
    ) as HTMLElement[];

    const createCounterDigits = () => {
      // (This function remains unchanged)
      const counter1 = counter1Ref.current;
      if (counter1) {
        const num0 = document.createElement("div");
        num0.className = styles.num;
        num0.textContent = "0";
        counter1.appendChild(num0);
        const num1 = document.createElement("div");
        num1.className = `${styles.num} ${styles.num1offset1}`;
        num1.textContent = "1";
        counter1.appendChild(num1);
      }
      const counter2 = counter2Ref.current;
      if (counter2) {
        for (let i = 0; i <= 10; i++) {
          const numDiv = document.createElement("div");
          numDiv.className =
            i === 1 ? `${styles.num} ${styles.num1offset2}` : styles.num;
          numDiv.textContent = i === 10 ? "0" : i.toString();
          counter2.appendChild(numDiv);
        }
      }
      const counter3 = counter3Ref.current;
      if (counter3) {
        for (let i = 0; i < 30; i++) {
          const numDiv = document.createElement("div");
          numDiv.className = styles.num;
          numDiv.textContent = (i % 10).toString();
          counter3.appendChild(numDiv);
        }
        const finalNum = document.createElement("div");
        finalNum.className = styles.num;
        finalNum.textContent = "0";
        counter3.appendChild(finalNum);
      }
    };

    const animateCounter = (
      counter: HTMLDivElement | null,
      duration: number,
      delay = 0
    ) => {
      if (!counter || !counter.querySelector(`.${styles.num}`)) return;
      const numHeight = (counter.querySelector(`.${styles.num}`) as HTMLElement)
        .clientHeight;
      const totalDistance =
        (counter.querySelectorAll(`.${styles.num}`).length - 1) * numHeight;
      gsap.to(counter, {
        y: -totalDistance,
        duration,
        delay,
        ease: "power2.inOut",
      });
    };

    createCounterDigits();
    const tl = gsap.timeline(); // Use a local timeline
    timelineRef.current = tl;

    // --- The desktop animation sequence ---
    tl.to(counterContainerRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    tl.add(() => {
      animateCounter(counter3Ref.current, 2.5);
      animateCounter(counter2Ref.current, 3.0);
      animateCounter(counter1Ref.current, 2, 1.5);
    }, "<+0.1");
    tl.to(
      heroBgRef.current,
      { scaleY: "100%", duration: 3, ease: "power2.inOut" },
      "<+0.1"
    );
    tl.set(images, { opacity: 1 }, "<+0.1");
    tl.to(
      images,
      { scale: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
      "<"
    );
    tl.addLabel("collapse", "+=0.3");
    tl.to(
      counterContainerRef.current,
      { opacity: 0, duration: 0.75, ease: "power2.inOut" },
      "collapse"
    );
    tl.add(() => {
      const state = Flip.getState(images as gsap.DOMTarget);
      images.forEach((img) => img.classList.add(styles.animateOut));
      Flip.from(state, {
        duration: 1,
        stagger: 0.07,
        ease: "power3.inOut",
        // z: true, // Remove or set to a number if needed
        onComplete: onComplete, // Final hand-off for desktop
      });
    }, "collapse");
  }, [onComplete]);

  // ✨ 4. The main animation "router" function
  const startAnimation = useCallback(() => {
    // Guard clause: Wait until the media query has resolved to true or false
    if (isMobile === null) {
      return;
    }

    // This timeline handles fading out the initial loader. It's common for both.
    const exitTimeline = gsap.timeline();
    timelineRef.current = exitTimeline;

    exitTimeline.to(truePreloaderRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (truePreloaderRef.current) {
          (truePreloaderRef.current as HTMLDivElement).style.display = "none";
        }
      },
    });

    // --- THE LOGIC FORK ---
    if (isMobile) {
      // On mobile, after the loader fades, we are done. Call onComplete.
      exitTimeline.call(onComplete, [], "+=0.1");
    } else {
      // On desktop, after the loader fades, start the complex animation.
      exitTimeline.call(runDesktopAnimation, [], "+=0.1");
    }
  }, [isMobile, onComplete, runDesktopAnimation]);

  // The image loading logic. On mobile, this will never fully complete,
  // which is fine because the animation is triggered by the timer instead.
  const handleImageLoad = useCallback(() => {
    loadedImageCount.current += 1;
    if (loadedImageCount.current >= totalImages) {
      areImagesLoaded.current = true;
      if (isMinTimePassed.current) startAnimation();
    }
  }, [startAnimation]);

  // The minimum time logic. This applies to both mobile and desktop.
  useEffect(() => {
    const timer = setTimeout(() => {
      isMinTimePassed.current = true;
      // For desktop, it will only run if images are also loaded.
      // For mobile, areImagesLoaded will be false, so this call to startAnimation is crucial.
      if (areImagesLoaded.current || isMobile) {
        startAnimation();
      }
    }, 1000); // 1-second minimum loader time

    return () => {
      clearTimeout(timer);
      timelineRef.current?.kill(); // Kill any active timeline on unmount
    };
  }, [startAnimation, isMobile]);

  // ✨ 5. The final JSX with conditional rendering
  return (
    <>
      {/* This simple loader is visible on both mobile and desktop initially */}
      <div ref={truePreloaderRef} className={styles.truePreloader}>
        <Loader />
      </div>

      {/* --- DESKTOP-ONLY PRELOADER --- */}
      {/* This entire section is excluded from the DOM on mobile */}
      {isMobile === false && (
        <section className={styles.hero}>
          <div ref={heroBgRef} className={styles.heroBg}></div>
          <div ref={counterContainerRef} className={styles.counter}>
            <div
              ref={counter1Ref}
              className={`${styles.counter1} ${styles.digit}`}
            ></div>
            <div
              ref={counter2Ref}
              className={`${styles.counter2} ${styles.digit}`}
            ></div>
            <div
              ref={counter3Ref}
              className={`${styles.counter3} ${styles.digit}`}
            ></div>
          </div>
          <div ref={imagesContainerRef} className={styles.imagesContainer}>
            {imageData.map((num, index) => (
              <div className={styles.img} key={`${num}-${index}`}>
                <Image
                  src={`/static/nexel/hero/${num}.webp`}
                  alt="image"
                  fill
                  style={{ objectFit: "cover" }}
                  onLoad={handleImageLoad} // This will only be called on desktop
                  priority={index < 5}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Preloader;
