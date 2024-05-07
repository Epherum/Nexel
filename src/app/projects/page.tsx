"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./projects.module.scss";
import Header from "../components/Projects/Title/Title";
import Footer from "../components/Footer/Footer";
import Work from "../components/Projects/Works/Works";

export default function Projects() {
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Work />
      <Footer />
    </>
  );
}
