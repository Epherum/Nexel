// src/app/page.tsx

import Hero from "@/app/(home)/components/Hero";
import Services from "@/app/(home)/components/Services";
import HowWeDoIt from "@/app/(home)/components/HowWeDoIt";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import MethodologyAndPartners from "@/app/(home)/components/MethodologyAndPartners";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <HowWeDoIt />
      <ProjectsSection />
      <MethodologyAndPartners />
    </main>
  );
}
