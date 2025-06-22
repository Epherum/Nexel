// src/app/(home)/components/ProjectsSection.tsx
"use client";

import React from "react";
import styles from "./ProjectsSection.module.scss";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import ProjectCard from "@/components/animation/ProjectCard";
import { easings } from "@/utils/easings";

// --- Data & Variants are unchanged ---
const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};
const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: easings.easeOut, delay: 0.3 },
  },
};

const ProjectsSection = () => {
  // --- THE FIX: Create two separate triggers ---
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    margin: "0px 0px -150px 0px", // Trigger for the main title
    once: true,
  });

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    margin: "0px 0px -200px 0px", // A separate trigger for the left column content
    once: true,
  });

  const subHeaderText = "SUCCESS STORIES";
  const descriptionText =
    "Every case study represents a challenge met, a standard raised, and a client empowered. See how we turn vision into results that speak for themselves.";

  return (
    // This is now a regular <section>, not a motion component.
    <section className={styles.projectsSection}>
      {/* Main Title now has its OWN trigger */}
      <motion.h2
        ref={titleRef}
        className={styles.mainTitle}
        variants={wordRevealContainer}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
      >
        {"Projects Built to Last".split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={wordVariants}>
            {word}
            {index < 3 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </motion.h2>

      <div className={styles.contentWrapper}>
        {/* We attach the second ref to the left column */}
        <div ref={contentRef} className={styles.leftColumn}>
          {/* This content is now triggered by isContentInView */}
          <motion.div
            className={styles.stickyContent}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
          >
            <motion.div variants={wordRevealContainer}>
              <p className={styles.subHeader}>
                {subHeaderText.split(" ").map((word, index) => (
                  <AnimatedWord key={index} variants={wordVariants}>
                    {word}
                    {index < subHeaderText.split(" ").length - 1
                      ? "\u00A0"
                      : ""}
                  </AnimatedWord>
                ))}
              </p>
              <motion.div className={styles.line} variants={lineVariants} />
            </motion.div>

            <motion.h3
              className={styles.headline}
              variants={wordRevealContainer}
            >
              <span className={styles.highlight}>
                <AnimatedWord variants={wordVariants}>Built</AnimatedWord>
              </span>
              <AnimatedWord variants={wordVariants}>{"\u00A0"}to</AnimatedWord>
              <AnimatedWord variants={wordVariants}>
                {"\u00A0"}Inspire
              </AnimatedWord>
            </motion.h3>

            <motion.p
              className={styles.description}
              variants={wordRevealContainer}
            >
              {descriptionText.split(" ").map((word, index) => (
                <AnimatedWord key={index} variants={wordVariants}>
                  {word}
                  {index < descriptionText.split(" ").length - 1
                    ? "\u00A0"
                    : ""}
                </AnimatedWord>
              ))}
            </motion.p>
          </motion.div>

          {/* The button is also triggered by isContentInView */}
          <motion.div
            variants={wordRevealContainer}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
          >
            <Link href={"/projects"} className={styles.viewAllButton}>
              {"View all projects".split(" ").map((word, index) => (
                <AnimatedWord key={index} variants={wordVariants}>
                  {word}
                  {index < 2 ? "\u00A0" : ""}
                </AnimatedWord>
              ))}
            </Link>
          </motion.div>
        </div>

        <div className={styles.rightColumn} id="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              src="/static/nexel/test.jpg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
