// src/components/layout/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useScroll,
  useMotionValueEvent,
  useAnimationControls,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { easings } from "@/utils/easings";
import MenuOverlay from "./MenuOverlay";
import { usePreloader } from "@/context/PreloaderContext";

// --- Animation Variants (Unchanged) ---
const wrapperVariants: Variants = {
  visible: { y: "0%" },
  hiddenInitial: { y: "-110%" },
  hiddenOnScroll: { y: "-110%" },
};
const revealVariantsBlend: Variants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  hidden: {},
};
const revealVariantsCTA: Variants = {
  visible: { transition: { delayChildren: 0.7 } },
  hidden: {},
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
  const [isHiddenOnScroll, setIsHiddenOnScroll] = useState(false);
  const { scrollY } = useScroll();
  const { isAppLoading } = usePreloader();
  const navControls = useAnimationControls();

  // ✨ --- THIS IS THE NEW HOOK --- ✨
  // This effect handles the case where there is NO preloader (e.g., refreshing a non-home page).
  useEffect(() => {
    // If the app is NOT loading when the component first mounts...
    if (!isAppLoading) {
      // ...it means there's no preloader to wait for.
      // So, we trigger the animation manually after a short delay.
      const timer = setTimeout(() => {
        navControls.start("visible", {
          duration: 1.2,
          ease: easings.easeOut,
          delay: 0.2, // This delay can be adjusted
        });
      }, 1000); // 1-second delay before the animation starts

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, []); // The empty array [] ensures this effect runs ONLY ONCE when the component mounts.

  // This is your existing "brain" useEffect. It continues to work perfectly.
  // When the preloader finishes, isAppLoading becomes false, and this effect will take over.
  useEffect(() => {
    if (!isAppLoading) {
      if (isHiddenOnScroll && !isMenuOpen) {
        navControls.start("hiddenOnScroll", {
          duration: 0.35,
          ease: easings.easeOut,
        });
      } else {
        navControls.start("visible", {
          duration: 1.2,
          ease: easings.easeOut,
          delay: 0.2,
        });
      }
    }
  }, [isAppLoading, isHiddenOnScroll, isMenuOpen, navControls]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (typeof previous === "number" && latest > 150) {
      setIsHiddenOnScroll(latest > previous);
    } else {
      setIsHiddenOnScroll(false);
    }
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* CONTAINER 1: For BLEND-MODE elements (Logo & Menu) */}
      <motion.div
        className={styles.navbarBlendWrapper}
        variants={wrapperVariants}
        initial="hiddenInitial"
        animate={navControls}
      >
        <motion.nav
          className={styles.navbarContent}
          variants={revealVariantsBlend}
          initial="hidden"
          animate="visible"
        >
          {/* Logo (Left) */}
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

          {/* Menu Icon (Center) */}
          <motion.div
            className={styles.menuIconContainer}
            variants={itemVariants}
          >
            <div
              className={`${styles.menuIcon} ${
                isMenuOpen ? styles.isOpen : ""
              }`}
              onClick={toggleMenu}
            >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* CONTAINER 2: For NORMAL elements (CTA Button) */}
      <motion.div
        className={styles.navbarCtaWrapper}
        variants={wrapperVariants}
        initial="hiddenInitial"
        animate={navControls}
      >
        <motion.div
          className={styles.ctaButtonContainer}
          variants={revealVariantsCTA}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <button className={styles.ctaButton}>Get in Touch</button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && <MenuOverlay onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
