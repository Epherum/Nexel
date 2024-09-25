import React, { useRef } from "react";
import Link from "next/link";
import behance from "/public/static/home/behance.svg";
import instagram from "/public/static/home/instagram.svg";
import linkedin from "/public/static/home/linkedin.svg";
import styles from "./footer.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "../Magnetic/Magnetic";

function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);

  return (
    <motion.footer style={{ y: y }} ref={container} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h4 className={styles.work}>
            Let's work <span>together!</span>
          </h4>
          <Magnetic>
            <Link href={"/projects"} scroll={false} className={styles.button}>
              <button>See my work</button>
            </Link>
          </Magnetic>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottom}>
          <p className={styles.email}>
            <a href={`mailto:Tliliemira335@gmail.com`}>
              Tliliemira335@gmail.com
            </a>
          </p>
          <p className={styles.rights}>All rights reserved</p>
        </div>
        <div className={styles.socials}>
          <a
            href="https://jp.linkedin.com/in/amira-tlili-a3b928167"
            target="_blank"
          >
            <img
              src={linkedin.src}
              alt="Linkedin"
              className={styles.social_icon}
            />
          </a>
          <a href="https://www.behance.net/tliliemira67fa" target="_blank">
            <img
              src={behance.src}
              alt="Behance"
              className={styles.social_icon}
            />
          </a>
          <a href="https://www.instagram.com/kkitsu.exe/" target="_blank">
            <img
              src={instagram.src}
              alt="Instagram"
              className={styles.social_icon}
            />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
