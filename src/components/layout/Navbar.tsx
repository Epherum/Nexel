// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useScroll,
  useMotionValueEvent,
  useAnimationControls, // The key to solving this
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { easings } from "@/utils/easings";
import MenuOverlay from "./MenuOverlay";
import { usePreloader } from "@/context/PreloaderContext";

// --- Animation Variants ---

// ✅ 1. A SINGLE variant object that BOTH top-level containers will use.
const wrapperVariants: Variants = {
  // This is the state when the Navbar is visible on screen.
  visible: { y: "0%" },
  // This is the initial state, completely hidden before the preloader finishes.
  hiddenInitial: { y: "-110%" },
  // This is the state for when the user scrolls down.
  hiddenOnScroll: { y: "-110%" },
};

// Your original variants for staggering the items INSIDE the containers are PERFECT. Do not change them.
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

  // ✅ 2. Create ONE animation controller to command both containers.
  const navControls = useAnimationControls();

  // ✅ 3. This one useEffect is now the "brain" for the entire Navbar's state.
  useEffect(() => {
    // If the app is still loading (preloader is active), do nothing.
    // The initial state will be 'hiddenInitial'.
    if (!isAppLoading) {
      // If the user scrolls down, animate to the 'hiddenOnScroll' state.
      if (isHiddenOnScroll && !isMenuOpen) {
        navControls.start("hiddenOnScroll", {
          duration: 0.35,
          ease: easings.easeOut,
        });
      } else {
        // Otherwise, animate to the 'visible' state (initial reveal or scrolling back up).
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
      {/* 
        ✅ 4. This is YOUR original two-container structure. It is unchanged.
        We just link both containers to the SAME controller and variants.
      */}

      {/* CONTAINER 1: For BLEND-MODE elements (Logo & Menu) */}
      <motion.div
        className={styles.navbarBlendWrapper}
        variants={wrapperVariants}
        initial="hiddenInitial"
        animate={navControls} // <-- Linked to the controller
      >
        <motion.nav
          className={styles.navbarContent}
          variants={revealVariantsBlend}
          initial="hidden"
          animate="visible" // This will fire once the parent is 'visible'
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
        animate={navControls} // <-- Also linked to the SAME controller
      >
        <motion.div
          className={styles.ctaButtonContainer}
          variants={revealVariantsCTA}
          initial="hidden"
          animate="visible" // This will also fire once the parent is 'visible'
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
