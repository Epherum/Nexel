// src/app/page.tsx

import Hero from "@/app/(home)/components/Hero";
import Services from "@/app/(home)/components/Services";
import HowWeDoIt from "@/app/(home)/components/HowWeDoIt";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import MethodologyAndPartners from "@/app/(home)/components/MethodologyAndPartners";
import styles from "./page.module.scss";

// Import Node.js modules to read files from the server
import fs from "fs";
import path from "path";

export default function Home() {
  // --- This logic runs on the server ---

  // 1. Get the full path to the logos directory
  const logosDirectory = path.join(process.cwd(), "public/static/nexel/logos");

  // 2. Read all the filenames in that directory
  const logoFilenames = fs.readdirSync(logosDirectory);

  // 3. Create the public URL paths that the <Image> component needs
  // e.g., 'google.svg' becomes '/static/nexel/logos/google.svg'
  const logoPaths = logoFilenames.map(
    (filename) => `/static/nexel/logos/${filename}`
  );

  // --- End of server-side logic ---

  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <HowWeDoIt />
      <ProjectsSection />
      {/* 4. Pass the generated logo paths as a prop */}
      <MethodologyAndPartners logoPaths={logoPaths} />
    </main>
  );
}
