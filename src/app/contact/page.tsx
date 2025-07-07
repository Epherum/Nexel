// src/app/contact/page.tsx
"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Contact.module.css";
import AnimatedWord from "@/components/animation/AnimatedWord";
import Footer from "@/components/layout/Footer";
import { easings } from "@/utils/easings";

// --- Data (Unchanged) ---
const services = [
  "Product design",
  "Website design",
  "Webflow development",
  "Support & growth",
];
const budgets = ["€ 15-20K", "€ 20-30K", "€ 30-40K", "€ 50K+"];

// --- Animation Variants ---
const headlineContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08, // Delay between each word animating in
    },
  },
};

// RENAMED for clarity: Variants for the individual words
const headlineWordVariants: Variants = {
  hidden: { y: "-110%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: easings.easeOut, delay: 0.1 },
  },
};

const staggerContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const ContactPage = () => {
  // --- Refs and In-View Hooks (Unchanged) ---
  const achievementsRef = useRef(null);
  const areAchievementsInView = useInView(achievementsRef, {
    once: true,
    margin: "0px 0px -150px 0px",
  });
  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, {
    once: true,
    margin: "0px 0px -150px 0px",
  });
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  });

  return (
    <main className={styles.contactPage}>
      <section className={styles.headlineSection}>
        {/* --- FIX IS HERE --- */}
        <motion.h1
          className={styles.headline}
          variants={headlineContainerVariants} // 1. Add container variants
          initial="hidden" // 2. Set initial state
          animate="visible" // 3. Trigger animation on page load
        >
          <AnimatedWord variants={headlineWordVariants}>
            Let's build
          </AnimatedWord>
          <AnimatedWord variants={headlineWordVariants}>something</AnimatedWord>
          <AnimatedWord
            className={styles.highlight}
            variants={headlineWordVariants}
          >
            great
          </AnimatedWord>
          <AnimatedWord variants={headlineWordVariants}>together</AnimatedWord>
        </motion.h1>
      </section>
      <div className={styles.contentWrapper}>
        <motion.section
          ref={achievementsRef}
          className={styles.achievementsGrid}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={areAchievementsInView ? "visible" : "hidden"}
        >
          {/* ...achievement items now wrapped with motion.div... */}
          <motion.div
            variants={fadeInUpVariants}
            className={styles.achievementItem}
          >
            <p className={styles.label}>Local time</p>
            <p className={styles.value}>11:12PM</p>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            className={styles.achievementItem}
          >
            <p className={styles.label}>Email</p>
            <a href="mailto:hello@example.com" className={styles.value}>
              Drop us a line
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          ref={introRef}
          className={styles.introSection}
          initial="hidden"
          animate={isIntroInView ? "visible" : "hidden"}
        >
          <motion.p className={styles.introText} variants={fadeInUpVariants}>
            Our form is a 24/7 gateway to creativity – always awake, just like
            inspiration. Drop us a line anytime, day or night, and let’s spark a
            conversation that could redefine your digital journey.
          </motion.p>
          <motion.div
            className={styles.floatingCircle}
            variants={circleVariants}
          >
            Or use
            <br />
            the form
          </motion.div>
        </motion.section>

        <motion.form
          ref={formRef}
          className={styles.contactForm}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
        >
          {/* ...form groups now wrapped with motion.fieldset... */}
          <motion.fieldset
            className={styles.formGroup}
            variants={fadeInUpVariants}
          >
            <legend className={styles.legend}>What are you looking for?</legend>
            <div className={styles.optionsContainer}>
              {services.map((service) => (
                <label key={service} className={styles.checkboxLabel}>
                  {service}
                  <input type="checkbox" className={styles.hiddenInput} />
                  <span className={styles.customCheckbox}></span>
                </label>
              ))}
            </div>
          </motion.fieldset>

          <motion.fieldset
            className={styles.formGroup}
            variants={fadeInUpVariants}
          >
            <legend className={styles.legend}>Tell us about yourself:</legend>
            <div className={styles.inputsContainer}>
              <input
                type="text"
                placeholder="Your name"
                className={styles.textInput}
              />
              <input
                type="text"
                placeholder="Company"
                className={styles.textInput}
              />
              <input
                type="email"
                placeholder="E-mail"
                className={styles.textInput}
              />
              <textarea
                placeholder="Project details"
                className={styles.textArea}
                rows={5}
              ></textarea>
            </div>
          </motion.fieldset>

          <motion.fieldset
            className={styles.formGroup}
            variants={fadeInUpVariants}
          >
            <legend className={styles.legend}>
              Ready to become a Rockstar?
            </legend>
            <button type="submit" className={styles.submitButton}>
              Let's do it!
            </button>
          </motion.fieldset>
        </motion.form>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
