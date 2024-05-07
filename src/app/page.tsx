"use client";
import { useEffect } from "react";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Projects from "./components/Home/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        // @ts-ignore
        lenisOptions: {
          lerp: 0.05,
          duration: 2,
          wheelMultiplier: 1.4,
          touchMultiplier: 2,
          easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        },
      });
    })();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
