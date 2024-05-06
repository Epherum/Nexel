import React from "react";
import styles from "./works.module.scss";

function Projects() {
  return (
    <section className={styles.works}>
      <div className={styles.first}>
        <div className={styles.first_left}>
          <img src="/static/9.png" alt="Image" />
          <p className={styles.date}>2017</p>
          <p className={styles.name}>Tresors naturels</p>
        </div>
        <div className={styles.first_right}>
          <img src="/static/10.png" alt="Image" />
          <p className={styles.date}>2017</p>
          <p className={styles.name}>Tresors naturels</p>
        </div>
      </div>
      <div className={styles.second}>
        <img src="/static/3.png" alt="Image" />
        <p className={styles.date}>2017</p>
        <p className={styles.name}>Tresors naturels</p>
      </div>
      <div className={styles.third}>
        <div className={styles.third_left}>
          <img src="/static/4.png" alt="Image" />
          <p className={styles.date}>2017</p>
          <p className={styles.name}>Tresors naturels</p>
        </div>
        <div className={styles.third_right}>
          <div className={styles.third_right_top}>
            <img src="/static/5.png" alt="Image" />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Tresors naturels</p>
          </div>
          <div className={styles.third_right_bottom}>
            <img src="/static/6.png" alt="Image" />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Tresors naturels</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
