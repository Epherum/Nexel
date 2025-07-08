// src/components/layout/Navbar.tsx

"use client";

import { useState } from "react";
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

// --- Animation Variants ---

// FIX: The scrollVariants object is now simplified. The transition logic is moved to the component props.
const scrollVariants: Variants = {
  visible: { y: "0%" },
  hidden: { y: "-110%" },
};

// For the LEFT & CENTER items (Logo, Menu)
const revealVariantsBlend: Variants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  hidden: {},
};

// For the RIGHT item (CTA) with a longer delay
const revealVariantsCTA: Variants = {
  visible: { transition: { delayChildren: 0.7 } }, // Starts after the first two
  hidden: {},
};

// For individual items
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (typeof previous === "number") {
      if (latest > previous && latest > 150) setIsHidden(true);
      else if (latest < previous) setIsHidden(false);
    }
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // FIX: Define the transition object once to be reused.
  const scrollTransition = { duration: 0.35, ease: easings.easeOut };

  return (
    <>
      {/* 
        CONTAINER 1: For BLEND-MODE elements (Logo & Menu)
      */}
      <motion.div
        className={`${styles.navbarBlendWrapper}`}
        variants={scrollVariants}
        animate={isHidden && !isMenuOpen ? "hidden" : "visible"}
        initial="visible"
        transition={scrollTransition} // FIX: Apply the transition here
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

      {/* 
        CONTAINER 2: For NORMAL elements (CTA Button)
      */}
      <motion.div
        className={styles.navbarCtaWrapper}
        variants={scrollVariants}
        animate={isHidden && !isMenuOpen ? "hidden" : "visible"}
        initial="visible"
        transition={scrollTransition} // FIX: Apply the transition here
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
