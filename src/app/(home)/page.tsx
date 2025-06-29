// src/app/page.tsx
import Hero from "@/app/(home)/components/Hero";
import Services from "@/app/(home)/components/Services";
import HowWeDoIt from "@/app/(home)/components/HowWeDoIt";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import MethodologyAndPartners from "@/app/(home)/components/MethodologyAndPartners";
import styles from "./page.module.scss";
import Footer from "@/components/layout/Footer";
import { ReactLenis, useLenis } from "lenis/react";

import fs from "fs";
import path from "path";

export default function Home() {
  // 1. Get the full path to the logos directory
  const logosDirectory = path.join(process.cwd(), "public/static/nexel/logos");

  // 2. Read all the filenames in that directory
  const logoFilenames = fs.readdirSync(logosDirectory);

  // 3. Create the public URL paths that the <Image> component needs
  // e.g., 'google.svg' becomes '/static/nexel/logos/google.svg'
  const logoPaths = logoFilenames.map(
    (filename) => `/static/nexel/logos/${filename}`
  );
  return (
    <ReactLenis
      root
      options={{ smoothWheel: true, lerp: 0.06, wheelMultiplier: 1.3 }}
    >
      <main className={styles.main}>
        <Hero />
        <Services />
        <HowWeDoIt />
        <ProjectsSection />
        <MethodologyAndPartners logoPaths={logoPaths} />
        <Footer />
      </main>
    </ReactLenis>
  );
}
