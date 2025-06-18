// src/app/about/page.tsx

import React from "react";
import AboutHero from "./components/AboutHero";
import TeamSection from "./components/TeamSection";
import BeliefSection from "./components/BeliefSection";
import MethodologyAndPartners from "../(home)/components/MethodologyAndPartners";
import styles from "./page.module.scss"; // You can create a simple scss file for this page

const AboutPage = () => {
  return (
    <main className={styles.main}>
      <AboutHero />
      <BeliefSection />
      <MethodologyAndPartners />
      <TeamSection />
    </main>
  );
};

export default AboutPage;
