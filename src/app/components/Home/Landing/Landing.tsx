import React from "react";
import Link from "next/link";
import styles from "./landing.module.scss";
import image from "/public/static/image.webp";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";

function Landing() {
  return (
    <section className={styles.landing}>
      <img className={styles.image} src={image.src} alt="Background" />
      <p className={styles.hey}>Hey, I'm</p>
      <h1 className={styles.emira}>Emira Tlili</h1>
      <p className={styles.graphic}>Graphic designer</p>
      <div className={styles.socials}>
        <a href="#">
          <img src={behance.src} alt="Behance" />
        </a>
        <a href="#">
          <img src={instagram.src} alt="Instagram" />
        </a>
        <a href="#">
          <img src={linkedin.src} alt="Linkedin" />
        </a>
      </div>
      <div className={styles.buttons}>
        <Link href={"/projects"}>
          <button className={styles.work}>See my work</button>
        </Link>
        <button className={styles.resume}>Resume </button>
      </div>
      <div className={styles.scroll}>
        <p className={styles.scroll_text}>scroll</p>
        <div className={styles.scroll_line}></div>
      </div>
    </section>
  );
}

export default Landing;
