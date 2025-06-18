// src/components/Footer.tsx

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

// Import the icons we need
import {
  FaArrowRight,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {/* --- Top Row: CTA and Up Next --- */}
        <div className={styles.topRow}>
          <div className={styles.ctaContainer}>
            <Link href="/contact" className={styles.talkButton}>
              Let's talk
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

        {/* --- Middle Row: Logo --- */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            nexel<span>.</span>
          </Link>
        </div>

        {/* --- Bottom Row: Copyright and Socials --- */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © 2022 Nexel Digital Studio. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
