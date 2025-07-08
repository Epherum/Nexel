"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
// --- START: Add navigation detection ---
import { usePathname } from "next/navigation";
// --- END: Add navigation detection ---

interface CursorContextType {
  isHoveringLink: boolean;
  setHoveringLink: (isHovering: boolean) => void;
  isCursorVisible: boolean;
  setCursorVisible: (isVisible: boolean) => void;
  isHoveringDraggable: boolean;
  setHoveringDraggable: (isHovering: boolean) => void;
  mouseDetected: boolean;
}

export const CursorContext = createContext<CursorContextType>({
  isHoveringLink: false,
  setHoveringLink: () => {},
  isCursorVisible: true,
  setCursorVisible: () => {},
  isHoveringDraggable: false,
  setHoveringDraggable: () => {},
  mouseDetected: false,
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHoveringLink, setHoveringLink] = useState(false);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [isHoveringDraggable, setHoveringDraggable] = useState(false);
  const [mouseDetected, setMouseDetected] = useState(false);

  // --- START: Add navigation detection ---
  const pathname = usePathname();

  useEffect(() => {
    // Reset cursor state on route change
    setHoveringLink(false);
    setHoveringDraggable(false);
  }, [pathname]); // This effect runs every time the pathname changes
  // --- END: Add navigation detection ---

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseDetected(true);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
