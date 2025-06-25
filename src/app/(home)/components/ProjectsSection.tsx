//src/components/ProjectsSection/ProjectsSection.tsx
"use client";

import React from "react";
import styles from "./ProjectsSection.module.scss";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import Image from "next/image";
import { allProjects } from "@/data/allProjects"; // <-- USE THE MASTER LIST

// --- Data & Variants ---
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

// --- NEW: Variants for individual card and button animation ---
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    margin: "0px 0px -150px 0px",
    once: true,
  });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const subHeaderText = "SUCCESS STORIES";
  const descriptionText =
    "Every case study represents a challenge met, a standard raised, and a client empowered. See how we turn vision into results that speak for themselves.";

  const projectsToShow = allProjects.slice(0, 6);

  return (
    <section className={styles.projectsSection}>
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
        <div ref={contentRef} className={styles.leftColumn}>
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
          >
            {/* The text content remains the same */}
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

            {/* --- FIX: Wrap the button in its own motion component for animation --- */}
            <motion.div variants={itemFadeInUp}>
              <Link href={"/projects"} className={styles.viewAllButton}>
                {"View all projects"}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.rightColumn} id="projects-grid">
          {projectsToShow.map(
            (
              project // 3. Map over our dynamic data
            ) => (
              <motion.div
                key={project.slug} // Use unique slug for the key
                className={styles.projectCard}
                variants={itemFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* 4. Use project slug for the link and thumbnail for the image */}
                <Link href={`/projects/${project.slug}`} scroll={false}>
                  <Image
                    src={project.thumbnail}
                    alt={`Thumbnail for ${project.title} project`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.projectImage}
                    data-scroll
                    data-scroll-speed="-0.1"
                  />
                </Link>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
