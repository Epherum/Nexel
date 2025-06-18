// src/components/Navbar.tsx

"use client"; // This is a Client Component

import { motion } from "framer-motion";
import Link from "next/link";
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
      <Link href="/" className={styles.logo}>
        nexel<span>.</span>
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
