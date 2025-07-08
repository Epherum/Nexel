// src/components/animation/TextScramble.js

"use client";

import { CSSProperties, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  words: string[];
  interval?: number;
  initialDelay?: number; // --- NEW: Prop to control the initial delay ---
  className?: string;
  style?: CSSProperties;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const TextScramble = ({
  words,
  interval = 5000,
  initialDelay = 0, // --- NEW: Default the delay to 0 ---
  className,
  style,
}: TextScrambleProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  // --- NEW: State to track if we should start scrambling ---
  const [isReadyToScramble, setIsReadyToScramble] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  // --- NEW: Effect to handle the initial delay ---
  // This runs only once on mount to set a timer.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReadyToScramble(true);
    }, initialDelay);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [initialDelay]); // Reruns only if the delay prop changes

  // --- UPDATED: Effect to start the word-changing interval ---
  // It now waits until the initial delay has passed.
  useEffect(() => {
    // Guard clause: Don't start the interval until we're ready.
    if (!isReadyToScramble) return;

    const wordChangeInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(wordChangeInterval);
  }, [isReadyToScramble, words, interval]); // Now depends on `isReadyToScramble`

  // --- UPDATED: Effect to run the scramble animation ---
  // This now also waits for the initial delay.
  useEffect(() => {
    // Guard clause: Don't run the scramble animation until we're ready.
    if (!isReadyToScramble) {
      // Before ready, ensure the display text is just the static first word.
      setDisplayText(words[0]);
      return;
    }

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
  }, [currentWordIndex, words, isReadyToScramble]); // Now depends on `isReadyToScramble`

  return (
    <motion.span
      className={className}
      style={style}
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
