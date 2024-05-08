"use client";

import styles from "./projects.module.scss";
import Header from "../components/Projects/Title/Title";
import Footer from "../components/Footer/Footer";
import Work from "../components/Projects/Works/Works";
import { useEffect } from "react";

export default function Projects() {
  return (
    <>
      <Header />
      <Work />
      <Footer />
    </>
  );
}
