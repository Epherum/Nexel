// src/app/about/page.tsx

import React from "react";
import AboutHero from "./components/AboutHero";
import styles from "./page.module.scss"; // You can create a simple scss file for this page

const AboutPage = () => {
  return (
    <main className={styles.main}>
      <AboutHero />
      {/* Other sections of the about page will go here */}
      <div style={{ height: "100vh", background: "#111" }}></div>{" "}
      {/* Spacer for scroll testing */}
    </main>
  );
};

export default AboutPage;
