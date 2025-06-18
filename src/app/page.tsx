// src/app/page.tsx

import Hero from "@/app/components/NexelHome/Hero";
import Services from "@/app/components/NexelHome/Services";
import HowWeDoIt from "@/app/components/NexelHome/HowWeDoIt";
import ProjectsSection from "@/app/components/NexelHome/ProjectsSection";
import MethodologyAndPartners from "@/app/components/NexelHome/MethodologyAndPartners";
import Footer from "@/app/components/layout/Footer"; // 1. Import the Footer component
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <HowWeDoIt />
      <ProjectsSection />
      <MethodologyAndPartners />
      {/* <Footer /> */}
    </main>
  );
}
