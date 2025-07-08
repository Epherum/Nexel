// src/app/projects/evense/components/FullWidthImageSection.tsx
"use client";
import React from "react";
import Image from "@/components/animation/ParallaxImage";
import styles from "./FullWidthImageSection.module.css";

interface FullWidthImageProps {
  imageSrc: string;
}

const FullWidthImageSection: React.FC<FullWidthImageProps> = ({ imageSrc }) => {
  return (
    <section className={styles.fullWidthImageSection}>
      <Image
        src={imageSrc}
        alt="Outdoor billboard showcase of the branding"
        fill
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default FullWidthImageSection;
