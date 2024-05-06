"use client";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./projects.module.scss";
import Header from "../components/Projects/Header/Header";
import Footer from "../components/Footer/Footer";
import Work from "../components/Projects/Works/Works";

export default function Projects() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
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
