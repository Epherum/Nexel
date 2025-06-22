// src/app/projects/components/ProjectsPage.tsx
"use client";

import Image from "next/image";
import styles from "./ProjectsPage.module.scss";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// --- Data (Unchanged) ---
const projects = [
  {
    id: 1,
    imageUrl: "/static/nexel/test.jpg",
    alt: "E-commerce website on a laptop",
  },
  {
    id: 2,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Matcha drink with custom branding",
  },
  {
    id: 3,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Minimalist mobile app interface",
  },
  {
    id: 4,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Corporate branding materials",
  },
  {
    id: 5,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Educational platform for children",
  },
  {
    id: 6,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 7,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 8,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 9,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 10,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
  {
    id: 11,
    imageUrl: "/static/nexel/test.jpg",
    alt: "Modern restaurant menu design",
  },
];

// --- Animation Variants (Unchanged) ---
const wordRevealContainer: Variants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};
const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};
const gridContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const ProjectsPage = () => {
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  // --- THE FIX: Pre-split the text for cleaner JSX ---
  const headlineStart =
    "Explore the work that defines our standards and drives";
  const headlineHighlight = "real impact.";

  return (
    <main className={styles.projectsPage}>
      <motion.header
        className={styles.header}
        variants={wordRevealContainer}
        initial="hidden"
        animate="visible"
      >
        <h1 className={styles.headline}>
          {/* Map over the first part of the headline */}
          {headlineStart.split(" ").map((word, index) => (
            <AnimatedWord key={index} variants={wordVariants}>
              {/* Add a non-breaking space after each word */}
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
          {/* Render the highlighted part separately */}
          <span className={styles.highlight}>
            <AnimatedWord variants={wordVariants}>
              {headlineHighlight}
            </AnimatedWord>
          </span>
        </h1>
      </motion.header>

      <motion.div
        ref={gridRef}
        className={styles.projectsGrid}
        variants={gridContainerVariants}
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            variants={cardVariants}
          >
            <Image
              src={project.imageUrl}
              alt={project.alt}
              fill
              className={styles.projectImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default ProjectsPage;
