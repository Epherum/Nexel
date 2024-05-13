"use client";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Magnetic from "../Magnetic/Magnetic";
import { variants } from "./animations";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <motion.nav
        variants={variants.nav}
        initial="hidden"
        animate="visible"
        className={styles.header}
      >
        <ul>
          <Magnetic>
            <li className={styles.logo}>
              <Link href={"/"} scroll={false}>
                Emira tlili
              </Link>
            </li>
          </Magnetic>

          <div className={styles.nav}>
            <Magnetic>
              <li className={styles.el}>
                <Link href={"/"} scroll={false}>
                  Home
                </Link>
                <div className={styles.indicator}></div>
              </li>
            </Magnetic>
            <Magnetic>
              <li className={styles.el}>
                <Link href={"/projects"} scroll={false}>
                  Projects
                </Link>
                <div className={styles.indicator}></div>
              </li>
            </Magnetic>
            <Magnetic>
              <li className={styles.el}>
                <Link href={"/projects"} scroll={false}>
                  Contact
                </Link>

                <div className={styles.indicator}></div>
              </li>
            </Magnetic>
            <Magnetic>
              <li className={styles.el}>
                <Link href={"/projects"} scroll={false}>
                  FR
                </Link>

                <div className={styles.indicator}></div>
              </li>
            </Magnetic>
          </div>
        </ul>
        <div className={styles.button}></div>
      </motion.nav>
    </>
  );
}

export default Header;
