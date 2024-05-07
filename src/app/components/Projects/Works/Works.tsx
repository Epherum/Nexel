import React from "react";
import styles from "./works.module.scss";
import Link from "next/link";

function Projects() {
  return (
    <section data-scroll-container className={styles.works}>
      <div className={styles.first}>
        <div className={styles.first_left}>
          <Link href={"#"}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/9.png"
              alt="Image"
            />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Tresors naturels</p>
          </Link>
        </div>
        <div className={styles.first_right}>
          <Link href={"#"}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/10.png"
              alt="Image"
            />
          </Link>
          <p className={styles.date}>2017</p>
          <p className={styles.name}>Tresors naturels</p>
        </div>
      </div>
      <div className={styles.second}>
        <Link href={"#"}>
          <img
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/3.png"
            alt="Image"
          />
        </Link>
        <p className={styles.date}>2017</p>
        <p className={styles.name}>Tresors naturels</p>
      </div>
      <div className={styles.third}>
        <div className={styles.third_left}>
          <Link href={"#"}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/4.png"
              alt="Image"
            />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Tresors naturels</p>
          </Link>
        </div>
        <div className={styles.third_right}>
          <div className={styles.third_right_top}>
            <Link href={"#"}>
              <img
                data-scroll
                data-scroll-speed="-0.1"
                src="/static/5.png"
                alt="Image"
              />

              <p className={styles.date}>2017</p>
              <p className={styles.name}>Tresors naturels</p>
            </Link>
          </div>
          <div className={styles.third_right_bottom}>
            <Link href={"#"}>
              <img
                data-scroll
                data-scroll-speed="-0.1"
                src="/static/6.png"
                alt="Image"
              />
              <p className={styles.date}>2017</p>
              <p className={styles.name}>Tresors naturels</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
