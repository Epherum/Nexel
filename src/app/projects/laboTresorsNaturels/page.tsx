"use client";
import React from "react";
import styles from "./labo.module.scss";
import Footer from "@/app/components/Footer/Footer";
import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";

function page() {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 100vh", "end 0vh"],
  });

  const scale = useTransform(sectionScrollYProgress, [0, 0.9], [1, 0.85]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionMiddle, setSectionMiddle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // @ts-ignore
      const sectionOffsetTop = sectionRef.current.offsetTop;
      const sectionMiddle =
        // @ts-ignore i love typescript
        sectionOffsetTop + sectionRef.current.offsetHeight / 2;
      setScrollPosition(scrollPosition);
      setSectionMiddle(sectionMiddle);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > sectionMiddle) {
      document.body.style.background = "#18181b";
    } else {
      document.body.style.background = "white";
    }
    return () => {
      document.body.style.background = "white";
    };
  }, [scrollPosition, sectionRef]);

  return (
    <>
      <section className={styles.hero}>
        <img className={styles.heroImage} src="/static/labo/hero.png" alt="" />
        <img
          className={styles.heroLogo}
          src="/static/labo/socialMedia.svg"
          alt=""
        />
      </section>
      <section className={styles.firstShowcase}>
        <img src="/static/labo/1.png" alt="" />
        <img src="/static/labo/2.png" alt="" />
        <img src="/static/labo/3.png" alt="" />
        <img src="/static/labo/4.png" alt="" />
        <img src="/static/labo/5.png" alt="" />
        <img src="/static/labo/6.png" alt="" />
      </section>
      <section className={styles.secondShowcase}>
        <img src="/static/labo/7.png" alt="" />
        <img src="/static/labo/8.png" alt="" />
      </section>
      <section className={styles.firstShowcase}>
        <img src="/static/labo/9.png" alt="" />
        <img src="/static/labo/10.png" alt="" />
        <img src="/static/labo/11.png" alt="" />
        <img src="/static/labo/12.png" alt="" />
        <img src="/static/labo/13.png" alt="" />
        <img src="/static/labo/14.png" alt="" />
        <img src="/static/labo/15.png" alt="" />
        <img src="/static/labo/16.png" alt="" />
        <img src="/static/labo/17.png" alt="" />
      </section>
      <section className={styles.secondShowcase}>
        <img src="/static/labo/18.png" alt="" />
        <img src="/static/labo/19.png" alt="" />
      </section>
      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={`${styles.firstShowcase} ${styles.last}`}
      >
        <img src="/static/labo/20.png" alt="" />
        <img src="/static/labo/21.png" alt="" />
        <img src="/static/labo/22.png" alt="" />
        <img src="/static/labo/24.png" alt="" />
        <img src="/static/labo/25.png" alt="" />
        <img src="/static/labo/26.png" alt="" />
        <img src="/static/labo/27.png" alt="" />
        <img src="/static/labo/28.png" alt="" />
        <img src="/static/labo/29.png" alt="" />
        <div className={styles.skewed} />
      </motion.section>

      <Footer />
    </>
  );
}

export default page;
