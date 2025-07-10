"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import "./preloader.css";
import Image from "next/image";

gsap.registerPlugin(Flip);

const Preloader = () => {
  // Refs for the individual digit columns
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  // Ref for the main counter container (to fade it out)
  const counterContainerRef = useRef(null);
  // Ref for the background wipe element
  const heroBgRef = useRef(null);
  // Ref for the container of all images
  const imagesContainerRef = useRef(null);

  useEffect(() => {
    const images = Array.from(
      imagesContainerRef.current.querySelectorAll(".img")
    );

    // --- UTILITY FUNCTIONS ---
    const createCounterDigits = () => {
      // (This function remains exactly the same)
      const counter1 = counter1Ref.current;
      if (counter1) {
        const num0 = document.createElement("div");
        num0.className = "num";
        num0.textContent = "0";
        counter1.appendChild(num0);
        const num1 = document.createElement("div");
        num1.className = "num num1offset1";
        num1.textContent = "1";
        counter1.appendChild(num1);
      }
      const counter2 = counter2Ref.current;
      if (counter2) {
        for (let i = 0; i <= 10; i++) {
          const numDiv = document.createElement("div");
          numDiv.className = i === 1 ? "num num1offset2" : "num";
          numDiv.textContent = i === 10 ? "0" : i;
          counter2.appendChild(numDiv);
        }
      }
      const counter3 = counter3Ref.current;
      if (counter3) {
        for (let i = 0; i < 30; i++) {
          const numDiv = document.createElement("div");
          numDiv.className = "num";
          numDiv.textContent = i % 10;
          counter3.appendChild(numDiv);
        }
        const finalNum = document.createElement("div");
        finalNum.className = "num";
        finalNum.textContent = "0";
        counter3.appendChild(finalNum);
      }
    };

    const animateCounter = (counter, duration, delay = 0) => {
      // (This function remains exactly the same)
      if (!counter || !counter.querySelector(".num")) return;
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;
      gsap.to(counter, {
        y: -totalDistance,
        duration,
        delay,
        ease: "power2.inOut",
      });
    };

    // --- MAIN ANIMATION TIMELINE ---
    // --- MAIN ANIMATION TIMELINE ---
    const masterTimeline = () => {
      // CHANGED: Delay increased to 0.5s
      const tl = gsap.timeline({
        delay: 0.5,
        onComplete: () => console.log("Preloader Finished"),
      });

      // 1. Animate the background reveal
      tl.to(heroBgRef.current, {
        scaleY: "100%",
        duration: 1.5,
        ease: "power2.inOut",
      });

      // 2. Animate images scaling UP and fading IN.
      // The CSS now sets them to scale: 0 and opacity: 0 initially.
      tl.to(
        images,
        {
          scale: 1,
          opacity: 1, // Animate opacity to 1
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "<"
      );

      // 3. NEW: Animate counter fading IN
      tl.to(
        counterContainerRef.current,
        {
          opacity: 1,
          duration: 0.5, // Quick fade-in
          ease: "power2.out",
        },
        "<"
      );

      // 4. Start the number counting animation
      tl.add(() => {
        animateCounter(counter3Ref.current, 2.5);
        animateCounter(counter2Ref.current, 3.0);
        animateCounter(counter1Ref.current, 2, 1.5);
      }, "<+0.1");

      // 5. The Final Collapse Animation (Unchanged logic)
      tl.addLabel("collapse", "+=1.5");
      tl.to(
        counterContainerRef.current,
        { opacity: 0, duration: 0.75, ease: "power2.inOut" },
        "collapse"
      );
      tl.add(() => {
        const state = Flip.getState(images);
        images.forEach((img) => img.classList.add("animate-out"));
        Flip.from(state, {
          duration: 1,
          stagger: 0.07,
          ease: "power3.inOut",
          z: true,
        });
      }, "collapse");
    };

    createCounterDigits();
    masterTimeline();
  }, []);

  return (
    // The main container
    <section className="hero">
      {/* 1. The background wipe element is now separate */}
      <div ref={heroBgRef} className="hero-bg"></div>

      {/* 2. The counter is a sibling */}
      <div ref={counterContainerRef} className="counter">
        <div ref={counter1Ref} className="counter-1 digit"></div>
        <div ref={counter2Ref} className="counter-2 digit"></div>
        <div ref={counter3Ref} className="counter-3 digit"></div>
      </div>

      {/* 3. The images container is also a sibling */}
      <div ref={imagesContainerRef} className="images-container">
        {[...Array(2)]
          .flatMap(() => [1, 2, 3, 4, 5, 6, 7])
          .map((num, index) => (
            <div className="img" key={`${num}-${index}`}>
              <Image
                src={`/static/nexel/hero/${num}.webp`}
                width={200}
                height={140}
                alt="image"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Preloader;
