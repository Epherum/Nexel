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
    positions: {
      mobile: React.CSSProperties;
      desktop: React.CSSProperties;
    };
    initialRotate: { mobile: number; desktop: number };
    finalRotate: { mobile: number; desktop: number };
    zIndex: { mobile: number; desktop: number }; // <-- UPDATED PROP TYPE
  };
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
  isDesktop: boolean;
}

const ScrollAnimatedCard: React.FC<ScrollAnimatedCardProps> = ({
  card,
  index,
  totalCards,
  scrollYProgress,
  isDesktop,
}) => {
  // Select the correct values based on the isDesktop prop
  const currentPosition = isDesktop
    ? card.positions.desktop
    : card.positions.mobile;
  const currentInitialRotate = isDesktop
    ? card.initialRotate.desktop
    : card.initialRotate.mobile;
  const currentFinalRotate = isDesktop
    ? card.finalRotate.desktop
    : card.finalRotate.mobile;
  const currentZIndex = isDesktop ? card.zIndex.desktop : card.zIndex.mobile; // <-- ADDED for zIndex

  // Staggered animation timeline logic (remains the same)
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
    [currentInitialRotate, currentFinalRotate],
    { clamp: true, ease: customEase }
  );

  return (
    <motion.div
      style={{
        ...currentPosition,
        y,
        scale,
        rotate,
        zIndex: currentZIndex, // <-- USE THE DYNAMIC zIndex
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
