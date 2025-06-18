"use client"; // This is a Client Component

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // 1. Import the Image component
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const variants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  return (
    <motion.nav
      className={styles.navbar}
      variants={variants}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      {/* 2. Replace the text logo with the Image component */}
      <Link href="/" className={styles.logo}>
        <Image
          src="/static/nexel/nexel-logo.svg"
          alt="Nexel Logo"
          width={90} // Set a base width for your logo
          height={30} // Set a base height to maintain aspect ratio
          priority // Add priority if the logo is Above the Fold (LCP)
        />
      </Link>

      <div className={styles.menuIcon}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <Link href="/about">
        <button className={styles.ctaButton}>Get in Touch</button>
      </Link>
    </motion.nav>
  );
};

export default Navbar;
