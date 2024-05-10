"use client";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Menu from "../Menu/Menu";
import Magnetic from "../Magnetic/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { variants } from "./animations";
import { motion } from "framer-motion";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  const button = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            // @ts-ignore
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

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
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
          ref={button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </motion.nav>
      {/* {isActive && <Menu />} */}
    </>
  );
}

export default Header;
