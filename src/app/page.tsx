"use client";
import Hero from "./components/Home/Hero/Hero";
import About from "./components/Home/About/About";
import Projects from "./components/Home/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
