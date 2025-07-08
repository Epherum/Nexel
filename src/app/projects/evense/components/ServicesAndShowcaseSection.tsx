// src/app/projects/evense/components/ServicesAndShowcaseSection.tsx
"use client";
import React from "react";
import Image from "@/components/animation/ParallaxImage";
import styles from "./ServicesAndShowcaseSection.module.css";

interface ProjectData {
  services: {
    title: string;
    subtitle: string;
    body: string;
  };
  showcase: {
    images: string[];
    text: string;
  };
}

const ServicesAndShowcaseSection: React.FC<ProjectData> = ({
  services,
  showcase,
}) => {
  return (
    <div className={styles.newSectionsWrapper}>
      <section className={styles.underImageTextGridSection}>
        <div>
          <h3 className={styles.gridTitle}>{services.title}</h3>
          <p className={styles.gridSubtitle}>{services.subtitle}</p>
        </div>
        <p className={styles.gridBody}>{services.body}</p>
      </section>

      <section className={styles.imageShowcaseGrid}>
        {showcase.images.map((imageSrc, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.showcaseImageContainer}>
              <Image
                src={imageSrc}
                alt={`Showcase image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {index === 2 && (
              <p className={styles.showcaseText}>{showcase.text}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesAndShowcaseSection;
