// src/app/projects/evense/components/DesignProcessSection.tsx
"use client";
import React from "react";
import styles from "./DesignProcessSection.module.css";

const DesignProcessSection = () => {
  const processSteps = [
    {
      // ✨ Corrected spelling
      title: "Research and Information Gathering",
      text: "Comprehensive research and data collection, providing a solid informational foundation for the project.",
    },
    {
      // ✨ Corrected grammar
      title: "Brainstorming and Ideation",
      text: "Producing a diverse array of ideas through brainstorming, sketching, and conceptualizing.",
    },
    {
      title: "Prototyping and Concept Development",
      text: "Creation and refinement of prototypes and concepts, solidifying the project's design foundation.",
    },
    {
      title: "Testing and Feedback",
      // ✨ Reworded for clarity
      text: "Testing the design and collecting valuable feedback for future enhancements.",
    },
    {
      title: "Refinement and Production",
      // ✨ Reworded for clarity
      text: "The design was finalized, refined, and successfully transitioned into the production stage.",
    },
  ];

  return (
    <section className={styles.designProcess}>
      <div className={styles.container}>
        <div className={styles.textLeft}>
          <h2>Design Process</h2>
          <p>
            This section outlines the practical steps taken to create online
            game
          </p>
        </div>
        <div className={styles.textRight}>
          {processSteps.map((step, index) => (
            <div key={index} className={styles.row}>
              <p className={styles.number}>{index + 1}</p>
              <div className={styles.content}>
                <p className={styles.title}>{step.title}</p>
                <p className={styles.text}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
