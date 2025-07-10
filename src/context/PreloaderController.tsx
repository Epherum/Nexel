"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PreloaderProvider, usePreloader } from "./PreloaderContext";

const PreloaderLogic = ({ children }: { children: React.ReactNode }) => {
  const { setIsAppLoading } = usePreloader();
  const pathname = usePathname();

  // Use a ref to track if this is the first load of the component.
  // This is the key to differentiating a true page refresh from a client-side navigation.
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const preloaderHasRun =
      sessionStorage.getItem("hasPreloaderRun") === "true";

    // Check if this is the very first time this component's useEffect runs
    if (isInitialLoad.current) {
      // Mark the initial load as complete for all subsequent re-renders/navigations
      isInitialLoad.current = false;

      // If the first load is on the homepage, we must play the preloader.
      // This handles both a first-time visit AND a manual refresh on the homepage.
      if (pathname === "/") {
        sessionStorage.removeItem("hasPreloaderRun"); // Clear flag on any homepage refresh
        setIsAppLoading(true);
      } else {
        // If the first load is on a different page (e.g., /contact), skip the preloader.
        setIsAppLoading(false);
      }
    } else {
      // This block runs for all client-side navigations AFTER the initial load.
      // The preloader should only play if we are navigating to the homepage
      // AND the preloader has never been played before in this session.
      if (pathname === "/" && !preloaderHasRun) {
        setIsAppLoading(true);
      } else {
        // In all other navigation cases, skip the preloader.
        setIsAppLoading(false);
      }
    }
  }, [pathname, setIsAppLoading]);

  return <>{children}</>;
};

// This Provider component remains the same.
export const PreloaderController = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PreloaderProvider>
      <PreloaderLogic>{children}</PreloaderLogic>
    </PreloaderProvider>
  );
};
