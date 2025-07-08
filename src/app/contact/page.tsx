// src/app/contact/page.tsx

"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Contact.module.css";
// import AnimatedWord from "@/components/animation/AnimatedWord"; // Assuming AnimatedWord is in this file for now
import Footer from "@/components/layout/Footer";
import { easings } from "@/utils/easings";
import CurrentTime from "@/components/CurrentTime";

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
      staggerChildren: 0.08,
    },
  },
};

// FIX: Changed y from "-110%" to "110%" to animate UP from the bottom.
const headlineWordVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easings.easeOut },
  },
};

const AnimatedWord = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={styles.wordWrapper}>
    <motion.span
      variants={headlineWordVariants}
      className={`${styles.word} ${className || ""}`}
    >
      {children}
    </motion.span>
  </span>
);

// (The rest of the variants are unchanged)
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

  // FIX: Split the headline string into an array to map over it.
  const headlineText = "Let's build something great together".split(" ");

  return (
    <main className={styles.contactPage}>
      <section className={styles.headlineSection}>
        <motion.h1
          className={styles.headline}
          variants={headlineContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* FIX: Mapped over the words to apply animation to each one individually. */}
          {headlineText.map((word, index) => (
            <AnimatedWord
              key={index}
              className={word === "great" ? styles.highlight : ""}
            >
              {word}
            </AnimatedWord>
          ))}
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
          <motion.div
            variants={fadeInUpVariants}
            className={styles.achievementItem}
          >
            <p className={styles.label}>Local time (GMT+2)</p>
            {/* 
              HERE IS THE CHANGE:
              Replace the static <p> tag with your new CurrentTime component.
              Pass the same className to it so it keeps the correct styling.
            */}
            <CurrentTime className={styles.value} />
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
          {/* This paragraph will now be hidden on mobile via CSS */}
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

        {/* --- Form section is unchanged --- */}
        <motion.form
          ref={formRef}
          className={styles.contactForm}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
        >
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
