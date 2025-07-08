"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface CursorContextType {
  isHoveringLink: boolean;
  setHoveringLink: (isHovering: boolean) => void;
  isCursorVisible: boolean;
  setCursorVisible: (isVisible: boolean) => void;
  // --- START: Add new state for "drag" and mouse detection ---
  isHoveringDraggable: boolean;
  setHoveringDraggable: (isHovering: boolean) => void;
  mouseDetected: boolean;
  // --- END: Add new state ---
}

export const CursorContext = createContext<CursorContextType>({
  isHoveringLink: false,
  setHoveringLink: () => {},
  isCursorVisible: true,
  setCursorVisible: () => {},
  // --- START: Add new defaults ---
  isHoveringDraggable: false,
  setHoveringDraggable: () => {},
  mouseDetected: false,
  // --- END: Add new defaults ---
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHoveringLink, setHoveringLink] = useState(false);
  const [isCursorVisible, setCursorVisible] = useState(true);
  // --- START: Manage new state ---
  const [isHoveringDraggable, setHoveringDraggable] = useState(false);
  const [mouseDetected, setMouseDetected] = useState(false);
  // --- END: Manage new state ---

  // --- START: Add effect to detect first mouse move ---
  useEffect(() => {
    const handleMouseMove = () => {
      setMouseDetected(true);
      // We only need to detect it once, so we can remove the listener.
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once on mount
  // --- END: Add effect ---

  return (
    <CursorContext.Provider
      value={{
        isHoveringLink,
        setHoveringLink,
        isCursorVisible,
        setCursorVisible,
        isHoveringDraggable,
        setHoveringDraggable,
        mouseDetected,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
