// src/components/HowWeDoIt.tsx

import React from "react";
import styles from "./HowWeDoIt.module.scss";

const HowWeDoIt: React.FC = () => {
  return (
    <section className={styles.howWeDoItSection}>
      <h2 className={styles.sectionTitle}>How we do it</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.leftColumn}>
          <h3 className={styles.headline}>
            We turn strategy into art and ideas into impact.
          </h3>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.description}>
            We think out of the box when it comes to strategy, design and
            creative. We make the projects that bring inspiration.
          </p>
          <p className={styles.description}>
            Whether your inquiries are big or small, we’re prepared to engage,
            focusing on collaborative problem-solving, even when tackling the
            most complex challenges.
          </p>
          <button className={styles.aboutButton}>About Us</button>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
