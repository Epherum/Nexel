"use client";
import React from "react";
import styles from "./lecture.module.scss";
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

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src="/static/lecture/hero.png" alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/static/lecture/logo.svg" alt="" />
          </div>
          <div className={styles.text}>
            <h1>Study platform</h1>
            <h4>UX\UI</h4>
            <div className={styles.tools}>
              <img src="/static/lecture/figma.svg" alt="" />
              <img src="/static/lecture/ps.svg" alt="" />
              <img src="/static/lecture/illustrator.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={styles.colorLeft} />
        <div className={styles.colorRight} />
        <div className={styles.colorMiddle} />
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/static/lecture/logo.svg" alt="" />
          </div>
          <div className={styles.overview}>
            <div className={styles.content}>
              <h2>Overview</h2>
              <div className={styles.aboutSection}>
                <div className={styles.about}>
                  <img src="/static/lecture/info.svg" alt="" />
                  <h4>About</h4>
                </div>
                <p>
                  LECTURE RAPIDE is a study platform that is accessible to all
                  literate Francophone children over the age of eight. Their
                  platform was created based on the work of leading specialists
                  in the field of rapid reading and brand new learning
                  methodologies.{" "}
                </p>
              </div>
              <div className={styles.conceptSection}>
                <div className={styles.concept}>
                  <img src="/static/lecture/lightbulb.svg" alt="" />
                  <h4>Concept</h4>
                </div>
                <p>
                  The task was to create a design that would fully satisfy two
                  things: First, it would display the entire list of study
                  services (lessons, quiz, tests...) provided by the platform,
                  and secondly, to create user-friendly and understandable
                  navigation especially to kids, which will allow them to
                  quickly understand the platform and find the information
                  needed.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <img src="/static/lecture/clipboard.png" alt="" />
            </div>
          </div>
          <div className={styles.corporate}>
            <h2>Corporate identity</h2>
            <div className={styles.content}>
              <img
                className={styles.child}
                src="/static/lecture/child.png"
                alt=""
              />
              <div className={styles.rightContent}>
                <div className={styles.logos}>
                  <img src="/static/lecture/logo2.svg" alt="dad" />
                  <img src="/static/lecture/favicon.svg" alt="" />
                </div>
                <div className={styles.font}>
                  <p>font</p>
                  <p>Ubuntu</p>
                </div>
                <div className={styles.fontImages}>
                  <div className={styles.weights}>
                    <div>
                      <img src="/static/lecture/Regular.svg" alt="" />
                    </div>
                    <div>
                      <img src="/static/lecture/Medium.svg" alt="" />
                    </div>
                    <div>
                      <img src="/static/lecture/bold.svg" alt="" />
                    </div>
                  </div>
                  <div>
                    <img src="/static/lecture/Aa.svg" alt="" />
                  </div>
                </div>
                <div className={styles.colors}>
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.flow}>
        <div className={styles.content}>
          <div className={styles.leftText}>
            <h5>UX Design</h5>
            <h2>Flow Chart</h2>
            <p>
              This stage helped me track the entire path of the user, each
              interaction with the product from the entry point to the final
              interaction, which helped determine the platform main goal and how
              the user can achieve it.
            </p>
          </div>
          <img src="/static/lecture/mockup.png" alt="" />
        </div>
        <img
          className={styles.flowImage}
          src="/static/lecture/flow.png"
          alt=""
        />
      </section>

      <section className={styles.pictures}>
        <div className={styles.top}>
          <div>
            <img src="/static/lecture/1.png" alt="" />
          </div>
          <div>
            <img src="/static/lecture/2.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.wireframes}>
        <div className={styles.title}>
          <h5>UX Design</h5>
          <h2>Wireframes</h2>
        </div>
        <img src="/static/lecture/wireframe.png" alt="" />
      </section>

      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={styles.visual}
      >
        <div className={styles.title}>
          <h5>UI Design</h5>
          <h2>Visual Design</h2>
        </div>
        <img src="/static/lecture/visual.png" alt="" />
      </motion.section>

      <Footer />
    </>
  );
}
