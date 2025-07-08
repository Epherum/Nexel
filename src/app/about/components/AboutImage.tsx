// src/app/about/components/AboutImage.tsx
"use client";

import styles from "./AboutImage.module.css";
import Image from "@/components/animation/ParallaxImage";

const AboutImage = () => {
  return (
    <section className={styles.fullscreenSection}>
      <Image
        src={"/static/nexel/office.webp"}
        alt={"image"}
        fill
        sizes="100vw"
        priority
        className={styles.fullscreenImage}
      />
    </section>
  );
};

export default AboutImage;
