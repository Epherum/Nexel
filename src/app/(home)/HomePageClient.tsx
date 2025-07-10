// src/app/HomePageClient.tsx
"use client";

import { useEffect, useCallback } from "react";
import Hero from "@/app/(home)/components/Hero";
import Services from "@/app/(home)/components/Services";
import HowWeDoIt from "@/app/(home)/components/HowWeDoIt";
import ProjectsSection from "@/app/(home)/components/ProjectsSection";
import MethodologyAndPartners from "@/app/(home)/components/MethodologyAndPartners";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/animation/Preloader/Preloader";
import { usePreloader } from "@/context/PreloaderContext"; // ✅ Import the hook

export default function HomePageClient({ logoPaths }: { logoPaths: string[] }) {
  // ✅ USE THE CONTEXT as the single source of truth.
  const { isAppLoading, setIsAppLoading } = usePreloader();

  // This useEffect decides if the preloader should run. It now directly controls the global state.
  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== "undefined") {
      const navEntries = performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];
      const preloaderHasRun =
        sessionStorage.getItem("hasPreloaderRun") === "true";

      let shouldShowPreloader = true;

      if (navEntries.length > 0) {
        const navType = navEntries[0].type;

        if (navType === "reload") {
          // Rule 2: On refresh, force preloader. Reset the session flag.
          sessionStorage.removeItem("hasPreloaderRun");
          shouldShowPreloader = true;
        } else if (preloaderHasRun) {
          // Rule 3: On navigation back, preloader has run, so skip it.
          shouldShowPreloader = false;
        }
        // Rule 1: On first visit, preloaderHasRun is false, so it will show.
      } else {
        // Fallback for browsers that might not support PerformanceNavigationTiming well.
        if (preloaderHasRun) {
          shouldShowPreloader = false;
        }
      }

      // If the decision is to skip the preloader, update the global state immediately.
      if (!shouldShowPreloader) {
        setIsAppLoading(false);
      }
    }
  }, [setIsAppLoading]); // Only depends on setIsAppLoading

  // This handler runs when the preloader animation is finished
  const handlePreloadComplete = useCallback(() => {
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
