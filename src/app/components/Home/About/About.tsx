import React from "react";
import emira from "/public/static/emira.webp";
import styles from "./about.module.scss";
import rectangle from "/public/static/rectangle.png";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  easeOut,
} from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animations";

function About() {
  const imageContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "center start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-70, 0], {
    ease: easeOut,
  });
  const y2 = useTransform(scrollYProgress, [0, 1], [-70, 35], {
    ease: easeOut,
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [-35, 0], {
    ease: easeOut,
  });
  const z1 = useTransform(scrollYProgress, [0, 1], [-7, 0], {
    ease: easeOut,
  });
  const z2 = useTransform(scrollYProgress, [0, 1], [-10.5, 0], {
    ease: easeOut,
  });

  const titleContainer = useRef(null);
  const isInView = useInView(titleContainer, { once: true });

  const desc =
    "I'm a Creative Graphic designer, Ui/Ux designer and illustrator based in tunisia. I love arts, design, participating in different cultural activities and connecting with people. I am a creative and keen communicator with an eye for storytelling.";

  const title1 = `A Creative`;
  const title2 = `Graphic Designer`;

  return (
    <section className={styles.about}>
      <div className={styles.skewed_div} />
      <div className={styles.container}>
        <div className={styles.text}>
          <motion.p
            variants={slideUp}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            className={styles.small_about}
          >
            About
          </motion.p>
          <div>
            <h2 ref={titleContainer} className={styles.title}>
              {title1.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      custom={index}
                      variants={slideUp}
                      initial="initial"
                      animate={isInView ? "open" : "closed"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h2>
            <h2 ref={titleContainer} className={styles.title}>
              {title2.split(" ").map((word, index) => {
                return (
                  <span key={index} className={styles.mask}>
                    <motion.span
                      custom={index}
                      variants={slideUp}
                      initial="initial"
                      animate={isInView ? "open" : "closed"}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h2>
          </div>
          <p className={styles.desc}>
            {desc.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    custom={index}
                    variants={slideUp}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
        <div ref={imageContainer} className={styles.image}>
          <motion.img
            style={{ x: x1, y: y2, rotateZ: z2 }}
            className={styles.rectangle}
            src={rectangle.src}
            alt="rectangle"
          />
          <motion.img
            style={{ x: x1, y: y1, rotateZ: z1 }}
            className={styles.emira}
            src={emira.src}
            alt="emira"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
