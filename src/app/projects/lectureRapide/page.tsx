"use client";
import React from "react";
import styles from "./lecture.module.scss";
import Footer from "@/app/components/Footer/Footer";
import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

import hero from "/public/static/lecture/hero.webp"; // Import hero image as webp
import logo from "/public/static/lecture/logo.svg";
import figma from "/public/static/lecture/figma.svg";
import ps from "/public/static/lecture/ps.svg";
import illustrator from "/public/static/lecture/illustrator.svg";
import clipboard from "/public/static/lecture/clipboard.webp";
import child from "/public/static/lecture/child.webp";
import logo2 from "/public/static/lecture/logo2.svg";
import favicon from "/public/static/lecture/favicon.svg";
import regular from "/public/static/lecture/Regular.svg";
import medium from "/public/static/lecture/Medium.svg";
import bold from "/public/static/lecture/bold.svg";
import aa from "/public/static/lecture/Aa.svg";
import mockup from "/public/static/lecture/mockup.webp";
import flow from "/public/static/lecture/flow.webp";
import pic1 from "/public/static/lecture/1.webp";
import pic2 from "/public/static/lecture/2.webp";
import wireframe from "/public/static/lecture/wireframe.webp";
import visual from "/public/static/lecture/visual.webp";
import lightbulb from "/public/static/lecture/lightbulb.svg";
import info from "/public/static/lecture/info.svg";

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
          <Image src={hero} alt="Hero" priority />
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className={styles.text}>
            <h1>Study platform</h1>
            <h4>UX\UI</h4>
            <div className={styles.tools}>
              <Image src={figma} alt="Figma" />
              <Image src={ps} alt="Photoshop" />
              <Image src={illustrator} alt="Illustrator" />
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
            <Image src={logo} alt="Logo" />
          </div>
          <div className={styles.overview}>
            <div className={styles.content}>
              <h2>Overview</h2>
              <div className={styles.aboutSection}>
                <div className={styles.about}>
                  <Image src={info} alt="Info" />
                  <h4>About</h4>
                </div>
                <p>
                  LECTURE RAPIDE is a study platform that is accessible to all
                  literate Francophone children over the age of eight. Their
                  platform was created based on the work of leading specialists
                  in the field of rapid reading and brand new learning
                  methodologies.
                </p>
              </div>
              <div className={styles.conceptSection}>
                <div className={styles.concept}>
                  <Image src={lightbulb} alt="Concept" />
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
              <Image src={clipboard} alt="Clipboard" />
            </div>
          </div>
          <div className={styles.corporate}>
            <h2>Corporate identity</h2>
            <div className={styles.content}>
              <Image className={styles.child} src={child} alt="Child" />
              <div className={styles.rightContent}>
                <div className={styles.logos}>
                  <Image className={styles.logo2} src={logo} alt="Logo2" />
                  <Image src={favicon} alt="Favicon" />
                </div>
                <div className={styles.font}>
                  <p>Font</p>
                  <p>Ubuntu</p>
                </div>
                <div className={styles.fontImages}>
                  <div className={styles.weights}>
                    <div>
                      <Image src={regular} alt="Regular" />
                    </div>
                    <div>
                      <Image src={medium} alt="Medium" />
                    </div>
                    <div>
                      <Image src={bold} alt="Bold" />
                    </div>
                  </div>
                  <div>
                    <Image className={styles.aa} src={aa} alt="Aa" />
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
          <div className={styles.mockup}>
            <Image src={mockup} alt="Mockup" />
          </div>
        </div>
        <Image className={styles.flowImage} src={flow} alt="Flow" />
      </section>

      <section className={styles.pictures}>
        <div className={styles.top}>
          <div>
            <Image src={pic1} alt="Picture 1" />
          </div>
          <div>
            <Image src={pic2} alt="Picture 2" />
          </div>
        </div>
      </section>

      <section className={styles.wireframes}>
        <div className={styles.title}>
          <h5>UX Design</h5>
          <h2>Wireframes</h2>
        </div>
        <Image src={wireframe} alt="Wireframe" />
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
        <Image src={visual} alt="Visual Design" />
      </motion.section>

      <Footer />
    </>
  );
}
