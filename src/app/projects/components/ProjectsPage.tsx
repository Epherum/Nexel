"use client";

import Link from "@/components/InteractiveLink";
import styles from "./ProjectsPage.module.css"; // CHANGED: Import .css file
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";
import { allProjects } from "@/data/allProjects";
import Image from "@/components/animation/ParallaxImage";

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
          {headlineStart.split(" ").map((word, index) => (
            <AnimatedWord key={index} variants={wordVariants}>
              {word}
              {"\u00A0"}
            </AnimatedWord>
          ))}
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
        {allProjects.map((project) => (
          <motion.div
            key={project.slug}
            className={styles.projectCard}
            variants={cardVariants}
          >
            <Link href={`/projects/${project.slug}`}>
              <Image
                src={project.thumbnail}
                alt={`Thumbnail for ${project.title} project`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                parallaxAmount={10}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default ProjectsPage;
