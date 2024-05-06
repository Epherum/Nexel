import React from "react";
import styles from "./header.module.scss";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";

function Header() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.emira}>Projects</h1>
      <div className={styles.socials}>
        <a href="#">
          <img src={behance.src} alt="Behance" />
        </a>
        <a href="#">
          <img src={instagram.src} alt="Instagram" />
        </a>
        <a href="#">
          <img src={linkedin.src} alt="Linkedin" />
        </a>
      </div>
    </section>
  );
}

export default Header;
