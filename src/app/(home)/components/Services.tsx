// src/components/Services.tsx

import React from "react";
import styles from "./Services.module.scss";

// Define the data for our services to keep the JSX clean
const servicesData = [
  {
    letter: "A",
    title: "Brand Strategy",
    pills: [
      { text: "Visual identity", color: "blue", top: "30%", left: "20%" },
    ],
  },
  {
    letter: "B",
    title: "Web/App Design",
    pills: [{ text: "UX/UI Design", color: "purple", top: "65%", left: "35%" }],
  },
  {
    letter: "C",
    title: "Web Development",
    pills: [
      { text: "UX Strategy", color: "green", top: "-15%", left: "15%" },
      { text: "Digital Experiences", color: "teal", top: "60%", left: "55%" },
    ],
  },
  {
    letter: "D",
    title: "Social Media & Marketing",
    pills: [
      { text: "Content Strategy", color: "orange", top: "30%", left: "40%" },
    ],
  },
];

const Services: React.FC = () => {
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
