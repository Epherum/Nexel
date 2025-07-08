// src/hooks/useMediaQuery.js
"use client";

import { useState, useEffect } from "react";

/**
 * A robust hook that returns true/false if a media query is met,
 * but returns `null` on the initial server render and client hydration
 * to prevent hydration mismatches.
 * @param {string} query The CSS media query string.
 * @returns {boolean | null}
 */
export const useMediaQuery = (query: string): boolean | null => {
  // Use `null` to represent the "undetermined" state
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after hydration
    const media = window.matchMedia(query);

    // Set the initial state
    setMatches(media.matches);

    // Listen for changes
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};
