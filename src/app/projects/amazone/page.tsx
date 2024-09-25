"use client";
import React from "react";
import styles from "./amazone.module.scss";
import Footer from "@/app/components/Footer/Footer";
import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
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

  const firstShowcaseImages = [
    "/static/amazone/1.webp",
    "/static/amazone/2.webp",
    "/static/amazone/3.webp",
    "/static/amazone/4.webp",
    "/static/amazone/5.webp",
    "/static/amazone/6.webp",
  ];

  const secondShowcaseImages = [
    "/static/amazone/7.webp",
    "/static/amazone/8.webp",
  ];

  const thirdShowcaseImages = [
    "/static/amazone/9.webp",
    "/static/amazone/10.webp",
    "/static/amazone/11.webp",
    "/static/amazone/12.webp",
    "/static/amazone/13.webp",
    "/static/amazone/14.webp",
    "/static/amazone/15.webp",
    "/static/amazone/21.webp",
    "/static/amazone/17.webp",
    "/static/amazone/18.webp",
    "/static/amazone/19.webp",
    "/static/amazone/20.webp",
  ];

  return (
    <section>
      <section className={styles.hero}>
        <img
          data-scroll
          data-scroll-speed="-0.1"
          className={styles.heroImage}
          src="/static/amazone/hero.webp"
          alt=""
        />
        <img
          className={styles.heroLogo}
          src="/static/amazone/socialMedia.webp"
          alt=""
        />
      </section>

      {/* First Showcase */}
      <section className={styles.firstShowcase}>
        {firstShowcaseImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          />
        ))}
      </section>

      {/* Second Showcase */}
      <section className={styles.secondShowcase}>
        {secondShowcaseImages.map((src, index) => (
          <div className={styles.imageContainer}>
            <motion.img
              data-scroll
              data-scroll-speed="-0.1"
              key={index}
              src={src}
              alt=""
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            />
          </div>
        ))}
      </section>

      {/* Third Showcase */}
      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={`${styles.firstShowcase} ${styles.last}`}
      >
        {thirdShowcaseImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          />
        ))}
        <div className={styles.skewed} />
      </motion.section>
      <Footer />
    </section>
  );
}
