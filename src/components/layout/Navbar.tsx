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
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { easings } from "@/utils/easings";
import MenuOverlay from "./MenuOverlay";
import { usePreloader } from "@/context/PreloaderContext";
// ✨ UPDATE: Make sure this is pointing to your custom TransitionLink component
import Link from "@/components/TransitionLink";

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
  const pathname = usePathname();
  const [hasRevealed, setHasRevealed] = useState(false);

  // --- HOOK 1 & 2 (Unchanged) ---
  useEffect(() => {
    if (hasRevealed) return;
    const onNonHomePage = pathname !== "/";
    const preloaderIsDone = !isAppLoading;

    if (onNonHomePage || preloaderIsDone) {
      const delay = onNonHomePage ? 1000 : 200;
      const timer = setTimeout(() => {
        navControls.start("visible", {
          duration: 1.2,
          ease: easings.easeOut,
        });
        setHasRevealed(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isAppLoading, pathname, hasRevealed, navControls]);

  useEffect(() => {
    if (!hasRevealed) return;

    if (isHiddenOnScroll && !isMenuOpen) {
      navControls.start("hiddenOnScroll", {
        duration: 0.35,
        ease: easings.easeOut,
      });
    } else {
      navControls.start("visible", {
        duration: 0.5,
        ease: easings.easeOut,
      });
    }
  }, [isHiddenOnScroll, isMenuOpen, hasRevealed, navControls]);

  // --- ✨ NEW HOOK: The Definitive Fix ---
  // This effect watches for any change in the page's URL (pathname).
  // If a change is detected, it means we have navigated to a new page.
  // We then forcefully close the menu.
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]); // The dependency array ensures this runs ONLY when the pathname changes.

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
          <motion.div variants={itemVariants} className={styles.logo}>
            {/* This link does NOT need an onClick because the new hook will catch the navigation */}
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
            {/* This link also does NOT need an onClick */}
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
