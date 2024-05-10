import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "../../Magnetic/Magnetic";

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

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 100], {
    ease: easeOut,
  });
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150], {
    ease: easeOut,
  });
  const x3 = useTransform(scrollYProgress, [0, 1], [-300, 50], {
    ease: easeOut,
  });

  return (
    <section className={styles.projects}>
      <h2 className={styles.featured}>
        Featured Wo<span>r</span>ks
      </h2>
      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div key={index} className={styles.project}>
                <div className={styles.imageContainer}>
                  <Image fill={true} alt={"image"} src={project.src} />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => {
            return (
              <div key={index} className={styles.project}>
                <div key={index} className={styles.imageContainer}>
                  <Image fill={true} alt={"image"} src={project.src} />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x3 }} className={styles.slider}>
          {slider3.map((project, index) => {
            return (
              <div key={index} className={styles.project}>
                <div key={index} className={styles.imageContainer}>
                  <Image fill={true} alt={"image"} src={project.src} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className={styles.linkContainer}>
        <Link href={"/projects"} scroll={false} className={styles.link}>
          Browse all projects
        </Link>
      </div>
    </section>
  );
}
