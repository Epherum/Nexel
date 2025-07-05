"use client";

import { motion, useTransform, MotionValue, cubicBezier } from "framer-motion";
import Image from "next/image";
import styles from "./AboutHero.module.css";
import { easings } from "@/utils/easings";

interface ScrollAnimatedCardProps {
  card: {
    id: number;
    src: string;
    alt: string;
    // UPDATED: Define the positions object shape
    positions: {
      mobile: React.CSSProperties;
      desktop: React.CSSProperties;
    };
    initialRotate: number;
    finalRotate: number;
    zIndex: number;
  };
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
  isDesktop: boolean; // <-- ADD THE NEW PROP
}

const ScrollAnimatedCard: React.FC<ScrollAnimatedCardProps> = ({
  card,
  index,
  totalCards,
  scrollYProgress,
  isDesktop, // <-- RECEIVE THE PROP
}) => {
  // Select the correct position styles based on the isDesktop prop
  const currentPosition = isDesktop
    ? card.positions.desktop
    : card.positions.mobile;

  const animationTimelineEnd = 0.9;
  const animationDuration = 0.5;
  const staggerRange = animationTimelineEnd - animationDuration;
  const animationStart = (index / (totalCards - 1)) * staggerRange;
  const animationEnd = animationStart + animationDuration;
  const customEase = cubicBezier(...easings.gentleEaseOut);

  const y = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    ["100vh", "0vh"],
    {
      clamp: true,
      ease: customEase,
    }
  );

  const scale = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [0.9, 1],
    {
      clamp: true,
      ease: customEase,
    }
  );

  const rotate = useTransform(
    scrollYProgress,
    [animationStart, animationEnd],
    [card.initialRotate, card.finalRotate],
    { clamp: true, ease: customEase }
  );

  return (
    <motion.div
      // UPDATED: Spread the selected currentPosition object
      style={{
        ...currentPosition,
        y,
        scale,
        rotate,
        zIndex: card.zIndex,
      }}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "contain" }}
          priority={index < 3}
        />
      </div>
    </motion.div>
  );
};

export default ScrollAnimatedCard;
