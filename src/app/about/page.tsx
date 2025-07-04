// src/app/about/page.tsx
import React from "react";
import AboutHero from "./components/AboutHero";
import TeamSection from "./components/TeamSection";
import BeliefSection from "./components/BeliefSection";
import MethodologyAndPartners from "../(home)/components/MethodologyAndPartners";
import AboutImage from "./components/AboutImage";
import Footer from "@/components/layout/Footer";

import fs from "fs";
import path from "path";

const AboutPage = () => {
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
    <main>
      <AboutHero />
      <AboutImage />
      <BeliefSection />
      <MethodologyAndPartners logoPaths={logoPaths} />

      <TeamSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
