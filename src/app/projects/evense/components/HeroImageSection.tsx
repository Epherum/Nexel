// src/app/projects/evense/components/HeroImageSection.tsx
"use client";
import React from "react";
import Image from "@/components/animation/ParallaxImage";
import NextImage from "next/image"; // You already have this import
import { StaticImageData } from "next/image";
import styles from "./HeroImageSection.module.css";

interface HeroImageProps {
  mainImage: StaticImageData;
  logoImage: string;
}

const HeroImageSection: React.FC<HeroImageProps> = ({
  mainImage,
  logoImage,
}) => {
  return (
    <section className={styles.heroImageSection}>
      <div className={styles.imageContainer}>
        <Image
          src={mainImage}
          alt="Evense platform screenshot"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.logo}>
          {/* --- THIS IS THE UPDATED PART --- */}
          <NextImage
            src={logoImage}
            alt="Evense Logo"
            fill // Use fill to make the image responsive
            sizes="(max-width: 1023px) 80px, 120px" // Helps Next.js optimize image loading
          />
        </div>
      </div>
      <div className={styles.heroImageSectionColorBg} />
    </section>
  );
};

export default HeroImageSection;
