"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { easings } from "@/utils/easings";
import MenuOverlay from "./MenuOverlay"; // Import the new component

// --- Animation Variants (Unchanged) ---
const navbarContainerVariants: Variants = {
  visible: { transition: { delayChildren: 0.5, staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={styles.navbar}
        variants={navbarContainerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.35, ease: easings.easeOut }}
      >
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

        {/* Updated menu icon with onClick handler */}
        <motion.div
          className={`${styles.menuIcon} ${isMenuOpen ? styles.isOpen : ""}`}
          variants={itemVariants}
          onClick={toggleMenu}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="/about">
            <button className={styles.ctaButton}>Get in Touch</button>
          </Link>
        </motion.div>
      </motion.nav>

      {/* AnimatePresence handles the enter and exit animations */}
      <AnimatePresence>
        {isMenuOpen && <MenuOverlay onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
