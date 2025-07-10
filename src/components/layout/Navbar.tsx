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
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✨ 1. Import usePathname
import styles from "./Navbar.module.css";
import { easings } from "@/utils/easings";
import MenuOverlay from "./MenuOverlay";
import { usePreloader } from "@/context/PreloaderContext";
import Link from "@/components/TransitionLink";

// --- Animation Variants (Unchanged) ---
const wrapperVariants: Variants = {
  visible: { y: "0%" },
  hiddenInitial: { y: "-110%" },
  hiddenOnScroll: { y: "-110%" },
};
// ... (other variants are also unchanged)
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
  const pathname = usePathname(); // ✨ 2. Get the current route

  // ✨ 3. Add a state to track if the initial reveal has happened
  const [hasRevealed, setHasRevealed] = useState(false);

  // --- HOOK 1: Handles the INITIAL REVEAL from all scenarios ---
  useEffect(() => {
    // If we've already run the reveal animation, do nothing.
    if (hasRevealed) return;

    const onNonHomePage = pathname !== "/";
    const preloaderIsDone = !isAppLoading;

    // Trigger condition:
    // 1. We are on a non-home page (so we don't wait for a preloader).
    // OR
    // 2. The preloader on the homepage has just finished.
    if (onNonHomePage || preloaderIsDone) {
      // Use a longer delay for non-home page refreshes.
      const delay = onNonHomePage ? 1000 : 200; // 1s for refresh, 0.2s after preloader

      const timer = setTimeout(() => {
        navControls.start("visible", {
          duration: 1.2,
          ease: easings.easeOut,
        });
        setHasRevealed(true); // "Hand off" control to the next hook
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isAppLoading, pathname, hasRevealed, navControls]);

  // --- HOOK 2: Handles ONGOING interactions (scrolling, menu) AFTER initial reveal ---
  useEffect(() => {
    // Guard clause: Do not run this logic until the initial reveal is complete.
    if (!hasRevealed) return;

    if (isHiddenOnScroll && !isMenuOpen) {
      navControls.start("hiddenOnScroll", {
        duration: 0.35,
        ease: easings.easeOut,
      });
    } else {
      // Use a faster animation when revealing on scroll-up
      navControls.start("visible", {
        duration: 0.5,
        ease: easings.easeOut,
      });
    }
  }, [isHiddenOnScroll, isMenuOpen, hasRevealed, navControls]);

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
      {/* The rest of your JSX is completely unchanged */}
      <motion.div
        className={styles.navbarBlendWrapper}
        variants={wrapperVariants}
        initial="hiddenInitial"
        animate={navControls}
      >
        {/* ... (Navbar content) ... */}
        <motion.nav
          className={styles.navbarContent}
          variants={revealVariantsBlend}
          initial="hidden"
          animate="visible"
        >
          {/* Logo (Left) */}
          <motion.div variants={itemVariants} className={styles.logo}>
            <Link href="/">
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
