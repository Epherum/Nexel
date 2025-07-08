// src/app/projects/evense/components/TypographyAndColorSection.tsx
"use client";
import React from "react";
import Image from "@/components/animation/ParallaxImage";
import styles from "./TypographyAndColorSection.module.css";

const colors = [
  "#101010",
  "#171717",
  "#656565",
  "#FFFFFF",
  "#50E8BE",
  "#00ADF6",
];
const decorativeImages = [
  {
    src: "/static/evense/pink.svg",
    alt: "Decorative pink shape",
    className: styles.pink,
  },
  {
    src: "/static/evense/yellow.svg",
    alt: "Decorative yellow shape",
    className: styles.yellow,
  },
  {
    src: "/static/evense/blue.svg",
    alt: "Decorative blue shape",
    className: styles.blue,
  },
];

const TypographyAndColorSection = () => {
  return (
    <section className={styles.typography}>
      <div className={styles.topText}>
        <h2>Logo colour palette and typography</h2>
        <p>
          Our color palette for this project was carefully curated, blending the
          client's preferences with my design expertise to ensure a vibrant and
          cohesive aesthetic. Each color was selected thoughtfully, aiming to
          resonate with the target audience while maintaining the brand's
          identity.
        </p>
      </div>
      <div className={styles.colors}>
        {colors.map((color) => (
          <div key={color} className={styles.color}>
            <div
              style={{
                backgroundColor: color,
                border: color === "#FFFFFF" ? "1px solid #e0e0e0" : "none",
              }}
            />
            <p>{color}</p>
          </div>
        ))}
      </div>
      <div className={styles.fontSection}>
        <div className={styles.leftSection}>
          <div className={styles.font}>
            <p className={styles.headline}>Font</p>
            <h2 className={styles.title}>QuickSand</h2>
            <p className={styles.text}>
              This font was chosen to complement the overall design aesthetic.
              Its clean lines and modern appearance align perfectly with the
              minimalistic yet vibrant approach of the project.
            </p>
          </div>
          <div className={styles.weights}>
            <div className={styles.semibold}>
              <p>Headlines</p>
              <h3>Semibold</h3>
            </div>
            <div className={styles.regular}>
              <p>Paragraphs</p>
              <h3>Regular</h3>
            </div>
          </div>
        </div>
        <p className={styles.rightText}>
          Careful attention was paid to font sizes and spacing to ensure optimal
          readability and usability, adhering to established web design
          principles and preferences. This deliberate choice not only enhances
          the visual appeal of the project but also contributes to a seamless
          user experience, reinforcing the brand's identity across various
          digital platforms.
        </p>
      </div>
      {decorativeImages.map((img) => (
        <Image
          key={img.src}
          className={img.className}
          src={img.src}
          alt={img.alt}
          width={70}
          height={70}
        />
      ))}
    </section>
  );
};

export default TypographyAndColorSection;
