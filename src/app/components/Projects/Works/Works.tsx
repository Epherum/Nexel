import React from "react";
import styles from "./works.module.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import { motion, useScroll, useTransform } from "framer-motion";
import Title from "../Title/Title";

function Projects() {
  const [color, setColor] = useState("");
  const [modal, setModal] = useState(false);
  const [overrideColor, setOverrideColor] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleHover = (color: any, isOpen: boolean, override?: boolean) => {
    setModal(isOpen);
    setColor(color);
    if (override !== undefined) {
      setOverrideColor(override);
    }
  };

  useEffect(() => {
    if (modal && overrideColor) {
      document.body.style.backgroundColor = "#18181b";
      (sectionRef.current ?? document.body).style.backgroundColor = color;
    } else if (!modal && overrideColor) {
      document.body.style.backgroundColor = "#18181b";
      (sectionRef.current ?? document.body).style.backgroundColor = color;
    } else if (modal) {
      document.body.style.backgroundColor = color;
      (sectionRef.current ?? document.body).style.backgroundColor = color;
    } else {
      document.body.style.backgroundColor = "#fff";
      (sectionRef.current ?? document.body).style.backgroundColor = "white";
    }
  }, [modal, color]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 100vh", "end 0vh"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9], [1, 0.85]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionTop40Percent, setSectionTop40Percent] = useState(0);
  const [sectionBottom50Percent, setSectionBottom50Percent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (sectionRef.current) {
        const sectionOffsetTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;

        setScrollPosition(scrollPosition);
        setSectionTop40Percent(sectionOffsetTop + sectionHeight * 0.4);
        setSectionBottom50Percent(sectionOffsetTop + sectionHeight * 0.5);
      }
    };

    handleScroll(); // Run the function on mount to get the initial position
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > sectionBottom50Percent) {
      document.body.style.background = "#18181b";
    } else if (
      scrollPosition > sectionTop40Percent &&
      scrollPosition < sectionBottom50Percent
    ) {
      document.body.style.background = "white";
    } else {
      document.body.style.background = color;
    }
    return () => {
      document.body.style.background = "white";
    };
  }, [scrollPosition, sectionTop40Percent, sectionBottom50Percent]);

  return (
    <motion.section
      style={{ scale }}
      ref={sectionRef}
      className={styles.works}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Title />
      <div className={styles.first}>
        <div
          className={`${styles.first_left} ${styles.hover}`}
          onMouseOver={() => {
            handleHover("#c3c8d8", true);
          }}
          onMouseOut={() => {
            handleHover("white", false, false);
          }}
        >
          <Link href={"/projects/evense"} scroll={false}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/evense-thumbnail.png"
              alt="Image"
            />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Evense</p>
          </Link>
        </div>
        <div
          className={`${styles.first_right} ${styles.hover}`}
          onMouseOver={() => {
            handleHover("#fe9fad", true);
          }}
          onMouseOut={() => {
            handleHover("white", false, false);
          }}
        >
          <Link href={"/projects/lectureRapide"} scroll={false}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/10.png"
              alt="Image"
            />
          </Link>
          <p className={styles.date}>2017</p>
          <p className={styles.name}>Study Platform</p>
        </div>
      </div>
      <div
        className={`${styles.second} ${styles.hover}`}
        onMouseOver={() => {
          handleHover("#c3c8d8", true);
        }}
        onMouseOut={() => {
          handleHover("white", false);
        }}
      >
        <Link href={"/projects/bookApp"} scroll={false}>
          <img
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/bookApp-thumbnail.png"
            alt="Image"
          />
        </Link>
        <p className={styles.date}>2017</p>
        <p className={styles.name}>Book app</p>
      </div>
      <div className={styles.third}>
        <div
          className={`${styles.third_left} ${styles.hover}`}
          onMouseOver={() => {
            handleHover("#c3c8d8", true);
          }}
          onMouseOut={() => {
            handleHover("white", false);
          }}
        >
          <Link href={"/projects/laboTresorsNaturels"} scroll={false}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/tresors-thumbnail.png"
              alt="Image"
            />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Tresors naturels</p>
          </Link>
        </div>
        <div className={styles.third_right}>
          <div
            className={`${styles.third_right_top} ${styles.hover}`}
            onMouseOver={() => {
              handleHover("#c3c8d8", true, true);
            }}
            onMouseOut={() => {
              handleHover("white", false, true);
            }}
          >
            <Link href={"/projects/mestiri"} scroll={false}>
              <img
                data-scroll
                data-scroll-speed="-0.1"
                src="/static/mestiri-thumbnail.png"
                alt="Image"
              />

              <p className={styles.date}>2017</p>
              <p className={styles.name}>Mestiri</p>
            </Link>
          </div>
          <div
            className={`${styles.third_right_bottom} ${styles.hover}`}
            onMouseOver={() => {
              handleHover("#bbb", true, true);
            }}
            onMouseOut={() => handleHover("white", false, true)}
          >
            <Link href={"/projects/amazone"} scroll={false}>
              <img
                data-scroll
                data-scroll-speed="-0.1"
                src="/static/amazone/8.png"
                alt="Image"
              />
              <p className={styles.date}>2017</p>
              <p className={styles.name}>Amazone</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.skewed} />
      <Modal active={modal} />
    </motion.section>
  );
}

export default Projects;
