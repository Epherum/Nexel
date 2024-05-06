import React from "react";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";

const slider1 = [
  {
    src: "/static/1.png",
  },
  {
    src: "/static/2.png",
  },
  {
    src: "/static/3.png",
  },
];

const slider2 = [
  {
    src: "/static/4.png",
  },
  {
    src: "/static/5.png",
  },
  {
    src: "/static/6.png",
  },
];

const slider3 = [
  {
    src: "/static/7.png",
  },
  {
    src: "/static/8.png",
  },
  {
    src: "/static/1.png",
  },
];

function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.featured}>
          Featured Wo<span>r</span>ks
        </h2>
        <div className={styles.sliderContainers}>
          <div className={styles.sliderContainer}>
            {slider1.map((slide, index) => (
              <div key={index} className={styles.slider}>
                <Image
                  fill={true}
                  objectFit="cover"
                  src={slide.src}
                  alt="Slider Image"
                />
              </div>
            ))}
          </div>
          <div className={styles.sliderContainer}>
            {slider2.map((slide, index) => (
              <div key={index} className={styles.slider}>
                <Image
                  fill={true}
                  objectFit="cover"
                  src={slide.src}
                  alt="Slider Image"
                />
              </div>
            ))}
          </div>
          <div className={styles.sliderContainer}>
            {slider3.map((slide, index) => (
              <div key={index} className={styles.slider}>
                <Image
                  fill={true}
                  objectFit="cover"
                  src={slide.src}
                  alt="Slider Image"
                />
              </div>
            ))}
          </div>
        </div>

        <Link href={"/projects"} scroll={false} className={styles.button}>
          <button className={styles.work}>Browse all projects</button>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
