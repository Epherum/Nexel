//src/components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  let wrapperThemeClass = "";

  // Check if the current URL path is for a branding or social project
  if (
    pathname.startsWith("/projects/branding/") ||
    pathname.startsWith("/projects/social/")
  ) {
    // If it is, we'll use the class that makes the wrapper white.
    // Based on your old CSS, let's create a clear new class or reuse an old one.
    // Let's call it wrapperThemeWhite for clarity.
    wrapperThemeClass = styles.wrapperThemeWhite;
  }

  // NOTE: Your old logic for '.containerThemeLight' on the /projects page
  // can be added back here if needed, but this solves the current request.

  return (
    <footer className={`${styles.footerWrapper} ${wrapperThemeClass}`}>
      <div className={styles.footerContainer}>
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
