"use client";
import React from "react";
import styles from "./mestiri.module.scss";
import Footer from "@/app/components/Footer/Footer";
import { useRef } from "react";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "/public/static/mestiri/1.webp";
import image2 from "/public/static/mestiri/2.webp";
import image3 from "/public/static/mestiri/3.webp";
import image4 from "/public/static/mestiri/4.webp";
import image5 from "/public/static/mestiri/5.webp";
import image6 from "/public/static/mestiri/6.webp";
import image7 from "/public/static/mestiri/7.webp";
import image8 from "/public/static/mestiri/8.webp";
import image9 from "/public/static/mestiri/9.webp";
import image10 from "/public/static/mestiri/10.webp";
import image11 from "/public/static/mestiri/11.webp";
import image12 from "/public/static/mestiri/12.webp";
import image13 from "/public/static/mestiri/13.webp";
import image14 from "/public/static/mestiri/14.webp";
import image15 from "/public/static/mestiri/15.webp";
import image16 from "/public/static/mestiri/16.webp";
import image17 from "/public/static/mestiri/17.webp";
import image18 from "/public/static/mestiri/18.webp";
import hero from "/public/static/mestiri/hero.webp";
import socialMedia from "/public/static/mestiri/socialMedia.webp";

function page() {
  const sectionRef = useRef(null);

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 100vh", "end 0vh"],
  });

  const scale = useTransform(sectionScrollYProgress, [0, 0.9], [1, 0.85]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionMiddle, setSectionMiddle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // @ts-ignore
      const sectionOffsetTop = sectionRef.current.offsetTop;
      const sectionMiddle =
        // @ts-ignore i love typescript
        sectionOffsetTop + sectionRef.current.offsetHeight / 2;
      setScrollPosition(scrollPosition);
      setSectionMiddle(sectionMiddle);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > sectionMiddle) {
      document.body.style.background = "#18181b";
    } else {
      document.body.style.background = "white";
    }
    return () => {
      document.body.style.background = "white";
    };
  }, [scrollPosition, sectionRef]);

  const firstShowcaseImages = [image1, image2, image3, image4, image5, image6];

  const secondShowcaseImages = [image7, image8];

  const thirdShowcaseImages = [
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];

  return (
    <>
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          data-scroll
          data-scroll-speed="-0.1"
          src={hero}
          alt="hero"
          priority
        />
        <Image className={styles.heroLogo} src={socialMedia} alt="logo" />
      </section>

      {/* First Showcase */}
      <section className={styles.firstShowcase}>
        {firstShowcaseImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Image src={src} alt="pic" />
          </motion.div>
        ))}
      </section>

      {/* Second Showcase */}
      <section className={styles.secondShowcase}>
        {secondShowcaseImages.map((src, index) => (
          <div className={styles.imageContainer}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Image src={src} alt="yes" data-scroll data-scroll-speed="-0.1" />
            </motion.div>
          </div>
        ))}
      </section>

      {/* Third Showcase */}
      <section className={styles.firstShowcase}>
        {thirdShowcaseImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Image src={src} alt="yes" />
          </motion.div>
        ))}
      </section>

      <motion.section
        style={{ scale }}
        ref={sectionRef}
        className={styles.last}
      >
        <Image src={image18} alt="last" />
      </motion.section>

      <Footer />
    </>
  );
}

export default page;
