"use client";
import React from "react";
import styles from "./mestiri.module.scss";
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

  const firstShowcaseImages = [
    "/static/mestiri/1.png",
    "/static/mestiri/2.png",
    "/static/mestiri/3.png",
    "/static/mestiri/4.png",
    "/static/mestiri/5.png",
    "/static/mestiri/6.png",
  ];

  const secondShowcaseImages = [
    "/static/mestiri/7.png",
    "/static/mestiri/8.png",
  ];

  const thirdShowcaseImages = [
    "/static/mestiri/9.png",
    "/static/mestiri/10.png",
    "/static/mestiri/11.png",
    "/static/mestiri/12.png",
    "/static/mestiri/13.png",
    "/static/mestiri/14.png",
    "/static/mestiri/15.png",
    "/static/mestiri/16.png",
    "/static/mestiri/17.png",
  ];

  return (
    <>
      <section className={styles.hero}>
        <img
          data-scroll
          data-scroll-speed="-0.1"
          className={styles.heroImage}
          src="/static/mestiri/hero.png"
          alt=""
        />
        <img
          className={styles.heroLogo}
          src="/static/mestiri/socialMedia.svg"
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
      <section className={styles.firstShowcase}>
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
      </section>

      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={styles.last}
      >
        <img src="/static/mestiri/18.png" alt="" />
      </motion.section>

      <Footer />
    </>
  );
}

export default page;
