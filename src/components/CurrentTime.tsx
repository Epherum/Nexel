// src/components/CurrentTime.tsx

"use client";

import { useState, useEffect } from "react";

// The IANA time zone name for France is "Europe/Paris"
const TIME_ZONE = "Europe/Paris";

// Options for formatting the time string (e.g., "11:12 PM")
const timeOptions: Intl.DateTimeFormatOptions = {
  timeZone: TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: true, // Use AM/PM format
};

const CurrentTime = ({ className }: { className?: string }) => {
  // 1. State to hold the formatted time string.
  // We initialize with a placeholder to prevent Next.js hydration errors.
  const [time, setTime] = useState("--:-- --");

  useEffect(() => {
    // 2. This function gets the current time and updates the state.
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString("en-US", timeOptions);
      setTime(currentTime);
    };

    // 3. Call it once immediately to set the initial time without waiting 1 second.
    updateTime();

    // 4. Set up an interval to update the time every second.
    const intervalId = setInterval(updateTime, 1000);

    // 5. Cleanup function: clear the interval when the component unmounts
    // to prevent memory leaks.
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array means this effect runs only once on mount.

  // Render the time inside a <p> tag, applying any passed className.
  return <p className={className}>{time}</p>;
};

export default CurrentTime;
