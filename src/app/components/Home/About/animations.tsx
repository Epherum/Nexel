import { easeOut } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};

export const slideUp = {
  inital: {
    y: "100%",
  },
  open: (i: any) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.01 * i, easeOut },
  }),
  closed: {
    y: "100%",
  },
};
