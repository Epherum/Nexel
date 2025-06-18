import React from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Import the Next.js Image component
import styles from "./Footer.module.scss";

// 2. We only need the arrow icon from react-icons now
import { FaArrowRight } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
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
              <FaArrowRight /> {/* This icon can remain for now */}
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
          {/* 3. BONUS: Replaced text logo with SVG for consistency */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/static/nexel/nexel-logo.svg"
              alt="Nexel Logo"
              width={90}
              height={25}
            />
          </Link>
        </div>

        {/* --- Bottom Row: Copyright and Socials --- */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © 2023 Nexel Digital Studio. All rights reserved.
          </p>
          <div className={styles.socials}>
            {/* 4. Replaced all social icons with Image components */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/static/nexel/linkedin.svg"
                alt="" // Alt is empty because aria-label provides context
                width={25}
                height={25}
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
                alt="" // Alt is empty because aria-label provides context
                width={25}
                height={25}
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
                alt="" // Alt is empty because aria-label provides context
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
