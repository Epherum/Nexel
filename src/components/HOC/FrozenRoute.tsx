"use client";

import { useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
// CHANGE: Import from your new lenis utility
import { initializeScroll, destroyScroll } from "./smoothScroll";
import { usePathname } from "next/navigation";

const FrozenRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // CHANGE: Initialize Lenis on EVERY page load.
    // This ensures a consistent scroll experience and provides an instance
    // for the /about page to control.
    initializeScroll();

    // The cleanup function will be called when the component unmounts (on route change)
    return () => {
      destroyScroll();
    };
  }, [pathname]); // Rerun this effect on path change

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRoute;
