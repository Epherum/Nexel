"use client";

import React from "react";
import styles from "./ProjectsSection.module.css";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { allProjects } from "@/data/allProjects";
// CHANGED: Import the new ProjectCard component
import ProjectCard from "@/components/animation/home/ProjectCard";

// --- Data & Variants ---
// We can remove itemFadeInUp if it's no longer used here
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
const itemFadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const ProjectsSection = () => {
  // ... (hooks and constants are unchanged) ...
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
      {/* ... (mainTitle and contentWrapper/leftColumn are unchanged) ... */}
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
            {/* All the h3, p, etc. content remains inside here... */}
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
        </div>

        <div className={styles.rightColumn} id="projects-grid">
          {/* CHANGED: Map over projects and render the ProjectCard component */}
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              src={project.thumbnail.src}
              alt={`Thumbnail for ${project.title} project`}
            />
          ))}
        </div>
      </div>

      {/* ... (button wrapper is unchanged) ... */}
      <div className={styles.buttonAlignmentWrapper}>
        <div className={styles.buttonContainer}>
          <motion.div
            variants={itemFadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <Link href={"/projects"} className={styles.viewAllButton}>
              {"View all projects"}
            </Link>
          </motion.div>
        </div>
        <div className={styles.buttonSpacer} />
      </div>
    </section>
  );
};

export default ProjectsSection;
