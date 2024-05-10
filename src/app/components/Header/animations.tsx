import { easeInOut, easeOut } from "framer-motion";

const delay = 0;

export const variants = {
  nav: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 + delay, easeInOut },
    },
  },
};
