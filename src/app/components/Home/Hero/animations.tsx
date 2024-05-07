import { easeInOut, easeOut } from "framer-motion";

const delay = 0;

export const variants = {
  image: {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1 + delay, easeInOut },
    },
  },
  text: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1 + delay, easeInOut },
    },
  },
  heading: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2 + delay, easeInOut },
    },
  },
  graphic: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 + delay, easeInOut },
    },
  },
  socials: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4 + delay, easeInOut },
    },
  },
  buttons: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 + delay, easeOut },
    },
  },
  scroll: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.6 + delay, easeOut },
    },
  },
};
