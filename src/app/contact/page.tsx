"use client";

import { motion, Variants, useInView } from "framer-motion";
import { useRef, useState, FormEvent, ChangeEvent, useEffect } from "react";
import styles from "./Contact.module.css";
import Footer from "@/components/layout/Footer";
import { easings } from "@/utils/easings";
import CurrentTime from "@/components/CurrentTime";

// NEW: Import the confetti library
import confetti from "canvas-confetti";

// --- Data ---
const services = [
  "Product design",
  "Website design",
  "Webflow development",
  "Support & growth",
];

// --- Animation Variants (Unchanged) ---
const headlineContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};
const headlineWordVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: easings.easeOut } },
};
const staggerContainerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
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

// --- AnimatedWord Component (Unchanged) ---
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

// --- Initial Form Data ---
const initialFormData = {
  name: "",
  company: "",
  email: "",
  projectDetails: "",
  budget: "",
  services: [] as string[],
};

// =================================================================
// Contact Page Component
// =================================================================
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

  // --- State Management for the Form ---
  const [formData, setFormData] = useState(initialFormData);
  const [formState, setFormState] = useState({
    isLoading: false,
    isSuccess: false,
    error: "",
  });

  // --- Reset success state after a delay ---
  useEffect(() => {
    if (formState.isSuccess) {
      const timer = setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false }));
      }, 3000); // Revert button text after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [formState.isSuccess]);

  // --- Handlers for Form Inputs ---
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentServices = prev.services;
      if (checked) {
        return { ...prev, services: [...currentServices, value] };
      } else {
        return {
          ...prev,
          services: currentServices.filter((s) => s !== value),
        };
      }
    });
  };

  // --- Handler for Form Submission ---
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ isLoading: true, isSuccess: false, error: "" });

    // Client-side validation for checkboxes
    if (formData.services.length === 0) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: "Please select at least one service you are looking for.",
      });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.error || "Failed to send message. Please try again later."
        );
      }

      // Success!
      setFormState({ isLoading: false, isSuccess: true, error: "" });
      setFormData(initialFormData); // Clear the form fields

      // NEW: Trigger the confetti!
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }, // fire from a bit above the middle of the screen
      });
    } catch (error: any) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: error.message,
      });
    }
  };

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
            <CurrentTime className={styles.value} />
          </motion.div>
          <motion.div
            variants={fadeInUpVariants}
            className={styles.achievementItem}
          >
            <p className={styles.label}>Email</p>
            <a
              href="mailto:contact@nexeldigitalstudio.com"
              className={styles.value}
            >
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

        {/* --- Form section with state and handlers --- */}
        <motion.form
          onSubmit={handleSubmit}
          ref={formRef}
          className={styles.contactForm}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
          noValidate
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
                  <input
                    type="checkbox"
                    className={styles.hiddenInput}
                    value={service}
                    onChange={handleCheckboxChange}
                    checked={formData.services.includes(service)}
                  />
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
                name="name"
                placeholder="Your name"
                className={styles.textInput}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                className={styles.textInput}
                value={formData.company}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className={styles.textInput}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                placeholder="Project details"
                name="projectDetails"
                className={styles.textArea}
                rows={5}
                value={formData.projectDetails}
                onChange={handleInputChange}
                required
              ></textarea>
              <input
                type="text"
                name="budget"
                placeholder="Your Budget (Optional)"
                className={styles.textInput}
                value={formData.budget}
                onChange={handleInputChange}
              />
            </div>
          </motion.fieldset>

          <motion.fieldset
            className={styles.formGroup}
            variants={fadeInUpVariants}
          >
            <legend className={styles.legend}>
              Ready to become a Rockstar?
            </legend>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={formState.isLoading}
            >
              {formState.isLoading
                ? "Sending..."
                : formState.isSuccess
                  ? "Sent! Thank You ✨"
                  : "Let's do it!"}
            </button>
            {formState.error && (
              <p className={styles.errorMessage}>{formState.error}</p>
            )}
          </motion.fieldset>
        </motion.form>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
