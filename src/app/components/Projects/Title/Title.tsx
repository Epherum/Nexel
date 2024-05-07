import React from "react";
import styles from "./title.module.scss";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";

function Title() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.emira}>Projects</h1>
      <div className={styles.socials}>
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
      </div>
    </section>
  );
}

export default Title;
