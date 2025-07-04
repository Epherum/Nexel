"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// This internal component is the key to the solution.
// It uses the `useLenis` hook to get the Lenis instance and
// the `usePathname` hook to detect route changes.
function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    // On path change, scroll to top
    // `immediate: true` is important to prevent a smooth scroll animation
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]); // Effect runs when pathname or lenis instance changes

  return null; // This component does not render anything
}

// This is the main wrapper component that you'll use in your layout.
export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{ smoothWheel: true, lerp: 0.06, wheelMultiplier: 1.3 }}
    >
      {/* 
        The ScrollToTop component MUST be a child of ReactLenis
        so that it can access the Lenis instance via the useLenis hook.
      */}
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
}
