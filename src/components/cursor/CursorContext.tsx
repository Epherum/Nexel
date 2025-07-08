"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

interface CursorContextType {
  isHoveringLink: boolean;
  setHoveringLink: (isHovering: boolean) => void;
  isCursorVisible: boolean;
  setCursorVisible: (isVisible: boolean) => void;
  isHoveringDraggable: boolean;
  setHoveringDraggable: (isHovering: boolean) => void;
  // --- REMOVED --- mouseDetected: boolean;
}

export const CursorContext = createContext<CursorContextType>({
  isHoveringLink: false,
  setHoveringLink: () => {},
  isCursorVisible: true,
  setCursorVisible: () => {},
  isHoveringDraggable: false,
  setHoveringDraggable: () => {},
  // --- REMOVED --- mouseDetected: false,
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHoveringLink, setHoveringLink] = useState(false);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [isHoveringDraggable, setHoveringDraggable] = useState(false);
  // --- REMOVED --- const [mouseDetected, setMouseDetected] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setHoveringLink(false);
    setHoveringDraggable(false);
  }, [pathname]);

  // --- REMOVED --- The entire useEffect for detecting mousemove is no longer necessary.

  return (
    <CursorContext.Provider
      value={{
        isHoveringLink,
        setHoveringLink,
        isCursorVisible,
        setCursorVisible,
        isHoveringDraggable,
        setHoveringDraggable,
        // --- REMOVED --- mouseDetected,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
