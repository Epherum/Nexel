import React from "react";
import styles from "./modal.module.scss";
import circle from "/public/static/home/circle.svg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import image from "/public/static/thumbnails/placeholder-thumbnail.png";

function Modal({ active }: { active: boolean }) {
  const scaleAnimation = {
    initial: { scale: 0, x: "-10%", y: "-30%" },
    enter: {
      scale: 1,
      x: "-10%",
      y: "-30%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-10%",
      y: "-30%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  const modalContainer = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={styles.modal}
    >
      <div className={styles.modalContainer}>
        <div className={styles.top}>
          <img src={circle.src} alt="" />
          <p className={styles.title}>Behance</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={image.src} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
