"use client";

import Image from "@/components/animation/ParallaxImage";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
// CHANGED: Import the converted .css file
import styles from "@/app/(home)/components/ProjectsSection.module.css";
import { easings } from "@/utils/easings";
import Link from "next/link";

interface ProjectCardProps {
  slug: string; // Use slug for the link and key
  src: string;
  alt: string;
}

// Variants for the card reveal (can be simplified if needed)
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
      {/* Use the dynamic slug for the link */}
      <Link href={`/projects/${slug}`} scroll={false}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.projectImage}
          data-scroll
          data-scroll-speed="-0.1"
        />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
