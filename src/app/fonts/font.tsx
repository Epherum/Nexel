import localfont from "next/font/local";

export const Gilroy = localfont({
  src: [
    {
      path: "./gilroy-medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gilroy-mediumitalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./gilroy-semibold.woff2",
      weight: "600",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
});

export const Mazius = localfont({
  src: [
    {
      path: "./MAZIUSREVIEW20.09-Extraitalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "./MAZIUSREVIEW20.09-Italic.woff",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-mazius",
});
