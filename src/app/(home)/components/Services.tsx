"use client";

import React from "react";
import styles from "./Services.module.css"; // CHANGED: Import .css file
import ServiceItem from "@/components/animation/home/ServiceItem";

// Animation imports
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "@/components/animation/AnimatedWord";
import { easings } from "@/utils/easings";

// Variants for the "Our Services" H2 Title
const titleContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleWordVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: easings.easeOut },
  },
};

// Data for the services list
const servicesData = [
  {
    letter: "A",
    title: "Brand Strategy",
    pills: [{ text: "Visual identity", color: "blue", top: "55%", left: "6%" }],
  },
  {
    letter: "B",
    title: "Web/App Design",
    pills: [{ text: "UX/UI Design", color: "purple", top: "60%", left: "23%" }],
  },
  {
    letter: "C",
    title: "Web Development",
    pills: [
      { text: "UX Strategy", color: "green", top: "-32%", left: "1%" },
      { text: "Digital Experiences", color: "teal", top: "50%", left: "38%" },
    ],
  },
  {
    letter: "D",
    title: "Social Media & Marketing",
    pills: [
      { text: "Content Strategy", color: "orange", top: "-40%", left: "28%" },
    ],
  },
];

const Services = () => {
  const titleRef = useRef(null);

  const isTitleInView = useInView(titleRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  return (
    <section className={styles.servicesSection}>
      <motion.h2
        ref={titleRef}
        className={styles.sectionTitle}
        variants={titleContainerVariants}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
      >
        {"Our Services".split(" ").map((word, index) => (
          <AnimatedWord key={index} variants={titleWordVariants}>
            {word}
            {index < 1 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </motion.h2>

      <div className={styles.servicesList}>
        {servicesData.map((service) => (
          <ServiceItem key={service.letter} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
