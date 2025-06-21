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
      "Developing digital assets, from websites to interactive content, aligning them with the brand strategy and visual guidelines.",
    color: "blue",
  },
];

// NEW: Define the type for the props this component will receive
interface MethodologyAndPartnersProps {
  logoPaths: string[];
}

const MethodologyAndPartners = ({ logoPaths }: MethodologyAndPartnersProps) => {
  // Helper function to create a clean alt text from a file path
  const getLogoNameFromPath = (path: string) => {
    try {
      // Example: "/static/nexel/logos/some-company-logo.svg"
      const filename = path.split("/").pop() || "logo"; // -> "some-company-logo.svg"
      const name = filename.split(".")[0]; // -> "some-company-logo"
      return name.replace(/-/g, " "); // -> "some company logo"
    } catch {
      return "Partner logo"; // Fallback
    }
  };

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.whiteContainer}>
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
            Partners and friends
          </h2>
          <div className={styles.partnersGrid}>
            {/* Loop over the logoPaths prop from the server component */}
            {logoPaths.map((logoPath) => (
              <div key={logoPath} className={styles.logoWrapper}>
                <Image
                  src={logoPath}
                  alt={getLogoNameFromPath(logoPath)}
                  width={90} // Using slightly larger dimensions for clarity
                  height={40}
                  className={styles.partnerLogo}
                  // This style ensures logos fit within the box without stretching
                  style={{ objectFit: "contain" }}
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
