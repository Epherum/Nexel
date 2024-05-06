"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./projects.module.scss";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";

export default function Projects() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.projects}>
      <h1 className={styles.emira}>Projects</h1>
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
    </section>
  );
}
