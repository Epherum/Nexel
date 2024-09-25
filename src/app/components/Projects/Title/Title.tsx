import React from "react";
import styles from "./title.module.scss";
import behance from "/public/static/home/behance.svg";
import instagram from "/public/static/home/instagram.svg";
import linkedin from "/public/static/home/linkedin.svg";
import Image from "next/image";

function Title() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.emira}>Projects</h1>
      <div className={styles.socials}>
        <a href="https://www.behance.net/tliliemira67fa" target="_blank">
          <Image src={behance} alt="Behance" />
        </a>
        <a href="https://www.instagram.com/kkitsu.exe/" target="_blank">
          <Image src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://jp.linkedin.com/in/amira-tlili-a3b928167"
          target="_blank"
        >
          <Image src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </section>
  );
}

export default Title;
