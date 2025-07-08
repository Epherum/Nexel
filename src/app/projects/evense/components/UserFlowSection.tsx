// src/app/projects/evense/components/UserFlowSection.tsx
"use client";
import React from "react";
import Image from "@/components/animation/ParallaxImage";
import { StaticImageData } from "next/image";
import styles from "./UserFlowSection.module.css";

interface UserFlowProps {
  flowImage: StaticImageData;
}

const UserFlowSection: React.FC<UserFlowProps> = ({ flowImage }) => {
  return (
    // The main section now has no horizontal padding, allowing children to be full-width.
    <section className={styles.userFlow}>
      {/* 1. A new container specifically for the heading to keep it aligned */}
      <div className={styles.headingContainer}>
        <h2 className={styles.headingText}>User Flow</h2>
      </div>

      {/* 2. A dedicated wrapper for the full-width image */}
      <div className={styles.imageWrapper}>
        <Image src={flowImage} alt="User flow diagram for Evense" />
      </div>
    </section>
  );
};

export default UserFlowSection;
