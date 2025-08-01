"use client";

import React, { useRef } from "react";
import Link from "@/components/InteractiveLink";
import { motion, useInView, Variants } from "framer-motion";
import { allProjects, ProjectListing } from "@/data/allProjects"; // Import ProjectListing type
import { easings } from "@/utils/easings";

// Component Imports
import Image from "@/components/animation/ParallaxImage";
import AnimatedWord from "@/components/animation/AnimatedWord";

// Styles
import styles from "./ProjectsSection.module.css";

// --- Local ProjectCard Component ---

interface ProjectCardProps {
  slug: string;
  src: string;
  alt: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easings.easeOut,
    },
  },
};

const ProjectCard = ({ slug, src, alt }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -150px 0px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={styles.projectCard}
    >
      <Link href={`/projects/${slug}`} scroll={false}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.projectImage}
        />
      </Link>
    </motion.div>
  );
};

// --- Main ProjectsSection Component ---

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

  // --- NEW: LOGIC FOR FIXED PROJECT ORDER ---
  // The random selection logic has been replaced with a fixed list of slugs
  // to ensure the projects always appear in the desired order.

  // 1. Define the exact order of project slugs.
  // Note: Slugs must match exactly how they are defined in `allProjects.ts`.
  const orderedSlugs = [
    "branding/wag",
    "branding/matuky",
    "branding/krai",
    "book-app",
    "moondivine",
    "social/tresors-naturels", // Assuming this is the correct slug for the social project
  ];

  // 2. Create a Map for efficient lookup from the main `allProjects` array.
  const projectsBySlug = new Map(allProjects.map((p) => [p.slug, p]));

  // 3. Build the `projectsToShow` array by retrieving projects in the specified order.
  const projectsToShow = orderedSlugs
    .map((slug) => projectsBySlug.get(slug))
    .filter((p): p is ProjectListing => !!p); // Filter out any undefined results to prevent errors

  const subHeaderText = "SUCCESS STORIES";
  const descriptionText =
    "Every case study represents a challenge met, a standard raised, and a client empowered. See how we turn vision into results that speak for themselves.";

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
