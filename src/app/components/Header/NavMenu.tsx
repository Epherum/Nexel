import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import behance from "/public/static/behance.svg";
import instagram from "/public/static/instagram.svg";
import linkedin from "/public/static/linkedin.svg";

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <div className={styles.leftSide}>
        <p className={styles.logo}>Emira tlili</p>
        <div className={styles.line}></div>
        <Link href={"/"}>Home</Link>
        <div className={styles.line}></div>
        <Link href={"/projects"}>Projects</Link>
        <div className={styles.line}></div>
        <Link href={"/"}>Contact</Link>
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
      <div className={styles.right}>
        <img src="" alt="" />
        <div className={styles.buttons}>
          <img src="" alt="" />

          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
