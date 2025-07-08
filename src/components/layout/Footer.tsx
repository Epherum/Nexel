"use client";

import React, { useState, useEffect } from "react";
import Link from "@/components/HoverableLink";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { allProjects } from "@/data/allProjects";

const Footer = () => {
  const pathname = usePathname();

  const [nextUpLink, setNextUpLink] = useState({
    href: "/projects",
    title: "Projects",
  });

  useEffect(() => {
    if (pathname === "/") {
      setNextUpLink({
        href: "/projects",
        title: "Projects",
      });
    } else {
      const currentSlug = pathname.replace("/projects/", "");
      const availableProjects = allProjects.filter(
        (p) => p.slug !== currentSlug
      );

      if (availableProjects.length === 0) {
        setNextUpLink({
          href: "/projects",
          title: "Projects",
        });
        return;
      }

      const randomIndex = Math.floor(Math.random() * availableProjects.length);
      const randomProject = availableProjects[randomIndex];

      setNextUpLink({
        href: `/projects/${randomProject.slug}`,
        title: randomProject.title,
      });
    }
  }, [pathname]);

  let wrapperThemeClass = "";
  if (pathname.startsWith("/projects/branding")) {
    wrapperThemeClass = styles.wrapperThemeBranding;
  } else if (pathname.startsWith("/projects/social")) {
    wrapperThemeClass = styles.wrapperThemeSocials;
  }

  return (
    <footer className={`${styles.footerWrapper} ${wrapperThemeClass}`}>
      {/* --- START: Add conditional class for /contact page --- */}
      <div
        className={`${styles.footerContainer} ${
          pathname === "/contact" ? styles.contactLayout : ""
        }`}
      >
        {/* --- END: Add conditional class --- */}

        {pathname !== "/contact" && (
          <div className={styles.topRow}>
            <div className={styles.ctaContainer}>
              <Link href="/contact" className={styles.talkButton}>
                Let's talk
              </Link>
              <Link
                href="/contact"
                className={styles.arrowButton}
                aria-label="Contact Us"
              >
                <FaArrowRight />
              </Link>
            </div>
            <div className={styles.upNextContainer}>
              <Link href={nextUpLink.href}>
                <span className={styles.upNextLabel}>UP NEXT</span>
                <span className={styles.upNextLink}>{nextUpLink.title}</span>
              </Link>
            </div>
          </div>
        )}

        <div className={styles.bottomRow}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/static/nexel/nexel-logo.svg"
              alt="Nexel Logo"
              width={90}
              height={25}
            />
          </Link>
          <p className={styles.copyright}>
            © 2023 Nexel Digital Studio. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/static/icons/linkedin.svg"
                alt=""
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/static/icons/instagram.svg"
                alt=""
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
