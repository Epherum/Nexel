//src/app/template.tsx
"use client";

import { motion } from "framer-motion";

const variants = {
  initial: { x: 0, opacity: 1 },
  enter: {
    x: [0, -30, 0],
    opacity: [0, 0, 1],
    transition: {
      duration: 0.3,
      times: [0, 0, 1],
      ease: "easeOut",
    },
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="initial"
      exit="exit"
      animate="enter"
      transition={{ type: "linear", duration: 0.25 }}
      key="LandingPage"
    >
      {children}
    </motion.main>
  );
}
