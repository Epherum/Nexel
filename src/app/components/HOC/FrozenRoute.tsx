"use client";

import { useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  useEffect(() => {
    window.scrollTo(0, 0);
    // (async () => {
    //   const LocomotiveScroll = (await import("locomotive-scroll")).default;
    //   const locomotiveScroll = new LocomotiveScroll({
    //     // // @ts-ignore
    //     // lenisOptions: {
    //     //   lerp: 0.08,
    //     //   wheelMultiplier: 1.1,
    //     // },
    //   });
    // })();
  }, []);

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default FrozenRoute;
