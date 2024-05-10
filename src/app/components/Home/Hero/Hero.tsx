import React from "react";
import Link from "next/link";
import styles from "./hero.module.scss";
import image from "/public/static/image.webp";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";
import Line from "./line.svg";
import { motion } from "framer-motion";
import { variants } from "./animations";
import Magnetic from "../../Magnetic/Magnetic";

function Hero() {
  return (
    <section className={styles.landing}>
      <motion.img
        className={styles.image}
        src={image.src}
        alt="Background"
        variants={variants.image}
        initial="hidden"
        animate="visible"
      />
      <motion.p
        className={styles.hey}
        variants={variants.text}
        initial="hidden"
        animate="visible"
      >
        Hey, I'm
      </motion.p>
      <motion.h1
        className={styles.emira}
        variants={variants.heading}
        initial="hidden"
        animate="visible"
      >
        Emira Tlili
      </motion.h1>
      <motion.p
        className={styles.graphic}
        variants={variants.graphic}
        initial="hidden"
        animate="visible"
      >
        Graphic designer
      </motion.p>
      <motion.div
        className={styles.socials}
        variants={variants.socials}
        initial="hidden"
        animate="visible"
      >
        <a href="https://www.behance.net/tliliemira67fa" target="_blank">
          <img src={behance.src} alt="Behance" />
        </a>
        <a href="https://www.instagram.com/kkitsu.exe/" target="_blank">
          <img src={instagram.src} alt="Instagram" />
        </a>
        <a
          href="https://jp.linkedin.com/in/amira-tlili-a3b928167"
          target="_blank"
        >
          <img src={linkedin.src} alt="Linkedin" />
        </a>
      </motion.div>

      <motion.div
        className={styles.buttons}
        variants={variants.buttons}
        initial="hidden"
        animate="visible"
      >
        <Magnetic>
          <Link href={"/projects"}>
            <button className={styles.work}>See my work</button>
          </Link>
        </Magnetic>
        <Magnetic>
          <button className={styles.resume}>Resume </button>
        </Magnetic>
      </motion.div>
      <motion.div
        className={styles.scroll}
        variants={variants.scroll}
        initial="hidden"
        animate="visible"
      >
        <p className={styles.scroll_text}>scroll</p>
        <img className={styles.svg_line} src={Line.src} alt="line" />
      </motion.div>
    </section>
  );
}

export default Hero;
