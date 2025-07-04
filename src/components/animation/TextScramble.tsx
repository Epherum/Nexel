"use client";

import { CSSProperties, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  words: string[];
  interval?: number;
  className?: string;
  style?: CSSProperties; // Added to accept style props
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const TextScramble = ({
  words,
  interval = 5000,
  className,
  style, // Destructure the new prop
}: TextScrambleProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordChangeInterval);
  }, [words, interval]);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    let currentIteration = 0;
    const wordLength = targetWord.length;

    const animate = () => {
      const newText = Array.from({ length: wordLength })
        .map((_, i) => {
          if (i < currentIteration) {
            return targetWord[i];
          }
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayText(newText);

      if (currentIteration < wordLength) {
        currentIteration += 1 / 8;
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [currentWordIndex, words]);

  return (
    <motion.span
      className={className}
      style={style} // Apply the style prop here to set min-width
      key={currentWordIndex}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};

export default TextScramble;
