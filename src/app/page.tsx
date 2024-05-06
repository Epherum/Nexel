"use client";
import { useEffect } from "react";
import Landing from "./components/Home/Landing/Landing";
import About from "./components/Home/About/About";
import Projects from "./components/Home/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
