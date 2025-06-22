// src/components/animation/ProjectCard.tsx
"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import styles from "@/app/(home)/components/ProjectsSection.module.scss";
import { easings } from "@/utils/easings";

interface ProjectCardProps {
  id: number;
  src: string;
}

// Variants for the card reveal
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

const ProjectCard = ({ id, src }: ProjectCardProps) => {
  const ref = useRef(null);
  // Each card triggers its own animation.
  const isInView = useInView(ref, {
    margin: "0px 0px -150px 0px", // Trigger when it's 150px into the viewport
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Image
        src={src}
        alt={`Project ${id}`}
        width={500}
        height={600}
        className={styles.projectImage}
      />
    </motion.div>
  );
};

export default ProjectCard;
