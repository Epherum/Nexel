// src/components/MethodologyAndPartners.tsx

"use client"; // This component uses the Swiper library

import React from "react";
import Image from "next/image";
import styles from "./MethodologyAndPartners.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// --- Data for the component ---

const methodologySteps = [
  {
    step: 1,
    title: "Discovery & Alignment",
    description:
      "Getting to know the team, business, available resources, project objectives, and expectations for the implementation plan.",
    color: "purple",
  },
  {
    step: 2,
    title: "Strategy & Positioning",
    description:
      "Defining the brand's unique value, market positioning, target audience, and tone of voice to guide all creative and marketing efforts.",
    color: "green",
  },
  {
    step: 3,
    title: "Creative Direction",
    description:
      "Building the brand's visual identity and establishing key design elements for use across web, social media, and marketing channels.",
    color: "teal",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Designing and developing digital assets, from websites to interactive content, and aligning them with the brand strategy and visual guidelines.",
    color: "blue",
  },
  // You can easily add more steps here
];

// Create a dummy array for the logos. We'll generate 21 placeholders.
const partnerLogos = Array.from({ length: 21 }, (_, i) => ({ id: i + 1 }));

const MethodologyAndPartners = () => {
  return (
    // This is the outer wrapper for the section, providing the dark background and side margins
    <section className={styles.sectionWrapper}>
      {/* This is the new white container */}
      <div className={styles.whiteContainer}>
        {/* All previous content now goes inside this container */}
        <div className={styles.methodologyContainer}>
          <h2 className={styles.sectionTitle}>
            How we design and develop
            <br />a Business strategy & methodology
          </h2>
          <div className={styles.sliderWrapper}>
            <Swiper
              spaceBetween={20}
              slidesPerView={"auto"}
              className="methodology-swiper"
            >
              {methodologySteps.map((item) => (
                <SwiperSlide key={item.step} className={styles.slide}>
                  <div
                    className={`${styles.card} ${
                      styles[`card--${item.color}`]
                    }`}
                  >
                    <p className={styles.cardDescription}>{item.description}</p>
                    <div className={styles.cardStep}>
                      Step {item.step}: <br />
                      {item.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={styles.partnersContainer}>
          <h2 className={`${styles.sectionTitle} ${styles.borderBottom}`}>
            Partner and friends
          </h2>
          <div className={styles.partnersGrid}>
            {partnerLogos.map((logo) => (
              <div key={logo.id} className={styles.logoWrapper}>
                <Image
                  src="/static/nexel/nexel-logo.svg"
                  alt={`Partner logo ${logo.id}`}
                  width={100}
                  height={40}
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyAndPartners;
