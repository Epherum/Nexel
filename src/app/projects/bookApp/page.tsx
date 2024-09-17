"use client";
import React from "react";
import styles from "./bookApp.module.scss";
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
      <section className={styles.bookApp}>
        <div className={styles.first}>
          <img
            className={styles.image}
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/bookApp/bookApp1.png"
            alt=""
          />
          <div className={styles.heading}>
            <h2 className={styles.title}>Book library app</h2>
            <div className={styles.undertitle}>
              <h4>UI Design | Tools:</h4>
              <div className={styles.icons}>
                <img src="/static/bookApp/figma.svg" alt="" />
                <img src="/static/bookApp/illustrator.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <img
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/bookApp/bookApp2.png"
            alt=""
          />
        </div>
        <div className={styles.third}>
          <img
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/bookApp/bookApp3.png"
            alt=""
          />
        </div>
        <div className={styles.fourth}>
          <img
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/bookApp/bookApp4.png"
            alt=""
          />
        </div>
      </section>
      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={styles.fifth}
      >
        <div>
          <img src="/static/bookApp/bookApp5.png" alt="" />
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default page;
