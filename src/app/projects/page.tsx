"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./projects.module.scss";

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
        <a href="#">Be</a>
        <a href="#">In</a>
        <a href="#">in</a>
      </div>
    </section>
  );
}
