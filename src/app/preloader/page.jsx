"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import styles from "./preloader.module.css";
import Loader from "@/components/animation/Loader";

gsap.registerPlugin(Flip);

const imageData = [...Array(2)].flatMap(() => [1, 2, 3, 4, 5, 6, 7]);
const totalImages = imageData.length;

const Preloader = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const counterContainerRef = useRef(null);
  const heroBgRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const truePreloaderRef = useRef(null);
  const loadedImageCount = useRef(0);
  const areImagesLoaded = useRef(false);
  const isMinTimePassed = useRef(false);
  const startAnimationFunc = useRef(null);

  useEffect(() => {
    // This function contains the corrected premium animation timeline
    const runMasterTimeline = () => {
      const images = Array.from(
        imagesContainerRef.current.querySelectorAll(`.${styles.img}`)
      );

      const createCounterDigits = () => {
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
            numDiv.textContent = i === 10 ? "0" : i;
            counter2.appendChild(numDiv);
          }
        }
        const counter3 = counter3Ref.current;
        if (counter3) {
          for (let i = 0; i < 30; i++) {
            const numDiv = document.createElement("div");
            numDiv.className = styles.num;
            numDiv.textContent = i % 10;
            counter3.appendChild(numDiv);
          }
          const finalNum = document.createElement("div");
          finalNum.className = styles.num;
          finalNum.textContent = "0";
          counter3.appendChild(finalNum);
        }
      };

      const animateCounter = (counter, duration, delay = 0) => {
        if (!counter || !counter.querySelector(`.${styles.num}`)) return;
        const numHeight = counter.querySelector(`.${styles.num}`).clientHeight;
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

      const masterTimeline = gsap.timeline({
        onComplete: () => console.log("Premium Preloader Animation Finished"),
      });

      // --- CORRECTED ANIMATION SEQUENCE ---

      // 1. Counter fades in first, starting at t=0.
      masterTimeline.to(counterContainerRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      // 2. Number scrolling starts 0.1s after the counter FADE-IN starts. This links them together correctly.
      masterTimeline.add(() => {
        animateCounter(counter3Ref.current, 2.5);
        animateCounter(counter2Ref.current, 3.0);
        animateCounter(counter1Ref.current, 2, 1.5);
      }, "<+0.1");

      // 3. Background wipe starts 0.1s after the counter FADE-IN starts (at t=0.1s).
      masterTimeline.to(
        heroBgRef.current,
        { scaleY: "100%", duration: 3, ease: "power2.inOut" },
        "<+0.1"
      );

      // 4. Images reveal 0.1s after the BACKGROUND WIPE starts (at t=0.2s).
      masterTimeline.set(images, { opacity: 1 }, "<+0.1");
      masterTimeline.to(
        images,
        { scale: 1, duration: 1, stagger: 0.15, ease: "power2.out" },
        "<"
      );

      // 5. Final collapse animation (logic remains the same).
      masterTimeline.addLabel("collapse", "+=0.3");
      masterTimeline.to(
        counterContainerRef.current,
        { opacity: 0, duration: 0.75, ease: "power2.inOut" },
        "collapse"
      );
      masterTimeline.add(() => {
        const state = Flip.getState(images);
        images.forEach((img) => img.classList.add(styles.animateOut));
        Flip.from(state, {
          duration: 1,
          stagger: 0.07,
          ease: "power3.inOut",
          z: true,
        });
      }, "collapse");
    };

    const startAnimation = () => {
      const exitTimeline = gsap.timeline();
      exitTimeline.to(truePreloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (truePreloaderRef.current) {
            truePreloaderRef.current.style.display = "none";
          }
        },
      });
      // This pause remains correct.
      exitTimeline.call(runMasterTimeline, [], "+=0.1");
    };

    startAnimationFunc.current = startAnimation;

    // This logic remains the same (minimum 1s time + asset loading)
    setTimeout(() => {
      isMinTimePassed.current = true;
      if (areImagesLoaded.current) {
        startAnimationFunc.current?.();
      }
    }, 1000);
  }, []);

  const handleImageLoad = () => {
    loadedImageCount.current += 1;
    if (loadedImageCount.current >= totalImages) {
      areImagesLoaded.current = true;
      if (isMinTimePassed.current) {
        startAnimationFunc.current?.();
      }
    }
  };

  return (
    <>
      <div ref={truePreloaderRef} className={styles.truePreloader}>
        <Loader />
      </div>

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
                onLoad={handleImageLoad}
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Preloader;
