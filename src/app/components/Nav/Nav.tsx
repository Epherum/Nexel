import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.name}>
          <Link href={"/"}>Emira tlili</Link>
        </li>
        <div className={styles.links}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>Contact</li>
          <li>FR</li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
