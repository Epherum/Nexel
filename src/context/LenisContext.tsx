// src/context/LenisContext.tsx
"use client";

import { createContext, useContext } from "react";

// Define the shape of the context data
interface LenisContextType {
  start: () => void;
  stop: () => void;
}

// Create the context with default empty functions
const LenisContext = createContext<LenisContextType>({
  start: () => console.warn("LenisContext: start() called before provider"),
  stop: () => console.warn("LenisContext: stop() called before provider"),
});

// Create a custom hook for easy consumption
export const useLenisControls = () => {
  return useContext(LenisContext);
};

// Export the Provider component
export const LenisProvider = LenisContext.Provider;
