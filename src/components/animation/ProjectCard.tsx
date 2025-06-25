// src/components/animation/ProjectCard.tsx
"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import styles from "@/app/(home)/components/ProjectsSection.module.scss";
import { easings } from "@/utils/easings";
import Link from "next/link";

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
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={styles.projectCard}
    >
      <Link href={"/projects/evense"} scroll={false}>
        <Image
          src={src}
          alt={`Project ${id}`}
          width={500}
          height={600}
          className={styles.projectImage}
          data-scroll
          data-scroll-speed="-0.1"
        />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
