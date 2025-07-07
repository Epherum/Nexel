"use client";

import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the context data
interface CursorContextType {
  isHoveringLink: boolean;
  setHoveringLink: (isHovering: boolean) => void;
}

// Create the context with a default value
export const CursorContext = createContext<CursorContextType>({
  isHoveringLink: false,
  setHoveringLink: () => {},
});

// Create a provider component
export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHoveringLink, setHoveringLink] = useState(false);

  return (
    <CursorContext.Provider value={{ isHoveringLink, setHoveringLink }}>
      {children}
    </CursorContext.Provider>
  );
};
