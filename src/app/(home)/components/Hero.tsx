// src/components/Hero.tsx

import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        <span className={styles.white}>A</span>{" "}
        <span className={styles.grey}>viral</span>{" "}
        <span className={styles.white}>business</span>{" "}
        <span className={styles.grey}>is</span>{" "}
        <span className={styles.white}>the</span>
        <div className={styles.imagePlaceholder}>
          <Image
            src="/static/nexel/test.jpg"
            alt="Design snippet"
            width={100}
            height={70}
            className={styles.snippetImage}
          />
        </div>
        <span className={styles.white}>result</span>{" "}
        <span className={styles.grey}>of a</span>{" "}
        <span className={styles.white}>great</span>{" "}
        <span className={styles.highlight}>design</span>
      </h1>
    </section>
  );
};

export default Hero;
