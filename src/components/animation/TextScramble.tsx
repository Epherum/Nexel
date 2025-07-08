// src/components/animation/TextScramble.js
"use client";

import { CSSProperties, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
  words: string[];
  interval?: number;
  initialDelay?: number;
  className?: string;
  style?: CSSProperties;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const TextScramble = ({
  words,
  interval = 3000, // A slightly shorter interval can feel better
  initialDelay = 0, // An initial delay before anything happens
  className,
  style,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(words[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  // --- THE FIX ---
  // This ref will help us ignore the very first run of the animation effect.
  const isInitialMount = useRef(true);

  // This effect handles the interval for changing words. It's cleaner to handle
  // the initial delay and subsequent intervals in one place.
  useEffect(() => {
    // This function will set the next word index.
    const changeWord = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // Wait for the initial delay, then trigger the first word change.
    const firstChangeTimer = setTimeout(changeWord, initialDelay + interval);

    // After the first change, set up a regular interval for all subsequent changes.
    let subsequentChangesInterval: NodeJS.Timeout;
    const intervalSetupTimer = setTimeout(() => {
      subsequentChangesInterval = setInterval(changeWord, interval);
    }, initialDelay + interval);

    // Cleanup function to clear all timers
    return () => {
      clearTimeout(firstChangeTimer);
      clearTimeout(intervalSetupTimer);
      clearInterval(subsequentChangesInterval);
    };
  }, [words, interval, initialDelay]); // This effect should only run once

  // This effect handles ONLY the character scramble animation.
  useEffect(() => {
    // --- THE FIX ---
    // On the initial mount, the index is 0. We do nothing.
    // The ref prevents this effect from running until the index is first changed by the timer.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // This logic now only runs when `currentWordIndex` changes.
    const targetWord = words[currentWordIndex];
    let currentIteration = 0;
    const wordLength = targetWord.length;

    const animate = () => {
      const newText = Array.from({ length: wordLength })
        .map((_, i) => {
          if (i < currentIteration) {
            return targetWord[i];
          }
          // Use lowercase to match your words
          return CHARACTERS.toLowerCase()[
            Math.floor(Math.random() * CHARACTERS.length)
          ];
        })
        .join("");

      setDisplayText(newText);

      if (currentIteration < wordLength) {
        // Increase the scramble speed for a snappier feel
        currentIteration += 1 / 4;
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetWord); // Ensure the final word is perfect
      }
    };

    // Start the animation
    animate();

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [currentWordIndex, words]); // Dependency array is now simpler

  return (
    <motion.span
      className={className}
      style={style}
      // Using the text itself as a key can cause re-mounts.
      // The index is a more stable key for this animation style.
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
