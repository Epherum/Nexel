// src/app/HomePageClient.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Hero from "@/app/(home)/components/Hero";
import Services from "@/app/(home)/components/Services";
import HowWeDoIt from "@/app/(home)/components/HowWeDoIt";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import MethodologyAndPartners from "@/app/(home)/components/MethodologyAndPartners";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/animation/Preloader/Preloader"; // Adjust path if needed

export default function HomePageClient({ logoPaths }: { logoPaths: string[] }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This logic runs once on the client to decide if the preloader should show.
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
      const navType = navEntries[0].type;
      const preloaderHasRun =
        sessionStorage.getItem("hasPreloaderRun") === "true";

      if (navType === "reload") {
        // Always show preloader on refresh, and clear the flag.
        sessionStorage.removeItem("hasPreloaderRun");
      } else if (preloaderHasRun) {
        // If returning to the page (not a refresh) and flag is set, skip preloader.
        setIsLoading(false);
      }
    } else {
      // Fallback for older browsers
      if (sessionStorage.getItem("hasPreloaderRun") === "true") {
        setIsLoading(false);
      }
    }
  }, []);

  // Use useCallback to give the function a stable identity across renders.
  const handlePreloadComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem("hasPreloaderRun", "true");
  }, []);

  return (
    <main>
      {/* Conditionally render the Preloader */}
      {isLoading && <Preloader onComplete={handlePreloadComplete} />}

      {/* Always render the Hero, but pass it the loading state to coordinate animations */}
      <Hero isPreloading={isLoading} />

      <Services />
      <HowWeDoIt />
      <ProjectsSection />
      <MethodologyAndPartners logoPaths={logoPaths} />
      <Footer />
    </main>
  );
}
