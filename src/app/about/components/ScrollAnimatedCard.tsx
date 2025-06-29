"use client";

import { motion, useTransform, MotionValue, cubicBezier } from "framer-motion";
import Image from "next/image";
import styles from "./AboutHero.module.scss";
// Import your easings, which now includes our new gentle one
import { easings } from "@/utils/easings";

interface ScrollAnimatedCardProps {
  card: {
    id: number;
    src: string;
    alt: string;
    style: React.CSSProperties;
    color: string;
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
  const animationStart = index / totalCards;

  // PRIMARY FIX: Give the animation a much longer "runway" on the scroll track.
  // We change `1.5` to `3`. This is the most important change for smoothness.
  // You can increase this number even more (e.g., 4) for a slower, more deliberate feel.
  const animationEnd = (index + 3) / totalCards;

  // SECONDARY FIX: Use the new, gentler easing curve.
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

  return (
    <motion.div
      style={{ ...card.style, y, scale }}
      className={`${styles.card} ${card.color === "lime" ? styles.lime : ""}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 30vw, 25vw"
          style={{ objectFit: "cover" }}
          priority={index < 3}
        />
      </div>
    </motion.div>
  );
};

export default ScrollAnimatedCard;
