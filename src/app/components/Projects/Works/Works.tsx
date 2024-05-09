import React from "react";
import styles from "./works.module.scss";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";

function Projects() {
  const [color, setColor] = useState("");
  const [modal, setModal] = useState(false);
  const sectionRef = useRef(null);

  const handleHover = (color: any) => {
    setModal(true);
    setColor(color);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.backgroundColor = color;
      (sectionRef.current ?? document.body).style.backgroundColor = color;
    } else {
      document.body.style.backgroundColor = "#fff";
      (sectionRef.current ?? document.body).style.backgroundColor = "";
    }
  }, [modal, color]);

  return (
    <section ref={sectionRef} data-scroll-container className={styles.works}>
      <div className={styles.first}>
        <div
          className={`${styles.first_left} ${styles.hover}`}
          onMouseOver={() => {
            setModal(true);
            handleHover("#c3c8d8");
          }}
          onMouseOut={() => {
            setModal(false);
          }}
        >
          <Link href={"#"}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/9.png"
              alt="Image"
            />
            <p className={styles.date}>2017</p>
            <p className={styles.name}>Tresors naturels</p>
          </Link>
        </div>
        <div
          className={`${styles.first_right} ${styles.hover}`}
          onMouseOver={() => {
            setModal(true);
            handleHover("#fe9fad");
          }}
          onMouseOut={() => {
            setModal(false);
          }}
        >
          <Link href={"#"}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/10.png"
              alt="Image"
            />
          </Link>
          <p className={styles.date}>2017</p>
          <p className={styles.name}>Tresors naturels</p>
        </div>
      </div>
      <div
        className={`${styles.second} ${styles.hover}`}
        onMouseOver={() => {
          setModal(true);
          handleHover("#c3c8d8");
        }}
        onMouseOut={() => {
          setModal(false);
        }}
      >
        <Link href={"#"}>
          <img
            data-scroll
            data-scroll-speed="-0.1"
            src="/static/3.png"
            alt="Image"
          />
        </Link>
        <p className={styles.date}>2017</p>
        <p className={styles.name}>Tresors naturels</p>
      </div>
      <div className={styles.third}>
        <div
          className={`${styles.third_left} ${styles.hover}`}
          onMouseOver={() => {
            setModal(true);
            handleHover("#c3c8d8");
          }}
          onMouseOut={() => {
            setModal(false);
          }}
        >
          <Link href={"#"}>
            <img
              data-scroll
              data-scroll-speed="-0.1"
              src="/static/4.png"
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
              setModal(true);
              handleHover("#c3c8d8");
            }}
            onMouseOut={() => {
              setModal(false);
            }}
          >
            <Link href={"#"}>
              <img
                data-scroll
                data-scroll-speed="-0.1"
                src="/static/5.png"
                alt="Image"
              />

              <p className={styles.date}>2017</p>
              <p className={styles.name}>Tresors naturels</p>
            </Link>
          </div>
          <div
            className={`${styles.third_right_bottom} ${styles.hover}`}
            onMouseOver={() => {
              setModal(true);
              handleHover("#bbb");
            }}
            onMouseOut={() => setModal(false)}
          >
            <Link href={"#"}>
              <img
                data-scroll
                data-scroll-speed="-0.1"
                src="/static/6.png"
                alt="Image"
              />
              <p className={styles.date}>2017</p>
              <p className={styles.name}>Tresors naturels</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.skewed} />
      <Modal active={modal} />
    </section>
  );
}

export default Projects;
