import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import styles from "./projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import bookApp from "/public/static/thumbnails/bookApp-thumbnail.png";
import evense from "/public/static/thumbnails/evense-thumbnail.png";
import lecture from "/public/static/thumbnails/lecture-thumbnail.png";
import tresors from "/public/static/thumbnails/tresors-thumbnail.png";
import virginia from "/public/static/thumbnails/virginia-thumbnail.webp";
import digital from "/public/static/thumbnails/digital-thumbnail.webp";
import mestiri from "/public/static/thumbnails/mestiri-thumbnail.png";
import amazone from "/public/static/thumbnails/amazone-thumbnail.png";
import placeholder from "/public/static/thumbnails/placeholder-thumbnail.png";

const slider1 = [
  { src: bookApp, name: "bookApp" },
  { src: evense, name: "evense" },
  { src: lecture, name: "lectureRapide" },
];

const slider2 = [
  { src: tresors, name: "laboTresorsNaturels" },
  { src: virginia, name: "virginia" },
  { src: digital, name: "digital" },
];

const slider3 = [
  { src: mestiri, name: "mestiri" },
  { src: amazone, name: "amazone" },
  { src: placeholder, name: "#" }, // Assuming you're reusing the same image/project
];

export default function Projects() {
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
  const sectionRef = useRef<HTMLElement | null>(null);

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

      if (sectionRef.current) {
        const sectionOffsetTop = sectionRef.current.offsetTop;
        const sectionMiddle =
          sectionOffsetTop + sectionRef.current.offsetHeight / 2;

        setScrollPosition(scrollPosition);
        setSectionMiddle(sectionMiddle);
      }
    };

    handleScroll(); // Run the function on mount to get the initial position
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
      <div className={styles.featuredContainer}>
        <motion.h2 className={styles.featured}>
          Featured Wo<span>r</span>ks
        </motion.h2>
      </div>
      <div className={styles.slidingImagesContainer}>
        <div ref={container} className={styles.slidingImages}>
          {/* Slider 1 */}
          <motion.div style={{ x: x1 }} className={styles.slider}>
            {slider1.map((project, index) => (
              <div key={index} className={styles.project}>
                <Link href={`/projects/${project.name}`} scroll={false}>
                  <div className={styles.imageContainer}>
                    <Image fill={true} alt={project.name} src={project.src} />
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>

          {/* Slider 2 */}
          <motion.div style={{ x: x2 }} className={styles.slider}>
            {slider2.map((project, index) => (
              <div key={index} className={styles.project}>
                <Link href={`/projects/${project.name}`} scroll={false}>
                  <div className={styles.imageContainer}>
                    <Image fill={true} alt={project.name} src={project.src} />
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>

          {/* Slider 3 */}
          <motion.div style={{ x: x3 }} className={styles.slider}>
            {slider3.map((project, index) => (
              <div key={index} className={styles.project}>
                <Link href={`/projects/${project.name}`} scroll={false}>
                  <div className={styles.imageContainer}>
                    <Image fill={true} alt={project.name} src={project.src} />
                  </div>
                </Link>
              </div>
            ))}
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
