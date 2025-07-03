//src// src/app/ProjectsTest/book-app/page.tsx
"use client";

import React, { useRef, useState } from "react"; // Import useState
import { motion, useInView, Variants } from "framer-motion";
import Image from "@/components/animation/ParallaxImage";

import styles from "./book-app.module.css";
import Footer from "@/components/layout/Footer";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { ReactLenis, useLenis } from "lenis/react";

// --- Local Image Imports ---
import img1 from "/public/static/book-app/1.webp";
import img2 from "/public/static/book-app/2.webp";
import img3 from "/public/static/book-app/3.webp";
import img4 from "/public/static/book-app/4.webp";
import img5 from "/public/static/book-app/5.webp";
import img6 from "/public/static/book-app/6.webp";
// NOTE: Using img5 as the alternate image for the toggle. Replace if you have a different one.

// --- Local Text Data (Unchanged) ---
const heroHeadlineLine1 = "More than a bookshelf";
const heroHeadlineLine2Start = "a home for";
const heroHeadlineHighlight = "every story.";
const textSection1 = {
  title: "Organizing books should feel as delightful as reading them.",
  subtitle:
    "We designed the app to be more than just a tool. It’s a quiet companion for readers, a thoughtfully crafted space where stories are stored, remembered, and revisited with ease.",
};
const textSection2 = {
  title: "Reading is personal.",
  subtitle:
    "This app keeps it that way. A simple design to help you log, organize, and come back to the stories that stick with you.",
};
const textSection3 = {
  title: "Crafted for clarity, designed for delight.",
  subtitle:
    "Every interaction was considered to reduce friction, making the digital reading experience intuitive and focused.",
};

// --- Animation Variants (Unchanged) ---
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

// --- AnimatedTextSection Component (Unchanged) ---
const AnimatedTextSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -100px 0px",
    once: true,
  });
  return (
    <motion.section
      ref={sectionRef}
      className={styles.textSection}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 className={styles.textHeadline} variants={wordRevealContainer}>
        {title.split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {"\u00A0"}
          </AnimatedWord>
        ))}
      </motion.h2>
      <motion.p
        className={styles.textDescription}
        variants={wordRevealContainer}
      >
        {subtitle.split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {"\u00A0"}
          </AnimatedWord>
        ))}
      </motion.p>
    </motion.section>
  );
};

export default function BookAppPage() {
  // State for toggling the 4th image
  const [isImg4Toggled, setIsImg4Toggled] = useState(false);

  const handleImageToggle = () => {
    setIsImg4Toggled((prevState) => !prevState);
  };

  return (
    <ReactLenis
      root
      options={{ smoothWheel: true, lerp: 0.06, wheelMultiplier: 1.3 }}
    >
      <header className={styles.hero}>
        <motion.h1
          className={styles.heroHeadline}
          variants={wordRevealContainer}
          initial="hidden"
          animate="visible"
        >
          {heroHeadlineLine1.split(" ").map((word, index) => (
            <AnimatedWord key={`line1-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}{" "}
          <br />
          {heroHeadlineLine2Start.split(" ").map((word, index) => (
            <AnimatedWord key={`line2-${index}`} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
          <span className={styles.highlight}>
            <AnimatedWord variants={wordVariants}>
              {heroHeadlineHighlight}
            </AnimatedWord>
          </span>
        </motion.h1>
        {/* The hero image container has been removed */}
      </header>

      <main className={styles.showcaseWrapper}>
        <section className={styles.paddedImageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={img1}
              alt="Book app UI detail"
              data-scroll
              data-scroll-speed="-0.1"
            />
          </div>
        </section>
        <section className={styles.paddedImageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={img2}
              alt="Book app UI detail"
              data-scroll
              data-scroll-speed="-0.1"
            />
          </div>
        </section>

        <AnimatedTextSection
          title={textSection1.title}
          subtitle={textSection1.subtitle}
        />

        <section className={styles.fullWidthImageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={img3}
              alt="Multiple screens of the book app"
              data-scroll
              data-scroll-speed="-0.1"
            />
          </div>
        </section>

        {/* --- INTERACTIVE IMAGE SECTION --- */}
        <section className={styles.paddedImageSection}>
          <div
            className={`${styles.imageContainer} ${styles.clickable}`}
            onClick={handleImageToggle}
          >
            <Image
              src={img4}
              alt="Book app UI detail - default view"
              data-scroll
              data-scroll-speed="-0.1"
              className={!isImg4Toggled ? styles.visible : styles.hidden}
            />
            <Image
              src={img5} // The alternate image
              alt="Book app UI detail - alternate view"
              data-scroll
              data-scroll-speed="-0.1"
              className={isImg4Toggled ? styles.visible : styles.hidden}
            />
          </div>
        </section>

        <AnimatedTextSection
          title={textSection2.title}
          subtitle={textSection2.subtitle}
        />

        <section className={styles.fullWidthImageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={img6}
              alt="Close up of app UI elements"
              data-scroll
              data-scroll-speed="-0.1"
            />
          </div>
        </section>

        <AnimatedTextSection
          title={textSection3.title}
          subtitle={textSection3.subtitle}
        />
      </main>

      <Footer />
    </ReactLenis>
  );
}
