// src/app/about/components/AboutHero.tsx

import React from "react";
import styles from "./AboutHero.module.scss";

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.headline}>Creative</h1>
        <div className={styles.descriptionBox}>
          <p>
            We’re a team of diverse talents, each person valued not just for
            what they do, but for who they are.
          </p>
          <button className={styles.exploreButton}>Explore</button>
        </div>
        <h1 className={styles.headline}>Inspiring</h1>
      </div>

      <div className={styles.scrollIndicator}>Scroll down</div>

      <div className={styles.bottomBar}>
        <span className={styles.valueLabel}>Our value</span>
        <span className={styles.tagline}>
          Heart-led, idea-fueled, and always creating.
        </span>
      </div>
    </section>
  );
};

export default AboutHero;
