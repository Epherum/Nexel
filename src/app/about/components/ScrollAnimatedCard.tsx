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
    zIndex: { mobile: number; desktop: number };
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
  const currentPosition = isDesktop
    ? card.positions.desktop
    : card.positions.mobile;
  const currentInitialRotate = isDesktop
    ? card.initialRotate.desktop
    : card.initialRotate.mobile;
  const currentFinalRotate = isDesktop
    ? card.finalRotate.desktop
    : card.finalRotate.mobile;
  const currentZIndex = isDesktop ? card.zIndex.desktop : card.zIndex.mobile;

  // --- UPDATED ANIMATION LOGIC ---
  // We dedicate 80% of the total scroll progress to animating all the cards sequentially.
  const totalAnimationTimeline = 0.8;

  // We calculate how much of the scroll progress each card's animation will take.
  // For example, with 6 cards, each animation will take up 0.8 / 6 = ~13.3% of the scroll.
  const animationDurationPerCard = totalAnimationTimeline / totalCards;

  // We determine the start and end point for this specific card's animation.
  // The first card (index 0) starts at 0.0 and ends at 0.133.
  // The second card (index 1) starts at 0.133 and ends at 0.266, and so on.
  const animationStart = index * animationDurationPerCard;
  const animationEnd = animationStart + animationDurationPerCard;
  // --- END OF UPDATED LOGIC ---

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
        zIndex: currentZIndex,
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
