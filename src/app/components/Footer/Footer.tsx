import React from "react";
import Link from "next/link";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.skewed_div}></div>
      <div className={styles.container}>
        <div className={styles.top}>
          <h4 className={styles.work}>
            Let's work <span>together!</span>
          </h4>
          <Link href={"/projects"} scroll={false} className={styles.button}>
            <button>See my work</button>
          </Link>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.bottom}>
          <p className={styles.email}>Tliliemira335@gmail.comm</p>
          <p className={styles.rights}>All rights reserved</p>
        </div>
        <div className={styles.socials}>
          <a href="#">
            <img
              src={linkedin.src}
              alt="Linkedin"
              className={styles.social_icon}
            />
          </a>
          <a href="#">
            <img
              src={behance.src}
              alt="Behance"
              className={styles.social_icon}
            />
          </a>
          <a href="#">
            <img
              src={instagram.src}
              alt="Instagram"
              className={styles.social_icon}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
