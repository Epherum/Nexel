// src/app/about/components/TeamSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import styles from "./TeamSection.module.css";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Data (Unchanged) ---
const teamMembers = [
  {
    name: "Mira Tlili",
    role: "Lead UX/UI Designer",
    image: "/static/nexel/team/emira2.png",
  },
  {
    name: "Haroun Dardour",
    role: "Art Director",
    image: "/static/nexel/team/haroun.png",
  },
  {
    name: "Wassim Fekih",
    role: "Full-Stack Developer",
    image: "/static/nexel/team/wassim.png",
  },
];

// --- Animation Variants (Unchanged) ---
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 1,
      ease: easings.easeOut,
    },
  }),
};

const TeamSection = () => {
  const headlineRef = useRef(null);
  const isHeadlineInView = useInView(headlineRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const gridRef = useRef(null); // Changed from sliderRef
  const isGridInView = useInView(gridRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, {
    margin: "0px 0px -150px 0px",
    once: true,
  });

  const headlineText = "Creative minds. United with purpose.";
  const ctaText = "Bring your ideas to life and create cool projects with us.";

  return (
    <section className={styles.teamSection}>
      <motion.h2
        ref={headlineRef}
        className={styles.headline}
        variants={wordRevealContainer}
        initial="hidden"
        animate={isHeadlineInView ? "visible" : "hidden"}
      >
        {headlineText.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word === "purpose." ? (
              <span className={styles.highlight}>
                <AnimatedWord variants={wordVariants}>purpose.</AnimatedWord>
              </span>
            ) : (
              <AnimatedWord variants={wordVariants}>
                {word}
                {index < headlineText.split(" ").length - 1 ? "\u00A0" : ""}
              </AnimatedWord>
            )}
          </React.Fragment>
        ))}
      </motion.h2>

      {/* REPLACED SWIPER WITH A SIMPLE GRID CONTAINER */}
      <motion.div
        ref={gridRef}
        className={styles.teamGrid} // New class name
        variants={wordRevealContainer} // Re-using variants for staggered animation
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={styles.teamCard}
            variants={cardVariants}
            custom={index}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                width={400}
                height={500}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.footer
        ref={footerRef}
        className={styles.contactCta}
        variants={wordRevealContainer}
        initial="hidden"
        animate={isFooterInView ? "visible" : "hidden"}
      >
        <p className={styles.ctaLabel}>
          <AnimatedWord variants={wordVariants}>
            Drop{"\u00A0"}us{"\u00A0"}a{"\u00A0"}line
          </AnimatedWord>
        </p>
        <p className={styles.ctaText}>
          {ctaText.split(" ").map((word, index) => (
            <AnimatedWord key={index} variants={wordVariants}>
              {word}
              {index < ctaText.split(" ").length - 1 ? "\u00A0" : ""}
            </AnimatedWord>
          ))}
        </p>
      </motion.footer>
    </section>
  );
};

export default TeamSection;
