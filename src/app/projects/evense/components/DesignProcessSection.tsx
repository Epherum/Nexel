// src/app/projects/evense/components/DesignProcessSection.tsx
"use client";
import React from "react";
import styles from "./DesignProcessSection.module.css";

const DesignProcessSection = () => {
  const processSteps = [
    {
      title: "Research and Infomation Gathering",
      text: "Comprehensive research and data collection, providing a solid informational foundation for the project.",
    },
    {
      title: "Brainstorming an Ideation",
      text: "Producing a diverse array of ideas through brainstorming, sketching, and conceptualizing.",
    },
    {
      title: "Prototyping and Concept Development",
      text: "Creation and refinement of prototypes and concepts, solidifying the project's design foundation.",
    },
    {
      title: "Testing and Feedback",
      text: "Testing of the design and collection of valuable feedback for future enhancements.",
    },
    {
      title: "Refinement and Production",
      text: "Our design was finalized and refined, successfully transitioning into the production stage.",
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
