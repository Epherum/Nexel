// src/components/Services.tsx

import React from "react";
import styles from "./Services.module.scss";

// Define the data for our services to keep the JSX clean
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
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.servicesList}>
        {servicesData.map((service) => (
          <div key={service.letter} className={styles.serviceItem}>
            <span className={styles.letter}>{service.letter}</span>
            <div className={styles.content}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              {service.pills.map((pill) => (
                <div
                  key={pill.text}
                  className={`${styles.pill} ${styles[`pill--${pill.color}`]}`}
                  style={{
                    top: pill.top,
                    left: pill.left,
                    // You can also use 'right' if needed, e.g., right: pill.right
                  }}
                >
                  {pill.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
