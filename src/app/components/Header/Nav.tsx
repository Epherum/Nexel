import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <nav className={styles.header}>
      <ul>
        <li className={styles.logo}>
          <Link href={"/"} scroll={false}>
            Emira tlili
          </Link>
        </li>

        <div className={styles.nav}>
          <li className={styles.el}>
            <Link href={"/"} scroll={false}>
              Home
            </Link>
            <div className={styles.indicator}></div>
          </li>
          <li className={styles.el}>
            <Link href={"/projects"} scroll={false}>
              Projects
            </Link>
            <div className={styles.indicator}></div>
          </li>
          <li className={styles.el}>
            <Link href={"/projects"} scroll={false}>
              Contact
            </Link>

            <div className={styles.indicator}></div>
          </li>
          <li className={styles.el}>
            <Link href={"/projects"} scroll={false}>
              FR
            </Link>

            <div className={styles.indicator}></div>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
