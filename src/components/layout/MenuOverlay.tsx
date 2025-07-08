"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "@/components/HoverableLink";
import Image from "next/image";
import { easings } from "@/utils/easings";
import styles from "./MenuOverlay.module.css";

// --- Props Interface ---
interface MenuOverlayProps {
  onClose: () => void;
}

// --- Data (Unchanged) ---
const navLinks = [
  {
    title: "Work",
    href: "/projects",
    imgSrc: "/static/nexel/menu/work.webp",
    alt: "Preview of work projects",
  },
  {
    title: "About Us",
    href: "/about",
    imgSrc: "/static/nexel/menu/about.webp",
    alt: "Preview of our agency and team",
  },
  {
    title: "Contact",
    href: "/contact",
    imgSrc: "/static/nexel/menu/contact.webp",
    alt: "Preview of the contact page",
  },
];
const servicesLinks = [
  "Product Design",
  "Website Design",
  "Webflow Development",
];
const moreServicesLinks = ["Digital Strategy", "Support + Growth"];
const industriesLinks = ["Fintech", "AI", "SaaS"];

// --- NEW Animation Variants ---
const backdropVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const menuPanelVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: { duration: 0.6, ease: easings.gentleEaseOut },
  },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: easings.easeOut, delay: 0.1 },
  },
};

const contentContainerVariants: Variants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.easeOut },
  },
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  return (
    <>
      {/* 1. The Backdrop to darken the page */}
      <motion.div
        className={styles.backdrop}
        onClick={onClose}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      />

      {/* 2. The Menu Panel itself (60vh) */}
      <motion.div
        className={styles.menuPanel}
        variants={menuPanelVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className={styles.wrapper}
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 3. The Horizontally Scrolling Nav Links */}
          <div className={styles.navScroller}>
            <div className={styles.navList}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.title}
                  className={styles.navItem}
                  variants={itemVariants}
                >
                  <Link href={link.href} onClick={onClose}>
                    <p className={styles.navTitle}>{link.title}</p>
                    <div className={styles.imageContainer}>
                      <Image
                        src={link.imgSrc}
                        alt={link.alt}
                        fill
                        className={styles.previewImage}
                        sizes="(max-width: 768px) 70vw, 30vw"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4. The Footer Section */}
          <footer className={styles.footer}>
            <motion.div className={styles.footerColumn} variants={itemVariants}>
              <p className={styles.footerTitle}>Services</p>
              <div className={styles.footerLinks}>
                <span>{servicesLinks.join(" / ")} /</span>
                <span>{moreServicesLinks.join(" / ")}</span>
              </div>
            </motion.div>
            <motion.div className={styles.footerColumn} variants={itemVariants}>
              <p className={styles.footerTitle}>Industries</p>
              <div className={styles.footerLinks}>
                <span>{industriesLinks.join(" / ")}</span>
              </div>
            </motion.div>
          </footer>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MenuOverlay;
