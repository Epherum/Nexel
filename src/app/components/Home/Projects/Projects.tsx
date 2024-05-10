import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(containerScrollYProgress, [0, 1], [-200, 100], {
    ease: easeOut,
  });
  const x2 = useTransform(containerScrollYProgress, [0, 1], [0, -150], {
    ease: easeOut,
  });
  const x3 = useTransform(containerScrollYProgress, [0, 1], [-300, 50], {
    ease: easeOut,
  });
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
    <motion.section
      style={{ scale }}
      ref={sectionRef}
      className={styles.projects}
    >
      <motion.h2 className={styles.featured}>
        Featured Wo<span>r</span>ks
      </motion.h2>
      <div className={styles.slidingImagesContainer}>
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
      </div>

      <div className={styles.linkContainer}>
        <Link href={"/projects"} scroll={false} className={styles.link}>
          Browse all projects
        </Link>
      </div>
    </motion.section>
  );
}
