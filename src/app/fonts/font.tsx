import localfont from "next/font/local";

export const Gilroy = localfont({
  src: [
    {
      path: "./gilroy-medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gilroy-Light.ttf",
      weight: "300",
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
  src: "./MAZIUS_REVIEW_20.09_Extra_italic_400.otf",

  display: "swap",
  variable: "--font-mazius",
});
