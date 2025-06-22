// src/app/(home)/components/MethodologyAndPartners.tsx
"use client";

import React from "react";
import Image from "next/image";
import styles from "./MethodologyAndPartners.module.scss";

// --- Animation Imports ---
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Swiper Imports ---
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const methodologySteps = [
  {
    step: 1,
    title: "Discovery & Alignment",
    description:
      "Getting to know the team, business, available resources, project objectives, and expectations for the implementation plan.",
    color: "purple",
  },
  {
    step: 2,
    title: "Strategy & Positioning",
    description:
      "Defining the brand's unique value, market positioning, target audience, and tone of voice to guide all creative and marketing efforts.",
    color: "green",
  },
  {
    step: 3,
    title: "Creative Direction",
    description:
      "Building the brand's visual identity and establishing key design elements for use across web, social media, and marketing channels.",
    color: "teal",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Developing digital assets, from websites to interactive content, aligning them with the brand strategy and visual guidelines.",
    color: "blue",
  },
];

// NEW: Define the type for the props this component will receive
interface MethodologyAndPartnersProps {
  logoPaths: string[];
}

// --- Animation Variants ---

// For word-by-word reveal (titles)
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

// For Swiper slides (left-to-right fade-in)
const sliderContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const slideVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    // `i` will be the index of the slide
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1, // Create a cascading delay
      duration: 0.8,
      ease: easings.easeOut,
    },
  }),
};

// For Partners logos (cascading opacity)
const partnersContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const logoVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "linear" } },
};

const MethodologyAndPartners = ({ logoPaths }: MethodologyAndPartnersProps) => {
  // --- Refs and Triggers ---
  const methodologyRef = useRef(null);
  const isMethodologyInView = useInView(methodologyRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const partnersRef = useRef(null);
  const arePartnersInView = useInView(partnersRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const getLogoNameFromPath = (path: string) => {
    try {
      // Example: "/static/nexel/logos/some-company-logo.svg"
      const filename = path.split("/").pop() || "logo"; // -> "some-company-logo.svg"
      const name = filename.split(".")[0]; // -> "some-company-logo"
      return name.replace(/-/g, " "); // -> "some company logo"
    } catch {
      return "Partner logo"; // Fallback
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.whiteContainer}>
        {/* --- Methodology Section --- */}
        <motion.div
          ref={methodologyRef}
          className={styles.methodologyContainer}
          initial="hidden"
          animate={isMethodologyInView ? "visible" : "hidden"}
        >
          <motion.h2
            className={styles.sectionTitle}
            variants={wordRevealContainer}
          >
            {"How we design and develop a Business strategy & methodology"
              .split(" ")
              .map((word, index) => (
                <AnimatedWord key={index} variants={wordVariants}>
                  {word}
                  {index < 10 ? "\u00A0" : ""}
                </AnimatedWord>
              ))}
          </motion.h2>
          <div className={styles.sliderWrapper}>
            {/* The Swiper component is now clean. It does not need motion props. */}
            <Swiper
              spaceBetween={20}
              slidesPerView={3.5}
              className="methodology-swiper"
            >
              {/* We need the index from the map function */}
              {methodologySteps.map((item, index) => (
                <SwiperSlide key={item.step}>
                  <motion.div
                    className={`${styles.card} ${
                      styles[`card--${item.color}`]
                    }`}
                    variants={slideVariants}
                    // Pass the index as a custom prop to the variants
                    custom={index}
                  >
                    <p className={styles.cardDescription}>{item.description}</p>
                    <div className={styles.cardStep}>
                      Step {item.step}: <br />
                      {item.title}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
        {/* --- Partners Section --- */}
        <motion.div
          ref={partnersRef}
          className={styles.partnersContainer}
          initial="hidden"
          animate={arePartnersInView ? "visible" : "hidden"}
        >
          <motion.h2
            className={`${styles.sectionTitle} ${styles.borderBottom}`}
            variants={wordRevealContainer}
          >
            {"Partners and friends".split(" ").map((word, index) => (
              <AnimatedWord key={index} variants={wordVariants}>
                {word}
                {index < 2 ? "\u00A0" : ""}
              </AnimatedWord>
            ))}
          </motion.h2>
          <motion.div
            className={styles.partnersGrid}
            variants={partnersContainerVariants}
          >
            {logoPaths.map((logoPath) => (
              <motion.div
                key={logoPath}
                className={styles.logoWrapper}
                variants={logoVariants}
              >
                <Image
                  src={logoPath}
                  alt={getLogoNameFromPath(logoPath)}
                  width={90}
                  height={40}
                  className={styles.partnerLogo}
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyAndPartners;
