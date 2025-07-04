"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { easings } from "@/utils/easings";
import MenuOverlay from "./MenuOverlay";
import { usePathname } from "next/navigation";

// --- Animation Variants ---

// 1. Variants for the OUTER wrapper: Handles showing and hiding on scroll.
const scrollVariants: Variants = {
  visible: {
    y: "0%",
    transition: {
      duration: 0.35,
      ease: easings.easeOut,
    },
  },
  hidden: {
    y: "-110%", // Pushes it completely off-screen
    transition: {
      duration: 0.35,
      ease: easings.easeOut,
    },
  },
};

// 2. Variants for the INNER nav: Handles the one-time initial stagger animation.
const revealVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  hidden: {}, // No initial state needed for the container itself
};

// 3. Variants for the individual items: The fade-in-from-left effect.
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
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Hide/Show Navbar on Scroll Logic (Unchanged)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (typeof previous === "number") {
      if (latest > previous && latest > 150) {
        setIsHidden(true);
      } else if (latest < previous) {
        setIsHidden(false);
      }
    }
  });

  // Lock Body Scroll When Menu is Open (Unchanged)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let navThemeClass = "";
  if (
    pathname.startsWith("/projects/branding/") ||
    pathname.startsWith("/projects/social/")
  ) {
    navThemeClass = styles.themeLight;
  }

  return (
    <>
      {/* 
        This is the outer wrapper. It is responsible ONLY for the show/hide animation on scroll.
        It has the fixed positioning and will move up and down.
      */}
      <motion.div
        className={`${styles.navbarWrapper} ${navThemeClass}`}
        variants={scrollVariants}
        animate={isHidden && !isMenuOpen ? "hidden" : "visible"}
        initial="visible" // Start visible, don't animate on initial load
      >
        {/* 
          This is the inner nav. It is responsible ONLY for the one-time reveal
          animation of its children when the page first loads.
        */}
        <motion.nav
          className={styles.navbarContent}
          variants={revealVariants}
          initial="hidden"
          animate="visible"
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

          <motion.div
            className={`${styles.menuIcon} ${isMenuOpen ? styles.isOpen : ""}`}
            variants={itemVariants}
            onClick={toggleMenu}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </motion.div>

          <motion.div
            className={styles.ctaButtonContainer}
            variants={itemVariants}
          >
            <Link href="/old-hero">
              <button className={styles.ctaButton}>Get in Touch</button>
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && <MenuOverlay onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
