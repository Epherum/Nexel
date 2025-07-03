//src/app/about/components/ScrollAnimatedCard.tsx
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
    style: React.CSSProperties;
    initialRotate: number;
    className: string; // <-- Add className to the type definition

    finalRotate: number;
  };
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

const ScrollAnimatedCard: React.FC<ScrollAnimatedCardProps> = ({
  card,
  index,
  totalCards,
  scrollYProgress,
}) => {
  // FIX: This is the new, robust timeline logic.
  // 1. We dedicate the first 80% of the scroll progress to animations.
  const animationTimelineEnd = 0.9;
  // 2. We define how long each card's animation should last on the timeline (e.g., 50% of the timeline).
  const animationDuration = 0.5;
  // 3. We calculate the range in which the animations can START.
  // This ensures the last animation can finish by our 'animationTimelineEnd' mark.
  const staggerRange = animationTimelineEnd - animationDuration;

  // 4. We map each card's start and end time to this new, compressed timeline.
  const animationStart = (index / (totalCards - 1)) * staggerRange;
  const animationEnd = animationStart + animationDuration;

  // The result: The last card's animation will finish when scrollYProgress hits 0.8.
  // The scroll from 0.8 to 1.0 will be the "pause" where the user scrolls but nothing moves.

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
      style={{ ...card.style, y, scale, rotate }}
      className={styles.card}
    >
      <div className={styles.imageContainer}>
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw" // Update sizes attribute for better performance
          style={{ objectFit: "contain" }}
          priority={index < 3}
        />
      </div>
    </motion.div>
  );
};

export default ScrollAnimatedCard;
