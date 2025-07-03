//src/components/layout/MenuOverlay.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { easings } from "@/utils/easings";
import styles from "./MenuOverlay.module.css";

// --- Props Interface ---
interface MenuOverlayProps {
  onClose: () => void;
}

// --- Data for the menu items ---
const navLinks = [
  {
    title: "Work",
    href: "/projects",
    imgSrc: "/static/thumbnails/virginia-thumbnail.webp",
    alt: "Preview of work projects",
  },

  {
    title: "About Us",
    href: "/about",
    imgSrc: "/static/book-app/3.webp",
    alt: "Preview of journal entries",
  },
  {
    title: "Contact",
    href: "/contact",
    imgSrc: "/static/book-app/4.webp",
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

// --- Animation Variants ---
const menuVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
  },
  visible: { y: "0%", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

const contentContainerVariants: Variants = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.easeOut },
  },
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose }) => {
  return (
    <motion.div
      className={styles.menuOverlay}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className={styles.wrapper}>
        <motion.nav
          className={styles.navGrid}
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
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
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.footer
          className={styles.footer}
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
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
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
