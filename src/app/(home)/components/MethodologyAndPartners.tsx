"use client";

import React from "react";
import Image from "next/image";
import styles from "./MethodologyAndPartners.module.css"; // CHANGED
import HoverableDraggable from "@/components/HoverableDraggable"; // CHANGED

// --- Animation & Helper Imports ---
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { useMediaQuery } from "@/utils/useMediaQuery"; // CHANGED: Import the new hook

// --- Swiper Imports (for desktop only) ---
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
  {
    step: 5,
    title: "Launch & Optimization",
    description:
      "Delivering final assets, launching the project, and ensuring all platforms are aligned. We also provide support, performance insights, and room for iteration.",
    color: "orange",
  },
];

interface MethodologyAndPartnersProps {
  logoPaths: string[];
}

// --- Animation Variants (Unchanged) ---
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};
const slideVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: easings.easeOut },
  }),
};
const partnersContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const logoVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "linear" } },
};

// Reusable card component to keep code DRY
const MethodologyCard = ({
  item,
  index,
}: {
  item: (typeof methodologySteps)[0];
  index: number;
}) => (
  <motion.div
    className={`${styles.card} ${styles[`card--${item.color}`]}`}
    variants={slideVariants}
    custom={index}
  >
    <p className={styles.cardDescription}>{item.description}</p>
    <div className={styles.cardStep}>
      Step {item.step}: <br />
      {item.title}
    </div>
  </motion.div>
);

const MethodologyAndPartners = ({ logoPaths }: MethodologyAndPartnersProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
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
    const filename = path.split("/").pop() || "logo";
    return filename.split(".")[0].replace(/-/g, " ");
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

          {isDesktop ? (
            <HoverableDraggable>
              <Swiper
                spaceBetween={20}
                slidesPerView={3.5}
                slidesOffsetBefore={48} // Corresponds to 3rem desktop padding
                slidesOffsetAfter={48} // Corresponds to 3rem desktop padding
                className={styles.methodologySwiper}
              >
                {methodologySteps.map((item, index) => (
                  <SwiperSlide key={item.step} className={styles.slide}>
                    <MethodologyCard item={item} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </HoverableDraggable>
          ) : (
            <div className={styles.methodologyGrid}>
              {methodologySteps.map((item, index) => (
                <MethodologyCard key={item.step} item={item} index={index} />
              ))}
            </div>
          )}
        </motion.div>

        {/* === START OF CORRECTION: RESTORED PARTNERS SECTION === */}
        <motion.div
          ref={partnersRef}
          className={styles.partnersContainer}
          initial="hidden"
          animate={arePartnersInView ? "visible" : "hidden"}
        >
          {/* 1. Add the new class directly to the h2 */}
          <motion.h2
            className={`${styles.sectionTitle} ${styles.titleWithSeparator}`}
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
