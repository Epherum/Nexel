// src/app/projects/evense/components/IntroductionSection.tsx
"use client";
import React from "react";
import Image from "@/components/animation/ParallaxImage";
import NextImage from "next/image";
import { StaticImageData } from "next/image";
import styles from "./IntroductionSection.module.css";

interface IntroductionProps {
  phoneImage: StaticImageData;
}

const IntroductionSection: React.FC<IntroductionProps> = ({ phoneImage }) => {
  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        {/* Cell 1: Logo */}
        <div className={styles.logoCell}>
          <Image
            src="/static/evense/logo-black.svg"
            alt="Evense Logo Black"
            width={400}
            height={100}
            className={styles.logoImage} // Added for better control
          />
        </div>

        {/* Cell 2: Description Text */}
        <div className={styles.descriptionCell}>
          <p>
            The logo design was crafted with a deliberate focus on achieving a
            balance between minimalism and professionalism, while infusing a
            modern sensibility. Emphasizing simplicity and sophistication, each
            element was carefully selected and refined to convey the brand's
            identity succinctly.
          </p>
        </div>

        {/* Cell 3: Video */}
        <div className={styles.videoCell}>
          <video
            src="/static/evense/intro-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Cell 4: Showcase with Text and Phone Image */}
        <div className={styles.showcaseCell}>
          <p>
            The goal was to highlight their wide range of services while
            providing a seamless user experience. To attract attention, we
            incorporated a dynamic, high-quality video on the homepage that
            showcases their services in action, helping visitors immediately
            connect with the brand.
          </p>
          <div className={styles.phoneImageWrapper}>
            <NextImage
              src={phoneImage}
              alt="Evense app on a phone"
              fill // This is the most important change!
              sizes="(max-width: 1023px) 90vw, 35vw" // Performance optimization
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
