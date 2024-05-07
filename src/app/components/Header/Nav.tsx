import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li className={styles.logo}>
          <Link href={"/"}>Emira tlili</Link>
        </li>

        <div className={styles.nav}>
          <li className={styles.el}>
            <Link href={"/"}>Home</Link>
            <div className={styles.indicator}></div>
          </li>
          <li className={styles.el}>
            <Link href={"/projects"}>Projects</Link>
            <div className={styles.indicator}></div>
          </li>
          <li className={styles.el}>
            <Link href={"/projects"}>Contact</Link>

            <div className={styles.indicator}></div>
          </li>
          <li className={styles.el}>
            <Link href={"/projects"}>FR</Link>

            <div className={styles.indicator}></div>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
