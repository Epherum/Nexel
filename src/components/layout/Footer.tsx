"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { allProjects } from "@/data/allProjects";

const Footer = () => {
  const pathname = usePathname();

  // We now need two separate classes for independent control
  let wrapperThemeClass = "";
  let containerThemeClass = "";

  // Case 1: The main /projects index page
  if (pathname === "/projects") {
    // Wrapper stays default (dark), but the inner container becomes light.
    containerThemeClass = styles.containerThemeLight;
  }
  // Case 2: Individual project detail pages
  else {
    const currentProject = allProjects.find(
      (p) => pathname === `/projects/${p.slug}`
    );
    if (currentProject) {
      if (currentProject.type === "dynamic") {
        // Social media page: Wrapper becomes light, container stays default.
        wrapperThemeClass = styles.wrapperThemeLight;
      } else if (currentProject.type === "hardcoded") {
        // Hardcoded project page: Wrapper becomes dark, container stays default.
        wrapperThemeClass = styles.wrapperThemeDark;
      }
    }
  }

  // Case 3 (Default): For any other page (homepage, contact), both classes are empty.

  return (
    <footer className={`${styles.footerWrapper} ${wrapperThemeClass}`}>
      <div className={`${styles.footerContainer} ${containerThemeClass}`}>
        {/* --- Top Row: CTA and Up Next --- */}
        <div className={styles.topRow}>
          <div className={styles.ctaContainer}>
            <Link href="/contact" className={styles.talkButton}>
              Let&apos;s talk
            </Link>
            <Link
              href="/contact"
              className={styles.arrowButton}
              aria-label="Contact Us"
            >
              <FaArrowRight />
            </Link>
          </div>
          <div className={styles.upNextContainer}>
            <Link href="/projects">
              <span className={styles.upNextLabel}>UP NEXT</span>
              <span className={styles.upNextLink}>Projects</span>
            </Link>
          </div>
        </div>

        {/* --- Bottom Row: Logo, Copyright, and Socials --- */}
        <div className={styles.bottomRow}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/static/nexel/nexel-logo.svg"
              alt="Nexel Logo"
              width={90}
              height={25}
            />
          </Link>
          <p className={styles.copyright}>
            © 2023 Nexel Digital Studio. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/static/nexel/linkedin.svg"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/static/nexel/instagram.svg"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Image
                src="/static/nexel/whatsapp.svg"
                alt=""
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
