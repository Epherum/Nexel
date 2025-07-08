// src/app/fonts/font.tsx

import localfont from "next/font/local";

// --- ADD THE NEW CLOVERGROTESK FONT DEFINITION ---
export const Clovergrotesk = localfont({
  src: [
    {
      path: "./Clovergrotesk Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Clovergrotesk Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-clovergrotesk",
});
