import React from "react";
import emira from "../../../../../public/emira.png";
import styles from "./about.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.skewed_div} />
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.small_about}>About</p>
          <h2 className={styles.title}>A Creative Graphic Designer</h2>
          <p className={styles.desc}>
            I'm a Creative Graphic designer, Ui/Ux designer and illustrator
            based in tunisia. I love arts, design, participating in different
            cultural activities and connecting with people. I am a creative and
            keen communicator with an eye for storytelling.
          </p>
        </div>
        <div className={styles.image}>
          <img src={emira.src} alt="emira" />
        </div>
      </div>
    </section>
  );
}

export default About;
