// src/app/HomePageClient.tsx
"use client";

import { useEffect, useCallback } from "react";
import Hero from "@/app/(home)/components/Hero";
import Services from "@/app/(home)/components/Services";
import HowWeDoIt from "@/app/(home)/components/HowWeDoIt";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import MethodologyAndPartners from "@/app/(home)/components/MethodologyAndPartners";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/animation/preloader/Preloader";
import { usePreloader } from "@/context/PreloaderContext"; // ✅ Import the hook

export default function HomePageClient({ logoPaths }: { logoPaths: string[] }) {
  const { isAppLoading, setIsAppLoading } = usePreloader();

  // This handler runs when the preloader animation is finished
  const handlePreloadComplete = useCallback(() => {
    // --- START DEBUG LOGGING ---
    console.log(
      "%c[HomePageClient] Preloader animation complete! Setting 'hasPreloaderRun' to true.",
      "color: green; font-weight: bold;"
    );
    // --- END DEBUG LOGGING ---

    sessionStorage.setItem("hasPreloaderRun", "true");
    setIsAppLoading(false); // Signal the global app is ready.
  }, [setIsAppLoading]);
  return (
    <main>
      {/* 
        The Preloader's visibility is now tied directly to the global `isAppLoading` state.
        This ensures it's only rendered when the entire app is in a "loading" state.
        No need for `isDecisionMade` anymore.
      */}
      {isAppLoading && <Preloader onComplete={handlePreloadComplete} />}

      {/*
        The Hero's animation is also tied directly to the global `isAppLoading` state.
        This is much cleaner. When `isAppLoading` flips to `false`, the entrance
        animations for Hero and its children will trigger correctly.
      */}
      <Hero isPreloading={isAppLoading} />

      {/* The rest of the page components remain the same */}
      <Services />
      <HowWeDoIt />
      <ProjectsSection />
      <MethodologyAndPartners logoPaths={logoPaths} />
      <Footer />
    </main>
  );
}
