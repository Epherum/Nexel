// src/components/layout/Navbar.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { easings } from "@/utils/easings";

// --- Animation Variants ---

// 1. A "conductor" variant for the main nav to orchestrate the stagger
const navbarContainerVariants: Variants = {
  visible: {
    transition: {
      delayChildren: 0.5, // The 0.5s delay before the first item animates
      staggerChildren: 0.1, // Delay between each item (logo, menu, cta)
    },
  },
};

// 2. A "performer" variant for each individual item inside the nav
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

const Navbar = () => {
  // 3. State to control visibility based on scroll direction

  return (
    <motion.nav
      className={styles.navbar}
      // Animate the stagger on initial load
      variants={navbarContainerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.35, ease: easings.easeOut }}
    >
      {/* Each item is now a motion component using itemVariants */}
      <motion.div variants={itemVariants}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/static/nexel/nexel-logo.svg"
            alt="Nexel Logo"
            width={90}
            height={30}
            priority
          />
        </Link>
      </motion.div>

      <motion.div className={styles.menuIcon} variants={itemVariants}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href="/about">
          <button className={styles.ctaButton}>Get in Touch</button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
