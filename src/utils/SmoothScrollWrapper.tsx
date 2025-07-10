// src/components/layout/SmoothScrollWrapper.tsx
"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { LenisProvider } from "@/context/LenisContext"; // ✨ 1. Import the provider

// Internal component for scroll-to-top logic (unchanged)
function ScrollToTop() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

// ✨ 2. New internal component to provide the context value
// This MUST be a child of ReactLenis to use the useLenis hook.
function LenisContextProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  // useMemo ensures the context value object is stable
  const value = useMemo(
    () => ({
      // Provide dummy functions if lenis is not yet available
      start: () => lenis?.start(),
      stop: () => lenis?.stop(),
    }),
    [lenis]
  );

  return <LenisProvider value={value}>{children}</LenisProvider>;
}

// ✨ 3. The main wrapper now includes the new provider component
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
      <ScrollToTop />
      {/* This component will get the lenis instance and provide it to its children */}
      <LenisContextProvider>{children}</LenisContextProvider>
    </ReactLenis>
  );
}
