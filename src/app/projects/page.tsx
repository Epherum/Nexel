import { Metadata } from "next";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "@/components/layout/Footer";
import { ReactLenis } from "lenis/react";

export const metadata: Metadata = {
  title: "Our Work | Nexel",
  description:
    "Explore the portfolio of projects that define our standards and drive real impact for our clients.",
};

// The main function for the /projects route
export default function Page() {
  // This page's only job is to render our main component.
  return (
    <ReactLenis
      root
      options={{ smoothWheel: true, lerp: 0.06, wheelMultiplier: 1.3 }}
    >
      <ProjectsPage />
      <Footer />
    </ReactLenis>
  );
}
