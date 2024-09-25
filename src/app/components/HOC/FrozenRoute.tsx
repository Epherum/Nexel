"use client";

import { useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { initializeScroll, destroyScroll } from "./smoothScroll"; // Import the scroll manager

const FrozenRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  useEffect(() => {
    //it doesnt work in dev mode but it works in build
    window.scrollTo(0, 0);

    const setupScroll = async () => {
      await initializeScroll({
        lenisOptions: {
          lerp: 0.1,
          wheelMultiplier: 1.1,
        },
      });
    };

    setupScroll();

    return () => {
      destroyScroll(); // Clean up scroll instance on unmount
    };
  }, []);

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRoute;
